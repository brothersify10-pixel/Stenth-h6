"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Star, TrendingUp, Users, Award, Building2, Globe, Search, Target, BarChart3, Megaphone, Waves } from "lucide-react";

export default function GoogleAdsSydneyPage() {
  const sydneyAreas = [
    "Sydney CBD", "North Sydney", "Parramatta", "Bondi", "Manly", "Cronulla",
    "Chatswood", "Bankstown", "Liverpool", "Penrith", "Blacktown", "Sutherland"
  ];

  const sydneyIndustries = [
    {
      name: "Financial Services",
      description: "Banking, investment firms, and fintech companies in Australia's financial capital",
      icon: Building2
    },
    {
      name: "Technology",
      description: "Tech companies and digital innovation firms in Australia's startup hub",
      icon: Globe
    },
    {
      name: "Tourism & Hospitality",
      description: "Hotels, restaurants, and tourism operators in Australia's premier destination",
      icon: Waves
    },
    {
      name: "Professional Services",
      description: "Law firms, consulting, and business services across Greater Sydney",
      icon: Users
    }
  ];

  const googleAdsServices = [
    {
      name: "Search Advertising",
      description: "Dominate Google search results for high-intent keywords in the Sydney market",
      features: [
        "Keyword research & strategy for Sydney market",
        "Ad copy creation and A/B testing",
        "Bid management and optimisation",
        "Negative keyword management",
        "Location targeting (Greater Sydney and beyond)",
        "Device and demographic targeting"
      ],
      ideal: "Law firms, medical practices, professional services"
    },
    {
      name: "Shopping Campaigns",
      description: "Showcase your products to Sydney shoppers actively searching to buy",
      features: [
        "Google Merchant Centre setup",
        "Product feed optimisation",
        "Shopping campaign structure",
        "Bid optimisation for profitability",
        "Local inventory ads",
        "Performance monitoring & reporting"
      ],
      ideal: "E-commerce stores, retail businesses, local shops"
    },
    {
      name: "Display & Video Advertising",
      description: "Build brand awareness across millions of websites and YouTube targeting Sydney audiences",
      features: [
        "Custom audience creation",
        "Remarketing campaigns",
        "YouTube advertising",
        "Display banner design",
        "Video ad creation and optimisation",
        "Cross-platform campaign management"
      ],
      ideal: "Brand awareness campaigns, B2B companies, tourism businesses"
    }
  ];

  const caseStudies = [
    {
      title: "Sydney Real Estate Agency - 380% ROI",
      description: "Increased property leads by 295% while reducing cost per lead by 35%",
      metrics: ["295% increase in leads", "35% lower cost per lead", "380% ROI"]
    },
    {
      title: "E-commerce Store - $4.8M Revenue",
      description: "Generated $4.8M AUD in revenue from Google Shopping campaigns in 15 months",
      metrics: ["$4.8M revenue generated", "310% ROAS", "95% increase in online sales"]
    },
    {
      title: "Tourism Company - 240% More Bookings",
      description: "Sydney tour operator saw 240% increase in online bookings and enquiries",
      metrics: ["240% more bookings", "80% increase in website traffic", "5.8x ROI on ad spend"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Waves className="w-8 h-8 text-cyan-400 mr-4" />
              <span className="text-cyan-400 font-semibold text-lg">Sydney, New South Wales</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-white to-cyan-400 bg-clip-text text-transparent">
                Google Ads Management Sydney
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Get 300% ROI with Sydney's top Google Ads agency. Certified Google Partner
              helping businesses dominate search results across Greater Sydney.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/au/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-cyan-500/25"
              >
                Get Free Google Ads Audit
              </Link>
              <Link
                href="/au/case-studies"
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View Sydney Success Stories
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
              <div className="flex items-center">
                <Award className="w-6 h-6 text-cyan-400 mr-2" />
                <span className="text-white">Certified Google Partner</span>
              </div>
              <div className="flex items-center">
                <BarChart3 className="w-6 h-6 text-cyan-400 mr-2" />
                <span className="text-white">$15M+ Ad Spend Managed</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-6 h-6 text-cyan-400 mr-2" />
                <span className="text-white">330% Average ROI</span>
              </div>
            </div>

            {/* Sydney Market Entry */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">🎆 Launching Premium Google Ads Services in Sydney</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                We're bringing our proven international Google Ads expertise to Sydney businesses.
                As we build our Sydney presence, you'll get premium service with direct access to our
                senior Google Ads specialists and cutting-edge strategies.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">📊</div>
                  <div className="text-slate-300 font-medium">Proven Methods</div>
                  <div className="text-slate-400 text-sm">International success record</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">📞</div>
                  <div className="text-slate-300 font-medium">VIP Treatment</div>
                  <div className="text-slate-400 text-sm">Direct line to senior experts</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">🌟</div>
                  <div className="text-slate-300 font-medium">Pioneer Status</div>
                  <div className="text-slate-400 text-sm">First Sydney clients get priority</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sydney Areas */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Google Ads Across Greater Sydney
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We help businesses advertise effectively across Sydney's diverse neighbourhoods and the entire Greater Sydney region.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sydneyAreas.map((area, index) => (
              <div
                key={area}
                className="bg-slate-800/50 rounded-lg p-4 text-center border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <span className="text-white font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sydney Industries */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Sydney Industry Expertise
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Deep understanding of Sydney's key business sectors and their unique Google Ads challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sydneyIndustries.map((industry, index) => (
              <div
                key={industry.name}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center"
              >
                <industry.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
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
              Our Google Ads Services in Sydney
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive Google Ads management designed for Sydney businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {googleAdsServices.map((service, index) => (
              <div
                key={service.name}
                className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 ${
                  index === 0
                    ? 'border-cyan-500 ring-2 ring-cyan-500/20 scale-105'
                    : 'border-slate-700/50 hover:border-cyan-500/50'
                }`}
              >
                {index === 0 && (
                  <div className="text-center mb-4">
                    <span className="inline-block px-4 py-1 bg-cyan-500 text-white text-sm font-semibold rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-slate-300 mb-6">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <Star className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-sm text-slate-400 mb-6">
                  <strong>Ideal for:</strong> {service.ideal}
                </div>

                <Link
                  href="/au/contact"
                  className={`block w-full text-center px-6 py-3 font-semibold rounded-full transition-all duration-300 ${
                    index === 0
                      ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:from-cyan-400 hover:to-cyan-500'
                      : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
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
              Sydney Google Ads Success Stories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real results from real Sydney businesses we've helped grow with Google Ads.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-300 mb-6">{study.description}</p>

                <div className="space-y-2">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-cyan-400">
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

      {/* Why Sydney Businesses Choose Us */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Why Sydney Businesses Choose Stenth for Google Ads
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Target className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Local Market Knowledge</h3>
                <p className="text-slate-300">Deep understanding of Sydney's competitive landscape and consumer behaviour.</p>
              </div>

              <div className="text-center">
                <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Certified Google Partner</h3>
                <p className="text-slate-300">Official Google Partner status with proven track record of campaign success.</p>
              </div>

              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Transparent Reporting</h3>
                <p className="text-slate-300">Monthly detailed reports showing exactly where your ad budget is working hardest.</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Dominate Sydney Search Results?</h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-white">+61 2 9555 0123</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-white">sydney@stenth.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-white">George Street, Sydney</span>
                </div>
              </div>

              <Link
                href="/au/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-cyan-500/25"
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
