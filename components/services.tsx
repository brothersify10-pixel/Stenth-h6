"use client"

import { useState, useEffect } from "react"
import { FaSearch, FaChessKnight, FaRocket, FaChartBar, FaArrowUp } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa6" // for arrows between steps

const services = [
  {
    icon: "🚀",
    title: "Digital Strategy",
    description:
      "Comprehensive digital transformation strategies that align with your business goals and drive measurable results.",
    image: "/digital-strategy-planning-meeting.jpg",
  },
  {
    icon: "📱",
    title: "Social Media Marketing",
    description:
      "Engaging social media campaigns that build communities, increase brand awareness, and drive conversions.",
    image: "/social-media-dashboard.png",
  },
  {
    icon: "🎯",
    title: "Performance Marketing",
    description: "Data-driven advertising campaigns optimized for maximum ROI across all digital channels.",
    image: "/performance-marketing-analytics.jpg",
  },
  {
    icon: "🎨",
    title: "Creative Design",
    description: "Stunning visual content and brand experiences that captivate audiences and communicate your message.",
    image: "/creative-design-studio-workspace.jpg",
  },
  {
    icon: "📊",
    title: "Analytics & Insights",
    description:
      "Advanced analytics and reporting that provide actionable insights to optimize your marketing performance.",
    image: "/data-analytics-dashboard.png",
  },
  {
    icon: "🔍",
    title: "SEO Optimization",
    description:
      "Strategic search engine optimization that improves visibility and drives organic traffic to your website.",
    image: "/seo-optimization-search-results.jpg",
  },
]

const workflow = [
  { icon: <FaSearch />, title: "Analyze", desc: "We audit your business & data first." },
  { icon: <FaChessKnight />, title: "Strategize", desc: "We craft ROI-focused strategies." },
  { icon: <FaRocket />, title: "Execute", desc: "We launch and optimize campaigns." },
  { icon: <FaChartBar />, title: "Review", desc: "We track and refine performance." },
  { icon: <FaArrowUp />, title: "Scale", desc: "We scale growth & revenue consistently." },
]

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">

        {/* HOW WE WORK - NOW ON TOP WITH ARROWS */}
        <div className="text-center mb-16">
          <h3 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent mb-6">
            How We Work
          </h3>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            A clear, data-first process designed to deliver growth at every stage.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {workflow.map((step, index) => (
              <div key={index} className="flex items-center">
                {/* Step Box */}
                <div className="flex flex-col items-center bg-slate-900/50 border border-slate-800 rounded-2xl p-6 w-48 hover:border-cyan-500/50 transition-all duration-500">
                  <div className="text-3xl text-cyan-400 mb-4">{step.icon}</div>
                  <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
                  <p className="text-slate-300 text-sm text-center">{step.desc}</p>
                </div>
                {/* Arrow between boxes (only if not the last box) */}
                {index < workflow.length - 1 && (
                  <div className="text-cyan-400 text-2xl mx-2 hidden md:block">
                    <FaArrowRight />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SERVICES SECTION */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent mb-6">
            Our Expertise
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Revolutionary solutions that redefine digital marketing and drive unprecedented growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-slate-300 leading-relaxed mb-6">{service.description}</p>

                <div className="overflow-hidden rounded-xl">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
