"use client";

import { useLearningState } from "@/lib/storage";
import { cn } from "@/lib/utils";

export function FavoriteButton({ itemKey, label, className }: { itemKey: string; label: string; className?: string }) {
  const { get, toggleFavorite, ready } = useLearningState();
  const fav = ready && get(itemKey).favorite;
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(itemKey);
      }}
      aria-pressed={fav}
      aria-label={fav ? `Hapus ${label} dari favorit` : `Tambahkan ${label} ke favorit`}
      title={fav ? "Hapus dari favorit" : "Tambah ke favorit"}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full text-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
        fav ? "bg-brand-50 text-brand-500 dark:bg-brand-500/15" : "text-ink-muted hover:bg-surface-muted hover:text-brand-500",
        className,
      )}
    >
      <span aria-hidden="true">{fav ? "★" : "☆"}</span>
    </button>
  );
}
