import Link from "next/link";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  id?: string;
  title: string;
  jp?: string;
  description?: ReactNode;
  action?: { href: string; label: string };
}

export function SectionHeading({ id, title, jp, description, action }: SectionHeadingProps) {
  return (
    <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
      <div>
        <h2 id={id} className="flex items-baseline gap-2 text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
          {title}
          {jp && <span lang="ja" className="font-jp text-sm font-medium text-brand-600 dark:text-brand-300">{jp}</span>}
        </h2>
        {description && <p className="mt-1 text-sm text-ink-muted">{description}</p>}
      </div>
      {action && (
        <Link href={action.href} className="rounded text-sm font-semibold text-brand-600 hover:text-brand-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:text-brand-300">
          {action.label} →
        </Link>
      )}
    </div>
  );
}
