import type { Vocabulary } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { LevelBadge, Badge } from "@/components/ui/Badge";
import { Furigana } from "@/components/ui/Furigana";
import { SectionHeading } from "@/components/ui/SectionHeading";

const POS_LABEL: Record<Vocabulary["partOfSpeech"], string> = {
  nomina: "Nomina",
  "verba-1": "Verba gol. 1",
  "verba-2": "Verba gol. 2",
  "verba-3": "Verba gol. 3",
  "adjektiva-i": "Adjektiva-i",
  "adjektiva-na": "Adjektiva-na",
  adverbia: "Adverbia",
  ungkapan: "Ungkapan",
};

export function DailyWord({ word }: { word: Vocabulary }) {
  const ex = word.examples[0];
  return (
    <section aria-labelledby="daily-word-title">
      <SectionHeading id="daily-word-title" title="Kosakata Harian" jp="今日の言葉" action={{ href: "/kotoba", label: "Cari kosakata" }} />
      <Card className="h-full">
        <div className="flex flex-wrap items-center gap-2">
          <LevelBadge level={word.level} />
          <Badge>{POS_LABEL[word.partOfSpeech]}</Badge>
          {word.tags?.map((t) => (
            <Badge key={t} tone="brand">{t}</Badge>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-end gap-x-4 gap-y-1">
          <p lang="ja" className="font-jp text-4xl font-bold text-ink">{word.word}</p>
          <p className="pb-1 text-ink-muted">
            <span lang="ja" className="font-jp">{word.reading}</span> · <span className="italic">{word.romaji}</span>
          </p>
        </div>
        <p className="mt-2 font-semibold text-ink">{word.meaningId.join(", ")}</p>
        <p className="text-sm text-ink-muted">EN: {word.meaningEn.join(", ")}</p>
        {ex && (
          <div className="mt-4 rounded-lg bg-surface-muted p-3">
            <p className="text-lg leading-loose">
              <Furigana text={ex.jp} />
            </p>
            {ex.romaji && <p className="text-xs italic text-ink-muted">{ex.romaji}</p>}
            <p className="mt-1 text-sm text-ink">{ex.translation}</p>
          </div>
        )}
        {word.related && word.related.length > 0 && (
          <p className="mt-3 text-sm text-ink-muted">
            Kata terkait:{" "}
            {word.related.map((r, i) => (
              <span key={r} lang="ja" className="font-jp text-ink">
                {r}
                {i < word.related!.length - 1 ? "、" : ""}
              </span>
            ))}
          </p>
        )}
      </Card>
    </section>
  );
}
