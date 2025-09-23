"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Star, TrendingUp, Users, Award, Building2, Globe, Search } from "lucide-react";

export default function SydneySEOPage() {
  const sydneyAreas = [
    "Sydney CBD", "North Sydney", "Parramatta", "Bondi", "Manly", "Cronulla",
    "Chatswood", "Bankstown", "Liverpool", "Penrith", "Blacktown", "Sutherland"
  ];

  const sydneyIndustries = [
    {
      name: "Financial Services",
      description: "Banking, insurance, and fintech companies in the financial capital",
      icon: Building2
    },
    {
      name: "Technology",
      description: "Tech startups and multinational corporations in the innovation hub",
      icon: Globe
    },
    {
      name: "Tourism & Hospitality",
      description: "Hotels, restaurants, and tourism operators in Australia's gateway city",
      icon: Users
    },
    {
      name: "Professional Services",
      description: "Law firms, consultancies, and corporate services in the CBD",
      icon: Award
    }
  ];

  const seoServices = [
    {
      name: "Local Sydney SEO",
      description: "Perfect for Sydney businesses targeting local customers",
      features: [
        "Google My Business optimisation",
        "Local keyword targeting (Sydney + suburbs)",
        "Citation building in Australian directories",
        "Review management",
        "Local schema markup",
        "Mobile optimisation"
      ],
      ideal: "Restaurants, retail stores, service businesses"
    },
    {
      name: "Enterprise Sydney SEO",
      description: "Comprehensive SEO for large Sydney corporations",
      features: [
        "Technical SEO audit & implementation",
        "National + local keyword targeting",
        "Content strategy & creation",
        "Link building campaigns",
        "Competitor analysis",
        "Advanced analytics & reporting"
      ],
      ideal: "ASX listed companies, large enterprises"
    },
    {
      name: "E-commerce Sydney SEO",
      description: "Drive online sales for Sydney-based e-commerce",
      features: [
        "Product page optimisation",
        "Category page SEO",
        "Shopping feed optimisation",
        "Local inventory ads",
        "Conversion rate optimisation",
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
              <span className="text-blue-400 font-semibold text-lg">Sydney, New South Wales</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent">
                SEO Services Sydney
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Dominate Sydney search results and attract more customers from across NSW.
              Expert local SEO strategies for Australia's largest metropolitan market.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/au/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:from-blue-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/25"
              >
                Get Free Sydney SEO Audit
              </Link>
              <Link
                href="/au/case-studies"
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View Sydney Success Stories
              </Link>
            </div>

            {/* Sydney Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">120+</div>
                <div className="text-slate-400">Sydney Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">285%</div>
                <div className="text-slate-400">Avg. Traffic Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">$18M+</div>
                <div className="text-slate-400">Revenue Generated (AUD)</div>
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
              Local SEO Across Greater Sydney
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We help businesses rank in Sydney's diverse suburbs and surrounding areas.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sydneyAreas.map((area, index) => (
              <div
                key={area}
                className="bg-slate-800/50 rounded-lg p-4 text-center border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
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
              Deep understanding of Sydney's key business sectors and their unique SEO challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sydneyIndustries.map((industry, index) => (
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

      {/* SEO Services */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Sydney SEO Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Customised SEO solutions designed for Sydney businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {seoServices.map((service, index) => (
              <div
                key={service.name}
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

                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-slate-300 mb-6">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <Star className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
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

      {/* Why Sydney Businesses Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Why Sydney Businesses Choose Stenth for SEO
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Search className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Local Market Knowledge</h3>
                <p className="text-slate-300">Deep understanding of Sydney's competitive landscape and consumer behaviour.</p>
              </div>

              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Proven Sydney Results</h3>
                <p className="text-slate-300">Track record of ranking Sydney businesses #1 for competitive keywords.</p>
              </div>

              <div className="text-center">
                <Award className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">NSW Business Network</h3>
                <p className="text-slate-300">Strong relationships with Sydney media outlets and local business networks.</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Dominate Sydney Search Results?</h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-white">+61 2 8079 2145</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-white">sydney@stenth.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-white">Sydney CBD, NSW</span>
                </div>
              </div>

              <Link
                href="/au/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:from-blue-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/25"
              >
                Get Your Free Sydney SEO Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}