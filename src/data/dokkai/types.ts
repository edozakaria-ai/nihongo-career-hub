import type { ReadingLesson } from "@/lib/types";

/** Bacaan dokkai bergaya berita. Memperluas ReadingLesson tanpa mengubah tipe lama. */
export interface NewsReading extends ReadingLesson {
  /** Tanggal terbit, format YYYY-MM-DD. */
  date: string;
  /** Kategori singkat, mis. "Budaya", "Kerja", "Teknologi". */
  topic: string;
  /** Thumbnail ringan tanpa file gambar: emoji + gradasi warna. */
  thumb: { emoji: string; from: string; to: string };
  /** Slug pola bunpou terkait (lihat tab Bunpou). Slug yang tidak ada akan diabaikan. */
  grammar: string[];
  source: { label: string; url?: string };
}
