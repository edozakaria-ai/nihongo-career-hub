import Link from "next/link";
import type { ReactNode } from "react";
import type { JlptLevel } from "@/lib/types";
import { parseRuby } from "@/lib/ruby";
import { cn } from "@/lib/utils";

/** Warna garis bawah kanji per level (sama dengan warna LevelBadge). */
export const LEVEL_UNDERLINE: Record<JlptLevel, string> = {
  N5: "border-emerald-500",
  N4: "border-sky-500",
  N3: "border-indigo-500",
  N2: "border-brand-500",
};

interface FuriganaProps {
  text: string;
  className?: string;
  /** Peta karakter kanji → URL. Bila diisi, kanji yang punya halaman bisa diklik. */
  kanjiLinks?: Record<string, string>;
  /** Peta karakter kanji → level. Bila diisi, kanji diberi garis bawah berwarna. */
  kanjiLevels?: Record<string, JlptLevel>;
}

const KANJI_CHAR = /[\u3400-\u9FFF\uF900-\uFAFF]/;
const linkDotted =
  "rounded-sm text-inherit underline decoration-brand-400 decoration-dotted underline-offset-4 hover:text-brand-600 hover:decoration-solid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:hover:text-brand-300";
const linkPlain =
  "rounded-sm text-inherit hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:hover:text-brand-300";

/** Render tiap karakter: kanji bisa diberi garis level dan/atau tautan. */
function renderChars(text: string, links?: Record<string, string>, levels?: Record<string, JlptLevel>): ReactNode[] {
  return Array.from(text).map((ch, j) => {
    const isKanji = KANJI_CHAR.test(ch);
    const level = isKanji && levels ? levels[ch] : undefined;
    const href = isKanji && links ? links[ch] : undefined;
    if (!level && !href) return <span key={j}>{ch}</span>;
    const inner = level ? <span className={cn("border-b-2 pb-px", LEVEL_UNDERLINE[level])}>{ch}</span> : ch;
    return href ? (
      <Link key={j} href={href} className={level ? linkPlain : linkDotted} title={"Buka kanji " + ch}>
        {inner}
      </Link>
    ) : (
      <span key={j}>{inner}</span>
    );
  });
}

/**
 * Render teks berformat 漢字{かんじ} menjadi <ruby>.
 * - Furigana bisa disembunyikan dengan class "furigana-off" pada elemen leluhur.
 * - kanjiLinks: kanji bisa diklik menuju halaman kanji.
 * - kanjiLevels: kanji diberi garis bawah berwarna sesuai level JLPT.
 */
export function Furigana({ text, className, kanjiLinks, kanjiLevels }: FuriganaProps) {
  const segments = parseRuby(text);
  const enhanced = !!kanjiLinks || !!kanjiLevels;

  return (
    <span lang="ja" className={cn("font-jp", className)}>
      {segments.map((s, i) => {
        if (s.type === "text") {
          return <span key={i}>{enhanced ? renderChars(s.text, kanjiLinks, kanjiLevels) : s.text}</span>;
        }

        const chars = Array.from(s.base);
        const single = chars.length === 1 && kanjiLinks ? kanjiLinks[chars[0]] : undefined;
        const level = chars.length === 1 && kanjiLevels ? kanjiLevels[chars[0]] : undefined;

        // Kanji tunggal ber-tautan: seluruh ruby (kanji + furigana) bisa diklik
        if (single) {
          return (
            <Link
              key={i}
              href={single}
              className={level ? linkPlain : linkDotted}
              title={"Buka kanji " + s.base}
              aria-label={"Buka kanji " + s.base + " (" + s.ruby + ")"}
            >
              <ruby>
                {level ? <span className={cn("border-b-2 pb-px", LEVEL_UNDERLINE[level])}>{s.base}</span> : s.base}
                <rp>(</rp>
                <rt>{s.ruby}</rt>
                <rp>)</rp>
              </ruby>
            </Link>
          );
        }

        return (
          <ruby key={i}>
            {enhanced ? renderChars(s.base, kanjiLinks, kanjiLevels) : s.base}
            <rp>(</rp>
            <rt>{s.ruby}</rt>
            <rp>)</rp>
          </ruby>
        );
      })}
    </span>
  );
}
