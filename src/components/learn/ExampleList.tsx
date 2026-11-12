import type { ExampleSentence } from "@/lib/types";
import { Furigana } from "@/components/ui/Furigana";

export function ExampleList({ examples }: { examples: ExampleSentence[] }) {
  if (examples.length === 0) return <p className="text-sm text-ink-muted">Belum ada contoh kalimat.</p>;
  return (
    <ul className="space-y-3">
      {examples.map((ex, i) => (
        <li key={i} className="rounded-lg bg-surface-muted p-4">
          <p className="text-lg leading-loose text-ink">
            <Furigana text={ex.jp} />
          </p>
          {ex.romaji && <p className="text-xs italic text-ink-muted">{ex.romaji}</p>}
          <p className="mt-1 text-sm text-ink">{ex.translation}</p>
        </li>
      ))}
    </ul>
  );
}
