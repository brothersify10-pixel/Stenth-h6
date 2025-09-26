"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, TrendingUp, Users, Award, Building2, Globe, Search, PenTool, Megaphone, FileText, Layout, BarChart3, Languages, Palette, Music2, Camera } from "lucide-react";
import STENTHFooter from "@/components/stenth-footer";
import FloatingElements from "@/components/floating-elements";

export default function MontrealDigitalMarketingPage() {
  const services = [
    {
      icon: Search,
      title: "SEO Bilingue & Croissance Organique",
      description: "Stratégies SEO optimisées pour le marché bilingue de Montréal, en français et anglais.",
      features: ["SEO local Montréal", "Optimisation bilingue (FR/EN)", "SEO technique", "Recherche de mots-clés québécois"]
    },
    {
      icon: Megaphone,
      title: "Publicité Payante (Google Ads & Social)",
      description: "Campagnes publicitaires haute performance ciblant les audiences montréalaises bilingues.",
      features: ["Gestion Google Ads", "Publicité Facebook & Instagram", "Campagnes LinkedIn", "Publicité bilingue"]
    },
    {
      icon: Globe,
      title: "Marketing des Médias Sociaux",
      description: "Stratégies sociales créatives qui capturent l'esprit artistique et culturel de Montréal.",
      features: ["Stratégie bilingue", "Contenu créatif", "Gestion communautaire", "Partenariats d'influenceurs"]
    },
    {
      icon: Layout,
      title: "Conception & Développement Web",
      description: "Sites web bilingues qui convertissent et reflètent la créativité montréalaise.",
      features: ["Design web bilingue", "Optimisation mobile", "E-commerce", "Expérience utilisateur"]
    },
    {
      icon: FileText,
      title: "Marketing de Contenu",
      description: "Contenu captivant en français et anglais qui engage les audiences montréalaises.",
      features: ["Stratégie de contenu bilingue", "Rédaction créative", "Marketing vidéo", "Storytelling de marque"]
    },
    {
      icon: BarChart3,
      title: "Tech & Analytiques",
      description: "Suivi avancé et optimisation pour le marché bilingue unique de Montréal.",
      features: ["Analytiques avancées", "Suivi de performance", "Optimisation ROI", "Métriques bilingues"]
    }
  ];

  const socialProof = [
    { metric: "90+", label: "Entreprises Montréalaises Servies" },
    { metric: "7+", label: "Années d'Expérience" },
    { metric: "95%", label: "Taux de Satisfaction Client" }
  ];

  const montrealAreas = [
    "Vieux-Montréal", "Centre-ville", "Plateau Mont-Royal", "Mile End", "Quartier des Spectacles", "Griffintown",
    "Rosemont", "Verdun", "Saint-Laurent", "Outremont", "Westmount", "NDG",
    "Quartier Latin", "Village", "Little Italy", "Saint-Henri"
  ];

  const targetIndustries = [
    { name: "Arts & Culture", icon: Palette, description: "Galeries, théâtres, festivals" },
    { name: "Créatif & Design", icon: Camera, description: "Agences, studios, production" },
    { name: "Musique & Divertissement", icon: Music2, description: "Labels, événements, artistes" },
    { name: "Services Bilingues", icon: Languages, description: "Traduction, éducation, consultation" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-red-500/10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-blue-400 mr-4" />
              <span className="text-blue-400 font-semibold text-lg">Montréal, Québec</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-white to-red-400 bg-clip-text text-transparent">
                Agence Marketing
              </span>
              <br />
              Numérique de Montréal
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Du Vieux-Montréal au Mile End, nous comprenons la créativité montréalaise.
              Services marketing numériques complets bilingues pour la capitale culturelle du Canada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/ca/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-red-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Boostez Votre Entreprise
              </Link>
              <Link
                href="/ca/book"
                className="px-8 py-4 border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-semibold rounded-xl transition-all duration-300"
              >
                Réservez Stratégie Créative
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

      {/* Montreal Culture Focus */}
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Experts du Marché Créatif Montréalais
            </h2>
            <p className="text-xl text-slate-300">
              Festival de Jazz, Quartier des Spectacles, créativité bilingue - nous parlons Montréal
              dans les deux langues officielles et comprenons sa culture unique.
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
              Suite Marketing Complète pour{" "}
              <span className="bg-gradient-to-r from-blue-400 via-white to-red-400 bg-clip-text text-transparent">
                Montréal Créatif
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Services intégrés bilingues conçus pour la créativité montréalaise.
              Français, anglais, ou les deux - nous parlons votre langue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-red-500 rounded-xl mb-6">
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
              href="/ca/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-red-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-red-600 transition-all duration-300"
            >
              Obtenez Votre Stratégie Montréal
            </Link>
          </div>
        </div>
      </section>

      {/* Montreal Areas */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Tous les Quartiers de Montréal
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Du Plateau créatif au centre-ville corporatif, de Griffintown tech au Mile End artistique.
              Expertise locale dans tous les arrondissements montréalais.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {montrealAreas.map((area) => (
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
              Pourquoi Montréal Choisit STENTH
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Croissance Créative Prouvée</h3>
                <p className="text-slate-300">Croissance constante pour agences créatives. Résultats réels dans le marché bilingue unique.</p>
              </div>

              <div className="text-center">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Équipe Bilingue Complète</h3>
                <p className="text-slate-300">SEO, publicités, social, web, contenu et tech - tout intégré en français et anglais.</p>
              </div>

              <div className="text-center">
                <Award className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Expertise Culture Québécoise</h3>
                <p className="text-slate-300">Compréhension profonde de la créativité montréalaise et du marché bilingue du Québec.</p>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Prêt à Développer Votre Présence Créative?</h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-white">+1 (705) 790-1965</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-white">canada@stenth.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-white">Centre-ville, QC</span>
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  href="/ca/contact"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-red-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-red-600 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  Commencez Votre Croissance Montréalaise
                </Link>
                <div className="text-slate-400 text-sm">
                  Consultation professionnelle • Services bilingues • Expertise créative
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
