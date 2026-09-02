import React from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import { LockIcon, ShieldIcon, ActivityIcon, CheckCircleIcon } from "@/components/shared/icons";

const TRANSPARENCY_PILLARS = [
  {
    title: "Performance Revision History",
    description: "Manual performance metric edits create new timestamped value records so prior metric revisions remain available. Monthly records are retained, including negative months.",
    icon: ActivityIcon,
  },
  {
    title: "Zero Master Password Storage",
    description: "The website never requests, logs, or stores your MetaTrader 5 master password. Activation data is limited to account login, broker, and server name.",
    icon: LockIcon,
  },
  {
    title: "Rule-Based Trade Management",
    description: "Configured execution, position-sizing, stop-loss, take-profit, break-even, duplicate-protection, and risk-limit rules are applied systematically by the bot.",
    icon: ShieldIcon,
  },
  {
    title: "Documented Research & Methodologies",
    description: "System features, reference material, and installation guidance will be documented on dedicated website pages as those phases are implemented.",
    icon: CheckCircleIcon,
  },
];

export function TransparencySection() {
  return (
    <section className="py-20 md:py-28 bg-zinc-950/60 border-y border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge="Product Principles"
          title="Transparency & Operational Security"
          subtitle="Designed around clear product boundaries, visible risk disclosures, traceable performance updates, and careful handling of account information."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {TRANSPARENCY_PILLARS.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400">
                  <IconComponent size={20} />
                </div>
                <h3 className="text-base font-semibold text-zinc-100">
                  {pillar.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
