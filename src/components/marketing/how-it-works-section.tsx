import React from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  ActivityIcon,
  CheckCircleIcon,
  SlidersIcon,
  TerminalIcon,
  RefreshCwIcon,
} from "@/components/shared/icons";

const EXECUTION_STEPS = [
  {
    step: "۱",
    title: "دریافت سیگنال",
    description: "اطلاعات سیگنال شامل نماد، جهت، محدوده ورود، حد ضرر و اهداف سود خوانده می‌شود.",
    icon: ActivityIcon,
  },
  {
    step: "۲",
    title: "اعتبارسنجی و فیلترها",
    description: "سیستم تکراری نبودن سیگنال، زمان انقضا و محدودیت‌های ریسک را بررسی می‌کند.",
    icon: CheckCircleIcon,
  },
  {
    step: "۳",
    title: "ساختاردهی سفارش",
    description: "حجم معامله از روی ریسک محاسبه و سفارش‌ها بر اساس تعداد اهداف سود تقسیم می‌شوند.",
    icon: SlidersIcon,
  },
  {
    step: "۴",
    title: "اجرای معامله در MT5",
    description: "سفارش‌های آماده‌شده در محیط MetaTrader 5 اجرا می‌شوند.",
    icon: TerminalIcon,
  },
  {
    step: "۵",
    title: "مدیریت چرخه معامله",
    description: "بعد از اجرا، حد ضرر، اهداف سود و منطق سر‌به‌سر طبق قوانین ربات مدیریت می‌شوند.",
    icon: RefreshCwIcon,
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="نحوه کار"
          title="از دریافت سیگنال تا مدیریت معامله"
          subtitle="فرآیند ربات به‌صورت مرحله‌ای طراحی شده تا اجرای هر سیگنال قابل کنترل و قابل پیگیری باشد."
        />

        <div className="relative grid grid-cols-1 gap-4 md:grid-cols-5">
          {EXECUTION_STEPS.map((stepItem) => {
            const IconComponent = stepItem.icon;
            return (
              <div
                key={stepItem.step}
                className="relative flex flex-col justify-between space-y-4 rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-400">مرحله {stepItem.step}</span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-400">
                      <IconComponent size={16} />
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-100">{stepItem.title}</h3>
                  <p className="text-xs leading-6 text-zinc-400">{stepItem.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
