"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen"; // <-- match filename case
import FloatingElements from "@/components/floating-elements";
import STENTHHero from "@/components/stenth-hero";
import WhySTENTH from "@/components/why-stenth";
import STENTHAbout from "@/components/stenth-about";
import STENTHServices from "@/components/stenth-services";
import CaseStudies from "@/components/case-studies";
import MonthlyGrowthSection from "@/components/monthly-growth-section";
import Testimonials from "@/components/testimonials";
import STENTHContact from "@/components/stenth-contact";
import STENTHFooter from "@/components/stenth-footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200); // shorter splash feels snappier
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <FloatingElements />
      {/* Header is already in layout.tsx — do NOT render it here */}
      <STENTHHero />
      <WhySTENTH />
      <section id="about">
        <STENTHAbout />
      </section>
      <section id="services">
        <STENTHServices />
      </section>
      <section id="portfolio">
        <CaseStudies />
      </section>
      <MonthlyGrowthSection />
      <Testimonials />
      <section id="contact">
        <STENTHContact />
      </section>
      <STENTHFooter />
    </main>
  );
}
