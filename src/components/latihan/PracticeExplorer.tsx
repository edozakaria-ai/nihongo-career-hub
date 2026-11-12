"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { JlptLevel, Question, QuestionCategory } from "@/lib/types";
import { ChoiceQuestion } from "@/components/learn/ChoiceQuestion";
import { Badge, LevelBadge } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/EmptyState";
import { LevelFilter, countByLevel, type LevelValue } from "@/components/ui/LevelFilter";
import { cn } from "@/lib/utils";

const CATEGORY_LABEL: Record<QuestionCategory, string> = {
  kanji: "Kanji",
  kosakata: "Kosakata",
  "tata-bahasa": "Tata bahasa",
  membaca: "Membaca",
};

/** Tautan materi terkait berdasarkan prefix relatedTopic (k- kanji, v- kotoba, g- bunpou, r- dokkai). */
function topicHref(topic?: string): string | null {
  if (!topic) return null;
  if (topic.startsWith("k-")) return `/kanji/${topic}`;
  if (topic.startsWith("v-")) return "/kotoba";
  if (topic.startsWith("g-")) return "/bunpou";
  if (topic.startsWith("r-")) return "/dokkai";
  return null;
}

/** Render stem: bagian [[...]] diberi garis bawah (bagian yang ditanyakan). */
function Stem({ text }: { text: string }) {
  const parts = text.split(/(\[\[[^\]]+\]\])/g);
  return (
    <span lang="ja" className="mt-2 block rounded-lg bg-surface-muted p-3 font-jp text-lg font-normal text-ink">
      {parts.map((p, i) =>
        p.startsWith("[[") ? (
          <u key={i} className="decoration-brand-500 decoration-2 underline-offset-4">{p.slice(2, -2)}</u>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </span>
  );
}

/**
 * Mode latihan per topik: filter level & kategori, jawab per soal, lihat skor sesi
 * dan daftar jawaban salah. (Mode ujian berwaktu + analisis lengkap: Tahap 3.)
 */
export function PracticeExplorer({ questions, initialLevel }: { questions: Question[]; initialLevel: JlptLevel | "all" }) {
  const [level, setLevel] = useState<LevelValue>(initialLevel);
  const [category, setCategory] = useState<QuestionCategory | "all">("all");
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [round, setRound] = useState(0);

  const byCategory = useMemo(() => (category === "all" ? questions : questions.filter((q) => q.category === category)), [questions, category]);
  const levelCounts = useMemo(() => countByLevel(byCategory), [byCategory]);
  const list = byCategory.filter((q) => level === "all" || q.level === level);

  const answered = list.filter((q) => results[q.id] !== undefined);
  const correct = answered.filter((q) => results[q.id]).length;
  const wrong = answered.filter((q) => !results[q.id]);

  function restart() {
    setResults({});
    setRound((r) => r + 1);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
      <div>
        <div className="space-y-4 rounded-card border border-line bg-surface p-4 shadow-card">
          <LevelFilter value={level} onChange={setLevel} counts={levelCounts} />
          <div role="group" aria-label="Filter kategori soal" className="flex flex-wrap gap-2">
            {(["all", ...Object.keys(CATEGORY_LABEL)] as (QuestionCategory | "all")[]).map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
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
          <strong className="text-ink">{list.length}</strong> soal tersedia
        </p>

        {list.length === 0 ? (
          <EmptyState title="Belum ada soal untuk filter ini" description="Pilih level atau kategori lain. Bank soal akan terus ditambah." />
        ) : (
          <ol className="space-y-5">
            {list.map((q, i) => {
              const href = topicHref(q.relatedTopic);
              return (
                <li key={`${q.id}-${round}`} className="rounded-card border border-line bg-surface p-5 shadow-card">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="text-sm font-bold text-ink-muted">Soal {i + 1}</span>
                    <LevelBadge level={q.level} />
                    <Badge>{CATEGORY_LABEL[q.category]}</Badge>
                    <Badge tone="info">Latihan buatan platform</Badge>
                  </div>
                  <ChoiceQuestion
                    prompt={
                      <>
                        {q.prompt}
                        {q.stem && <Stem text={q.stem} />}
                      </>
                    }
                    options={q.options}
                    answerIndex={q.answerIndex}
                    explanation={
                      <>
                        {q.explanation}
                        {href && (
                          <>
                            {" "}
                            <Link href={href} className="font-semibold underline">Pelajari materinya →</Link>
                          </>
                        )}
                      </>
                    }
                    onAnswered={(ok) => setResults((r) => ({ ...r, [q.id]: ok }))}
                  />
                </li>
              );
            })}
          </ol>
        )}
      </div>

      <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
        <section aria-labelledby="score-title" className="rounded-card border border-line bg-surface p-5 shadow-card">
          <h2 id="score-title" className="font-bold text-ink">Skor sesi ini</h2>
          <p className="mt-2 text-3xl font-extrabold text-brand-600 dark:text-brand-300" aria-live="polite">
            {correct}/{answered.length}
          </p>
          <p className="text-xs text-ink-muted">{answered.length} dari {list.length} soal dijawab</p>
          <button type="button" onClick={restart} className="mt-4 w-full rounded-lg border border-line px-4 py-2 text-sm font-semibold text-ink hover:border-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
            Ulangi dari awal
          </button>
        </section>
        <section aria-labelledby="wrong-title" className="rounded-card border border-line bg-surface p-5 shadow-card">
          <h2 id="wrong-title" className="font-bold text-ink">Jawaban salah</h2>
          {wrong.length === 0 ? (
            <p className="mt-2 text-sm text-ink-muted">Belum ada. Tetap semangat! 🌸</p>
          ) : (
            <ul className="mt-2 space-y-2 text-sm">
              {wrong.map((q) => {
                const href = topicHref(q.relatedTopic);
                return (
                  <li key={q.id} className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-1.5"><LevelBadge level={q.level} /> {CATEGORY_LABEL[q.category]}</span>
                    {href && <Link href={href} className="font-semibold text-brand-600 hover:underline dark:text-brand-300">Pelajari</Link>}
                  </li>
                );
              })}
            </ul>
          )}
        </section>
        <p className="text-xs text-ink-muted">
          Semua soal dibuat orisinal oleh Nihongo Career Hub mengikuti pola kompetensi umum, <strong>bukan</strong> soal resmi JLPT.
        </p>
      </aside>
    </div>
  );
}
