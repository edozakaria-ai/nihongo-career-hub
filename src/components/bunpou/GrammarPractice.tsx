"use client";

import { useState, type FormEvent } from "react";
import type { GrammarExerciseSet } from "@/data/grammar-exercises";
import { ChoiceQuestion } from "@/components/learn/ChoiceQuestion";
import { useLearningState } from "@/lib/storage";
import { seededShuffle } from "@/lib/quiz";
import { cn } from "@/lib/utils";

/** Tiga jenis latihan: pilihan ganda, menyusun kalimat, melengkapi kalimat. */
export function GrammarPractice({ grammarId, set }: { grammarId: string; set: GrammarExerciseSet }) {
  const itemKey = `grammar:${grammarId}`;
  const { markAtLeast } = useLearningState();
  const [score, setScore] = useState<Record<"mc" | "order" | "fill", boolean | undefined>>({ mc: undefined, order: undefined, fill: undefined });

  function record(kind: "mc" | "order" | "fill", ok: boolean) {
    setScore((s) => ({ ...s, [kind]: ok }));
    markAtLeast(itemKey, "learning");
  }

  const done = Object.values(score).filter((v) => v !== undefined).length;
  const correct = Object.values(score).filter((v) => v === true).length;

  return (
    <div className="space-y-10">
      <p className="text-sm text-ink-muted" aria-live="polite">
        Progres latihan: {done}/3 dikerjakan · {correct} benar
      </p>

      <section aria-labelledby="ex-mc">
        <h3 id="ex-mc" className="mb-3 text-sm font-bold uppercase tracking-wide text-brand-600 dark:text-brand-300">1 · Pilihan ganda</h3>
        <ChoiceQuestion
          prompt={<span lang="ja" className="font-jp text-lg">{set.mc.stem}</span>}
          options={set.mc.options}
          answerIndex={set.mc.answerIndex}
          explanation={set.mc.explanation}
          onAnswered={(ok) => record("mc", ok)}
        />
      </section>

      <section aria-labelledby="ex-order">
        <h3 id="ex-order" className="mb-3 text-sm font-bold uppercase tracking-wide text-brand-600 dark:text-brand-300">2 · Menyusun kalimat</h3>
        <SentenceOrder seed={grammarId} tokens={set.order.tokens} translation={set.order.translation} onChecked={(ok) => record("order", ok)} />
      </section>

      <section aria-labelledby="ex-fill">
        <h3 id="ex-fill" className="mb-3 text-sm font-bold uppercase tracking-wide text-brand-600 dark:text-brand-300">3 · Melengkapi kalimat</h3>
        <FillBlank stem={set.fill.stem} answers={set.fill.answers} hint={set.fill.hint} translation={set.fill.translation} onChecked={(ok) => record("fill", ok)} />
      </section>
    </div>
  );
}

function SentenceOrder({ seed, tokens, translation, onChecked }: { seed: string; tokens: string[]; translation: string; onChecked: (ok: boolean) => void }) {
  // Indeks token yang diacak (deterministik) agar tidak terjadi hydration mismatch
  const [pool] = useState(() => {
    let shuffled = seededShuffle(tokens.map((_, i) => i), seed);
    if (shuffled.every((v, i) => v === i)) shuffled = [...shuffled].reverse();
    return shuffled;
  });
  const [picked, setPicked] = useState<number[]>([]);
  const [result, setResult] = useState<boolean | null>(null);

  const remaining = pool.filter((i) => !picked.includes(i));

  function check() {
    const ok = picked.length === tokens.length && picked.every((v, i) => v === i);
    setResult(ok);
    onChecked(ok);
  }

  function reset() {
    setPicked([]);
    setResult(null);
  }

  return (
    <div>
      <p className="text-sm text-ink">
        Susun menjadi kalimat yang berarti: <em>{translation}</em>
      </p>
      <div className="mt-3 min-h-[3.25rem] rounded-lg border-2 border-dashed border-line bg-surface-muted p-2" aria-label="Kalimat yang sedang disusun">
        {picked.length === 0 ? (
          <p className="p-2 text-sm text-ink-muted">Pilih potongan kata di bawah sesuai urutan.</p>
        ) : (
          <ol className="flex flex-wrap gap-2">
            {picked.map((idx, pos) => (
              <li key={idx}>
                <button
                  type="button"
                  disabled={result !== null}
                  onClick={() => setPicked((p) => p.filter((x) => x !== idx))}
                  aria-label={`Hapus “${tokens[idx]}” dari posisi ${pos + 1}`}
                  className="rounded-lg bg-brand-500 px-3 py-2 font-jp text-white hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-80"
                >
                  {tokens[idx]}
                </button>
              </li>
            ))}
          </ol>
        )}
      </div>
      <ul className="mt-3 flex flex-wrap gap-2" aria-label="Potongan kata tersedia">
        {remaining.map((idx) => (
          <li key={idx}>
            <button
              type="button"
              disabled={result !== null}
              onClick={() => setPicked((p) => [...p, idx])}
              className="rounded-lg border border-line bg-surface px-3 py-2 font-jp text-ink hover:border-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:opacity-60"
            >
              {tokens[idx]}
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex gap-2">
        {result === null ? (
          <button type="button" onClick={check} disabled={picked.length !== tokens.length} className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:opacity-50">
            Cek susunan
          </button>
        ) : (
          <button type="button" onClick={reset} className="text-sm font-semibold text-brand-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:text-brand-300">
            Coba lagi
          </button>
        )}
      </div>
      <div aria-live="polite" className="mt-2">
        {result !== null && (
          <p className={cn("rounded-lg p-3 text-sm", result ? "bg-emerald-50 text-emerald-900 dark:bg-emerald-500/10 dark:text-emerald-200" : "bg-amber-50 text-amber-900 dark:bg-amber-500/10 dark:text-amber-200")}>
            {result ? "Susunan benar! " : "Belum tepat. Urutan yang benar: "}
            <span lang="ja" className="font-jp font-semibold">{tokens.join(" ")}</span>
          </p>
        )}
      </div>
    </div>
  );
}

function FillBlank({ stem, answers, hint, translation, onChecked }: { stem: string; answers: string[]; hint: string; translation: string; onChecked: (ok: boolean) => void }) {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<"ok" | "wrong" | "empty" | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const v = value.normalize("NFKC").trim().slice(0, 30);
    if (!v) {
      setResult("empty");
      return;
    }
    const ok = answers.some((a) => a.normalize("NFKC") === v);
    setResult(ok ? "ok" : "wrong");
    onChecked(ok);
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <p lang="ja" className="font-jp text-lg text-ink">{stem}</p>
      <p className="text-sm text-ink-muted">{translation}</p>
      <label htmlFor="fill-answer" className="mt-3 block text-sm font-semibold text-ink">Isi bagian kosong</label>
      <p id="fill-hint" className="text-xs text-ink-muted">Petunjuk: {hint}. Ketik dalam huruf Jepang.</p>
      <div className="mt-2 flex flex-wrap gap-2">
        <input
          id="fill-answer"
          type="text"
          maxLength={30}
          autoComplete="off"
          spellCheck={false}
          value={value}
          aria-describedby="fill-hint fill-result"
          aria-invalid={result === "wrong" || result === "empty"}
          onChange={(e) => {
            setValue(e.target.value);
            setResult(null);
          }}
          className="h-11 min-w-0 flex-1 rounded-lg border border-line bg-surface px-3 font-jp text-ink focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
        />
        <button type="submit" className="h-11 rounded-lg bg-brand-500 px-5 text-sm font-semibold text-white hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">
          Cek
        </button>
      </div>
      <div id="fill-result" aria-live="polite" className="mt-2 min-h-[1.5rem] text-sm">
        {result === "empty" && <p className="text-amber-700 dark:text-amber-300">Isi jawaban terlebih dahulu.</p>}
        {result === "ok" && <p className="font-semibold text-emerald-600 dark:text-emerald-400">Benar! 🎉</p>}
        {result === "wrong" && (
          <p className="text-red-600 dark:text-red-400">
            Belum tepat. Jawaban yang diterima: <span lang="ja" className="font-jp font-semibold">{answers.join(" / ")}</span>
          </p>
        )}
      </div>
    </form>
  );
}
