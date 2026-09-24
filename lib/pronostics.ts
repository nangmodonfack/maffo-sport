import {
  getTeamStatistics,
  type ApiFootballFixture,
  type ApiFootballTeamStatistics,
} from "./api-football";

export type Pronostic = {
  fixture: ApiFootballFixture;
  market: string;
  prediction: string;
  confidence: number;
  reason: string;
};

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

const MAX_MATCHES_TO_ANALYZE = 4;

function average(value: string | number | undefined): number {
  const numberValue =
    typeof value === "number"
      ? value
      : Number.parseFloat(value ?? "");

  return Number.isFinite(numberValue) ? numberValue : 0;
}

function getTeamStrength(
  stats: ApiFootballTeamStatistics | null,
  venue: "home" | "away"
) {
  if (!stats?.league) {
    return null;
  }

  const fixtures = stats.league.fixtures;
  const goals = stats.league.goals;

  const played = fixtures.played[venue];
  const wins = fixtures.wins[venue];
  const draws = fixtures.draws[venue];
  const loses = fixtures.loses[venue];

  if (!played || played < 3) {
    return null;
  }

  const winRate = wins / played;
  const drawRate = draws / played;
  const loseRate = loses / played;

  const goalsFor = average(goals.for.average[venue]);
  const goalsAgainst = average(goals.against.average[venue]);

  return {
    played,
    winRate,
    drawRate,
    loseRate,
    goalsFor,
    goalsAgainst,
  };
}

function analyseMatch(
  fixture: ApiFootballFixture,
  homeStats: ApiFootballTeamStatistics | null,
  awayStats: ApiFootballTeamStatistics | null
): Pronostic | null {
  const home = fixture.teams.home;
  const away = fixture.teams.away;

  const homeStrength = getTeamStrength(homeStats, "home");
  const awayStrength = getTeamStrength(awayStats, "away");

  if (!homeStrength || !awayStrength) {
    return null;
  }

  const homeScore =
    homeStrength.winRate * 2 +
    homeStrength.goalsFor * 0.5 -
    homeStrength.goalsAgainst * 0.3;

  const awayScore =
    awayStrength.winRate * 2 +
    awayStrength.goalsFor * 0.5 -
    awayStrength.goalsAgainst * 0.3;

  const difference = homeScore - awayScore;

  const totalGoals =
    homeStrength.goalsFor +
    awayStrength.goalsFor;

  const totalGoalsAgainst =
    homeStrength.goalsAgainst +
    awayStrength.goalsAgainst;

  const expectedGoals =
    (totalGoals + totalGoalsAgainst) / 2;

  let market: string;
  let prediction: string;
  let confidence: number;
  let reason: string;

  if (difference >= 0.55) {
    market = "Double chance";
    prediction = "1X";

    confidence = Math.min(
      86,
      Math.round(62 + difference * 15)
    );

    reason =
      `${home.name} présente de meilleurs indicateurs à domicile ` +
      `que ${away.name} à l'extérieur : taux de victoire, ` +
      `production offensive et équilibre défensif.`;
  } else if (difference <= -0.55) {
    market = "Double chance";
    prediction = "X2";

    confidence = Math.min(
      86,
      Math.round(62 + Math.abs(difference) * 15)
    );

    reason =
      `${away.name} présente de meilleurs indicateurs à l'extérieur ` +
      `que ${home.name} à domicile sur les statistiques disponibles.`;
  } else if (expectedGoals >= 2.7) {
    market = "Total de buts";
    prediction = "Plus de 1,5 buts";

    confidence = Math.min(
      82,
      Math.round(64 + (expectedGoals - 2.7) * 10)
    );

    reason =
      `Les statistiques offensives et défensives des deux équipes ` +
      `indiquent un potentiel de buts supérieur à la moyenne.`;
  } else {
    market = "Double chance";
    prediction = "1X";

    confidence = 58;

    reason =
      `Les indicateurs sont relativement équilibrés. Le marché ` +
      `double chance est retenu plutôt qu'une victoire sèche.`;
  }

  return {
    fixture,
    market,
    prediction,
    confidence,
    reason,
  };
}

async function analyseFixture(
  fixture: ApiFootballFixture
): Promise<Pronostic | null> {
  const home = fixture.teams.home;
  const away = fixture.teams.away;

  if (!home?.id || !away?.id) {
    return null;
  }

  try {
    const [homeStats, awayStats] = await Promise.all([
      getTeamStatistics(
        home.id,
        fixture.league.id,
        fixture.league.season
      ),
      getTeamStatistics(
        away.id,
        fixture.league.id,
        fixture.league.season
      ),
    ]);

    return analyseMatch(
      fixture,
      homeStats,
      awayStats
    );
  } catch (error) {
    console.error(
      `Erreur analyse ${home.name} - ${away.name}:`,
      error
    );

    return null;
  }
}

export async function generatePronostics(
  fixtures: ApiFootballFixture[]
): Promise<Pronostic[]> {
  const eligibleFixtures = fixtures
    .filter((fixture) => {
      const status = fixture.fixture.status.short;

      return ["NS", "TBD"].includes(status);
    })
    .filter((fixture) => {
      return PRIORITY_LEAGUES.has(fixture.league.id);
    })
    .sort((a, b) => {
      return (
        new Date(a.fixture.date).getTime() -
        new Date(b.fixture.date).getTime()
      );
    })
    .slice(0, MAX_MATCHES_TO_ANALYZE);

  const results = await Promise.all(
    eligibleFixtures.map(analyseFixture)
  );

  return results.filter(
    (pronostic): pronostic is Pronostic =>
      pronostic !== null
  );
}
