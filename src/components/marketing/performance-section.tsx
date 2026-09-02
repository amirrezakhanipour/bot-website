import React from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import { MetricCard } from "@/components/shared/metric-card";

const METRIC_CATALOG = [
  { label: "Total Profit", description: "Cumulative net profit for the published performance record." },
  { label: "Monthly Profit", description: "Net profit for the currently published calendar month." },
  { label: "Profit Factor", description: "Ratio of total gross profits to total gross losses." },
  { label: "Recovery Factor", description: "Ratio of net profit to maximum drawdown." },
  { label: "Maximum Drawdown", description: "Largest recorded peak-to-trough decline in the published performance series." },
  { label: "Win Rate", description: "Percentage of closed trades recorded as profitable." },
  { label: "Total Trades", description: "Total count of closed trades in the published record." },
  { label: "Winning Trades", description: "Count of closed trades recorded with a positive result." },
  { label: "Losing Trades", description: "Count of closed trades recorded with a negative result." },
  { label: "Average Win", description: "Average result across winning trades." },
  { label: "Average Loss", description: "Average result across losing trades." },
  { label: "Average Risk/Reward", description: "Published average risk-to-reward measure for the tracked trades." },
];

export function PerformanceSection() {
  return (
    <section id="performance" className="py-20 md:py-28 bg-zinc-950/60 border-y border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge="Performance Record"
          title="Performance Metrics"
          subtitle="Performance figures are managed manually by the website administrator and remain unpublished until real values are entered."
        />

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

        <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center max-w-2xl mx-auto">
          <p className="text-xs text-zinc-400 font-mono">
            No figures are simulated for this UI. Performance metric updates use timestamped revision records so prior metric values can be retained.
          </p>
        </div>
      </div>
    </section>
  );
}
