"use client";

import React, { useState } from "react";
import { TerminalIcon, MenuIcon, XIcon, ShieldIcon } from "@/components/shared/icons";

const NAV_LINKS = [
  { label: "Overview", href: "#hero" },
  { label: "Live Bot", href: "#live-bot" },
  { label: "Performance", href: "#performance" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md px-1 py-0.5"
        >
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/50 transition-colors">
            <TerminalIcon size={18} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-wider text-zinc-100 uppercase font-mono">
              Trading Bot
            </span>
            <span className="text-[10px] text-zinc-500 font-mono leading-none">
              MT5 Execution
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-100 transition-colors rounded-md hover:bg-zinc-900/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="hidden sm:inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            <ShieldIcon size={14} />
            View Pricing
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-zinc-300 hover:text-zinc-100 hover:bg-zinc-900 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-zinc-900">
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold rounded-lg bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors"
            >
              <ShieldIcon size={16} />
              View Pricing
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
