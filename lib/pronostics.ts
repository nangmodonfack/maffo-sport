Import type { ApiFootballFixture } from "./api-football";

export type Pronostic = {
  fixture: ApiFootballFixture;
  market: string;
  prediction: string;
  confidence: number;
  reason: string;
};

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
    .map(getPredictionFromFixture)
    .filter(
      (pronostic): pronostic is Pronostic =>
        pronostic !== null
    );
}
