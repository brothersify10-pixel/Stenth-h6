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
  const [isMuted, setIsMuted] = useState(true);
  const [hasEnded, setHasEnded] = useState(false);
  const [showSoundHint, setShowSoundHint] = useState(true);

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
      const timer = setTimeout(() => setShowSoundHint(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const toggleMute = () => {
    if (!videoRef.current) return;
    const next = !isMuted;
    videoRef.current.muted = next;
    setIsMuted(next);
    setShowSoundHint(false);
  };

  const handleRewatch = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play().catch(() => {});
    setHasEnded(false);
  };

  return (
    <section ref={sectionRef} className="relative py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        {isVisible ? (
          <div className="relative group">
            <video
              ref={videoRef}
              className="w-full rounded-2xl shadow-2xl shadow-cyan-500/10 border border-slate-700/50"
              muted
              playsInline
              preload="metadata"
              onEnded={() => setHasEnded(true)}
            >
              <source src="/stenth_team_Final.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Sound toggle button */}
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 z-10 flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm border border-slate-600/50 text-white px-3 py-2 rounded-full hover:bg-slate-800/90 transition-all duration-300"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>

            {/* Sound hint notification */}
            {showSoundHint && isMuted && (
              <button
                onClick={toggleMute}
                className="absolute top-4 right-4 z-10 flex items-center gap-2 bg-cyan-500/90 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full animate-pulse hover:bg-cyan-400/90 transition-colors cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
                Tap to enable sound
              </button>
            )}

            {/* Rewatch overlay */}
            {hasEnded && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm rounded-2xl">
                <button
                  onClick={handleRewatch}
                  className="flex flex-col items-center gap-3 text-white hover:scale-105 transition-transform"
                >
                  <div className="w-16 h-16 rounded-full bg-cyan-500/90 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="1 4 1 10 7 10" />
                      <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                    </svg>
                  </div>
                  <span className="text-lg font-medium">Watch again</span>
                </button>
              </div>
            )}
          </div>
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
