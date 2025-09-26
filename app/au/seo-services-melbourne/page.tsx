"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, TrendingUp, Users, Award, Building2, Globe, Search, PenTool, Megaphone, FileText, Layout, BarChart3 } from "lucide-react";
import STENTHFooter from "@/components/stenth-footer";
import FloatingElements from "@/components/floating-elements";

export default function MelbourneDigitalMarketingPage() {
  const services = [
    {
      icon: PenTool,
      title: "Brand Strategy & Identity",
      description: "Complete brand development from strategy to visual identity, creating memorable brands that convert.",
      features: ["Brand Strategy Development", "Visual Identity Design", "Brand Guidelines", "Market Positioning"]
    },
    {
      icon: Megaphone,
      title: "Paid Advertising",
      description: "Data-driven Google Ads, Facebook, and social media campaigns that maximize ROI and drive growth.",
      features: ["Google Ads Management", "Facebook & Instagram Ads", "LinkedIn Campaigns", "YouTube Advertising"]
    },
    {
      icon: Search,
      title: "Search Engine Optimization",
      description: "Comprehensive SEO strategies that drive organic traffic and establish market authority.",
      features: ["Technical SEO", "Content Optimization", "Link Building", "Local SEO"]
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description: "Strategic content that educates, engages, and converts prospects into loyal customers.",
      features: ["Content Strategy", "Blog Management", "Video Production", "Social Content"]
    },
    {
      icon: Layout,
      title: "Web Development",
      description: "High-converting websites and applications that drive business growth and user engagement.",
      features: ["Custom Website Design", "E-commerce Development", "Mobile Optimization", "UX/UI Design"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Tracking",
      description: "Comprehensive data analysis and ROI tracking to optimize marketing performance.",
      features: ["Performance Analytics", "ROI Tracking", "Conversion Optimization", "Reporting Dashboards"]
    }
  ];

  const packages = [
    {
      name: "Growth Starter",
      price: "Custom Quote",
      description: "Essential digital marketing foundation for new and growing businesses",
      features: [
        "Brand Strategy & Visual Identity",
        "Professional Website Development",
        "Local SEO & Google My Business",
        "Social Media Setup & Strategy",
        "Google Ads Campaign Setup",
        "Monthly Analytics & Reporting"
      ],
      ideal: "Startups, new businesses, local service providers",
      cta: "Start Growing"
    },
    {
      name: "Business Accelerator",
      price: "Custom Quote",
      description: "Comprehensive marketing system for established businesses ready to scale",
      features: [
        "Everything in Growth Starter",
        "Advanced SEO & Content Marketing",
        "Multi-platform Advertising (Google, Facebook, LinkedIn)",
        "Email Marketing Automation",
        "Conversion Rate Optimization",
        "Dedicated Account Management"
      ],
      ideal: "Established businesses, franchises, professional services",
      cta: "Accelerate Growth",
      popular: true
    },
    {
      name: "Market Leader",
      price: "Custom Quote",
      description: "Full-scale digital marketing for enterprises seeking market dominance",
      features: [
        "Everything in Business Accelerator",
        "Custom Web Applications & Platforms",
        "Advanced Marketing Automation",
        "Video Production & Creative Services",
        "PR & Influencer Partnerships",
        "Dedicated Team of Specialists"
      ],
      ideal: "Large enterprises, ASX-listed companies, market leaders",
      cta: "Dominate Market"
    }
  ];

  const melbourneAreas = [
    "Melbourne CBD", "South Yarra", "Richmond", "Fitzroy", "St Kilda", "Brighton",
    "Toorak", "Prahran", "Carlton", "Southbank", "Docklands", "Port Melbourne"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
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

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Not Just Marketing.
              </span>
              <br />
              We Build Businesses in Melbourne.
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              From business analysis to brand recognition, STENTH drives every stage of your growth in Australia's cultural capital. Complete digital marketing solutions for Melbourne businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/au/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Growing Today
              </Link>
              <Link
                href="/au/book"
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-semibold rounded-xl transition-all duration-300"
              >
                Book Free Growth Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Digital Marketing Services That{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Drive Growth
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Complete digital marketing solutions for Melbourne businesses. Every service designed to drive measurable business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-purple-600 rounded-xl mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-slate-400 text-sm flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Growth Packages for Melbourne Businesses
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the right package for your business stage. Every package includes multiple services to drive comprehensive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 ${
                  pkg.popular
                    ? 'border-orange-500 ring-2 ring-orange-500/20 scale-105'
                    : 'border-slate-700/50 hover:border-orange-500/50'
                }`}
              >
                {pkg.popular && (
                  <div className="text-center mb-4">
                    <span className="inline-block px-4 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-2xl font-bold text-orange-400 mb-4">{pkg.price}</div>
                <p className="text-slate-300 mb-6">{pkg.description}</p>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-slate-300">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-sm text-slate-400 mb-6">
                  <strong>Perfect for:</strong> {pkg.ideal}
                </div>

                <Link
                  href="/au/contact"
                  className={`block w-full text-center px-6 py-3 font-semibold rounded-xl transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white hover:from-orange-600 hover:to-purple-700'
                      : 'border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white'
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-slate-300 mb-6">Need a custom solution? We create tailored packages for unique business requirements.</p>
            <Link
              href="/au/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Melbourne Areas */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Serving All Melbourne Areas
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Local expertise with global standards. We understand Melbourne's unique business landscape and cultural dynamics.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {melbourneAreas.map((area) => (
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

      {/* Why Choose STENTH */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Why Melbourne Businesses Choose STENTH
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Proven Growth</h3>
                <p className="text-slate-300">Track record of driving measurable business growth for Melbourne companies across all industries.</p>
              </div>

              <div className="text-center">
                <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Full-Service Team</h3>
                <p className="text-slate-300">Complete team of specialists covering every aspect of digital marketing and business growth.</p>
              </div>

              <div className="text-center">
                <Award className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Melbourne Expertise</h3>
                <p className="text-slate-300">Deep understanding of Melbourne's business environment, from creative startups to major corporations.</p>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Build Your Business in Melbourne?</h3>

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
                  className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-purple-700 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  Start Your Growth Journey Today
                </Link>
                <div className="text-slate-400 text-sm">
                  Free consultation • No obligations • Custom solutions
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <STENTHFooter />
    </div>
  );
}