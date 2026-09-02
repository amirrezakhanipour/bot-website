import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ربات معامله‌گر | اجرای خودکار معاملات در MT5",
  description:
    "وب‌سایت معرفی و فروش ربات معامله‌گر متاتریدر ۵ با مدیریت ریسک، چند هدف سود، مدیریت سر‌به‌سر، کنترل حجم و محافظت در برابر اجرای تکراری سیگنال‌ها.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 selection:bg-emerald-500/20 selection:text-emerald-300">
        {children}
      </body>
    </html>
  );
}
