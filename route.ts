import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const runtime = "nodejs";
export const revalidate = 3600;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const league = Number(searchParams.get("league") ?? "39");
  const season = Number(
    searchParams.get("season") ?? new Date().getUTCFullYear()
  );

  if (!Number.isInteger(league) || !Number.isInteger(season)) {
    return NextResponse.json(
      { error: "Paramètres invalides" },
      { status: 400 }
    );
  }

  const cacheKey = "standings_" + league + "_" + season;

  try {
    const { data, error } = await supabase
      .from("football_cache")
      .select("data, updated_at")
      .eq("cache_key", cacheKey)
      .maybeSingle();

    if (error) {
      console.error("Erreur Supabase :", error.message);

      return NextResponse.json(
        { error: "Impossible de récupérer le classement." },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json(
        {
          error: "Aucune donnée de classement disponible.",
          standings: [],
        },
        { status: 404 }
      );
    }

    const standings =
      data.data?.response?.[0]?.league?.standings?.[0] ?? [];

    return NextResponse.json({
      league,
      season,
      standings,
      updated_at: data.updated_at,
    });
  } catch (error) {
    console.error("Erreur route standings :", error);

    return NextResponse.json(
      { error: "Erreur interne." },
      { status: 500 }
    );
  }
}