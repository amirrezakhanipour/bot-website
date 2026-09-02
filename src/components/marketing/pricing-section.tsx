import React from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import { CheckIcon, ShieldIcon, ArrowRightIcon } from "@/components/shared/icons";

const PLAN_INCLUSIONS = [
  "Automated MT5 signal execution engine",
  "Multi take-profit target support for eligible signals",
  "Break-even trade management",
  "Dynamic position sizing and configured risk calculations",
  "Duplicate signal protection and signal expiration limits",
  "Configured execution risk-limit protections",
  "Client dashboard access after activation",
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge="Subscription"
          title="Simple Pricing Structure"
          subtitle="The MVP uses one monthly plan. The final price will be loaded from the website pricing database when commerce is connected."
        />

        <div className="max-w-xl mx-auto rounded-2xl bg-zinc-900/90 border border-emerald-500/30 shadow-2xl overflow-hidden backdrop-blur-xl p-8 space-y-8 relative">
          <div className="absolute top-0 right-0 px-4 py-1.5 bg-emerald-500/10 border-b border-l border-emerald-500/30 rounded-bl-xl text-[10px] font-mono font-semibold text-emerald-400">
            MVP PLAN
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-zinc-100">
              Monthly Bot Subscription
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Subscription access to the trading bot product, with account activation handled through the website order process.
            </p>
            <div className="pt-4 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-zinc-100 font-mono">
                Not Published Yet
              </span>
            </div>
            <p className="text-[11px] font-mono text-zinc-500">
              Final pricing is intentionally not fabricated in this Phase 2 UI.
            </p>
          </div>

          <div className="space-y-3 border-t border-zinc-800 pt-6">
            <span className="text-xs font-mono font-semibold text-zinc-300 uppercase tracking-wider">
              Planned Subscription Access:
            </span>
            <ul className="space-y-2.5 text-xs text-zinc-300">
              {PLAN_INCLUSIONS.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <CheckIcon size={10} />
                  </div>
                  <span className="leading-normal">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2 space-y-3">
            <a
              href="#pricing"
              aria-disabled="true"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-zinc-800 text-zinc-400 border border-zinc-700 cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500"
            >
              <ShieldIcon size={16} />
              Checkout Not Connected Yet
              <ArrowRightIcon size={16} />
            </a>
            <p className="text-[11px] font-mono text-center text-zinc-500">
              Checkout and payment are later phases. MVP license and client-dashboard activation will be completed manually after confirmed payment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
