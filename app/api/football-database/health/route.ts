import { NextResponse } from "next/server";
import { getFootballDatabaseClient } from "@/lib/football-database/client";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const supabase = getFootballDatabaseClient();

    // Test de lecture, sans modification des données.
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

    // Vérifie les droits RPC sans appeler la fonction de réservation.
    const { data: rpcInfo, error: rpcError } = await supabase
      .rpc("does_not_exist_football_database_test");

    if (rpcError) {
      const message = rpcError.message.toLowerCase();

      // Une erreur indiquant que la fonction de test n'existe pas
      // montre que la requête RPC a atteint PostgreSQL/PostgREST.
      if (
        message.includes("could not find the function") ||
        message.includes("schema cache") ||
        message.includes("does_not_exist_football_database_test")
      ) {
        return NextResponse.json({
          success: true,
          supabaseRead: true,
          rpcEndpointReachable: true,
          quotaPermission: "not_yet_verified",
          message:
            "Supabase répond aux requêtes RPC. Les droits sur la fonction de quota restent à vérifier.",
        });
      }

      return NextResponse.json(
        {
          success: false,
          step: "rpc_probe",
          message: rpcError.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      supabaseRead: true,
      rpcEndpointReachable: true,
      quotaPermission: "not_yet_verified",
      message: "Diagnostic terminé.",
      details: rpcInfo,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Erreur pendant le diagnostic Supabase.",
      },
      { status: 500 }
    );
  }
}
