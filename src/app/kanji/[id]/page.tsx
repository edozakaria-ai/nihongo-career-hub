import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KANJI } from "@/data";
import { pageMetadata } from "@/lib/seo";
import { buildChoices } from "@/lib/quiz";
import { LevelBadge, Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ButtonLink } from "@/components/ui/Button";
import { ExampleList } from "@/components/learn/ExampleList";
import { FavoriteButton } from "@/components/learn/FavoriteButton";
import { StatusControl } from "@/components/learn/StatusControl";
import { KanjiQuiz } from "@/components/kanji/KanjiQuiz";

type Props = { params: { id: string } };

export function generateStaticParams() {
  return KANJI.map((k) => ({ id: k.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const k = KANJI.find((x) => x.id === params.id);
  if (!k) return { title: "Kanji tidak ditemukan" };
  return pageMetadata({
    title: `Kanji ${k.character} — ${k.meanings[0]} (${k.level})`,
    description: `Arti kanji ${k.character}: ${k.meanings.join(", ")}. Onyomi ${k.onyomi.join("、") || "-"}, kunyomi ${k.kunyomi.join("、") || "-"}, ${k.strokeCount} goresan, contoh kosakata dan kalimat.`,
    path: `/kanji/${k.id}`,
  });
}

export default function KanjiDetailPage({ params }: Props) {
  const index = KANJI.findIndex((x) => x.id === params.id);
  if (index === -1) notFound();
  const k = KANJI[index];
  const prev = index > 0 ? KANJI[index - 1] : null;
  const next = index < KANJI.length - 1 ? KANJI[index + 1] : null;

  const meaningChoices = buildChoices(k.meanings[0], KANJI.map((x) => x.meanings[0]), k.id);
  const readingTask = k.vocabulary.find((v) => v.word !== k.character) ?? k.vocabulary[0] ?? null;

  return (
    <div className="container py-8 sm:py-10">
      <Breadcrumb items={[{ href: "/", label: "Beranda" }, { href: "/kanji", label: "Kanji" }, { label: k.character }]} />

      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        {/* Kartu utama */}
        <aside className="space-y-4">
          <div className="relative rounded-card border border-line bg-surface p-6 text-center shadow-card">
            <div className="absolute left-4 top-4"><LevelBadge level={k.level} /></div>
            <FavoriteButton itemKey={`kanji:${k.id}`} label={`kanji ${k.character}`} className="absolute right-3 top-3" />
            <h1 lang="ja" className="font-jp text-8xl font-bold leading-tight text-ink sm:text-9xl">{k.character}</h1>
            <p className="mt-2 text-lg font-bold text-ink">{k.meanings.join(", ")}</p>
            <div className="mt-2 flex justify-center gap-1.5">
              <Badge>{k.strokeCount} goresan</Badge>
              <Badge tone="brand">{k.category}</Badge>
            </div>
          </div>

          <div className="rounded-card border border-line bg-surface p-5 shadow-card">
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
              <dt className="font-semibold text-ink-muted">Onyomi</dt>
              <dd lang="ja" className="font-jp text-ink">{k.onyomi.join("、") || "—"}</dd>
              <dt className="font-semibold text-ink-muted">Kunyomi</dt>
              <dd lang="ja" className="font-jp text-ink">{k.kunyomi.join("、") || "—"}</dd>
            </dl>
            <p className="mt-3 text-xs text-ink-muted">Onyomi (katakana) = bacaan Tionghoa, biasanya di kata majemuk. Kunyomi (hiragana) = bacaan asli Jepang; huruf dalam kurung adalah okurigana.</p>
          </div>

          <div className="rounded-card border border-line bg-surface p-5 shadow-card">
            <StatusControl itemKey={`kanji:${k.id}`} />
          </div>
        </aside>

        <div className="space-y-6">
          <section aria-labelledby="mn-title" className="rounded-card border border-brand-200 bg-brand-50 p-5 dark:border-brand-500/30 dark:bg-brand-500/10">
            <h2 id="mn-title" className="font-bold text-brand-800 dark:text-brand-200">💡 Mnemonik</h2>
            <p className="mt-1 text-ink">{k.mnemonic}</p>
          </section>

          <section aria-labelledby="so-title" className="rounded-card border border-line bg-surface p-5 shadow-card">
            <h2 id="so-title" className="font-bold text-ink">Urutan goresan</h2>
            {k.strokeOrderSvg ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={k.strokeOrderSvg} alt={`Diagram urutan goresan kanji ${k.character}`} className="mt-3 h-40 w-40" loading="lazy" />
            ) : (
              <div className="mt-3 flex h-40 items-center justify-center rounded-lg border-2 border-dashed border-line text-center text-sm text-ink-muted">
                Diagram urutan goresan ({k.strokeCount} goresan) akan ditambahkan dari sumber terbuka berlisensi.
              </div>
            )}
          </section>

          <section aria-labelledby="voc-title" className="rounded-card border border-line bg-surface p-5 shadow-card">
            <h2 id="voc-title" className="mb-3 font-bold text-ink">Contoh kosakata</h2>
            <ul className="divide-y divide-line">
              {k.vocabulary.map((v) => (
                <li key={v.word} className="flex flex-wrap items-baseline justify-between gap-2 py-2">
                  <span lang="ja" className="font-jp">
                    <span className="text-lg font-bold text-ink">{v.word}</span> <span className="text-ink-muted">{v.reading}</span>
                  </span>
                  <span className="text-sm text-ink">{v.meaning}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="ex-title" className="rounded-card border border-line bg-surface p-5 shadow-card">
            <h2 id="ex-title" className="mb-3 font-bold text-ink">Contoh kalimat</h2>
            <ExampleList examples={k.examples} />
          </section>

          <section aria-labelledby="quiz-title" className="rounded-card border border-line bg-surface p-5 shadow-card sm:p-7">
            <h2 id="quiz-title" className="mb-4 text-lg font-bold text-ink">Latihan</h2>
            <KanjiQuiz kanjiId={k.id} character={k.character} meaningChoices={meaningChoices} readingTask={readingTask} />
          </section>

          <nav aria-label="Kanji lain" className="flex flex-wrap justify-between gap-3">
            {prev ? <ButtonLink href={`/kanji/${prev.id}`} variant="outline">← {prev.character} {prev.meanings[0]}</ButtonLink> : <span />}
            {next ? <ButtonLink href={`/kanji/${next.id}`} variant="outline">{next.character} {next.meanings[0]} →</ButtonLink> : <span />}
          </nav>
        </div>
      </div>
    </div>
  );
}
