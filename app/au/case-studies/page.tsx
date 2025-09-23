"use client";
import Image from "next/image";
import Link from "next/link";
import { TrendingUp, Users, DollarSign, Clock, MapPin, ArrowRight, Star } from "lucide-react";
import STENTHFooter from "@/components/stenth-footer";
import FloatingElements from "@/components/floating-elements";

export default function AustraliaCaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      client: "Sydney E-commerce Store",
      industry: "Retail",
      location: "Sydney, NSW",
      challenge: "Fashion retailer needed to compete with international brands and increase online sales across Australia",
      solution: "Comprehensive SEO strategy, Google Shopping campaigns, and social media marketing targeting Australian fashion trends",
      results: {
        organic_growth: "420%",
        lead_increase: "280%",
        revenue_growth: "$3.2M AUD",
        timeframe: "10 months"
      },
      services: ["E-commerce SEO", "Google Shopping", "Social Media"],
      testimonial: "Stenth's understanding of Australian shopping behaviour and seasonal trends helped us dominate our market segment.",
      image: "/images/case-study-sydney-ecommerce.jpg"
    },
    {
      id: 2,
      client: "Melbourne Tech Startup",
      industry: "Technology",
      location: "Melbourne, VIC",
      challenge: "SaaS company needed to establish brand presence and generate B2B leads in the competitive Australian tech market",
      solution: "Technical SEO optimization, LinkedIn B2B campaigns, and content marketing targeting Australian business decision-makers",
      results: {
        organic_growth: "350%",
        lead_increase: "190%",
        revenue_growth: "$2.8M AUD",
        timeframe: "12 months"
      },
      services: ["B2B SEO", "LinkedIn Ads", "Content Marketing"],
      testimonial: "The team's knowledge of the Australian B2B landscape and compliance requirements was exactly what we needed.",
      image: "/images/case-study-melbourne-tech.jpg"
    },
    {
      id: 3,
      client: "Brisbane Tradie Business",
      industry: "Construction",
      location: "Brisbane, QLD",
      challenge: "Electrical contractor wanted to expand service area across Queensland and increase local bookings",
      solution: "Local SEO optimization, Google My Business management, and targeted Google Ads for tradie services",
      results: {
        organic_growth: "300%",
        lead_increase: "240%",
        revenue_growth: "$1.5M AUD",
        timeframe: "8 months"
      },
      services: ["Local SEO", "Google My Business", "Google Ads"],
      testimonial: "Finally found a marketing team that understands the tradie industry. Our phone hasn't stopped ringing!",
      image: "/images/case-study-brisbane-tradie.jpg"
    },
    {
      id: 4,
      client: "Perth Mining Services",
      industry: "Mining",
      location: "Perth, WA",
      challenge: "Mining equipment supplier needed to reach mining companies across Western Australia and interstate",
      solution: "Industry-specific content marketing, LinkedIn advertising, and technical SEO targeting mining industry keywords",
      results: {
        organic_growth: "280%",
        lead_increase: "310%",
        revenue_growth: "$4.1M AUD",
        timeframe: "14 months"
      },
      services: ["Industry SEO", "LinkedIn Ads", "Content Strategy"],
      testimonial: "Stenth helped us become the go-to supplier for mining equipment across Australia. Their industry knowledge is unmatched.",
      image: "/images/case-study-perth-mining.jpg"
    }
  ];

  const metrics = [
    { label: "Average Revenue Growth", value: "$2.9M AUD", icon: DollarSign },
    { label: "Average Organic Growth", value: "338%", icon: TrendingUp },
    { label: "Average Lead Increase", value: "255%", icon: Users },
    { label: "Average Project Timeline", value: "11 months", icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Floating Background Elements */}
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-green-500/10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Image
                src="/images/australia-flag.svg"
                alt="Australia Flag"
                width={48}
                height={32}
                className="mr-4"
              />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
                Australian Success Stories
              </h1>
            </div>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Real results from Australian businesses across all states. See how our digital marketing
              strategies have helped companies grow from Sydney to Perth.
            </p>

            {/* Overall Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                  <metric.icon className="w-8 h-8 text-green-400 mx-auto mb-2" />
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
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                          {study.industry}
                        </span>
                      </div>

                      <div>
                        <h2 className="text-3xl font-bold text-white mb-4">{study.client}</h2>

                        <div className="space-y-4">
                          <div>
                            <h3 className="text-lg font-semibold text-green-400 mb-2">Challenge</h3>
                            <p className="text-slate-300">{study.challenge}</p>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold text-green-400 mb-2">Solution</h3>
                            <p className="text-slate-300">{study.solution}</p>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold text-green-400 mb-2">Services Used</h3>
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
                        <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl p-6 border border-green-500/30">
                          <TrendingUp className="w-8 h-8 text-green-400 mb-3" />
                          <div className="text-3xl font-bold text-white mb-1">{study.results.organic_growth}</div>
                          <div className="text-sm text-slate-300">Organic Growth</div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl p-6 border border-blue-500/30">
                          <Users className="w-8 h-8 text-blue-400 mb-3" />
                          <div className="text-3xl font-bold text-white mb-1">{study.results.lead_increase}</div>
                          <div className="text-sm text-slate-300">Lead Increase</div>
                        </div>

                        <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-xl p-6 border border-yellow-500/30">
                          <DollarSign className="w-8 h-8 text-yellow-400 mb-3" />
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
                          href="/au/contact"
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:from-green-400 hover:to-green-500 transition-all duration-300"
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
              Join hundreds of Australian businesses that have transformed their digital presence
              with our proven strategies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/au/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:from-green-400 hover:to-green-500 transition-all duration-300 shadow-lg shadow-green-500/25"
              >
                Start Your Success Story
              </Link>
              <Link
                href="/au"
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">150+</div>
                <div className="text-slate-400">Australian Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">$35M+</div>
                <div className="text-slate-400">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">4 Years</div>
                <div className="text-slate-400">Serving Australia</div>
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