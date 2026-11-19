"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CATEGORY_LABEL } from "@/lib/exam";
import { useLocalStorage } from "@/lib/local-store";
import { STORE_KEYS, XP, addActivity, clearWrong, recordResults, removeWrong, type WrongMap } from "@/lib/progress";
import { ChoiceQuestion } from "@/components/learn/ChoiceQuestion";
import { Badge, LevelBadge } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/EmptyState";
import { Furigana } from "@/components/ui/Furigana";
import { LevelFilter, countByLevel, type LevelValue } from "@/components/ui/LevelFilter";
import { buttonClass } from "@/components/ui/Button";
import { QuestionText } from "./QuestionStem";

const BATCH = 10;

/** Mengulang soal yang pernah dijawab salah (dari latihan & simulasi ujian). */
export function WrongReview() {
  const [map, , ready] = useLocalStorage<WrongMap>(STORE_KEYS.wrong, {});
  const [level, setLevel] = useState<LevelValue>("all");
  const [visible, setVisible] = useState(BATCH);
  const [solved, setSolved] = useState<Record<string, boolean>>({});

  const entries = useMemo(
    () => Object.values(map).sort((a, b) => b.count - a.count || b.last.localeCompare(a.last)),
    [map],
  );
  const counts = useMemo(() => countByLevel(entries.map((e) => e.q)), [entries]);
  const list = entries.filter((e) => level === "all" || e.q.level === level);

  if (!ready) return <p className="text-sm text-ink-muted" role="status">Memuat…</p>;

  if (entries.length === 0) {
    return (
      <EmptyState
        title="Tidak ada jawaban salah yang tersimpan"
        description="Soal yang dijawab salah di Latihan atau Simulasi Ujian akan muncul di sini untuk diulang."
        action={<Link href="/latihan/ujian" className={buttonClass("primary", "md")}>Coba simulasi ujian</Link>}
      />
    );
  }

  function onAnswered(id: string, ok: boolean) {
    const entry = map[id];
    if (!entry) return;
    if (ok) {
      setSolved((s) => ({ ...s, [id]: true }));
      addActivity(XP.reviewCorrect, "review:" + id);
    } else {
      recordResults([{ q: entry.q, correct: false }]);
    }
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-card border border-line bg-surface p-4 shadow-card">
        <LevelFilter value={level} onChange={(lv) => { setLevel(lv); setVisible(BATCH); }} counts={counts} />
        <button
          type="button"
          onClick={() => window.confirm("Hapus semua jawaban salah dari daftar?") && clearWrong()}
          className="text-sm font-semibold text-ink-muted underline hover:text-red-600"
        >
          Hapus semua
        </button>
      </div>

      <p className="text-sm text-ink-muted" aria-live="polite">
        <strong className="text-ink">{list.length}</strong> soal untuk diulang. Jawab dengan benar, lalu hapus dari daftar.
      </p>

      <ol className="space-y-4">
        {list.slice(0, visible).map(({ q, count }) => (
          <li key={q.id} className="rounded-card border border-line bg-surface p-5 shadow-card">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <LevelBadge level={q.level} />
              <Badge>{CATEGORY_LABEL[q.category]}</Badge>
              <Badge tone="warning">Salah {count}×</Badge>
            </div>
            {q.passageTitle && q.href && (
              <p className="mb-2 text-sm text-ink-muted">
                Soal dari bacaan{" "}
                <Link href={q.href} className="font-semibold text-brand-600 underline dark:text-brand-300">
                  <Furigana text={q.passageTitle} />
                </Link>{" "}
                — buka bacaannya bila perlu.
              </p>
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
              onAnswered={(ok) => onAnswered(q.id, ok)}
            />
            {solved[q.id] && (
              <button type="button" onClick={() => removeWrong(q.id)} className={buttonClass("secondary", "sm", "mt-3")}>
                ✓ Sudah paham — hapus dari daftar
              </button>
            )}
          </li>
        ))}
      </ol>

      {visible < list.length && (
        <div className="text-center">
          <button type="button" onClick={() => setVisible((v) => v + BATCH)} className={buttonClass("outline", "md")}>
            Tampilkan {Math.min(BATCH, list.length - visible)} soal lagi
          </button>
        </div>
      )}
    </div>
  );
}
