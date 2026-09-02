import React from "react";
import {
  CpuIcon,
  ShieldIcon,
  SlidersIcon,
  CheckCircleIcon,
  ActivityIcon,
} from "@/components/shared/icons";

const TRUST_PULSES = [
  {
    title: "اجرای مستقیم در MT5",
    description: "فعال در محیط متاتریدر ۵",
    icon: CpuIcon,
  },
  {
    title: "قوانین مدیریت ریسک",
    description: "کنترل حد ضرر و حجم معامله",
    icon: ShieldIcon,
  },
  {
    title: "چند هدف سود",
    description: "پشتیبانی از چند TP در هر سیگنال",
    icon: SlidersIcon,
  },
  {
    title: "محافظت از اجرای تکراری",
    description: "جلوگیری از باز شدن معامله تکراری",
    icon: CheckCircleIcon,
  },
  {
    title: "ثبت رویدادهای اجرایی",
    description: "قابل پیگیری بودن اتفاقات سیستم",
    icon: ActivityIcon,
  },
];

export function TrustStrip() {
  return (
    <section className="border-y border-zinc-800/60 bg-zinc-900/40 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center justify-between gap-5 sm:grid-cols-2 md:grid-cols-5 sm:gap-8">
          {TRUST_PULSES.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div key={pillar.title} className="group flex items-center gap-3 text-right">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-emerald-400 transition-colors group-hover:border-emerald-500/40">
                  <IconComponent size={18} />
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-tight text-zinc-200">{pillar.title}</h3>
                  <p className="mt-1 text-[11px] leading-5 text-zinc-500">{pillar.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
