import type { ReactNode } from "react";
import type { JlptLevel } from "@/lib/types";
import { cn } from "@/lib/utils";

type Tone = "brand" | "neutral" | "success" | "warning" | "info";

const tones: Record<Tone, string> = {
  brand: "bg-brand-50 text-brand-700 ring-brand-200 dark:bg-brand-500/15 dark:text-brand-200 dark:ring-brand-500/30",
  neutral: "bg-surface-muted text-ink-muted ring-line",
  success: "bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300 dark:ring-emerald-500/30",
  warning: "bg-amber-50 text-amber-800 ring-amber-200 dark:bg-amber-500/15 dark:text-amber-300 dark:ring-amber-500/30",
  info: "bg-indigo-100 text-indigo-700 ring-indigo-500/20 dark:bg-indigo-500/15 dark:text-indigo-100 dark:ring-indigo-500/30",
};

export function Badge({ children, tone = "neutral", className }: { children: ReactNode; tone?: Tone; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset", tones[tone], className)}>
      {children}
    </span>
  );
}

const levelTone: Record<JlptLevel, string> = {
  N5: "bg-emerald-500",
  N4: "bg-sky-500",
  N3: "bg-indigo-500",
  N2: "bg-brand-500",
};

/** Badge level JLPT dengan warna konsisten di seluruh aplikasi. */
export function LevelBadge({ level, className }: { level: JlptLevel; className?: string }) {
  return (
    <span className={cn("inline-flex h-6 min-w-[2.25rem] items-center justify-center rounded-md px-1.5 text-xs font-bold text-white", levelTone[level], className)}>
      {level}
    </span>
  );
}
