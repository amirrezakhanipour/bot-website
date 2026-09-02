import React from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  TerminalIcon,
  ShieldIcon,
  SlidersIcon,
  RefreshCwIcon,
  CpuIcon,
  CheckCircleIcon,
  LockIcon,
  AlertTriangleIcon,
} from "@/components/shared/icons";

const CORE_FEATURES = [
  {
    title: "اجرای خودکار سیگنال",
    description: "دریافت سیگنال و اجرای سفارش‌های Market در MetaTrader 5 بدون نیاز به ورود دستی معامله.",
    icon: TerminalIcon,
  },
  {
    title: "مدیریت ریسک",
    description: "محاسبه حجم معامله بر اساس فاصله ورود تا حد ضرر و درصد ریسک تعیین‌شده.",
    icon: ShieldIcon,
  },
  {
    title: "چند هدف سود",
    description: "تقسیم معامله بین چند Take Profit و پشتیبانی از حداکثر ۶ هدف در سیگنال.",
    icon: SlidersIcon,
  },
  {
    title: "مدیریت سر‌به‌سر",
    description: "مدیریت حد ضرر و انتقال آن به نقطه بدون ریسک طبق منطق چرخه معامله.",
    icon: RefreshCwIcon,
  },
  {
    title: "محاسبه خودکار حجم",
    description: "تعیین Lot Size به‌صورت خودکار و متناسب با Equity و ریسک معامله.",
    icon: CpuIcon,
  },
  {
    title: "جلوگیری از معامله تکراری",
    description: "شناسایی سیگنال‌های تکراری برای جلوگیری از باز شدن سفارش‌های اضافه و ناخواسته.",
    icon: CheckCircleIcon,
  },
  {
    title: "انقضای سیگنال",
    description: "سیگنال قدیمی بعد از بازه زمانی تعیین‌شده دیگر اجازه اجرا نخواهد داشت.",
    icon: LockIcon,
  },
  {
    title: "محدودیت‌های ریسک",
    description: "قواعد توقف برای جلوگیری از ادامه اجرای معاملات بعد از عبور از محدودیت‌های تعریف‌شده.",
    icon: AlertTriangleIcon,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="border-y border-zinc-800/80 bg-zinc-950/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="قابلیت‌های اصلی"
          title="کنترل کامل چرخه اجرای معامله"
          subtitle="تمرکز ربات روی اجرای منظم سیگنال، کاهش خطای انسانی و اعمال قوانین مشخص مدیریت ریسک است."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CORE_FEATURES.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative flex flex-col justify-between space-y-4 rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-6 transition-all duration-200 hover:border-emerald-500/40"
              >
                <div className="space-y-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-emerald-400 transition-colors group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="text-base font-semibold text-zinc-100 transition-colors group-hover:text-emerald-400">{feature.title}</h3>
                  <p className="text-xs leading-6 text-zinc-400">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
