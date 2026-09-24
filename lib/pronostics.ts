import type { ApiFootballFixture } from "./api-football";

export type Pronostic = {
  fixture: ApiFootballFixture;
  market: string;
  prediction: string;
  confidence: number;
  reason: string;
};

/**
 * Compétitions analysées en priorité par Maffo Sport.
 */
const PRIORITY_LEAGUES = new Set([
  39,  // Premier League
  140, // La Liga
  61,  // Ligue 1
  135, // Serie A
  78,  // Bundesliga
  2,   // Champions League
  3,   // Europa League
  12,  // CAF Champions League
]);

function getPredictionFromFixture(
  fixture: ApiFootballFixture
): Pronostic | null {
  const home = fixture.teams.home;
  const away = fixture.teams.away;

  if (!home?.id || !away?.id) {
    return null;
  }

  return {
    fixture,
    market: "Analyse à venir",
    prediction: "En attente d'analyse",
    confidence: 0,
    reason:
      "Les statistiques nécessaires à l'analyse de cette rencontre seront utilisées avant la sélection finale.",
  };
}

export function generatePronostics(
  fixtures: ApiFootballFixture[]
): Pronostic[] {
  return fixtures
    .filter((fixture) => {
      const status = fixture.fixture.status.short;

      return ![
        "FT",
        "AET",
        "PEN",
        "CANC",
        "PST",
        "ABD",
      ].includes(status);
    })
    .filter((fixture) => {
      return PRIORITY_LEAGUES.has(fixture.league.id);
    })
    .map(getPredictionFromFixture)
    .filter(
      (pronostic): pronostic is Pronostic =>
        pronostic !== null
    );
}
