"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Star, TrendingUp, Users, Award, Building2, Globe, Search } from "lucide-react";
import STENTHFooter from "@/components/stenth-footer";
import FloatingElements from "@/components/floating-elements";

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

  const digitalMarketingServices = [
    {
      name: "🌟 Startup Growth Accelerator",
      description: "Complete digital foundation for new Sydney businesses",
      features: [
        "🎯 Local SEO + Google My Business domination",
        "📱 Social media marketing setup (Instagram, Facebook, LinkedIn)",
        "🌐 Professional website design & optimization",
        "📧 Email marketing automation & lead nurturing",
        "📊 Monthly analytics & performance optimization",
        "⭐ Online reputation management",
        "📞 24/7 customer support & strategy calls"
      ],
      ideal: "Startups, new businesses, solopreneurs",
      guarantee: "50% increase in online visibility within 90 days",
      popular: false
    },
    {
      name: "⚡ Scale-Up Success Dominator",
      description: "Comprehensive growth system for established Sydney businesses",
      features: [
        "🚀 Everything in Startup Growth + Advanced features",
        "💰 Google Ads + Facebook Ads campaigns (managed)",
        "✍️ Content marketing strategy & creation",
        "🔍 Advanced SEO (national + local domination)",
        "🎨 Brand strategy & visual identity development",
        "📈 Conversion rate optimization & A/B testing",
        "🎯 Lead generation funnels & automation",
        "📹 Video marketing & production",
        "🏆 Dedicated account manager"
      ],
      ideal: "Growing businesses, established companies, franchises",
      guarantee: "200% ROI within 6 months",
      popular: true
    },
    {
      name: "🔥 Enterprise Market Domination",
      description: "Total market leadership for Sydney's biggest players",
      features: [
        "👑 Everything in Scale-Up + Premium features",
        "🎬 Multi-platform advertising campaigns (Google, Facebook, LinkedIn, YouTube)",
        "🤖 Advanced marketing automation & CRM integration",
        "💻 Custom web development & mobile apps",
        "🎥 Professional video production & editing",
        "🤝 Influencer partnerships & PR campaigns",
        "📊 Advanced analytics & business intelligence",
        "🎯 Custom landing pages & sales funnels",
        "👥 Dedicated team of 5+ specialists"
      ],
      ideal: "Large corporations, ASX listed companies, major franchises",
      guarantee: "Market leadership positioning & competitor domination",
      popular: false
    }
  ];

  const serviceCategories = [
    {
      category: "🎯 Digital Advertising & PPC",
      description: "Drive targeted traffic and qualified leads through paid advertising",
      services: ["Google Ads Management", "Facebook & Instagram Ads", "LinkedIn B2B Campaigns", "YouTube Advertising", "Shopping Ads & E-commerce", "Remarketing Campaigns", "Display Advertising", "Local Service Ads"]
    },
    {
      category: "📱 Social Media Domination",
      description: "Build your brand and engage customers across all social platforms",
      services: ["Instagram Marketing", "Facebook Marketing", "LinkedIn Marketing", "TikTok Marketing", "YouTube Channel Growth", "Social Media Management", "Influencer Partnerships", "Social Commerce"]
    },
    {
      category: "🌐 Web Development & Design",
      description: "Create stunning websites that convert visitors into customers",
      services: ["Custom Website Design", "E-commerce Development", "Mobile App Development", "Landing Page Creation", "Website Speed Optimization", "UX/UI Design", "WordPress Development", "Shopify Stores"]
    },
    {
      category: "✍️ Content & Brand Strategy",
      description: "Tell your story and build a brand that customers love",
      services: ["Content Marketing Strategy", "Video Production", "Graphic Design", "Brand Identity Creation", "Copywriting Services", "PR & Media Relations", "Podcast Marketing", "Blog Content Creation"]
    },
    {
      category: "🤖 Marketing Technology",
      description: "Automate and optimize your marketing for maximum efficiency",
      services: ["Marketing Automation", "CRM Setup & Management", "Analytics & Reporting", "Lead Generation Systems", "Email Marketing", "SMS Marketing", "Chatbot Development", "Conversion Tracking"]
    },
    {
      category: "🔍 Search Engine Optimization",
      description: "Dominate Google search results and drive organic traffic",
      services: ["Local Sydney SEO", "National SEO Campaigns", "Technical SEO Audits", "Keyword Research & Strategy", "Link Building", "On-Page Optimization", "Google My Business", "SEO Content Creation"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Floating Background Elements */}
      <FloatingElements />

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
                Digital Marketing Sydney
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              🚀 <strong>Dominate Sydney's Digital Landscape</strong> with Australia's most comprehensive digital marketing solutions.
              We don't just build websites—we build <em>businesses that dominate their markets</em>.
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

            {/* Sydney SEO Market Entry */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">🎆 Premium SEO Services Now in Sydney</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                We're excited to bring our world-class SEO expertise to Sydney businesses.
                As a new entrant to the Sydney market, we offer personalized attention from our
                senior SEO specialists and cutting-edge strategies proven internationally.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400 mb-2">🚀</div>
                  <div className="text-slate-300 font-medium">International Expertise</div>
                  <div className="text-slate-400 text-sm">Proven strategies worldwide</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400 mb-2">🎯</div>
                  <div className="text-slate-300 font-medium">Exclusive Attention</div>
                  <div className="text-slate-400 text-sm">Premium service guaranteed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400 mb-2">🌟</div>
                  <div className="text-slate-300 font-medium">Early Adopter</div>
                  <div className="text-slate-400 text-sm">Special rates available</div>
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
            <h2 className="text-5xl font-bold text-white mb-4">
              🚀 Complete Digital Marketing Solutions
            </h2>
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto mb-8">
              Choose your <strong>business growth package</strong>. Each designed to
              dominate from Circular Quay to Parramatta and beyond.
            </p>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-blue-300 font-semibold">💡 <strong>Sydney Special:</strong> 94% of our clients choose Scale-Up Success for maximum growth</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {digitalMarketingServices.map((service, index) => (
              <div
                key={service.name}
                className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 transform ${
                  service.popular
                    ? 'border-green-500 ring-4 ring-green-500/20 scale-110 shadow-2xl shadow-green-500/20'
                    : 'border-slate-700/50 hover:border-blue-500/50 hover:scale-105'
                }`}
              >
                {service.popular && (
                  <div className="text-center mb-4">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-bold rounded-full animate-pulse">
                      ⭐ MOST POPULAR - BEST VALUE ⭐
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-slate-300 mb-6">{service.description}</p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-slate-300">
                      <Star className="w-4 h-4 text-green-400 mr-3 flex-shrink-0 mt-1" />
                      <span dangerouslySetInnerHTML={{ __html: feature }} />
                    </li>
                  ))}
                </ul>

                <div className="bg-slate-900/50 rounded-lg p-4 mb-6">
                  <div className="text-sm text-slate-400 mb-2">
                    <strong>Perfect for:</strong> {service.ideal}
                  </div>
                  <div className="text-sm font-bold text-green-400">
                    🎯 <strong>Guarantee:</strong> {service.guarantee}
                  </div>
                </div>

                <Link
                  href="/au/contact"
                  className={`block w-full text-center px-6 py-4 font-bold rounded-full transition-all duration-300 transform hover:scale-105 ${
                    service.popular
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-400 hover:to-green-500 shadow-lg shadow-green-500/25'
                      : 'border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  {service.popular ? '🚀 START DOMINATING NOW' : 'Get Free Strategy Call'}
                </Link>
              </div>
            ))}
          </div>

          {/* Expandable Services Catalog */}
          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">🎯 Complete Services Catalog</h3>
              <p className="text-slate-300">Explore our full range of digital marketing services. Click any category to see what's included.</p>
            </div>

            <div className="space-y-4">
              {serviceCategories.map((category, index) => (
                <details key={category.category} className="bg-slate-900/50 rounded-lg border border-slate-700/30 group">
                  <summary className="p-6 cursor-pointer list-none flex items-center justify-between hover:bg-slate-800/50 transition-colors">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{category.category}</h4>
                      <p className="text-slate-400 text-sm">{category.description}</p>
                    </div>
                    <div className="text-blue-400 group-open:rotate-180 transition-transform">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                      {category.services.map((service, idx) => (
                        <div key={idx} className="flex items-center text-slate-300 text-sm py-2 px-3 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-colors">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
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
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-full hover:from-purple-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
              >
                💬 Get Custom Proposal & Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sydney Businesses Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Why Sydney Businesses Choose Stenth for Digital Marketing
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

              <div className="space-y-4">
                <Link
                  href="/au/contact"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full hover:from-red-400 hover:to-red-500 transition-all duration-300 shadow-lg shadow-red-500/25 transform hover:scale-105 animate-pulse"
                >
                  🎯 BOOK EMERGENCY GROWTH CALL NOW
                </Link>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 max-w-md mx-auto">
                  <p className="text-green-300 text-sm font-semibold">💰 100% Money-Back Guarantee | 📊 No Results = No Payment | 🎯 Cancel Anytime</p>
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
