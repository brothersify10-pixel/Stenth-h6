"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Star, TrendingUp, Users, Award, Building2, Globe, Search, Target, BarChart3, Settings, Zap, Shield, Smartphone, Code } from "lucide-react";

export default function TechnicalSEOAuditCanadaPage() {
  const canadianCities = [
    "Toronto", "Vancouver", "Montreal", "Calgary", "Edmonton", "Ottawa",
    "Winnipeg", "Quebec City", "Hamilton", "Kitchener", "London", "Halifax"
  ];

  const auditIncludes = [
    {
      name: "Site Crawl Analysis",
      description: "Comprehensive crawl of your website to identify technical issues",
      icon: Search,
      items: [
        "Crawl errors and broken links",
        "Duplicate content analysis",
        "URL structure optimization",
        "Sitemap analysis",
        "Robots.txt review"
      ]
    },
    {
      name: "Page Speed & Performance",
      description: "Detailed analysis of your website's loading speed and performance",
      icon: Zap,
      items: [
        "Core Web Vitals assessment",
        "Page speed optimization recommendations",
        "Image optimization analysis",
        "Server response time evaluation",
        "CDN and caching recommendations"
      ]
    },
    {
      name: "Mobile & Usability",
      description: "Mobile-first indexing optimization and user experience analysis",
      icon: Smartphone,
      items: [
        "Mobile-friendly test results",
        "Responsive design evaluation",
        "Touch elements analysis",
        "Viewport configuration review",
        "Mobile page speed assessment"
      ]
    },
    {
      name: "Technical Infrastructure",
      description: "Deep dive into your website's technical foundation",
      icon: Settings,
      items: [
        "HTTPS implementation review",
        "Schema markup analysis",
        "Canonical tag optimization",
        "Meta tags and headers review",
        "Internal linking structure"
      ]
    }
  ];

  const commonIssues = [
    {
      issue: "Slow Page Speed",
      impact: "Higher bounce rates, lower rankings",
      solution: "Image optimization, code minification, server upgrades"
    },
    {
      issue: "Crawl Errors",
      impact: "Pages not indexed by Google",
      solution: "Fix broken links, optimize URL structure, update sitemaps"
    },
    {
      issue: "Mobile Issues",
      impact: "Poor mobile rankings and user experience",
      solution: "Responsive design fixes, mobile optimization"
    },
    {
      issue: "Duplicate Content",
      impact: "Diluted search rankings",
      solution: "Canonical tags, content consolidation, redirect implementation"
    },
    {
      issue: "Missing Schema",
      impact: "Lost rich snippet opportunities",
      solution: "Implement structured data markup for better SERP appearance"
    },
    {
      issue: "Security Issues",
      impact: "Google warnings, lost trust",
      solution: "HTTPS implementation, security certificate updates"
    }
  ];

  const auditProcess = [
    {
      step: "1",
      title: "Initial Website Crawl",
      description: "We crawl your entire website using professional SEO tools to identify all technical issues."
    },
    {
      step: "2",
      title: "Performance Analysis",
      description: "Comprehensive analysis of page speed, Core Web Vitals, and mobile performance."
    },
    {
      step: "3",
      title: "Issue Categorization",
      description: "We categorize all issues by priority level: critical, high, medium, and low impact."
    },
    {
      step: "4",
      title: "Detailed Report",
      description: "Receive a comprehensive report with actionable recommendations and implementation guides."
    },
    {
      step: "5",
      title: "Implementation Support",
      description: "Optional: Our team can implement the recommended fixes or guide your developers."
    }
  ];

  const caseStudies = [
    {
      title: "Toronto E-commerce Site - 180% Traffic Increase",
      description: "Fixed critical technical issues that were preventing 60% of pages from being indexed",
      metrics: ["180% organic traffic increase", "60% more pages indexed", "45% faster page speed"]
    },
    {
      title: "Vancouver SaaS Company - 250% Lead Growth",
      description: "Technical SEO audit revealed schema markup opportunities and mobile issues",
      metrics: ["250% increase in organic leads", "85% better mobile performance", "150% more featured snippets"]
    },
    {
      title: "Montreal Manufacturing - Page 1 Rankings",
      description: "Comprehensive technical fixes moved 15 target keywords to page 1",
      metrics: ["15 keywords to page 1", "300% increase in organic visibility", "70% faster site speed"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-violet-500/10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-violet-400 mr-4" />
              <span className="text-violet-400 font-semibold text-lg">Canada-Wide Technical SEO Services</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-400 via-white to-violet-400 bg-clip-text text-transparent">
                Technical SEO Audit Canada
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Comprehensive technical SEO audits for Canadian businesses. Identify and fix
              critical issues holding your website back from top search rankings.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/ca/contact"
                className="px-8 py-4 bg-gradient-to-r from-violet-500 to-violet-600 text-white font-semibold rounded-full hover:from-violet-400 hover:to-violet-500 transition-all duration-300 shadow-lg shadow-violet-500/25"
              >
                Get Free Technical SEO Audit
              </Link>
              <Link
                href="/ca/case-studies"
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View Technical SEO Results
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
              <div className="flex items-center">
                <Award className="w-6 h-6 text-violet-400 mr-2" />
                <span className="text-white">500+ Audits Completed</span>
              </div>
              <div className="flex items-center">
                <BarChart3 className="w-6 h-6 text-violet-400 mr-2" />
                <span className="text-white">Average 200% Traffic Increase</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-6 h-6 text-violet-400 mr-2" />
                <span className="text-white">95% Issue Resolution Rate</span>
              </div>
            </div>

            {/* Canada Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-400 mb-2">500+</div>
                <div className="text-slate-400">Audits Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-400 mb-2">2,000+</div>
                <div className="text-slate-400">Issues Fixed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-400 mb-2">200%</div>
                <div className="text-slate-400">Avg. Traffic Increase</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Canadian Cities */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Technical SEO Audits Across Canada
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Serving businesses from coast to coast with comprehensive technical SEO analysis and optimization.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {canadianCities.map((city, index) => (
              <div
                key={city}
                className="bg-slate-800/50 rounded-lg p-4 text-center border border-slate-700/50 hover:border-violet-500/50 transition-all duration-300"
              >
                <span className="text-white font-medium">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What's Included in Our Technical SEO Audit
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive analysis covering every aspect of your website's technical performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {auditIncludes.map((section, index) => (
              <div
                key={section.name}
                className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-violet-500/50 transition-all duration-300"
              >
                <section.icon className="w-12 h-12 text-violet-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{section.name}</h3>
                <p className="text-slate-300 mb-6">{section.description}</p>

                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <Star className="w-4 h-4 text-violet-400 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Common Technical SEO Issues We Fix
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              These technical problems could be costing you valuable search traffic and rankings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {commonIssues.map((item, index) => (
              <div
                key={item.issue}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50"
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.issue}</h3>
                <div className="mb-4">
                  <span className="text-red-400 font-medium">Impact: </span>
                  <span className="text-slate-300">{item.impact}</span>
                </div>
                <div>
                  <span className="text-violet-400 font-medium">Solution: </span>
                  <span className="text-slate-300">{item.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Technical SEO Audit Process
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Systematic approach to identifying and prioritizing technical SEO improvements.
            </p>
          </div>

          <div className="space-y-8">
            {auditProcess.map((step, index) => (
              <div
                key={step.step}
                className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-violet-500 to-violet-600 rounded-full flex items-center justify-center">
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
              Technical SEO Success Stories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real results from Canadian businesses we've helped with technical SEO improvements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-violet-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-300 mb-6">{study.description}</p>

                <div className="space-y-2">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-violet-400">
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
              Why Canadian Businesses Choose Our Technical SEO Audits
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Code className="w-12 h-12 text-violet-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Expert Analysis</h3>
                <p className="text-slate-300">Deep technical expertise with enterprise-level SEO tools and methodologies.</p>
              </div>

              <div className="text-center">
                <Shield className="w-12 h-12 text-violet-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Comprehensive Reports</h3>
                <p className="text-slate-300">Detailed, actionable reports with clear priorities and implementation guides.</p>
              </div>

              <div className="text-center">
                <Target className="w-12 h-12 text-violet-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
                <p className="text-slate-300">Track record of fixing critical issues and dramatically improving search performance.</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Fix Your Technical SEO Issues?</h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-violet-400 mr-3" />
                  <span className="text-white">+1 888-555-0123</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-violet-400 mr-3" />
                  <span className="text-white">audit@stenth.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-violet-400 mr-3" />
                  <span className="text-white">Serving All of Canada</span>
                </div>
              </div>

              <Link
                href="/ca/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-violet-500 to-violet-600 text-white font-semibold rounded-full hover:from-violet-400 hover:to-violet-500 transition-all duration-300 shadow-lg shadow-violet-500/25"
              >
                Get Your Free Technical SEO Audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}