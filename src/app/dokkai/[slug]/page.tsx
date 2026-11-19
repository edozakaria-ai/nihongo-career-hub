import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GRAMMAR } from "@/data";
import { findReading, isPublished, publishedReadings } from "@/data/dokkai";
import { pageMetadata } from "@/lib/seo";
import { stripRuby } from "@/lib/ruby";
import { kanjiMapsFor, kanjiStatsFor } from "@/lib/kanji-level";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ReadingPlayer, type RelatedGrammar } from "@/components/dokkai/ReadingPlayer";

type Props = { params: { slug: string } };

// Halaman dibuat ulang paling lama tiap 1 jam; bacaan yang terbit setelah build dibuat saat pertama dibuka
export const revalidate = 3600;
export const dynamicParams = true;

export function generateStaticParams() {
  return publishedReadings().map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const r = findReading(params.slug);
  if (!r || !isPublished(r)) return { title: "Bacaan tidak ditemukan" };
  return pageMetadata({
    title: "Dokkai " + r.level + ": " + stripRuby(r.title),
    description: "Latihan membaca bahasa Jepang level " + r.level + " (± " + r.minutes + " menit) dengan furigana, warna level kanji, dan pertanyaan pemahaman.",
    path: "/dokkai/" + r.slug,
  });
}

export default function DokkaiDetailPage({ params }: Props) {
  const r = findReading(params.slug);
  // Bacaan yang belum terbit tidak bisa dibuka lewat URL
  if (!r || !isPublished(r)) notFound();

  const texts = [r.title, ...r.paragraphs];
  const { levels, links } = kanjiMapsFor([...texts, ...r.questions.map((q) => q.prompt)]);
  const stats = kanjiStatsFor(texts);
  const grammar: RelatedGrammar[] = r.grammar
    .map((slug) => GRAMMAR.find((g) => g.slug === slug))
    .filter((g): g is NonNullable<typeof g> => !!g)
    .map((g) => ({ slug: g.slug, pattern: g.pattern, meaning: g.meaning, level: g.level }));

  return (
    <div className="container py-8 sm:py-10">
      <Breadcrumb items={[{ href: "/", label: "Beranda" }, { href: "/dokkai", label: "Dokkai" }, { label: stripRuby(r.title) }]} />
      <ReadingPlayer lesson={r} kanjiLevels={levels} kanjiLinks={links} stats={stats} grammar={grammar} />
    </div>
  );
}
