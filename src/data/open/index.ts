import type { Vocabulary } from "@/lib/types";
import { toVocabulary } from "./schema";
import { VOCAB_N5 } from "./vocab-n5";

export const OPEN_VOCABULARY: Vocabulary[] = [...VOCAB_N5].map(toVocabulary);
