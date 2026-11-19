"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { JlptLevel, QuestionCategory } from "@/lib/types";
import { CATEGORY_LABEL, type ExamQuestion } from "@/lib/exam";
import { XP, addActivity, recordResults } from "@/lib/progress";
import { ChoiceQuestion } from "@/components/learn/ChoiceQuestion";
import { Badge, LevelBadge } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/EmptyState";
import { LevelFilter, countByLevel, type LevelValue } from "@/components/ui/LevelFilter";
import { cn } from "@/lib/utils";
import { QuestionText } from "./QuestionStem";

const BATCH = 10;

/**
 * Mode latihan per topik: filter level & kategori, jawab per soal, skor sesi,
 * daftar jawaban salah (tersimpan untuk diulang), dan XP.
 */
export function PracticeExplorer({ questions, initialLevel }: { questions: ExamQuestion[]; initialLevel: JlptLevel | "all" }) {
  const [level, setLevel] = useState<LevelValue>(initialLevel);
  const [category, setCategory] = useState<QuestionCategory | "all">("all");
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [round, setRound] = useState(0);
  const [visible, setVisible] = useState(BATCH);

  const byCategory = useMemo(() => (category === "all" ? questions : questions.filter((q) => q.category === category)), [questions, category]);
  const levelCounts = useMemo(() => countByLevel(byCategory), [byCategory]);
  const list = byCategory.filter((q) => level === "all" || q.level === level);
  const shown = list.slice(0, visible);

  const answered = list.filter((q) => results[q.id] !== undefined);
  const correct = answered.filter((q) => results[q.id]).length;
  const wrong = answered.filter((q) => !results[q.id]);

  function onAnswered(q: ExamQuestion, ok: boolean) {
    setResults((r) => ({ ...r, [q.id]: ok }));
    addActivity(ok ? XP.practiceCorrect : XP.practiceWrong, "practice:" + q.id);
    recordResults([{ q, correct: ok }]);
  }

  function changeLevel(lv: LevelValue) {
    setLevel(lv);
    setVisible(BATCH);
  }

  function changeCategory(c: QuestionCategory | "all") {
    setCategory(c);
    setVisible(BATCH);
  }

  function restart() {
    setResults({});
    setRound((r) => r + 1);
    setVisible(BATCH);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
      <div>
        <div className="space-y-4 rounded-card border border-line bg-surface p-4 shadow-card">
          <LevelFilter value={level} onChange={changeLevel} counts={levelCounts} />
          <div role="group" aria-label="Filter kategori soal" className="flex flex-wrap gap-2">
            {(["all", "kanji", "kosakata", "tata-bahasa", "membaca"] as (QuestionCategory | "all")[]).map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={category === c}
                onClick={() => changeCategory(c)}
                className={cn(
                  "h-8 rounded-lg px-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                  category === c ? "bg-brand-50 text-brand-700 ring-1 ring-brand-300 dark:bg-brand-500/15 dark:text-brand-200" : "text-ink-muted hover:bg-surface-muted hover:text-ink",
                )}
              >
                {c === "all" ? "Semua kategori" : CATEGORY_LABEL[c]}
              </button>
            ))}
          </div>
        </div>

        <p className="my-4 text-sm text-ink-muted" aria-live="polite">
          <strong className="text-ink">{list.length}</strong> soal tersedia · soal berganti setiap hari
        </p>

        {list.length === 0 ? (
          <EmptyState title="Belum ada soal untuk filter ini" description="Pilih level atau kategori lain." />
        ) : (
          <>
            <ol className="space-y-5">
              {shown.map((q, i) => (
                <li key={q.id + "-" + round} className="rounded-card border border-line bg-surface p-5 shadow-card">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="text-sm font-bold text-ink-muted">Soal {i + 1}</span>
                    <LevelBadge level={q.level} />
                    <Badge>{CATEGORY_LABEL[q.category]}</Badge>
                    <Badge tone="info">Latihan buatan platform</Badge>
                  </div>
                  <ChoiceQuestion
                    prompt={<QuestionText q={q} />}
                    options={q.options}
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
                    onAnswered={(ok) => onAnswered(q, ok)}
                  />
                </li>
              ))}
            </ol>
            {visible < list.length && (
              <div className="mt-6 text-center">
                <button
                  type="button"
                  onClick={() => setVisible((v) => v + BATCH)}
                  className="rounded-lg border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink hover:border-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  Tampilkan {Math.min(BATCH, list.length - visible)} soal lagi
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
        <section aria-labelledby="score-title" className="rounded-card border border-line bg-surface p-5 shadow-card">
          <h2 id="score-title" className="font-bold text-ink">Skor sesi ini</h2>
          <p className="mt-2 text-3xl font-extrabold text-brand-600 dark:text-brand-300" aria-live="polite">
            {correct}/{answered.length}
          </p>
          <p className="text-xs text-ink-muted">{answered.length} soal dijawab</p>
          <button type="button" onClick={restart} className="mt-4 w-full rounded-lg border border-line px-4 py-2 text-sm font-semibold text-ink hover:border-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
            Ulangi dari awal
          </button>
        </section>
        <section aria-labelledby="wrong-title" className="rounded-card border border-line bg-surface p-5 shadow-card">
          <h2 id="wrong-title" className="font-bold text-ink">Jawaban salah sesi ini</h2>
          {wrong.length === 0 ? (
            <p className="mt-2 text-sm text-ink-muted">Belum ada. Tetap semangat! 🌸</p>
          ) : (
            <ul className="mt-2 space-y-2 text-sm">
              {wrong.slice(0, 8).map((q) => (
                <li key={q.id} className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5"><LevelBadge level={q.level} /> {CATEGORY_LABEL[q.category]}</span>
                  {q.href && <Link href={q.href} className="font-semibold text-brand-600 hover:underline dark:text-brand-300">Pelajari</Link>}
                </li>
              ))}
            </ul>
          )}
          <Link href="/latihan/ulang" className="mt-3 inline-block text-sm font-semibold text-brand-600 hover:underline dark:text-brand-300">
            Ulangi semua jawaban salah →
          </Link>
        </section>
        <p className="text-xs text-ink-muted">
          Soal disusun otomatis dari materi situs dan soal buatan tim, mengikuti pola kompetensi umum — <strong>bukan</strong> soal resmi JLPT.
        </p>
      </aside>
    </div>
  );
}
