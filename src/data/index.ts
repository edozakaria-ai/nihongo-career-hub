import type { Vocabulary } from "@/lib/types";
import { VOCABULARY as CURATED_VOCABULARY } from "./vocabulary";
import { OPEN_VOCABULARY } from "./open";

export { KANJI } from "./kanji";
export { GRAMMAR } from "./grammar";
export { READINGS } from "./readings";
export { QUESTIONS } from "./questions";
export { JOBS, COMPANIES } from "./jobs";
export { CANDIDATES } from "./candidates";
export { DEMO_PROGRESS } from "./user-progress";

// Gabungkan kosakata kurasi + hasil impor, tanpa duplikat (kunci: kata|bacaan)
const seen = new Set(CURATED_VOCABULARY.map((v) => `${v.word}|${v.reading}`));
export const VOCABULARY: Vocabulary[] = [
  ...CURATED_VOCABULARY,
  ...OPEN_VOCABULARY.filter((v) => {
    const key = `${v.word}|${v.reading}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }),
];
