import React from "react";
import {
  CpuIcon,
  ShieldIcon,
  SlidersIcon,
  CheckCircleIcon,
  ActivityIcon,
} from "@/components/shared/icons";

const TRUST_PULSES = [
  {
    title: "MetaTrader 5 Native",
    description: "Executes directly via MT5 API",
    icon: CpuIcon,
  },
  {
    title: "Structured Risk Rules",
    description: "Hard stop-loss enforcement",
    icon: ShieldIcon,
  },
  {
    title: "Multi-TP Execution",
    description: "Split volume across targets",
    icon: SlidersIcon,
  },
  {
    title: "Duplicate Guard",
    description: "Prevents overlapping trades",
    icon: CheckCircleIcon,
  },
  {
    title: "Transparent Logging",
    description: "Append-only operational record",
    icon: ActivityIcon,
  },
];

export function TrustStrip() {
  return (
    <section className="py-8 bg-zinc-900/40 border-y border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 items-center justify-between">
          {TRUST_PULSES.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 text-left group"
              >
                <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/40 transition-colors shrink-0">
                  <IconComponent size={18} />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-zinc-200 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-[11px] text-zinc-500 font-mono">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
