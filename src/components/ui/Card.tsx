import type { ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLElement> {
  interactive?: boolean;
  as?: "div" | "article" | "section" | "li";
}

export function Card({ className, interactive, as = "div", ...props }: CardProps) {
  // ElementType dipakai agar elemen pembungkus bisa berganti (div/article/section/li)
  // tanpa konflik tipe event handler antar-elemen HTML.
  const Tag: ElementType = as;
  return (
    <Tag
      className={cn(
        "rounded-card border border-line bg-surface p-5 shadow-card",
        interactive && "transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-card-hover",
        className,
      )}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-base font-bold text-ink", className)} {...props} />;
}
