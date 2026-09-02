"use client";

import React, { useState } from "react";
import { TerminalIcon, MenuIcon, XIcon, ShieldIcon } from "@/components/shared/icons";

const NAV_LINKS = [
  { label: "معرفی", href: "#hero" },
  { label: "نمایش زنده", href: "#live-bot" },
  { label: "عملکرد", href: "#performance" },
  { label: "ویژگی‌ها", href: "#features" },
  { label: "نحوه کار", href: "#how-it-works" },
  { label: "قیمت", href: "#pricing" },
  { label: "سؤالات متداول", href: "#faq" },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="group flex items-center gap-2.5 rounded-md px-1 py-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-emerald-400 transition-colors group-hover:border-emerald-500/50">
            <TerminalIcon size={18} />
          </div>
          <div className="flex flex-col text-right">
            <span className="text-sm font-bold tracking-tight text-zinc-100">ربات معامله‌گر</span>
            <span className="text-[10px] leading-none text-zinc-500">اجرای خودکار معاملات در MT5</span>
          </div>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="ناوبری اصلی">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-xs font-medium text-zinc-400 transition-colors hover:bg-zinc-900/60 hover:text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="hidden items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-zinc-950 transition-colors hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:inline-flex"
          >
            <ShieldIcon size={14} />
            مشاهده قیمت
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg border border-zinc-800 bg-zinc-900 p-2 text-zinc-400 hover:text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "بستن منو" : "باز کردن منو"}
          >
            {mobileMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="space-y-3 border-b border-zinc-800 bg-zinc-950/95 px-4 pb-6 pt-2 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col space-y-1" aria-label="ناوبری موبایل">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-zinc-100"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="border-t border-zinc-900 pt-2">
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
            >
              <ShieldIcon size={16} />
              مشاهده قیمت
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
