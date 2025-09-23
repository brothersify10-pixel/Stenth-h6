"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Star, TrendingUp, Users, Award, Building2, Globe, Search, Target, BarChart3, Megaphone, Mountain } from "lucide-react";

export default function GoogleAdsVancouverPage() {
  const vancouverAreas = [
    "Downtown Vancouver", "West End", "Yaletown", "Gastown", "Coal Harbour", "Kitsilano",
    "Richmond", "Burnaby", "Surrey", "North Vancouver", "West Vancouver", "New Westminster"
  ];

  const vancouverIndustries = [
    {
      name: "Tourism & Hospitality",
      description: "Hotels, restaurants, and tourism operators in Beautiful British Columbia",
      icon: Mountain
    },
    {
      name: "Technology",
      description: "Tech companies and digital media firms in Canada's Silicon Valley North",
      icon: Globe
    },
    {
      name: "Real Estate",
      description: "Property developers, realtors, and investment firms in BC's hot market",
      icon: Building2
    },
    {
      name: "Professional Services",
      description: "Law firms, consulting, and business services across the Lower Mainland",
      icon: Users
    }
  ];

  const googleAdsServices = [
    {
      name: "Search Advertising",
      description: "Dominate Google search results for high-intent keywords in the Vancouver market",
      features: [
        "Keyword research & strategy for Vancouver market",
        "Ad copy creation and A/B testing",
        "Bid management and optimization",
        "Negative keyword management",
        "Location targeting (Lower Mainland and beyond)",
        "Device and demographic targeting"
      ],
      ideal: "Law firms, medical practices, professional services"
    },
    {
      name: "Shopping Campaigns",
      description: "Showcase your products to Vancouver shoppers actively searching to buy",
      features: [
        "Google Merchant Center setup",
        "Product feed optimization",
        "Shopping campaign structure",
        "Bid optimization for profitability",
        "Local inventory ads",
        "Performance monitoring & reporting"
      ],
      ideal: "E-commerce stores, retail businesses, local shops"
    },
    {
      name: "Display & Video Advertising",
      description: "Build brand awareness across millions of websites and YouTube targeting Vancouver audiences",
      features: [
        "Custom audience creation",
        "Remarketing campaigns",
        "YouTube advertising",
        "Display banner design",
        "Video ad creation and optimization",
        "Cross-platform campaign management"
      ],
      ideal: "Brand awareness campaigns, B2B companies, tourism businesses"
    }
  ];

  const caseStudies = [
    {
      title: "Vancouver Restaurant Chain - 350% ROI",
      description: "Increased online orders by 250% across 8 Vancouver locations",
      metrics: ["250% increase in online orders", "35% lower CPA", "350% ROI"]
    },
    {
      title: "Richmond Real Estate Agency - $5M Sales",
      description: "Generated $5M CAD in property sales from Google Ads in 18 months",
      metrics: ["$5M in sales generated", "400% ROAS", "120% increase in qualified leads"]
    },
    {
      title: "Tourism Company - 180% More Bookings",
      description: "Vancouver tour operator saw 180% increase in online bookings",
      metrics: ["180% more bookings", "70% increase in website traffic", "4.5x ROI on ad spend"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-emerald-500/10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Mountain className="w-8 h-8 text-emerald-400 mr-4" />
              <span className="text-emerald-400 font-semibold text-lg">Vancouver, British Columbia</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-white to-emerald-400 bg-clip-text text-transparent">
                Google Ads Management Vancouver
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Get 300% ROI with Vancouver's top Google Ads agency. Certified Google Partner
              helping businesses dominate search results across the Lower Mainland.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/ca/contact"
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-full hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 shadow-lg shadow-emerald-500/25"
              >
                Get Free Google Ads Audit
              </Link>
              <Link
                href="/ca/case-studies"
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View Vancouver Success Stories
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
              <div className="flex items-center">
                <Award className="w-6 h-6 text-emerald-400 mr-2" />
                <span className="text-white">Certified Google Partner</span>
              </div>
              <div className="flex items-center">
                <BarChart3 className="w-6 h-6 text-emerald-400 mr-2" />
                <span className="text-white">$8M+ Ad Spend Managed</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-6 h-6 text-emerald-400 mr-2" />
                <span className="text-white">320% Average ROI</span>
              </div>
            </div>

            {/* Vancouver Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">95+</div>
                <div className="text-slate-400">Vancouver Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">320%</div>
                <div className="text-slate-400">Avg. ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">16M+</div>
                <div className="text-slate-400">Revenue Generated (CAD)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vancouver Areas */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Google Ads Across Metro Vancouver
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We help businesses advertise effectively across Vancouver's diverse neighborhoods and the entire Lower Mainland.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {vancouverAreas.map((area, index) => (
              <div
                key={area}
                className="bg-slate-800/50 rounded-lg p-4 text-center border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300"
              >
                <span className="text-white font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vancouver Industries */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Vancouver Industry Expertise
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Deep understanding of Vancouver's key business sectors and their unique Google Ads challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vancouverIndustries.map((industry, index) => (
              <div
                key={industry.name}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 text-center"
              >
                <industry.icon className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                <p className="text-slate-300 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Ads Services */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Google Ads Services in Vancouver
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive Google Ads management designed for Vancouver businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {googleAdsServices.map((service, index) => (
              <div
                key={service.name}
                className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 ${
                  index === 0
                    ? 'border-emerald-500 ring-2 ring-emerald-500/20 scale-105'
                    : 'border-slate-700/50 hover:border-emerald-500/50'
                }`}
              >
                {index === 0 && (
                  <div className="text-center mb-4">
                    <span className="inline-block px-4 py-1 bg-emerald-500 text-white text-sm font-semibold rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-slate-300 mb-6">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <Star className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-sm text-slate-400 mb-6">
                  <strong>Ideal for:</strong> {service.ideal}
                </div>

                <Link
                  href="/ca/contact"
                  className={`block w-full text-center px-6 py-3 font-semibold rounded-full transition-all duration-300 ${
                    index === 0
                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-400 hover:to-emerald-500'
                      : 'border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white'
                  }`}
                >
                  Get Free Consultation
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Vancouver Google Ads Success Stories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real results from real Vancouver businesses we've helped grow with Google Ads.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-300 mb-6">{study.description}</p>

                <div className="space-y-2">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-emerald-400">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Vancouver Businesses Choose Us */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Why Vancouver Businesses Choose Stenth for Google Ads
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Target className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Local Market Knowledge</h3>
                <p className="text-slate-300">Deep understanding of Vancouver's competitive landscape and West Coast consumer behavior.</p>
              </div>

              <div className="text-center">
                <Award className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Certified Google Partner</h3>
                <p className="text-slate-300">Official Google Partner status with proven track record of campaign success.</p>
              </div>

              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Transparent Reporting</h3>
                <p className="text-slate-300">Monthly detailed reports showing exactly where your ad budget is working hardest.</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Dominate Vancouver Search Results?</h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-emerald-400 mr-3" />
                  <span className="text-white">+1 604-555-0123</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-emerald-400 mr-3" />
                  <span className="text-white">vancouver@stenth.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-emerald-400 mr-3" />
                  <span className="text-white">Downtown Vancouver, BC</span>
                </div>
              </div>

              <Link
                href="/ca/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-full hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 shadow-lg shadow-emerald-500/25"
              >
                Get Your Free Google Ads Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}