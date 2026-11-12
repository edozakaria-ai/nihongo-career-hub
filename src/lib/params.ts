import { JLPT_LEVELS, type JlptLevel } from "./types";

/** Validasi parameter ?level= dari URL (whitelist) — nilai lain diabaikan. */
export function parseLevelParam(value: string | string[] | undefined): JlptLevel | "all" {
  const v = Array.isArray(value) ? value[0] : value;
  return v && (JLPT_LEVELS as readonly string[]).includes(v) ? (v as JlptLevel) : "all";
}
