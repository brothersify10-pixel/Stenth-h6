"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Star, TrendingUp, Users, Award, Building2, Globe, Search, Target, BarChart3, ShoppingCart, Package, CreditCard, Truck, DollarSign } from "lucide-react";

export default function EcommerceSEOCanadaPage() {
  const ecommercePlatforms = [
    "Shopify", "WooCommerce", "Magento", "BigCommerce", "Squarespace", "Wix",
    "Prestashop", "OpenCart", "Drupal Commerce", "Custom Platforms"
  ];

  const ecommerceServices = [
    {
      name: "Product Page SEO",
      description: "Optimize individual product pages for maximum visibility and conversions",
      icon: Package,
      features: [
        "Product title optimization",
        "Meta descriptions for products",
        "Product schema markup",
        "Image alt text optimization",
        "Customer review integration",
        "Related product optimization"
      ]
    },
    {
      name: "Category Page Optimization",
      description: "Capture broader search intent with optimized category and collection pages",
      icon: Globe,
      features: [
        "Category page structure",
        "Faceted navigation optimization",
        "Breadcrumb implementation",
        "Category meta optimization",
        "Internal linking strategy",
        "Filter page SEO"
      ]
    },
    {
      name: "Shopping Feed Management",
      description: "Optimize product feeds for Google Shopping and other platforms",
      icon: ShoppingCart,
      features: [
        "Google Merchant Center optimization",
        "Product feed optimization",
        "Shopping campaign support",
        "Product data quality improvement",
        "Feed automation setup",
        "Performance monitoring"
      ]
    },
    {
      name: "E-commerce Technical SEO",
      description: "Technical optimization specific to online stores and shopping platforms",
      icon: BarChart3,
      features: [
        "Site speed optimization",
        "Mobile commerce optimization",
        "Checkout process optimization",
        "SSL and security implementation",
        "Duplicate content management",
        "Pagination optimization"
      ]
    }
  ];

  const ecommerceIndustries = [
    {
      name: "Fashion & Apparel",
      description: "Clothing, accessories, and fashion retailers across Canada",
      icon: Users
    },
    {
      name: "Electronics & Tech",
      description: "Electronics retailers, gadgets, and technology products",
      icon: Globe
    },
    {
      name: "Health & Beauty",
      description: "Cosmetics, supplements, wellness, and beauty products",
      icon: Award
    },
    {
      name: "Home & Garden",
      description: "Furniture, home décor, garden supplies, and household items",
      icon: Building2
    }
  ];

  const ecommerceChallenges = [
    {
      challenge: "Duplicate Product Descriptions",
      impact: "Poor search rankings, thin content penalties",
      solution: "Unique product descriptions, manufacturer content rewriting, product differentiation"
    },
    {
      challenge: "Poor Site Structure",
      impact: "Difficult navigation, poor user experience, low conversions",
      solution: "Intuitive category structure, breadcrumb navigation, clear product hierarchies"
    },
    {
      challenge: "Slow Loading Pages",
      impact: "High bounce rates, abandoned carts, poor mobile performance",
      solution: "Image optimization, code minification, CDN implementation, performance monitoring"
    },
    {
      challenge: "Missing Product Schema",
      impact: "No rich snippets, poor SERP appearance, lost click-through rates",
      solution: "Product schema implementation, review markup, pricing information, availability status"
    },
    {
      challenge: "Thin Category Pages",
      impact: "Poor category rankings, missed traffic opportunities",
      solution: "Enhanced category content, buying guides, filtering optimization, related content"
    },
    {
      challenge: "Mobile Commerce Issues",
      impact: "Poor mobile rankings, lost mobile sales",
      solution: "Mobile-first design, touch-friendly interface, mobile checkout optimization"
    }
  ];

  const caseStudies = [
    {
      title: "Toronto Fashion Store - 340% Revenue Growth",
      description: "Complete e-commerce SEO overhaul for luxury fashion retailer resulted in massive organic growth",
      metrics: ["340% organic revenue increase", "180% more product page views", "65% higher conversion rate"]
    },
    {
      title: "Vancouver Electronics Store - 250% More Sales",
      description: "Product page optimization and technical SEO improvements drove significant sales growth",
      metrics: ["250% increase in organic sales", "400% more shopping traffic", "85% better mobile performance"]
    },
    {
      title: "Montreal Beauty Brand - 500% Organic Growth",
      description: "Comprehensive e-commerce SEO strategy for beauty products achieved exceptional results",
      metrics: ["500% organic traffic growth", "320% more product impressions", "120% higher average order value"]
    }
  ];

  const ecommerceProcess = [
    {
      step: "1",
      title: "E-commerce Audit",
      description: "Comprehensive analysis of your online store's SEO performance and technical setup"
    },
    {
      step: "2",
      title: "Keyword Research",
      description: "Product and category keyword research tailored to your target market and competition"
    },
    {
      step: "3",
      title: "On-Page Optimization",
      description: "Optimize product pages, categories, and site structure for maximum search visibility"
    },
    {
      step: "4",
      title: "Technical Implementation",
      description: "Address technical SEO issues specific to e-commerce platforms and shopping functionality"
    },
    {
      step: "5",
      title: "Performance Monitoring",
      description: "Ongoing monitoring of rankings, traffic, conversions, and revenue growth"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-500/10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <ShoppingCart className="w-8 h-8 text-orange-400 mr-4" />
              <span className="text-orange-400 font-semibold text-lg">E-commerce SEO Experts</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-white to-orange-400 bg-clip-text text-transparent">
                E-commerce SEO Canada
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Drive more online sales with expert e-commerce SEO. Optimize your product pages,
              improve search rankings, and increase organic revenue across Canada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/ca/contact"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:from-orange-400 hover:to-orange-500 transition-all duration-300 shadow-lg shadow-orange-500/25"
              >
                Get Free E-commerce SEO Audit
              </Link>
              <Link
                href="/ca/case-studies"
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View E-commerce Results
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
              <div className="flex items-center">
                <DollarSign className="w-6 h-6 text-orange-400 mr-2" />
                <span className="text-white">$50M+ Revenue Generated</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-6 h-6 text-orange-400 mr-2" />
                <span className="text-white">Average 250% Sales Increase</span>
              </div>
              <div className="flex items-center">
                <Award className="w-6 h-6 text-orange-400 mr-2" />
                <span className="text-white">200+ E-commerce Sites Optimized</span>
              </div>
            </div>

            {/* E-commerce Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">200+</div>
                <div className="text-slate-400">Stores Optimized</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">250%</div>
                <div className="text-slate-400">Avg. Sales Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">$50M+</div>
                <div className="text-slate-400">Revenue Generated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Platforms */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              E-commerce Platforms We Optimize
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Expert SEO services for all major e-commerce platforms and custom online stores.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {ecommercePlatforms.map((platform, index) => (
              <div
                key={platform}
                className="bg-slate-800/50 rounded-lg p-4 text-center border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300"
              >
                <span className="text-white font-medium">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-commerce Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our E-commerce SEO Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive SEO solutions designed specifically for online stores and e-commerce businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ecommerceServices.map((service, index) => (
              <div
                key={service.name}
                className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300"
              >
                <service.icon className="w-12 h-12 text-orange-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-slate-300 mb-6">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <Star className="w-4 h-4 text-orange-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-commerce Industries */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              E-commerce Industries We Serve
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Specialized SEO strategies for different e-commerce verticals and product categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ecommerceIndustries.map((industry, index) => (
              <div
                key={industry.name}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 text-center"
              >
                <industry.icon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                <p className="text-slate-300 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-commerce Challenges */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Common E-commerce SEO Challenges We Solve
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              These issues could be limiting your online store's search visibility and sales potential.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ecommerceChallenges.map((item, index) => (
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
                  <span className="text-orange-400 font-medium">Solution: </span>
                  <span className="text-slate-300">{item.solution}</span>
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
              E-commerce SEO Success Stories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real revenue growth from Canadian e-commerce businesses we've helped optimize.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-slate-300 mb-6">{study.description}</p>

                <div className="space-y-2">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-orange-400">
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

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our E-commerce SEO Process
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Systematic approach to optimizing your online store for maximum search visibility and sales.
            </p>
          </div>

          <div className="space-y-8">
            {ecommerceProcess.map((step, index) => (
              <div
                key={step.step}
                className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
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

      {/* CTA Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Increase Your E-commerce Sales?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Package className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Product Optimization</h3>
                <p className="text-slate-300">Optimize every product page for maximum search visibility and conversions.</p>
              </div>

              <div className="text-center">
                <ShoppingCart className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Shopping Feed Management</h3>
                <p className="text-slate-300">Maximize your Google Shopping and product listing performance.</p>
              </div>

              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Revenue Growth</h3>
                <p className="text-slate-300">Track and optimize for measurable increases in organic revenue.</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Get Your Free E-commerce SEO Analysis</h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-orange-400 mr-3" />
                  <span className="text-white">+1 888-555-0123</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-orange-400 mr-3" />
                  <span className="text-white">ecommerce@stenth.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-orange-400 mr-3" />
                  <span className="text-white">Serving All of Canada</span>
                </div>
              </div>

              <Link
                href="/ca/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:from-orange-400 hover:to-orange-500 transition-all duration-300 shadow-lg shadow-orange-500/25"
              >
                Start Growing Your Online Sales Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
