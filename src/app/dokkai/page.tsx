import type { Metadata } from "next";
import { publishedReadings } from "@/data/dokkai";
import { pageMetadata } from "@/lib/seo";
import { parseLevelParam } from "@/lib/params";
import { kanjiMapsFor } from "@/lib/kanji-level";
import { DokkaiList, type DokkaiListItem } from "@/components/dokkai/DokkaiList";

export const metadata: Metadata = pageMetadata({
  title: "Dokkai — Latihan Membaca Bergaya Berita",
  description: "Bacaan bahasa Jepang bergaya berita level N5–N2 dengan furigana, warna level kanji, kosakata penting, pertanyaan, dan tata bahasa terkait.",
  path: "/dokkai",
});

// Selalu dihitung ulang per permintaan agar bacaan yang baru terbit langsung tampil
export const dynamic = "force-dynamic";

export default function DokkaiPage({ searchParams }: { searchParams: { level?: string | string[] } }) {
  const initialLevel = parseLevelParam(searchParams.level);
  const items: DokkaiListItem[] = publishedReadings().map((r) => ({
    slug: r.slug,
    title: r.title,
    date: r.date,
    level: r.level,
    minutes: r.minutes,
    topic: r.topic,
    thumb: r.thumb,
  }));
  // Hanya kanji yang muncul di judul yang dikirim ke browser
  const { levels } = kanjiMapsFor(items.map((i) => i.title));

  return (
    <div className="container py-8 sm:py-10">
      <header className="mb-6">
        <h1 className="flex items-baseline gap-2 text-2xl font-extrabold text-ink sm:text-3xl">
          Dokkai <span lang="ja" className="font-jp text-base font-medium text-brand-600 dark:text-brand-300">読解</span>
        </h1>
        <p className="mt-1 text-ink-muted">Bacaan singkat bergaya berita, bertambah setiap hari. Garis warna di bawah kanji menunjukkan level JLPT-nya.</p>
      </header>
      <DokkaiList key={initialLevel} items={items} kanjiLevels={levels} initialLevel={initialLevel} />
    </div>
  );
}
