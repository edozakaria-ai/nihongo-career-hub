"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Penyimpanan lokal (localStorage) bersama. Dipakai oleh storage.ts & progress.ts.
 * Tahap 5: diganti Supabase — API hook tetap sama sehingga komponen tidak berubah.
 */
export const STORAGE_EVENT = "nch-storage";

export function readStore<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function writeStore<T>(key: string, value: T): void {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new CustomEvent(STORAGE_EVENT, { detail: key }));
  } catch {
    /* localStorage penuh/diblokir: abaikan */
  }
}

export function removeStore(key: string): void {
  try {
    window.localStorage.removeItem(key);
    window.dispatchEvent(new CustomEvent(STORAGE_EVENT, { detail: key }));
  } catch {
    /* abaikan */
  }
}

/** State yang disinkronkan ke localStorage dan antar-komponen/tab. */
export function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial);
  const [ready, setReady] = useState(false);
  const valueRef = useRef(value);
  valueRef.current = value;

  useEffect(() => {
    setValue(readStore(key, initial));
    setReady(true);
    const sync = (e: Event) => {
      const changedKey = e instanceof CustomEvent ? e.detail : (e as StorageEvent).key;
      if (changedKey === key) setValue(readStore(key, initial));
    };
    window.addEventListener(STORAGE_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(STORAGE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
    // initial sengaja tidak dimasukkan agar tidak memicu loop untuk literal objek/array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const update = useCallback(
    (next: T | ((prev: T) => T)) => {
      // Baca nilai terbaru dari storage agar beberapa pembaruan beruntun tidak saling menimpa
      const prev = readStore(key, valueRef.current);
      const resolved = typeof next === "function" ? (next as (p: T) => T)(prev) : next;
      writeStore(key, resolved);
      setValue(resolved);
    },
    [key],
  );

  return [value, update, ready] as const;
}
