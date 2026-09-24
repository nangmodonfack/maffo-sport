const BASE_URL = "https://v3.football.api-sports.io";

export type ApiFootballFixture = {
  fixture: {
    id: number;
    date: string;
    status: {
      short: string;
      long: string;
      elapsed: number | null;
    };
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo?: string;
    season: number;
  };
  teams: {
    home: {
      id: number;
      name: string;
      logo?: string;
      winner?: boolean | null;
    };
    away: {
      id: number;
      name: string;
      logo?: string;
      winner?: boolean | null;
    };
  };
  goals: {
    home: number | null;
    away: number | null;
  };
};

export type ApiFootballStanding = {
  rank: number;
  team: {
    id: number;
    name: string;
    logo?: string;
  };
  points: number;
  goalsDiff: number;
  form: string | null;
  all: {
    played: number;
    win: number;
    draw: number;
    lose: number;
  };
};

export type ApiFootballTeamStatistics = {
  league: {
    fixtures: {
      played: {
        home: number;
        away: number;
        total: number;
      };
      wins: {
        home: number;
        away: number;
        total: number;
      };
      draws: {
        home: number;
        away: number;
        total: number;
      };
      loses: {
        home: number;
        away: number;
        total: number;
      };
    };
    goals: {
      for: {
        total: {
          home: number;
          away: number;
          total: number;
        };
        average: {
          home: string;
          away: string;
          total: string;
        };
      };
      against: {
        total: {
          home: number;
          away: number;
          total: number;
        };
        average: {
          home: string;
          away: string;
          total: string;
        };
      };
    };
    form: string | null;
  };
};

export type ApiFootballH2H = {
  fixture: {
    id: number;
    date: string;
    status: {
      short: string;
      long: string;
      elapsed: number | null;
    };
  };
  league: {
    id: number;
    name: string;
    country: string;
  };
  teams: {
    home: {
      id: number;
      name: string;
      logo?: string;
    };
    away: {
      id: number;
      name: string;
      logo?: string;
    };
  };
  goals: {
    home: number | null;
    away: number | null;
  };
};

async function apiFootball<T>(
  path: string,
  revalidate = 600
): Promise<T> {
  const key = process.env.API_FOOTBALL_KEY;

  if (!key) {
    throw new Error("API_FOOTBALL_KEY is not configured");
  }

  const response = await fetch(`${BASE_URL}${path}`, {
    headers: {
      "x-apisports-key": key,
    },
    next: {
      revalidate,
    },
  });

  if (!response.ok) {
    const responseText = await response.text();

    throw new Error(
      `API-Football ${response.status}: ${responseText.slice(0, 300)}`
    );
  }

  const data = await response.json();

  if (data.errors && Object.keys(data.errors).length > 0) {
    throw new Error(
      `API-Football: ${JSON.stringify(data.errors)}`
    );
  }

  return data.response as T;
}

export async function getFixtures(date: string) {
  return apiFootball<ApiFootballFixture[]>(
    `/fixtures?date=${encodeURIComponent(
      date
    )}&timezone=Africa%2FDouala`,
    300
  );
}

export async function getStandings(
  leagueId: number,
  season: number
) {
  return apiFootball<
    Array<{
      league: {
        standings: ApiFootballStanding[][];
      };
    }>
  >(
    `/standings?league=${leagueId}&season=${season}`,
    3600
  );
}

export async function getTeamStatistics(
  teamId: number,
  leagueId: number,
  season: number
) {
  return apiFootball<ApiFootballTeamStatistics>(
    `/teams/statistics?team=${teamId}&league=${leagueId}&season=${season}`,
    3600
  );
}

export async function getHeadToHead(
  homeTeamId: number,
  awayTeamId: number,
  last = 5
) {
  return apiFootball<ApiFootballH2H[]>(
    `/fixtures/headtohead?h2h=${homeTeamId}-${awayTeamId}&last=${last}`,
    3600
  );
}
