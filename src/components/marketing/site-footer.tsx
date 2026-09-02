import React from "react";
import { AlertTriangleIcon, TerminalIcon } from "@/components/shared/icons";

export function SiteFooter() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/80 text-zinc-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Prominent Trading Risk Disclosure Banner */}
        <div className="p-6 rounded-2xl bg-zinc-900/80 border border-amber-500/20 space-y-3">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-semibold">
            <AlertTriangleIcon size={16} />
            <span>MANDATORY TRADING RISK DISCLOSURE</span>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed font-sans">
            Trading foreign exchange, futures, and financial instruments on margin involves a high level of risk and may not be suitable for all investors. Leveraged trading can result in losses exceeding initial deposits. Before deciding to trade, you should carefully evaluate your financial objectives, experience level, and risk tolerance. Past performance is not indicative of future results. No material or presentation on this website constitutes financial advice or guarantees profitable trading outcomes.
          </p>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-4">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400">
                <TerminalIcon size={16} />
              </div>
              <span className="text-sm font-bold tracking-wider text-zinc-100 uppercase font-mono">
                QuantExec<span className="text-emerald-400">.bot</span>
              </span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Public marketing and subscription portal for automated MetaTrader 5 signal execution.
            </p>
          </div>

          {/* Column 1: Website Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold text-zinc-200 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-zinc-100 transition-colors">Overview</a>
              </li>
              <li>
                <a href="#live-bot" className="hover:text-zinc-100 transition-colors">Live Stream (Pending)</a>
              </li>
              <li>
                <a href="#performance" className="hover:text-zinc-100 transition-colors">Performance Audit</a>
              </li>
              <li>
                <a href="#features" className="hover:text-zinc-100 transition-colors">Execution Features</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-zinc-100 transition-colors">Pricing Plans</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-zinc-100 transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Documentation (Future Pages) */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold text-zinc-200 uppercase tracking-wider">
              Documentation
            </h4>
            <ul className="space-y-2 text-xs text-zinc-500">
              <li className="flex items-center gap-1.5">
                <span>Robot Presentation</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-zinc-900 border border-zinc-800 text-zinc-600">Phase 5</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span>Research & Articles</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-zinc-900 border border-zinc-800 text-zinc-600">Phase 6</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span>Installation Guide</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-zinc-900 border border-zinc-800 text-zinc-600">Phase 7</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal Disclosures (Future Pages) */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold text-zinc-200 uppercase tracking-wider">
              Legal & Disclosures
            </h4>
            <ul className="space-y-2 text-xs text-zinc-500">
              <li className="flex items-center gap-1.5">
                <span>Terms of Service</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-zinc-900 border border-zinc-800 text-zinc-600">Phase 8</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span>Risk Disclosure</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-zinc-900 border border-zinc-800 text-zinc-600">Phase 8</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span>Privacy Policy</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-zinc-900 border border-zinc-800 text-zinc-600">Phase 8</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & MT5 Trademark Disclaimer */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} Trading Bot Sales Website. All rights reserved.
          </div>
          <div className="max-w-md text-[11px] leading-relaxed">
            MetaTrader 5 is a registered trademark of MetaQuotes Ltd. This website is an independent product seller and is not affiliated with MetaQuotes.
          </div>
        </div>
      </div>
    </footer>
  );
}
