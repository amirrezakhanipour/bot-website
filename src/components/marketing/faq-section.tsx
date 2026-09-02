"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ChevronDownIcon, ShieldIcon } from "@/components/shared/icons";

const FAQ_ITEMS = [
  {
    question: "ربات معامله‌گر چه کاری انجام می‌دهد؟",
    answer: "سیگنال‌های ورودی را دریافت می‌کند و در MetaTrader 5 با قوانین مشخص برای حجم، حد ضرر، چند هدف سود، مدیریت سر‌به‌سر و کنترل‌های اجرایی مدیریت می‌کند.",
  },
  {
    question: "آیا ربات سود را تضمین می‌کند؟",
    answer: "خیر. معامله‌گری ریسک دارد و زیان ممکن است. عملکرد گذشته نیز تضمینی برای نتایج آینده نیست.",
  },
  {
    question: "آیا می‌توانم اجرای ربات را زنده ببینم؟",
    answer: "بله. در فاز ۳ یک نمایش عمومی ۲۴ ساعته از پنجره اختصاصی MT5 به سایت اضافه می‌شود، بدون نمایش کل محیط VPS.",
  },
  {
    question: "ربات روی چه پلتفرمی کار می‌کند؟",
    answer: "ربات برای اجرای معاملات در محیط MetaTrader 5 طراحی شده است.",
  },
  {
    question: "ریسک چگونه مدیریت می‌شود؟",
    answer: "سیستم از حد ضرر، محاسبه حجم بر اساس ریسک، جلوگیری از اجرای تکراری، انقضای سیگنال و محدودیت‌های توقف استفاده می‌کند.",
  },
  {
    question: "برای فعال‌سازی چه اطلاعاتی لازم است؟",
    answer: "شماره حساب MT5، نام بروکر و نام سرور به همراه اطلاعات حساب کاربری سایت و سفارش کافی است.",
  },
  {
    question: "آیا اطلاعات محرمانه ورود به حساب لازم است؟",
    answer: "خیر. وب‌سایت اطلاعات محرمانه ورود به حساب معاملاتی را درخواست یا ذخیره نمی‌کند.",
  },
  {
    question: "فعال‌سازی بعد از خرید چگونه انجام می‌شود؟",
    answer: "در نسخه اولیه، پس از تأیید پرداخت، ادمین فعال‌سازی را در سیستم لایسنس و پنل مشتری انجام می‌دهد و وضعیت سفارش در سایت به‌روزرسانی می‌شود.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="border-y border-zinc-800/80 bg-zinc-950/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="سؤالات متداول"
          title="سؤال‌های مهم قبل از خرید"
          subtitle="توضیح کوتاه و شفاف درباره نحوه کار ربات، ریسک، امنیت حساب و فرایند فعال‌سازی."
        />

        <div className="mx-auto max-w-3xl space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `faq-content-${idx}`;
            const buttonId = `faq-button-${idx}`;

            return (
              <div key={item.question} className="overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900/60 transition-colors">
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="flex w-full items-center justify-between px-6 py-4 text-right transition-colors hover:bg-zinc-900/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <span className="pl-4 text-sm font-semibold text-zinc-100">{item.question}</span>
                  <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-zinc-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-emerald-400" : ""}`}>
                    <ChevronDownIcon size={14} />
                  </div>
                </button>

                {isOpen && (
                  <div id={contentId} role="region" aria-labelledby={buttonId} className="border-t border-zinc-800/50 px-6 pb-5 pt-3 text-xs leading-7 text-zinc-300">
                    {idx === 6 ? (
                      <div className="flex items-start gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 font-medium text-emerald-300">
                        <ShieldIcon size={16} className="mt-0.5 shrink-0" />
                        <span>{item.answer}</span>
                      </div>
                    ) : (
                      <p>{item.answer}</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
