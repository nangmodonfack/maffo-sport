import { NextResponse } from "next/server";
import { getMatches } from "@/lib/bigballs";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const league = searchParams.get("league") || undefined;
    const date = searchParams.get("date") || undefined;

    const matches = await getMatches({
      league,
      date,
      limit: 100,
    });

    return NextResponse.json({
      success: true,
      league: league ?? "all",
      date: date ?? "all",
      count: matches.length,
      matches,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 },
    );
  }
}
