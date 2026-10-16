import { NextRequest, NextResponse } from "next/server";
import { getStoredMatches } from "@/lib/football-database/service";

export const dynamic = "force-dynamic";

const ALLOWED_LEAGUES = [
  "EPL",
  "La Liga",
  "Ligue 1",
  "Serie A",
  "Bundesliga",
  "UEFA Champions League",
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const league = searchParams.get("league");
    const date = searchParams.get("date");
    const requestedLimit = Number(searchParams.get("limit") ?? 50);

    if (!league || !ALLOWED_LEAGUES.includes(league)) {
      return NextResponse.json(
        {
          success: false,
          error: "Compétition invalide ou manquante.",
          matches: [],
        },
        { status: 400 }
      );
    }

    if (
      date &&
      !/^\d{4}-\d{2}-\d{2}$/.test(date)
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "La date doit respecter le format AAAA-MM-JJ.",
          matches: [],
        },
        { status: 400 }
      );
    }

    const limit = Number.isFinite(requestedLimit)
      ? Math.min(Math.max(Math.trunc(requestedLimit), 1), 100)
      : 50;

    const matches = await getStoredMatches({
      league,
      ...(date ? { date } : {}),
      limit,
    });

    const formattedMatches = matches.map((match) => ({
      id: match.id,
      league: match.league,
      kickoff_utc: match.kickoff_utc,
      status: match.status,
      home: {
        name: match.home?.name ?? "Équipe à confirmer",
        logo_url: match.home?.logo_url ?? null,
      },
      away: {
        name: match.away?.name ?? "Équipe à confirmer",
        logo_url: match.away?.logo_url ?? null,
      },
      score: {
        home: match.score?.home ?? null,
        away: match.score?.away ?? null,
      },
    }));

    return NextResponse.json(
      {
        success: true,
        count: formattedMatches.length,
        matches: formattedMatches,
      },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      }
    );
  } catch (error) {
    console.error("Erreur de lecture des matchs :", error);

    return NextResponse.json(
      {
        success: false,
        error: "Impossible de récupérer les matchs pour le moment.",
        matches: [],
      },
      { status: 500 }
    );
  }
}
