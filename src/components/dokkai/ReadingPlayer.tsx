"use client";

import Link from "next/link";
import { useState } from "react";
import type { JlptLevel } from "@/lib/types";
import type { NewsReading } from "@/data/dokkai/types";
import type { KanjiStats } from "@/lib/kanji-level";
import { Furigana } from "@/components/ui/Furigana";
import { LevelBadge } from "@/components/ui/Badge";
import { ChoiceQuestion } from "@/components/learn/ChoiceQuestion";
import { FavoriteButton } from "@/components/learn/FavoriteButton";
import { useLearningState, useLocalStorage } from "@/lib/storage";
import { cn } from "@/lib/utils";
import { NewsThumb } from "./NewsThumb";
import { LevelLegend } from "./LevelLegend";

export interface RelatedGrammar {
  slug: string;
  pattern: string;
  meaning: string;
  level: JlptLevel;
}

interface HistoryEntry {
  date: string;
  score: number;
  total: number;
}
type HistoryMap = Record<string, HistoryEntry[]>;

interface ReadingPlayerProps {
  lesson: NewsReading;
  kanjiLevels: Record<string, JlptLevel>;
  kanjiLinks: Record<string, string>;
  stats: KanjiStats;
  grammar: RelatedGrammar[];
}

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return Number.isNaN(d.getTime()) ? iso : d.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}

const card = "rounded-card border border-line bg-surface p-5 shadow-card sm:p-6";

export function ReadingPlayer({ lesson, kanjiLevels, kanjiLinks, stats, grammar }: ReadingPlayerProps) {
  const [showFurigana, setShowFurigana] = useState(true);
  const [showColors, setShowColors] = useState(true);
  const [answers, setAnswers] = useState<(number | null)[]>(() => lesson.questions.map(() => null));
  const [submitted, setSubmitted] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [history, setHistory] = useLocalStorage<HistoryMap>("nch-dokkai-history", {});
  const { markAtLeast } = useLearningState();

  const levels = showColors ? kanjiLevels : undefined;
  const total = lesson.questions.length;
  const score = answers.reduce<number>((acc, a, i) => acc + (a === lesson.questions[i].answerIndex ? 1 : 0), 0);
  const unanswered = answers.filter((a) => a === null).length;
  const myHistory = history[lesson.slug] ?? [];

  function submit() {
    setSubmitted(true);
    const entry: HistoryEntry = { date: new Date().toISOString(), score, total };
    setHistory((prev) => ({ ...prev, [lesson.slug]: [entry, ...(prev[lesson.slug] ?? [])].slice(0, 10) }));
    markAtLeast("reading:" + lesson.id, score === total ? "mastered" : "learning");
  }

  function retry() {
    setAnswers(lesson.questions.map(() => null));
    setSubmitted(false);
  }

  return (
    <div className={cn("space-y-6", !showFurigana && "furigana-off")}>
      {/* Judul & kontrol */}
      <header className={card}>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="min-w-0 flex-1 text-2xl font-extrabold leading-[2.2] text-ink sm:text-3xl">
            <Furigana text={lesson.title} kanjiLevels={levels} />
          </h1>
          <FavoriteButton itemKey={"reading:" + lesson.id} label="bacaan ini" />
        </div>
        <p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-ink-muted">
          <time dateTime={lesson.date}>{formatDate(lesson.date)}</time>
          <span aria-hidden="true">•</span>
          <LevelBadge level={lesson.level} />
          <span>⏱ ± {lesson.minutes} menit</span>
          <span aria-hidden="true">•</span>
          <span>{lesson.topic}</span>
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-line pt-4">
          <label className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-ink">
            <input type="checkbox" checked={showFurigana} onChange={(e) => setShowFurigana(e.target.checked)} className="h-4 w-4 accent-brand-500" />
            Tunjukkan Furigana
          </label>
          <label className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-ink">
            <input type="checkbox" checked={showColors} onChange={(e) => setShowColors(e.target.checked)} className="h-4 w-4 accent-brand-500" />
            Warna level kanji
          </label>
          {showColors && <LevelLegend />}
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
        <div className="space-y-6">
          {/* Teks bacaan */}
          <section aria-label="Teks bacaan" className={card}>
            <NewsThumb thumb={lesson.thumb} size="lg" className="mb-5 h-48 w-full sm:h-56" />
            <div className="space-y-4 text-xl leading-[2.4] text-ink">
              {lesson.paragraphs.map((p, i) => (
                <p key={i}>
                  <Furigana text={p} kanjiLevels={levels} kanjiLinks={kanjiLinks} />
                </p>
              ))}
            </div>
            <p className="mt-4 text-right text-xs text-ink-muted">
              Sumber:{" "}
              {lesson.source.url ? (
                <a href={lesson.source.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-600 underline dark:text-brand-300">
                  {lesson.source.label}
                </a>
              ) : (
                <span className="font-semibold">{lesson.source.label}</span>
              )}
            </p>
          </section>

          {/* Terjemahan */}
          <section aria-labelledby="tr-title" className={card}>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 id="tr-title" className="text-lg font-bold text-ink">Terjemahan</h2>
              <button
                type="button"
                aria-expanded={showTranslation}
                aria-controls="translation-body"
                onClick={() => setShowTranslation((v) => !v)}
                className="rounded-lg border border-line px-3 py-1.5 text-sm font-semibold text-ink hover:border-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                {showTranslation ? "Sembunyikan" : "Tampilkan"}
              </button>
            </div>
            {!showTranslation && <p className="mt-2 text-sm text-ink-muted">Saran: coba pahami teksnya dan jawab pertanyaan dulu sebelum membuka terjemahan.</p>}
            {showTranslation && (
              <div id="translation-body" className="mt-3 space-y-3 text-ink">
                {lesson.translation.map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
              </div>
            )}
          </section>

          {/* Pertanyaan */}
          {total > 0 && (
            <section aria-labelledby="q-title" className={card}>
              <h2 id="q-title" className="mb-4 text-lg font-bold text-ink">Pertanyaan pemahaman</h2>
              <ol className="space-y-8">
                {lesson.questions.map((q, i) => (
                  <li key={q.id}>
                    <ChoiceQuestion
                      prompt={
                        <>
                          <span className="mr-1 text-ink-muted">{i + 1}.</span>
                          <Furigana text={q.prompt} className="text-lg leading-loose" />
                        </>
                      }
                      options={q.options.map((o) => (
                        <span key={o} lang="ja">{o}</span>
                      ))}
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
                    <button
                      type="button"
                      onClick={submit}
                      disabled={unanswered > 0}
                      className="rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50"
                    >
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
                    <button
                      type="button"
                      onClick={retry}
                      className="rounded-lg border border-line bg-surface px-4 py-2 text-sm font-semibold text-ink hover:border-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                    >
                      Kerjakan ulang
                    </button>
                  </div>
                )}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <section aria-labelledby="kj-title" className={card}>
            <h2 id="kj-title" className="font-bold text-ink">Kanji dalam bacaan</h2>
            <p className="mt-1 text-sm text-ink-muted">
              {stats.total} kanji unik · perkiraan level teks <LevelBadge level={stats.estimated} />
            </p>
            <LevelLegend counts={stats.counts} other={stats.other} className="mt-3" />
            <p className="mt-3 text-xs text-ink-muted">Klik kanji di teks untuk membuka halaman kanjinya.</p>
          </section>

          <section aria-labelledby="kv-title" className={card}>
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

          <section aria-labelledby="hist-title" className={card}>
            <h2 id="hist-title" className="mb-3 font-bold text-ink">Riwayat pengerjaan</h2>
            {myHistory.length === 0 ? (
              <p className="text-sm text-ink-muted">Belum ada riwayat.</p>
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

      {/* Tata bahasa terkait */}
      {grammar.length > 0 && (
        <section aria-labelledby="gr-title" className={card}>
          <h2 id="gr-title" className="mb-4 text-lg font-bold text-ink">Tata Bahasa Terkait</h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {grammar.map((g) => (
              <li key={g.slug}>
                <Link
                  href={"/bunpou/" + g.slug}
                  className="flex h-full flex-col rounded-lg border border-line p-3 transition hover:border-brand-300 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  <span className="flex items-start justify-between gap-2">
                    <span lang="ja" className="font-jp font-bold text-brand-600 dark:text-brand-300">{g.pattern}</span>
                    <LevelBadge level={g.level} />
                  </span>
                  <span className="mt-1 line-clamp-2 text-sm text-ink-muted">{g.meaning}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
