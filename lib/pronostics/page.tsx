import type { ApiFootballFixture } from "./api-football";

export type Pronostic = {
  fixture: ApiFootballFixture;
  market: string;
  prediction: string;
  confidence: number;
  reason: string;
};

function getTeamFormScore(form: string | null) {
  if (!form) return 0;

  return form
    .slice(-5)
    .split("")
    .reduce((score, result) => {
      if (result === "W") return score + 3;
      if (result === "D") return score + 1;
      return score;
    }, 0);
}

function getPredictionFromFixture(
  fixture: ApiFootballFixture
): Pronostic | null {
  const home = fixture.teams.home;
  const away = fixture.teams.away;

  if (!home?.id || !away?.id) {
    return null;
  }

  /*
   * Pour le moment, cette première version ne prétend pas
   * prédire un résultat à partir de données que nous n'avons pas.
   *
   * Les statistiques détaillées seront ajoutées ensuite.
   * Cette fonction sert donc à préparer une structure propre
   * pour les pronostics de la journée.
   */

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
    .filter((pronostic): pronostic is Pronostic => pronostic !== null);
}
