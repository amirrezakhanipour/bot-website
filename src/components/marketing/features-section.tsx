import React from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  TerminalIcon,
  ShieldIcon,
  SlidersIcon,
  RefreshCwIcon,
  CpuIcon,
  CheckCircleIcon,
  LockIcon,
  AlertTriangleIcon,
} from "@/components/shared/icons";

const CORE_FEATURES = [
  {
    title: "Signal Execution",
    description: "Parses structured trading signals and executes the corresponding orders in MetaTrader 5.",
    icon: TerminalIcon,
  },
  {
    title: "Risk Management",
    description: "Applies stop-loss and configured risk rules before eligible orders are opened.",
    icon: ShieldIcon,
  },
  {
    title: "Multi Take-Profit Execution",
    description: "Supports multiple signal-defined take-profit targets, with execution support for up to six targets.",
    icon: SlidersIcon,
  },
  {
    title: "Break-Even Management",
    description: "Moves remaining positions toward risk-free management when the configured lifecycle condition is reached.",
    icon: RefreshCwIcon,
  },
  {
    title: "Position Sizing",
    description: "Calculates position size from account equity, entry-to-stop distance, and configured signal risk.",
    icon: CpuIcon,
  },
  {
    title: "Duplicate Protection",
    description: "Prevents the same signal from opening duplicate sets of trades.",
    icon: CheckCircleIcon,
  },
  {
    title: "Signal Expiration",
    description: "Rejects stale signals after the configured validity window has elapsed.",
    icon: LockIcon,
  },
  {
    title: "Risk Limits",
    description: "Applies configured loss limits that can halt new execution when protection thresholds are reached.",
    icon: AlertTriangleIcon,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28 bg-zinc-950/60 border-y border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge="Core Capabilities"
          title="Systematic MT5 Execution Engine"
          subtitle="Designed to reduce manual execution delay and apply configured trade-management rules consistently."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_FEATURES.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-emerald-500/40 transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-colors">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="text-base font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors flex items-center gap-1">
                  <span>CAPABILITY // 0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
