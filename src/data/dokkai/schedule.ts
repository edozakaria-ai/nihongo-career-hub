import type { JlptLevel } from "@/lib/types";
import type { NewsReading, QueuedReading } from "./types";

/* ════════════════ PENGATURAN JADWAL TERBIT ════════════════ */

/** Tanggal terbit bacaan PERTAMA di antrean (YYYY-MM-DD). Jangan diubah setelah ada bacaan yang terbit. */
export const QUEUE_START_DATE = "2026-12-01";
/** Jumlah bacaan baru per level per hari. */
export const PER_DAY_PER_LEVEL = 2;
/** Zona waktu penentu "hari ini" (bacaan baru muncul setelah pukul 00.00 di zona ini). */
export const PUBLISH_TIMEZONE = "Asia/Jakarta";

/* ═══════════════════════════════════════════════════════════ */

/** Tanggal hari ini (YYYY-MM-DD) menurut PUBLISH_TIMEZONE. */
export function todayISO(now: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: PUBLISH_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

export function addDaysISO(iso: string, days: number): string {
  const d = new Date(iso + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

/**
 * Beri tanggal terbit pada antrean: per level, bacaan ke-0 dan ke-1 terbit pada
 * QUEUE_START_DATE, ke-2 dan ke-3 sehari sesudahnya, dan seterusnya.
 */
export function scheduleQueue(queue: QueuedReading[]): NewsReading[] {
  const counter: Record<JlptLevel, number> = { N5: 0, N4: 0, N3: 0, N2: 0 };
  return queue.map((r) => {
    const index = counter[r.level]++;
    return { ...r, date: addDaysISO(QUEUE_START_DATE, Math.floor(index / PER_DAY_PER_LEVEL)) };
  });
}
