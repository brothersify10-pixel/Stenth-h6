"use client";
import Image from "next/image";
import Link from "next/link";
import { TrendingUp, Users, DollarSign, Clock, MapPin, ArrowRight, Star } from "lucide-react";
import STENTHFooter from "@/components/stenth-footer";
import FloatingElements from "@/components/floating-elements";

export default function CanadaCaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      client: "Toronto Tech Startup",
      industry: "Technology",
      location: "Toronto, ON",
      challenge: "New SaaS company needed to establish online presence and generate qualified leads in competitive Canadian market",
      solution: "Comprehensive SEO strategy targeting Canadian B2B keywords, Google Ads campaigns, and LinkedIn marketing",
      results: {
        organic_growth: "300%",
        lead_increase: "250%",
        revenue_growth: "$2.5M CAD",
        timeframe: "12 months"
      },
      services: ["SEO", "Google Ads", "Social Media"],
      testimonial: "Stenth understood the Canadian market immediately. Their bilingual approach helped us reach Quebec customers we never could before.",
      image: "/images/case-study-toronto-tech.jpg"
    },
    {
      id: 2,
      client: "Vancouver E-commerce Store",
      industry: "Retail",
      location: "Vancouver, BC",
      challenge: "Local outdoor gear retailer wanted to expand online sales across Western Canada while competing with international brands",
      solution: "E-commerce SEO optimization, local SEO for multiple BC locations, and targeted Google Shopping campaigns",
      results: {
        organic_growth: "400%",
        lead_increase: "180%",
        revenue_growth: "$1.8M CAD",
        timeframe: "8 months"
      },
      services: ["E-commerce SEO", "Local SEO", "Google Shopping"],
      testimonial: "The team's knowledge of Canadian outdoor culture and seasonal trends was exactly what we needed to grow our online presence.",
      image: "/images/case-study-vancouver-ecommerce.jpg"
    },
    {
      id: 3,
      client: "Montreal Law Firm",
      industry: "Legal",
      location: "Montreal, QC",
      challenge: "Bilingual law firm needed to rank for both English and French legal terms while maintaining professional credibility",
      solution: "Bilingual SEO strategy, legal content marketing, and reputation management across English and French markets",
      results: {
        organic_growth: "220%",
        lead_increase: "160%",
        revenue_growth: "$950K CAD",
        timeframe: "10 months"
      },
      services: ["Legal SEO", "Content Marketing", "Reputation Management"],
      testimonial: "Their bilingual expertise and understanding of Quebec's legal market helped us become the go-to firm in our practice area.",
      image: "/images/case-study-montreal-law.jpg"
    },
    {
      id: 4,
      client: "Calgary Energy Consulting",
      industry: "Energy",
      location: "Calgary, AB",
      challenge: "Energy consulting firm needed to establish thought leadership and generate B2B leads during industry downturn",
      solution: "Technical content marketing, LinkedIn B2B campaigns, and industry-specific SEO targeting oil & gas professionals",
      results: {
        organic_growth: "275%",
        lead_increase: "320%",
        revenue_growth: "$3.2M CAD",
        timeframe: "14 months"
      },
      services: ["B2B Marketing", "Content Strategy", "LinkedIn Ads"],
      testimonial: "Stenth helped us maintain growth even during challenging times in the energy sector. Their industry knowledge is unmatched.",
      image: "/images/case-study-calgary-energy.jpg"
    }
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
                Canadian Success Stories
              </h1>
            </div>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Real results from Canadian businesses across all provinces. See how our digital marketing
              strategies have helped companies grow from coast to coast.
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
              {caseStudies.map((study, index) => (
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
                        <p className="text-slate-300 italic">"{study.testimonial}"</p>
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
