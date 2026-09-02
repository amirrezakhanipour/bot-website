"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ChevronDownIcon, ShieldIcon } from "@/components/shared/icons";

const FAQ_ITEMS = [
  {
    question: "What does the Trading Bot do?",
    answer: "The Trading Bot ingests formatted trading signals and turns eligible signals into structured MetaTrader 5 orders with position sizing, stop-loss handling, multiple take-profit targets, break-even management, duplicate protection, expiration rules, and execution risk controls.",
  },
  {
    question: "Does the bot guarantee profit?",
    answer: "No. Automated trading involves substantial financial risk, and losses are possible. Historical performance does not guarantee future returns, and the bot does not guarantee profit under any circumstances.",
  },
  {
    question: "Can I watch the bot live?",
    answer: "The website is designed to provide a 24/7 public view of a dedicated MT5 window. That stream will be connected in Phase 3 without exposing the full VPS desktop or private credentials.",
  },
  {
    question: "Which platform does it use?",
    answer: "The bot executes trades in the MetaTrader 5 (MT5) environment. Broker compatibility must be confirmed for the account and symbol configuration being used.",
  },
  {
    question: "How is risk managed?",
    answer: "The execution system uses stop-loss parameters, entry-to-stop based position sizing, duplicate protection, signal expiration rules, and configured loss-limit protections. Exact settings remain part of the bot configuration rather than marketing assumptions.",
  },
  {
    question: "What information is required to activate my subscription?",
    answer: "Website activation data is limited to your MT5 account login or account number, broker name, and MT5 server name, together with your website account and order information.",
  },
  {
    question: "Do you need my MT5 master password?",
    answer: "No. The website must never request, log, or store your MT5 master password. You retain control of that password at all times.",
  },
  {
    question: "How does activation work after purchase?",
    answer: "For the MVP, an admin completes activation after payment is confirmed using the existing licensing and client-dashboard systems. The website then reflects the relevant order and activation status.",
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
          subtitle="Key details about system capabilities, risk management, activation, and account-security boundaries."
        />

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
                    className={`w-6 h-6 rounded-full bg-zinc-950 flex items-center justify-center text-zinc-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-emerald-400" : ""}`}
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
