"use client";

import { useState } from "react";
import type { ReadingLesson } from "@/lib/types";
import { Furigana } from "@/components/ui/Furigana";
import { ChoiceQuestion } from "@/components/learn/ChoiceQuestion";
import { useLearningState, useLocalStorage } from "@/lib/storage";
import { cn } from "@/lib/utils";

interface HistoryEntry {
  date: string;
  score: number;
  total: number;
}
type HistoryMap = Record<string, HistoryEntry[]>;

export function ReadingPlayer({ lesson }: { lesson: ReadingLesson }) {
  const [showFurigana, setShowFurigana] = useState(true);
  const [answers, setAnswers] = useState<(number | null)[]>(() => lesson.questions.map(() => null));
  const [submitted, setSubmitted] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [history, setHistory] = useLocalStorage<HistoryMap>("nch-dokkai-history", {});
  const { markAtLeast } = useLearningState();

  const total = lesson.questions.length;
  const score = answers.reduce<number>((acc, a, i) => acc + (a === lesson.questions[i].answerIndex ? 1 : 0), 0);
  const unanswered = answers.filter((a) => a === null).length;
  const myHistory = history[lesson.slug] ?? [];

  function submit() {
    setSubmitted(true);
    const entry: HistoryEntry = { date: new Date().toISOString(), score, total };
    setHistory((prev) => ({ ...prev, [lesson.slug]: [entry, ...(prev[lesson.slug] ?? [])].slice(0, 10) }));
    markAtLeast(`reading:${lesson.id}`, score === total ? "mastered" : "learning");
  }

  function retry() {
    setAnswers(lesson.questions.map(() => null));
    setSubmitted(false);
    setShowTranslation(false);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
      <div className="space-y-6">
        {/* Teks bacaan */}
        <section aria-labelledby="text-title" className="rounded-card border border-line bg-surface p-5 shadow-card sm:p-7">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h2 id="text-title" className="text-lg font-bold text-ink">Teks bacaan</h2>
            <label className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-ink">
              <input type="checkbox" role="switch" checked={showFurigana} onChange={(e) => setShowFurigana(e.target.checked)} className="h-4 w-4 accent-brand-500" />
              Tampilkan furigana
            </label>
          </div>
          <div className={cn("space-y-4 text-xl leading-[2.4] text-ink", !showFurigana && "furigana-off")}>
            {lesson.paragraphs.map((p, i) => (
              <p key={i}>
                <Furigana text={p} />
              </p>
            ))}
          </div>
        </section>

        {/* Pertanyaan */}
        <section aria-labelledby="q-title" className="rounded-card border border-line bg-surface p-5 shadow-card sm:p-7">
          <h2 id="q-title" className="mb-4 text-lg font-bold text-ink">Pertanyaan pemahaman</h2>
          <ol className="space-y-8">
            {lesson.questions.map((q, i) => (
              <li key={q.id}>
                <ChoiceQuestion
                  prompt={<><span className="mr-1 text-ink-muted">{i + 1}.</span><Furigana text={q.prompt} className="text-lg leading-loose" /></>}
                  options={q.options.map((o) => <span key={o} lang="ja">{o}</span>)}
                  answerIndex={q.answerIndex}
                  explanation={q.explanation}
                  selected={answers[i]}
                  onSelect={(choice) => setAnswers((prev) => prev.map((a, j) => (j === i ? choice : a)))}
                  reveal={submitted}
                />
              </li>
            ))}
          </ol>

          <div className="mt-8" aria-live="polite">
            {!submitted ? (
              <div className="flex flex-wrap items-center gap-3">
                <button type="button" onClick={submit} disabled={unanswered > 0} className="rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50">
                  Kumpulkan jawaban
                </button>
                {unanswered > 0 && <p className="text-sm text-ink-muted">{unanswered} soal belum dijawab.</p>}
              </div>
            ) : (
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-brand-50 p-4 dark:bg-brand-500/10">
                <p className="text-ink">
                  Skor: <strong className="text-2xl text-brand-600 dark:text-brand-300">{score}/{total}</strong>{" "}
                  <span className="text-sm text-ink-muted">{score === total ? "Sempurna! 🌸" : "Baca pembahasan lalu coba lagi kapan saja."}</span>
                </p>
                <button type="button" onClick={retry} className="rounded-lg border border-line bg-surface px-4 py-2 text-sm font-semibold text-ink hover:border-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
                  Kerjakan ulang
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Terjemahan — terkunci sampai jawaban dikumpulkan */}
        <section aria-labelledby="tr-title" className="rounded-card border border-line bg-surface p-5 shadow-card sm:p-7">
          <h2 id="tr-title" className="text-lg font-bold text-ink">Terjemahan</h2>
          {!submitted ? (
            <p className="mt-2 text-sm text-ink-muted">🔒 Terjemahan terbuka setelah kamu mengumpulkan jawaban. Coba pahami teksnya dulu!</p>
          ) : (
            <>
              <button
                type="button"
                aria-expanded={showTranslation}
                aria-controls="translation-body"
                onClick={() => setShowTranslation((v) => !v)}
                className="mt-2 text-sm font-semibold text-brand-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:text-brand-300"
              >
                {showTranslation ? "Sembunyikan terjemahan" : "Tampilkan terjemahan"}
              </button>
              {showTranslation && (
                <div id="translation-body" className="mt-3 space-y-3 text-ink">
                  {lesson.translation.map((t, i) => <p key={i}>{t}</p>)}
                </div>
              )}
            </>
          )}
        </section>
      </div>

      {/* Sidebar */}
      <aside className="space-y-6">
        <section aria-labelledby="kv-title" className="rounded-card border border-line bg-surface p-5 shadow-card">
          <h2 id="kv-title" className="mb-3 font-bold text-ink">Kosakata penting</h2>
          <dl className="space-y-2">
            {lesson.keyVocabulary.map((v) => (
              <div key={v.word} className="flex items-baseline justify-between gap-2 border-b border-line pb-2 last:border-0">
                <dt lang="ja" className="font-jp">
                  <span className="font-bold text-ink">{v.word}</span> <span className="text-xs text-ink-muted">{v.reading}</span>
                </dt>
                <dd className="text-right text-sm text-ink">{v.meaning}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="hist-title" className="rounded-card border border-line bg-surface p-5 shadow-card">
          <h2 id="hist-title" className="mb-3 font-bold text-ink">Riwayat pengerjaan</h2>
          {myHistory.length === 0 ? (
            <p className="text-sm text-ink-muted">Belum ada riwayat. Kerjakan soal untuk menyimpan skor pertamamu.</p>
          ) : (
            <ul className="space-y-1.5 text-sm">
              {myHistory.map((h) => (
                <li key={h.date} className="flex justify-between">
                  <time dateTime={h.date} className="text-ink-muted">
                    {new Date(h.date).toLocaleString("id-ID", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}
                  </time>
                  <span className={cn("font-semibold", h.score === h.total ? "text-emerald-600 dark:text-emerald-400" : "text-ink")}>
                    {h.score}/{h.total}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </aside>
    </div>
  );
}
