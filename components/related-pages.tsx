"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { getRelatedPages } from "@/lib/site-structure"
import { ArrowRight } from "./icons"

interface RelatedPagesProps {
  title?: string
  limit?: number
  className?: string
}

export default function RelatedPages({
  title = "Related Pages",
  limit = 6,
  className = ""
}: RelatedPagesProps) {
  const pathname = usePathname()
  const relatedPages = getRelatedPages(pathname, limit)

  if (relatedPages.length === 0) return null

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-8">{title}</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedPages.map((page) => (
            <Link
              key={page.path}
              href={page.path}
              className="group block p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:border-cyan-500/50"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {page.title}
                </h3>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {page.description}
              </p>

              {/* Category badge */}
              <div className="mt-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  page.category === 'main' ? 'bg-cyan-500/10 text-cyan-400' :
                  page.category === 'services' ? 'bg-purple-500/10 text-purple-400' :
                  page.category === 'location' ? 'bg-green-500/10 text-green-400' :
                  page.category === 'location-service' ? 'bg-blue-500/10 text-blue-400' :
                  'bg-slate-500/10 text-slate-400'
                }`}>
                  {page.country && `${page.country} • `}
                  {page.city && `${page.city} • `}
                  {page.service && `${page.service} • `}
                  {page.category.replace('-', ' ')}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}