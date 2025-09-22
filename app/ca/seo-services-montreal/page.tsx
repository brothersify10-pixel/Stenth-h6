"use client";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Star, TrendingUp, Users, Award, Building2, Globe, Search, Languages } from "lucide-react";

export default function MontrealSEOPage() {
  const montrealAreas = [
    "Downtown Montreal", "Plateau-Mont-Royal", "Mile End", "Old Montreal", "Westmount", "Outremont",
    "Saint-Laurent", "Laval", "Longueuil", "Brossard", "Dollard-des-Ormeaux", "Pointe-Claire"
  ];

  const montrealIndustries = [
    {
      name: "Aerospace",
      description: "Major aerospace companies and suppliers in the aerospace capital",
      icon: Globe
    },
    {
      name: "Gaming & Tech",
      description: "Video game studios and tech companies in the creative hub",
      icon: Building2
    },
    {
      name: "Financial Services",
      description: "Banking and insurance companies serving Quebec and beyond",
      icon: Award
    },
    {
      name: "Tourism & Culture",
      description: "Hotels, restaurants, and cultural attractions in North America's French city",
      icon: Users
    }
  ];

  const seoPackages = [
    {
      name: "Bilingual Montreal SEO",
      price: "$3,200 CAD/month",
      description: "Perfect for Montreal businesses targeting English & French customers",
      features: [
        "Bilingual keyword research (EN/FR)",
        "Google My Business optimization (both languages)",
        "Citation building in Quebec directories",
        "French content optimization",
        "Local schema markup",
        "OQLF compliance"
      ],
      ideal: "Retail stores, restaurants, service businesses"
    },
    {
      name: "Enterprise Montreal SEO",
      price: "$6,000 CAD/month",
      description: "Comprehensive SEO for large Montreal corporations",
      features: [
        "Technical SEO audit & implementation",
        "National + provincial keyword targeting",
        "Bilingual content strategy & creation",
        "Link building campaigns",
        "Competitor analysis (EN/FR markets)",
        "Advanced analytics & reporting"
      ],
      ideal: "Fortune 500 companies, large enterprises"
    },
    {
      name: "Quebec E-commerce SEO",
      price: "$4,200 CAD/month",
      description: "Drive online sales for Quebec-based e-commerce",
      features: [
        "Bilingual product page optimization",
        "French category page SEO",
        "Shopping feed optimization",
        "Local inventory ads",
        "Conversion rate optimization",
        "Multi-language SEO"
      ],
      ideal: "Online retailers, Quebec-focused stores"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-blue-400 mr-4" />
              <span className="text-blue-400 font-semibold text-lg">Montréal, Québec</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                SEO Services Montreal
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Dominate Montreal search results in both English and French.
              Expert bilingual SEO strategies for Quebec's largest metropolitan market.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/ca/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-400 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/25"
              >
                Obtenez un audit SEO gratuit / Get Free SEO Audit
              </Link>
              <Link
                href="/ca/case-studies"
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Voir nos succès montréalais
              </Link>
            </div>

            {/* Montreal Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">75+</div>
                <div className="text-slate-400">Montreal Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
                <div className="text-slate-400">Bilingual Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">$8M+</div>
                <div className="text-slate-400">Revenue Generated (CAD)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bilingual Advantage */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Languages className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Bilingual SEO Expertise / Expertise SEO Bilingue
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We understand Quebec's unique linguistic landscape and create SEO strategies that work in both official languages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">🇬🇧 English SEO Montreal</h3>
              <ul className="space-y-3 text-slate-300">
                <li>• Target English-speaking Quebecers and Canadian visitors</li>
                <li>• Optimize for "Montreal" + English keywords</li>
                <li>• Focus on tourism, business, and anglophone communities</li>
                <li>• Compete with Toronto and Vancouver for national searches</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">🇫🇷 Référencement français Montréal</h3>
              <ul className="space-y-3 text-slate-300">
                <li>• Cibler les francophones du Québec et de la francophonie</li>
                <li>• Optimiser pour "Montréal" + mots-clés français</li>
                <li>• Respecter les exigences linguistiques du Québec (OQLF)</li>
                <li>• Dominer les recherches locales francophones</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {montrealAreas.map((area, index) => (
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

      {/* Montreal Industries */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Montreal Industry Expertise
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Deep understanding of Montreal's key business sectors and their unique SEO challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {montrealIndustries.map((industry, index) => (
              <div
                key={industry.name}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 text-center"
              >
                <industry.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                <p className="text-slate-300 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Packages */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Montreal SEO Packages
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Specialized bilingual SEO solutions designed for Montreal businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {seoPackages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 ${
                  index === 0
                    ? 'border-blue-500 ring-2 ring-blue-500/20 scale-105'
                    : 'border-slate-700/50 hover:border-blue-500/50'
                }`}
              >
                {index === 0 && (
                  <div className="text-center mb-4">
                    <span className="inline-block px-4 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>
                <div className="text-3xl font-bold text-blue-400 mb-4">{pkg.price}</div>
                <p className="text-slate-300 mb-6">{pkg.description}</p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <Star className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-sm text-slate-400 mb-6">
                  <strong>Ideal for:</strong> {pkg.ideal}
                </div>

                <Link
                  href="/ca/contact"
                  className={`block w-full text-center px-6 py-3 font-semibold rounded-full transition-all duration-300 ${
                    index === 0
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-400 hover:to-purple-500'
                      : 'border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  Commencer / Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Montreal Businesses Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Why Montreal Businesses Choose Stenth for SEO
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Languages className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">True Bilingual Expertise</h3>
                <p className="text-slate-300">Native-level proficiency in both English and French for authentic content and optimization.</p>
              </div>

              <div className="text-center">
                <Award className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Quebec Law Compliance</h3>
                <p className="text-slate-300">Full understanding of OQLF requirements and Quebec's unique regulatory environment.</p>
              </div>

              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Cultural Understanding</h3>
                <p className="text-slate-300">Deep knowledge of Quebec culture, consumer behavior, and market dynamics.</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Prêt à dominer les résultats de recherche de Montréal?</h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-white">+1 (705) 790-1965</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-white">montreal@stenth.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-white">Serving Greater Montreal</span>
                </div>
              </div>

              <Link
                href="/ca/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-400 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/25"
              >
                Obtenez votre appel stratégique SEO gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}