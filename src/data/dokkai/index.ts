import type { JlptLevel } from "@/lib/types";
import { READINGS } from "@/data";
import type { NewsReading } from "./types";
import { ARTICLES } from "./articles";
import { QUEUE } from "./queue";
import { QUEUE_2 } from "./queue-2";
import { scheduleQueue, todayISO } from "./schedule";

export type { NewsReading, QueuedReading } from "./types";
export { todayISO, addDaysISO, QUEUE_START_DATE, PER_DAY_PER_LEVEL, PUBLISH_TIMEZONE } from "./schedule";

const DEFAULT_THUMB: Record<JlptLevel, NewsReading["thumb"]> = {
  N5: { emoji: "📖", from: "#a7f3d0", to: "#10b981" },
  N4: { emoji: "📘", from: "#bae6fd", to: "#0ea5e9" },
  N3: { emoji: "📗", from: "#c7d2fe", to: "#6366f1" },
  N2: { emoji: "📙", from: "#fed7aa", to: "#f97316" },
};

/** Bacaan lama (src/data/readings.ts) diberi nilai bawaan agar tampil di daftar yang sama. */
const LEGACY: NewsReading[] = READINGS.map((r) => ({
  ...r,
  date: "2026-11-01",
  topic: "Bacaan",
  thumb: DEFAULT_THUMB[r.level],
  grammar: [],
  source: { label: "Ditulis oleh Nihongo Career Hub" },
}));

/** Gabungan: artikel bertanggal tetap + antrean terjadwal + bacaan lama (tanpa slug ganda). */
function merge(): NewsReading[] {
  const seen = new Set<string>();
  const out: NewsReading[] = [];
  // Urutan antrean menentukan tanggal terbit: minggu 1 (QUEUE) lalu minggu 2 (QUEUE_2), dst.
  for (const r of [...ARTICLES, ...scheduleQueue([...QUEUE, ...QUEUE_2]), ...LEGACY]) {
    if (seen.has(r.slug)) continue;
    seen.add(r.slug);
    out.push(r);
  }
  return out.sort((a, b) => b.date.localeCompare(a.date));
}

/** SEMUA bacaan, termasuk yang belum terbit. Untuk halaman publik gunakan publishedReadings(). */
export const ALL_READINGS: NewsReading[] = merge();

export function isPublished(r: NewsReading, today: string = todayISO()): boolean {
  return r.date <= today;
}

/** Bacaan yang sudah terbit (tanggal ≤ hari ini), terbaru di atas. */
export function publishedReadings(today: string = todayISO()): NewsReading[] {
  return ALL_READINGS.filter((r) => isPublished(r, today));
}

export function findReading(slug: string): NewsReading | undefined {
  return ALL_READINGS.find((r) => r.slug === slug);
}
