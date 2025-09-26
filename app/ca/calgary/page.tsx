"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, TrendingUp, Users, Award, Building2, Globe, Search, PenTool, Megaphone, FileText, Layout, BarChart3, Fuel, Cog, Mountain, Zap } from "lucide-react";
import STENTHFooter from "@/components/stenth-footer";
import FloatingElements from "@/components/floating-elements";

export default function CalgaryDigitalMarketingPage() {
  const services = [
    {
      icon: Search,
      title: "SEO & B2B Optimization",
      description: "Calgary-focused SEO strategies for energy, resources, and industrial B2B companies.",
      features: ["Energy sector SEO", "B2B keyword research", "Local Calgary SEO", "Industrial optimization"]
    },
    {
      icon: Megaphone,
      title: "Paid Advertising (LinkedIn & Google)",
      description: "Professional advertising campaigns targeting Calgary's energy and business professionals.",
      features: ["LinkedIn B2B campaigns", "Energy sector advertising", "Google Ads for B2B", "Executive targeting"]
    },
    {
      icon: Globe,
      title: "Social Media Marketing",
      description: "Professional social strategies for Calgary's energy and corporate sectors.",
      features: ["LinkedIn strategy", "B2B social media", "Industry thought leadership", "Executive branding"]
    },
    {
      icon: Layout,
      title: "Web Design & Development",
      description: "Industrial-strength websites for Calgary's energy and resource companies.",
      features: ["Corporate web design", "Energy sector sites", "B2B platforms", "Industrial showcases"]
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description: "Industry-specific content that positions your brand as a Calgary energy leader.",
      features: ["Energy content strategy", "Industry reports", "B2B case studies", "Executive thought leadership"]
    },
    {
      icon: BarChart3,
      title: "Tech & Analytics",
      description: "Advanced B2B tracking and optimization for Calgary's energy business ecosystem.",
      features: ["B2B analytics", "Energy sector metrics", "Lead tracking", "ROI optimization"]
    }
  ];

  const socialProof = [
    { metric: "380%", label: "Lead Growth for Energy Services" },
    { metric: "290%", label: "B2B Pipeline Expansion" },
    { metric: "120+", label: "Calgary Energy Clients" }
  ];

  const calgaryAreas = [
    "Downtown", "Beltline", "Eau Claire", "Mission", "Hillhurst", "Kensington",
    "Inglewood", "Bridgeland", "Ramsay", "Victoria Park", "East Village", "Sunalta",
    "Energy Centre", "Bow River", "Prince's Island", "Stampede Grounds"
  ];

  const targetIndustries = [
    { name: "Oil & Gas", icon: Fuel, description: "Upstream, midstream, downstream" },
    { name: "Energy Services", icon: Cog, description: "Engineering, drilling, consulting" },
    { name: "Clean Energy", icon: Zap, description: "Renewables, carbon capture" },
    { name: "Resource Extraction", icon: Mountain, description: "Mining, forestry, utilities" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-red-500/10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-orange-400 mr-4" />
              <span className="text-orange-400 font-semibold text-lg">Calgary, Alberta</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-amber-500 bg-clip-text text-transparent">
                Calgary's Energy
              </span>
              <br />
              Digital Marketing Agency ⚡
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              From downtown energy headquarters to Stampede City innovation, we power Alberta's business capital.
              Complete B2B digital marketing for Calgary's energy sector and resource leaders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/ca/contact"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                ⚡ Power Your Calgary Business
              </Link>
              <Link
                href="/ca/book"
                className="px-8 py-4 border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-semibold rounded-xl transition-all duration-300"
              >
                🏢 Book Energy Strategy Session
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

      {/* Calgary Energy Focus */}
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Alberta's Energy Marketing Specialists 🛢️
            </h2>
            <p className="text-xl text-slate-300">
              From traditional oil & gas to emerging clean energy, we understand Calgary's
              diverse energy ecosystem and the Alberta spirit that drives Canada's energy capital.
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
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-amber-500 bg-clip-text text-transparent">
                Calgary Energy
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Integrated B2B services designed for Calgary's energy and resource sectors.
              Drive qualified leads, partnerships, and business expansion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl mb-6">
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
              href="/ca/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300"
            >
              🎯 Get Your Calgary Energy Strategy
            </Link>
          </div>
        </div>
      </section>

      {/* Calgary Areas */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Serving All Calgary Energy Districts 🏔️
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From downtown energy towers to industrial districts, from Beltline startups to corporate headquarters.
              Strategic presence across Calgary's business ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {calgaryAreas.map((area) => (
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
              Why Calgary Energy Leaders Choose STENTH 🏆
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Energy Sector Growth</h3>
                <p className="text-slate-300">380% lead growth for energy services, 290% pipeline expansion. Proven Alberta results.</p>
              </div>

              <div className="text-center">
                <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Complete B2B Energy Suite</h3>
                <p className="text-slate-300">LinkedIn campaigns, energy SEO, industrial web design - all optimized for the energy sector.</p>
              </div>

              <div className="text-center">
                <Award className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Alberta Energy Expertise</h3>
                <p className="text-slate-300">Deep understanding of Calgary's energy ecosystem and the Alberta business culture.</p>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Power Calgary's Energy Future? ⚡</h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-orange-400 mr-3" />
                  <span className="text-white">+1 (403) 555-0123</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-orange-400 mr-3" />
                  <span className="text-white">calgary@stenth.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-orange-400 mr-3" />
                  <span className="text-white">Downtown, AB</span>
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  href="/ca/contact"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  🚀 Start Your Calgary Energy Growth
                </Link>
                <div className="text-slate-400 text-sm">
                  Free energy audit ⚡ B2B optimization 🏔️ Alberta expertise
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