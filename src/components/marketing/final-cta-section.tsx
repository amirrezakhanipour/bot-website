import React from "react";
import { ShieldIcon, ArrowRightIcon, PlayIcon } from "@/components/shared/icons";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative space-y-8 rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-950 p-8 text-center shadow-2xl backdrop-blur-xl sm:p-12 md:p-16">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03]"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
              <ShieldIcon size={14} />
              اجرای منظم، بدون تصمیم‌گیری لحظه‌ای
            </div>
            <h2 className="text-3xl font-bold leading-[1.5] tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
              برای اجرای خودکار و منظم معاملات آماده‌ای؟
            </h2>
            <p className="text-sm leading-7 text-zinc-400 sm:text-base">
              قبل از خرید می‌توانی قابلیت‌های ربات، منطق مدیریت ریسک، گزارش عملکرد و نمایش زنده سیستم را بررسی کنی.
            </p>
          </div>

          <div className="relative flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400 sm:w-auto"
            >
              مشاهده پلن خرید
              <ArrowRightIcon size={16} className="rotate-180" />
            </a>
            <a
              href="#live-bot"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-zinc-200 transition-colors hover:bg-zinc-800 sm:w-auto"
            >
              <PlayIcon size={16} />
              بخش نمایش زنده
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
