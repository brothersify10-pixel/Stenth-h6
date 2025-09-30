"use client";

import FloatingElements from "@/components/floating-elements";
import RelatedPages from "@/components/related-pages";
import { TrendingUp, Users, DollarSign } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const portfolioItems = [
  {
    slug: "stenth-x", // MUST match exactly (not "stenth-s" or "stenth x")
    title: "STENTH X Campaign",
    metric: "300% ROI Growth",
    description: "Multi-channel growth transformation",
    icon: TrendingUp,
  },
  {
    slug: "retail-boost", // MUST match exactly
    title: "Retail Boost Project", 
    metric: "Leads Doubled",
    description: "E-commerce brand overhaul",
    icon: Users,
  },
  {
    slug: "leadgen-saas", // MUST match exactly
    title: "LeadGen SaaS Success",
    metric: "$2M Revenue Growth",
    description: "Fintech marketing automation",
    icon: DollarSign,
  },
];

export default function PortfolioPage() {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  // Scroll to top when component mounts - use instant scroll for better performance
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleNavigation = (slug: string) => {
    setIsNavigating(true);
    // Navigate immediately without artificial delay
    router.push(`/portfolio/${slug}`);
  };

  return (
    <>
      {/* Simplified loading overlay for faster rendering */}
      {isNavigating && (
        <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="animate-spin w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full"></div>
        </div>
      )}

      <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-x-hidden">
        <FloatingElements />

        <section className="py-20 px-4 sm:px-6 lg:px-8 pt-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Success Stories.{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Real Results.
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Discover how we've transformed businesses and delivered exceptional results across industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item) => (
                <div
                  key={item.slug}
                  className="block group cursor-pointer"
                  onClick={() => handleNavigation(item.slug)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleNavigation(item.slug);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${item.title} case study`}
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:border-cyan-500/50 relative overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      {/* Icon with gradient background */}
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
                        {item.metric}
                      </p>
                      
                      <p className="text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* View case study indicator */}
                      <div className="flex items-center mt-4 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                        <span className="text-sm font-medium">View Case Study</span>
                        <svg 
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RelatedPages title="Explore Our Services" limit={6} className="bg-slate-900/30" />
      </main>
    </>
  );
}
