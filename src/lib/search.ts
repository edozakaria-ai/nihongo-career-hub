import type { JlptLevel, Vocabulary } from "./types";
import { hasKanji, isLatin, katakanaToHiragana, normalizeRomaji, romajiToHiragana } from "./kana";

export interface SearchHit {
  item: Vocabulary;
  score: number;
  matchedOn: "kanji" | "kana" | "romaji" | "indonesia" | "inggris";
}

function scoreText(field: string, q: string): number {
  if (!field || !q) return 0;
  if (field === q) return 100;
  if (field.startsWith(q)) return 70;
  if (q.length >= 2 && field.includes(q)) return 40;
  return 0;
}

function scoreList(fields: string[], q: string): number {
  let best = 0;
  for (const f of fields) {
    const lower = f.toLowerCase();
    // cocokkan juga per kata, mis. "kepala bagian" ditemukan dengan "bagian"
    const words = lower.split(/[\s,()/]+/);
    best = Math.max(best, scoreText(lower, q), ...words.map((w) => (scoreText(w, q) >= 70 ? 60 : 0)));
  }
  return best;
}

/**
 * Pencarian kosakata multi-skrip: kanji, hiragana, katakana, romaji, Indonesia, Inggris.
 * Input disanitasi (NFKC, dipotong 50 karakter). Tidak ada regex dari input pengguna.
 */
export function searchVocabulary(items: Vocabulary[], rawQuery: string, level: JlptLevel | "all" = "all"): SearchHit[] {
  const query = rawQuery.normalize("NFKC").trim().slice(0, 50);
  if (!query) return [];
  const lower = query.toLowerCase();
  const latin = isLatin(query);
  const kanaQuery = latin ? romajiToHiragana(normalizeRomaji(query, true)) : katakanaToHiragana(query);
  const romajiQuery = latin ? normalizeRomaji(query) : "";

  const hits: SearchHit[] = [];
  for (const item of items) {
    if (level !== "all" && item.level !== level) continue;
    const candidates: [number, SearchHit["matchedOn"]][] = [];

    if (hasKanji(query)) candidates.push([scoreText(item.word, query), "kanji"]);
    candidates.push([scoreText(katakanaToHiragana(item.reading), kanaQuery), "kana"]);
    if (latin) {
      candidates.push([scoreText(normalizeRomaji(item.romaji), romajiQuery), "romaji"]);
      candidates.push([scoreList(item.meaningId, lower), "indonesia"]);
      candidates.push([scoreList(item.meaningEn, lower), "inggris"]);
    } else if (!hasKanji(query)) {
      candidates.push([scoreText(item.word, query), "kanji"]);
    }

    let best: [number, SearchHit["matchedOn"]] = [0, "kanji"];
    for (const c of candidates) if (c[0] > best[0]) best = c;
    if (best[0] > 0) hits.push({ item, score: best[0], matchedOn: best[1] });
  }
  const levelOrder: Record<JlptLevel, number> = { N5: 0, N4: 1, N3: 2, N2: 3 };
  return hits.sort((a, b) => b.score - a.score || levelOrder[a.item.level] - levelOrder[b.item.level]);
}
