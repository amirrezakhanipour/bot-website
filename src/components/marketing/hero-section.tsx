import React from "react";
import {
  ShieldIcon,
  TerminalIcon,
  PlayIcon,
  ArrowRightIcon,
  ActivityIcon,
  CheckCircleIcon,
  AlertTriangleIcon,
} from "@/components/shared/icons";

export function HeroSection() {
  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Subtle Background Mesh Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono font-medium text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              AUTOMATED MT5 TRADE EXECUTION
            </div>

            {/* Primary H1 Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 leading-[1.15]">
              Execute trading signals with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                disciplined risk controls.
              </span>
            </h1>

            {/* Factual Product Subtitle */}
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Automate the ingestion and execution of MetaTrader 5 trading signals with built-in position sizing, multi take-profit target management, trailing break-even triggers, duplicate order protection, signal expiration rules, and hard risk limits.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#live-bot"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold rounded-xl bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-all duration-200 shadow-lg shadow-emerald-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <PlayIcon size={16} />
                Watch Live Stream (Pending)
              </a>
              <a
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800/80 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                Explore System Features
                <ArrowRightIcon size={16} />
              </a>
            </div>

            {/* Risk Warning Microcopy */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-zinc-500">
              <AlertTriangleIcon size={14} className="text-amber-500/80 shrink-0" />
              <span>
                Trading involves substantial risk. Historical results do not guarantee future performance.
              </span>
            </div>
          </div>

          {/* Right Column: Custom MT5 Terminal HTML/CSS Product Visual */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-2xl overflow-hidden backdrop-blur-xl">
              {/* Window Header Bar */}
              <div className="px-4 py-3 bg-zinc-950/80 border-b border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-zinc-700" />
                  <span className="w-3 h-3 rounded-full bg-zinc-700" />
                  <span className="w-3 h-3 rounded-full bg-zinc-700" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                  <TerminalIcon size={14} className="text-emerald-400" />
                  <span>MT5.ExecutionEngine.Terminal</span>
                </div>
                <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                  v2.4-STABLE
                </div>
              </div>

              {/* Terminal Content Body */}
              <div className="p-5 space-y-4 font-mono text-xs">
                {/* Active Signal Ingestion Banner */}
                <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800/80 space-y-2">
                  <div className="flex items-center justify-between text-zinc-400">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <ActivityIcon size={14} /> SIGNAL INGESTION
                    </span>
                    <span className="text-[10px] text-zinc-500">STATUS: STANDBY</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-zinc-300 text-[11px] pt-1">
                    <div>
                      <span className="text-zinc-500">Symbol:</span> EURUSD
                    </div>
                    <div>
                      <span className="text-zinc-500">Direction:</span> BUY
                    </div>
                    <div>
                      <span className="text-zinc-500">Entry Range:</span> 1.0845 - 1.0850
                    </div>
                    <div>
                      <span className="text-zinc-500">Stop Loss:</span> 1.0820
                    </div>
                  </div>
                </div>

                {/* Multi Take-Profit Structure Visual */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-zinc-400 text-[11px]">
                    <span>TAKE-PROFIT EXECUTORS</span>
                    <span className="text-zinc-500">3 TARGETS</span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="p-2 rounded bg-zinc-950/60 border border-zinc-800/50 flex items-center justify-between">
                      <span className="text-emerald-400 font-medium">TP 1: 1.0875</span>
                      <span className="text-[10px] text-zinc-400">40% Volume (Break-Even Trigger)</span>
                    </div>
                    <div className="p-2 rounded bg-zinc-950/60 border border-zinc-800/50 flex items-center justify-between">
                      <span className="text-teal-400 font-medium">TP 2: 1.0910</span>
                      <span className="text-[10px] text-zinc-400">30% Volume (Trail SL)</span>
                    </div>
                    <div className="p-2 rounded bg-zinc-950/60 border border-zinc-800/50 flex items-center justify-between">
                      <span className="text-cyan-400 font-medium">TP 3: 1.0950</span>
                      <span className="text-[10px] text-zinc-400">30% Volume (Runner)</span>
                    </div>
                  </div>
                </div>

                {/* Risk Guards Grid */}
                <div className="pt-2 grid grid-cols-2 gap-2 text-[10px] border-t border-zinc-800/60">
                  <div className="p-2 rounded bg-zinc-950/40 border border-zinc-800/40 flex items-center gap-1.5 text-zinc-400">
                    <CheckCircleIcon size={12} className="text-emerald-400 shrink-0" />
                    <span>Duplicate Guard: Active</span>
                  </div>
                  <div className="p-2 rounded bg-zinc-950/40 border border-zinc-800/40 flex items-center gap-1.5 text-zinc-400">
                    <ShieldIcon size={12} className="text-emerald-400 shrink-0" />
                    <span>Max Risk: 1.0% / Trade</span>
                  </div>
                </div>
              </div>

              {/* Terminal Bottom Footer Status */}
              <div className="px-4 py-2 bg-zinc-950/90 border-t border-zinc-800/80 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span>SYSTEM: READY FOR COMMANDS</span>
                <span>MT5 CONNECTION: IDLE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
