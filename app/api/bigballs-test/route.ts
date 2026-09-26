import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.BIGBALLS_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          error: "BIGBALLS_API_KEY manquante",
        },
        { status: 500 },
      );
    }

    const response = await fetch(
      "https://api.bigballsdata.com/v1/leagues?sport=football",
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          Accept: "application/json",
        },
      },
    );

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
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
