import type { GrammarPoint, JlptLevel, Kanji, Vocabulary } from "./types";
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

// ════════════════ Pencarian Kanji & Bunpou ════════════════

interface PreparedQuery {
  raw: string;
  lower: string;
  latin: boolean;
  kana: string; // query dalam hiragana (dari romaji/katakana)
  romaji: string;
}

function prepare(rawQuery: string): PreparedQuery | null {
  const raw = rawQuery.normalize("NFKC").trim().slice(0, 50);
  if (!raw) return null;
  const latin = isLatin(raw);
  return {
    raw,
    lower: raw.toLowerCase(),
    latin,
    kana: latin ? romajiToHiragana(normalizeRomaji(raw, true)) : katakanaToHiragana(raw),
    romaji: latin ? normalizeRomaji(raw) : "",
  };
}

/** Bacaan kanji → hiragana polos: "あ(う)" → "あう", "-び" → "び", "ニチ" → "にち". */
function cleanReading(r: string): string {
  return katakanaToHiragana(r.replace(/[()\-.]/g, ""));
}

/**
 * Cari kanji berdasarkan: karakter, arti Indonesia, onyomi/kunyomi (kana atau romaji),
 * atau kosakata contoh (kata, bacaan, arti). Hasil diurutkan menurut relevansi.
 */
export function searchKanji(items: Kanji[], rawQuery: string): Kanji[] {
  const q = prepare(rawQuery);
  if (!q) return items;
  const scored: { k: Kanji; score: number }[] = [];
  for (const k of items) {
    let score = 0;
    if (hasKanji(q.raw)) {
      if (q.raw.includes(k.character)) score = Math.max(score, k.character === q.raw ? 100 : 80);
      score = Math.max(score, ...k.vocabulary.map((v) => scoreText(v.word, q.raw) * 0.6));
    }
    const readings = [...k.onyomi, ...k.kunyomi].map(cleanReading);
    if (q.kana) {
      score = Math.max(score, ...readings.map((r) => scoreText(r, q.kana)));
      score = Math.max(score, ...k.vocabulary.map((v) => scoreText(v.reading, q.kana) * 0.6));
    }
    if (q.latin) {
      score = Math.max(score, scoreList(k.meanings, q.lower));
      score = Math.max(score, scoreList(k.vocabulary.map((v) => v.meaning), q.lower) * 0.6);
      score = Math.max(score, scoreText(k.category.toLowerCase(), q.lower) * 0.5);
    }
    if (score > 0) scored.push({ k, score });
  }
  return scored.sort((a, b) => b.score - a.score).map((s) => s.k);
}

/**
 * Cari pola bunpou berdasarkan: pola (kana/romaji, mis. "teshimau", "ことになる"),
 * arti, struktur, situasi penggunaan, atau slug.
 */
export function searchGrammar(items: GrammarPoint[], rawQuery: string): GrammarPoint[] {
  const q = prepare(rawQuery);
  if (!q) return items;
  const strip = (s: string) => katakanaToHiragana(s.replace(/[〜~（）()\s]/g, ""));
  const kanaQuery = strip(q.kana);
  const scored: { g: GrammarPoint; score: number }[] = [];
  for (const g of items) {
    let score = 0;
    const pattern = strip(g.pattern);
    if (kanaQuery) score = Math.max(score, scoreText(pattern, kanaQuery));
    if (!q.latin) score = Math.max(score, scoreText(g.structure, q.raw) * 0.5);
    if (q.latin) {
      score = Math.max(score, scoreText(normalizeRomaji(g.slug), q.romaji));
      score = Math.max(score, scoreList([g.meaning], q.lower) * 0.8);
      score = Math.max(score, scoreList([g.usage, g.structure], q.lower) * 0.5);
    }
    if (score > 0) scored.push({ g, score });
  }
  return scored.sort((a, b) => b.score - a.score).map((s) => s.g);
}
