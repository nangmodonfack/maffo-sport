import { NextResponse } from "next/server";
import { getStandings } from "@/lib/api-football";

export const runtime = "nodejs";
export const revalidate = 3600;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const league = Number(searchParams.get("league") || "39");
  const season = Number(searchParams.get("season") || new Date().getUTCFullYear());

  if (!Number.isInteger(league) || !Number.isInteger(season)) {
    return NextResponse.json({ error: "Paramètres invalides" }, { status: 400 });
  }

  try {
    const data = await getStandings(league, season);
    const standings = data?.[0]?.league?.standings?.[0] ?? [];
    return NextResponse.json({ league, season, standings });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "API error" }, { status: 502 });
  }
}
