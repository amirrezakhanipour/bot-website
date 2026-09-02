import React from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import { MetricCard } from "@/components/shared/metric-card";

const METRIC_CATALOG = [
  { label: "سود کل", description: "سود یا زیان خالص ثبت‌شده برای عملکرد ربات." },
  { label: "سود ماهانه", description: "نتیجه ثبت‌شده برای ماه جاری." },
  { label: "Profit Factor", description: "نسبت مجموع سود معاملات برنده به مجموع زیان معاملات بازنده." },
  { label: "Recovery Factor", description: "نسبت سود خالص به بیشترین افت سرمایه." },
  { label: "حداکثر افت سرمایه", description: "بیشترین افت ثبت‌شده سرمایه از سقف تا کف." },
  { label: "نرخ برد", description: "درصد معاملات بسته‌شده با نتیجه مثبت." },
  { label: "تعداد کل معاملات", description: "تعداد کل معاملات ثبت‌شده در آمار عملکرد." },
  { label: "معاملات برنده", description: "تعداد معاملات بسته‌شده با نتیجه مثبت." },
  { label: "معاملات بازنده", description: "تعداد معاملات بسته‌شده با نتیجه منفی." },
  { label: "میانگین سود", description: "میانگین سود معاملات برنده." },
  { label: "میانگین زیان", description: "میانگین زیان معاملات بازنده." },
  { label: "میانگین ریسک به بازده", description: "میانگین نسبت ریسک به بازده ثبت‌شده." },
];

export function PerformanceSection() {
  return (
    <section id="performance" className="border-y border-zinc-800/80 bg-zinc-950/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="گزارش عملکرد"
          title="آمار شفاف عملکرد ربات"
          subtitle="این اعداد توسط ادمین و بر اساس نتایج واقعی وارد می‌شوند. تا زمان انتشار داده معتبر، هیچ عدد نمونه یا ساختگی نمایش داده نمی‌شود."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {METRIC_CATALOG.map((metric) => (
            <MetricCard
              key={metric.label}
              label={metric.label}
              value={null}
              description={metric.description}
              statusText="هنوز منتشر نشده"
            />
          ))}
        </div>

        <div className="mx-auto max-w-2xl rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 text-center">
          <p className="text-xs leading-6 text-zinc-400">
            تاریخچه تغییرات شاخص‌های عملکرد حفظ می‌شود تا آمار قبلی بدون ردپا جایگزین نشوند.
          </p>
        </div>
      </div>
    </section>
  );
}
