"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Formality, GrammarPoint, JlptLevel } from "@/lib/types";
import { searchGrammar } from "@/lib/search";
import { useLearningState } from "@/lib/storage";
import { Badge, LevelBadge } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/EmptyState";
import { LevelFilter, countByLevel, type LevelValue } from "@/components/ui/LevelFilter";
import { SearchBox } from "@/components/ui/SearchBox";
import { FavoriteButton } from "@/components/learn/FavoriteButton";
import { StatusDot } from "@/components/learn/StatusControl";

const FORMALITY_LABEL: Record<Formality, string> = { kasual: "Kasual", netral: "Netral", sopan: "Sopan", formal: "Formal" };

export function BunpouExplorer({ grammar, initialLevel }: { grammar: GrammarPoint[]; initialLevel: JlptLevel | "all" }) {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<LevelValue>(initialLevel);
  const [formality, setFormality] = useState<Formality | "all">("all");
  const { get, ready } = useLearningState();

  const searched = useMemo(() => searchGrammar(grammar, query), [grammar, query]);
  const levelCounts = useMemo(() => countByLevel(searched), [searched]);
  const list = searched.filter((g) => (level === "all" || g.level === level) && (formality === "all" || g.formality === formality));

  function reset() {
    setQuery("");
    setLevel("all");
    setFormality("all");
  }

  return (
    <div>
      <div className="space-y-4 rounded-card border border-line bg-surface p-4 shadow-card">
        <SearchBox
          value={query}
          onChange={setQuery}
          label="Cari pola bunpou"
          placeholder="mis. てしまう, teshimau, ingin, keputusan, formal"
          help="Cari dengan pola (kana atau romaji), arti Indonesia, struktur, atau situasi penggunaan."
        />
        <LevelFilter value={level} onChange={setLevel} counts={levelCounts} />
        <div className="flex flex-wrap items-center gap-2">
          <label htmlFor="f-formality" className="text-xs font-semibold text-ink-muted">Formalitas</label>
          <select
            id="f-formality"
            value={formality}
            onChange={(e) => setFormality(e.target.value as Formality | "all")}
            className="h-9 rounded-lg border border-line bg-surface px-2 text-sm text-ink focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
          >
            <option value="all">Semua</option>
            {(Object.keys(FORMALITY_LABEL) as Formality[]).map((f) => <option key={f} value={f}>{FORMALITY_LABEL[f]}</option>)}
          </select>
        </div>
      </div>

      <p className="my-4 text-sm text-ink-muted" aria-live="polite">
        Menampilkan <strong className="text-ink">{list.length}</strong> dari {grammar.length} pola
        {query.trim() && <> untuk “{query.trim()}”</>}
      </p>

      {list.length === 0 ? (
        <EmptyState
          title="Tidak ada pola yang cocok"
          description="Coba kata kunci lain (mis. romaji tanpa tanda hubung) atau reset filter."
          action={<button type="button" onClick={reset} className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">Reset filter</button>}
        />
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((g) => (
            <li key={g.id} className="relative">
              <Link
                href={`/bunpou/${g.slug}`}
                className="flex h-full flex-col rounded-card border border-line bg-surface p-5 shadow-card transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                <div className="flex items-center gap-2 pr-10">
                  <LevelBadge level={g.level} />
                  <Badge>{FORMALITY_LABEL[g.formality]}</Badge>
                </div>
                <h2 lang="ja" className="mt-3 font-jp text-2xl font-bold text-ink">{g.pattern}</h2>
                <p className="mt-1 flex-1 text-sm text-ink">{g.meaning}</p>
                <p lang="ja" className="mt-3 rounded bg-surface-muted px-2 py-1 font-jp text-xs text-ink-muted">{g.structure}</p>
                <span className="mt-3">{ready ? <StatusDot status={get(`grammar:${g.id}`).status} /> : <StatusDot status="new" />}</span>
              </Link>
              <FavoriteButton itemKey={`grammar:${g.id}`} label={`pola ${g.pattern}`} className="absolute right-3 top-3" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
