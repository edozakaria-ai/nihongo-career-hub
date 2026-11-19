import type { GrammarPoint, JlptLevel, Vocabulary } from "@/lib/types";
import { GRAMMAR, KANJI, QUESTIONS, VOCABULARY } from "@/data";
import { publishedReadings, todayISO } from "@/data/dokkai";
import { hashString, seededShuffle } from "@/lib/quiz";
import { POOL_SIZE, type ExamPassage, type ExamPool, type ExamQuestion } from "@/lib/exam";

/**
 * Bank soal otomatis dari materi situs + soal kurasi. Hanya dipakai di server.
 * Target ±100 soal per kategori per level. Bank diacak dengan seed level+tanggal,
 * lalu browser mengacak lagi setiap sesi sehingga soal yang keluar selalu berbeda.
 * Semua soal berlabel "platform" — bukan soal resmi JLPT.
 */

const KANJI_RE = /[\u3400-\u9FFF\uF900-\uFAFF々]/;
const KANA_RE = /^[\u3040-\u30FFー]+$/;
const JA_RE = /[\u3040-\u30FF\u3400-\u9FFF]/;
const KANJI_ID = new Map(KANJI.map((k) => [k.character, k.id]));
const GRAMMAR_BY_ID = new Map(GRAMMAR.map((g) => [g.id, g]));

const STOPWORDS = new Set(["yang", "dan", "atau", "untuk", "dengan", "dari", "pada", "dalam", "melakukan", "sesuatu", "kata", "kalimat", "bentuk", "hal", "itu", "ini", "the", "to", "of", "a"]);

function tokens(s: string): Set<string> {
  return new Set(s.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length > 2 && !STOPWORDS.has(w)));
}

function similar(a: string, b: string): boolean {
  const ta = tokens(a);
  const tb = tokens(b);
  if (ta.size === 0 || tb.size === 0) return a.trim().toLowerCase() === b.trim().toLowerCase();
  let common = 0;
  ta.forEach((t) => {
    if (tb.has(t)) common++;
  });
  return common / Math.min(ta.size, tb.size) >= 0.67;
}

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

function clip(s: string, n = 140): string {
  return s.length > n ? s.slice(0, n - 1) + "…" : s;
}

/** Ambil n pengecoh unik; utamakan yang "mirip" agar soal tidak terlalu mudah. */
function pickDistractors(correct: string, candidates: string[], seed: string, n: number, prefer?: (c: string) => boolean, exclude?: (c: string) => boolean): string[] {
  const uniq = Array.from(new Set(candidates)).filter((c) => c && c !== correct && !(exclude && exclude(c)));
  const preferred = prefer ? uniq.filter(prefer) : [];
  const ordered = [...seededShuffle(preferred, seed + "-p").slice(0, 40), ...seededShuffle(uniq, seed + "-a").slice(0, 60)];
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

function sharesKanji(a: string, b: string): boolean {
  return Array.from(a).some((ch) => KANJI_RE.test(ch) && b.includes(ch));
}

/* ═══════════ KANJI: 漢字読み + 表記 ═══════════ */
function kanjiQuestions(level: JlptLevel, vocab: Vocabulary[], seed: string, n: number): ExamQuestion[] {
  const cands = vocab.filter((v) => KANJI_RE.test(v.word) && KANA_RE.test(v.reading) && v.word !== v.reading && v.word.length <= 6);
  const readingsOf = new Map<string, Set<string>>();
  const wordsOf = new Map<string, Set<string>>();
  cands.forEach((v) => {
    readingsOf.set(v.word, (readingsOf.get(v.word) ?? new Set()).add(v.reading));
    wordsOf.set(v.reading, (wordsOf.get(v.reading) ?? new Set()).add(v.word));
  });
  const allReadings = cands.map((v) => v.reading);
  const allWords = cands.map((v) => v.word);
  const out: ExamQuestion[] = [];
  const used = new Set<string>();

  for (const v of seededShuffle(cands, seed + "-k")) {
    if (out.length >= n) break;
    const key = v.word + "|" + v.reading;
    if (used.has(key)) continue;
    used.add(key);
    // Selang-seling: 漢字読み (baca) dan 表記 (tulis)
    const orthography = hashString(v.id + seed) % 5 < 2;
    if (!orthography) {
      const valid = readingsOf.get(v.word) ?? new Set<string>();
      const d = pickDistractors(v.reading, allReadings, seed + v.id, 3, (r) => Math.abs(r.length - v.reading.length) <= 1, (r) => valid.has(r));
      if (d.length < 3) continue;
      const c = choice(v.reading, d, seed + v.id);
      out.push({
        id: "x-kread-" + v.id,
        level,
        category: "kanji",
        prompt: "Bagaimana cara membaca kata bergaris bawah? (漢字読み)",
        stem: "[[" + v.word + "]]",
        options: c.options,
        answerIndex: c.answerIndex,
        explanation: v.word + " dibaca " + v.reading + (shortMeaning(v) ? " — artinya “" + shortMeaning(v) + "”." : "."),
        source: "platform",
        href: kanjiHref(v.word),
      });
    } else {
      const homophones = wordsOf.get(v.reading) ?? new Set<string>();
      const d = pickDistractors(
        v.word,
        allWords,
        seed + v.id + "w",
        3,
        (w) => w.length === v.word.length && sharesKanji(w, v.word),
        (w) => homophones.has(w),
      );
      if (d.length < 3) continue;
      const c = choice(v.word, d, seed + v.id + "w");
      out.push({
        id: "x-kwrite-" + v.id,
        level,
        category: "kanji",
        prompt: "Bagaimana kata bergaris bawah ditulis dengan kanji? (表記)",
        stem: "[[" + v.reading + "]]" + (shortMeaning(v) ? "　— “" + shortMeaning(v) + "”" : ""),
        options: c.options,
        answerIndex: c.answerIndex,
        explanation: v.reading + " ditulis " + v.word + ".",
        source: "platform",
        href: kanjiHref(v.word),
      });
    }
  }
  return out;
}

/* ═══════════ KOSAKATA: arti ⇄ kata ═══════════ */
function vocabQuestions(level: JlptLevel, vocab: Vocabulary[], seed: string, n: number): ExamQuestion[] {
  const cands = vocab.filter((v) => shortMeaning(v).length > 0);
  const meanings = cands.map(shortMeaning);
  const words = cands.map((v) => v.word);
  const out: ExamQuestion[] = [];
  const used = new Set<string>();
  for (const v of seededShuffle(cands, seed + "-v")) {
    if (out.length >= n) break;
    if (used.has(v.word)) continue;
    used.add(v.word);
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

/* ═══════════ TATA BAHASA: arti → pola, pola → arti ═══════════ */
function grammarQuestions(level: JlptLevel, seed: string, n: number): ExamQuestion[] {
  const atLevel = GRAMMAR.filter((g) => g.level === level && !JA_RE.test(g.meaning));
  const pool = GRAMMAR.filter((g) => !JA_RE.test(g.meaning));
  const byPattern = new Map<string, GrammarPoint>(pool.map((x) => [x.pattern, x]));
  const levelPool = atLevel.length >= 8 ? atLevel : pool;
  const out: ExamQuestion[] = [];

  const forward: ExamQuestion[] = [];
  const backward: ExamQuestion[] = [];
  for (const g of seededShuffle(atLevel, seed + "-g")) {
    const related = new Set((g.comparison ?? []).map((c) => c.pattern));
    // Arti → pola
    const d1 = pickDistractors(
      g.pattern,
      levelPool.map((x) => x.pattern),
      seed + g.id,
      3,
      undefined,
      (p) => {
        const other = byPattern.get(p);
        return related.has(p) || !other || similar(other.meaning, g.meaning);
      },
    );
    if (d1.length === 3) {
      const c = choice(g.pattern, d1, seed + g.id);
      forward.push({
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
    // Pola → arti
    const meanings = levelPool.filter((x) => x.id !== g.id && !related.has(x.pattern)).map((x) => clip(x.meaning));
    const d2 = pickDistractors(clip(g.meaning), meanings, seed + g.id + "m", 3, undefined, (m) => similar(m, g.meaning));
    if (d2.length === 3) {
      const c = choice(clip(g.meaning), d2, seed + g.id + "m");
      backward.push({
        id: "x-gramr-" + g.id,
        level,
        category: "tata-bahasa",
        prompt: "Apa arti/fungsi pola tata bahasa berikut?",
        stem: "[[" + g.pattern + "]]",
        options: c.options,
        answerIndex: c.answerIndex,
        explanation: g.pattern + " — " + g.meaning + " Contoh struktur: " + g.structure,
        source: "platform",
        href: "/bunpou/" + g.slug,
      });
    }
  }
  // Gabungkan selang-seling agar kedua jenis soal tercampur
  for (let i = 0; out.length < n && (i < forward.length || i < backward.length); i++) {
    if (forward[i]) out.push(forward[i]);
    if (backward[i] && out.length < n) out.push(backward[i]);
  }
  return out;
}

/* ═══════════ MEMBACA: dari bacaan dokkai ═══════════ */
function readingPassages(level: JlptLevel, seed: string, maxQuestions: number): ExamPassage[] {
  const readings = publishedReadings().filter((r) => r.level === level);
  const otherTranslations = readings.flatMap((r) => r.translation.map((t) => ({ slug: r.slug, t: clip(t, 160) })));
  const otherVocab = readings.flatMap((r) => r.keyVocabulary.map((k) => k.meaning));
  const passages: ExamPassage[] = [];
  let total = 0;

  for (const r of seededShuffle(readings, seed + "-r")) {
    if (total >= maxQuestions) break;
    const href = "/dokkai/" + r.slug;
    const base = { level, category: "membaca" as const, source: "platform" as const, href, passageTitle: r.title, passageSlug: r.slug };
    const qs: ExamQuestion[] = [];

    // 1) Pertanyaan pemahaman asli dari bacaan
    r.questions.forEach((q) => qs.push({ ...q, ...base, id: "x-read-" + r.slug + "-" + q.id }));

    // 2) Kosakata dalam konteks bacaan
    r.keyVocabulary.forEach((k, i) => {
      const d = pickDistractors(k.meaning, otherVocab, seed + r.slug + "v" + i, 3, undefined, (m) => similar(m, k.meaning));
      if (d.length < 3) return;
      const c = choice(k.meaning, d, seed + r.slug + "v" + i);
      qs.push({
        ...base,
        id: "x-readv-" + r.slug + "-" + i,
        prompt: "Dalam bacaan ini, apa arti kata 「" + k.word + "」（" + k.reading + "）?",
        options: c.options,
        answerIndex: c.answerIndex,
        explanation: "「" + k.word + "」（" + k.reading + "）artinya “" + k.meaning + "”.",
      });
    });

    // 3) Isi tiap paragraf
    r.translation.forEach((t, i) => {
      const correct = clip(t, 160);
      const pool = otherTranslations.filter((o) => o.slug !== r.slug).map((o) => o.t);
      const d = pickDistractors(correct, pool, seed + r.slug + "p" + i, 3, undefined, (x) => similar(x, correct));
      if (d.length < 3) return;
      const c = choice(correct, d, seed + r.slug + "p" + i);
      qs.push({
        ...base,
        id: "x-readp-" + r.slug + "-" + i,
        prompt: "Manakah yang paling sesuai dengan isi paragraf ke-" + (i + 1) + "?",
        options: c.options,
        answerIndex: c.answerIndex,
        explanation: "Paragraf ke-" + (i + 1) + ": " + t,
      });
    });

    if (qs.length === 0) continue;
    passages.push({ slug: r.slug, title: r.title, paragraphs: r.paragraphs, questions: qs });
    total += qs.length;
  }
  return passages;
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

/** Bank soal satu level: ±100 soal per kategori. */
export function buildExamPool(level: JlptLevel, size = POOL_SIZE): ExamPool {
  const seed = level + "-" + todayISO();
  const vocab = VOCABULARY.filter((v) => v.level === level);
  const cur = curated(level);
  const ck = cur.filter((q) => q.category === "kanji");
  const cv = cur.filter((q) => q.category === "kosakata");
  const cg = cur.filter((q) => q.category === "tata-bahasa");
  return {
    level,
    kanji: [...ck, ...kanjiQuestions(level, vocab, seed, size - ck.length)],
    kosakata: [...cv, ...vocabQuestions(level, vocab, seed, size - cv.length)],
    tataBahasa: [...cg, ...grammarQuestions(level, seed, size - cg.length)],
    membaca: cur.filter((q) => q.category === "membaca"),
    passages: readingPassages(level, seed, size),
  };
}

/** Jumlah soal per kategori di bank (untuk ditampilkan). */
export function poolCounts(p: ExamPool) {
  return {
    kanji: p.kanji.length,
    kosakata: p.kosakata.length,
    tataBahasa: p.tataBahasa.length,
    membaca: p.membaca.length + p.passages.reduce((s, x) => s + x.questions.length, 0),
  };
}
