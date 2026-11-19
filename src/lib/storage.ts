"use client";

import { useCallback } from "react";
import type { LearningStatus } from "./types";
import { useLocalStorage } from "./local-store";
import { STORE_KEYS, XP, addActivity, awardOnce } from "./progress";

/**
 * Penyimpanan progres belajar (mode prototipe, localStorage).
 * Tahap 5: diganti tabel Supabase learning_progress, saved_words, attempts — API hook dipertahankan.
 */
export { useLocalStorage } from "./local-store";

export interface ItemState {
  status: LearningStatus;
  favorite: boolean;
}
type LearningMap = Record<string, ItemState>;

export const STATUS_LABEL: Record<LearningStatus, string> = {
  new: "Belum dipelajari",
  learning: "Sedang dipelajari",
  mastered: "Dikuasai",
};

const DEFAULT_ITEM: ItemState = { status: "new", favorite: false };
const RANK: Record<LearningStatus, number> = { new: 0, learning: 1, mastered: 2 };

function xpForItem(itemKey: string): number {
  return itemKey.startsWith("reading:") ? XP.reading : XP.answer;
}

/** itemKey contoh: "kanji:k-nichi", "grammar:g-tai", "reading:r-n5-ichinichi". */
export function useLearningState() {
  const [map, setMap, ready] = useLocalStorage<LearningMap>(STORE_KEYS.learning, {});

  const get = useCallback((itemKey: string): ItemState => map[itemKey] ?? DEFAULT_ITEM, [map]);

  const setStatus = useCallback(
    (itemKey: string, status: LearningStatus) => {
      setMap((prev) => ({ ...prev, [itemKey]: { ...(prev[itemKey] ?? DEFAULT_ITEM), status } }));
      if (status === "mastered") awardOnce("mastered:" + itemKey, XP.mastered);
    },
    [setMap],
  );

  const toggleFavorite = useCallback(
    (itemKey: string) =>
      setMap((prev) => {
        const cur = prev[itemKey] ?? DEFAULT_ITEM;
        return { ...prev, [itemKey]: { ...cur, favorite: !cur.favorite } };
      }),
    [setMap],
  );

  /** Dipanggil saat pengguna mengerjakan latihan: beri XP lalu naikkan status tanpa menurunkan. */
  const markAtLeast = useCallback(
    (itemKey: string, status: LearningStatus) => {
      addActivity(xpForItem(itemKey), itemKey);
      setMap((prev) => {
        const cur = prev[itemKey] ?? DEFAULT_ITEM;
        if (RANK[cur.status] >= RANK[status]) return prev;
        return { ...prev, [itemKey]: { ...cur, status } };
      });
      if (status === "mastered") awardOnce("mastered:" + itemKey, XP.mastered);
    },
    [setMap],
  );

  return { ready, get, setStatus, toggleFavorite, markAtLeast };
}
