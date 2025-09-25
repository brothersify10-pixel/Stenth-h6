"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Star, TrendingUp, Users, Award, Building2, Globe, Search } from "lucide-react";

export default function TorontoSEOPage() {
  const torontoNeighborhoods = [
    "Downtown Toronto", "North York", "Scarborough", "Etobicoke", "York", "East York",
    "Mississauga", "Markham", "Vaughan", "Richmond Hill", "Brampton", "Oakville"
  ];

  const torontoIndustries = [
    {
      name: "Financial Services",
      description: "Banking, insurance, and fintech companies dominating Bay Street",
      icon: Building2
    },
    {
      name: "Technology",
      description: "Startups and tech giants in the Silicon Valley North ecosystem",
      icon: Globe
    },
    {
      name: "Healthcare",
      description: "Hospitals, clinics, and medical device companies",
      icon: Users
    },
    {
      name: "Real Estate",
      description: "Property developers, realtors, and property management",
      icon: MapPin
    }
  ];

  const seoServices = [
    {
      name: "Local Toronto SEO",
      description: "Perfect for Toronto businesses targeting local customers",
      features: [
        "Google My Business optimization",
        "Local keyword targeting (Toronto + neighborhoods)",
        "Citation building in Toronto directories",
        "Review management",
        "Local schema markup",
        "Mobile optimization"
      ],
      ideal: "Restaurants, retail stores, service businesses"
    },
    {
      name: "Enterprise Toronto SEO",
      description: "Comprehensive SEO for large Toronto corporations",
      features: [
        "Technical SEO audit & implementation",
        "National + local keyword targeting",
        "Content strategy & creation",
        "Link building campaigns",
        "Competitor analysis",
        "Advanced analytics & reporting"
      ],
      ideal: "Fortune 500 companies, large enterprises"
    },
    {
      name: "E-commerce Toronto SEO",
      description: "Drive online sales for Toronto-based e-commerce",
      features: [
        "Product page optimization",
        "Category page SEO",
        "Shopping feed optimization",
        "Local inventory ads",
        "Conversion rate optimization",
        "Multi-location SEO"
      ],
      ideal: "Online retailers, multi-location stores"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-blue-500/10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-blue-400 mr-4" />
              <span className="text-blue-400 font-semibold text-lg">Toronto, Ontario</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent">
                SEO Services Toronto
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Dominate Toronto search results and attract more customers from the GTA.
              Expert local SEO strategies for Canada's largest metropolitan market.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/ca/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:from-blue-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/25"
              >
                Get Free Toronto SEO Audit
              </Link>
              <Link
                href="/ca/case-studies"
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View Toronto Success Stories
              </Link>
            </div>

            {/* Toronto Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">85+</div>
                <div className="text-slate-400">Toronto Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">340%</div>
                <div className="text-slate-400">Avg. Traffic Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">$12M+</div>
                <div className="text-slate-400">Revenue Generated (CAD)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toronto Neighborhoods */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Local SEO Across the Greater Toronto Area
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We help businesses rank in Toronto's diverse neighborhoods and surrounding municipalities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {torontoNeighborhoods.map((neighborhood, index) => (
              <div
                key={neighborhood}
                className="bg-slate-800/50 rounded-lg p-4 text-center border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <span className="text-white font-medium">{neighborhood}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toronto Industries */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Toronto Industry Expertise
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Deep understanding of Toronto's key business sectors and their unique SEO challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {torontoIndustries.map((industry, index) => (
              <div
                key={industry.name}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 text-center"
              >
                <industry.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                <p className="text-slate-300 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Packages */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Toronto SEO Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Customized SEO services designed for Toronto businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {seoServices.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 ${
                  index === 1
                    ? 'border-blue-500 ring-2 ring-blue-500/20 scale-105'
                    : 'border-slate-700/50 hover:border-blue-500/50'
                }`}
              >
                {index === 1 && (
                  <div className="text-center mb-4">
                    <span className="inline-block px-4 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>
                <p className="text-slate-300 mb-6">{pkg.description}</p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <Star className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-sm text-slate-400 mb-6">
                  <strong>Ideal for:</strong> {pkg.ideal}
                </div>

                <Link
                  href="/ca/contact"
                  className={`block w-full text-center px-6 py-3 font-semibold rounded-full transition-all duration-300 ${
                    index === 1
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-400 hover:to-blue-500'
                      : 'border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  Get Free Consultation
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond SEO - Full Service */}
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Beyond SEO: Complete Digital Marketing Solutions for Toronto
            </h2>
            <p className="text-xl text-slate-300 mb-12">
              While SEO drives organic traffic, our comprehensive approach ensures success across all digital channels for Toronto businesses.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-3">Digital Strategy</h3>
                <p className="text-slate-300 text-sm">Comprehensive planning for Toronto market expansion and growth.</p>
              </div>
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3">Google Ads & PPC</h3>
                <p className="text-slate-300 text-sm">Targeted advertising campaigns for immediate Toronto market results.</p>
              </div>
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="text-3xl mb-4">🎨</div>
                <h3 className="text-xl font-bold text-white mb-3">Creative Design</h3>
                <p className="text-slate-300 text-sm">Brand experiences that resonate with Toronto's diverse market.</p>
              </div>
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-white mb-3">Social Media Marketing</h3>
                <p className="text-slate-300 text-sm">Engaging social campaigns for Toronto's active digital community.</p>
              </div>
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="text-3xl mb-4">📝</div>
                <h3 className="text-xl font-bold text-white mb-3">Content Marketing</h3>
                <p className="text-slate-300 text-sm">Strategic content creation and bilingual marketing for Canadian audiences.</p>
              </div>
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-white mb-3">Analytics & Insights</h3>
                <p className="text-slate-300 text-sm">Advanced tracking and reporting for all marketing channels.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Toronto Businesses Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Why Toronto Businesses Choose Stenth for Digital Marketing
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Search className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Local Market Knowledge</h3>
                <p className="text-slate-300">Deep understanding of Toronto's competitive landscape and consumer behavior.</p>
              </div>

              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Proven Toronto Results</h3>
                <p className="text-slate-300">Track record of ranking Toronto businesses #1 for competitive keywords.</p>
              </div>

              <div className="text-center">
                <Award className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">GTA Connections</h3>
                <p className="text-slate-300">Strong relationships with Toronto media outlets and local business networks.</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Dominate Toronto Search Results?</h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-white">+1 (705) 790-1965</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-white">toronto@stenth.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-white">Serving Greater Toronto Area</span>
                </div>
              </div>

              <Link
                href="/ca/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:from-blue-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/25"
              >
                Get Your Free Toronto SEO Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
