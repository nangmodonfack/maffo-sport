import { NextResponse } from "next/server";
import { getFixtures } from "@/lib/api-football";

export const runtime = "nodejs";
export const revalidate = 300;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date") || (() => {
    const parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Africa/Douala", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(new Date());
    const get = (type: string) => parts.find((p) => p.type === type)?.value || "";
    return `${get("year")}-${get("month")}-${get("day")}`;
  })();

  try {
    const fixtures = await getFixtures(date);
    return NextResponse.json({ date, fixtures });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "API error" }, { status: 502 });
  }
}
