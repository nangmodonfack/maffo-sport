Import { NextResponse } from "next/server";
import { getMatches } from "@/lib/bigballs";

export async function GET() {
  try {
    const todayDouala = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Africa/Douala",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date());

    const matches = await getMatches({
      date: todayDouala,
      tz: "Africa/Douala",
      limit: 200,
    });

    return NextResponse.json({
      success: true,
      date: todayDouala,
      timezone: "Africa/Douala",
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
