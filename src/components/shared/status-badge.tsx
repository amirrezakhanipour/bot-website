import React from "react";

type StatusVariant = "pending" | "active" | "neutral" | "warning";

interface StatusBadgeProps {
  status: string;
  variant?: StatusVariant;
  className?: string;
}

export function StatusBadge({
  status,
  variant = "neutral",
  className = "",
}: StatusBadgeProps) {
  const variantStyles: Record<StatusVariant, string> = {
    pending:
      "bg-amber-500/10 text-amber-400 border-amber-500/20",
    active:
      "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    neutral:
      "bg-zinc-800/60 text-zinc-400 border-zinc-700/50",
    warning:
      "bg-rose-500/10 text-rose-400 border-rose-500/20",
  };

  const dotStyles: Record<StatusVariant, string> = {
    pending: "bg-amber-400",
    active: "bg-emerald-400 animate-pulse",
    neutral: "bg-zinc-500",
    warning: "bg-rose-400",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-mono font-medium rounded-full border ${variantStyles[variant]} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dotStyles[variant]}`} />
      {status}
    </span>
  );
}
