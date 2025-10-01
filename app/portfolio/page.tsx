"use client";

import Portfolio from "@/components/portfolio";
import CaseStudies from "@/components/case-studies";
import FloatingElements from "@/components/floating-elements";
import RelatedPages from "@/components/related-pages";

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-x-hidden">
      <FloatingElements />

      {/* Old Portfolio with filters */}
      <Portfolio />

      {/* Real Case Studies */}
      <CaseStudies />

      <RelatedPages title="Explore Our Services" limit={6} className="bg-slate-900/30" />
    </main>
  );
}