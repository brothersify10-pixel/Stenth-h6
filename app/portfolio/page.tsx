"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import FloatingElements from "@/components/floating-elements"

const projects = [
  {
    slug: "stenth-x",
    title: "STENTH X Campaign",
    category: "Multi-Channel Growth",
    description: "Multi-channel experiment (Meta/Google/YouTube). +58% MQLs, -21% CAC.",
    image: "/portfolio/stenth-x/cover.jpg",
    results: "+58% MQLs",
  },
  {
    slug: "retail-boost",
    title: "Retail Boost Project",
    category: "Local SEO",
    description: "Local SEO + LP + in-store QR. Measurable footfall lift in 8 weeks.",
    image: "/portfolio/retail-boost/cover.jpg",
    results: "Footfall +40%",
  },
  {
    slug: "leadgen-saas",
    title: "LeadGen SaaS Success",
    category: "Creative Testing",
    description: "Creative testing + search restructure. -32% CAC, +44% pipeline.",
    image: "/portfolio/leadgen-saas/cover.jpg",
    results: "-32% CAC",
  },
]

const categories = ["All", "Multi-Channel Growth", "Local SEO", "Creative Testing"]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-x-hidden">
      <FloatingElements />

      <section id="portfolio" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
              Real results from our data-driven approach to digital marketing
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Link
                key={index}
                href={`/portfolio/${project.slug}`}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 block"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={256}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.results}
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-cyan-400 text-sm font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">{project.description}</p>
                </div>

                <div
                  className={`absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 transition-opacity duration-500 pointer-events-none ${
                    hoveredProject === index ? "opacity-100" : "opacity-0"
                  }`}
                ></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
