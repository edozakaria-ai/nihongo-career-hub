"use client";

import { useId, useMemo, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import type { JlptLevel, Vocabulary } from "@/lib/types";
import { searchVocabulary, type SearchHit } from "@/lib/search";
import { useLocalStorage } from "@/lib/storage";
import { EmptyState } from "@/components/ui/EmptyState";
import { LevelFilter, countByLevel, type LevelValue } from "@/components/ui/LevelFilter";
import { VocabCard } from "./VocabCard";
import { cn } from "@/lib/utils";

const MATCH_LABEL: Record<SearchHit["matchedOn"], string> = {
  kanji: "kanji",
  kana: "kana",
  romaji: "romaji",
  indonesia: "Indonesia",
  inggris: "Inggris",
};
const HISTORY_MAX = 8;
const EXAMPLES = ["会議", "はたらく", "kakunin", "air", "product", "セイヒン"];

export function KotobaSearch({ items, initialLevel = "all" }: { items: Vocabulary[]; initialLevel?: JlptLevel | "all" }) {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<LevelValue>(initialLevel);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [onlySaved, setOnlySaved] = useState(false);
  const [history, setHistory] = useLocalStorage<string[]>("nch-search-history", []);
  const [saved, setSaved] = useLocalStorage<string[]>("nch-saved-words", []);
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = useId();

  const hits = useMemo(() => searchVocabulary(items, query, level), [items, query, level]);
  const suggestions = hits.slice(0, 6);
  // Jumlah per level: dari hasil pencarian bila ada kata kunci, atau seluruh kosakata
  const allHits = useMemo(() => searchVocabulary(items, query, "all"), [items, query]);
  const levelCounts = useMemo(() => countByLevel(query.trim() ? allHits.map((h) => h.item) : items), [allHits, items, query]);
  const trimmed = query.trim();

  const browseList = useMemo(() => {
    const base = level === "all" ? items : items.filter((v) => v.level === level);
    return onlySaved ? base.filter((v) => saved.includes(v.id)) : base;
  }, [items, level, onlySaved, saved]);

  function commit(text: string) {
    const t = text.trim().slice(0, 50);
    if (!t) return;
    setQuery(t);
    setOpen(false);
    setActiveIndex(-1);
    setHistory((prev) => [t, ...prev.filter((h) => h !== t)].slice(0, HISTORY_MAX));
  }

  function toggleSave(id: string) {
    setSaved((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (!open || suggestions.length === 0) {
      if (e.key === "ArrowDown" && suggestions.length > 0) {
        setOpen(true);
        setActiveIndex(0);
        e.preventDefault();
      }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i <= 0 ? suggestions.length - 1 : i - 1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      commit(suggestions[activeIndex].item.word);
    } else if (e.key === "Escape") {
      setOpen(false);
      setActiveIndex(-1);
    }
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    commit(query);
  }

  const showSuggestions = open && trimmed.length > 0 && suggestions.length > 0;

  return (
    <div>
      <form role="search" onSubmit={onSubmit} className="rounded-card border border-line bg-surface p-4 shadow-card">
        <label htmlFor="kotoba-q" className="block text-sm font-bold text-ink">Cari kosakata</label>
        <p id="kotoba-help" className="text-xs text-ink-muted">Ketik kanji, hiragana, katakana, romaji, Bahasa Indonesia, atau Bahasa Inggris.</p>
        <div className="relative mt-2 flex gap-2">
          <div className="relative flex-1">
            <input
              ref={inputRef}
              id="kotoba-q"
              type="search"
              role="combobox"
              aria-autocomplete="list"
              aria-expanded={showSuggestions}
              aria-controls={listId}
              aria-activedescendant={showSuggestions && activeIndex >= 0 ? `${listId}-${activeIndex}` : undefined}
              aria-describedby="kotoba-help"
              autoComplete="off"
              spellCheck={false}
              maxLength={50}
              placeholder="mis. 確認, かくにん, kakunin, pengecekan, check"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setOpen(true);
                setActiveIndex(-1);
              }}
              onFocus={() => setOpen(true)}
              onBlur={() => window.setTimeout(() => setOpen(false), 120)}
              onKeyDown={onKeyDown}
              className="h-12 w-full rounded-lg border border-line bg-canvas px-4 font-jp text-base text-ink focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
            />
            {showSuggestions && (
              <ul id={listId} role="listbox" aria-label="Saran kosakata" className="absolute left-0 right-0 top-full z-20 mt-1 overflow-hidden rounded-lg border border-line bg-surface shadow-card-hover">
                {suggestions.map((s, i) => (
                  <li
                    key={s.item.id}
                    id={`${listId}-${i}`}
                    role="option"
                    aria-selected={i === activeIndex}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      commit(s.item.word);
                    }}
                    onMouseEnter={() => setActiveIndex(i)}
                    className={cn("flex cursor-pointer items-center justify-between gap-3 px-4 py-2 text-sm", i === activeIndex ? "bg-brand-50 dark:bg-brand-500/15" : "")}
                  >
                    <span>
                      <span lang="ja" className="font-jp font-bold text-ink">{s.item.word}</span>{" "}
                      <span lang="ja" className="font-jp text-ink-muted">{s.item.reading}</span>
                    </span>
                    <span className="truncate text-ink-muted">{s.item.meaningId[0]}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button type="submit" className="h-12 rounded-lg bg-brand-500 px-5 text-sm font-semibold text-white hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">
            Cari
          </button>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-3">
          <LevelFilter value={level} onChange={setLevel} counts={levelCounts} />
          <label className="inline-flex items-center gap-2 text-sm text-ink">
            <input type="checkbox" checked={onlySaved} onChange={(e) => setOnlySaved(e.target.checked)} className="h-4 w-4 accent-brand-500" />
            Hanya kosakata tersimpan ({saved.length})
          </label>
        </div>

        {history.length > 0 && (
          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-ink-muted">Riwayat:</span>
            {history.map((h) => (
              <button
                key={h}
                type="button"
                onClick={() => commit(h)}
                className="rounded-full bg-surface-muted px-2.5 py-0.5 font-jp text-xs text-ink hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                {h}
              </button>
            ))}
            <button type="button" onClick={() => setHistory([])} className="text-xs font-semibold text-brand-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:text-brand-300">
              Hapus riwayat
            </button>
          </div>
        )}
      </form>

      <div className="mt-6" aria-live="polite">
        {trimmed ? (
          <>
            <p className="mb-3 text-sm text-ink-muted">
              {hits.length > 0 ? <><strong className="text-ink">{hits.length}</strong> hasil untuk “{trimmed}”</> : null}
            </p>
            {hits.length === 0 ? (
              <EmptyState
                title={`Tidak ditemukan hasil untuk “${trimmed}”`}
                description={
                  <ul className="mx-auto mt-2 max-w-sm list-disc space-y-1 pl-5 text-left">
                    <li>Periksa ejaan, atau coba versi romaji/hiragana.</li>
                    <li>Gunakan kata yang lebih pendek (mis. “kaku” untuk kakunin).</li>
                    <li>Ubah filter level menjadi “Semua”.</li>
                  </ul>
                }
                action={
                  <div className="flex flex-wrap justify-center gap-2">
                    {EXAMPLES.map((ex) => (
                      <button key={ex} type="button" onClick={() => commit(ex)} className="rounded-full border border-line px-3 py-1 font-jp text-sm text-ink hover:border-brand-400 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
                        {ex}
                      </button>
                    ))}
                  </div>
                }
              />
            ) : (
              <ul className="space-y-4">
                {hits
                  .filter((h) => !onlySaved || saved.includes(h.item.id))
                  .map((h) => (
                    <li key={h.item.id}>
                      <VocabCard item={h.item} matchedOn={MATCH_LABEL[h.matchedOn]} saved={saved.includes(h.item.id)} onToggleSave={() => toggleSave(h.item.id)} onRelatedClick={commit} />
                    </li>
                  ))}
              </ul>
            )}
          </>
        ) : (
          <>
            <h2 className="mb-3 text-lg font-bold text-ink">{onlySaved ? "Kosakata tersimpan" : "Jelajahi kosakata"} <span className="text-sm font-normal text-ink-muted">({browseList.length})</span></h2>
            {browseList.length === 0 ? (
              <EmptyState title="Belum ada kosakata tersimpan" description="Tekan tombol Simpan pada kartu kosakata untuk menambahkannya ke daftar pribadimu." />
            ) : (
              <ul className="grid gap-4 lg:grid-cols-2">
                {browseList.map((v) => (
                  <li key={v.id}>
                    <VocabCard item={v} saved={saved.includes(v.id)} onToggleSave={() => toggleSave(v.id)} onRelatedClick={commit} />
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
}
