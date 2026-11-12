import type { ReactNode } from "react";

export function EmptyState({ title, description, action }: { title: string; description?: ReactNode; action?: ReactNode }) {
  return (
    <div className="rounded-card border border-dashed border-line bg-surface p-8 text-center">
      <p aria-hidden="true" lang="ja" className="font-jp text-3xl text-brand-400">
        ？
      </p>
      <p className="mt-2 font-bold text-ink">{title}</p>
      {description && <div className="mt-1 text-sm text-ink-muted">{description}</div>}
      {action && <div className="mt-4 flex justify-center">{action}</div>}
    </div>
  );
}
