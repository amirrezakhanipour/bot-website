import React from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import { StatusBadge } from "@/components/shared/status-badge";
import { BarChartIcon } from "@/components/shared/icons";

export function MonthlyPerformanceSection() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="گزارش ماهانه"
          title="تاریخچه عملکرد ماه‌به‌ماه"
          subtitle="تمام ماه‌های ثبت‌شده، چه مثبت و چه منفی، برای شفافیت در این بخش نمایش داده می‌شوند."
        />

        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/90 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 bg-zinc-950 px-6 py-4">
            <div className="flex items-center gap-2">
              <BarChartIcon size={18} className="text-emerald-400" />
              <h3 className="text-sm font-semibold text-zinc-200">نتایج ماهانه</h3>
            </div>
            <StatusBadge status="آماده برای ثبت داده" variant="neutral" />
          </div>

          <div className="hidden grid-cols-5 border-b border-zinc-800/60 bg-zinc-950/60 px-6 py-3 text-xs text-zinc-400 sm:grid">
            <div>ماه</div>
            <div className="text-center">بازده ٪</div>
            <div className="text-center">سود / زیان</div>
            <div className="text-center">تعداد معاملات</div>
            <div className="text-center">حداکثر افت</div>
          </div>

          <div className="space-y-3 bg-zinc-950/40 p-12 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-500">
              <BarChartIcon size={22} />
            </div>
            <div className="mx-auto max-w-sm space-y-1">
              <h4 className="text-sm font-semibold text-zinc-200">هنوز نتیجه ماهانه‌ای منتشر نشده</h4>
              <p className="text-xs leading-6 text-zinc-500">
                بعد از ثبت نتایج واقعی توسط ادمین، گزارش هر ماه در این قسمت نمایش داده می‌شود و ماه‌های منفی هم پنهان نخواهند شد.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-between gap-2 border-t border-zinc-800 bg-zinc-950/80 px-6 py-3 text-[11px] text-zinc-500">
            <span>منبع داده: ورود دستی ادمین</span>
            <span>ماه‌های منفی: قابل مشاهده</span>
          </div>
        </div>
      </div>
    </section>
  );
}
