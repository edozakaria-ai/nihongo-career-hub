"use client";

import type { JlptLevel } from "@/lib/types";
import { cn } from "@/lib/utils";

export type LevelValue = JlptLevel | "all";
const LEVELS: LevelValue[] = ["all", "N5", "N4", "N3", "N2"];

interface LevelFilterProps {
  value: LevelValue;
  onChange: (level: LevelValue) => void;
  counts?: Partial<Record<LevelValue, number>>;
  label?: string;
}

/**
 * Filter level JLPT berbentuk tombol pil (dipakai di Kanji, Kotoba, Bunpou, Latihan).
 * Memperbarui ?level= di URL tanpa reload agar tautan bisa dibagikan.
 */
export function LevelFilter({ value, onChange, counts, label = "Filter level JLPT" }: LevelFilterProps) {
  function select(lv: LevelValue) {
    onChange(lv);
    try {
      const url = new URL(window.location.href);
      if (lv === "all") url.searchParams.delete("level");
      else url.searchParams.set("level", lv);
      window.history.replaceState(null, "", url.toString());
    } catch {
      /* abaikan bila History API tidak tersedia */
    }
  }

  return (
    <div role="group" aria-label={label} className="flex gap-2 overflow-x-auto pb-1">
      {LEVELS.map((lv) => {
        const active = lv === value;
        return (
          <button
            key={lv}
            type="button"
            aria-pressed={active}
            onClick={() => select(lv)}
            className={cn(
              "inline-flex h-9 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
              active ? "border-brand-500 bg-brand-500 text-white" : "border-line bg-surface text-ink hover:border-brand-400 hover:text-brand-600",
            )}
          >
            {lv === "all" ? "Semua" : lv}
            {counts && counts[lv] !== undefined && <span className={cn("text-xs", active ? "text-white/80" : "text-ink-muted")}>({counts[lv]})</span>}
          </button>
        );
      })}
    </div>
  );
}

/** Hitung jumlah item per level untuk ditampilkan di LevelFilter. */
export function countByLevel<T extends { level: JlptLevel }>(items: T[]): Record<LevelValue, number> {
  const c: Record<LevelValue, number> = { all: items.length, N5: 0, N4: 0, N3: 0, N2: 0 };
  for (const it of items) c[it.level] += 1;
  return c;
}
