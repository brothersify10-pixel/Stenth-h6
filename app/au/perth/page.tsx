"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, TrendingUp, Users, Award, Building2, Globe, Search, PenTool, Megaphone, FileText, Layout, BarChart3, Pickaxe, Cog, TrendingDown, Linkedin } from "lucide-react";
import STENTHFooter from "@/components/stenth-footer";
import FloatingElements from "@/components/floating-elements";

export default function PerthDigitalMarketingPage() {
  const services = [
    {
      icon: Search,
      title: "SEO & Technical SEO",
      description: "Perth-focused SEO strategies for mining, resources, and industrial B2B companies.",
      features: ["Technical B2B SEO", "Industrial keyword research", "Local Perth SEO", "Competitor analysis"]
    },
    {
      icon: Linkedin,
      title: "LinkedIn & B2B Advertising",
      description: "Professional advertising campaigns targeting Perth's mining and resources professionals.",
      features: ["LinkedIn campaign management", "B2B Google Ads", "Industry targeting", "Lead generation ads"]
    },
    {
      icon: Globe,
      title: "Social Media Marketing",
      description: "Professional social media strategies for Perth's industrial and corporate sectors.",
      features: ["LinkedIn strategy", "Corporate communications", "Industry thought leadership", "B2B content"]
    },
    {
      icon: Layout,
      title: "Web Design & Development",
      description: "Industrial-grade websites that establish authority in Perth's competitive B2B market.",
      features: ["Corporate web design", "B2B platforms", "Industry portals", "Technical showcases"]
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description: "Industry-specific content that positions your brand as a Western Australia market leader.",
      features: ["Technical content strategy", "Industry reports", "Case studies", "B2B email marketing"]
    },
    {
      icon: BarChart3,
      title: "Tech & Analytics",
      description: "Advanced B2B tracking and optimization for Perth's industrial business ecosystem.",
      features: ["B2B analytics", "Lead tracking", "ROI optimization", "Industrial metrics"]
    }
  ];

  const socialProof = [
    { metric: "100+", label: "Perth B2B Clients Served" },
    { metric: "8+", label: "Years Mining Industry Experience" },
    { metric: "24/7", label: "Professional Support" }
  ];

  const perthAreas = [
    "Perth CBD", "West Perth", "East Perth", "Subiaco", "Nedlands", "Claremont",
    "Fremantle", "Joondalup", "Midland", "Rockingham", "Mandurah", "Wanneroo",
    "St Georges Terrace", "Murray Street", "Hay Street", "Kings Park"
  ];

  const targetIndustries = [
    { name: "Mining & Resources", icon: Pickaxe, description: "Iron ore, gold, oil & gas" },
    { name: "Industrial Services", icon: Cog, description: "Engineering, construction, logistics" },
    { name: "Professional B2B", icon: Building2, description: "Law firms, consulting, finance" },
    { name: "Tech & Innovation", icon: TrendingUp, description: "Software, fintech, startups" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-teal-500/10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-emerald-400 mr-4" />
              <span className="text-emerald-400 font-semibold text-lg">Perth, Western Australia</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Perth's B2B
              </span>
              <br />
              Digital Marketing Specialists
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              From mining giants to tech innovators, we understand Western Australia's business ecosystem.
              Complete B2B digital marketing for Perth's industrial and corporate leaders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/au/contact"
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Expand Your Perth Business
              </Link>
              <Link
                href="/au/book"
                className="px-8 py-4 border-2 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white font-semibold rounded-xl transition-all duration-300"
              >
                Book B2B Strategy Session
              </Link>
            </div>

            {/* Social Proof */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-8">
              {socialProof.map((proof, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">{proof.metric}</div>
                  <div className="text-slate-400 text-sm">{proof.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Perth B2B Focus Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Western Australia's B2B Marketing Experts
            </h2>
            <p className="text-xl text-slate-300">
              From mining operations to professional services, we understand Perth's unique
              business landscape and the industrial strength that drives Western Australia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetIndustries.map((industry, index) => (
              <div
                key={industry.name}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 text-center"
              >
                <industry.icon className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
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
              <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Perth B2B
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Integrated B2B services designed for Perth's mining, resources, and industrial sectors.
              Drive qualified leads, partnerships, and business expansion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-slate-400 text-sm flex items-center">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
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
              className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300"
            >
              Get Your Perth B2B Strategy
            </Link>
          </div>
        </div>
      </section>

      {/* Perth Areas */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Serving All Perth Business Districts
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From the corporate CBD to industrial Fremantle, from tech hubs to mining headquarters.
              Strategic presence across Western Australia's business ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {perthAreas.map((area) => (
              <div
                key={area}
                className="bg-slate-800/50 rounded-lg p-4 text-center border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300"
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
              Why Perth B2B Leaders Choose STENTH
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">B2B Growth Experts</h3>
                <p className="text-slate-300">Proven lead growth for mining services and successful B2B expansion. Measurable industrial results.</p>
              </div>

              <div className="text-center">
                <Users className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Complete B2B Suite</h3>
                <p className="text-slate-300">Technical SEO, LinkedIn campaigns, professional web design - all optimized for B2B success.</p>
              </div>

              <div className="text-center">
                <Award className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">WA Business Ecosystem</h3>
                <p className="text-slate-300">Deep understanding of Perth's mining, resources, and industrial business environment.</p>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Expand Your Perth B2B Business?</h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-emerald-400 mr-3" />
                  <span className="text-white">+61 401 712 063  </span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-emerald-400 mr-3" />
                  <span className="text-white">australia@stenth.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-emerald-400 mr-3" />
                  <span className="text-white">Perth CBD, WA</span>
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  href="/au/contact"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  Start Your Perth B2B Expansion
                </Link>
                <div className="text-slate-400 text-sm">
                  Professional B2B consultation • LinkedIn optimization • Industrial expertise
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
