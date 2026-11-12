import Link from "next/link";
import { LEVEL_INFO } from "@/lib/constants";
import { JLPT_LEVELS } from "@/lib/types";
import { LevelBadge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LevelPicker() {
  return (
    <section aria-labelledby="level-title" className="container py-10">
      <SectionHeading id="level-title" title="Pilih Level JLPT" jp="レベル" description="Mulai dari level yang sesuai. Kamu bisa berpindah level kapan saja." />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {JLPT_LEVELS.map((lv) => {
          const info = LEVEL_INFO[lv];
          return (
            <li key={lv}>
              <Link
                href={`/kanji?level=${lv}`}
                className="group block h-full rounded-card border border-line bg-surface p-5 shadow-card transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                <div className="flex items-center justify-between">
                  <LevelBadge level={lv} className="h-8 min-w-[3rem] text-sm" />
                  <span className="text-xs font-semibold text-ink-muted">{info.title}</span>
                </div>
                <p className="mt-3 text-sm text-ink">{info.description}</p>
                <p className="mt-4 text-xs text-ink-muted">
                  ±{info.kanji.toLocaleString("id-ID")} kanji · ±{info.vocab.toLocaleString("id-ID")} kosakata
                </p>
                <span className="mt-3 inline-block text-sm font-semibold text-brand-600 group-hover:underline dark:text-brand-300">
                  Mulai {lv} →
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <p className="mt-3 text-xs text-ink-muted">
        *Jumlah kanji & kosakata adalah perkiraan umum kumulatif; JLPT tidak menerbitkan daftar resmi sejak 2010.
      </p>
    </section>
  );
}
