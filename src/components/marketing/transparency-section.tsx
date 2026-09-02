import React from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import { LockIcon, ShieldIcon, ActivityIcon, CheckCircleIcon } from "@/components/shared/icons";

const TRANSPARENCY_PILLARS = [
  {
    title: "Append-Only Performance History",
    description: "Every performance edit and monthly summary is recorded as an immutable append-only entry. Negative performance months remain permanently visible.",
    icon: ActivityIcon,
  },
  {
    title: "Zero Master Password Storage",
    description: "The website never requests, logs, or stores your MetaTrader 5 master password. Account connection requires only account login, broker, and server name.",
    icon: LockIcon,
  },
  {
    title: "Systematic Execution Consistency",
    description: "Algorithmic rules enforce exact Stop-Loss and Take-Profit execution without manual emotional override, hesitation, or panic closing.",
    icon: ShieldIcon,
  },
  {
    title: "Documented Research & Methodologies",
    description: "System features and underlying execution mechanics are documented transparently for review on dedicated reference pages.",
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
          subtitle="Designed to provide quantitative clarity without marketing hype, hidden fees, or fabricated records."
        />

        {/* 4 Transparency Cards */}
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
