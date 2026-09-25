// lib/bigballs.ts

const BASE_URL = "https://api.bigballsdata.com";

const DEFAULT_CACHE_TTL = 5 * 60 * 1000; // 5 minutes
const FORM_CACHE_TTL = 60 * 60 * 1000; // 1 heure
const STANDINGS_CACHE_TTL = 6 * 60 * 60 * 1000; // 6 heures
const DETAILS_CACHE_TTL = 10 * 60 * 1000; // 10 minutes

const MAX_REQUESTS_PER_MINUTE = 90;
const MAX_RETRIES = 2;

type CacheEntry<T> = {
  data: T;
  expiresAt: number;
};

type Match = {
  id: string;
  sport: string;
  league: string;
  home: {
    id: string;
    name: string;
    short_name?: string;
    logo_url?: string;
  };
  away: {
    id: string;
    name: string;
    short_name?: string;
    logo_url?: string;
  };
  kickoff_utc: string;
  status: string;
  score?: {
    home: number;
    away: number;
  } | null;
  linescore?: unknown;
  attendance?: number | null;
  broadcast?: string | null;
  round?: string | null;
  has_odds?: boolean;
};

type FormMatch = {
  match_id?: string;
  date?: string;
  kickoff_utc?: string;
  home?: string;
  away?: string;
  opponent?: string;
  home_score?: number;
  away_score?: number;
  score?: {
    for?: number;
    against?: number;
  };
  result?: "W" | "D" | "L" | string;
  competition?: string;
};

type ApiResponse<T> = {
  data: T;
  meta?: {
    source?: string;
    cached?: boolean;
    request_id?: string;
    confidence?: number;
    [key: string]: unknown;
  };
  error?: unknown;
  [key: string]: unknown;
};

/**
 * Cache mémoire.
 *
 * Il évite les appels identiques répétés sur une même instance
 * Vercel et permet également de réutiliser une réponse en cas
 * de problème temporaire avec l'API.
 */
const cache = new Map<string, CacheEntry<unknown>>();

/**
 * Requêtes actuellement en cours.
 *
 * Si plusieurs composants demandent exactement la même donnée
 * en même temps, une seule requête est envoyée à Big Balls.
 */
const inFlight = new Map<string, Promise<unknown>>();

/**
 * Historique local des appels.
 *
 * Protection supplémentaire contre une explosion de requêtes
 * sur une même instance.
 */
const requestTimestamps: number[] = [];

function getApiKey(): string {
  const key = process.env.BIGBALLS_API_KEY;

  if (!key) {
    throw new Error("BIGBALLS_API_KEY is not configured.");
  }

  return key;
}

function buildUrl(
  path: string,
  params?: Record<string, string | number | undefined | null>,
): string {
  const url = new URL(`${BASE_URL}${path}`);

  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null && value !== "") {
        url.searchParams.set(key, String(value));
      }
    }
  }

  return url.toString();
}

function getCached<T>(key: string): T | null {
  const entry = cache.get(key) as CacheEntry<T> | undefined;

  if (!entry) {
    return null;
  }

  if (Date.now() >= entry.expiresAt) {
    cache.delete(key);
    return null;
  }

  return entry.data;
}

function setCached<T>(key: string, data: T, ttl: number): void {
  cache.set(key, {
    data,
    expiresAt: Date.now() + ttl,
  });
}

function cleanRequestHistory(): void {
  const oneMinuteAgo = Date.now() - 60_000;

  while (
    requestTimestamps.length > 0 &&
    requestTimestamps[0] < oneMinuteAgo
  ) {
    requestTimestamps.shift();
  }
}

function canMakeRequest(): boolean {
  cleanRequestHistory();
  return requestTimestamps.length < MAX_REQUESTS_PER_MINUTE;
}

function registerRequest(): void {
  cleanRequestHistory();
  requestTimestamps.push(Date.now());
}

function getRetryDelay(
  response: Response,
  attempt: number,
): number {
  const retryAfter = response.headers.get("retry-after");

  if (retryAfter) {
    const seconds = Number(retryAfter);

    if (Number.isFinite(seconds)) {
      return Math.min(seconds * 1000, 10_000);
    }
  }

  return Math.min(500 * 2 ** attempt, 4_000);
}

async function fetchBigBalls<T>(
  path: string,
  params: Record<string, string | number | undefined | null> = {},
  options: {
    cacheKey?: string;
    cacheTtl?: number;
  } = {},
): Promise<T> {
  const cacheKey =
    options.cacheKey ??
    buildUrl(path, params);
  const cached = getCached<T>(cacheKey);

  if (cached !== null) {
    return cached;
  }

  const existingRequest = inFlight.get(cacheKey) as Promise<T> | undefined;

  if (existingRequest) {
    return existingRequest;
  }

  const requestPromise = (async () => {
    try {
      if (!canMakeRequest()) {
        throw new Error(
          "Big Balls local rate limit reached. Please use cached data or try again shortly.",
        );
      }

      registerRequest();

      const url = buildUrl(path, params);
      const apiKey = getApiKey();

      let lastError: Error | null = null;

      for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
        try {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              Authorization: Bearer ${apiKey},
              Accept: "application/json",
            },
            cache: "no-store",
          });

          if (response.ok) {
            const body = (await response.json()) as ApiResponse<T>;

            if (body.error) {
              throw new Error(
                Big Balls API error: ${JSON.stringify(body.error)},
              );
            }

            const data = body.data;

            if (data !== undefined && data !== null) {
              setCached(
                cacheKey,
                data,
                options.cacheTtl ?? DEFAULT_CACHE_TTL,
              );
            }

            return data;
          }

          if (
            response.status === 429 &&
            attempt < MAX_RETRIES
          ) {
            const delay = getRetryDelay(response, attempt);

            await new Promise((resolve) =>
              setTimeout(resolve, delay),
            );

            continue;
          }

          const errorText = await response.text();

          lastError = new Error(
            Big Balls API returned ${response.status}: ${errorText},
          );

          break;
        } catch (error) {
          lastError =
            error instanceof Error
              ? error
              : new Error("Unknown Big Balls API error.");

          if (attempt < MAX_RETRIES) {
            const delay = Math.min(
              500 * 2 ** attempt,
              4_000,
            );

            await new Promise((resolve) =>
              setTimeout(resolve, delay),
            );
          }
        }
      }

      /**
       * Si l'API échoue mais qu'une ancienne donnée existe encore
       * dans le cache mémoire, on préfère cette donnée à une erreur.
       */
      const staleEntry = cache.get(cacheKey) as
        | CacheEntry<T>
        | undefined;

      if (staleEntry) {
        return staleEntry.data;
      }

      throw (
        lastError ??
        new Error("Unable to fetch data from Big Balls.")
      );
    } finally {
      inFlight.delete(cacheKey);
    }
  })();

  inFlight.set(cacheKey, requestPromise);

  return requestPromise;
}

/**
 * Récupère les matchs de football.
 *
 * Cette fonction servira de base commune pour :
 * - Matchs à suivre
 * - Résultats
 * - Calendrier
 * - Pronostics
 *
 * tz permet à Big Balls d'interpréter correctement la date
 * selon le fuseau horaire demandé.
 */
export async function getMatches(params: {
  date?: string;
  tz?: string;
  league?: string;
  status?: string;
  limit?: number;
} = {}): Promise<Match[]> {
  const {
    date,
    tz,
    league,
    status,
    limit = 100,
  } = params;

  const cacheKey = buildUrl("/v1/matches", {
    sport: "football",
    date,
    tz,
    league,
    status,
    limit,
  });

  return fetchBigBalls<Match[]>(
    "/v1/matches",
    {
      sport: "football",
      date,
      tz,
      league,
      status,
      limit,
    },
    {
      cacheKey,
      cacheTtl: DEFAULT_CACHE_TTL,
    },
  );
}
/**
 * Récupère le classement d'une compétition.
 *
 * Les classements changent beaucoup moins souvent que les scores,
 * donc on les garde plus longtemps en cache.
 */
export async function getStandings(
  league: string,
  season?: string | number,
): Promise<unknown[]> {
  const cacheKey = buildUrl("/v1/standings", {
    sport: "football",
    league,
    season,
  });

  return fetchBigBalls<unknown[]>(
    "/v1/standings",
    {
      sport: "football",
      league,
      season,
    },
    {
      cacheKey,
      cacheTtl: STANDINGS_CACHE_TTL,
    },
  );
}

/**
 * Forme récente d'une équipe.
 *
 * Utilisée principalement par le moteur de pronostics.
 */
export async function getTeamForm(
  teamId: string,
  limit = 10,
): Promise<FormMatch[]> {
  const cacheKey = buildUrl(
    /v1/teams/${encodeURIComponent(teamId)}/form,
    {
      limit,
    },
  );

  return fetchBigBalls<FormMatch[]>(
    /v1/teams/${encodeURIComponent(teamId)}/form,
    {
      limit,
    },
    {
      cacheKey,
      cacheTtl: FORM_CACHE_TTL,
    },
  );
}

/**
 * Détails d'un match.
 *
 * On demande uniquement les champs nécessaires.
 * Cela évite de récupérer inutilement des données supplémentaires.
 */
export async function getMatchDetails(
  matchId: string,
  fields?: string[],
): Promise<unknown> {
  const fieldsParam = fields?.length
    ? fields.join(",")
    : undefined;

  const cacheKey = buildUrl(
    /v1/matches/${encodeURIComponent(matchId)},
    {
      fields: fieldsParam,
    },
  );

  return fetchBigBalls<unknown>(
    /v1/matches/${encodeURIComponent(matchId)},
    {
      fields: fieldsParam,
    },
    {
      cacheKey,
      cacheTtl: DETAILS_CACHE_TTL,
    },
  );
}

/**
 * Événements d'un match.
 *
 * À utiliser uniquement lorsque nous en avons réellement besoin,
 * par exemple pour enrichir un résultat terminé.
 */
export async function getMatchEvents(
  matchId: string,
): Promise<unknown[]> {
  const cacheKey = buildUrl(
    /v1/matches/${encodeURIComponent(matchId)}/events,
  );

  return fetchBigBalls<unknown[]>(
    /v1/matches/${encodeURIComponent(matchId)}/events,
    {},
    {
      cacheKey,
      cacheTtl: DETAILS_CACHE_TTL,
    },
  );
}
