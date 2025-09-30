"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { getBreadcrumbs } from "@/lib/site-structure"
import { ChevronDown } from "./icons"

export default function Breadcrumbs() {
  const pathname = usePathname()
  const breadcrumbs = getBreadcrumbs(pathname)

  if (breadcrumbs.length <= 1 || pathname === '/') return null

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 lg:px-8 bg-slate-900/30 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((page, index) => (
            <li key={page.path} className="flex items-center">
              {index > 0 && (
                <ChevronDown className="w-4 h-4 text-slate-500 mx-2 rotate-[-90deg]" />
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-cyan-400 font-medium" aria-current="page">
                  {page.title}
                </span>
              ) : (
                <Link
                  href={page.path}
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  {page.title}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
