import type { ExampleSentence, JlptLevel, Kanji, PartOfSpeech, Vocabulary } from "@/lib/types";

/* ════════════════ KOTOBA ════════════════ */

export interface VocabRaw {
  word: string;
  reading: string;
  romaji?: string;
  level: JlptLevel;
  meaningId?: string[];
  meaningEn?: string[];
  pos?: PartOfSpeech | "lainnya";
  examples?: ExampleSentence[];
  tags?: string[];
}

function stableId(text: string): string {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(36);
}

export function toVocabulary(r: VocabRaw): Vocabulary {
  const idMeanings = r.meaningId ?? [];
  const enMeanings = r.meaningEn ?? [];
  const hasId = idMeanings.length > 0;
  const pos: PartOfSpeech = r.pos && r.pos !== "lainnya" ? r.pos : "nomina";
  return {
    id: "v-" + stableId(r.word + "|" + r.reading),
    word: r.word,
    reading: r.reading,
    romaji: r.romaji ?? "",
    meaningId: hasId ? idMeanings : enMeanings,
    meaningEn: hasId ? enMeanings : [],
    partOfSpeech: pos,
    level: r.level,
    examples: r.examples ?? [],
    tags: r.tags,
  };
}

/* ════════════════ KANJI ════════════════ */

export interface KanjiRaw {
  char: string;
  level: JlptLevel;
  strokes: number;
  on: string[];
  kun: string[];
  meaningId: string[];
  category?: string;
  mnemonic?: string;
  vocab?: { word: string; reading: string; meaning: string }[];
  examples?: ExampleSentence[];
}

export function toKanji(r: KanjiRaw): Kanji {
  return {
    id: "k-" + (r.char.codePointAt(0) ?? 0).toString(16),
    character: r.char,
    level: r.level,
    meanings: r.meaningId,
    onyomi: r.on,
    kunyomi: r.kun,
    strokeCount: r.strokes,
    category: r.category ?? "Umum",
    strokeOrderSvg: null,
    mnemonic: r.mnemonic ?? "Mnemonik belum tersedia.",
    vocabulary: r.vocab ?? [],
    examples: r.examples ?? [],
  };
}
