import type { JlptLevel } from "@/lib/types";
import { READINGS } from "@/data";
import type { NewsReading } from "./types";
import { ARTICLES } from "./articles";

export type { NewsReading } from "./types";

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

const seen = new Set(ARTICLES.map((a) => a.slug));

/** Semua bacaan dokkai, terbaru di atas. */
export const ALL_READINGS: NewsReading[] = [...ARTICLES, ...LEGACY.filter((r) => !seen.has(r.slug))].sort((a, b) =>
  b.date.localeCompare(a.date),
);
