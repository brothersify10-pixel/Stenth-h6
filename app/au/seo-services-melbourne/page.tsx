"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Star, TrendingUp, Users, Award, Building2, Globe, Search, Coffee } from "lucide-react";

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

  const seoServices = [
    {
      name: "Local Melbourne SEO",
      description: "Perfect for Melbourne businesses targeting local customers",
      features: [
        "Google My Business optimisation",
        "Local keyword targeting (Melbourne + suburbs)",
        "Citation building in Australian directories",
        "Review management",
        "Local schema markup",
        "Mobile optimisation"
      ],
      ideal: "Cafes, retail stores, service businesses"
    },
    {
      name: "Enterprise Melbourne SEO",
      description: "Comprehensive SEO for large Melbourne corporations",
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
      name: "E-commerce Melbourne SEO",
      description: "Drive online sales for Melbourne-based e-commerce",
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

            {/* Melbourne Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">95+</div>
                <div className="text-slate-400">Melbourne Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">320%</div>
                <div className="text-slate-400">Avg. Traffic Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">$14M+</div>
                <div className="text-slate-400">Revenue Generated (AUD)</div>
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
            {seoServices.map((pkg, index) => (
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

              <Link
                href="/au/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-600 text-white font-semibold rounded-full hover:from-orange-400 hover:to-yellow-500 transition-all duration-300 shadow-lg shadow-orange-500/25"
              >
                Get Your Free Melbourne SEO Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}