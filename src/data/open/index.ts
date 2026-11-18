import type { Kanji, Vocabulary } from "@/lib/types";
import { toKanji, toVocabulary } from "./schema";
import { VOCAB_N5 } from "./vocab-n5";
import { VOCAB_N4 } from "./vocab-n4";
import { VOCAB_N3 } from "./vocab-n3";
import { VOCAB_N2 } from "./vocab-n2";
import { KANJI_N5 } from "./kanji-n5";
import { KANJI_N4 } from "./kanji-n4";

export const OPEN_VOCABULARY: Vocabulary[] = [...VOCAB_N5, ...VOCAB_N4, ...VOCAB_N3, ...VOCAB_N2].map(toVocabulary);

export const OPEN_KANJI: Kanji[] = [...KANJI_N5, ...KANJI_N4].map(toKanji);
