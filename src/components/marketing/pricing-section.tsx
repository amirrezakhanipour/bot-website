import React from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import { CheckIcon, ShieldIcon, ArrowRightIcon } from "@/components/shared/icons";

const PLAN_INCLUSIONS = [
  "Automated MT5 signal execution engine",
  "Multi take-profit target management (TP1, TP2, TP3)",
  "Trailing break-even stop-loss triggers",
  "Dynamic position sizing & risk percentage calculations",
  "Duplicate trade protection & signal expiration limits",
  "Daily & cumulative drawdown limit guardrails",
  "Client dashboard access & manual admin activation status tracking",
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge="Subscription Catalog"
          title="Simple, Transparent Pricing"
          subtitle="One plan providing full system access. Database-managed pricing with locked currency snapshots at checkout."
        />

        {/* Pricing Card Container */}
        <div className="max-w-xl mx-auto rounded-2xl bg-zinc-900/90 border border-emerald-500/30 shadow-2xl overflow-hidden backdrop-blur-xl p-8 space-y-8 relative">
          <div className="absolute top-0 right-0 px-4 py-1.5 bg-emerald-500/10 border-b border-l border-emerald-500/30 rounded-bl-xl text-[10px] font-mono font-semibold text-emerald-400">
            MVP PLAN
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-zinc-100">
              Monthly Bot Subscription
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Full access to automated MT5 signal execution, risk management controls, and order status dashboard.
            </p>
            <div className="pt-4 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-zinc-100 font-mono">
                Price Available at Checkout
              </span>
            </div>
            <p className="text-[11px] font-mono text-zinc-500">
              Billing: Monthly recurring subscription (Database-managed rate)
            </p>
          </div>

          <div className="space-y-3 border-t border-zinc-800 pt-6">
            <span className="text-xs font-mono font-semibold text-zinc-300 uppercase tracking-wider">
              Included Features & Controls:
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

          {/* Action CTA */}
          <div className="pt-2 space-y-3">
            <a
              href="#pricing"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-all duration-200 shadow-lg shadow-emerald-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <ShieldIcon size={16} />
              Proceed to Checkout (Visual Shell)
              <ArrowRightIcon size={16} />
            </a>
            <p className="text-[11px] font-mono text-center text-zinc-500">
              Note: Checkout flow is disabled during Phase 2 UI development. License activation is manually completed by admins post-payment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
