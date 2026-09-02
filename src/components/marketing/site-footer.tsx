import React from "react";
import { AlertTriangleIcon, TerminalIcon } from "@/components/shared/icons";

export function SiteFooter() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/80 text-zinc-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="p-6 rounded-2xl bg-zinc-900/80 border border-amber-500/20 space-y-3">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-semibold">
            <AlertTriangleIcon size={16} />
            <span>TRADING RISK DISCLOSURE</span>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed font-sans">
            Trading foreign exchange and other leveraged financial instruments involves substantial risk and may not be suitable for every trader. Losses are possible. Before trading, evaluate your financial objectives, experience, and risk tolerance. Past performance does not guarantee future results. Nothing presented on this website constitutes financial advice or a guarantee of profitable trading outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-4">
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400">
                <TerminalIcon size={16} />
              </div>
              <span className="text-sm font-bold tracking-wider text-zinc-100 uppercase font-mono">
                Trading Bot
              </span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Public marketing and subscription website for an automated MetaTrader 5 trading bot product.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold text-zinc-200 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-zinc-100 transition-colors">Overview</a></li>
              <li><a href="#live-bot" className="hover:text-zinc-100 transition-colors">Live Bot (Pending)</a></li>
              <li><a href="#performance" className="hover:text-zinc-100 transition-colors">Performance</a></li>
              <li><a href="#features" className="hover:text-zinc-100 transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-zinc-100 transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-zinc-100 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold text-zinc-200 uppercase tracking-wider">
              Documentation
            </h4>
            <ul className="space-y-2 text-xs text-zinc-500">
              <li className="flex items-center gap-1.5"><span>Robot Presentation</span><span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-600">Phase 5</span></li>
              <li className="flex items-center gap-1.5"><span>Research & Articles</span><span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-600">Phase 6</span></li>
              <li className="flex items-center gap-1.5"><span>Installation Guide</span><span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-600">Phase 7</span></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold text-zinc-200 uppercase tracking-wider">
              Legal & Disclosures
            </h4>
            <ul className="space-y-2 text-xs text-zinc-500">
              <li className="flex items-center gap-1.5"><span>Terms of Service</span><span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-600">Phase 8</span></li>
              <li className="flex items-center gap-1.5"><span>Risk Disclosure</span><span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-600">Phase 8</span></li>
              <li className="flex items-center gap-1.5"><span>Privacy Policy</span><span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-600">Phase 8</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 text-center sm:text-left">
          <div>&copy; {new Date().getFullYear()} Trading Bot. All rights reserved.</div>
          <div className="max-w-md text-[11px] leading-relaxed">
            MetaTrader 5 is a registered trademark of MetaQuotes Ltd. This website is independent and is not affiliated with MetaQuotes.
          </div>
        </div>
      </div>
    </footer>
  );
}
