import React from "react";
import { ShieldIcon, ArrowRightIcon, PlayIcon } from "@/components/shared/icons";

export function FinalCtaSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-800 p-8 sm:p-12 md:p-16 text-center space-y-8 shadow-2xl backdrop-blur-xl">
          {/* Subtle Grid Accent */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"
            aria-hidden="true"
          />

          <div className="relative space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
              <ShieldIcon size={14} />
              SYSTEMATIC DISCIPLINE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
              Ready for Disciplined Automated Trade Execution?
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Explore system features, review risk management controls, and prepare for automated MetaTrader 5 execution.
            </p>
          </div>

          <div className="relative pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-all duration-200 shadow-lg shadow-emerald-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <ShieldIcon size={16} />
              View Pricing Plans
              <ArrowRightIcon size={16} />
            </a>
            <a
              href="#live-bot"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <PlayIcon size={16} />
              Watch Live Stream (Pending)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
