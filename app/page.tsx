"use client";

import { useEffect, useState, useRef } from "react";
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

function TeamVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        {isVisible ? (
          <video
            ref={videoRef}
            className="w-full rounded-2xl shadow-2xl shadow-cyan-500/10 border border-slate-700/50"
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/stenth_team_Final.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="w-full aspect-video rounded-2xl bg-slate-800/50 border border-slate-700/50 animate-pulse" />
        )}
      </div>
    </section>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) {
    return <LoadingScreen />;
  }

  if (loading) return <LoadingScreen />;

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <FloatingElements />
      {/* DO NOT render <Header /> here; it's in layout.tsx */}
      <STENTHHero />
      <WhySTENTH />

      {/* Team Video Section */}
      <TeamVideo />

      <section id="about"><STENTHAbout /></section>
      <section id="services"><STENTHServices /></section>
      <section id="portfolio"><CaseStudies /></section>
      <MonthlyGrowthSection />
      <Testimonials />
      <section id="contact"><STENTHContact /></section>
    </main>
  );
}
