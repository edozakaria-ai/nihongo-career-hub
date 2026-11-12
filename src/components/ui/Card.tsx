import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  as?: "div" | "article" | "section" | "li";
}

export function Card({ className, interactive, as: Tag = "div", ...props }: CardProps) {
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
