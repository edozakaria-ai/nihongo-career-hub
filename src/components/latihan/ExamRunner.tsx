"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { QuestionCategory } from "@/lib/types";
import {
  CATEGORY_LABEL,
  REAL_BREAKDOWN,
  estimatedCount,
  examConfig,
  moduleHref,
  pickReading,
  shuffle,
  type ExamConfig,
  type ExamMode,
  type ExamPassage,
  type ExamPool,
  type ExamQuestion,
} from "@/lib/exam";
import type { ExamAttempt } from "@/lib/gamification";
import { XP, addActivity, recordResults, saveExamAttempt } from "@/lib/progress";
import { ChoiceQuestion } from "@/components/learn/ChoiceQuestion";
import { Furigana } from "@/components/ui/Furigana";
import { Badge, LevelBadge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { buttonClass } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { QuestionText } from "./QuestionStem";

interface Section {
  category: QuestionCategory;
  questions: ExamQuestion[];
  passages: ExamPassage[];
}

interface Paper {
  sections: Section[];
  all: ExamQuestion[];
  startedAt: number;
}

interface Summary extends ExamAttempt {
  xp: number;
  auto: boolean;
}

function sectionQuestions(s: Section): ExamQuestion[] {
  return [...s.passages.flatMap((p) => p.questions), ...s.questions];
}

function buildPaper(pool: ExamPool, c: ExamConfig): Paper {
  // Membaca: utamakan bacaan dokkai; soal membaca lepas (kurasi) mengisi sisanya
  const passages = pickReading(pool.passages, c.membaca);
  const fromPassages = passages.reduce((s, p) => s + p.questions.length, 0);
  const sections: Section[] = [
    { category: "kanji" as QuestionCategory, questions: shuffle(pool.kanji).slice(0, c.kanji), passages: [] },
    { category: "kosakata" as QuestionCategory, questions: shuffle(pool.kosakata).slice(0, c.kosakata), passages: [] },
    { category: "tata-bahasa" as QuestionCategory, questions: shuffle(pool.tataBahasa).slice(0, c.grammar), passages: [] },
    { category: "membaca" as QuestionCategory, questions: shuffle(pool.membaca).slice(0, Math.max(0, c.membaca - fromPassages)), passages },
  ].filter((s) => s.questions.length > 0 || s.passages.length > 0);
  // Acak urutan pilihan jawaban setiap sesi
  const remix = (q: ExamQuestion): ExamQuestion => {
    const order = shuffle(q.options.map((_, i) => i));
    return { ...q, options: order.map((i) => q.options[i]), answerIndex: order.indexOf(q.answerIndex) };
  };
  const mixed = sections.map((s) => ({
    ...s,
    questions: s.questions.map(remix),
    passages: s.passages.map((p) => ({ ...p, questions: p.questions.map(remix) })),
  }));
  return { sections: mixed, all: mixed.flatMap(sectionQuestions), startedAt: Date.now() };
}

function fmtTime(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
}

export function ExamRunner({ pool, mode }: { pool: ExamPool; mode: ExamMode }) {
  const cfg = examConfig(mode, pool.level);
  const [phase, setPhase] = useState<"ready" | "running" | "result">("ready");
  const [paper, setPaper] = useState<Paper | null>(null);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [remaining, setRemaining] = useState(0);
  const [alert, setAlert] = useState("");
  const [furigana, setFurigana] = useState(true);
  const [summary, setSummary] = useState<Summary | null>(null);
  const [onlyWrong, setOnlyWrong] = useState(true);
  const answersRef = useRef(answers);
  answersRef.current = answers;
  const finishedRef = useRef(false);
  const topRef = useRef<HTMLDivElement>(null);

  const readingInPool = pool.membaca.length + pool.passages.reduce((s, p) => s + p.questions.length, 0);
  const poolSize = pool.kanji.length + pool.kosakata.length + pool.tataBahasa.length + readingInPool;

  const finish = useCallback(
    (auto: boolean) => {
      if (!paper || finishedRef.current) return;
      finishedRef.current = true;
      const ans = answersRef.current;
      const byCategory: ExamAttempt["byCategory"] = {};
      const results: { q: ExamQuestion; correct: boolean }[] = [];
      for (const s of paper.sections) {
        for (const q of sectionQuestions(s)) {
          const ok = ans[q.id] === q.answerIndex;
          results.push({ q, correct: ok });
          const cur = byCategory[s.category] ?? { correct: 0, total: 0 };
          byCategory[s.category] = { correct: cur.correct + (ok ? 1 : 0), total: cur.total + 1 };
        }
      }
      const score = results.filter((r) => r.correct).length;
      const attempt: ExamAttempt = {
        id: String(Date.now()),
        date: new Date().toISOString(),
        level: pool.level,
        mode,
        score,
        total: results.length,
        durationSec: Math.min(cfg.minutes * 60, Math.round((Date.now() - paper.startedAt) / 1000)),
        byCategory,
      };
      saveExamAttempt(attempt);
      recordResults(results);
      const xp = addActivity(score * XP.examCorrect + XP.examBonus);
      setSummary({ ...attempt, xp, auto });
      setPhase("result");
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [paper, pool.level, mode, cfg.minutes],
  );

  useEffect(() => {
    if (phase !== "running" || !paper) return;
    const end = paper.startedAt + cfg.minutes * 60_000;
    const tick = () => {
      const left = Math.max(0, Math.round((end - Date.now()) / 1000));
      setRemaining(left);
      if (left === 600) setAlert("Sisa waktu 10 menit.");
      if (left === 300) setAlert("Sisa waktu 5 menit.");
      if (left === 60) setAlert("Sisa waktu 1 menit.");
      if (left <= 0) finish(true);
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [phase, paper, finish, cfg.minutes]);

  useEffect(() => {
    if (phase !== "running") return;
    const warn = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [phase]);

  function start() {
    finishedRef.current = false;
    setAnswers({});
    setSummary(null);
    setAlert("");
    setPaper(buildPaper(pool, cfg));
    setPhase("running");
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function submit() {
    if (!paper) return;
    const unanswered = paper.all.filter((q) => answersRef.current[q.id] === undefined).length;
    if (unanswered > 0 && !window.confirm(unanswered + " soal belum dijawab. Kumpulkan sekarang?")) return;
    finish(false);
  }

  /* ════════ KONFIRMASI SEBELUM MULAI ════════ */
  if (phase === "ready" || !paper) {
    const parts: [QuestionCategory, number][] = [
      ["kanji", cfg.kanji],
      ["kosakata", cfg.kosakata],
      ["tata-bahasa", cfg.grammar],
      ["membaca", cfg.membaca],
    ];
    const breakdown = mode === "real" ? REAL_BREAKDOWN[pool.level] : null;
    return (
      <div ref={topRef} className="scroll-mt-28 space-y-6">
        <section aria-labelledby="ready-title" className="rounded-card border border-line bg-surface p-6 shadow-card sm:p-8">
          <div className="text-center">
            <div className="flex justify-center">
              <LevelBadge level={pool.level} className="h-10 min-w-[4rem] text-base" />
            </div>
            <h2 id="ready-title" className="mt-4 text-2xl font-extrabold text-ink">
              {cfg.label} {pool.level}
            </h2>
            <p className="mt-1 text-ink-muted">{cfg.tagline}</p>
          </div>

          <dl className="mx-auto mt-6 grid max-w-md grid-cols-2 gap-3 text-center">
            <div className="rounded-lg bg-surface-muted p-3">
              <dt className="text-xs text-ink-muted">Jumlah soal</dt>
              <dd className="text-2xl font-extrabold text-ink">{estimatedCount(cfg)}</dd>
            </div>
            <div className="rounded-lg bg-surface-muted p-3">
              <dt className="text-xs text-ink-muted">Waktu</dt>
              <dd className="text-2xl font-extrabold text-ink">{cfg.minutes} menit</dd>
            </div>
          </dl>

          <div className="mx-auto mt-6 max-w-xl overflow-x-auto">
            <table className="w-full text-sm">
              <caption className="sr-only">Susunan soal</caption>
              <thead>
                <tr className="border-b border-line text-left text-ink-muted">
                  <th className="py-2 pr-2 font-semibold">Bagian</th>
                  {breakdown && <th className="py-2 pr-2 font-semibold">Jenis soal (目安 JLPT)</th>}
                  <th className="py-2 text-right font-semibold">Soal</th>
                </tr>
              </thead>
              <tbody>
                {parts.map(([cat, n], i) => (
                  <tr key={cat} className="border-b border-line last:border-0">
                    <td className="py-2 pr-2 font-semibold text-ink">
                      {i + 1}. {CATEGORY_LABEL[cat]}
                    </td>
                    {breakdown && (
                      <td lang="ja" className="py-2 pr-2 font-jp text-xs text-ink-muted">
                        {breakdown.find((b) => b.group === cat)?.items.map(([name, k]) => name + " " + k).join(" · ")}
                      </td>
                    )}
                    <td className="py-2 text-right font-bold text-ink">{n}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="mx-auto mt-6 max-w-xl space-y-1 text-sm text-ink-muted">
            <li>• Timer berjalan setelah tombol mulai ditekan; jawaban dikumpulkan otomatis saat waktu habis.</li>
            <li>• Soal dan urutan pilihan jawaban diacak setiap kali ujian dimulai.</li>
            <li>• Jawaban dan pembahasan ditampilkan setelah ujian selesai.</li>
            {mode === "real" && <li>• Jumlah soal mengikuti perkiraan resmi JLPT tanpa bagian mendengarkan (choukai); jenis soal disederhanakan ke format pilihan ganda situs ini.</li>}
          </ul>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button type="button" onClick={start} disabled={poolSize === 0} className={buttonClass("primary", "lg")}>
              Mulai sekarang
            </button>
            <Link href={"/latihan?level=" + pool.level} className={buttonClass("outline", "lg")}>
              Ganti level / skema
            </Link>
          </div>
          {readingInPool < cfg.membaca && (
            <p className="mt-3 text-center text-xs text-amber-700 dark:text-amber-300">
              Stok soal membaca {pool.level} saat ini {readingInPool} soal; bagian membaca akan berisi sebanyak yang tersedia.
            </p>
          )}
        </section>
      </div>
    );
  }

  /* ════════ BERJALAN / HASIL ════════ */
  const reveal = phase === "result";
  const answeredCount = paper.all.filter((q) => answers[q.id] !== undefined).length;
  const numberOf = new Map(paper.all.map((q, i) => [q.id, i + 1]));
  const isWrong = (q: ExamQuestion) => answers[q.id] !== q.answerIndex;

  function renderQuestion(q: ExamQuestion) {
    if (reveal && onlyWrong && !isWrong(q)) return null;
    return (
      <li key={q.id} className="rounded-card border border-line bg-surface p-5 shadow-card">
        <ChoiceQuestion
          prompt={<QuestionText q={q} number={numberOf.get(q.id)} />}
          options={q.options.map((o) => <span key={o} lang="ja">{o}</span>)}
          answerIndex={q.answerIndex}
          explanation={
            <>
              {q.explanation}
              {q.href && (
                <>
                  {" "}
                  <Link href={q.href} className="font-semibold underline">Pelajari materinya →</Link>
                </>
              )}
            </>
          }
          selected={answers[q.id] ?? null}
          onSelect={(i) => setAnswers((prev) => ({ ...prev, [q.id]: i }))}
          reveal={reveal}
        />
      </li>
    );
  }

  const weak = summary
    ? (Object.entries(summary.byCategory) as [QuestionCategory, { correct: number; total: number }][]).filter(([, v]) => v.total > 0 && v.correct / v.total < 0.6)
    : [];
  const wrongLinks = summary
    ? Array.from(new Map(paper.all.filter(isWrong).filter((q) => q.href).map((q) => [q.href as string, q])).values()).slice(0, 6)
    : [];

  return (
    <div ref={topRef} className={cn("scroll-mt-28 space-y-6", !furigana && "furigana-off")}>
      {phase === "running" && (
        <div className="sticky top-16 z-30 flex flex-wrap items-center justify-between gap-3 rounded-card border border-line bg-surface/95 p-3 shadow-card backdrop-blur sm:top-24">
          <div className="flex items-center gap-3">
            <LevelBadge level={pool.level} />
            <span className="hidden text-sm font-semibold text-ink sm:inline">{cfg.label}</span>
            <span className={cn("font-mono text-xl font-bold", remaining <= 60 ? "text-red-600 dark:text-red-400" : "text-ink")} aria-label={"Sisa waktu " + fmtTime(remaining)}>
              ⏱ {fmtTime(remaining)}
            </span>
            <span className="text-sm text-ink-muted">Terjawab {answeredCount}/{paper.all.length}</span>
          </div>
          <div className="flex items-center gap-3">
            <label className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-ink">
              <input type="checkbox" checked={furigana} onChange={(e) => setFurigana(e.target.checked)} className="h-4 w-4 accent-brand-500" />
              Furigana
            </label>
            <button type="button" onClick={submit} className={buttonClass("primary", "sm")}>Selesai</button>
          </div>
          <p className="sr-only" aria-live="assertive">{alert}</p>
        </div>
      )}

      {summary && (
        <section aria-labelledby="res-title" className="rounded-card border border-line bg-surface p-5 shadow-card sm:p-6">
          <h2 id="res-title" className="text-xl font-extrabold text-ink">Hasil {cfg.label} {summary.level}</h2>
          {summary.auto && <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">Waktu habis — jawaban dikumpulkan otomatis.</p>}
          <div className="mt-4 flex flex-wrap items-end gap-6">
            <p>
              <span className="text-4xl font-extrabold text-brand-600 dark:text-brand-300">{summary.score}/{summary.total}</span>
              <span className="ml-2 text-lg text-ink-muted">({Math.round((summary.score / Math.max(1, summary.total)) * 100)}%)</span>
            </p>
            <p className="text-sm text-ink-muted">Waktu: {fmtTime(summary.durationSec)}</p>
            {summary.xp > 0 && <Badge tone="success">+{summary.xp} XP</Badge>}
          </div>

          <h3 className="mt-6 font-bold text-ink">Analisis per bagian</h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {(Object.entries(summary.byCategory) as [QuestionCategory, { correct: number; total: number }][]).map(([cat, v]) => (
              <ProgressBar key={cat} value={v.correct} max={v.total} label={CATEGORY_LABEL[cat] + ": " + v.correct + "/" + v.total} />
            ))}
          </div>

          <h3 className="mt-6 font-bold text-ink">Rekomendasi belajar</h3>
          {weak.length === 0 && wrongLinks.length === 0 ? (
            <p className="mt-2 text-sm text-ink">Hasil yang bagus di semua bagian. Coba Real Test atau level berikutnya. 🌸</p>
          ) : (
            <ul className="mt-2 space-y-1.5 text-sm">
              {weak.map(([cat]) => (
                <li key={cat}>
                  📌 {CATEGORY_LABEL[cat]} masih di bawah 60% —{" "}
                  <Link href={moduleHref(cat, summary.level)} className="font-semibold text-brand-600 underline dark:text-brand-300">
                    ulangi materi {CATEGORY_LABEL[cat].toLowerCase()} {summary.level}
                  </Link>
                </li>
              ))}
              {wrongLinks.map((q) => (
                <li key={q.href}>
                  🔁{" "}
                  <Link href={q.href as string} className="font-semibold text-brand-600 underline dark:text-brand-300">
                    {q.passageTitle ? <Furigana text={q.passageTitle} /> : (q.stem ?? q.prompt).replace(/\[\[|\]\]/g, "")}
                  </Link>{" "}
                  <span className="text-ink-muted">({CATEGORY_LABEL[q.category]})</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <button type="button" onClick={start} className={buttonClass("primary", "md")}>Ulangi dengan soal baru</button>
            <Link href={"/latihan?level=" + pool.level} className={buttonClass("outline", "md")}>Ganti level / skema</Link>
            <Link href="/latihan/ulang" className={buttonClass("outline", "md")}>Ulangi jawaban salah</Link>
            <Link href="/dashboard" className={buttonClass("ghost", "md")}>Lihat dashboard</Link>
          </div>

          <div className="mt-6 flex items-center gap-2 border-t border-line pt-4">
            <input id="only-wrong" type="checkbox" checked={onlyWrong} onChange={(e) => setOnlyWrong(e.target.checked)} className="h-4 w-4 accent-brand-500" />
            <label htmlFor="only-wrong" className="text-sm font-semibold text-ink">Tampilkan pembahasan jawaban salah saja</label>
          </div>
        </section>
      )}

      {paper.sections.map((s, si) => {
        const qs = sectionQuestions(s);
        if (reveal && onlyWrong && qs.every((q) => !isWrong(q))) return null;
        return (
          <section key={s.category} aria-labelledby={"sec-" + s.category} className="space-y-4">
            <h2 id={"sec-" + s.category} className="text-lg font-extrabold text-ink">
              Bagian {si + 1} · {CATEGORY_LABEL[s.category]} <span className="text-sm font-normal text-ink-muted">({qs.length} soal)</span>
            </h2>
            {s.passages.map((p) => (
              <div key={p.slug} className="space-y-4">
                {!(reveal && onlyWrong && p.questions.every((q) => !isWrong(q))) && (
                  <article className="rounded-card border border-brand-200 bg-brand-50/40 p-5 dark:border-brand-500/30 dark:bg-brand-500/5">
                    <h3 className="mb-3 text-lg font-bold leading-loose text-ink">
                      <Furigana text={p.title} />
                    </h3>
                    <div className="space-y-3 text-lg leading-[2.3] text-ink">
                      {p.paragraphs.map((para, i) => (
                        <p key={i}>
                          <span className="mr-1 text-xs font-bold text-ink-muted">[{i + 1}]</span>
                          <Furigana text={para} />
                        </p>
                      ))}
                    </div>
                  </article>
                )}
                <ol className="space-y-4">{p.questions.map(renderQuestion)}</ol>
              </div>
            ))}
            {s.questions.length > 0 && <ol className="space-y-4">{s.questions.map(renderQuestion)}</ol>}
          </section>
        );
      })}

      {phase === "running" && (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-card border border-line bg-surface p-4 shadow-card">
          <p className="text-sm text-ink-muted">Terjawab {answeredCount} dari {paper.all.length} soal.</p>
          <button type="button" onClick={submit} className={buttonClass("primary", "md")}>Kumpulkan jawaban</button>
        </div>
      )}
    </div>
  );
}
