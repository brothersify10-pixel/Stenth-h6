"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, TrendingUp, Users, Award, Building2, Globe, Search, PenTool, Megaphone, FileText, Layout, BarChart3, Plane, Utensils, Sun, Waves } from "lucide-react";
import STENTHFooter from "@/components/stenth-footer";
import FloatingElements from "@/components/floating-elements";

export default function BrisbaneDigitalMarketingPage() {
  const services = [
    {
      icon: Search,
      title: "SEO & Local Search Optimization",
      description: "Brisbane-focused SEO strategies that capture tourism and local business traffic.",
      features: ["Local Brisbane SEO", "Tourism SEO", "Google My Business optimization", "Local directory listings"]
    },
    {
      icon: Megaphone,
      title: "Paid Advertising (Google Ads & Social)",
      description: "Tourism and hospitality-focused advertising campaigns that drive bookings and foot traffic.",
      features: ["Google Ads for tourism", "Facebook & Instagram ads", "Booking platform integration", "Seasonal campaigns"]
    },
    {
      icon: Globe,
      title: "Social Media Marketing",
      description: "Showcasing Brisbane's lifestyle and attractions through engaging social content.",
      features: ["Tourism social media", "Event promotion", "Lifestyle content", "Influencer partnerships"]
    },
    {
      icon: Layout,
      title: "Web Design & Development",
      description: "Tourism-optimized websites that convert visitors into customers and bookings.",
      features: ["Tourism web design", "Booking systems", "Mobile optimization", "Gallery showcases"]
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description: "Compelling content that highlights Brisbane's attractions and drives tourist engagement.",
      features: ["Tourism content strategy", "Event marketing", "Blog management", "Video production"]
    },
    {
      icon: BarChart3,
      title: "Tech & Analytics",
      description: "Tourism-specific tracking and optimization to maximize bookings and revenue.",
      features: ["Booking analytics", "Tourism metrics", "Conversion tracking", "Seasonal optimization"]
    }
  ];

  const socialProof = [
    { metric: "280%", label: "Lead Growth for Brisbane Hotels" },
    { metric: "450%", label: "Booking Increase for Tours" },
    { metric: "200+", label: "Brisbane Businesses Served" }
  ];

  const brisbaneAreas = [
    "Brisbane CBD", "South Bank", "Fortitude Valley", "West End", "New Farm", "Paddington",
    "Toowong", "Milton", "Spring Hill", "Kangaroo Point", "Woolloongabba", "Teneriffe",
    "Eagle Street Pier", "Queen Street Mall", "Roma Street", "Howard Smith Wharves"
  ];

  const targetIndustries = [
    { name: "Tourism & Hospitality", icon: Plane, description: "Hotels, tours, attractions" },
    { name: "Restaurants & Cafés", icon: Utensils, description: "Dining, entertainment venues" },
    { name: "Lifestyle Services", icon: Sun, description: "Health, beauty, wellness" },
    { name: "Marine & Recreation", icon: Waves, description: "Boating, water sports, recreation" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-orange-500/10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-yellow-400 mr-4" />
              <span className="text-yellow-400 font-semibold text-lg">Brisbane, Queensland</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Brisbane's Tourism
              </span>
              <br />
              Digital Marketing Experts ☀️
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              From South Bank to the Gold Coast, we help Brisbane businesses capture Queensland's
              booming tourism market. Complete digital marketing for hospitality and lifestyle brands.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/au/contact"
                className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-xl hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                🌴 Boost Your Brisbane Business
              </Link>
              <Link
                href="/au/book"
                className="px-8 py-4 border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white font-semibold rounded-xl transition-all duration-300"
              >
                📞 Book Tourism Strategy Call
              </Link>
            </div>

            {/* Social Proof */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-8">
              {socialProof.map((proof, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">{proof.metric}</div>
                  <div className="text-slate-400 text-sm">{proof.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brisbane Tourism Focus Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Queensland's Tourism Marketing Specialists 🏖️
            </h2>
            <p className="text-xl text-slate-300">
              From riverside dining to theme park adventures, we understand Brisbane's tourism
              ecosystem and the lifestyle that draws millions of visitors to Queensland.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetIndustries.map((industry, index) => (
              <div
                key={industry.name}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300 text-center"
              >
                <industry.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
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
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Brisbane Tourism
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Integrated services designed specifically for tourism, hospitality, and lifestyle businesses.
              Drive more bookings, visitors, and revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-slate-400 text-sm flex items-center">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></div>
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
              className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold rounded-xl hover:from-yellow-600 hover:to-orange-700 transition-all duration-300"
            >
              🎯 Get Your Brisbane Tourism Strategy
            </Link>
          </div>
        </div>
      </section>

      {/* Brisbane Areas */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Serving All Brisbane Districts 🌆
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From the bustling CBD to the vibrant South Bank, from trendy West End to scenic New Farm.
              Local expertise across all Brisbane business and tourism areas.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {brisbaneAreas.map((area) => (
              <div
                key={area}
                className="bg-slate-800/50 rounded-lg p-4 text-center border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300"
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
              Why Brisbane Tourism Chooses STENTH 🏆
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Tourism Growth Experts</h3>
                <p className="text-slate-300">280% lead growth for hotels, 450% booking increases for tour operators. Proven tourism results.</p>
              </div>

              <div className="text-center">
                <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Complete Tourism Suite</h3>
                <p className="text-slate-300">Full integration: SEO, ads, social, web, content, and tech - optimized for tourism and bookings.</p>
              </div>

              <div className="text-center">
                <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Queensland Lifestyle Experts</h3>
                <p className="text-slate-300">Deep understanding of Brisbane's tourism appeal and the Queensland energy that attracts visitors.</p>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Capture Brisbane's Tourism Boom? 🌴</h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-yellow-400 mr-3" />
                  <span className="text-white">+61 7 3188 2074</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-yellow-400 mr-3" />
                  <span className="text-white">brisbane@stenth.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-yellow-400 mr-3" />
                  <span className="text-white">Brisbane CBD, QLD</span>
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  href="/au/contact"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold rounded-xl hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  🚀 Start Your Brisbane Tourism Growth
                </Link>
                <div className="text-slate-400 text-sm">
                  Free tourism audit ☀️ Booking optimization 🏖️ Queensland expertise
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