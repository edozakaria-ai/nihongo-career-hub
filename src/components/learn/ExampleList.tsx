import type { ExampleSentence } from "@/lib/types";
import { Furigana } from "@/components/ui/Furigana";
import { KANJI_HREF } from "@/lib/kanji-links";

interface ExampleListProps {
  examples: ExampleSentence[];
  /** Kanji pada contoh kalimat bisa diklik menuju halaman kanji (default: ya). */
  linkKanji?: boolean;
}

export function ExampleList({ examples, linkKanji = true }: ExampleListProps) {
  if (examples.length === 0) return <p className="text-sm text-ink-muted">Belum ada contoh kalimat.</p>;
  return (
    <div>
      {linkKanji && <p className="mb-2 text-xs text-ink-muted">Klik kanji bergaris titik untuk membuka halaman kanjinya.</p>}
      <ul className="space-y-3">
        {examples.map((ex, i) => (
          <li key={i} className="rounded-lg bg-surface-muted p-4">
            <p className="text-lg leading-loose text-ink">
              <Furigana text={ex.jp} kanjiLinks={linkKanji ? KANJI_HREF : undefined} />
            </p>
            {ex.romaji && <p className="text-xs italic text-ink-muted">{ex.romaji}</p>}
            <p className="mt-1 text-sm text-ink">{ex.translation}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
