"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { JlptLevel, QuestionCategory } from "@/lib/types";
import { CATEGORY_LABEL, shuffle, type ExamPool, type ExamQuestion } from "@/lib/exam";
import { XP, addActivity, recordResults } from "@/lib/progress";
import { ChoiceQuestion } from "@/components/learn/ChoiceQuestion";
import { Badge, LevelBadge } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/EmptyState";
import { Furigana } from "@/components/ui/Furigana";
import { buttonClass } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { QuestionText } from "./QuestionStem";

const LEVELS: JlptLevel[] = ["N5", "N4", "N3", "N2"];
const CATS: QuestionCategory[] = ["kanji", "kosakata", "tata-bahasa", "membaca"];
const BATCH = 10;

function flatten(pool: ExamPool): Record<QuestionCategory, ExamQuestion[]> {
  return {
    kanji: pool.kanji,
    kosakata: pool.kosakata,
    "tata-bahasa": pool.tataBahasa,
    membaca: [...pool.membaca, ...pool.passages.flatMap((p) => p.questions)],
  };
}

/**
 * Latihan per topik satu level: bank ±100 soal per kategori, diacak ulang setiap sesi
 * di browser (urutan soal & pilihan jawaban). Jawaban salah tersimpan untuk diulang.
 */
export function PracticeExplorer({ pool }: { pool: ExamPool }) {
  const byCat = useMemo(() => flatten(pool), [pool]);
  const passages = useMemo(() => new Map(pool.passages.map((p) => [p.slug, p])), [pool]);
  const [category, setCategory] = useState<QuestionCategory>("kanji");
  const [order, setOrder] = useState<ExamQuestion[]>(byCat.kanji);
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [visible, setVisible] = useState(BATCH);
  const [round, setRound] = useState(0);

  // Acak setiap kali kategori diganti / sesi diulang (hanya di browser → tanpa hydration mismatch)
  useEffect(() => {
    const remix = (q: ExamQuestion): ExamQuestion => {
      const idx = shuffle(q.options.map((_, i) => i));
      return { ...q, options: idx.map((i) => q.options[i]), answerIndex: idx.indexOf(q.answerIndex) };
    };
    setOrder(shuffle(byCat[category]).map(remix));
    setVisible(BATCH);
  }, [byCat, category, round]);

  const shown = order.slice(0, visible);
  const answered = order.filter((q) => results[q.id] !== undefined);
  const correct = answered.filter((q) => results[q.id]).length;

  function onAnswered(q: ExamQuestion, ok: boolean) {
    setResults((r) => ({ ...r, [q.id]: ok }));
    addActivity(ok ? XP.practiceCorrect : XP.practiceWrong, "practice:" + q.id);
    recordResults([{ q, correct: ok }]);
  }

  function restart() {
    setResults({});
    setRound((r) => r + 1);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
      <div>
        <div className="space-y-4 rounded-card border border-line bg-surface p-4 shadow-card">
          <nav aria-label="Level" className="flex flex-wrap gap-2">
            {LEVELS.map((lv) => (
              <Link
                key={lv}
                href={"/latihan/topik?level=" + lv}
                aria-current={lv === pool.level ? "page" : undefined}
                className={cn(
                  "inline-flex h-9 items-center rounded-full border px-4 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                  lv === pool.level ? "border-brand-500 bg-brand-500 text-white" : "border-line bg-surface text-ink hover:border-brand-400",
                )}
              >
                {lv}
              </Link>
            ))}
          </nav>
          <div role="radiogroup" aria-label="Kategori soal" className="flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                type="button"
                role="radio"
                aria-checked={category === c}
                onClick={() => setCategory(c)}
                className={cn(
                  "h-9 rounded-lg px-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                  category === c ? "bg-brand-50 text-brand-700 ring-1 ring-brand-300 dark:bg-brand-500/15 dark:text-brand-200" : "text-ink-muted hover:bg-surface-muted hover:text-ink",
                )}
              >
                {CATEGORY_LABEL[c]} <span className="text-xs opacity-70">({byCat[c].length})</span>
              </button>
            ))}
          </div>
        </div>

        <div className="my-4 flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm text-ink-muted" aria-live="polite">
            <strong className="text-ink">{order.length}</strong> soal {CATEGORY_LABEL[category].toLowerCase()} {pool.level} · urutan diacak setiap sesi
          </p>
          <button type="button" onClick={restart} className="text-sm font-semibold text-brand-600 hover:underline dark:text-brand-300">
            🔀 Acak ulang
          </button>
        </div>

        {order.length === 0 ? (
          <EmptyState title="Belum ada soal untuk kategori ini" description="Pilih kategori lain atau level lain." />
        ) : (
          <>
            <ol className="space-y-5">
              {shown.map((q, i) => {
                const p = q.passageSlug ? passages.get(q.passageSlug) : undefined;
                return (
                  <li key={q.id + "-" + round} className="rounded-card border border-line bg-surface p-5 shadow-card">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="text-sm font-bold text-ink-muted">Soal {i + 1}</span>
                      <LevelBadge level={q.level} />
                      <Badge>{CATEGORY_LABEL[q.category]}</Badge>
                    </div>
                    {p && (
                      <details className="mb-3 rounded-lg border border-brand-200 bg-brand-50/40 p-3 dark:border-brand-500/30 dark:bg-brand-500/5" open>
                        <summary className="cursor-pointer text-sm font-semibold text-ink">
                          Bacaan: <Furigana text={p.title} />
                        </summary>
                        <div className="mt-2 space-y-2 text-base leading-[2.2] text-ink">
                          {p.paragraphs.map((para, k) => (
                            <p key={k}>
                              <span className="mr-1 text-xs font-bold text-ink-muted">[{k + 1}]</span>
                              <Furigana text={para} />
                            </p>
                          ))}
                        </div>
                      </details>
                    )}
                    <ChoiceQuestion
                      prompt={<QuestionText q={q} />}
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
                      onAnswered={(ok) => onAnswered(q, ok)}
                    />
                  </li>
                );
              })}
            </ol>
            {visible < order.length && (
              <div className="mt-6 text-center">
                <button type="button" onClick={() => setVisible((v) => v + BATCH)} className={buttonClass("outline", "md")}>
                  Tampilkan {Math.min(BATCH, order.length - visible)} soal lagi
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
          <button type="button" onClick={restart} className={buttonClass("outline", "md", "mt-4 w-full")}>
            Ulangi dengan urutan baru
          </button>
        </section>
        <Link href="/latihan/ulang" className="block rounded-card border border-line bg-surface p-5 text-sm font-semibold text-brand-600 shadow-card hover:border-brand-300 dark:text-brand-300">
          🔁 Ulangi semua jawaban salah →
        </Link>
        <p className="text-xs text-ink-muted">
          Soal disusun otomatis dari materi situs dan soal buatan tim, mengikuti pola kompetensi umum — <strong>bukan</strong> soal resmi JLPT.
        </p>
      </aside>
    </div>
  );
}
