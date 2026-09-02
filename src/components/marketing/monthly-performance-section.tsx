import React from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import { StatusBadge } from "@/components/shared/status-badge";
import { BarChartIcon } from "@/components/shared/icons";

export function MonthlyPerformanceSection() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge="Historical Audit"
          title="Monthly Performance Log"
          subtitle="Calendar month breakdown. All recorded months—including negative performance periods—remain permanently visible."
        />

        {/* Monthly Performance UI Container Shell */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Header */}
          <div className="px-6 py-4 bg-zinc-950 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <BarChartIcon size={18} className="text-emerald-400" />
              <h3 className="text-sm font-mono font-semibold text-zinc-200">
                MONTHLY_RESULTS_LOG
              </h3>
            </div>
            <StatusBadge status="History Shell Ready" variant="neutral" />
          </div>

          {/* Table Header Columns Shell */}
          <div className="hidden sm:grid grid-cols-5 px-6 py-3 bg-zinc-950/60 border-b border-zinc-800/60 text-xs font-mono text-zinc-400">
            <div>CALENDAR MONTH</div>
            <div className="text-right">RETURN %</div>
            <div className="text-right">PROFIT / LOSS</div>
            <div className="text-right">TRADES</div>
            <div className="text-right">MAX DRAWDOWN</div>
          </div>

          {/* Body: Honest Empty State */}
          <div className="p-12 text-center space-y-3 bg-zinc-950/40">
            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 mx-auto">
              <BarChartIcon size={22} />
            </div>
            <div className="space-y-1 max-w-sm mx-auto">
              <h4 className="text-sm font-semibold text-zinc-200">
                No Monthly Records Published
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed font-mono">
                Verified monthly performance records will populate here upon live trade execution. Negative months are preserved without deletion.
              </p>
            </div>
          </div>

          {/* Table Footer Policy Banner */}
          <div className="px-6 py-3 bg-zinc-950/80 border-t border-zinc-800 text-[11px] font-mono text-zinc-500 flex flex-wrap justify-between gap-2">
            <span>AUDIT POLICY: APPEND-ONLY HISTORICAL RECORD</span>
            <span>NEGATIVE MONTHS: VISIBLE BY MANDATE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
