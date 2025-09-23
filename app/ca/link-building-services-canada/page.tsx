"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Star, TrendingUp, Users, Award, Building2, Globe, Search, Target, BarChart3, Link2, Shield, Eye, CheckCircle, AlertTriangle, Zap, ExternalLink } from "lucide-react";

export default function LinkBuildingServicesCanadaPage() {
  const canadianIndustries = [
    "Technology", "Healthcare", "Finance", "Real Estate", "Manufacturing", "Retail",
    "Tourism", "Energy", "Education", "Legal Services", "Construction", "Agriculture",
    "Mining", "Transportation", "Media & Entertainment", "Professional Services"
  ];

  const linkBuildingServices = [
    {
      name: "High-Authority Link Acquisition",
      description: "Secure valuable backlinks from trusted Canadian websites with high domain authority",
      icon: Link2,
      features: [
        "Domain Authority 50+ websites",
        "Industry-relevant link placement",
        "Editorial link opportunities",
        "Canadian geo-targeted links",
        "Relationship-based link building"
      ]
    },
    {
      name: "Guest Post & Content Outreach",
      description: "Strategic guest posting and content collaboration with Canadian publications",
      icon: ExternalLink,
      features: [
        "Guest post opportunity research",
        "High-quality content creation",
        "Editor relationship building",
        "Canadian media outreach",
        "Byline and bio optimization"
      ]
    },
    {
      name: "Digital PR Link Campaigns",
      description: "Earn natural links through newsworthy content and media coverage",
      icon: Globe,
      features: [
        "Press release distribution",
        "Media relationship building",
        "Newsworthy angle development",
        "Canadian journalist outreach",
        "Crisis management support"
      ]
    },
    {
      name: "Link Audit & Cleanup",
      description: "Comprehensive analysis and cleanup of your existing link profile",
      icon: Shield,
      features: [
        "Toxic link identification",
        "Disavow file creation",
        "Link quality assessment",
        "Penalty recovery support",
        "Ongoing link monitoring"
      ]
    }
  ];

  const linkQualityFactors = [
    {
      factor: "Domain Authority",
      importance: "Links from high DA sites pass more ranking power",
      ourApproach: "We target DA 40+ sites with proven authority"
    },
    {
      factor: "Relevance",
      importance: "Topically relevant links are more valuable",
      ourApproach: "Industry-specific outreach and content alignment"
    },
    {
      factor: "Editorial Placement",
      importance: "Natural editorial links outperform paid placements",
      ourApproach: "Focus on earning genuine editorial mentions"
    },
    {
      factor: "Geographic Relevance",
      importance: "Canadian links boost local search performance",
      ourApproach: "Prioritize .ca domains and Canadian businesses"
    },
    {
      factor: "Anchor Text Diversity",
      importance: "Natural anchor text distribution prevents penalties",
      ourApproach: "Varied, natural anchor text strategies"
    },
    {
      factor: "Link Context",
      importance: "Links within relevant content are more powerful",
      ourApproach: "Strategic placement within topical content"
    }
  ];

  const linkBuildingProcess = [
    {
      step: "1",
      title: "Link Profile Analysis",
      description: "Comprehensive audit of your current backlink profile and competitor analysis."
    },
    {
      step: "2",
      title: "Strategy Development",
      description: "Custom link building strategy based on your industry, goals, and target audience."
    },
    {
      step: "3",
      title: "Prospect Research",
      description: "Identify high-quality Canadian websites and publications for link opportunities."
    },
    {
      step: "4",
      title: "Outreach & Relationship Building",
      description: "Professional outreach to editors, journalists, and website owners across Canada."
    },
    {
      step: "5",
      title: "Link Acquisition & Reporting",
      description: "Secure high-quality links and provide detailed reporting on all link building activities."
    }
  ];

  const caseStudies = [
    {
      title: "Toronto SaaS Company - 300% Domain Authority Increase",
      description: "Strategic link building campaign elevated startup to industry authority status",
      metrics: ["300% domain authority increase", "500% organic traffic growth", "250% more qualified leads"]
    },
    {
      title: "Vancouver E-commerce - Page 1 Domination",
      description: "Link building strategy moved 50+ keywords to page 1 of Google",
      metrics: ["50+ keywords to page 1", "400% increase in organic revenue", "200% improvement in conversion rate"]
    },
    {
      title: "Calgary Law Firm - Local Authority Building",
      description: "Comprehensive link building established firm as top legal authority in Alberta",
      metrics: ["150% increase in local citations", "300% more consultation requests", "80% of target keywords in top 3"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-blue-500/10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-indigo-400 mr-4" />
              <span className="text-indigo-400 font-semibold text-lg">Professional Link Building - Canada Wide</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 via-white to-blue-400 bg-clip-text text-transparent">
                Link Building Services Canada
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Professional link building services for Canadian businesses. Build domain authority,
              improve search rankings, and establish your brand as an industry leader through high-quality backlinks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/ca/contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold rounded-full hover:from-indigo-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-indigo-500/25"
              >
                Get Link Building Strategy
              </Link>
              <Link
                href="/ca/case-studies"
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View Link Building Results
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
              <div className="flex items-center">
                <Award className="w-6 h-6 text-indigo-400 mr-2" />
                <span className="text-white">White-Hat Methods Only</span>
              </div>
              <div className="flex items-center">
                <BarChart3 className="w-6 h-6 text-indigo-400 mr-2" />
                <span className="text-white">Average DA 50+ Links</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-indigo-400 mr-2" />
                <span className="text-white">5000+ Quality Links Built</span>
              </div>
            </div>

            {/* Canada Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">5000+</div>
                <div className="text-slate-400">Links Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">DA 50+</div>
                <div className="text-slate-400">Average Link Quality</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">95%</div>
                <div className="text-slate-400">Client Retention Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Canadian Industries */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Link Building Across All Canadian Industries
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Specialized link building strategies tailored to your industry and Canadian market presence.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {canadianIndustries.map((industry, index) => (
              <div
                key={industry}
                className="bg-slate-800/50 rounded-lg p-4 text-center border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300"
              >
                <span className="text-white font-medium text-sm">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Link Building Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Link Building Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Full-service link building solutions designed to boost your domain authority and search rankings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {linkBuildingServices.map((service, index) => (
              <div
                key={service.name}
                className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300"
              >
                <service.icon className="w-12 h-12 text-indigo-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-slate-300 mb-6">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <Star className="w-4 h-4 text-indigo-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Link Quality Factors */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Makes a High-Quality Link
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Understanding the key factors that determine link quality and how we ensure every link adds value.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {linkQualityFactors.map((item, index) => (
              <div
                key={item.factor}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50"
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.factor}</h3>
                <div className="mb-4">
                  <span className="text-yellow-400 font-medium">Why it matters: </span>
                  <span className="text-slate-300">{item.importance}</span>
                </div>
                <div>
                  <span className="text-indigo-400 font-medium">Our approach: </span>
                  <span className="text-slate-300">{item.ourApproach}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Link Building Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Link Building Process
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Systematic approach to building high-quality links that improve your search rankings and domain authority.
            </p>
          </div>

          <div className="space-y-8">
            {linkBuildingProcess.map((step, index) => (
              <div
                key={step.step}
                className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center">
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
              Link Building Success Stories from Canada
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real results from Canadian businesses we've helped achieve exceptional link building success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-300 mb-6">{study.description}</p>

                <div className="space-y-2">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-indigo-400">
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
              Why Canadian Businesses Choose Our Link Building Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Shield className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">White-Hat Methods</h3>
                <p className="text-slate-300">Ethical link building strategies that comply with Google guidelines and protect your site.</p>
              </div>

              <div className="text-center">
                <Eye className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Quality Over Quantity</h3>
                <p className="text-slate-300">Focus on high-authority, relevant links that provide genuine SEO value.</p>
              </div>

              <div className="text-center">
                <Zap className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Canadian Market Expertise</h3>
                <p className="text-slate-300">Deep understanding of Canadian websites, publications, and link opportunities.</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Build High-Quality Links?</h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-indigo-400 mr-3" />
                  <span className="text-white">+1 888-555-0123</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-indigo-400 mr-3" />
                  <span className="text-white">links@stenth.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-indigo-400 mr-3" />
                  <span className="text-white">Serving All of Canada</span>
                </div>
              </div>

              <Link
                href="/ca/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold rounded-full hover:from-indigo-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-indigo-500/25"
              >
                Get Your Link Building Strategy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}