"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { JlptLevel, Kanji, LearningStatus } from "@/lib/types";
import { useLearningState } from "@/lib/storage";
import { LevelBadge } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/EmptyState";
import { FavoriteButton } from "@/components/learn/FavoriteButton";
import { StatusDot } from "@/components/learn/StatusControl";

type StrokeRange = "all" | "1-5" | "6-10" | "11-15" | "16+";
type StatusFilter = "all" | LearningStatus | "favorite";

const STROKE_RANGES: { value: StrokeRange; label: string }[] = [
  { value: "all", label: "Semua" },
  { value: "1-5", label: "1–5 goresan" },
  { value: "6-10", label: "6–10 goresan" },
  { value: "11-15", label: "11–15 goresan" },
  { value: "16+", label: "16+ goresan" },
];

function inRange(n: number, r: StrokeRange) {
  switch (r) {
    case "1-5": return n <= 5;
    case "6-10": return n >= 6 && n <= 10;
    case "11-15": return n >= 11 && n <= 15;
    case "16+": return n >= 16;
    default: return true;
  }
}

const selectClass =
  "h-10 w-full rounded-lg border border-line bg-surface px-3 text-sm text-ink focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40";

export function KanjiExplorer({ kanji, initialLevel }: { kanji: Kanji[]; initialLevel: JlptLevel | "all" }) {
  const [level, setLevel] = useState<JlptLevel | "all">(initialLevel);
  const [stroke, setStroke] = useState<StrokeRange>("all");
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState<StatusFilter>("all");
  const { get, ready } = useLearningState();

  const categories = useMemo(() => Array.from(new Set(kanji.map((k) => k.category))).sort(), [kanji]);

  const filtered = kanji.filter((k) => {
    if (level !== "all" && k.level !== level) return false;
    if (!inRange(k.strokeCount, stroke)) return false;
    if (category !== "all" && k.category !== category) return false;
    if (status !== "all") {
      const st = get(`kanji:${k.id}`);
      if (status === "favorite" ? !st.favorite : st.status !== status) return false;
    }
    return true;
  });

  function reset() {
    setLevel("all");
    setStroke("all");
    setCategory("all");
    setStatus("all");
  }

  return (
    <div>
      <form className="grid gap-3 rounded-card border border-line bg-surface p-4 shadow-card sm:grid-cols-2 lg:grid-cols-4" onSubmit={(e) => e.preventDefault()} aria-label="Filter kanji">
        <div>
          <label htmlFor="f-level" className="mb-1 block text-xs font-semibold text-ink-muted">Level JLPT</label>
          <select id="f-level" className={selectClass} value={level} onChange={(e) => setLevel(e.target.value as JlptLevel | "all")}>
            <option value="all">Semua level</option>
            {(["N5", "N4", "N3", "N2"] as const).map((l) => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="f-stroke" className="mb-1 block text-xs font-semibold text-ink-muted">Jumlah goresan</label>
          <select id="f-stroke" className={selectClass} value={stroke} onChange={(e) => setStroke(e.target.value as StrokeRange)}>
            {STROKE_RANGES.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="f-cat" className="mb-1 block text-xs font-semibold text-ink-muted">Kategori</label>
          <select id="f-cat" className={selectClass} value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="all">Semua kategori</option>
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="f-status" className="mb-1 block text-xs font-semibold text-ink-muted">Status</label>
          <select id="f-status" className={selectClass} value={status} onChange={(e) => setStatus(e.target.value as StatusFilter)}>
            <option value="all">Semua status</option>
            <option value="new">Belum dipelajari</option>
            <option value="learning">Sedang dipelajari</option>
            <option value="mastered">Dikuasai</option>
            <option value="favorite">Favorit ★</option>
          </select>
        </div>
      </form>

      <p className="my-4 text-sm text-ink-muted" aria-live="polite">
        Menampilkan <strong className="text-ink">{filtered.length}</strong> dari {kanji.length} kanji
      </p>

      {filtered.length === 0 ? (
        <EmptyState
          title="Tidak ada kanji yang cocok"
          description="Coba ubah atau reset filter."
          action={<button type="button" onClick={reset} className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">Reset filter</button>}
        />
      ) : (
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {filtered.map((k) => (
            <li key={k.id} className="relative">
              <Link
                href={`/kanji/${k.id}`}
                className="flex h-full flex-col items-center rounded-card border border-line bg-surface p-4 pt-6 text-center shadow-card transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                <span className="absolute left-3 top-3"><LevelBadge level={k.level} /></span>
                <span lang="ja" className="font-jp text-5xl font-bold text-ink">{k.character}</span>
                <span className="mt-2 line-clamp-1 text-sm font-semibold text-ink">{k.meanings[0]}</span>
                <span className="mt-0.5 text-xs text-ink-muted">{k.strokeCount} goresan · {k.category}</span>
                <span className="mt-2">{ready ? <StatusDot status={get(`kanji:${k.id}`).status} /> : <StatusDot status="new" />}</span>
              </Link>
              <FavoriteButton itemKey={`kanji:${k.id}`} label={`kanji ${k.character}`} className="absolute right-2 top-2" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
