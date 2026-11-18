import type { Vocabulary } from "@/lib/types";
import { toVocabulary } from "./schema";
import { VOCAB_N5 } from "./vocab-n5";
import { VOCAB_N4 } from "./vocab-n4";

export const OPEN_VOCABULARY: Vocabulary[] = [...VOCAB_N5, ...VOCAB_N4].map(toVocabulary);
