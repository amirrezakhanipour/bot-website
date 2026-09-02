import React from "react";
import { SiteHeader } from "@/components/marketing/site-header";
import { HeroSection } from "@/components/marketing/hero-section";
import { TrustStrip } from "@/components/marketing/trust-strip";
import { LiveBotSection } from "@/components/marketing/live-bot-section";
import { PerformanceSection } from "@/components/marketing/performance-section";
import { MonthlyPerformanceSection } from "@/components/marketing/monthly-performance-section";
import { FeaturesSection } from "@/components/marketing/features-section";
import { HowItWorksSection } from "@/components/marketing/how-it-works-section";
import { TransparencySection } from "@/components/marketing/transparency-section";
import { PricingSection } from "@/components/marketing/pricing-section";
import { FaqSection } from "@/components/marketing/faq-section";
import { FinalCtaSection } from "@/components/marketing/final-cta-section";
import { SiteFooter } from "@/components/marketing/site-footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustStrip />
        <LiveBotSection />
        <PerformanceSection />
        <MonthlyPerformanceSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TransparencySection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
