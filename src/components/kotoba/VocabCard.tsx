"use client";

import type { PartOfSpeech, Vocabulary } from "@/lib/types";
import { Badge, LevelBadge } from "@/components/ui/Badge";
import { Furigana } from "@/components/ui/Furigana";
import { cn } from "@/lib/utils";

export const POS_LABEL: Record<PartOfSpeech, string> = {
  nomina: "Nomina",
  "verba-1": "Verba gol. 1",
  "verba-2": "Verba gol. 2",
  "verba-3": "Verba gol. 3",
  "adjektiva-i": "Adjektiva-i",
  "adjektiva-na": "Adjektiva-na",
  adverbia: "Adverbia",
  ungkapan: "Ungkapan",
};

interface VocabCardProps {
  item: Vocabulary;
  saved: boolean;
  onToggleSave: () => void;
  onRelatedClick?: (word: string) => void;
  matchedOn?: string;
}

export function VocabCard({ item, saved, onToggleSave, onRelatedClick, matchedOn }: VocabCardProps) {
  return (
    <article className="rounded-card border border-line bg-surface p-5 shadow-card" aria-labelledby={`v-${item.id}`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 id={`v-${item.id}`} className="flex flex-wrap items-end gap-x-3 gap-y-1">
            <span lang="ja" className="font-jp text-3xl font-bold text-ink">{item.word}</span>
            <span className="pb-1 text-ink-muted">
              <span lang="ja" className="font-jp">{item.reading}</span> · <span className="italic">{item.romaji}</span>
            </span>
          </h3>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <LevelBadge level={item.level} />
            <Badge>{POS_LABEL[item.partOfSpeech]}</Badge>
            {item.tags?.map((t) => <Badge key={t} tone="brand">{t}</Badge>)}
            {matchedOn && <Badge tone="info">cocok: {matchedOn}</Badge>}
          </div>
        </div>
        <button
          type="button"
          onClick={onToggleSave}
          aria-pressed={saved}
          className={cn(
            "inline-flex h-9 items-center gap-1.5 rounded-lg px-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
            saved ? "bg-brand-500 text-white hover:bg-brand-600" : "border border-line bg-surface text-ink hover:border-brand-400 hover:text-brand-600",
          )}
        >
          <span aria-hidden="true">{saved ? "✓" : "＋"}</span>
          {saved ? "Tersimpan" : "Simpan"}
          <span className="sr-only"> kata {item.word}</span>
        </button>
      </div>

      <p className="mt-3 font-semibold text-ink">{item.meaningId.join("; ")}</p>
      {item.meaningEn.length > 0 && <p className="text-sm text-ink-muted">EN: {item.meaningEn.join("; ")}</p>}

      {item.examples.map((ex, i) => (
        <div key={i} className="mt-3 rounded-lg bg-surface-muted p-3">
          <p className="text-lg leading-loose text-ink"><Furigana text={ex.jp} /></p>
          {ex.romaji && <p className="text-xs italic text-ink-muted">{ex.romaji}</p>}
          <p className="mt-1 text-sm text-ink">{ex.translation}</p>
        </div>
      ))}

      {item.related && item.related.length > 0 && (
        <div className="mt-3 flex flex-wrap items-center gap-1.5 text-sm">
          <span className="text-ink-muted">Kata terkait:</span>
          {item.related.map((r) =>
            onRelatedClick ? (
              <button
                key={r}
                type="button"
                lang="ja"
                onClick={() => onRelatedClick(r)}
                className="rounded-full border border-line px-2.5 py-0.5 font-jp text-ink hover:border-brand-400 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                {r}
              </button>
            ) : (
              <span key={r} lang="ja" className="font-jp text-ink">{r}</span>
            ),
          )}
        </div>
      )}
    </article>
  );
}
