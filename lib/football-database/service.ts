// lib/football-database/service.ts

import { getFootballDatabaseClient } from "./client";

const BIGBALLS_BASE_URL = "https://api.bigballsdata.com";

const MAX_DAILY_CALLS = 180;
const CACHE_TTL_MS = 15 * 60 * 1000;
const LOCK_SECONDS = 120;
const REQUEST_TIMEOUT_MS = 15000;

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
  data?:
    | BigBallsMatch[]
    | {
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

type CachedMatches = {
  matches: FootballDatabaseMatch[];
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

function getCacheKey(options?: {
  date?: string;
  league?: string;
}): string {
  return [
    "matches",
    options?.date ?? "all",
    options?.league ?? "all",
  ].join(":");
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

function readCachedMatches(
  payload: unknown
): FootballDatabaseMatch[] | null {
  if (
    !payload ||
    typeof payload !== "object" ||
    !("matches" in payload)
  ) {
    return null;
  }

  const matches = (payload as CachedMatches).matches;

  return Array.isArray(matches) ? matches : null;
}

function formatResult(
  matches: FootballDatabaseMatch[],
  extra: {
    cached?: boolean;
    stale?: boolean;
    reservedCallsToday?: number;
  } = {}
) {
  return {
    success: true,
    count: matches.length,
    matches,
    cached: extra.cached ?? false,
    stale: extra.stale ?? false,
    ...(extra.reservedCallsToday !== undefined
      ? {
          quota: {
            reservedCallsToday: extra.reservedCallsToday,
            dailyLimit: MAX_DAILY_CALLS,
          },
        }
      : {}),
  };
}

/**
 * Lit uniquement les matchs déjà stockés dans Supabase.
 * Aucun appel à Big Balls Data n'est effectué ici.
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
 * Actualise le cache partagé.
 *
 * 1. Lit le cache Supabase.
 * 2. Si le cache est encore valide, ne fait aucun appel externe.
 * 3. Réserve le renouvellement pour éviter les appels simultanés.
 * 4. Vérifie le quota quotidien avant tout appel externe.
 * 5. Enregistre les résultats et leur expiration.
 */
export async function refreshFootballDatabaseMatches(options?: {
  date?: string;
  league?: string;
}) {
  const supabase = getFootballDatabaseClient();
  const cacheKey = getCacheKey(options);

  const { data: initialCache, error: initialCacheError } =
    await supabase
      .from("football_database_cache")
      .select(
        "cache_key, payload, updated_at, expires_at, refresh_lock_until, refresh_token"
      )
      .eq("cache_key", cacheKey)
      .maybeSingle();

  if (initialCacheError) {
    throw new Error(
      `Impossible de lire le cache Supabase : ${initialCacheError.message}`
    );
  }

  const now = Date.now();

  if (
    initialCache &&
    new Date(initialCache.expires_at).getTime() > now
  ) {
    const cachedMatches = readCachedMatches(initialCache.payload);

    if (cachedMatches !== null) {
      return formatResult(cachedMatches, {
        cached: true,
      });
    }
  }

  // Un seul processus peut réserver le renouvellement de cette clé.
  const { data: claimed, error: claimError } = await supabase.rpc(
    "claim_football_database_cache_refresh",
    {
      p_cache_key: cacheKey,
      p_lock_seconds: LOCK_SECONDS,
    }
  );

  if (claimError) {
    throw new Error(
      `Impossible de réserver le renouvellement du cache : ${claimError.message}`
    );
  }

  if (claimed !== true) {
    // Un autre processus renouvelle probablement déjà le cache.
    // On privilégie les anciennes données disponibles plutôt
    // que de déclencher un second appel API.
    if (initialCache) {
      const previousMatches = readCachedMatches(
        initialCache.payload
      );

      if (previousMatches !== null) {
        return formatResult(previousMatches, {
          cached: true,
          stale: true,
        });
      }
    }

    // Le cache a pu être rempli entre notre première lecture
    // et la tentative de réservation : on le vérifie à nouveau.
    const { data: latestCache, error: latestCacheError } =
      await supabase
        .from("football_database_cache")
        .select("payload, expires_at")
        .eq("cache_key", cacheKey)
        .maybeSingle();

    if (latestCacheError) {
      throw new Error(
        `Impossible de relire le cache : ${latestCacheError.message}`
      );
    }

    if (
      latestCache &&
      new Date(latestCache.expires_at).getTime() > Date.now()
    ) {
      const latestMatches = readCachedMatches(
        latestCache.payload
      );

      if (latestMatches !== null) {
        return formatResult(latestMatches, {
          cached: true,
        });
      }
    }

    throw new Error(
      "Le renouvellement du cache est déjà en cours. Réessaie dans quelques instants."
    );
  }

  // Récupération du jeton attribué à ce processus.
  const { data: lockRow, error: lockError } = await supabase
    .from("football_database_cache")
    .select("refresh_token")
    .eq("cache_key", cacheKey)
    .maybeSingle();

  if (lockError || !lockRow?.refresh_token) {
    throw new Error(
      "Impossible de confirmer le verrouillage du cache."
    );
  }

  const refreshToken = lockRow.refresh_token;

  try {
    const apiKey = getBigBallsApiKey();

    // Réservation atomique du quota quotidien.
    // Aucun appel externe n'est effectué si cette réservation échoue.
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
    const timeout = setTimeout(
      () => controller.abort(),
      REQUEST_TIMEOUT_MS
    );

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
    } finally {
      clearTimeout(timeout);
    }

    if (!response.ok) {
      throw new Error(
        `Big Balls Data a répondu avec le statut HTTP ${response.status}.`
      );
    }

    const body = (await response.json()) as BigBallsResponse;

    const matches = extractMatches(body)
      .map(normalizeMatch)
      .filter(
        (match): match is FootballDatabaseMatch =>
          match !== null
      );

    // Enregistrer les matchs reçus.
    if (matches.length > 0) {
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

      const { error: saveMatchesError } = await supabase
        .from("football_database_matches")
        .upsert(rows, {
          onConflict: "match_id",
        });

      if (saveMatchesError) {
        throw new Error(
          `Impossible d'enregistrer les matchs : ${saveMatchesError.message}`
        );
      }
    }

    // Le cache est valide pendant 15 minutes, même si la réponse
    // contient zéro match. Cela évite de rappeler l'API en boucle.
    const savedAt = new Date();
    const expiresAt = new Date(
      savedAt.getTime() + CACHE_TTL_MS
    );

    const { data: updatedCache, error: saveCacheError } =
      await supabase
        .from("football_database_cache")
        .update({
          payload: {
            matches,
          },
          updated_at: savedAt.toISOString(),
          expires_at: expiresAt.toISOString(),
          refresh_lock_until: null,
          refresh_token: null,
        })
        .eq("cache_key", cacheKey)
        .eq("refresh_token", refreshToken)
        .select("cache_key")
        .maybeSingle();

    if (saveCacheError || !updatedCache) {
      throw new Error(
        saveCacheError
          ? `Impossible d'enregistrer le cache : ${saveCacheError.message}`
          : "Le verrou du cache a changé avant la fin du renouvellement."
      );
    }

    return formatResult(matches, {
      cached: false,
      reservedCallsToday: reservedCount,
    });
  } catch (error) {
    // En cas d'échec, libérer le verrou pour autoriser une nouvelle
    // tentative. Le compteur de quota reste conservé si un appel
    // avait déjà été réservé.
    await supabase
      .from("football_database_cache")
      .update({
        expires_at: new Date().toISOString(),
        refresh_lock_until: null,
        refresh_token: null,
      })
      .eq("cache_key", cacheKey)
      .eq("refresh_token", refreshToken);

    throw error;
  }
}
