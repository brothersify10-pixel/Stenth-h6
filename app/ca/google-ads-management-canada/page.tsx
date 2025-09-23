"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Star, TrendingUp, Users, Award, Building2, Globe, Search, Target, BarChart3, DollarSign, Clock, Shield, Smartphone, Monitor, Play } from "lucide-react";

export default function GoogleAdsManagementCanadaPage() {
  const canadianProvinces = [
    "Ontario", "Quebec", "British Columbia", "Alberta", "Manitoba", "Saskatchewan",
    "Nova Scotia", "New Brunswick", "Newfoundland and Labrador", "Prince Edward Island",
    "Northwest Territories", "Nunavut", "Yukon"
  ];

  const adServices = [
    {
      name: "Search Campaign Management",
      description: "Targeted search ads that capture high-intent customers when they're ready to buy",
      icon: Search,
      features: [
        "Keyword research and selection",
        "Ad copy creation and testing",
        "Bid management and optimization",
        "Negative keyword implementation",
        "Landing page optimization guidance"
      ]
    },
    {
      name: "Display & Retargeting Campaigns",
      description: "Visual advertising across the Google Display Network to increase brand awareness",
      icon: Monitor,
      features: [
        "Custom audience creation",
        "Banner ad design and testing",
        "Retargeting campaign setup",
        "Placement optimization",
        "Conversion tracking implementation"
      ]
    },
    {
      name: "Shopping Campaign Optimization",
      description: "Product-focused campaigns that showcase your inventory directly in search results",
      icon: Building2,
      features: [
        "Product feed optimization",
        "Shopping campaign structure",
        "Product group management",
        "Competitive pricing strategies",
        "Performance Max campaigns"
      ]
    },
    {
      name: "YouTube & Video Advertising",
      description: "Engaging video campaigns to reach audiences across YouTube and Google partners",
      icon: Play,
      features: [
        "Video campaign creation",
        "Audience targeting optimization",
        "Video ad formats testing",
        "View-through conversion tracking",
        "Cross-platform campaign integration"
      ]
    }
  ];

  const adChallenges = [
    {
      challenge: "High Cost Per Click",
      impact: "Wasted ad spend and poor ROI",
      solution: "Strategic keyword selection, negative keywords, and bid optimization"
    },
    {
      challenge: "Low Quality Score",
      impact: "Higher costs and lower ad positions",
      solution: "Ad relevance improvement, landing page optimization, and account structure"
    },
    {
      challenge: "Poor Conversion Rates",
      impact: "Traffic without sales or leads",
      solution: "Landing page alignment, ad copy testing, and audience refinement"
    },
    {
      challenge: "Wasted Budget",
      impact: "Clicks from unqualified prospects",
      solution: "Precise targeting, dayparting, and geographic optimization"
    },
    {
      challenge: "Account Suspensions",
      impact: "Complete loss of advertising ability",
      solution: "Policy compliance monitoring and proactive account management"
    },
    {
      challenge: "Competitor Dominance",
      impact: "Lost market share and visibility",
      solution: "Competitive analysis and strategic positioning campaigns"
    }
  ];

  const managementProcess = [
    {
      step: "1",
      title: "Account Audit & Strategy",
      description: "Comprehensive review of existing campaigns and development of data-driven strategy."
    },
    {
      step: "2",
      title: "Campaign Setup & Launch",
      description: "Professional campaign structure with optimized targeting, keywords, and ad copy."
    },
    {
      step: "3",
      title: "Ongoing Optimization",
      description: "Daily monitoring, bid adjustments, and performance improvements based on data."
    },
    {
      step: "4",
      title: "Testing & Refinement",
      description: "Continuous A/B testing of ads, keywords, and landing pages for better results."
    },
    {
      step: "5",
      title: "Reporting & Analysis",
      description: "Detailed monthly reports with insights, recommendations, and strategy adjustments."
    }
  ];

  const caseStudies = [
    {
      title: "Toronto Home Services - 400% ROI Increase",
      description: "Restructured Google Ads campaigns for HVAC company, reducing cost-per-lead by 65%",
      metrics: ["400% ROI improvement", "65% lower cost-per-lead", "300% increase in qualified leads"]
    },
    {
      title: "Vancouver E-commerce - $2M Revenue Growth",
      description: "Shopping campaigns optimization for outdoor gear retailer drove massive sales growth",
      metrics: ["$2M additional revenue", "250% ROAS improvement", "180% increase in conversion rate"]
    },
    {
      title: "Calgary Law Firm - 500% Lead Increase",
      description: "Search and display campaigns generated 500% more qualified legal consultations",
      metrics: ["500% more qualified leads", "40% lower cost-per-acquisition", "300% increase in case value"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-blue-400 mr-4" />
              <span className="text-blue-400 font-semibold text-lg">Certified Google Ads Partner - Canada Wide</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-white to-cyan-400 bg-clip-text text-transparent">
                Google Ads Management Canada
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Professional Google Ads management services for Canadian businesses. Certified Google Partner
              delivering exceptional ROI through strategic campaign optimization and expert account management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/ca/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-full hover:from-blue-400 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-blue-500/25"
              >
                Get Free Google Ads Audit
              </Link>
              <Link
                href="/ca/case-studies"
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View Campaign Results
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
              <div className="flex items-center">
                <Award className="w-6 h-6 text-blue-400 mr-2" />
                <span className="text-white">Google Certified Partner</span>
              </div>
              <div className="flex items-center">
                <BarChart3 className="w-6 h-6 text-blue-400 mr-2" />
                <span className="text-white">Average 350% ROI</span>
              </div>
              <div className="flex items-center">
                <Users className="w-6 h-6 text-blue-400 mr-2" />
                <span className="text-white">500+ Campaigns Managed</span>
              </div>
            </div>

            {/* Canada Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">$50M+</div>
                <div className="text-slate-400">Ad Spend Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">350%</div>
                <div className="text-slate-400">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-slate-400">Campaigns Managed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Canadian Provinces */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Google Ads Management Across All Canadian Provinces
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Certified Google Ads partner serving businesses from coast to coast with expert campaign management and optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {canadianProvinces.map((province, index) => (
              <div
                key={province}
                className="bg-slate-800/50 rounded-lg p-4 text-center border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <span className="text-white font-medium">{province}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Ads Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Google Ads Management Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Full-service Google Ads management covering all campaign types and advertising objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {adServices.map((service, index) => (
              <div
                key={service.name}
                className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <service.icon className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-slate-300 mb-6">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <Star className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Common Google Ads Challenges We Solve
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Overcome these costly Google Ads problems that drain budgets and limit growth potential.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {adChallenges.map((item, index) => (
              <div
                key={item.challenge}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50"
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.challenge}</h3>
                <div className="mb-4">
                  <span className="text-red-400 font-medium">Impact: </span>
                  <span className="text-slate-300">{item.impact}</span>
                </div>
                <div>
                  <span className="text-blue-400 font-medium">Solution: </span>
                  <span className="text-slate-300">{item.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Google Ads Management Process
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Proven methodology for maximizing Google Ads performance and return on investment.
            </p>
          </div>

          <div className="space-y-8">
            {managementProcess.map((step, index) => (
              <div
                key={step.step}
                className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <div className="flex-1 bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Google Ads Success Stories from Canada
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real results from Canadian businesses we've helped achieve exceptional Google Ads performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-300 mb-6">{study.description}</p>

                <div className="space-y-2">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-blue-400">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Why Canadian Businesses Choose Our Google Ads Management
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Award className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Certified Google Partner</h3>
                <p className="text-slate-300">Official Google Partner status with certified specialists and advanced tool access.</p>
              </div>

              <div className="text-center">
                <DollarSign className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Proven ROI Results</h3>
                <p className="text-slate-300">Track record of delivering exceptional return on ad spend across all industries.</p>
              </div>

              <div className="text-center">
                <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Daily Optimization</h3>
                <p className="text-slate-300">Continuous monitoring and optimization to maximize performance and minimize waste.</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Maximize Your Google Ads ROI?</h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-white">+1 888-555-0123</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-white">ads@stenth.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-white">Serving All of Canada</span>
                </div>
              </div>

              <Link
                href="/ca/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-full hover:from-blue-400 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-blue-500/25"
              >
                Get Your Free Google Ads Audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}