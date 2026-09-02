"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ChevronDownIcon, ShieldIcon } from "@/components/shared/icons";

const FAQ_ITEMS = [
  {
    question: "What does the Trading Bot do?",
    answer: "The Trading Bot ingests formatted signal alerts and automatically converts them into structured MetaTrader 5 (MT5) market orders with pre-configured position sizing, stop-loss rules, multi take-profit target splits, and trailing break-even triggers.",
  },
  {
    question: "Does the bot guarantee profit?",
    answer: "No. Automated trading involves substantial financial risk, and losses are possible. Historical performance records do not guarantee future returns, and the bot does not guarantee profit under any circumstances.",
  },
  {
    question: "Can I watch the bot live?",
    answer: "Yes. Phase 3 will introduce a 24/7 live stream displaying a dedicated public MT5 window capture. You will be able to monitor signal execution in real time without exposing VPS credentials or private account data.",
  },
  {
    question: "Which platform does it use?",
    answer: "The bot executes trades natively on the MetaTrader 5 (MT5) platform across supported brokers.",
  },
  {
    question: "How is risk managed?",
    answer: "Risk is managed strictly through mandatory Stop-Loss parameters on every trade, dynamic lot calculation based on fixed account risk percentages, duplicate trade protection, signal expiration windows, and daily/cumulative drawdown guardrails.",
  },
  {
    question: "What information is required to activate my subscription?",
    answer: "Activation requires only your MT5 account login (account number), your broker name, and your server name.",
  },
  {
    question: "Do you need my MT5 master password?",
    answer: "NO. The website and system NEVER request, log, or store your MT5 master password under any circumstances. You retain full control of your master password at all times.",
  },
  {
    question: "How does activation work after purchase?",
    answer: "During the MVP phase, order activation is completed manually by an admin after payment confirmation. Once activated, your order status updates to 'activated' and provides access to your account dashboard.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-zinc-950/60 border-y border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Common Questions & Operational Details"
          subtitle="Everything you need to know about system capabilities, risk management, and security boundaries."
        />

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `faq-content-${idx}`;
            const buttonId = `faq-button-${idx}`;

            return (
              <div
                key={idx}
                className="rounded-xl bg-zinc-900/60 border border-zinc-800/80 overflow-hidden transition-colors"
              >
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 hover:bg-zinc-900/80 transition-colors"
                >
                  <span className="text-sm font-semibold text-zinc-100 pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full bg-zinc-950 flex items-center justify-center text-zinc-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-400" : ""
                    }`}
                  >
                    <ChevronDownIcon size={14} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-6 pb-5 text-xs text-zinc-300 leading-relaxed border-t border-zinc-800/50 pt-3"
                  >
                    {idx === 6 ? (
                      <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-medium flex items-start gap-2">
                        <ShieldIcon size={16} className="shrink-0 mt-0.5" />
                        <span>{item.answer}</span>
                      </div>
                    ) : (
                      <p>{item.answer}</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
