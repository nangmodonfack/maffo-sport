import { NextResponse } from "next/server";
import { getFootballDatabaseClient } from "@/lib/football-database/client";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const supabase = getFootballDatabaseClient();

    // Vérifie l'accès à la table, sans modifier ses données.
    const { error: readError } = await supabase
      .from("football_database_matches")
      .select("match_id")
      .limit(1);

    if (readError) {
      return NextResponse.json(
        {
          success: false,
          step: "supabase_read",
          message: readError.message,
        },
        { status: 500 }
      );
    }

    // Teste la fonction de quota.
    // Cela réserve une unité, mais n'appelle pas Big Balls Data.
    const { data, error } = await supabase.rpc(
      "reserve_football_database_call",
      { p_max_calls: 180 }
    );

    if (error) {
      return NextResponse.json(
        {
          success: false,
          step: "quota_rpc",
          message: error.message,
        },
        { status: 500 }
      );
    }

    if (typeof data !== "number" || data < 1) {
      return NextResponse.json(
        {
          success: false,
          step: "quota_limit",
          message:
            "La fonction répond, mais aucune réservation n'a été accordée.",
        },
        { status: 429 }
      );
    }

    return NextResponse.json({
      success: true,
      supabaseRead: true,
      quotaRpc: true,
      reservedCallsToday: data,
      dailyLimit: 180,
      bigBallsApiCalled: false,
      message:
        "La connexion Supabase et la réservation du quota fonctionnent.",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message:
          "Erreur de diagnostic. Vérifie les variables serveur.",
      },
      { status: 500 }
    );
  }
}
