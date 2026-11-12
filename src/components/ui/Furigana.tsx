import { parseRuby } from "@/lib/ruby";
import { cn } from "@/lib/utils";

interface FuriganaProps {
  text: string;
  className?: string;
}

/**
 * Render teks berformat `漢字{かんじ}` menjadi <ruby>.
 * Furigana bisa disembunyikan dengan memberi class `furigana-off` pada elemen leluhur
 * (lihat globals.css) — dipakai oleh toggle furigana di modul Dokkai (Tahap 2).
 */
export function Furigana({ text, className }: FuriganaProps) {
  const segments = parseRuby(text);
  return (
    <span lang="ja" className={cn("font-jp", className)}>
      {segments.map((s, i) =>
        s.type === "text" ? (
          <span key={i}>{s.text}</span>
        ) : (
          <ruby key={i}>
            {s.base}
            <rp>(</rp>
            <rt>{s.ruby}</rt>
            <rp>)</rp>
          </ruby>
        ),
      )}
    </span>
  );
}
