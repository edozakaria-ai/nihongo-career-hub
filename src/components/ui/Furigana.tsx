import Link from "next/link";
import { parseRuby } from "@/lib/ruby";
import { cn } from "@/lib/utils";

interface FuriganaProps {
  text: string;
  className?: string;
  /** Peta karakter kanji → URL. Bila diisi, kanji yang punya halaman bisa diklik. */
  kanjiLinks?: Record<string, string>;
}

const KANJI_CHAR = /[\u3400-\u9FFF\uF900-\uFAFF]/;
const linkClass =
  "rounded-sm text-inherit underline decoration-brand-400 decoration-dotted underline-offset-4 hover:text-brand-600 hover:decoration-solid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:hover:text-brand-300";

/**
 * Render teks berformat 漢字{かんじ} menjadi <ruby>.
 * - Furigana bisa disembunyikan dengan class "furigana-off" pada elemen leluhur.
 * - Bila kanjiLinks diberikan: kanji tunggal (beserta furigananya) menjadi satu tautan;
 *   kata majemuk ditautkan per karakter.
 */
export function Furigana({ text, className, kanjiLinks }: FuriganaProps) {
  const segments = parseRuby(text);

  return (
    <span lang="ja" className={cn("font-jp", className)}>
      {segments.map((s, i) => {
        if (s.type === "text") return <span key={i}>{s.text}</span>;

        const chars = Array.from(s.base);
        const single = chars.length === 1 && kanjiLinks ? kanjiLinks[chars[0]] : undefined;

        // Kanji tunggal: seluruh ruby (kanji + furigana) bisa diklik
        if (single) {
          return (
            <Link key={i} href={single} className={linkClass} title={"Buka kanji " + s.base} aria-label={"Buka kanji " + s.base + " (" + s.ruby + ")"}>
              <ruby>
                {s.base}
                <rp>(</rp>
                <rt>{s.ruby}</rt>
                <rp>)</rp>
              </ruby>
            </Link>
          );
        }

        // Kata majemuk: tiap kanji yang punya halaman ditautkan sendiri-sendiri
        return (
          <ruby key={i}>
            {kanjiLinks
              ? chars.map((ch, j) => {
                  const href = KANJI_CHAR.test(ch) ? kanjiLinks[ch] : undefined;
                  return href ? (
                    <Link key={j} href={href} className={linkClass} title={"Buka kanji " + ch}>
                      {ch}
                    </Link>
                  ) : (
                    <span key={j}>{ch}</span>
                  );
                })
              : s.base}
            <rp>(</rp>
            <rt>{s.ruby}</rt>
            <rp>)</rp>
          </ruby>
        );
      })}
    </span>
  );
}
