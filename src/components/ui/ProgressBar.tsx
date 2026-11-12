import { cn, percent } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  max: number;
  label: string;
  showValue?: boolean;
  className?: string;
  size?: "sm" | "md";
}

/** Progress bar aksesibel (role="progressbar" + aria-value*). */
export function ProgressBar({ value, max, label, showValue = true, className, size = "md" }: ProgressBarProps) {
  const pct = percent(value, max);
  return (
    <div className={cn("w-full", className)}>
      {showValue && (
        <div className="mb-1 flex items-center justify-between text-xs text-ink-muted">
          <span>{label}</span>
          <span className="font-semibold text-ink">{pct}%</span>
        </div>
      )}
      <div
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-valuetext={`${pct}%`}
        className={cn("overflow-hidden rounded-full bg-surface-muted", size === "sm" ? "h-1.5" : "h-2.5")}
      >
        <div className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600 transition-[width] duration-500" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
