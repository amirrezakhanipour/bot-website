import React from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import { StatusBadge } from "@/components/shared/status-badge";
import { LockIcon, ShieldIcon, PlayIcon, RefreshCwIcon } from "@/components/shared/icons";

export function LiveBotSection() {
  return (
    <section id="live-bot" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge="Live Bot Interface"
          title="24/7 Live Bot View"
          subtitle="This is the final responsive player shell. The dedicated public MT5 window stream itself will be connected in Phase 3."
        />

        <div className="max-w-5xl mx-auto rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-2xl overflow-hidden backdrop-blur-xl">
          <div className="px-5 py-4 bg-zinc-950 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-zinc-700" />
                <span className="w-3 h-3 rounded-full bg-zinc-700" />
                <span className="w-3 h-3 rounded-full bg-zinc-700" />
              </div>
              <span className="text-xs font-mono font-semibold text-zinc-300">
                LIVE BOT // PUBLIC VIEW
              </span>
            </div>
            <StatusBadge status="Not Connected Yet" variant="pending" />
          </div>

          <div className="relative aspect-video w-full bg-zinc-950 flex flex-col items-center justify-center p-8 text-center space-y-4">
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"
              aria-hidden="true"
            />

            <div className="relative z-10 space-y-4 max-w-md">
              <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-400 mx-auto shadow-inner">
                <RefreshCwIcon size={28} className="animate-spin-slow text-amber-400/80" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-zinc-100">
                  Live View Integration Pending
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Phase 3 will connect a dedicated public MT5 window capture. The full VPS desktop and private credentials must never be exposed through this view.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-500">
                <LockIcon size={12} className="text-emerald-400" />
                <span>Public Window Only — No VPS Credentials</span>
              </div>
            </div>
          </div>

          <div className="px-6 py-4 bg-zinc-950/80 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <ShieldIcon size={14} className="text-emerald-400 shrink-0" />
              <span>Security Boundary: Dedicated Public View</span>
            </div>
            <div className="flex items-center gap-2">
              <PlayIcon size={14} className="text-amber-400 shrink-0" />
              <span>Stream Technology: Phase 3 Decision</span>
            </div>
            <div className="flex items-center gap-2">
              <LockIcon size={14} className="text-cyan-400 shrink-0" />
              <span>MT5 Master Password: Never Requested</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
