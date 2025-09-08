"use client";

import { useEffect } from "react";
import FloatingElements from "@/components/floating-elements";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TrendingUp, Users, DollarSign } from "lucide-react";
import Image from "next/image";

const caseStudyData = {
  "stenth-x": {
    title: "STENTH X Campaign",
    industry: "Multi-Channel Growth",
    metric: "300% ROI Growth",
    description: "A comprehensive digital transformation that revolutionized lead generation and customer acquisition.",
    challenge:
      "The client struggled with low-quality leads and poor conversion rates across multiple marketing channels.",
    solution:
      "We implemented a data-driven approach with advanced targeting, conversion optimization, and multi-touch attribution.",
    results: [
      "300% increase in ROI within 4 months",
      "5x improvement in qualified lead generation",
      "45% reduction in customer acquisition cost",
      "Established scalable growth systems",
    ],
    icon: TrendingUp,
    images: [
       "/portfolio/stenth-x/dashboard.png",
      "/portfolio/stenth-x/campaigns.png",
      "/portfolio/stenth-x/results.png",
    ],
  },
  "retail-boost": {
    title: "Retail Boost Project",
    industry: "E-commerce",
    metric: "Leads Doubled",
    description:
      "Complete brand overhaul and strategic campaign that transformed an underperforming e-commerce business.",
    challenge: "Declining sales, poor brand recognition, and ineffective marketing campaigns across all channels.",
    solution:
      "Full brand redesign, optimized product positioning, and integrated marketing campaigns across social and search.",
    results: [
      "100% increase in monthly qualified leads",
      "45% boost in conversion rates",
      "60% improvement in brand recognition",
      "Sustainable 6-month growth trajectory",
    ],
    icon: Users,
    images: [
      "/portfolio/retail-boost/store.png",
      "/portfolio/retail-boost/qr-campaign.png",
      "/portfolio/retail-boost/analytics.png",
    ],
  },
  "leadgen-saas": {
    title: "LeadGen SaaS Success",
    industry: "Fintech SaaS",
    metric: "$2M Revenue Growth",
    description:
      "Strategic marketing automation and targeted campaigns that generated massive revenue growth for a fintech startup.",
    challenge: "Limited market penetration, complex product positioning, and inefficient sales funnel conversion.",
    solution:
      "Implemented advanced marketing automation, refined messaging strategy, and optimized the entire customer journey.",
    results: [
      "$2M in additional annual revenue",
      "150% improvement in lead quality scores",
      "8-month ROI achievement timeline",
      "Scalable automation systems deployed",
    ],
    icon: DollarSign,
    images: [
      "/portfolio/leadgen-saas/creative-tests.png",
      "/portfolio/leadgen-saas/pipeline.png",
      "/portfolio/leadgen-saas/dashboard.png",
    ],
  },
};

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudyData[params.slug as keyof typeof caseStudyData];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Debug: Log the slug to console to check if it's correct
  useEffect(() => {
    console.log('Portfolio slug:', params.slug);
    console.log('Available studies:', Object.keys(caseStudyData));
    console.log('Study found:', !!study);
  }, [params.slug, study]);

  if (!study) {
    return (
      <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <FloatingElements />
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Case Study Not Found</h1>
            <p className="text-slate-300 mb-8">
              Looking for: "{params.slug}"
            </p>
            <p className="text-slate-400 mb-8">
              Available case studies: {Object.keys(caseStudyData).join(', ')}
            </p>
            <Button
              asChild
              className="focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <Link href="/portfolio">Back to Portfolio</Link>
            </Button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <FloatingElements />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-8">
              <study.icon className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">{study.title}</h1>

            <p className="text-xl text-slate-300 mb-8">{study.industry}</p>

            <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-8">
              {study.metric}
            </div>

            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">{study.description}</p>
          </div>

         
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {study.images.map((image, index) => (
              <div key={index} className="relative group">
                <div className="aspect-[16/9] overflow-hidden rounded-xl bg-slate-800/30 border border-slate-700/50">
                  <Image
                    src={image}
                    alt={`${study.title} - Image ${index + 1}`}
                    width={1280}
                    height={720}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index === 0}
                    quality={85}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-emerald-400/10 to-purple-600/20 mix-blend-overlay opacity-100 group-hover:opacity-75 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-6">The Challenge</h2>
              <p className="text-slate-300 leading-relaxed">{study.challenge}</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-6">Our Solution</h2>
              <p className="text-slate-300 leading-relaxed">{study.solution}</p>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Results Achieved</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {study.results.map((result, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex-shrink-0"></div>
                  <span className="text-slate-300 text-lg">{result}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6">Ready for Similar Results?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <Link href="/book">Book Your Strategy Session</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <Link href="/portfolio">View More Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
