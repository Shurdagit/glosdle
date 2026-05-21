import { NextResponse } from "next/server";
import { getDailyWord, getYesterdayWord } from "@/lib/words";

export async function GET() {
  // Använd Stockholm/Swedish timezone
  const now = new Date();
  const stockholmDate = new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Europe/Stockholm",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);

  // Konvertera från "YYYY-MM-DD" (sv-SE format) till ISO
  const dateStr = stockholmDate; // sv-SE returnerar redan YYYY-MM-DD

  const todayWord = getDailyWord(dateStr);
  const yesterdayWord = getYesterdayWord(dateStr);

  // Beräkna tid till midnatt i Stockholm
  const stockholmNow = new Date(
    now.toLocaleString("en-US", { timeZone: "Europe/Stockholm" })
  );
  const midnight = new Date(stockholmNow);
  midnight.setHours(24, 0, 0, 0);
  const secondsUntilMidnight = Math.floor(
    (midnight.getTime() - stockholmNow.getTime()) / 1000
  );

  return NextResponse.json({
    word: todayWord,
    yesterday: yesterdayWord,
    date: dateStr,
    secondsUntilNext: secondsUntilMidnight,
  });
}