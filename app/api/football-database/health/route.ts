import { NextResponse } from "next/server";
import { getFootballDatabaseClient } from "@/lib/football-database/client";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const supabase = getFootballDatabaseClient();

    // Vérifie l'accès en lecture à la nouvelle table.
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

    return NextResponse.json({
      success: true,
      message: "Connexion Supabase et lecture de la table réussies.",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "La connexion Supabase a échoué. Vérifie les variables serveur.",
      },
      { status: 500 }
    );
  }
}
