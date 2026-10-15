// lib/football-database/service.ts

import { getFootballDatabaseClient } from "./client";

const BIGBALLS_BASE_URL = "https://api.bigballsdata.com";

const MAX_DAILY_CALLS = 180;
const CACHE_TTL_MS = 15 * 60 * 1000;

type BigBallsTeam = {
  id?: string;
  name?: string;
  short_name?: string;
  logo_url?: string;
};

type BigBallsMatch = {
  id: string;
  sport?: string;
  league?: string;
  home?: BigBallsTeam;
  away?: BigBallsTeam;
  kickoff_utc?: string | null;
  status?: string | null;
  score?: {
    home?: number | null;
    away?: number | null;
  } | null;
  has_odds?: boolean;
  [key: string]: unknown;
};

type BigBallsResponse = {
  success?: boolean;
  data?: BigBallsMatch[] | {
    matches?: BigBallsMatch[];
  };
  matches?: BigBallsMatch[];
};

export type FootballDatabaseMatch = {
  id: string;
  league: string;
  kickoff_utc: string | null;
  status: string | null;
  home: BigBallsTeam;
  away: BigBallsTeam;
  score: {
    home: number | null;
    away: number | null;
  };
  has_odds: boolean;
  [key: string]: unknown;
};

function getBigBallsApiKey(): string {
  const apiKey = process.env.BIGBALLS_API_KEY;

  if (!apiKey) {
    throw new Error(
      "La variable BIGBALLS_API_KEY est absente de l'environnement serveur."
    );
  }

  return apiKey;
}

function normalizeMatch(
  match: BigBallsMatch
): FootballDatabaseMatch | null {
  if (!match.id || !match.league) {
    return null;
  }

  return {
    ...match,
    id: match.id,
    league: match.league,
    kickoff_utc: match.kickoff_utc ?? null,
    status: match.status ?? null,
    home: match.home ?? {},
    away: match.away ?? {},
    score: {
      home: match.score?.home ?? null,
      away: match.score?.away ?? null,
    },
    has_odds: match.has_odds ?? false,
  };
}

function extractMatches(
  body: BigBallsResponse
): BigBallsMatch[] {
  if (Array.isArray(body.matches)) {
    return body.matches;
  }

  if (Array.isArray(body.data)) {
    return body.data;
  }

  if (
    body.data &&
    !Array.isArray(body.data) &&
    Array.isArray(body.data.matches)
  ) {
    return body.data.matches;
  }

  return [];
}

/**
 * Lit les matchs conservés dans Supabase.
 * Cette fonction ne déclenche aucun appel à Big Balls Data.
 */
export async function getStoredMatches(options?: {
  league?: string;
  date?: string;
  limit?: number;
}) {
  const supabase = getFootballDatabaseClient();

  let query = supabase
    .from("football_database_matches")
    .select("*")
    .order("kickoff_utc", { ascending: true })
    .limit(options?.limit ?? 100);

  if (options?.league) {
    query = query.eq("league", options.league);
  }

  if (options?.date) {
    const start = new Date(`${options.date}T00:00:00.000Z`);
    const end = new Date(`${options.date}T23:59:59.999Z`);

    if (
      Number.isNaN(start.getTime()) ||
      Number.isNaN(end.getTime())
    ) {
      throw new Error("La date fournie est invalide.");
    }

    query = query
      .gte("kickoff_utc", start.toISOString())
      .lte("kickoff_utc", end.toISOString());
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(
      `Impossible de lire les matchs dans Supabase : ${error.message}`
    );
  }

  return (data ?? []).map((row) => ({
    ...row.payload,
    id: row.match_id,
    league: row.league,
    kickoff_utc: row.kickoff_utc,
    status: row.status,
    home: row.payload?.home ?? {},
    away: row.payload?.away ?? {},
    score: {
      home: row.home_score,
      away: row.away_score,
    },
  }));
}

/**
 * Récupère les matchs depuis Big Balls Data et les enregistre
 * dans Supabase.
 *
 * Le quota est réservé avant l'appel externe.
 * Une réservation refusée empêche tout nouvel appel API.
 */
export async function refreshFootballDatabaseMatches(options?: {
  date?: string;
  league?: string;
}) {
  const apiKey = getBigBallsApiKey();
  const supabase = getFootballDatabaseClient();

  // Réservation atomique d'un appel dans le quota quotidien.
  const { data: reservedCount, error: quotaError } =
    await supabase.rpc("reserve_football_database_call", {
      p_max_calls: MAX_DAILY_CALLS,
    });

  if (quotaError) {
    throw new Error(
      `Impossible de vérifier le quota Big Balls : ${quotaError.message}`
    );
  }

  if (
    typeof reservedCount !== "number" ||
    reservedCount < 1
  ) {
    throw new Error(
      `Quota quotidien Big Balls atteint : maximum ${MAX_DAILY_CALLS} appels.`
    );
  }

  const url = new URL("/v1/matches", BIGBALLS_BASE_URL);

  url.searchParams.set("sport", "football");
  url.searchParams.set("limit", "100");

  if (options?.date) {
    url.searchParams.set("date", options.date);
  }

  if (options?.league) {
    url.searchParams.set("league", options.league);
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  let response: Response;

  try {
    response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: "application/json",
      },
      cache: "no-store",
      signal: controller.signal,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erreur inconnue";

    throw new Error(
      `La requête Big Balls Data a échoué : ${message}`
    );
  } finally {
    clearTimeout(timeout);
  }

  if (!response.ok) {
    throw new Error(
      `Big Balls Data a répondu avec le statut HTTP ${response.status}.`
    );
  }

  const body = (await response.json()) as BigBallsResponse;
  const rawMatches = extractMatches(body);

  const matches = rawMatches
    .map(normalizeMatch)
    .filter(
      (match): match is FootballDatabaseMatch => match !== null
    );

  if (matches.length === 0) {
    return {
      success: true,
      count: 0,
      matches: [],
      quota: {
        reservedCallsToday: reservedCount,
        dailyLimit: MAX_DAILY_CALLS,
      },
    };
  }

  const rows = matches.map((match) => ({
    match_id: match.id,
    league: match.league,
    kickoff_utc: match.kickoff_utc,
    status: match.status,
    home_team: match.home.name ?? "Équipe inconnue",
    away_team: match.away.name ?? "Équipe inconnue",
    home_score: match.score.home,
    away_score: match.score.away,
    payload: match,
    updated_at: new Date().toISOString(),
  }));

  const { error: saveError } = await supabase
    .from("football_database_matches")
    .upsert(rows, {
      onConflict: "match_id",
    });

  if (saveError) {
    throw new Error(
      `Impossible d'enregistrer les matchs : ${saveError.message}`
    );
  }

  return {
    success: true,
    count: matches.length,
    matches,
    quota: {
      reservedCallsToday: reservedCount,
      dailyLimit: MAX_DAILY_CALLS,
    },
  };
}
