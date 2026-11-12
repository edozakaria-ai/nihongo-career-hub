import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { READINGS } from "@/data";
import { pageMetadata } from "@/lib/seo";
import { stripRuby } from "@/lib/ruby";
import { Badge, LevelBadge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Furigana } from "@/components/ui/Furigana";
import { ReadingPlayer } from "@/components/dokkai/ReadingPlayer";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return READINGS.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const r = READINGS.find((x) => x.slug === params.slug);
  if (!r) return { title: "Bacaan tidak ditemukan" };
  return pageMetadata({
    title: `Dokkai ${r.level}: ${stripRuby(r.title)}`,
    description: `Latihan membaca bahasa Jepang level ${r.level} (± ${r.minutes} menit) dengan furigana opsional, kosakata penting, dan ${r.questions.length} pertanyaan pemahaman.`,
    path: `/dokkai/${r.slug}`,
  });
}

export default function DokkaiDetailPage({ params }: Props) {
  const r = READINGS.find((x) => x.slug === params.slug);
  if (!r) notFound();

  return (
    <div className="container py-8 sm:py-10">
      <Breadcrumb items={[{ href: "/", label: "Beranda" }, { href: "/dokkai", label: "Dokkai" }, { label: stripRuby(r.title) }]} />
      <header className="mb-6">
        <div className="flex flex-wrap items-center gap-2">
          <LevelBadge level={r.level} />
          <Badge>⏱ ± {r.minutes} menit</Badge>
          <Badge>Kesulitan {r.difficulty}/5</Badge>
          <Badge tone="info">Bacaan buatan platform</Badge>
        </div>
        <h1 className="mt-3 text-2xl font-extrabold leading-loose text-ink sm:text-3xl">
          <Furigana text={r.title} />
        </h1>
      </header>
      <ReadingPlayer lesson={r} />
    </div>
  );
}
