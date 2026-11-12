"use client";

import { useCallback, useEffect, useState } from "react";
import type { LearningStatus } from "./types";

/**
 * Penyimpanan lokal (mode prototipe). Tahap 5: diganti tabel Supabase
 * learning_progress, saved_words, dan attempts — API hook dipertahankan.
 */
const EVENT = "nch-storage";

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new CustomEvent(EVENT, { detail: key }));
  } catch {
    /* localStorage penuh/diblokir: abaikan, data tetap di state */
  }
}

/** State yang disinkronkan ke localStorage dan antar-komponen di halaman yang sama. */
export function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setValue(read(key, initial));
    setReady(true);
    const sync = (e: Event) => {
      const changedKey = e instanceof CustomEvent ? e.detail : (e as StorageEvent).key;
      if (changedKey === key) setValue(read(key, initial));
    };
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
    // initial sengaja tidak dimasukkan agar tidak memicu loop untuk literal objek/array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const update = useCallback(
    (next: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const resolved = typeof next === "function" ? (next as (p: T) => T)(prev) : next;
        write(key, resolved);
        return resolved;
      });
    },
    [key],
  );

  return [value, update, ready] as const;
}

// ── Status belajar & favorit ───────────────────────────────
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

/** itemKey contoh: "kanji:k-nichi", "grammar:g-tai". */
export function useLearningState() {
  const [map, setMap, ready] = useLocalStorage<LearningMap>("nch-learning", {});

  const get = useCallback((itemKey: string): ItemState => map[itemKey] ?? DEFAULT_ITEM, [map]);

  const setStatus = useCallback(
    (itemKey: string, status: LearningStatus) =>
      setMap((prev) => ({ ...prev, [itemKey]: { ...(prev[itemKey] ?? DEFAULT_ITEM), status } })),
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

  /** Naikkan status tanpa menurunkan: new → learning; mastered tetap. */
  const markAtLeast = useCallback(
    (itemKey: string, status: LearningStatus) =>
      setMap((prev) => {
        const cur = prev[itemKey] ?? DEFAULT_ITEM;
        const rank: Record<LearningStatus, number> = { new: 0, learning: 1, mastered: 2 };
        if (rank[cur.status] >= rank[status]) return prev;
        return { ...prev, [itemKey]: { ...cur, status } };
      }),
    [setMap],
  );

  return { ready, get, setStatus, toggleFavorite, markAtLeast };
}
