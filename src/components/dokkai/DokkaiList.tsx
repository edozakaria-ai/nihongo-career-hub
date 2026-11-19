"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { JlptLevel } from "@/lib/types";
import type { NewsReading } from "@/data/dokkai/types";
import { Furigana } from "@/components/ui/Furigana";
import { LevelBadge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { NewsThumb } from "./NewsThumb";
import { LevelLegend } from "./LevelLegend";

export interface DokkaiListItem {
  slug: string;
  title: string;
  date: string;
  level: JlptLevel;
  minutes: number;
  topic: string;
  thumb: NewsReading["thumb"];
}

type LevelValue = JlptLevel | "all";
const LEVEL_OPTIONS: { value: LevelValue; label: string }[] = [
  { value: "all", label: "Semua level" },
  { value: "N5", label: "N5 · Mudah" },
  { value: "N4", label: "N4 · Dasar" },
  { value: "N3", label: "N3 · Menengah" },
  { value: "N2", label: "N2 · Sulit" },
];

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return Number.isNaN(d.getTime()) ? iso : d.toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });
}

export function DokkaiList({ items, kanjiLevels, initialLevel }: { items: DokkaiListItem[]; kanjiLevels: Record<string, JlptLevel>; initialLevel: LevelValue }) {
  const [level, setLevel] = useState<LevelValue>(initialLevel);
  const [furigana, setFurigana] = useState(true);
  const [colors, setColors] = useState(true);
  const [view, setView] = useState<"list" | "grid">("list");

  const list = useMemo(() => (level === "all" ? items : items.filter((i) => i.level === level)), [items, level]);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-card border border-line bg-surface p-4 shadow-card">
        <h2 className="text-lg font-bold text-ink">Daftar latihan membaca</h2>
        <div className="flex flex-wrap items-center gap-3">
          <label className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-ink">
            <input type="checkbox" checked={furigana} onChange={(e) => setFurigana(e.target.checked)} className="h-4 w-4 accent-brand-500" />
            Tunjukkan Furigana
          </label>
          <label className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-ink">
            <input type="checkbox" checked={colors} onChange={(e) => setColors(e.target.checked)} className="h-4 w-4 accent-brand-500" />
            Warna level kanji
          </label>
          <label htmlFor="dokkai-level" className="sr-only">Filter level</label>
          <select
            id="dokkai-level"
            value={level}
            onChange={(e) => setLevel(e.target.value as LevelValue)}
            className="h-9 rounded-lg border border-line bg-surface px-2 text-sm text-ink focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
          >
            {LEVEL_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          <div role="group" aria-label="Tampilan" className="flex rounded-lg border border-line p-0.5">
            {(["grid", "list"] as const).map((v) => (
              <button
                key={v}
                type="button"
                aria-pressed={view === v}
                onClick={() => setView(v)}
                className={cn(
                  "h-8 w-9 rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                  view === v ? "bg-brand-50 text-brand-700 dark:bg-brand-500/15 dark:text-brand-200" : "text-ink-muted hover:text-ink",
                )}
                title={v === "grid" ? "Tampilan kotak" : "Tampilan daftar"}
              >
                <span aria-hidden="true">{v === "grid" ? "▦" : "☰"}</span>
                <span className="sr-only">{v === "grid" ? "Tampilan kotak" : "Tampilan daftar"}</span>
              </button>
            ))}
          </div>
        </div>
        {colors && <LevelLegend className="w-full" />}
      </div>

      <p className="my-4 text-sm text-ink-muted" aria-live="polite">
        <strong className="text-ink">{list.length}</strong> bacaan
      </p>

      {list.length === 0 ? (
        <p className="rounded-card border border-dashed border-line p-8 text-center text-sm text-ink-muted">Belum ada bacaan untuk level ini.</p>
      ) : (
        <ul className={cn(!furigana && "furigana-off", view === "grid" ? "grid gap-4 sm:grid-cols-2 lg:grid-cols-3" : "divide-y divide-line rounded-card border border-line bg-surface shadow-card")}>
          {list.map((item) => (
            <li key={item.slug} className={view === "grid" ? "rounded-card border border-line bg-surface shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover" : ""}>
              <Link
                href={"/dokkai/" + item.slug}
                className={cn(
                  "group flex gap-4 rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                  view === "grid" ? "flex-col p-3" : "items-center p-3 sm:p-4 hover:bg-surface-muted/60",
                )}
              >
                <NewsThumb thumb={item.thumb} className={view === "grid" ? "h-36 w-full" : "h-20 w-28 sm:h-24 sm:w-40"} />
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold leading-[2.2] text-ink group-hover:text-brand-600 sm:text-xl">
                    <Furigana text={item.title} kanjiLevels={colors ? kanjiLevels : undefined} />
                  </h3>
                  <p className="mt-1 flex flex-wrap items-center gap-2 text-xs text-ink-muted">
                    <time dateTime={item.date}>{formatDate(item.date)}</time>
                    <span aria-hidden="true">•</span>
                    <LevelBadge level={item.level} />
                    <span>⏱ {item.minutes} mnt</span>
                    <span aria-hidden="true">•</span>
                    <span>{item.topic}</span>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
