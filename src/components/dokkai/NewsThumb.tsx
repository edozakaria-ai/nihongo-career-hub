import type { NewsReading } from "@/data/dokkai/types";
import { cn } from "@/lib/utils";

/** Thumbnail ringan: gradasi warna + emoji (tanpa file gambar). */
export function NewsThumb({ thumb, className, size = "md" }: { thumb: NewsReading["thumb"]; className?: string; size?: "md" | "lg" }) {
  return (
    <div
      aria-hidden="true"
      className={cn("flex shrink-0 items-center justify-center overflow-hidden rounded-xl", className)}
      style={{ backgroundImage: "linear-gradient(135deg, " + thumb.from + ", " + thumb.to + ")" }}
    >
      <span className={size === "lg" ? "text-7xl drop-shadow" : "text-4xl drop-shadow"}>{thumb.emoji}</span>
    </div>
  );
}
