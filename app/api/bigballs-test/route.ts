import { NextResponse } from "next/server";
import { getMatches } from "@/lib/bigballs";

export async function GET() {
  try {
    const matches = await getMatches({
      limit: 10,
    });

    return NextResponse.json({
      success: true,
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
