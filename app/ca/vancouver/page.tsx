"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, TrendingUp, Users, Award, Building2, Globe, Search, PenTool, Megaphone, FileText, Layout, BarChart3, Cpu, Zap, Waves, TreePine } from "lucide-react";
import STENTHFooter from "@/components/stenth-footer";
import FloatingElements from "@/components/floating-elements";

export default function VancouverDigitalMarketingPage() {
  const services = [
    {
      icon: Search,
      title: "SEO & Innovation Marketing",
      description: "Vancouver-focused SEO strategies for tech startups and innovative companies.",
      features: ["Local Vancouver SEO", "Tech industry optimization", "Startup SEO strategies", "Innovation keyword research"]
    },
    {
      icon: Megaphone,
      title: "Paid Advertising (Google Ads & Social)",
      description: "High-growth advertising campaigns targeting Vancouver's tech and innovation ecosystem.",
      features: ["Google Ads for tech", "LinkedIn B2B campaigns", "Startup advertising", "Growth marketing"]
    },
    {
      icon: Globe,
      title: "Social Media Marketing",
      description: "Social strategies that capture Vancouver's tech innovation and outdoor lifestyle.",
      features: ["Tech social media", "Startup community building", "Innovation content", "Lifestyle branding"]
    },
    {
      icon: Layout,
      title: "Web Design & Development",
      description: "Cutting-edge websites for Vancouver's tech companies and innovative businesses.",
      features: ["Tech web design", "SaaS platforms", "Mobile-first design", "Innovation showcases"]
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description: "Innovation-focused content that positions your brand as a Vancouver tech leader.",
      features: ["Tech thought leadership", "Innovation stories", "Startup content", "Video production"]
    },
    {
      icon: BarChart3,
      title: "Tech & Analytics",
      description: "Advanced tracking and optimization for Vancouver's fast-growing tech sector.",
      features: ["Growth analytics", "Tech metrics", "SaaS tracking", "Innovation KPIs"]
    }
  ];

  const socialProof = [
    { metric: "85+", label: "Vancouver Tech Clients" },
    { metric: "6+", label: "Years Experience" },
    { metric: "92%", label: "Client Satisfaction Rate" }
  ];

  const vancouverAreas = [
    "Downtown", "Yaletown", "Gastown", "South Granville", "Kitsilano", "Mount Pleasant",
    "Olympic Village", "Coal Harbour", "West End", "Fairview", "Kerrisdale", "Richmond",
    "Burnaby", "North Vancouver", "West Vancouver", "Tech Quarter"
  ];

  const targetIndustries = [
    { name: "Tech & Software", icon: Cpu, description: "SaaS, apps, AI, blockchain" },
    { name: "Innovation & Startups", icon: Zap, description: "Venture-backed, scale-ups" },
    { name: "Clean Tech", icon: TreePine, description: "Green energy, sustainability" },
    { name: "Marine & Maritime", icon: Waves, description: "Shipping, ports, marine tech" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-transparent to-green-500/10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-teal-400 mr-4" />
              <span className="text-teal-400 font-semibold text-lg">Vancouver, British Columbia</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="bg-gradient-to-r from-teal-400 via-green-500 to-emerald-500 bg-clip-text text-transparent">
                Vancouver's Tech
              </span>
              <br />
              Digital Marketing Agency
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              From downtown tech hubs to North Shore innovation, we fuel Vancouver's startup ecosystem.
              Complete digital marketing for BC's tech capital and innovation leaders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/ca/contact"
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-green-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Scale Your Vancouver Startup
              </Link>
              <Link
                href="/ca/book"
                className="px-8 py-4 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-semibold rounded-xl transition-all duration-300"
              >
                Book Innovation Strategy
              </Link>
            </div>

            {/* Social Proof */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-8">
              {socialProof.map((proof, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-2">{proof.metric}</div>
                  <div className="text-slate-400 text-sm">{proof.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vancouver Tech Focus */}
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              BC's Innovation Marketing Specialists
            </h2>
            <p className="text-xl text-slate-300">
              From Yaletown startups to Richmond tech giants, we understand Vancouver's
              innovation ecosystem and the entrepreneurial spirit that drives BC's tech scene.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetIndustries.map((industry, index) => (
              <div
                key={industry.name}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 text-center"
              >
                <industry.icon className="w-12 h-12 text-teal-400 mx-auto mb-4" />
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
              <span className="bg-gradient-to-r from-teal-400 via-green-500 to-emerald-500 bg-clip-text text-transparent">
                Vancouver Tech
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Integrated services designed for Vancouver's fast-growing tech and innovation sector.
              Scale your startup, grow your SaaS, dominate your market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-green-600 rounded-xl mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-slate-400 text-sm flex items-center">
                      <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></div>
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
              className="inline-block px-8 py-4 bg-gradient-to-r from-teal-500 to-green-600 text-white font-bold rounded-xl hover:from-teal-600 hover:to-green-700 transition-all duration-300"
            >
              Get Your Vancouver Tech Strategy
            </Link>
          </div>
        </div>
      </section>

      {/* Vancouver Areas */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Serving All Vancouver Tech Hubs
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From downtown innovation districts to suburban tech parks, from Gastown startups to Richmond enterprises.
              Strategic presence across Greater Vancouver's tech ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {vancouverAreas.map((area) => (
              <div
                key={area}
                className="bg-slate-800/50 rounded-lg p-4 text-center border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300"
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
              Why Vancouver Tech Chooses STENTH
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Tech Growth Experts</h3>
                <p className="text-slate-300">Consistent growth for SaaS companies and user acquisition for startups. Proven innovation results.</p>
              </div>

              <div className="text-center">
                <Users className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Complete Tech Suite</h3>
                <p className="text-slate-300">Growth hacking, SaaS marketing, startup strategies - all integrated for maximum scale.</p>
              </div>

              <div className="text-center">
                <Award className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Vancouver Innovation Hub</h3>
                <p className="text-slate-300">Deep understanding of BC's tech ecosystem and the innovation culture that drives Vancouver.</p>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Scale Vancouver's Innovation Scene?</h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-teal-400 mr-3" />
                  <span className="text-white">+1 (705) 790-1965</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-teal-400 mr-3" />
                  <span className="text-white">canada@stenth.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-teal-400 mr-3" />
                  <span className="text-white">Downtown, BC</span>
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  href="/ca/contact"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-teal-500 to-green-600 text-white font-bold rounded-xl hover:from-teal-600 hover:to-green-700 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  Start Your Vancouver Tech Growth
                </Link>
                <div className="text-slate-400 text-sm">
                  Professional tech consultation • Startup optimization • Innovation expertise
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
