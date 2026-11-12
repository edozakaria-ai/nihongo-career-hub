"use client";

import { useId } from "react";
import { STATUS_LABEL, useLearningState } from "@/lib/storage";
import type { LearningStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

const ORDER: LearningStatus[] = ["new", "learning", "mastered"];

/** Pilih status belajar (radio group) — dapat digunakan dengan keyboard. */
export function StatusControl({ itemKey }: { itemKey: string }) {
  const { get, setStatus, ready } = useLearningState();
  const current = ready ? get(itemKey).status : "new";
  const name = useId();
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-bold text-ink">Status belajar</legend>
      <div className="flex flex-wrap gap-2">
        {ORDER.map((s) => (
          <label
            key={s}
            className={cn(
              "cursor-pointer rounded-full border px-3 py-1.5 text-sm font-semibold transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand-500",
              current === s ? "border-brand-500 bg-brand-500 text-white" : "border-line bg-surface text-ink hover:border-brand-400",
            )}
          >
            <input type="radio" name={name} value={s} checked={current === s} onChange={() => setStatus(itemKey, s)} className="sr-only" />
            {STATUS_LABEL[s]}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function StatusDot({ status }: { status: LearningStatus }) {
  const color = status === "mastered" ? "bg-emerald-500" : status === "learning" ? "bg-amber-400" : "bg-line";
  return (
    <span className="inline-flex items-center gap-1 text-[11px] text-ink-muted">
      <span aria-hidden="true" className={cn("h-2 w-2 rounded-full", color)} />
      {STATUS_LABEL[status]}
    </span>
  );
}
