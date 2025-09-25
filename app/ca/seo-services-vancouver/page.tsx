"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Star, TrendingUp, Users, Award, Building2, Globe, Search } from "lucide-react";
import STENTHFooter from "@/components/stenth-footer";
import FloatingElements from "@/components/floating-elements";

export default function VancouverSEOPage() {
  const vancouverNeighborhoods = [
    "Downtown Vancouver", "West End", "Kitsilano", "Richmond", "Burnaby", "Surrey",
    "North Vancouver", "West Vancouver", "Coquitlam", "Langley", "New Westminster", "Delta"
  ];

  const vancouverIndustries = [
    {
      name: "Technology & Innovation",
      description: "Tech startups, gaming companies, and innovation hubs in Silicon Valley North",
      icon: Globe
    },
    {
      name: "Film & Entertainment",
      description: "Hollywood North production companies and entertainment businesses",
      icon: Building2
    },
    {
      name: "Tourism & Hospitality",
      description: "Hotels, restaurants, and tourism operators serving global visitors",
      icon: Users
    },
    {
      name: "Natural Resources",
      description: "Forestry, mining, and clean energy companies",
      icon: MapPin
    }
  ];

  const seoServices = [
    {
      name: "Local Vancouver SEO",
      description: "Perfect for Vancouver businesses targeting local customers",
      features: [
        "Google My Business optimization",
        "Local keyword targeting (Vancouver + neighborhoods)",
        "Citation building in BC directories",
        "Review management",
        "Local schema markup",
        "Mobile optimization"
      ],
      ideal: "Restaurants, retail stores, service businesses"
    },
    {
      name: "Enterprise Vancouver SEO",
      description: "Comprehensive SEO for large Vancouver corporations",
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
      name: "E-commerce Vancouver SEO",
      description: "Drive online sales for Vancouver-based e-commerce",
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
      {/* Floating Background Elements */}
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-green-500/10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-green-400 mr-4" />
              <span className="text-green-400 font-semibold text-lg">Vancouver, British Columbia</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 via-white to-green-400 bg-clip-text text-transparent">
                SEO Services Vancouver
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Dominate Vancouver search results and attract more customers from the Lower Mainland.
              Expert local SEO strategies for Canada's Pacific gateway.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/ca/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:from-green-400 hover:to-green-500 transition-all duration-300 shadow-lg shadow-green-500/25"
              >
                Get Free Vancouver SEO Audit
              </Link>
              <Link
                href="/ca/case-studies"
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View Vancouver Success Stories
              </Link>
            </div>

            {/* Vancouver Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">60+</div>
                <div className="text-slate-400">Vancouver Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">380%</div>
                <div className="text-slate-400">Avg. Traffic Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">$8M+</div>
                <div className="text-slate-400">Revenue Generated (CAD)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vancouver Neighborhoods */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Local SEO Across Metro Vancouver
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We help businesses rank in Vancouver's diverse neighborhoods and Lower Mainland municipalities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {vancouverNeighborhoods.map((neighborhood, index) => (
              <div
                key={neighborhood}
                className="bg-slate-800/50 rounded-lg p-4 text-center border border-slate-700/50 hover:border-green-500/50 transition-all duration-300"
              >
                <span className="text-white font-medium">{neighborhood}</span>
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
              Deep understanding of Vancouver's key business sectors and their unique SEO challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vancouverIndustries.map((industry, index) => (
              <div
                key={industry.name}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 text-center"
              >
                <industry.icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
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
              Vancouver SEO Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Customized SEO services designed for Vancouver businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {seoServices.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 ${
                  index === 1
                    ? 'border-green-500 ring-2 ring-green-500/20 scale-105'
                    : 'border-slate-700/50 hover:border-green-500/50'
                }`}
              >
                {index === 1 && (
                  <div className="text-center mb-4">
                    <span className="inline-block px-4 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>
                <p className="text-slate-300 mb-6">{pkg.description}</p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <Star className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
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
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-400 hover:to-green-500'
                      : 'border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white'
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
              Beyond SEO: Complete Digital Marketing Solutions for Vancouver
            </h2>
            <p className="text-xl text-slate-300 mb-12">
              While SEO drives organic growth, our comprehensive approach ensures success across all digital channels for Vancouver businesses.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-3">Digital Strategy</h3>
                <p className="text-slate-300 text-sm">Comprehensive planning for Vancouver's tech-savvy market.</p>
              </div>
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3">Google Ads & PPC</h3>
                <p className="text-slate-300 text-sm">Targeted advertising for Vancouver's competitive market.</p>
              </div>
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300">
                <div className="text-3xl mb-4">🎨</div>
                <h3 className="text-xl font-bold text-white mb-3">Creative Design</h3>
                <p className="text-slate-300 text-sm">West Coast-inspired brand experiences and creative solutions.</p>
              </div>
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-white mb-3">Social Media Marketing</h3>
                <p className="text-slate-300 text-sm">Engaging campaigns that connect with Vancouver's outdoor culture.</p>
              </div>
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300">
                <div className="text-3xl mb-4">📝</div>
                <h3 className="text-xl font-bold text-white mb-3">Content Marketing</h3>
                <p className="text-slate-300 text-sm">Content strategies that resonate with Vancouver's diverse community.</p>
              </div>
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-white mb-3">Analytics & Insights</h3>
                <p className="text-slate-300 text-sm">Data-driven insights for optimal performance across all channels.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vancouver Businesses Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Why Vancouver Businesses Choose Stenth for Digital Marketing
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Search className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">West Coast Market Knowledge</h3>
                <p className="text-slate-300">Deep understanding of Vancouver's competitive landscape and Pacific Northwest consumer behavior.</p>
              </div>

              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Proven Vancouver Results</h3>
                <p className="text-slate-300">Track record of ranking Vancouver businesses #1 for competitive keywords.</p>
              </div>

              <div className="text-center">
                <Award className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">BC Business Network</h3>
                <p className="text-slate-300">Strong relationships with Vancouver media outlets and local business networks.</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Dominate Vancouver Search Results?</h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-white">+1 (705) 790-1965</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-white">vancouver@stenth.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-white">Serving Metro Vancouver</span>
                </div>
              </div>

              <Link
                href="/ca/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:from-green-400 hover:to-green-500 transition-all duration-300 shadow-lg shadow-green-500/25"
              >
                Get Your Free Vancouver SEO Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <STENTHFooter />
    </div>
  );
}
