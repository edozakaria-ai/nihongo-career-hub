import Link from "next/link";
import type { JlptLevel } from "@/lib/types";
import { cn } from "@/lib/utils";

const LEVELS: (JlptLevel | "all")[] = ["all", "N5", "N4", "N3", "N2"];

/** Tab level berbasis URL (?level=N3) — bekerja tanpa JavaScript & ramah SEO. */
export function LevelTabs({ basePath, active, counts }: { basePath: string; active: JlptLevel | "all"; counts?: Partial<Record<JlptLevel | "all", number>> }) {
  return (
    <nav aria-label="Filter level JLPT" className="mb-6 overflow-x-auto">
      <ul className="flex gap-2">
        {LEVELS.map((lv) => {
          const isActive = lv === active;
          const href = lv === "all" ? basePath : `${basePath}?level=${lv}`;
          return (
            <li key={lv}>
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "inline-flex h-9 items-center gap-1.5 whitespace-nowrap rounded-full border px-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                  isActive ? "border-brand-500 bg-brand-500 text-white" : "border-line bg-surface text-ink hover:border-brand-400 hover:text-brand-600",
                )}
              >
                {lv === "all" ? "Semua" : lv}
                {counts && counts[lv] !== undefined && <span className={cn("text-xs", isActive ? "text-white/80" : "text-ink-muted")}>({counts[lv]})</span>}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
