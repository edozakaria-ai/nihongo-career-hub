"use client";

import { useId, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ChoiceQuestionProps {
  prompt: ReactNode;
  options: ReactNode[];
  answerIndex: number;
  explanation?: ReactNode;
  /** Mode terkontrol (dipakai Dokkai): jawaban dipilih & penilaian ditampilkan oleh induk. */
  selected?: number | null;
  onSelect?: (index: number) => void;
  reveal?: boolean;
  /** Mode mandiri: dipanggil saat pengguna mengecek jawaban. */
  onAnswered?: (correct: boolean) => void;
}

/** Soal pilihan ganda aksesibel (radio). Mendukung mode mandiri dan terkontrol. */
export function ChoiceQuestion({ prompt, options, answerIndex, explanation, selected, onSelect, reveal, onAnswered }: ChoiceQuestionProps) {
  const controlled = onSelect !== undefined;
  const [localChoice, setLocalChoice] = useState<number | null>(null);
  const [localChecked, setLocalChecked] = useState(false);
  const choice = controlled ? selected ?? null : localChoice;
  const checked = controlled ? !!reveal : localChecked;
  const name = useId();

  function pick(i: number) {
    if (checked) return;
    if (controlled) onSelect?.(i);
    else setLocalChoice(i);
  }

  return (
    <fieldset className="space-y-3">
      <legend className="mb-2 text-base font-semibold text-ink">{prompt}</legend>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((opt, i) => {
          const isCorrect = i === answerIndex;
          const isChosen = choice === i;
          return (
            <label
              key={i}
              className={cn(
                "flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand-500",
                !checked && (isChosen ? "border-brand-500 bg-brand-50 dark:bg-brand-500/10" : "border-line bg-surface hover:border-brand-300"),
                checked && isCorrect && "border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10",
                checked && isChosen && !isCorrect && "border-red-500 bg-red-50 dark:bg-red-500/10",
                checked && !isCorrect && !isChosen && "border-line bg-surface opacity-70",
                checked && "cursor-default",
              )}
            >
              <input type="radio" name={name} checked={isChosen} onChange={() => pick(i)} disabled={checked} className="h-4 w-4 accent-brand-500" />
              <span className="flex-1 font-jp text-ink">{opt}</span>
              {checked && isCorrect && <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Benar</span>}
              {checked && isChosen && !isCorrect && <span className="text-xs font-bold text-red-600 dark:text-red-400">Pilihanmu</span>}
            </label>
          );
        })}
      </div>

      {!controlled && !checked && (
        <button
          type="button"
          disabled={choice === null}
          onClick={() => {
            setLocalChecked(true);
            onAnswered?.(choice === answerIndex);
          }}
          className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50"
        >
          Cek jawaban
        </button>
      )}

      <div aria-live="polite">
        {checked && (
          <div className={cn("rounded-lg p-3 text-sm", choice === answerIndex ? "bg-emerald-50 text-emerald-900 dark:bg-emerald-500/10 dark:text-emerald-200" : "bg-amber-50 text-amber-900 dark:bg-amber-500/10 dark:text-amber-200")}>
            <p className="font-bold">{choice === answerIndex ? "Jawaban benar! 🎉" : choice === null ? "Belum dijawab." : "Belum tepat — tidak apa-apa, ini bagian dari belajar."}</p>
            {explanation && <p className="mt-1">{explanation}</p>}
          </div>
        )}
      </div>

      {!controlled && checked && (
        <button
          type="button"
          onClick={() => {
            setLocalChecked(false);
            setLocalChoice(null);
          }}
          className="text-sm font-semibold text-brand-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:text-brand-300"
        >
          Coba lagi
        </button>
      )}
    </fieldset>
  );
}
