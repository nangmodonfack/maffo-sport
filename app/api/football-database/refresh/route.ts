// app/api/football-database/refresh/route.ts

import { NextRequest, NextResponse } from "next/server";
import { refreshFootballDatabaseMatches } from "@/lib/football-database/service";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const secret = process.env.FOOTBALL_DATABASE_CRON_SECRET;

  if (!secret) {
    return NextResponse.json(
      {
        success: false,
        message: "La configuration du renouvellement est incomplète.",
      },
      { status: 500 }
    );
  }

  const authorization = request.headers.get("authorization");

  if (authorization !== `Bearer ${secret}`) {
    return NextResponse.json(
      {
        success: false,
        message: "Accès non autorisé.",
      },
      { status: 401 }
    );
  }

  try {
    const result = await refreshFootballDatabaseMatches();

    return NextResponse.json({
      success: true,
      message: "Traitement du cache terminé.",
      count: result.count,
      cached: result.cached,
      stale: result.stale,
      quota: result.quota ?? null,
    });
  } catch (error) {
    console.error(
      "[Football Database] Échec du renouvellement.",
      error instanceof Error ? error.message : "Erreur inconnue"
    );

    return NextResponse.json(
      {
        success: false,
        message: "Le renouvellement des données a échoué.",
      },
      { status: 500 }
    );
  }
}
