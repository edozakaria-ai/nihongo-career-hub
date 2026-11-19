import type { GrammarPoint, JlptLevel, Vocabulary } from "@/lib/types";
import { GRAMMAR, KANJI, QUESTIONS, VOCABULARY } from "@/data";
import { publishedReadings, todayISO } from "@/data/dokkai";
import { hashString, seededShuffle } from "@/lib/quiz";
import type { ExamPassage, ExamPool, ExamQuestion } from "@/lib/exam";

/**
 * Bank soal otomatis dari materi situs (kotoba, kanji, bunpou, dokkai) + soal kurasi.
 * Hanya dipakai di server. Soal diacak dengan seed level+tanggal sehingga berganti tiap hari.
 * Semua soal berlabel "platform" — bukan soal resmi JLPT.
 */

const KANJI_RE = /[\u3400-\u9FFF\uF900-\uFAFF々]/;
const KANA_RE = /^[\u3040-\u30FFー]+$/;
const KANJI_ID = new Map(KANJI.map((k) => [k.character, k.id]));
const GRAMMAR_BY_ID = new Map(GRAMMAR.map((g) => [g.id, g]));

function kanjiHref(word: string): string {
  for (const ch of Array.from(word)) {
    const id = KANJI_ID.get(ch);
    if (id) return "/kanji/" + id;
  }
  return "/kotoba";
}

function shortMeaning(v: Vocabulary): string {
  const m = (v.meaningId[0] ?? v.meaningEn[0] ?? "").trim();
  return m.length > 60 ? m.slice(0, 57) + "…" : m;
}

const STOPWORDS = new Set(["yang", "dan", "atau", "untuk", "dengan", "dari", "pada", "dalam", "melakukan", "sesuatu", "kata", "kalimat", "bentuk", "hal", "itu", "ini", "the", "to", "of"]);

function tokens(s: string): Set<string> {
  return new Set(s.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length > 2 && !STOPWORDS.has(w)));
}

function similar(a: string, b: string): boolean {
  const ta = tokens(a);
  const tb = tokens(b);
  if (ta.size === 0 || tb.size === 0) return a.toLowerCase() === b.toLowerCase();
  let common = 0;
  ta.forEach((t) => {
    if (tb.has(t)) common++;
  });
  return common / Math.min(ta.size, tb.size) >= 0.67;
}

/** Ambil n pengecoh unik; utamakan yang "mirip" (mis. panjang bacaan sama). */
function pickDistractors(correct: string, candidates: string[], seed: string, n: number, prefer?: (c: string) => boolean, exclude?: (c: string) => boolean): string[] {
  const uniq = Array.from(new Set(candidates)).filter((c) => c && c !== correct && !(exclude && exclude(c)));
  const preferred = prefer ? uniq.filter(prefer) : [];
  const ordered = [...seededShuffle(preferred, seed + "-p").slice(0, 40), ...seededShuffle(uniq, seed + "-a").slice(0, 40)];
  const out: string[] = [];
  for (const c of ordered) {
    if (!out.includes(c)) out.push(c);
    if (out.length === n) break;
  }
  return out;
}

function choice(correct: string, distractors: string[], seed: string) {
  const options = seededShuffle([correct, ...distractors], seed + "-o");
  return { options, answerIndex: options.indexOf(correct) };
}

function kanjiQuestions(level: JlptLevel, vocab: Vocabulary[], seed: string, n: number): ExamQuestion[] {
  const cands = vocab.filter((v) => KANJI_RE.test(v.word) && KANA_RE.test(v.reading) && v.word !== v.reading && v.word.length <= 6);
  const readingsOf = new Map<string, Set<string>>();
  cands.forEach((v) => readingsOf.set(v.word, (readingsOf.get(v.word) ?? new Set()).add(v.reading)));
  const all = cands.map((v) => v.reading);
  const out: ExamQuestion[] = [];
  for (const v of seededShuffle(cands, seed + "-k")) {
    if (out.length >= n) break;
    const valid = readingsOf.get(v.word) ?? new Set<string>();
    const d = pickDistractors(v.reading, all, seed + v.id, 3, (r) => Math.abs(r.length - v.reading.length) <= 1, (r) => valid.has(r));
    if (d.length < 3) continue;
    const c = choice(v.reading, d, seed + v.id);
    out.push({
      id: "x-kanji-" + v.id,
      level,
      category: "kanji",
      prompt: "Bagaimana cara membaca kata bergaris bawah?",
      stem: "[[" + v.word + "]]",
      options: c.options,
      answerIndex: c.answerIndex,
      explanation: v.word + " dibaca " + v.reading + (shortMeaning(v) ? " — artinya “" + shortMeaning(v) + "”." : "."),
      source: "platform",
      href: kanjiHref(v.word),
    });
  }
  return out;
}

function vocabQuestions(level: JlptLevel, vocab: Vocabulary[], seed: string, n: number): ExamQuestion[] {
  const cands = vocab.filter((v) => shortMeaning(v).length > 0);
  const meanings = cands.map(shortMeaning);
  const words = cands.map((v) => v.word);
  const out: ExamQuestion[] = [];
  for (const v of seededShuffle(cands, seed + "-v")) {
    if (out.length >= n) break;
    const m = shortMeaning(v);
    const reverse = hashString(v.id + seed) % 2 === 1;
    if (!reverse) {
      const d = pickDistractors(m, meanings, seed + v.id, 3, undefined, (x) => similar(x, m) || v.meaningId.some((own) => similar(own, x)));
      if (d.length < 3) continue;
      const c = choice(m, d, seed + v.id);
      out.push({
        id: "x-vocab-" + v.id,
        level,
        category: "kosakata",
        prompt: "Apa arti kata bergaris bawah?",
        stem: "[[" + v.word + "]]" + (v.word !== v.reading ? "（" + v.reading + "）" : ""),
        options: c.options,
        answerIndex: c.answerIndex,
        explanation: v.word + "（" + v.reading + "）artinya “" + m + "”.",
        source: "platform",
        href: "/kotoba",
      });
    } else {
      const sameMeaning = new Set(cands.filter((x) => similar(shortMeaning(x), m)).map((x) => x.word));
      const d = pickDistractors(v.word, words, seed + v.id, 3, (w) => Math.abs(w.length - v.word.length) <= 1, (w) => sameMeaning.has(w));
      if (d.length < 3) continue;
      const c = choice(v.word, d, seed + v.id);
      out.push({
        id: "x-vocabr-" + v.id,
        level,
        category: "kosakata",
        prompt: "Kata mana yang artinya sesuai?",
        stem: "“" + m + "”",
        options: c.options,
        answerIndex: c.answerIndex,
        explanation: "“" + m + "” dalam bahasa Jepang adalah " + v.word + "（" + v.reading + "）.",
        source: "platform",
        href: "/kotoba",
      });
    }
  }
  return out;
}

function grammarQuestions(level: JlptLevel, seed: string, n: number): ExamQuestion[] {
  const atLevel = GRAMMAR.filter((g) => g.level === level);
  const pool = atLevel.length >= 4 ? atLevel : GRAMMAR;
  const out: ExamQuestion[] = [];
  const JA = /[\u3040-\u30FF\u3400-\u9FFF]/;
  for (const g of seededShuffle(atLevel, seed + "-g")) {
    if (out.length >= n) break;
    // Lewati bila keterangan arti memuat huruf Jepang (bisa membocorkan jawaban)
    if (JA.test(g.meaning)) continue;
    const related = new Set((g.comparison ?? []).map((c) => c.pattern));
    const byPattern = new Map<string, GrammarPoint>(pool.map((x) => [x.pattern, x]));
    const d = pickDistractors(g.pattern, pool.map((x) => x.pattern), seed + g.id, 3, undefined, (p) => {
      const other = byPattern.get(p);
      return related.has(p) || !other || similar(other.meaning, g.meaning);
    });
    if (d.length < 3) continue;
    const c = choice(g.pattern, d, seed + g.id);
    out.push({
      id: "x-gram-" + g.id,
      level,
      category: "tata-bahasa",
      prompt: "Pola tata bahasa mana yang artinya sesuai dengan keterangan berikut?",
      stem: g.meaning,
      options: c.options,
      answerIndex: c.answerIndex,
      explanation: g.pattern + " — " + g.meaning + " Struktur: " + g.structure,
      source: "platform",
      href: "/bunpou/" + g.slug,
    });
  }
  return out;
}

function curatedHref(topic?: string): string | undefined {
  if (!topic) return undefined;
  if (topic.startsWith("k-")) return "/kanji/" + topic;
  if (topic.startsWith("v-")) return "/kotoba";
  if (topic.startsWith("g-")) {
    const g = GRAMMAR_BY_ID.get(topic);
    return g ? "/bunpou/" + g.slug : "/bunpou";
  }
  if (topic.startsWith("r-")) return "/dokkai";
  return undefined;
}

function curated(level: JlptLevel): ExamQuestion[] {
  return QUESTIONS.filter((q) => q.level === level).map((q) => ({ ...q, href: curatedHref(q.relatedTopic) }));
}

function passages(level: JlptLevel, seed: string, n: number): ExamPassage[] {
  return seededShuffle(
    publishedReadings().filter((r) => r.level === level && r.questions.length > 0),
    seed + "-r",
  )
    .slice(0, n)
    .map((r) => ({
      slug: r.slug,
      title: r.title,
      paragraphs: r.paragraphs,
      questions: r.questions.map((q) => ({ ...q, id: "x-read-" + r.slug + "-" + q.id, href: "/dokkai/" + r.slug, passageTitle: r.title })),
    }));
}

/** Bank soal satu level untuk simulasi ujian. */
export function buildExamPool(level: JlptLevel, sizes = { kanji: 40, kosakata: 40, grammar: 40, passages: 6 }): ExamPool {
  const seed = level + "-" + todayISO();
  const vocab = VOCABULARY.filter((v) => v.level === level);
  const cur = curated(level);
  return {
    level,
    kanji: [...cur.filter((q) => q.category === "kanji"), ...kanjiQuestions(level, vocab, seed, sizes.kanji)],
    kosakata: [...cur.filter((q) => q.category === "kosakata"), ...vocabQuestions(level, vocab, seed, sizes.kosakata)],
    tataBahasa: [...cur.filter((q) => q.category === "tata-bahasa"), ...grammarQuestions(level, seed, sizes.grammar)],
    membaca: cur.filter((q) => q.category === "membaca"),
    passages: passages(level, seed, sizes.passages),
  };
}

/** Soal untuk mode latihan per topik (semua level, ukuran kecil, tanpa bacaan panjang). */
export function buildPracticeQuestions(perCategory = 15): ExamQuestion[] {
  const levels: JlptLevel[] = ["N5", "N4", "N3", "N2"];
  return levels.flatMap((lv) => {
    const p = buildExamPool(lv, { kanji: perCategory, kosakata: perCategory, grammar: perCategory, passages: 0 });
    return [...p.kanji, ...p.kosakata, ...p.tataBahasa, ...p.membaca];
  });
}
