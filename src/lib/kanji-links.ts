import { KANJI } from "@/data";

/**
 * Peta karakter kanji → URL halaman detail kanji.
 * Hanya dipakai di Server Component (mis. ExampleList) agar data kanji
 * tidak ikut terkirim ke browser.
 */
export const KANJI_HREF: Record<string, string> = Object.fromEntries(
  KANJI.map((k) => [k.character, "/kanji/" + k.id]),
);
