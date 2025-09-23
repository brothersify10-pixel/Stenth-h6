"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Star, TrendingUp, Users, Award } from "lucide-react";
import STENTHFooter from "@/components/stenth-footer";
import FloatingElements from "@/components/floating-elements";

export default function CanadaHomepage() {
  const canadianCities = [
    {
      name: "Toronto",
      province: "Ontario",
      population: "6.2M",
      href: "/ca/seo-services-toronto",
      image: "/images/toronto-skyline.jpg",
      specialty: "Financial & Tech Hub"
    },
    {
      name: "Montreal",
      province: "Quebec",
      population: "4.3M",
      href: "/ca/seo-services-montreal",
      image: "/images/montreal-skyline.jpg",
      specialty: "Bilingual Market"
    },
    {
      name: "Vancouver",
      province: "British Columbia",
      population: "2.6M",
      href: "/ca/seo-services-vancouver",
      image: "/images/vancouver-skyline.jpg",
      specialty: "Tech & Innovation"
    },
    {
      name: "Calgary",
      province: "Alberta",
      population: "1.3M",
      href: "/ca/seo-services-calgary",
      image: "/images/calgary-skyline.jpg",
      specialty: "Energy Sector"
    }
  ];

  const canadianServices = [
    {
      title: "SEO Services Canada",
      description: "Dominate Canadian search results with local SEO expertise across all provinces.",
      features: ["Local keyword optimization", "Canadian market research", "Bilingual SEO (EN/FR)", "Provincial compliance"]
    },
    {
      title: "Google Ads Management",
      description: "ROI-focused PPC campaigns targeting Canadian consumers and businesses.",
      features: ["Canadian audience targeting", "CAD budget optimization", "Local ad extensions", "Mobile-first campaigns"]
    },
    {
      title: "Social Media Marketing",
      description: "Engage Canadian audiences across all major social platforms.",
      features: ["Platform-specific strategies", "Canadian cultural insights", "Timezone optimization", "Influencer partnerships"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Floating Background Elements */}
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
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
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent">
                Digital Marketing Agency Canada
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              From coast to coast, we help Canadian businesses grow through data-driven digital marketing strategies.
              Serving Toronto, Montreal, Vancouver, and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/ca/contact"
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-full hover:from-red-400 hover:to-red-500 transition-all duration-300 shadow-lg shadow-red-500/25"
              >
                Get Free Canadian Market Analysis
              </Link>
              <Link
                href="/ca/case-studies"
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View Canadian Success Stories
              </Link>
            </div>

            {/* Canadian Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">200+</div>
                <div className="text-slate-400">Canadian Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">10+</div>
                <div className="text-slate-400">Provinces Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">$50M+</div>
                <div className="text-slate-400">Revenue Generated (CAD)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Canadian Cities */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              SEO Services Across Canada
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Local expertise in Canada's major metropolitan markets with deep understanding of regional business landscapes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {canadianCities.map((city, index) => (
              <Link
                key={city.name}
                href={city.href}
                className="group relative bg-slate-800/50 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700/50 hover:border-red-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <MapPin className="w-8 h-8 text-red-400" />
                    <span className="text-sm text-slate-400">{city.population}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{city.name}</h3>
                  <p className="text-slate-400 mb-2">{city.province}</p>
                  <p className="text-sm text-red-400 font-medium">{city.specialty}</p>

                  <div className="mt-4 text-sm text-slate-300 group-hover:text-white transition-colors">
                    SEO Services →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Canadian Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Digital Marketing Services for Canadian Businesses
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Tailored strategies that understand Canadian consumer behavior, regulations, and market dynamics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {canadianServices.map((service, index) => (
              <div
                key={service.title}
                className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 mb-6">{service.description}</p>


                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <Star className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/ca/contact"
                  className="mt-6 block w-full text-center px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-full hover:from-red-400 hover:to-red-500 transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Canada */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Why Canadian Businesses Choose Stenth
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Local Market Expertise</h3>
                <p className="text-slate-300">Deep understanding of Canadian consumer behavior and regional market dynamics.</p>
              </div>

              <div className="text-center">
                <Users className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Bilingual Capabilities</h3>
                <p className="text-slate-300">Fluent in both English and French to serve all Canadian markets effectively.</p>
              </div>

              <div className="text-center">
                <Award className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">PIPEDA Compliant</h3>
                <p className="text-slate-300">Full compliance with Canadian privacy laws and data protection regulations.</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Grow Your Canadian Business?</h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-red-400 mr-3" />
                  <span className="text-white">+1 (705) 790-1965</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-red-400 mr-3" />
                  <span className="text-white">canada@stenth.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-red-400 mr-3" />
                  <span className="text-white">Mississauga, ON</span>
                </div>
              </div>

              <Link
                href="/ca/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-full hover:from-red-400 hover:to-red-500 transition-all duration-300 shadow-lg shadow-red-500/25"
              >
                Book Your Free Canadian Market Strategy Call
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