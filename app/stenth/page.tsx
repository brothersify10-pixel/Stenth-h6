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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How We <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Build Growth</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Six integrated services that work together to drive measurable business results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <Target className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Strategy & Brand</h3>
              <p className="text-slate-300">Clear positioning, messaging, and visual identity that resonates with your target market and drives conversions.</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
              <Globe className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">SEO & Content</h3>
              <p className="text-slate-300">Organic growth through strategic SEO, high-converting content, and thought leadership positioning.</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300">
              <Rocket className="w-12 h-12 text-pink-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Paid Advertising</h3>
              <p className="text-slate-300">ROI-focused campaigns across Google, Meta, LinkedIn, and other platforms that matter for your business.</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300">
              <Users className="w-12 h-12 text-green-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Social Media</h3>
              <p className="text-slate-300">Community building, brand awareness, and engagement strategies that convert followers into customers.</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300">
              <Globe className="w-12 h-12 text-yellow-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Web Development</h3>
              <p className="text-slate-300">High-converting websites and landing pages optimized for user experience and search engines.</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <BarChart3 className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Analytics & Tracking</h3>
              <p className="text-slate-300">Comprehensive measurement and reporting that shows exactly how marketing drives business growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Asked Questions</span>
            </h2>
            <p className="text-xl text-slate-300">Everything you need to know about working with Stenth</p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-slate-800/50 rounded-3xl p-12 border border-slate-700/50">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
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