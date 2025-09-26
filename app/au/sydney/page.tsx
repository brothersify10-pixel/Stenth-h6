"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, TrendingUp, Users, Award, Building2, Globe, Search, PenTool, Megaphone, FileText, Layout, BarChart3, Briefcase, DollarSign, Target } from "lucide-react";
import STENTHFooter from "@/components/stenth-footer";
import FloatingElements from "@/components/floating-elements";

export default function SydneyDigitalMarketingPage() {
  const services = [
    {
      icon: Search,
      title: "SEO & Organic Growth",
      description: "Sydney-focused SEO strategies that capture Australia's largest market and drive qualified leads.",
      features: ["Local Sydney SEO", "National SEO campaigns", "Technical SEO audits", "Competitor analysis"]
    },
    {
      icon: Megaphone,
      title: "Paid Advertising (Google Ads & Social)",
      description: "High-ROI advertising campaigns targeting Sydney's competitive business landscape.",
      features: ["Google Ads management", "LinkedIn B2B campaigns", "Facebook & Instagram ads", "YouTube advertising"]
    },
    {
      icon: Globe,
      title: "Social Media Marketing",
      description: "Professional social media strategies for Sydney's corporate and startup ecosystems.",
      features: ["LinkedIn strategy", "Corporate social media", "Influencer partnerships", "Content creation"]
    },
    {
      icon: Layout,
      title: "Web Design & Development",
      description: "Corporate-grade websites that establish authority and convert Sydney business professionals.",
      features: ["Professional web design", "E-commerce platforms", "Mobile optimization", "Corporate portals"]
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description: "Authority-building content that positions your brand as a Sydney market leader.",
      features: ["Thought leadership content", "Industry reports", "Email marketing", "Case study development"]
    },
    {
      icon: BarChart3,
      title: "Tech & Analytics",
      description: "Enterprise-level tracking and optimization for Sydney's competitive market.",
      features: ["Advanced analytics", "Performance tracking", "ROI optimization", "Growth hacking"]
    }
  ];

  const socialProof = [
    { metric: "75+", label: "Sydney Businesses Served" },
    { metric: "6+", label: "Years of Experience" },
    { metric: "24/7", label: "Support Available" }
  ];

  const sydneyAreas = [
    "Sydney CBD", "North Sydney", "Parramatta", "Chatswood", "Bondi Junction", "Manly",
    "Surry Hills", "Paddington", "Double Bay", "Mosman", "Neutral Bay", "Pyrmont",
    "Barangaroo", "Circular Quay", "Darling Harbour", "The Rocks"
  ];

  const targetIndustries = [
    { name: "Financial Services", icon: DollarSign, description: "Banks, fintech, investment firms" },
    { name: "Professional Services", icon: Briefcase, description: "Law firms, consulting, accounting" },
    { name: "Corporate Enterprises", icon: Building2, description: "ASX-listed companies, multinationals" },
    { name: "Tech Startups", icon: Target, description: "SaaS, apps, digital platforms" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-blue-400 mr-4" />
              <span className="text-blue-400 font-semibold text-lg">Sydney, New South Wales</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                Sydney's Premier
              </span>
              <br />
              Digital Marketing Agency
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Dominating Australia's largest business market with data-driven digital marketing.
              Complete integrated services for Sydney's corporate leaders and ambitious startups.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/au/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Scale Your Sydney Business
              </Link>
              <Link
                href="/au/book"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold rounded-xl transition-all duration-300"
              >
                Book Strategy Session
              </Link>
            </div>

            {/* Social Proof */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-8">
              {socialProof.map((proof, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{proof.metric}</div>
                  <div className="text-slate-400 text-sm">{proof.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Sydney Business Focus Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Built for Sydney Business Growth
            </h2>
            <p className="text-xl text-slate-300">
              From Circular Quay corporations to Barangaroo startups, we understand Sydney's
              fast-paced business environment and competitive landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetIndustries.map((industry, index) => (
              <div
                key={industry.name}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 text-center"
              >
                <industry.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
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
              <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                Sydney Enterprises
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Integrated services that work together to dominate Sydney's competitive market.
              No silos, no separate vendors - just unified growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-slate-400 text-sm flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
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
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300"
            >
              Get Your Sydney Growth Strategy
            </Link>
          </div>
        </div>
      </section>

      {/* Sydney Areas */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Serving All Sydney Business Districts
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From the CBD to the Northern Beaches, from Parramatta to Bondi Junction.
              Strategic presence across all Sydney commercial hubs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {sydneyAreas.map((area) => (
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

      {/* Why Choose STENTH */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Why Sydney Leaders Choose STENTH
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Proven Sydney Results</h3>
                <p className="text-slate-300">Proven revenue growth for fintech clients. Measurable results in Australia's most competitive market.</p>
              </div>

              <div className="text-center">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Full-Service Excellence</h3>
                <p className="text-slate-300">Complete integrated team: SEO, ads, social, web, content, and tech - all working in harmony.</p>
              </div>

              <div className="text-center">
                <Award className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Experience</h3>
                <p className="text-slate-300">Proven track record with ASX-listed companies and Sydney's leading professional services.</p>
              </div>
            </div>


            {/* Final CTA */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Scale Your Sydney Business?</h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-white">+61 401 712 063 </span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-white">australia@stenth.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-white">Sydney CBD, NSW</span>
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  href="/au/contact"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  Start Your Sydney Growth Strategy
                </Link>
                <div className="text-slate-400 text-sm">
                  Professional consultation • Tailored strategy • Proven results
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
