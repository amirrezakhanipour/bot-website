import React from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import { LockIcon, ShieldIcon, ActivityIcon, CheckCircleIcon } from "@/components/shared/icons";

const TRANSPARENCY_PILLARS = [
  {
    title: "تاریخچه تغییرات عملکرد",
    description: "هر بار که ادمین یکی از شاخص‌های عملکرد را تغییر می‌دهد، مقدار جدید همراه با زمان ثبت می‌شود تا نسخه‌های قبلی قابل پیگیری باشند. ماه‌های منفی نیز در تاریخچه ماهانه باقی می‌مانند.",
    icon: ActivityIcon,
  },
  {
    title: "عدم دریافت رمز اصلی MT5",
    description: "وب‌سایت هیچ‌وقت رمز اصلی حساب MetaTrader 5 را درخواست، ثبت یا ذخیره نمی‌کند. اطلاعات موردنیاز فقط شماره حساب، بروکر و سرور است.",
    icon: LockIcon,
  },
  {
    title: "مدیریت معامله بر پایه قوانین مشخص",
    description: "اجرای سفارش، حجم‌گیری، حد ضرر، اهداف سود، سر‌به‌سر، جلوگیری از تکرار و محدودیت‌های ریسک طبق منطق تعریف‌شده ربات اعمال می‌شوند.",
    icon: ShieldIcon,
  },
  {
    title: "مستندات و منابع قابل بررسی",
    description: "صفحات معرفی کامل ربات، تحقیقات استفاده‌شده، راهنمای نصب و قوانین در فازهای بعدی به‌صورت مستقل و شفاف در سایت قرار می‌گیرند.",
    icon: CheckCircleIcon,
  },
];

export function TransparencySection() {
  return (
    <section className="border-y border-zinc-800/80 bg-zinc-950/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="شفافیت و امنیت"
          title="اعتماد باید با اطلاعات قابل بررسی ساخته شود"
          subtitle="مرزهای محصول، ریسک معامله‌گری، نحوه ثبت عملکرد و اطلاعاتی که از کاربر دریافت می‌شود باید روشن و بدون ابهام باشد."
        />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {TRANSPARENCY_PILLARS.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div key={pillar.title} className="space-y-4 rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-emerald-400">
                  <IconComponent size={20} />
                </div>
                <h3 className="text-base font-semibold text-zinc-100">{pillar.title}</h3>
                <p className="text-xs leading-6 text-zinc-400">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
