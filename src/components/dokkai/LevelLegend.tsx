import type { JlptLevel } from "@/lib/types";
import { LEVEL_UNDERLINE } from "@/components/ui/Furigana";
import { cn } from "@/lib/utils";

const LEVELS: JlptLevel[] = ["N5", "N4", "N3", "N2"];

/** Keterangan warna garis bawah kanji. Bila counts diberikan, tampilkan jumlah per level. */
export function LevelLegend({ counts, other, className }: { counts?: Record<JlptLevel, number>; other?: number; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-muted", className)} aria-label="Keterangan warna level kanji">
      {LEVELS.map((lv) => (
        <li key={lv} className="flex items-center gap-1.5">
          <span aria-hidden="true" className={cn("inline-block w-5 border-b-2", LEVEL_UNDERLINE[lv])} />
          <span className="font-semibold text-ink">{lv}</span>
          {counts && <span>({counts[lv]})</span>}
        </li>
      ))}
      {other !== undefined && (
        <li className="flex items-center gap-1.5">
          <span aria-hidden="true" className="inline-block w-5 border-b-2 border-dashed border-line" />
          <span>Lainnya ({other})</span>
        </li>
      )}
    </ul>
  );
}
