import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const runtime = "nodejs";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("football_cache")
      .select("data, updated_at")
      .eq("cache_key", "fixtures_today")
      .maybeSingle();

    if (error) {
      console.error("Erreur Supabase :", error.message);

      return NextResponse.json(
        { error: "Impossible de récupérer les fixtures." },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json(
        {
          error: "Aucune donnée de fixtures disponible.",
          fixtures: [],
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      fixtures: data.data?.response ?? [],
      updated_at: data.updated_at,
    });
  } catch (error) {
    console.error("Erreur route fixtures :", error);

    return NextResponse.json(
      { error: "Erreur interne." },
      { status: 500 }
    );
  }
}
