"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Star, TrendingUp, Users, Award } from "lucide-react";
import STENTHFooter from "@/components/stenth-footer";
import FloatingElements from "@/components/floating-elements";

export default function AustraliaHomepage() {
  const australianCities = [
    {
      name: "Melbourne",
      state: "Victoria",
      population: "5.1M",
      href: "/au/melbourne",
      image: "/images/melbourne-skyline.jpg",
      specialty: "Creative & Cultural Capital"
    },
    {
      name: "Sydney",
      state: "New South Wales",
      population: "5.3M",
      href: "/au/sydney",
      image: "/images/sydney-skyline.jpg",
      specialty: "Financial & Corporate Hub"
    },
    {
      name: "Brisbane",
      state: "Queensland",
      population: "2.6M",
      href: "/au/brisbane",
      image: "/images/brisbane-skyline.jpg",
      specialty: "Tourism & Hospitality Hub"
    },
    {
      name: "Perth",
      state: "Western Australia",
      population: "2.1M",
      href: "/au/perth",
      image: "/images/perth-skyline.jpg",
      specialty: "Mining & Resources Hub"
    }
  ];

  const australianServices = [
    {
      title: "Digital Strategy & Planning",
      description: "Comprehensive digital transformation strategies tailored for the Australian market.",
      features: ["Australian market analysis", "Competitor research", "Growth roadmapping", "ROI forecasting"]
    },
    {
      title: "SEO & Content Marketing",
      description: "Dominate Australian search results and engage local audiences with targeted content.",
      features: ["Local SEO optimisation", "Australian keyword research", "Content strategy", "Link building"]
    },
    {
      title: "Performance Marketing",
      description: "ROI-focused advertising campaigns across Google Ads, Facebook, and other platforms.",
      features: ["Google Ads management", "Social media advertising", "Conversion optimisation", "Budget management"]
    },
    {
      title: "Creative & Brand Design",
      description: "Stunning visual content that resonates with Australian culture and market preferences.",
      features: ["Brand identity design", "Marketing collateral", "Website design", "Video production"]
    },
    {
      title: "Analytics & Insights",
      description: "Advanced tracking and reporting to optimise your Australian marketing performance.",
      features: ["Performance dashboards", "Conversion tracking", "Market insights", "ROI reporting"]
    },
    {
      title: "Social Media Marketing",
      description: "Engage Australian audiences across all major social platforms.",
      features: ["Platform-specific strategies", "Australian cultural insights", "Community management", "Influencer partnerships"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Floating Background Elements */}
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-gold-500/10 to-green-500/10"></div>

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
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
                Digital Marketing Agency Australia
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              From Sydney to Perth, we help Australian businesses grow through data-driven digital marketing strategies.
              Serving Sydney, Melbourne, Brisbane, and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/au/book"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:from-green-400 hover:to-green-500 transition-all duration-300 shadow-lg shadow-green-500/25"
              >
                🇦🇺 Book Free Aussie Strategy Session
              </Link>
              <Link
                href="/au/case-studies"
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View Australian Success Stories
              </Link>
            </div>

            {/* Australian Market Focus */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">🚀 Now Expanding Into Australia</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                We're selectively building our Australian presence with a focus on delivering
                exceptional results. This means more personalised attention, direct access to our
                senior strategists, and the opportunity to be among our foundation clients in Australia.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-2">🎯</div>
                  <div className="text-slate-300 font-medium">Selective Partnership</div>
                  <div className="text-slate-400 text-sm">Quality over quantity approach</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-2">⚡</div>
                  <div className="text-slate-300 font-medium">Direct Access</div>
                  <div className="text-slate-400 text-sm">Work directly with senior team</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-2">🏆</div>
                  <div className="text-slate-300 font-medium">Foundation Client</div>
                  <div className="text-slate-400 text-sm">Shape our Australian expansion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Australian Cities */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              SEO Services Across Australia
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Local expertise in Australia's major metropolitan markets with deep understanding of regional business landscapes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {australianCities.map((city, index) => (
              <Link
                key={city.name}
                href={city.href}
                className="group relative bg-slate-800/50 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700/50 hover:border-green-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <MapPin className="w-8 h-8 text-green-400" />
                    <span className="text-sm text-slate-400">{city.population}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{city.name}</h3>
                  <p className="text-slate-400 mb-2">{city.state}</p>
                  <p className="text-sm text-green-400 font-medium">{city.specialty}</p>

                  <div className="mt-4 text-sm text-slate-300 group-hover:text-white transition-colors">
                    SEO Services →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Australian Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete Digital Marketing Suite for Australia
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Full-service digital marketing solutions that understand Australian consumer behaviour, regulations, and market dynamics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {australianServices.map((service, index) => (
              <div
                key={service.title}
                className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 mb-6">{service.description}</p>


                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <Star className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/au/book"
                  className="mt-6 block w-full text-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:from-green-400 hover:to-green-500 transition-all duration-300"
                >
                  Book Free Session
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Australia */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Why Australian Businesses Choose Stenth
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Local Market Expertise</h3>
                <p className="text-slate-300">Deep understanding of Australian consumer behaviour and regional market dynamics.</p>
              </div>

              <div className="text-center">
                <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Timezone Advantage</h3>
                <p className="text-slate-300">Operating in Australian business hours for real-time support and communication.</p>
              </div>

              <div className="text-center">
                <Award className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Privacy Act Compliant</h3>
                <p className="text-slate-300">Full compliance with Australian privacy laws and data protection regulations.</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Grow Your Australian Business?</h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-white">+61 2 8079 2145</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-white">australia@stenth.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-white">Sydney, NSW</span>
                </div>
              </div>

              <Link
                href="/au/book"
                className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:from-green-400 hover:to-green-500 transition-all duration-300 shadow-lg shadow-green-500/25"
              >
                Book Your Free Australian Market Strategy Call
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
