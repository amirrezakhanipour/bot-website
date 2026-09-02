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
    <section id="hero" className="relative overflow-hidden pb-20 pt-12 md:pb-28 md:pt-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-6 text-center lg:col-span-7 lg:text-right">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              اجرای خودکار معاملات در MetaTrader 5
            </div>

            <h1 className="text-3xl font-bold leading-[1.45] tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
              اجرای سیگنال‌های معاملاتی با{" "}
              <span className="bg-gradient-to-l from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                کنترل ریسک منظم و دقیق
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg lg:mx-0">
              ربات معامله‌گر، سیگنال‌های ورودی را در متاتریدر ۵ اجرا می‌کند و هم‌زمان مدیریت حجم، چند هدف سود، انتقال حد ضرر به سر‌به‌سر، جلوگیری از اجرای تکراری، انقضای سیگنال و محدودیت‌های ریسک را مدیریت می‌کند.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row lg:justify-start">
              <a
                href="#live-bot"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/10 transition-all duration-200 hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:w-auto"
              >
                <PlayIcon size={16} />
                مشاهده بخش اجرای زنده
              </a>
              <a
                href="#features"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-zinc-300 transition-all duration-200 hover:bg-zinc-800/80 hover:text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 sm:w-auto"
              >
                بررسی قابلیت‌های ربات
                <ArrowRightIcon size={16} className="rotate-180" />
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 pt-2 text-xs text-zinc-500 lg:justify-start">
              <AlertTriangleIcon size={14} className="shrink-0 text-amber-500/80" />
              <span>معامله‌گری ریسک بالایی دارد و هیچ سودی تضمین‌شده نیست.</span>
            </div>
          </div>

          <div className="w-full lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/90 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-zinc-800/80 bg-zinc-950/80 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-zinc-700" />
                  <span className="h-3 w-3 rounded-full bg-zinc-700" />
                  <span className="h-3 w-3 rounded-full bg-zinc-700" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <TerminalIcon size={14} className="text-emerald-400" />
                  <span>پیش‌نمایش محیط اجرای MT5</span>
                </div>
                <span className="rounded bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-400">نمونه رابط</span>
              </div>

              <div className="space-y-4 p-5 text-xs">
                <div className="space-y-2 rounded-lg border border-zinc-800/80 bg-zinc-950 p-3">
                  <div className="flex items-center justify-between text-zinc-400">
                    <span className="flex items-center gap-1.5 font-semibold text-emerald-400">
                      <ActivityIcon size={14} /> دریافت سیگنال
                    </span>
                    <span className="text-[10px] text-zinc-500">وضعیت: آماده</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] text-zinc-300">
                    <div><span className="text-zinc-500">نماد:</span> از سیگنال</div>
                    <div><span className="text-zinc-500">جهت:</span> BUY / SELL</div>
                    <div><span className="text-zinc-500">ورود:</span> مطابق سیگنال</div>
                    <div><span className="text-zinc-500">حد ضرر:</span> الزامی</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-zinc-400">
                    <span>ساختار چند هدف سود</span>
                    <span className="text-zinc-500">پشتیبانی تا ۶ هدف</span>
                  </div>
                  <div className="space-y-1.5">
                    {["TP 1 — هدف تعریف‌شده در سیگنال", "TP 2 — نقطه مدیریت چرخه معامله", "TP 3 تا TP 6 — در صورت وجود در سیگنال"].map((text, index) => (
                      <div key={text} className="flex items-center justify-between rounded border border-zinc-800/50 bg-zinc-950/60 p-2">
                        <span className={index === 0 ? "font-medium text-emerald-400" : index === 1 ? "font-medium text-teal-400" : "font-medium text-cyan-400"}>{text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 border-t border-zinc-800/60 pt-2 text-[10px]">
                  <div className="flex items-center gap-1.5 rounded border border-zinc-800/40 bg-zinc-950/40 p-2 text-zinc-400">
                    <CheckCircleIcon size={12} className="shrink-0 text-emerald-400" />
                    جلوگیری از اجرای تکراری
                  </div>
                  <div className="flex items-center gap-1.5 rounded border border-zinc-800/40 bg-zinc-950/40 p-2 text-zinc-400">
                    <ShieldIcon size={12} className="shrink-0 text-emerald-400" />
                    حجم‌گیری بر پایه ریسک
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-zinc-800/80 bg-zinc-950/90 px-4 py-2 text-[10px] text-zinc-500">
                <span>پیش‌نمایش بدون داده زنده</span>
                <span>اتصال MT5 نمایش داده نمی‌شود</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
