import React from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import { CheckIcon, ShieldIcon, ArrowRightIcon } from "@/components/shared/icons";

const PLAN_INCLUSIONS = [
  "اجرای خودکار سیگنال در MetaTrader 5",
  "مدیریت چند هدف سود تا ۶ TP",
  "مدیریت حد ضرر و سر‌به‌سر",
  "محاسبه خودکار حجم بر اساس ریسک",
  "جلوگیری از اجرای تکراری و انقضای سیگنال",
  "اعمال محدودیت‌های ریسک تعریف‌شده",
  "دسترسی به پنل مشتری پس از فعال‌سازی",
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="اشتراک ربات"
          title="قیمت‌گذاری ساده و شفاف"
          subtitle="در نسخه اولیه یک پلن ماهانه ارائه می‌شود. قیمت نهایی از دیتابیس سایت خوانده خواهد شد و قبل از پرداخت به‌وضوح نمایش داده می‌شود."
        />

        <div className="relative mx-auto max-w-xl space-y-8 overflow-hidden rounded-2xl border border-emerald-500/30 bg-zinc-900/90 p-8 shadow-2xl backdrop-blur-xl">
          <div className="absolute left-0 top-0 rounded-br-xl border-b border-r border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-[10px] font-semibold text-emerald-400">
            پلن اولیه
          </div>

          <div className="space-y-3 pt-2">
            <h3 className="text-xl font-bold text-zinc-100">اشتراک ماهانه ربات</h3>
            <p className="text-xs leading-6 text-zinc-400">
              دسترسی کامل به سیستم اجرای خودکار سیگنال و قابلیت‌های مدیریت معامله. فعال‌سازی در MVP پس از تأیید پرداخت توسط ادمین انجام می‌شود.
            </p>
            <div className="pt-4">
              <span className="text-2xl font-extrabold text-zinc-100 sm:text-3xl">قیمت هنوز منتشر نشده</span>
            </div>
            <p className="text-[11px] text-zinc-500">مبلغ واقعی قبل از پرداخت نمایش داده خواهد شد.</p>
          </div>

          <div className="space-y-3 border-t border-zinc-800 pt-6">
            <span className="text-xs font-semibold text-zinc-300">امکانات پلن:</span>
            <ul className="space-y-2.5 text-xs text-zinc-300">
              {PLAN_INCLUSIONS.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                    <CheckIcon size={10} />
                  </div>
                  <span className="leading-6">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 pt-2">
            <a
              href="#pricing"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/10 transition-all duration-200 hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <ShieldIcon size={16} />
              خرید ربات
              <ArrowRightIcon size={16} className="rotate-180" />
            </a>
            <p className="text-center text-[11px] leading-5 text-zinc-500">
              فرایند ثبت‌نام و پرداخت در فازهای بعدی فعال می‌شود؛ این دکمه فعلاً نمایشی است.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
