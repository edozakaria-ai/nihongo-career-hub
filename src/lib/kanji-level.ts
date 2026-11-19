import { KANJI } from "@/data";
import type { JlptLevel } from "@/lib/types";

/**
 * Klasifikasi kanji per level JLPT berdasarkan data tab Kanji.
 * Hanya dipakai di Server Component; ke browser hanya dikirim peta
 * kanji yang benar-benar muncul di teks (ringan).
 */
const INFO = new Map<string, { level: JlptLevel; href: string }>(
  KANJI.map((k) => [k.character, { level: k.level, href: "/kanji/" + k.id }]),
);
const KANJI_G = /[\u3400-\u9FFF\uF900-\uFAFF]/g;

export const LEVEL_ORDER: JlptLevel[] = ["N5", "N4", "N3", "N2"];

export interface KanjiStats {
  counts: Record<JlptLevel, number>;
  /** Kanji yang belum ada di tab Kanji (di luar daftar N5–N2). */
  other: number;
  total: number;
  /** Perkiraan level teks berdasarkan kanji tersulit yang muncul minimal 2 kali (unik). */
  estimated: JlptLevel;
}

function uniqueKanji(texts: string[]): Set<string> {
  const set = new Set<string>();
  for (const t of texts) for (const ch of t.match(KANJI_G) ?? []) set.add(ch);
  return set;
}

/** Peta kanji → level dan kanji → URL, hanya untuk kanji yang muncul di teks. */
export function kanjiMapsFor(texts: string[]): { levels: Record<string, JlptLevel>; links: Record<string, string> } {
  const levels: Record<string, JlptLevel> = {};
  const links: Record<string, string> = {};
  uniqueKanji(texts).forEach((ch) => {
    const info = INFO.get(ch);
    if (info) {
      levels[ch] = info.level;
      links[ch] = info.href;
    }
  });
  return { levels, links };
}

/** Jumlah kanji unik per level + perkiraan level teks. */
export function kanjiStatsFor(texts: string[]): KanjiStats {
  const counts: Record<JlptLevel, number> = { N5: 0, N4: 0, N3: 0, N2: 0 };
  let other = 0;
  const set = uniqueKanji(texts);
  set.forEach((ch) => {
    const info = INFO.get(ch);
    if (info) counts[info.level] += 1;
    else other += 1;
  });
  let estimated: JlptLevel = "N5";
  for (const lv of ["N2", "N3", "N4"] as JlptLevel[]) {
    if (counts[lv] >= 2) {
      estimated = lv;
      break;
    }
  }
  return { counts, other, total: set.size, estimated };
}
