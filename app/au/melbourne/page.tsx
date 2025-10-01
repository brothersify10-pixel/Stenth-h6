"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, TrendingUp, Users, Award, Building2, Globe, Search, PenTool, Megaphone, FileText, Layout, BarChart3, Coffee, Palette, Music } from "lucide-react";
import FloatingElements from "@/components/floating-elements";

export default function MelbourneDigitalMarketingPage() {
  const services = [
    {
      icon: Search,
      title: "SEO & Organic Growth",
      description: "Melbourne-focused SEO strategies that dominate local search results and drive qualified leads.",
      features: ["Local Melbourne SEO", "Google My Business optimization", "Technical SEO audits", "Content optimization"]
    },
    {
      icon: Megaphone,
      title: "Paid Advertising (Google Ads & Social)",
      description: "ROI-driven ad campaigns targeting Melbourne audiences with precision and cultural awareness.",
      features: ["Google Ads management", "Facebook & Instagram ads", "LinkedIn campaigns", "YouTube advertising"]
    },
    {
      icon: Globe,
      title: "Social Media Marketing",
      description: "Engaging Melbourne's vibrant creative community through strategic social media campaigns.",
      features: ["Platform strategy", "Content creation", "Community management", "Influencer partnerships"]
    },
    {
      icon: Layout,
      title: "Web Design & Development",
      description: "Melbourne-inspired websites that convert visitors into customers with stunning design.",
      features: ["Custom web design", "Mobile optimization", "E-commerce development", "UX/UI excellence"]
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description: "Storytelling that captures Melbourne's creative spirit while driving business growth.",
      features: ["Blog content strategy", "Video production", "Email marketing", "Brand storytelling"]
    },
    {
      icon: BarChart3,
      title: "Tech & Analytics",
      description: "Advanced tracking and optimization tools to maximize your Melbourne marketing performance.",
      features: ["Performance analytics", "Conversion tracking", "A/B testing", "Growth optimization"]
    }
  ];

  const socialProof = [
    { metric: "50+", label: "Melbourne Businesses Served" },
    { metric: "5+", label: "Years of Experience" },
    { metric: "24/7", label: "Support Available" }
  ];

  const melbourneAreas = [
    "Melbourne CBD", "South Yarra", "Richmond", "Fitzroy", "St Kilda", "Brighton",
    "Toorak", "Prahran", "Carlton", "Southbank", "Docklands", "Port Melbourne",
    "Collingwood", "Chapel Street", "Brunswick", "Hawthorn"
  ];

  const targetIndustries = [
    { name: "Creative Agencies", icon: Palette, description: "Elevating Melbourne's creative scene" },
    { name: "Hospitality & Cafés", icon: Coffee, description: "From laneway coffee to fine dining" },
    { name: "Arts & Culture", icon: Music, description: "Supporting Melbourne's cultural capital" },
    { name: "Professional Services", icon: Building2, description: "Lawyers, accountants, consultants" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-purple-500/10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-orange-400 mr-4" />
              <span className="text-orange-400 font-semibold text-lg">Melbourne, Victoria</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Melbourne's Creative
              </span>
              <br />
              Digital Marketing Agency
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              From Melbourne Cup campaigns to laneway café marketing, we understand what makes Melbourne tick.
              Complete digital marketing services for Australia's cultural capital.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/au/contact"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Growing Today
              </Link>
              <Link
                href="/au/book"
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-semibold rounded-xl transition-all duration-300"
              >
                Book Melbourne Strategy
              </Link>
            </div>

            {/* Social Proof */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-8">
              {socialProof.map((proof, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">{proof.metric}</div>
                  <div className="text-slate-400 text-sm">{proof.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Melbourne Culture Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              We Speak Melbourne
            </h2>
            <p className="text-xl text-slate-300">
              Coffee culture, street art, Grand Prix excitement, and that uniquely Melbourne creative energy.
              We don't just market to Melbourne - we ARE Melbourne.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetIndustries.map((industry, index) => (
              <div
                key={industry.name}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 text-center"
              >
                <industry.icon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-slate-400 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Complete Digital Marketing Suite for{" "}
              <span className="bg-gradient-to-r from-orange-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Melbourne Businesses
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              All services integrated into one growth-focused strategy. No silos, no separate vendors - just results.
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

          <div className="text-center mt-12">
            <Link
              href="/au/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Your Melbourne Growth Strategy
            </Link>
          </div>
        </div>
      </section>

      {/* Melbourne Areas */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Serving All Melbourne Areas
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From the CBD to the creative laneways, from Brighton beachside to Brunswick hipster havens.
              Local expertise across all Melbourne regions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
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
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Why Melbourne Businesses Choose STENTH
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Proven Melbourne Growth</h3>
                <p className="text-slate-300">Proven growth strategies and measurable results for Melbourne businesses across all industries.</p>
              </div>

              <div className="text-center">
                <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Full-Service Creative Team</h3>
                <p className="text-slate-300">Complete team covering SEO, ads, social, web, content, and tech - all working together.</p>
              </div>

              <div className="text-center">
                <Award className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Melbourne Culture Experts</h3>
                <p className="text-slate-300">We understand Melbourne's creative soul, from coffee culture to Grand Prix excitement.</p>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Own Melbourne's Digital Scene?</h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-orange-400 mr-3" />
                  <span className="text-white">+61 401 712 063</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-orange-400 mr-3" />
                  <span className="text-white">australia@stenth.com</span>
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
                  Start Your Melbourne Growth Journey
                </Link>
                <div className="text-slate-400 text-sm">
                  Professional consultation • No obligations • Custom Melbourne solutions
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
