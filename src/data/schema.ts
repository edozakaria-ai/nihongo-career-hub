import type { ExampleSentence, JlptLevel, PartOfSpeech, Vocabulary } from "@/lib/types";

/** Format ringkas kotoba hasil impor (alat APKG / konverter). */
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

/** Hash FNV-1a → base36 untuk id yang stabil. */
function stableId(text: string): string {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(36);
}

export function toVocabulary(r: VocabRaw): Vocabulary {
  const hasId = !!r.meaningId && r.meaningId.length > 0;
  return {
    id: `v-${stableId(`${r.word}|${r.reading}`)}`,
    word: r.word,
    reading: r.reading,
    romaji: r.romaji ?? "",
    meaningId: hasId ? r.meaningId! : r.meaningEn ?? [],
    meaningEn: hasId ? r.meaningEn ?? [] : [],
    // Kelas kata yang belum terklasifikasi sementara ditampilkan sebagai nomina.
    partOfSpeech: r.pos && r.pos !== "lainnya" ? r.pos : "nomina",
    level: r.level,
    examples: r.examples ?? [],
    tags: r.tags,
  };
}
