import type { JlptLevel, Kanji, Vocabulary } from "@/lib/types";
import { KANJI as CURATED_KANJI } from "./kanji";
import { VOCABULARY as CURATED_VOCABULARY } from "./vocabulary";
import { OPEN_KANJI, OPEN_VOCABULARY } from "./open";

export { GRAMMAR } from "./grammar";
export { READINGS } from "./readings";
export { QUESTIONS } from "./questions";
export { JOBS, COMPANIES } from "./jobs";
export { CANDIDATES } from "./candidates";
export { DEMO_PROGRESS } from "./user-progress";

const LEVEL_RANK: Record<JlptLevel, number> = { N5: 0, N4: 1, N3: 2, N2: 3 };

// Kosakata: data kurasi + hasil impor, tanpa duplikat (kunci: kata|bacaan)
const seenVocab = new Set(CURATED_VOCABULARY.map((v) => v.word + "|" + v.reading));
export const VOCABULARY: Vocabulary[] = [
  ...CURATED_VOCABULARY,
  ...OPEN_VOCABULARY.filter((v) => {
    const key = v.word + "|" + v.reading;
    if (seenVocab.has(key)) return false;
    seenVocab.add(key);
    return true;
  }),
];

// Kanji: data kurasi + hasil impor, tanpa duplikat (kunci: karakter), urut N5 → N2
const seenKanji = new Set(CURATED_KANJI.map((k) => k.character));
export const KANJI: Kanji[] = [
  ...CURATED_KANJI,
  ...OPEN_KANJI.filter((k) => {
    if (seenKanji.has(k.character)) return false;
    seenKanji.add(k.character);
    return true;
  }),
].sort((a, b) => LEVEL_RANK[a.level] - LEVEL_RANK[b.level]);
