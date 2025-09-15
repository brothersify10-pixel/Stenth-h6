// app/stenth/page.tsx
"use client"

import FloatingElements from "@/components/floating-elements"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sparkles, Target, TrendingUp, Users, BarChart3, Globe, Rocket, CheckCircle } from "lucide-react"

export default function StenthPage() {
  const faqData = [
    {
      question: "What makes Stenth different?",
      answer: "We don't ship vanity campaigns. We build growth systems: strategy, brand, paid, SEO, content, and analytics tied to ROI. Every campaign is designed to drive measurable business results, not just impressive metrics."
    },
    {
      question: "Which services do you offer?",
      answer: "Brand strategy & identity, SEO & content marketing, paid advertising (Google, Meta, LinkedIn), social media management, web development, and comprehensive analytics & tracking."
    },
    {
      question: "How do you report ROI?",
      answer: "Monthly growth sessions with detailed lead and conversion reports, CPL/CPA tracking, revenue attribution, and clear next actions. You'll always know exactly what's working and what needs optimization."
    },
    {
      question: "What industries do you work with?",
      answer: "We work with B2B SaaS, e-commerce, professional services, fintech, healthcare, and retail businesses. Our data-driven approach adapts to any industry that values measurable growth."
    },
    {
      question: "How quickly do you deliver results?",
      answer: "Most clients see initial improvements within 30-60 days, with significant growth typically achieved within 90 days. We focus on both quick wins and long-term sustainable growth."
    }
  ]

  const services = [
    { icon: Target, title: "Brand Strategy & Identity", desc: "Build a brand that converts prospects into customers" },
    { icon: TrendingUp, title: "SEO & Content", desc: "Dominate search results with strategic content marketing" },
    { icon: BarChart3, title: "Paid Advertising", desc: "Scale profitably across Google, Meta, and LinkedIn" },
    { icon: Users, title: "Social Media", desc: "Build communities that drive business growth" },
    { icon: Globe, title: "Web Development", desc: "High-converting websites and applications" },
    { icon: Rocket, title: "Analytics & Tracking", desc: "Data-driven insights and optimization" }
  ]

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-x-hidden">
      <FloatingElements />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full px-8 py-3 mb-8 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
              <span className="text-sm font-semibold text-cyan-400 tracking-wide">ABOUT STENTH</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
              <span className="block text-white">What is</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Stenth?
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
              We're a digital marketing agency that 
              <span className="text-cyan-400 font-semibold"> builds businesses, not just campaigns</span>. 
              Data-driven strategy, clear execution, and measurable ROI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 text-lg font-semibold shadow-xl shadow-cyan-500/30"
              >
                <Link href="/book">Book Strategy Session</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white bg-transparent px-8 py-4 text-lg font-semibold"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to drive growth and maximize ROI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "ROI-Focused",
                description: "Every campaign is designed to drive measurable business results, not vanity metrics. We track revenue, not just impressions.",
                icon: TrendingUp
              },
              {
                title: "Data-Driven",
                description: "Decisions backed by comprehensive analytics and testing. We optimize based on what the data tells us, not gut feelings.",
                icon: BarChart3
              },
              {
                title: "Growth Systems",
                description: "We build scalable marketing systems that continue working long after implementation. Sustainable growth, not quick fixes.",
                icon: Rocket
              }
            ].map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-300">
              Everything you need to know about working with Stenth
            </p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <details key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
                <summary className="cursor-pointer list-none flex items-center justify-between text-white font-semibold text-lg group-hover:text-cyan-300 transition-colors duration-300">
                  <span>{faq.question}</span>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <div className="w-4 h-0.5 bg-current transition-transform duration-300 group-open:rotate-90"></div>
                    <div className="w-0.5 h-4 bg-current absolute transition-transform duration-300 group-open:rotate-0 group-open:opacity-0"></div>
                  </div>
                </summary>
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-slate-900/90 backdrop-blur-sm border border-slate-800/50 rounded-3xl p-12 text-center shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Build Your Growth System?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can transform your marketing into a predictable revenue engine
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 text-lg font-semibold shadow-xl shadow-cyan-500/30"
                >
                  <Link href="/book">Book Free Consultation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white bg-transparent px-8 py-4 text-lg font-semibold"
                >
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map(faq => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer
              }
            }))
          })
        }}
      />
    </main>
  )
}
