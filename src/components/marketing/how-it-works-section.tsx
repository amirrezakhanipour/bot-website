import React from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  ActivityIcon,
  CheckCircleIcon,
  SlidersIcon,
  TerminalIcon,
  RefreshCwIcon,
} from "@/components/shared/icons";

const EXECUTION_STEPS = [
  {
    step: "01",
    title: "Signal Ingestion",
    description: "Incoming signal parameters (Symbol, Direction, Entry Range, Stop-Loss) are parsed by the execution engine.",
    icon: ActivityIcon,
  },
  {
    step: "02",
    title: "Validation & Filters",
    description: "The system checks duplicate rules, signal expiration timestamps, and global drawdown limits.",
    icon: CheckCircleIcon,
  },
  {
    step: "03",
    title: "Order Structuring",
    description: "Position sizing is computed from risk percentage rules, and multi-TP target orders are split.",
    icon: SlidersIcon,
  },
  {
    step: "04",
    title: "MT5 Dispatch",
    description: "Formulated orders are dispatched to MetaTrader 5 terminal via automated integration API.",
    icon: TerminalIcon,
  },
  {
    step: "05",
    title: "Lifecycle Monitoring",
    description: "Stop-Loss is automatically moved to Break-Even upon TP1 hit, and remaining runners are managed.",
    icon: RefreshCwIcon,
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          badge="Execution Flow"
          title="How Signal Execution Works"
          subtitle="A systematic 5-stage pipeline converting incoming signal alerts into structured MetaTrader 5 trades."
        />

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {EXECUTION_STEPS.map((stepItem, idx) => {
            const IconComponent = stepItem.icon;
            return (
              <div
                key={idx}
                className="relative p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      STEP {stepItem.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400">
                      <IconComponent size={16} />
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-100">
                    {stepItem.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-zinc-800/50 text-[10px] font-mono text-zinc-500">
                  STAGE_{stepItem.step}_VERIFIED
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
