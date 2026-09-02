import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`space-y-3 ${
        centered ? "text-center max-w-3xl mx-auto" : "max-w-2xl"
      } ${className}`}
    >
      {badge && (
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium tracking-wide uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-100">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
