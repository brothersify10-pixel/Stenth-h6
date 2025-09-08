"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "@/components/loading-screen";
 // CASE SENSITIVE
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
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <FloatingElements />
      {/* DO NOT render <Header /> here; it's in layout.tsx */}
      <STENTHHero />
      <WhySTENTH />
      <section id="about"><STENTHAbout /></section>
      <section id="services"><STENTHServices /></section>
      <section id="portfolio"><CaseStudies /></section>
      <MonthlyGrowthSection />
      <Testimonials />
      <section id="contact"><STENTHContact /></section>
      <STENTHFooter />
    </main>
  );
}
