"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
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

/** Jumlah bacaan per halaman. */
const PAGE_SIZE = 20;

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return Number.isNaN(d.getTime()) ? iso : d.toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });
}

/** Nomor halaman yang ditampilkan, dengan "…" bila halaman banyak. Contoh: 1 … 4 5 6 … 12 */
function pageNumbers(current: number, total: number): (number | "gap")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const set = new Set([1, total, current - 1, current, current + 1]);
  const nums = Array.from(set).filter((n) => n >= 1 && n <= total).sort((a, b) => a - b);
  const out: (number | "gap")[] = [];
  nums.forEach((n, i) => {
    if (i > 0 && n - nums[i - 1] > 1) out.push("gap");
    out.push(n);
  });
  return out;
}

/** Simpan level & halaman di URL (?level=N3&page=2) tanpa memuat ulang halaman. */
function syncUrl(level: LevelValue, page: number) {
  try {
    const url = new URL(window.location.href);
    if (level === "all") url.searchParams.delete("level");
    else url.searchParams.set("level", level);
    if (page <= 1) url.searchParams.delete("page");
    else url.searchParams.set("page", String(page));
    window.history.replaceState(null, "", url.toString());
  } catch {
    /* abaikan bila History API tidak tersedia */
  }
}

interface DokkaiListProps {
  items: DokkaiListItem[];
  kanjiLevels: Record<string, JlptLevel>;
  initialLevel: LevelValue;
  initialPage?: number;
}

export function DokkaiList({ items, kanjiLevels, initialLevel, initialPage = 1 }: DokkaiListProps) {
  const [level, setLevel] = useState<LevelValue>(initialLevel);
  const [page, setPage] = useState(initialPage);
  const [furigana, setFurigana] = useState(true);
  const [colors, setColors] = useState(true);
  const [view, setView] = useState<"list" | "grid">("list");
  const topRef = useRef<HTMLParagraphElement>(null);
  const firstRender = useRef(true);

  const filtered = useMemo(() => (level === "all" ? items : items.filter((i) => i.level === level)), [items, level]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * PAGE_SIZE;
  const list = filtered.slice(start, start + PAGE_SIZE);

  // Sinkronkan URL & gulir ke atas daftar saat halaman/level berubah (bukan saat pertama dimuat)
  useEffect(() => {
    syncUrl(level, safePage);
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [level, safePage]);

  function changeLevel(lv: LevelValue) {
    setLevel(lv);
    setPage(1);
  }

  function goTo(p: number) {
    setPage(Math.min(Math.max(1, p), totalPages));
  }

  const pageBtn =
    "inline-flex h-9 min-w-[2.25rem] items-center justify-center rounded-lg border px-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:pointer-events-none disabled:opacity-40";

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
            onChange={(e) => changeLevel(e.target.value as LevelValue)}
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

      <p ref={topRef} className="my-4 scroll-mt-28 text-sm text-ink-muted" aria-live="polite">
        {filtered.length === 0 ? (
          "0 bacaan"
        ) : (
          <>
            Menampilkan <strong className="text-ink">{start + 1}–{start + list.length}</strong> dari{" "}
            <strong className="text-ink">{filtered.length}</strong> bacaan
            {totalPages > 1 && <> · halaman {safePage} dari {totalPages}</>}
          </>
        )}
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

      {totalPages > 1 && (
        <nav aria-label="Halaman daftar bacaan" className="mt-6 flex flex-wrap items-center justify-center gap-1.5">
          <button
            type="button"
            onClick={() => goTo(safePage - 1)}
            disabled={safePage === 1}
            className={cn(pageBtn, "border-line bg-surface text-ink hover:border-brand-400")}
          >
            <span aria-hidden="true">←</span>
            <span className="ml-1 hidden sm:inline">Sebelumnya</span>
            <span className="sr-only sm:hidden">Halaman sebelumnya</span>
          </button>

          <ul className="flex flex-wrap items-center gap-1.5">
            {pageNumbers(safePage, totalPages).map((n, i) =>
              n === "gap" ? (
                <li key={"gap-" + i} aria-hidden="true" className="px-1 text-ink-muted">…</li>
              ) : (
                <li key={n}>
                  <button
                    type="button"
                    onClick={() => goTo(n)}
                    aria-current={n === safePage ? "page" : undefined}
                    aria-label={"Halaman " + n}
                    className={cn(
                      pageBtn,
                      n === safePage ? "border-brand-500 bg-brand-500 text-white" : "border-line bg-surface text-ink hover:border-brand-400 hover:text-brand-600",
                    )}
                  >
                    {n}
                  </button>
                </li>
              ),
            )}
          </ul>

          <button
            type="button"
            onClick={() => goTo(safePage + 1)}
            disabled={safePage === totalPages}
            className={cn(pageBtn, "border-line bg-surface text-ink hover:border-brand-400")}
          >
            <span className="mr-1 hidden sm:inline">Berikutnya</span>
            <span className="sr-only sm:hidden">Halaman berikutnya</span>
            <span aria-hidden="true">→</span>
          </button>
        </nav>
      )}
    </div>
  );
}
