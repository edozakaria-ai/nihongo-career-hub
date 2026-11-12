/**
 * Utilitas kana untuk pencarian & kuis:
 * - katakanaToHiragana: カイギ → かいぎ
 * - romajiToHiragana: "kaigi" → "かいぎ", "hon'yaku" → "ほんやく", "kitte" → "きって"
 * - normalizeRomaji: huruf kecil, hapus apostrof/tanda hubung/spasi, makron → vokal ganda
 */

export function katakanaToHiragana(input: string): string {
  return input.replace(/[\u30A1-\u30F6]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0x60));
}

export function isKana(input: string): boolean {
  return /^[\u3040-\u309F\u30A0-\u30FFー\s]+$/.test(input);
}

export function hasKanji(input: string): boolean {
  return /[\u3400-\u9FFF\uF900-\uFAFF々]/.test(input);
}

export function isLatin(input: string): boolean {
  return /^[a-zA-Z\s'\-āīūēōâîûêô]+$/.test(input);
}

export function normalizeRomaji(input: string, keepApostrophe = false): string {
  const base = input
    .toLowerCase()
    .replace(/ā|â/g, "aa")
    .replace(/ī|î/g, "ii")
    .replace(/ū|û/g, "uu")
    .replace(/ē|ê/g, "ee")
    .replace(/ō|ô/g, "ou")
    .replace(/’/g, "'");
  return keepApostrophe ? base.replace(/[\-\s]/g, "") : base.replace(/['\-\s]/g, "");
}

const ROWS: Record<string, [string, string, string, string, string]> = {
  "": ["あ", "い", "う", "え", "お"],
  k: ["か", "き", "く", "け", "こ"],
  s: ["さ", "し", "す", "せ", "そ"],
  t: ["た", "ち", "つ", "て", "と"],
  n: ["な", "に", "ぬ", "ね", "の"],
  h: ["は", "ひ", "ふ", "へ", "ほ"],
  m: ["ま", "み", "む", "め", "も"],
  r: ["ら", "り", "る", "れ", "ろ"],
  g: ["が", "ぎ", "ぐ", "げ", "ご"],
  z: ["ざ", "じ", "ず", "ぜ", "ぞ"],
  d: ["だ", "ぢ", "づ", "で", "ど"],
  b: ["ば", "び", "ぶ", "べ", "ぼ"],
  p: ["ぱ", "ぴ", "ぷ", "ぺ", "ぽ"],
};

const YOUON: Record<string, string> = {
  ky: "き", sh: "し", sy: "し", ch: "ち", ty: "ち", ny: "に", hy: "ひ", my: "み",
  ry: "り", gy: "ぎ", j: "じ", jy: "じ", zy: "じ", by: "び", py: "ぴ", dy: "ぢ",
};
const SMALL: Record<string, string> = { a: "ゃ", u: "ゅ", o: "ょ" };

function buildTable(): Record<string, string> {
  const t: Record<string, string> = {};
  const vowels = ["a", "i", "u", "e", "o"];
  for (const [c, kana] of Object.entries(ROWS)) vowels.forEach((v, i) => (t[c + v] = kana[i]));
  Object.assign(t, {
    shi: "し", chi: "ち", tsu: "つ", fu: "ふ", ji: "じ",
    ya: "や", yu: "ゆ", yo: "よ", wa: "わ", wo: "を", we: "うぇ", wi: "うぃ",
    she: "しぇ", che: "ちぇ", je: "じぇ", fa: "ふぁ", fi: "ふぃ", fe: "ふぇ", fo: "ふぉ",
    va: "ゔぁ", vi: "ゔぃ", vu: "ゔ", ve: "ゔぇ", vo: "ゔぉ",
  });
  for (const [c, base] of Object.entries(YOUON)) {
    for (const [v, small] of Object.entries(SMALL)) t[c + v] = base + small;
  }
  t["ji"] = "じ";
  t["shi"] = "し";
  t["chi"] = "ち";
  return t;
}

const TABLE = buildTable();

/** Konversi romaji (Hepburn/Kunrei umum) → hiragana. Huruf yang tidak dikenali dibiarkan. */
export function romajiToHiragana(input: string): string {
  const s = input.toLowerCase().replace(/[’]/g, "'");
  let out = "";
  let i = 0;
  while (i < s.length) {
    const ch = s[i];
    const next = s[i + 1] ?? "";

    // n + apostrof / nn / n sebelum konsonan atau di akhir → ん
    if (ch === "n") {
      if (next === "'") { out += "ん"; i += 2; continue; }
      if (next === "n") {
        // "nn" + vokal (mis. konnichiwa) → ん lalu n berikutnya membentuk suku kata
        const after = s[i + 2] ?? "";
        out += "ん";
        i += /[aiueoy]/.test(after) ? 1 : 2;
        continue;
      }
      if (next === "" || !/[aiueoy]/.test(next)) { out += "ん"; i += 1; continue; }
    }
    // konsonan ganda → っ (kk, tt, ss, pp, tch)
    if (/[bcdfghjkmpqrstvwxz]/.test(ch) && (next === ch || (ch === "t" && next === "c"))) {
      out += "っ";
      i += 1;
      continue;
    }
    let matched = false;
    for (const len of [3, 2, 1]) {
      const chunk = s.slice(i, i + len);
      const kana = TABLE[chunk];
      if (kana) { out += kana; i += len; matched = true; break; }
    }
    if (!matched) {
      if (ch === "-") out += "ー";
      else if (ch !== "'") out += ch;
      i += 1;
    }
  }
  return out;
}

/** Normalisasi jawaban bacaan: romaji/katakana → hiragana, buang spasi. */
export function toHiraganaAnswer(input: string): string {
  const trimmed = input.normalize("NFKC").trim().replace(/\s+/g, "");
  if (!trimmed) return "";
  const converted = isLatin(trimmed) ? romajiToHiragana(normalizeRomaji(trimmed, true)) : trimmed;
  return katakanaToHiragana(converted);
}
