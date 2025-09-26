"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Star, TrendingUp, Users, Award, Building2, Globe, Search, Coffee } from "lucide-react";
import STENTHFooter from "@/components/stenth-footer";
import FloatingElements from "@/components/floating-elements";

export default function MelbourneSEOPage() {
  const melbourneAreas = [
    "Melbourne CBD", "South Yarra", "Richmond", "Fitzroy", "St Kilda", "Brighton",
    "Toorak", "Prahran", "Carlton", "Southbank", "Docklands", "Port Melbourne"
  ];

  const melbourneIndustries = [
    {
      name: "Arts & Culture",
      description: "Creative industries, galleries, and cultural institutions in Australia's cultural capital",
      icon: Globe
    },
    {
      name: "Food & Hospitality",
      description: "Restaurants, cafes, and hospitality venues in the foodie capital",
      icon: Coffee
    },
    {
      name: "Education",
      description: "Universities, schools, and educational services in the education hub",
      icon: Users
    },
    {
      name: "Professional Services",
      description: "Law firms, consultancies, and corporate services in the business district",
      icon: Building2
    }
  ];

  const digitalMarketingServices = [
    {
      name: "☕ Creative Startup Accelerator",
      description: "Perfect digital foundation for Melbourne's vibrant creative scene",
      features: [
        "🎯 Local Melbourne SEO + Google My Business domination",
        "🎨 Instagram & TikTok marketing (perfect for Melbourne's visual culture)",
        "☕ Creative website design with Melbourne laneway flair",
        "📧 Email marketing automation with artistic templates",
        "📊 Monthly analytics & creative performance tracking",
        "⭐ Online reputation management for local reviews",
        "🎨 Melbourne culture integration (coffee, arts, sports)"
      ],
      ideal: "Cafes, creative agencies, boutique stores, local services",
      guarantee: "50% increase in local foot traffic within 90 days",
      popular: false
    },
    {
      name: "⚡ Melbourne Market Dominator",
      description: "Comprehensive growth system for established Melbourne businesses",
      features: [
        "🚀 Everything in Creative Startup + Advanced features",
        "💰 Google Ads + Facebook Ads + Instagram campaigns",
        "✍️ Content marketing highlighting Melbourne culture & events",
        "🔍 Advanced SEO (compete with Collins St & Chapel St businesses)",
        "🎨 Brand strategy celebrating Melbourne's unique identity",
        "📈 Conversion optimization for Melbourne customers",
        "🏆 Event marketing (Melbourne Cup, Grand Prix, festivals)",
        "🎬 Video marketing showcasing Melbourne locations",
        "👥 Dedicated Melbourne specialist account manager"
      ],
      ideal: "Established restaurants, retail chains, professional services",
      guarantee: "200% ROI within 6 months",
      popular: true
    },
    {
      name: "🔥 Victorian Enterprise Domination",
      description: "Total market leadership for Melbourne's corporate giants",
      features: [
        "👑 Everything in Market Dominator + Premium features",
        "🎬 Multi-platform campaigns (Google, Facebook, LinkedIn, YouTube)",
        "🤖 Advanced marketing automation + CRM integration",
        "💻 Custom enterprise web development & mobile apps",
        "🎥 Professional video production (Melbourne locations)",
        "🤝 Influencer partnerships with Melbourne personalities",
        "📊 Advanced business intelligence & market analysis",
        "🏆 Custom landing pages for major Melbourne events",
        "👨‍💼 Dedicated team of 5+ Melbourne specialists"
      ],
      ideal: "ASX companies, major franchises, corporate headquarters",
      guarantee: "Market leadership in Melbourne & Victoria",
      popular: false
    }
  ];

  const serviceCategories = [
    {
      category: "☕ Café & Restaurant Marketing",
      description: "Specialized marketing for Melbourne's famous food & coffee culture",
      services: ["Instagram Food Photography", "Google My Business for Restaurants", "Local Food SEO", "Event Promotion", "Menu Optimization", "Review Management", "Food Delivery Platform Setup", "Loyalty Program Development"]
    },
    {
      category: "🎨 Creative & Arts Marketing",
      description: "Perfect for galleries, studios, and creative professionals",
      services: ["Portfolio Websites", "Instagram Art Marketing", "Event Promotion", "Creative Content Strategy", "Art Gallery SEO", "Exhibition Marketing", "Artist Brand Development", "Creative Community Building"]
    },
    {
      category: "🎬 Digital Advertising & PPC",
      description: "Drive targeted traffic through paid advertising campaigns",
      services: ["Google Ads Management", "Facebook & Instagram Ads", "LinkedIn B2B Campaigns", "YouTube Advertising", "Shopping Ads", "Event-Based Advertising", "Retargeting Campaigns", "Local Service Ads"]
    },
    {
      category: "📱 Social Media & Influencer Marketing",
      description: "Build your brand across Melbourne's social landscape",
      services: ["Instagram Marketing", "TikTok Creative Campaigns", "Facebook Community Building", "LinkedIn Professional Marketing", "Influencer Partnerships", "Social Media Management", "Content Creation", "Community Management"]
    },
    {
      category: "🌐 Web Design & Development",
      description: "Create stunning websites with Melbourne style and flair",
      services: ["Creative Website Design", "E-commerce Development", "Mobile App Development", "Landing Page Creation", "Website Speed Optimization", "UX/UI Design", "Portfolio Websites", "Booking Systems"]
    },
    {
      category: "🔍 Search Engine Optimization",
      description: "Dominate Melbourne search results and drive organic traffic",
      services: ["Local Melbourne SEO", "Multi-location SEO", "Technical SEO Audits", "Keyword Research", "Link Building", "Google My Business", "Review Management", "Local Citation Building"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Floating Background Elements */}
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-500/10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-orange-400 mr-4" />
              <span className="text-orange-400 font-semibold text-lg">Melbourne, Victoria</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                SEO Services Melbourne
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Dominate Melbourne search results and attract more customers from across Victoria.
              Expert local SEO strategies for Australia's cultural and sporting capital.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/au/contact"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-600 text-white font-semibold rounded-full hover:from-orange-400 hover:to-yellow-500 transition-all duration-300 shadow-lg shadow-orange-500/25"
              >
                Get Free Melbourne SEO Audit
              </Link>
              <Link
                href="/au/case-studies"
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View Melbourne Success Stories
              </Link>
            </div>

            {/* Melbourne SEO Launch */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">🏙️ Elevating Melbourne's SEO Landscape</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                We're bringing fresh SEO expertise to Australia's cultural capital. As we build
                our Melbourne network, foundation clients receive white-glove service and direct
                collaboration with our international SEO team.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-orange-400 mb-2">🎨</div>
                  <div className="text-slate-300 font-medium">Creative Strategy</div>
                  <div className="text-slate-400 text-sm">Innovative SEO approaches</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-400 mb-2">🤝</div>
                  <div className="text-slate-300 font-medium">Partnership Focus</div>
                  <div className="text-slate-400 text-sm">Long-term growth partners</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-400 mb-2">🎉</div>
                  <div className="text-slate-300 font-medium">Launch Special</div>
                  <div className="text-slate-400 text-sm">Founding client benefits</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Melbourne Culture Focus */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Coffee className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Melbourne's Unique Market Landscape
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We understand Melbourne's distinctive culture, from laneway cafes to sporting events, and create SEO strategies that resonate with Melburnians.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">🏙️ CBD & Inner Suburbs</h3>
              <ul className="space-y-3 text-slate-300">
                <li>• Target business professionals and city workers</li>
                <li>• Focus on lunch spots, after-work venues, and services</li>
                <li>• Compete for high-value commercial keywords</li>
                <li>• Optimize for mobile users and quick searches</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">🌟 Cultural & Creative Scene</h3>
              <ul className="space-y-3 text-slate-300">
                <li>• Appeal to Melbourne's arts and culture enthusiasts</li>
                <li>• Target foodies and coffee culture</li>
                <li>• Leverage events like Melbourne Cup and Grand Prix</li>
                <li>• Focus on experience-based keywords</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {melbourneAreas.map((area, index) => (
              <div
                key={area}
                className="bg-slate-800/50 rounded-lg p-4 text-center border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300"
              >
                <span className="text-white font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Melbourne Industries */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Melbourne Industry Expertise
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Deep understanding of Melbourne's key business sectors and their unique SEO challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {melbourneIndustries.map((industry, index) => (
              <div
                key={industry.name}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 text-center"
              >
                <industry.icon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
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
              Melbourne SEO Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Customised SEO services designed for Melbourne businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {digitalMarketingServices.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 ${
                  index === 1
                    ? 'border-orange-500 ring-2 ring-orange-500/20 scale-105'
                    : 'border-slate-700/50 hover:border-orange-500/50'
                }`}
              >
                {index === 1 && (
                  <div className="text-center mb-4">
                    <span className="inline-block px-4 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>
                <p className="text-slate-300 mb-6">{pkg.description}</p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <Star className="w-4 h-4 text-orange-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-sm text-slate-400 mb-6">
                  <strong>Ideal for:</strong> {pkg.ideal}
                </div>

                <Link
                  href="/au/contact"
                  className={`block w-full text-center px-6 py-3 font-semibold rounded-full transition-all duration-300 ${
                    index === 1
                      ? 'bg-gradient-to-r from-orange-500 to-yellow-600 text-white hover:from-orange-400 hover:to-yellow-500'
                      : 'border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white'
                  }`}
                >
                  Get Free Consultation
                </Link>
              </div>
            ))}
          </div>

          {/* Expandable Services Catalog */}
          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">☕ Melbourne Services Menu</h3>
              <p className="text-slate-300">Explore our full range of Melbourne-focused digital marketing services. Click any category to see what's included.</p>
            </div>

            <div className="space-y-4">
              {serviceCategories.map((category, index) => (
                <details key={category.category} className="bg-slate-900/50 rounded-lg border border-slate-700/30 group">
                  <summary className="p-6 cursor-pointer list-none flex items-center justify-between hover:bg-slate-800/50 transition-colors">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{category.category}</h4>
                      <p className="text-slate-400 text-sm">{category.description}</p>
                    </div>
                    <div className="text-orange-400 group-open:rotate-180 transition-transform">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                      {category.services.map((service, idx) => (
                        <div key={idx} className="flex items-center text-slate-300 text-sm py-2 px-3 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-colors">
                          <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0"></div>
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>
                </details>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/au/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-full hover:from-purple-400 hover:to-pink-500 transition-all duration-300 transform hover:scale-105"
              >
                ☕ Get Custom Melbourne Proposal & Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Melbourne Businesses Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Why Melbourne Businesses Choose Stenth for SEO
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Coffee className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Melbourne Culture Expert</h3>
                <p className="text-slate-300">Deep understanding of Melbourne's unique culture, events, and consumer behaviour.</p>
              </div>

              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Proven Melbourne Results</h3>
                <p className="text-slate-300">Track record of ranking Melbourne businesses #1 for competitive local keywords.</p>
              </div>

              <div className="text-center">
                <Award className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Victorian Business Network</h3>
                <p className="text-slate-300">Strong relationships with Melbourne media outlets and local business communities.</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Dominate Melbourne Search Results?</h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-orange-400 mr-3" />
                  <span className="text-white">+61 3 9018 7012</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-orange-400 mr-3" />
                  <span className="text-white">melbourne@stenth.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-orange-400 mr-3" />
                  <span className="text-white">Melbourne CBD, VIC</span>
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  href="/au/contact"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-full hover:from-orange-400 hover:to-red-500 transition-all duration-300 shadow-lg shadow-orange-500/25 transform hover:scale-105 animate-pulse"
                >
                  ☕ BOOK MELBOURNE GROWTH STRATEGY NOW
                </Link>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 max-w-md mx-auto">
                  <p className="text-orange-300 text-sm font-semibold">💰 Melbourne Guarantee | ☕ No Results = Free Coffee for a Year | 🎯 Cancel Anytime</p>
                </div>
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
