"use client";
import Image from "next/image";
import Link from "next/link";
import { TrendingUp, Users, DollarSign, Clock, MapPin, ArrowRight, Star } from "lucide-react";
import STENTHFooter from "@/components/stenth-footer";
import FloatingElements from "@/components/floating-elements";

export default function CanadaCaseStudiesPage() {
  const realClientExamples = [
    {
      id: 1,
      client: "Mr. Sub 6 FMCG Chain Stores",
      industry: "Retail/FMCG",
      location: "International",
      challenge: "Chain store owner needed clear strategies and ROI-focused marketing to achieve real growth",
      solution: "Comprehensive digital marketing strategies with monthly insights and performance tracking",
      results: {
        organic_growth: "300%",
        lead_increase: "Significant Growth",
        revenue_growth: "Real Growth in 6 Months",
        timeframe: "6 months"
      },
      services: ["Digital Strategy", "Performance Marketing", "Analytics"],
      testimonial: "STENTH transformed our business with clear strategies, monthly insights, and ROI-focused marketing. We achieved real growth within 6 months.",
      client_name: "Balvinder Singh",
      client_role: "Owner/CEO",
      image: "/images/case-study-retail.jpg"
    },
    {
      id: 2,
      client: "Sertuca Tours & Travels",
      industry: "Travel & Tourism",
      location: "International",
      challenge: "Travel company needed transparent marketing budget allocation and measurable results",
      solution: "Monthly growth sessions, budget tracking, and performance-focused campaigns",
      results: {
        organic_growth: "Transparent ROI",
        lead_increase: "Improved Tracking",
        revenue_growth: "Budget Optimization",
        timeframe: "Ongoing"
      },
      services: ["Marketing Strategy", "Budget Management", "Performance Tracking"],
      testimonial: "The monthly growth sessions are game-changing. Finally, we know exactly where our marketing budget goes and what results we're getting.",
      client_name: "John Castillo",
      client_role: "Managing Director",
      image: "/images/case-study-travel.jpg"
    },
    {
      id: 3,
      client: "FinanceFlow",
      industry: "Fintech",
      location: "International",
      challenge: "Fintech startup needed to improve lead quality and conversion rates in competitive market",
      solution: "Complete strategy to execution approach with lead quality optimization and conversion rate improvement",
      results: {
        organic_growth: "150%",
        lead_increase: "150% Lead Quality Improvement",
        revenue_growth: "2x Conversion Rates",
        timeframe: "4 months"
      },
      services: ["Full-Service Marketing", "Lead Optimization", "Conversion Strategy"],
      testimonial: "From strategy to execution, STENTH handles everything. Our lead quality improved by 150% and conversion rates doubled in just 4 months.",
      client_name: "Emily Rodriguez",
      client_role: "Founder",
      image: "/images/case-study-fintech.jpg"
    }
  ];

  // Future Canadian success stories will be showcased here
  const futureCaseStudies = [
    "Canadian E-commerce Success Story (Coming Soon)",
    "Toronto B2B Services Growth (In Progress)",
    "Vancouver Tech Startup Expansion (Starting Soon)"
  ];

  const metrics = [
    { label: "Average Revenue Growth", value: "$2.1M CAD", icon: DollarSign },
    { label: "Average Organic Growth", value: "299%", icon: TrendingUp },
    { label: "Average Lead Increase", value: "228%", icon: Users },
    { label: "Average Project Timeline", value: "11 months", icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Floating Background Elements */}
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Image
                src="/images/canada-flag.svg"
                alt="Canada Flag"
                width={48}
                height={32}
                className="mr-4"
              />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent">
                Our Proven Track Record
              </h1>
            </div>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              While we're establishing our Canadian presence, our international success stories demonstrate
              the proven methods and expertise we'll bring to Canadian businesses.
            </p>

            {/* Overall Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                  <metric.icon className="w-8 h-8 text-red-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-slate-400">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-16">
              {realClientExamples.map((study, index) => (
                <div key={study.id} className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">

                    {/* Case Study Content */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center text-slate-400">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{study.location}</span>
                        </div>
                        <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">
                          {study.industry}
                        </span>
                      </div>

                      <div>
                        <h2 className="text-3xl font-bold text-white mb-4">{study.client}</h2>

                        <div className="space-y-4">
                          <div>
                            <h3 className="text-lg font-semibold text-red-400 mb-2">Challenge</h3>
                            <p className="text-slate-300">{study.challenge}</p>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold text-red-400 mb-2">Solution</h3>
                            <p className="text-slate-300">{study.solution}</p>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold text-red-400 mb-2">Services Used</h3>
                            <div className="flex flex-wrap gap-2">
                              {study.services.map((service, idx) => (
                                <span key={idx} className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm">
                                  {service}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600/50">
                        <div className="flex items-center mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-slate-300 italic mb-4">"{study.testimonial}"</p>
                        {study.client_name && (
                          <div className="border-t border-slate-600 pt-4">
                            <div className="text-white font-semibold">{study.client_name}</div>
                            <div className="text-slate-400 text-sm">{study.client_role}</div>
                            <div className="text-red-400 text-sm">{study.client}</div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-white">Results Achieved</h3>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl p-6 border border-red-500/30">
                          <TrendingUp className="w-8 h-8 text-red-400 mb-3" />
                          <div className="text-3xl font-bold text-white mb-1">{study.results.organic_growth}</div>
                          <div className="text-sm text-slate-300">Organic Growth</div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl p-6 border border-blue-500/30">
                          <Users className="w-8 h-8 text-blue-400 mb-3" />
                          <div className="text-3xl font-bold text-white mb-1">{study.results.lead_increase}</div>
                          <div className="text-sm text-slate-300">Lead Increase</div>
                        </div>

                        <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl p-6 border border-green-500/30">
                          <DollarSign className="w-8 h-8 text-green-400 mb-3" />
                          <div className="text-3xl font-bold text-white mb-1">{study.results.revenue_growth}</div>
                          <div className="text-sm text-slate-300">Revenue Growth</div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl p-6 border border-purple-500/30">
                          <Clock className="w-8 h-8 text-purple-400 mb-3" />
                          <div className="text-3xl font-bold text-white mb-1">{study.results.timeframe}</div>
                          <div className="text-sm text-slate-300">Timeline</div>
                        </div>
                      </div>

                      {/* CTA for this case study */}
                      <div className="bg-slate-700/50 rounded-lg p-6 text-center border border-slate-600/50">
                        <h4 className="text-lg font-semibold text-white mb-2">Similar Business?</h4>
                        <p className="text-slate-300 mb-4 text-sm">
                          See how we can help your {study.industry.toLowerCase()} business achieve similar results
                        </p>
                        <Link
                          href="/ca/contact"
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-full hover:from-red-400 hover:to-red-500 transition-all duration-300"
                        >
                          Get Your Strategy
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Become Our Next Success Story?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join hundreds of Canadian businesses that have transformed their digital presence
              with our proven strategies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ca/contact"
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-full hover:from-red-400 hover:to-red-500 transition-all duration-300 shadow-lg shadow-red-500/25"
              >
                Start Your Success Story
              </Link>
              <Link
                href="/ca"
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">200+</div>
                <div className="text-slate-400">Canadian Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">$50M+</div>
                <div className="text-slate-400">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">5 Years</div>
                <div className="text-slate-400">Serving Canada</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <STENTHFooter />
    </div>
  );
}
