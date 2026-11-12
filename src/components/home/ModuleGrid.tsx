import Link from "next/link";
import { MODULES } from "@/lib/constants";
import type { UserProgress } from "@/lib/types";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ModuleGrid({ progress }: { progress: UserProgress }) {
  return (
    <section aria-labelledby="module-title" className="container py-10">
      <SectionHeading id="module-title" title="Modul Pembelajaran" jp="モジュール" description="Lima modul inti yang saling terhubung." />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {MODULES.map((m) => {
          const p = progress.modules[m.key];
          return (
            <li key={m.key}>
              <Link
                href={m.href}
                className="flex h-full flex-col rounded-card border border-line bg-surface p-5 shadow-card transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                <span aria-hidden="true" lang="ja" className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 font-jp text-2xl font-bold text-brand-600 dark:bg-brand-500/15 dark:text-brand-200">
                  {m.icon}
                </span>
                <h3 className="mt-3 font-bold text-ink">
                  {m.title} <span lang="ja" className="font-jp text-xs font-medium text-ink-muted">{m.jp}</span>
                </h3>
                <p className="mt-1 flex-1 text-sm text-ink-muted">{m.description}</p>
                <ProgressBar className="mt-4" size="sm" value={p.done} max={p.total} label={`${p.done}/${p.total} materi`} />
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
