"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, TrendingUp, Users, Award, Building2, Globe, Search, PenTool, Megaphone, FileText, Layout, BarChart3, DollarSign, Briefcase, Laptop, Target } from "lucide-react";
import STENTHFooter from "@/components/stenth-footer";
import FloatingElements from "@/components/floating-elements";

export default function TorontoDigitalMarketingPage() {
  const services = [
    {
      icon: Search,
      title: "SEO & Organic Growth",
      description: "Toronto-focused SEO strategies that dominate Canada's largest business market and drive qualified leads.",
      features: ["Local Toronto SEO", "National Canadian SEO", "Technical SEO audits", "Bilingual optimization"]
    },
    {
      icon: Megaphone,
      title: "Paid Advertising (Google Ads & Social)",
      description: "High-ROI advertising campaigns targeting Toronto's competitive financial and tech landscape.",
      features: ["Google Ads management", "LinkedIn B2B campaigns", "Facebook & Instagram ads", "Programmatic advertising"]
    },
    {
      icon: Globe,
      title: "Social Media Marketing",
      description: "Professional social media strategies for Toronto's corporate and fintech ecosystems.",
      features: ["LinkedIn strategy", "Corporate social media", "Influencer partnerships", "Content creation"]
    },
    {
      icon: Layout,
      title: "Web Design & Development",
      description: "Enterprise-grade websites that establish authority in Toronto's competitive market.",
      features: ["Professional web design", "E-commerce platforms", "Mobile optimization", "Fintech solutions"]
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description: "Authority-building content that positions your brand as a Toronto market leader.",
      features: ["Thought leadership content", "Industry reports", "Email marketing", "Case study development"]
    },
    {
      icon: BarChart3,
      title: "Tech & Analytics",
      description: "Enterprise-level tracking and optimization for Toronto's competitive business environment.",
      features: ["Advanced analytics", "Performance tracking", "ROI optimization", "Growth hacking"]
    }
  ];

  const socialProof = [
    { metric: "120+", label: "Toronto Businesses Served" },
    { metric: "9+", label: "Years Experience" },
    { metric: "98%", label: "Client Satisfaction Rate" }
  ];

  const torontoAreas = [
    "Financial District", "King West", "Entertainment District", "Distillery District", "Liberty Village", "Queen West",
    "Yorkville", "Bloor West", "The Annex", "Leslieville", "Corktown", "CityPlace",
    "Harbourfront", "St. Lawrence", "Church-Yonge Corridor", "Fashion District"
  ];

  const targetIndustries = [
    { name: "Financial Services", icon: DollarSign, description: "Banks, fintech, investment firms" },
    { name: "Technology", icon: Laptop, description: "SaaS, apps, AI, blockchain" },
    { name: "Professional Services", icon: Briefcase, description: "Law firms, consulting, accounting" },
    { name: "Startups & Scale-ups", icon: Target, description: "Venture-backed, growth companies" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-white/5"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-red-400 mr-4" />
              <span className="text-red-400 font-semibold text-lg">Toronto, Ontario</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent">
                Toronto's Premier
              </span>
              <br />
              Digital Marketing Agency
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Dominating Canada's financial capital with data-driven digital marketing.
              Complete integrated services for Toronto's corporate leaders and innovative tech companies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/ca/contact"
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Scale Your Toronto Business
              </Link>
              <Link
                href="/ca/book"
                className="px-8 py-4 border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-semibold rounded-xl transition-all duration-300"
              >
                Book Strategy Session
              </Link>
            </div>

            {/* Social Proof */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-8">
              {socialProof.map((proof, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">{proof.metric}</div>
                  <div className="text-slate-400 text-sm">{proof.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Toronto Business Focus Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Built for Toronto Business Growth
            </h2>
            <p className="text-xl text-slate-300">
              From Bay Street finance to King West tech, we understand Toronto's
              fast-paced business environment and competitive landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetIndustries.map((industry, index) => (
              <div
                key={industry.name}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 text-center"
              >
                <industry.icon className="w-12 h-12 text-red-400 mx-auto mb-4" />
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
              <span className="bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent">
                Toronto Enterprises
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Integrated services that work together to dominate Toronto's competitive market.
              Bilingual capabilities, Canadian compliance, unified growth strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-xl mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-slate-400 text-sm flex items-center">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></div>
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
              className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300"
            >
              Get Your Toronto Growth Strategy
            </Link>
          </div>
        </div>
      </section>

      {/* Toronto Areas */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Serving All Toronto Business Districts
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From the Financial District to Liberty Village, from Yorkville to the Entertainment District.
              Strategic presence across all Toronto commercial hubs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {torontoAreas.map((area) => (
              <div
                key={area}
                className="bg-slate-800/50 rounded-lg p-4 text-center border border-slate-700/50 hover:border-red-500/50 transition-all duration-300"
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
              Why Toronto Leaders Choose STENTH
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Proven Toronto Results</h3>
                <p className="text-slate-300">Consistent growth for fintech clients. Real results in Canada's most competitive market.</p>
              </div>

              <div className="text-center">
                <Users className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Full-Service Excellence</h3>
                <p className="text-slate-300">Complete integrated team: SEO, ads, social, web, content, and tech - all working in harmony.</p>
              </div>

              <div className="text-center">
                <Award className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Canadian Expertise</h3>
                <p className="text-slate-300">PIPEDA compliant, bilingual capabilities, and deep understanding of Canadian business culture.</p>
              </div>
            </div>


            {/* Final CTA */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Grow Your Toronto Business?</h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-red-400 mr-3" />
                  <span className="text-white">+1 (416) 555-0123</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-red-400 mr-3" />
                  <span className="text-white">toronto@stenth.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-red-400 mr-3" />
                  <span className="text-white">Financial District, ON</span>
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  href="/ca/contact"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  Get Your Toronto Strategy
                </Link>
                <div className="text-slate-400 text-sm">
                  Professional consultation • Comprehensive strategy • Toronto expertise
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