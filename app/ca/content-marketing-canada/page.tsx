"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Star, TrendingUp, Users, Award, Building2, Globe, Search, Target, BarChart3, Edit3, Heart, Share2, Video, Camera, BookOpen, Zap } from "lucide-react";

export default function ContentMarketingCanadaPage() {
  const canadianRegions = [
    "Greater Toronto Area", "Vancouver Metro", "Montreal Region", "Calgary Area", "Edmonton Capital",
    "Ottawa-Gatineau", "Winnipeg Area", "Quebec City", "Hamilton-Burlington", "Kitchener-Waterloo",
    "London Area", "Halifax Regional", "Victoria Area", "Saskatoon Region", "Regina Area"
  ];

  const contentServices = [
    {
      name: "Blog Content & SEO Writing",
      description: "Strategic blog content that drives organic traffic and establishes thought leadership",
      icon: Edit3,
      features: [
        "SEO-optimized blog posts",
        "Industry-specific content",
        "Keyword-focused writing",
        "Content calendar development",
        "Performance tracking and optimization"
      ]
    },
    {
      name: "Social Media Content",
      description: "Engaging social content that builds communities and drives brand awareness",
      icon: Share2,
      features: [
        "Platform-specific content creation",
        "Visual content design",
        "Social media strategy",
        "Community engagement",
        "Influencer collaboration content"
      ]
    },
    {
      name: "Video Content Production",
      description: "Professional video content for maximum engagement across all platforms",
      icon: Video,
      features: [
        "Educational video content",
        "Product demonstration videos",
        "Brand storytelling videos",
        "Live streaming content",
        "Video SEO optimization"
      ]
    },
    {
      name: "Content Strategy & Planning",
      description: "Comprehensive content strategies aligned with business goals and audience needs",
      icon: Target,
      features: [
        "Content audit and analysis",
        "Audience persona development",
        "Content distribution strategy",
        "Editorial calendar creation",
        "ROI measurement and reporting"
      ]
    }
  ];

  const contentChallenges = [
    {
      challenge: "Lack of Consistent Content",
      impact: "Irregular posting hurts brand visibility and audience engagement",
      solution: "Strategic content calendar with consistent publishing schedule"
    },
    {
      challenge: "Poor Content Performance",
      impact: "Low engagement rates and minimal organic reach",
      solution: "Data-driven content optimization and audience-focused topics"
    },
    {
      challenge: "Limited Content Ideas",
      impact: "Repetitive content that fails to engage audiences",
      solution: "Comprehensive content research and trend analysis"
    },
    {
      challenge: "No Clear Content Strategy",
      impact: "Scattered efforts without measurable business impact",
      solution: "Goal-oriented content strategy with clear KPIs and metrics"
    },
    {
      challenge: "Time-Consuming Creation",
      impact: "Internal teams overwhelmed with content demands",
      solution: "Professional content team with streamlined production processes"
    },
    {
      challenge: "Weak Brand Voice",
      impact: "Inconsistent messaging confuses potential customers",
      solution: "Brand voice development and content style guide creation"
    }
  ];

  const contentProcess = [
    {
      step: "1",
      title: "Strategy Development",
      description: "Comprehensive analysis of your brand, audience, and competitors to develop winning content strategy."
    },
    {
      step: "2",
      title: "Content Planning",
      description: "Create detailed content calendar with topics, formats, and distribution channels optimized for your goals."
    },
    {
      step: "3",
      title: "Content Creation",
      description: "Professional content production including writing, design, video, and multimedia content creation."
    },
    {
      step: "4",
      title: "Distribution & Promotion",
      description: "Strategic content distribution across channels to maximize reach and engagement."
    },
    {
      step: "5",
      title: "Performance Analysis",
      description: "Continuous monitoring and optimization based on performance data and audience feedback."
    }
  ];

  const caseStudies = [
    {
      title: "Toronto Tech Startup - 500% Engagement Growth",
      description: "Content strategy transformation drove massive social engagement and brand awareness",
      metrics: ["500% increase in social engagement", "300% growth in blog traffic", "200% more qualified leads"]
    },
    {
      title: "Vancouver Restaurant Chain - Viral Campaign Success",
      description: "Local content marketing campaign generated province-wide brand recognition",
      metrics: ["2M+ social media impressions", "400% increase in location visits", "150% boost in online orders"]
    },
    {
      title: "Calgary B2B Services - Thought Leadership",
      description: "Strategic content positioning established CEO as industry thought leader",
      metrics: ["1M+ content views", "250% increase in speaking opportunities", "180% growth in high-value leads"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-green-500/10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-emerald-400 mr-4" />
              <span className="text-emerald-400 font-semibold text-lg">Strategic Content Marketing - Canada Wide</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-white to-green-400 bg-clip-text text-transparent">
                Content Marketing Canada
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Strategic content marketing services for Canadian businesses. Build brand awareness,
              engage your audience, and drive conversions with compelling content that resonates.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/ca/contact"
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-full hover:from-emerald-400 hover:to-green-500 transition-all duration-300 shadow-lg shadow-emerald-500/25"
              >
                Get Content Strategy Consultation
              </Link>
              <Link
                href="/ca/case-studies"
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View Content Success Stories
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
              <div className="flex items-center">
                <Award className="w-6 h-6 text-emerald-400 mr-2" />
                <span className="text-white">Award-Winning Content</span>
              </div>
              <div className="flex items-center">
                <BarChart3 className="w-6 h-6 text-emerald-400 mr-2" />
                <span className="text-white">Average 400% Engagement Boost</span>
              </div>
              <div className="flex items-center">
                <Users className="w-6 h-6 text-emerald-400 mr-2" />
                <span className="text-white">1000+ Content Pieces Created</span>
              </div>
            </div>

            {/* Canada Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">1000+</div>
                <div className="text-slate-400">Content Pieces</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">400%</div>
                <div className="text-slate-400">Avg. Engagement Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">50M+</div>
                <div className="text-slate-400">Content Views Generated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Canadian Regions */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Content Marketing Services Across Canada
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Creating compelling content that resonates with Canadian audiences from coast to coast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {canadianRegions.map((region, index) => (
              <div
                key={region}
                className="bg-slate-800/50 rounded-lg p-4 text-center border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300"
              >
                <span className="text-white font-medium text-sm">{region}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Content Marketing Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Full-service content marketing covering all formats and platforms to achieve your business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contentServices.map((service, index) => (
              <div
                key={service.name}
                className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300"
              >
                <service.icon className="w-12 h-12 text-emerald-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-slate-300 mb-6">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <Star className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Challenges */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Common Content Marketing Challenges We Solve
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Overcome these content obstacles that prevent brands from reaching their full potential.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {contentChallenges.map((item, index) => (
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
                  <span className="text-emerald-400 font-medium">Solution: </span>
                  <span className="text-slate-300">{item.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Content Marketing Process
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Strategic approach to creating content that drives engagement, builds trust, and generates results.
            </p>
          </div>

          <div className="space-y-8">
            {contentProcess.map((step, index) => (
              <div
                key={step.step}
                className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
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
              Content Marketing Success Stories from Canada
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real results from Canadian brands we've helped achieve remarkable content marketing success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-300 mb-6">{study.description}</p>

                <div className="space-y-2">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-emerald-400">
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
              Why Canadian Brands Choose Our Content Marketing
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <BookOpen className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Strategic Storytelling</h3>
                <p className="text-slate-300">Compelling narratives that connect with your audience and drive action.</p>
              </div>

              <div className="text-center">
                <Zap className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Multi-Channel Expertise</h3>
                <p className="text-slate-300">Content optimized for every platform and channel where your audience engages.</p>
              </div>

              <div className="text-center">
                <Heart className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Audience-First Approach</h3>
                <p className="text-slate-300">Content that truly resonates with Canadian audiences and drives meaningful engagement.</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Transform Your Content Marketing?</h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-emerald-400 mr-3" />
                  <span className="text-white">+1 888-555-0123</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-emerald-400 mr-3" />
                  <span className="text-white">content@stenth.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-emerald-400 mr-3" />
                  <span className="text-white">Serving All of Canada</span>
                </div>
              </div>

              <Link
                href="/ca/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-full hover:from-emerald-400 hover:to-green-500 transition-all duration-300 shadow-lg shadow-emerald-500/25"
              >
                Get Your Content Strategy Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}