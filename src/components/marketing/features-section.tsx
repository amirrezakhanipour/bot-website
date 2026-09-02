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
    description: "Automated parsing and instant dispatch of trade commands directly into MetaTrader 5.",
    icon: TerminalIcon,
  },
  {
    title: "Risk Management",
    description: "Mandatory Stop-Loss enforcement on every order to cap maximum per-trade downside.",
    icon: ShieldIcon,
  },
  {
    title: "Multi Take-Profit Execution",
    description: "Automated order splitting across up to 3 distinct TP price targets.",
    icon: SlidersIcon,
  },
  {
    title: "Break-Even Management",
    description: "Automatic stop-loss trailing to entry price once initial profit targets are secured.",
    icon: RefreshCwIcon,
  },
  {
    title: "Position Sizing",
    description: "Dynamic lot calculation based on account equity and configured risk percentage per trade.",
    icon: CpuIcon,
  },
  {
    title: "Duplicate Protection",
    description: "Anti-overlap safeguards preventing duplicate trade executions for identical signals.",
    icon: CheckCircleIcon,
  },
  {
    title: "Signal Expiration",
    description: "Automatic rejection of stale signals exceeding configured time-in-force limits.",
    icon: LockIcon,
  },
  {
    title: "Risk Limits",
    description: "Daily and cumulative drawdown guardrails that halt execution upon threshold breach.",
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
          subtitle="Built to eliminate manual execution delays and enforce strict quantitative risk parameters on every trade."
        />

        {/* 8 Feature Cards Grid */}
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
                  <span>SPEC_ID // 0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
