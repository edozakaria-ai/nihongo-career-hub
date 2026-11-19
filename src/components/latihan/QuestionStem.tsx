import type { ExamQuestion } from "@/lib/exam";
import { Furigana } from "@/components/ui/Furigana";
import { cn } from "@/lib/utils";

const JA = /[\u3040-\u30FF\u3400-\u9FFF]/;

/** Teks pendukung soal; bagian [[...]] diberi garis bawah (bagian yang ditanyakan). */
export function QuestionStem({ text }: { text: string }) {
  const ja = JA.test(text);
  const parts = text.split(/(\[\[[^\]]+\]\])/g);
  return (
    <span lang={ja ? "ja" : "id"} className={cn("mt-2 block rounded-lg bg-surface-muted p-3 text-lg font-normal text-ink", ja && "font-jp")}>
      {parts.map((p, i) =>
        p.startsWith("[[") ? (
          <u key={i} className="decoration-brand-500 decoration-2 underline-offset-4">{p.slice(2, -2)}</u>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </span>
  );
}

/** Pertanyaan + stem. Pertanyaan berfurigana (dari dokkai) dirender dengan Furigana. */
export function QuestionText({ q, number }: { q: ExamQuestion; number?: number }) {
  return (
    <>
      {number !== undefined && <span className="mr-1 text-ink-muted">{number}.</span>}
      {q.prompt.includes("{") ? <Furigana text={q.prompt} className="text-lg leading-loose" /> : <span>{q.prompt}</span>}
      {q.stem && <QuestionStem text={q.stem} />}
    </>
  );
}
