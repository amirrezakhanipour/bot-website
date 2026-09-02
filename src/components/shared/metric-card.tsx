import React from "react";
import { StatusBadge } from "./status-badge";

interface MetricCardProps {
  label: string;
  value?: string | number | null;
  description?: string;
  unit?: string;
  statusText?: string;
  className?: string;
}

export function MetricCard({
  label,
  value = null,
  description,
  unit,
  statusText = "Not published yet",
  className = "",
}: MetricCardProps) {
  const displayValue = value !== null && value !== undefined ? `${value}${unit ? ` ${unit}` : ""}` : "—";
  const isUnpublished = value === null || value === undefined;

  return (
    <div
      className={`group relative p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-200 flex flex-col justify-between ${className}`}
    >
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-medium text-zinc-400 tracking-wide uppercase">
            {label}
          </span>
          <StatusBadge
            status={statusText}
            variant={isUnpublished ? "neutral" : "active"}
          />
        </div>
        <div className="pt-2 pb-1">
          <span
            className={`text-2xl sm:text-3xl font-mono font-semibold tracking-tight ${
              isUnpublished ? "text-zinc-500" : "text-zinc-100"
            }`}
          >
            {displayValue}
          </span>
        </div>
      </div>
      {description && (
        <p className="mt-3 text-xs text-zinc-500 line-clamp-2 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
