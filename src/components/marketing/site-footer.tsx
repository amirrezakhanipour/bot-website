import React from "react";
import { AlertTriangleIcon, TerminalIcon } from "@/components/shared/icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 pb-12 pt-16 text-zinc-400">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 rounded-2xl border border-amber-500/20 bg-zinc-900/80 p-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
            <AlertTriangleIcon size={16} />
            <span>هشدار مهم درباره ریسک معامله‌گری</span>
          </div>
          <p className="text-xs leading-7 text-zinc-400">
            معامله در بازارهای مالی و استفاده از اهرم می‌تواند باعث زیان قابل‌توجه شود و برای همه مناسب نیست. قبل از استفاده از ربات باید شرایط مالی، تجربه و میزان تحمل ریسک خود را در نظر بگیرید. عملکرد گذشته تضمینی برای آینده نیست و محتوای این وب‌سایت به معنی تضمین سود یا مشاوره مالی شخصی نیست.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 pt-4 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-emerald-400">
                <TerminalIcon size={16} />
              </div>
              <span className="text-sm font-bold text-zinc-100">ربات معامله‌گر</span>
            </div>
            <p className="text-xs leading-6 text-zinc-500">
              وب‌سایت معرفی، فروش و مدیریت سفارش ربات اجرای خودکار معاملات در MetaTrader 5.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-zinc-200">دسترسی سریع</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="transition-colors hover:text-zinc-100">معرفی</a></li>
              <li><a href="#live-bot" className="transition-colors hover:text-zinc-100">نمایش زنده</a></li>
              <li><a href="#performance" className="transition-colors hover:text-zinc-100">عملکرد</a></li>
              <li><a href="#features" className="transition-colors hover:text-zinc-100">ویژگی‌ها</a></li>
              <li><a href="#pricing" className="transition-colors hover:text-zinc-100">قیمت</a></li>
              <li><a href="#faq" className="transition-colors hover:text-zinc-100">سؤالات متداول</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-zinc-200">مستندات</h4>
            <ul className="space-y-2 text-xs text-zinc-500">
              <li>معرفی کامل ربات — در حال توسعه</li>
              <li>تحقیقات و مقالات — در حال توسعه</li>
              <li>راهنمای نصب — در حال توسعه</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-zinc-200">قوانین و حریم خصوصی</h4>
            <ul className="space-y-2 text-xs text-zinc-500">
              <li>شرایط استفاده — در حال توسعه</li>
              <li>افشای ریسک — در حال توسعه</li>
              <li>حریم خصوصی — در حال توسعه</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-zinc-900 pt-8 text-center text-xs text-zinc-500 sm:flex-row sm:text-right">
          <div>© {new Date().getFullYear()} تمامی حقوق محفوظ است.</div>
          <div className="max-w-md text-[11px] leading-6">
            MetaTrader 5 علامت تجاری MetaQuotes Ltd. است و این وب‌سایت وابستگی رسمی به MetaQuotes ندارد.
          </div>
        </div>
      </div>
    </footer>
  );
}
