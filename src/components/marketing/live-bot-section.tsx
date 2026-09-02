import React from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import { StatusBadge } from "@/components/shared/status-badge";
import { LockIcon, ShieldIcon, PlayIcon, RefreshCwIcon } from "@/components/shared/icons";

export function LiveBotSection() {
  return (
    <section id="live-bot" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="نمایش زنده ربات"
          title="مشاهده ۲۴ ساعته اجرای ربات"
          subtitle="در فاز بعد، یک پنجره اختصاصی و امن از MT5 به‌صورت عمومی نمایش داده می‌شود؛ بدون نمایش دسکتاپ کامل VPS یا اطلاعات محرمانه."
        />

        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/90 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 bg-zinc-950 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-zinc-700" />
                <span className="h-3 w-3 rounded-full bg-zinc-700" />
                <span className="h-3 w-3 rounded-full bg-zinc-700" />
              </div>
              <span className="text-xs font-semibold text-zinc-300">پنجره عمومی اجرای ربات</span>
            </div>
            <StatusBadge status="اتصال استریم در فاز ۳" variant="pending" />
          </div>

          <div className="relative flex aspect-video w-full flex-col items-center justify-center space-y-4 bg-zinc-950 p-8 text-center">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.04]"
              aria-hidden="true"
            />
            <div className="relative z-10 max-w-md space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 text-amber-400 shadow-inner">
                <RefreshCwIcon size={28} className="text-amber-400/80" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-zinc-100 sm:text-xl">استریم زنده هنوز متصل نشده</h3>
                <p className="text-xs leading-6 text-zinc-400 sm:text-sm">
                  در فاز ۳ فقط یک پنجره اختصاصی و امن از محیط عمومی MT5 نمایش داده خواهد شد. هیچ دسترسی عمومی به VPS ایجاد نمی‌شود.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 text-xs text-zinc-500">
                <LockIcon size={12} className="text-emerald-400" />
                اطلاعات ورود و رمزهای حساس کاملاً جدا می‌مانند
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 border-t border-zinc-800 bg-zinc-950/80 px-6 py-4 text-xs text-zinc-400 sm:grid-cols-3">
            <div className="flex items-center gap-2">
              <ShieldIcon size={14} className="shrink-0 text-emerald-400" />
              <span>VPS: محیط ایزوله و غیرقابل دسترس</span>
            </div>
            <div className="flex items-center gap-2">
              <PlayIcon size={14} className="shrink-0 text-amber-400" />
              <span>استریم: در انتظار پیاده‌سازی فاز ۳</span>
            </div>
            <div className="flex items-center gap-2">
              <LockIcon size={14} className="shrink-0 text-cyan-400" />
              <span>رمز اصلی MT5: هرگز درخواست نمی‌شود</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
