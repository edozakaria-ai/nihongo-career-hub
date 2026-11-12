import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GRAMMAR } from "@/data";
import { GRAMMAR_EXERCISES } from "@/data/grammar-exercises";
import { pageMetadata } from "@/lib/seo";
import { Badge, LevelBadge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ButtonLink } from "@/components/ui/Button";
import { ExampleList } from "@/components/learn/ExampleList";
import { FavoriteButton } from "@/components/learn/FavoriteButton";
import { StatusControl } from "@/components/learn/StatusControl";
import { GrammarPractice } from "@/components/bunpou/GrammarPractice";

type Props = { params: { slug: string } };

const FORMALITY_LABEL = { kasual: "Kasual", netral: "Netral", sopan: "Sopan", formal: "Formal" } as const;

export function generateStaticParams() {
  return GRAMMAR.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const g = GRAMMAR.find((x) => x.slug === params.slug);
  if (!g) return { title: "Pola tidak ditemukan" };
  return pageMetadata({
    title: `${g.pattern} — arti & contoh (${g.level})`,
    description: `${g.pattern}: ${g.meaning} Struktur: ${g.structure}. Contoh kalimat, perbandingan, kesalahan umum, dan latihan.`,
    path: `/bunpou/${g.slug}`,
  });
}

export default function BunpouDetailPage({ params }: Props) {
  const index = GRAMMAR.findIndex((x) => x.slug === params.slug);
  if (index === -1) notFound();
  const g = GRAMMAR[index];
  const exercises = GRAMMAR_EXERCISES[g.id];
  const prev = index > 0 ? GRAMMAR[index - 1] : null;
  const next = index < GRAMMAR.length - 1 ? GRAMMAR[index + 1] : null;

  return (
    <div className="container py-8 sm:py-10">
      <Breadcrumb items={[{ href: "/", label: "Beranda" }, { href: "/bunpou", label: "Bunpou" }, { label: g.pattern }]} />

      <header className="relative rounded-card border border-line bg-surface p-6 shadow-card">
        <FavoriteButton itemKey={`grammar:${g.id}`} label={`pola ${g.pattern}`} className="absolute right-4 top-4" />
        <div className="flex flex-wrap items-center gap-2">
          <LevelBadge level={g.level} />
          <Badge>Formalitas: {FORMALITY_LABEL[g.formality]}</Badge>
        </div>
        <h1 lang="ja" className="mt-3 font-jp text-3xl font-bold text-ink sm:text-4xl">{g.pattern}</h1>
        <p className="mt-2 text-lg text-ink">{g.meaning}</p>
        <div className="mt-4 rounded-lg bg-brand-50 p-4 dark:bg-brand-500/10">
          <p className="text-xs font-bold uppercase tracking-wide text-brand-700 dark:text-brand-200">Struktur</p>
          <p lang="ja" className="mt-1 font-jp text-ink">{g.structure}</p>
        </div>
      </header>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <section aria-labelledby="use-title" className="rounded-card border border-line bg-surface p-5 shadow-card">
            <h2 id="use-title" className="font-bold text-ink">Situasi penggunaan</h2>
            <p className="mt-1 text-ink">{g.usage}</p>
          </section>

          <section aria-labelledby="ex-title" className="rounded-card border border-line bg-surface p-5 shadow-card">
            <h2 id="ex-title" className="mb-3 font-bold text-ink">Contoh kalimat</h2>
            <ExampleList examples={g.examples} />
          </section>

          {g.comparison && g.comparison.length > 0 && (
            <section aria-labelledby="cmp-title" className="rounded-card border border-line bg-surface p-5 shadow-card">
              <h2 id="cmp-title" className="mb-3 font-bold text-ink">Perbedaan dengan pola mirip</h2>
              <ul className="space-y-2">
                {g.comparison.map((c) => (
                  <li key={c.pattern} className="rounded-lg bg-surface-muted p-3 text-sm">
                    <span lang="ja" className="font-jp font-bold text-ink">{c.pattern}</span>
                    <span className="text-ink"> — {c.note}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section aria-labelledby="mis-title" className="rounded-card border border-amber-200 bg-amber-50 p-5 dark:border-amber-500/30 dark:bg-amber-500/10">
            <h2 id="mis-title" className="mb-2 font-bold text-amber-900 dark:text-amber-200">⚠ Kesalahan umum pelajar Indonesia</h2>
            <ul className="list-disc space-y-1 pl-5 text-sm text-ink">
              {g.commonMistakes.map((m) => <li key={m} className="font-jp">{m}</li>)}
            </ul>
          </section>

          <section aria-labelledby="prac-title" className="rounded-card border border-line bg-surface p-5 shadow-card sm:p-7">
            <h2 id="prac-title" className="mb-4 text-lg font-bold text-ink">Latihan</h2>
            {exercises ? <GrammarPractice grammarId={g.id} set={exercises} /> : <p className="text-sm text-ink-muted">Latihan untuk pola ini sedang disiapkan.</p>}
          </section>
        </div>

        <aside className="space-y-4">
          <div className="rounded-card border border-line bg-surface p-5 shadow-card">
            <StatusControl itemKey={`grammar:${g.id}`} />
          </div>
          <nav aria-label="Pola lain" className="flex flex-col gap-2">
            {prev && <ButtonLink href={`/bunpou/${prev.slug}`} variant="outline" className="justify-start">← <span lang="ja" className="font-jp">{prev.pattern}</span></ButtonLink>}
            {next && <ButtonLink href={`/bunpou/${next.slug}`} variant="outline" className="justify-start"><span lang="ja" className="font-jp">{next.pattern}</span> →</ButtonLink>}
          </nav>
        </aside>
      </div>
    </div>
  );
}
