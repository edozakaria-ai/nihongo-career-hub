"use client";

import { useId } from "react";

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder?: string;
  help?: string;
}

/** Kotak pencarian sederhana (label terlihat, tombol hapus, Esc untuk mengosongkan). */
export function SearchBox({ value, onChange, label, placeholder, help }: SearchBoxProps) {
  const id = useId();
  return (
    <div role="search">
      <label htmlFor={id} className="mb-1 block text-sm font-bold text-ink">{label}</label>
      {help && <p id={`${id}-help`} className="mb-2 text-xs text-ink-muted">{help}</p>}
      <div className="relative">
        <span aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
        </span>
        <input
          id={id}
          type="search"
          value={value}
          maxLength={50}
          autoComplete="off"
          spellCheck={false}
          placeholder={placeholder}
          aria-describedby={help ? `${id}-help` : undefined}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Escape") onChange("");
          }}
          className="h-12 w-full rounded-lg border border-line bg-canvas pl-10 pr-10 font-jp text-base text-ink focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            aria-label="Hapus pencarian"
            className="absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-ink-muted hover:bg-surface-muted hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
