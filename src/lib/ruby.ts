/**
 * Parser notasi furigana `漢字{かんじ}`.
 * Kanji yang diikuti {bacaan} menjadi segmen ruby; sisanya teks biasa.
 * Tidak menghasilkan HTML mentah — komponen <Furigana> merender segmen
 * sebagai elemen React sehingga aman dari XSS.
 */
export type ParsedSegment = { type: "text"; text: string } | { type: "ruby"; base: string; ruby: string };

const RUBY_PATTERN = /([\u3400-\u9FFF\uF900-\uFAFF々〆ヵヶ]+)\{([^{}]+)\}/g;

export function parseRuby(input: string): ParsedSegment[] {
  const out: ParsedSegment[] = [];
  let last = 0;
  for (const m of input.matchAll(RUBY_PATTERN)) {
    const idx = m.index ?? 0;
    if (idx > last) out.push({ type: "text", text: input.slice(last, idx) });
    out.push({ type: "ruby", base: m[1], ruby: m[2] });
    last = idx + m[0].length;
  }
  if (last < input.length) out.push({ type: "text", text: input.slice(last) });
  return out;
}

/** Hilangkan anotasi → teks Jepang polos (untuk pencarian, aria-label, SEO). */
export function stripRuby(input: string): string {
  return input.replace(RUBY_PATTERN, "$1");
}

/** Ganti kanji beranotasi dengan bacaannya → teks kana (untuk pencarian kana). */
export function toKana(input: string): string {
  return input.replace(RUBY_PATTERN, "$2");
}
