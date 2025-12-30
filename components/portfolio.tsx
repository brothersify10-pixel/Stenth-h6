"use client"

import { useState } from "react"

const projects = [
  {
    title: "E-commerce Revolution",
    category: "Digital Strategy",
    description:
      "Complete digital transformation for a leading retail brand, resulting in 300% increase in online sales.",
    image: "/modern-ecommerce-website.png",
    results: "+300% Sales Growth",
  },
  {
    title: "Social Media Mastery",
    category: "Social Marketing",
    description: "Viral social media campaign that reached 50M+ users and generated massive brand awareness.",
    image: "/viral-social-media-campaign-dashboard.jpg",
    results: "50M+ Reach",
  },
  {
    title: "Performance Excellence",
    category: "Paid Advertising",
    description: "Data-driven advertising strategy that achieved 500% ROI across multiple digital channels.",
    image: "/performance-marketing-analytics-dashboard.jpg",
    results: "500% ROI",
  },
  {
    title: "Brand Renaissance",
    category: "Creative Design",
    description: "Complete brand redesign and digital presence overhaul for a Fortune 500 company.",
    image: "/luxury-brand-design-portfolio-showcase.jpg",
    results: "+250% Engagement",
  },
  {
    title: "SEO Domination",
    category: "Search Optimization",
    description: "Strategic SEO campaign that achieved #1 rankings for 100+ competitive keywords.",
    image: "/seo-ranking-improvement-charts.jpg",
    results: "#1 Rankings",
  },
  {
    title: "Analytics Innovation",
    category: "Data Science",
    description: "Custom analytics platform that provides real-time insights and predictive modeling.",
    image: "/advanced-analytics-dashboard-visualization.jpg",
    results: "99% Accuracy",
  },
]

const categories = [
  "All",
  "Digital Strategy",
  "Social Marketing",
  "Paid Advertising",
  "Creative Design",
  "Search Optimization",
  "Data Science",
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent mb-6">
            Success Stories
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            Discover how we've transformed businesses and delivered exceptional results across industries
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-cyan-500 to-pink-500 text-white"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
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
                className={`absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 transition-opacity duration-500 ${
                  hoveredProject === index ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
