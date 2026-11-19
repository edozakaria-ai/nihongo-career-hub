"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { JlptLevel, QuestionCategory } from "@/lib/types";
import { CATEGORY_LABEL, EXAM_MODES, moduleHref, type ExamMode, type ExamPassage, type ExamPool, type ExamQuestion } from "@/lib/exam";
import type { ExamAttempt } from "@/lib/gamification";
import { XP, addActivity, recordResults, saveExamAttempt } from "@/lib/progress";
import { ChoiceQuestion } from "@/components/learn/ChoiceQuestion";
import { Furigana } from "@/components/ui/Furigana";
import { Badge, LevelBadge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { buttonClass } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { QuestionText } from "./QuestionStem";

const LEVELS: JlptLevel[] = ["N5", "N4", "N3", "N2"];

interface Section {
  category: QuestionCategory;
  questions: ExamQuestion[];
  passages: ExamPassage[];
}

interface Paper {
  mode: ExamMode;
  sections: Section[];
  all: ExamQuestion[];
  minutes: number;
  startedAt: number;
}

interface Summary extends ExamAttempt {
  xp: number;
  auto: boolean;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildPaper(pool: ExamPool, mode: ExamMode): Paper {
  const m = EXAM_MODES[mode];
  const sections: Section[] = [
    { category: "kanji" as QuestionCategory, questions: shuffle(pool.kanji).slice(0, m.kanji), passages: [] },
    { category: "kosakata" as QuestionCategory, questions: shuffle(pool.kosakata).slice(0, m.kosakata), passages: [] },
    { category: "tata-bahasa" as QuestionCategory, questions: shuffle(pool.tataBahasa).slice(0, m.grammar), passages: [] },
    { category: "membaca" as QuestionCategory, questions: shuffle(pool.membaca).slice(0, m.membaca), passages: shuffle(pool.passages).slice(0, m.passages) },
  ].filter((s) => s.questions.length > 0 || s.passages.length > 0);
  const all = sections.flatMap((s) => [...s.passages.flatMap((p) => p.questions), ...s.questions]);
  return { mode, sections, all, minutes: m.minutes, startedAt: Date.now() };
}

function sectionQuestions(s: Section): ExamQuestion[] {
  return [...s.passages.flatMap((p) => p.questions), ...s.questions];
}

function fmtTime(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
}

export function ExamRunner({ pool }: { pool: ExamPool }) {
  const [phase, setPhase] = useState<"setup" | "running" | "result">("setup");
  const [mode, setMode] = useState<ExamMode>("mini");
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

  const poolSize = pool.kanji.length + pool.kosakata.length + pool.tataBahasa.length + pool.membaca.length + pool.passages.length;

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
        mode: paper.mode,
        score,
        total: results.length,
        durationSec: Math.min(paper.minutes * 60, Math.round((Date.now() - paper.startedAt) / 1000)),
        byCategory,
      };
      saveExamAttempt(attempt);
      recordResults(results);
      const xp = addActivity(score * XP.examCorrect + XP.examBonus);
      setSummary({ ...attempt, xp, auto });
      setPhase("result");
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [paper, pool.level],
  );

  // Timer
  useEffect(() => {
    if (phase !== "running" || !paper) return;
    const end = paper.startedAt + paper.minutes * 60_000;
    const tick = () => {
      const left = Math.max(0, Math.round((end - Date.now()) / 1000));
      setRemaining(left);
      if (left === 300) setAlert("Sisa waktu 5 menit.");
      if (left === 60) setAlert("Sisa waktu 1 menit.");
      if (left <= 0) finish(true);
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [phase, paper, finish]);

  // Peringatan sebelum menutup halaman saat ujian berlangsung
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
    setPaper(buildPaper(pool, mode));
    setPhase("running");
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function submit() {
    if (!paper) return;
    const unanswered = paper.all.filter((q) => answersRef.current[q.id] === undefined).length;
    if (unanswered > 0 && !window.confirm(unanswered + " soal belum dijawab. Kumpulkan sekarang?")) return;
    finish(false);
  }

  function backToSetup() {
    setPhase("setup");
    setPaper(null);
    setAnswers({});
    setSummary(null);
  }

  /* ════════ SETUP ════════ */
  if (phase === "setup" || !paper) {
    return (
      <div ref={topRef} className="scroll-mt-28 space-y-6">
        <section aria-labelledby="lv-title" className="rounded-card border border-line bg-surface p-5 shadow-card">
          <h2 id="lv-title" className="mb-3 font-bold text-ink">1 · Pilih level</h2>
          <nav aria-label="Level ujian" className="flex flex-wrap gap-2">
            {LEVELS.map((lv) => (
              <Link
                key={lv}
                href={"/latihan/ujian?level=" + lv}
                aria-current={lv === pool.level ? "page" : undefined}
                className={cn(
                  "inline-flex h-10 items-center rounded-full border px-5 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                  lv === pool.level ? "border-brand-500 bg-brand-500 text-white" : "border-line bg-surface text-ink hover:border-brand-400",
                )}
              >
                {lv}
              </Link>
            ))}
          </nav>
        </section>

        <fieldset className="rounded-card border border-line bg-surface p-5 shadow-card">
          <legend className="px-1 font-bold text-ink">2 · Pilih jenis ujian</legend>
          <div className="mt-2 grid gap-3 sm:grid-cols-2">
            {(Object.keys(EXAM_MODES) as ExamMode[]).map((m) => (
              <label
                key={m}
                className={cn(
                  "flex cursor-pointer gap-3 rounded-lg border p-4 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand-500",
                  mode === m ? "border-brand-500 bg-brand-50 dark:bg-brand-500/10" : "border-line hover:border-brand-300",
                )}
              >
                <input type="radio" name="exam-mode" value={m} checked={mode === m} onChange={() => setMode(m)} className="mt-1 h-4 w-4 accent-brand-500" />
                <span>
                  <span className="block font-bold text-ink">{EXAM_MODES[m].label}</span>
                  <span className="text-sm text-ink-muted">{EXAM_MODES[m].description}</span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="flex flex-wrap items-center gap-3">
          <button type="button" onClick={start} disabled={poolSize === 0} className={buttonClass("primary", "lg")}>
            Mulai ujian {pool.level}
          </button>
          <p className="text-sm text-ink-muted">Waktu: {EXAM_MODES[mode].minutes} menit · jawaban dikumpulkan otomatis saat waktu habis.</p>
        </div>

        <p className="rounded-lg bg-surface-muted p-4 text-xs text-ink-muted">
          Soal disusun otomatis dari materi situs dan soal buatan tim Nihongo Career Hub, mengikuti pola kompetensi umum JLPT.
          Ini <strong>bukan</strong> soal resmi JLPT, dan skor hanya perkiraan untuk latihan.
        </p>
      </div>
    );
  }

  /* ════════ RUNNING / RESULT ════════ */
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
      {/* Bar status */}
      {phase === "running" && (
        <div className="sticky top-16 z-30 flex flex-wrap items-center justify-between gap-3 rounded-card border border-line bg-surface/95 p-3 shadow-card backdrop-blur sm:top-24">
          <div className="flex items-center gap-3">
            <LevelBadge level={pool.level} />
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

      {/* Hasil */}
      {summary && (
        <section aria-labelledby="res-title" className="rounded-card border border-line bg-surface p-5 shadow-card sm:p-6">
          <h2 id="res-title" className="text-xl font-extrabold text-ink">Hasil simulasi {summary.level}</h2>
          {summary.auto && <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">Waktu habis — jawaban dikumpulkan otomatis.</p>}
          <div className="mt-4 flex flex-wrap items-end gap-6">
            <p>
              <span className="text-4xl font-extrabold text-brand-600 dark:text-brand-300">{summary.score}/{summary.total}</span>
              <span className="ml-2 text-lg text-ink-muted">({Math.round((summary.score / Math.max(1, summary.total)) * 100)}%)</span>
            </p>
            <p className="text-sm text-ink-muted">Waktu: {fmtTime(summary.durationSec)}</p>
            {summary.xp > 0 && <Badge tone="success">+{summary.xp} XP</Badge>}
          </div>

          <h3 className="mt-6 font-bold text-ink">Analisis per kategori</h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {(Object.entries(summary.byCategory) as [QuestionCategory, { correct: number; total: number }][]).map(([cat, v]) => (
              <ProgressBar key={cat} value={v.correct} max={v.total} label={CATEGORY_LABEL[cat] + ": " + v.correct + "/" + v.total} />
            ))}
          </div>

          <h3 className="mt-6 font-bold text-ink">Rekomendasi belajar</h3>
          {weak.length === 0 && wrongLinks.length === 0 ? (
            <p className="mt-2 text-sm text-ink">Hasil yang bagus di semua kategori. Coba level berikutnya atau mode Standar. 🌸</p>
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
                  🔁 <Link href={q.href as string} className="font-semibold text-brand-600 underline dark:text-brand-300">
                    {q.passageTitle ? <Furigana text={q.passageTitle} /> : (q.stem ?? q.prompt).replace(/\[\[|\]\]/g, "")}
                  </Link>{" "}
                  <span className="text-ink-muted">({CATEGORY_LABEL[q.category]})</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <button type="button" onClick={backToSetup} className={buttonClass("primary", "md")}>Ujian baru (soal acak lagi)</button>
            <Link href="/latihan/ulang" className={buttonClass("outline", "md")}>Ulangi jawaban salah</Link>
            <Link href="/dashboard" className={buttonClass("ghost", "md")}>Lihat dashboard</Link>
          </div>

          <div className="mt-6 flex items-center gap-2 border-t border-line pt-4">
            <input id="only-wrong" type="checkbox" checked={onlyWrong} onChange={(e) => setOnlyWrong(e.target.checked)} className="h-4 w-4 accent-brand-500" />
            <label htmlFor="only-wrong" className="text-sm font-semibold text-ink">Tampilkan pembahasan jawaban salah saja</label>
          </div>
        </section>
      )}

      {/* Soal per bagian */}
      {paper.sections.map((s, si) => {
        const qs = sectionQuestions(s);
        if (reveal && onlyWrong && qs.every((q) => !isWrong(q))) return null;
        return (
          <section key={s.category} aria-labelledby={"sec-" + s.category} className="space-y-4">
            <h2 id={"sec-" + s.category} className="text-lg font-extrabold text-ink">
              Bagian {si + 1} · {CATEGORY_LABEL[s.category]}
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
