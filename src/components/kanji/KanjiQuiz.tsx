"use client";

import { useState, type FormEvent } from "react";
import { ChoiceQuestion } from "@/components/learn/ChoiceQuestion";
import { useLearningState } from "@/lib/storage";
import { toHiraganaAnswer } from "@/lib/kana";
import { cn } from "@/lib/utils";

interface KanjiQuizProps {
  kanjiId: string;
  character: string;
  meaningChoices: { options: string[]; answerIndex: number };
  readingTask: { word: string; reading: string; meaning: string } | null;
}

/** Dua latihan: pilihan ganda arti + input bacaan (hiragana atau romaji). */
export function KanjiQuiz({ kanjiId, character, meaningChoices, readingTask }: KanjiQuizProps) {
  const itemKey = `kanji:${kanjiId}`;
  const { markAtLeast, setStatus } = useLearningState();
  const [mcCorrect, setMcCorrect] = useState<boolean | null>(null);
  const [answer, setAnswer] = useState("");
  const [inputResult, setInputResult] = useState<"correct" | "wrong" | "empty" | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!readingTask) return;
    const normalized = toHiraganaAnswer(answer.slice(0, 40));
    if (!normalized) {
      setInputResult("empty");
      return;
    }
    const ok = normalized === readingTask.reading;
    setInputResult(ok ? "correct" : "wrong");
    markAtLeast(itemKey, "learning");
  }

  const allCorrect = mcCorrect === true && (readingTask === null || inputResult === "correct");

  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-brand-600 dark:text-brand-300">Latihan 1 · Pilihan ganda</h3>
        <ChoiceQuestion
          prompt={<>Apa arti kanji <span lang="ja" className="font-jp text-2xl">{character}</span>?</>}
          options={meaningChoices.options}
          answerIndex={meaningChoices.answerIndex}
          onAnswered={(ok) => {
            setMcCorrect(ok);
            markAtLeast(itemKey, "learning");
          }}
        />
      </div>

      {readingTask && (
        <form onSubmit={onSubmit} noValidate>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-brand-600 dark:text-brand-300">Latihan 2 · Input jawaban</h3>
          <label htmlFor="reading-answer" className="block text-base font-semibold text-ink">
            Tulis cara baca <span lang="ja" className="font-jp text-2xl">{readingTask.word}</span>{" "}
            <span className="text-sm font-normal text-ink-muted">({readingTask.meaning})</span>
          </label>
          <p id="reading-hint" className="mt-1 text-xs text-ink-muted">Boleh diketik dalam hiragana atau romaji, misalnya kaisha.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <input
              id="reading-answer"
              type="text"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              maxLength={40}
              value={answer}
              aria-describedby="reading-hint reading-result"
              aria-invalid={inputResult === "wrong" || inputResult === "empty"}
              onChange={(e) => {
                setAnswer(e.target.value);
                setInputResult(null);
              }}
              className="h-11 min-w-0 flex-1 rounded-lg border border-line bg-surface px-3 font-jp text-ink focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
            />
            <button type="submit" className="h-11 rounded-lg bg-brand-500 px-5 text-sm font-semibold text-white hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">
              Cek
            </button>
          </div>
          <div id="reading-result" aria-live="polite" className="mt-2 min-h-[1.5rem] text-sm">
            {inputResult === "empty" && <p className="text-amber-700 dark:text-amber-300">Isi jawaban terlebih dahulu.</p>}
            {inputResult === "correct" && <p className="font-semibold text-emerald-600 dark:text-emerald-400">Benar! Dibaca <span lang="ja" className="font-jp">{readingTask.reading}</span>.</p>}
            {inputResult === "wrong" && (
              <p className="text-red-600 dark:text-red-400">
                Belum tepat. Jawaban: <span lang="ja" className="font-jp font-semibold">{readingTask.reading}</span>
                {answer && <> (kamu menulis: <span lang="ja" className="font-jp">{toHiraganaAnswer(answer)}</span>)</>}
              </p>
            )}
          </div>
        </form>
      )}

      <div aria-live="polite">
        {allCorrect && (
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-emerald-50 p-4 dark:bg-emerald-500/10">
            <p className="text-sm font-semibold text-emerald-900 dark:text-emerald-200">Semua latihan benar. Tandai kanji ini sebagai dikuasai?</p>
            <button
              type="button"
              onClick={() => setStatus(itemKey, "mastered")}
              className={cn("rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500")}
            >
              Tandai dikuasai
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
