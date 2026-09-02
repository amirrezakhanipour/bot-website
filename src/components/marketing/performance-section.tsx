import React from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import { MetricCard } from "@/components/shared/metric-card";

const METRIC_CATALOG = [
  { label: "Total Profit", description: "Cumulative net profit across all verified trades." },
  { label: "Monthly Profit", description: "Current calendar month net execution profit." },
  { label: "Profit Factor", description: "Ratio of total gross profits to total gross losses." },
  { label: "Recovery Factor", description: "Ratio of net profit to peak drawdown depth." },
  { label: "Maximum Drawdown", description: "Peak-to-trough peak equity decline percentage." },
  { label: "Win Rate", description: "Percentage of total closed trades resulting in profit." },
  { label: "Total Trades", description: "Total count of executed and closed MT5 orders." },
  { label: "Winning Trades", description: "Count of closed trades reaching TP targets." },
  { label: "Losing Trades", description: "Count of closed trades hitting Stop Loss." },
  { label: "Average Win", description: "Mean monetary profit achieved on winning trades." },
  { label: "Average Loss", description: "Mean monetary loss sustained on losing trades." },
  { label: "Average Risk/Reward", description: "Mean ratio of realized reward relative to initial risk." },
];

export function PerformanceSection() {
  return (
    <section id="performance" className="py-20 md:py-28 bg-zinc-950/60 border-y border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge="Audit & Performance"
          title="Performance Metrics Shell"
          subtitle="Real-time operational catalog. Performance records will be updated via append-only admin entry once live verification commences."
        />

        {/* 12 Expandable Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {METRIC_CATALOG.map((metric, idx) => (
            <MetricCard
              key={idx}
              label={metric.label}
              value={null}
              description={metric.description}
              statusText="Not published yet"
            />
          ))}
        </div>

        {/* Honest Transparency Note */}
        <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center max-w-2xl mx-auto">
          <p className="text-xs text-zinc-400 font-mono">
            Notice: All metrics are stored with append-only revision history. No performance figures are fabricated or simulated during Phase 2 UI development.
          </p>
        </div>
      </div>
    </section>
  );
}
