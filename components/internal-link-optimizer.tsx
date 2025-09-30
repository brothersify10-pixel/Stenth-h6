"use client"

import { usePathname } from "next/navigation"
import { siteStructure } from "@/lib/site-structure"
import Link from "next/link"

interface InternalLinkOptimizerProps {
  children: React.ReactNode
}

// This component automatically enhances text content with relevant internal links
export default function InternalLinkOptimizer({ children }: InternalLinkOptimizerProps) {
  const pathname = usePathname()

  // Keywords to automatically link (only for key pages)
  const keywordLinks = [
    { keywords: ['digital marketing', 'online marketing'], href: '/services', priority: 1 },
    { keywords: ['SEO', 'search engine optimization'], href: '/services/seo', priority: 2 },
    { keywords: ['Google Ads', 'paid advertising', 'PPC'], href: '/services/ads', priority: 2 },
    { keywords: ['web development', 'website design'], href: '/services/web', priority: 2 },
    { keywords: ['content marketing'], href: '/services/content', priority: 2 },
    { keywords: ['case studies', 'portfolio', 'success stories'], href: '/portfolio', priority: 1 },
    { keywords: ['book consultation', 'free consultation'], href: '/book', priority: 1 },
    { keywords: ['contact us', 'get in touch'], href: '/contact', priority: 1 },
    { keywords: ['Australia', 'Australian'], href: '/au', priority: 3 },
    { keywords: ['Canada', 'Canadian'], href: '/ca', priority: 3 },
    { keywords: ['Melbourne'], href: '/au/melbourne', priority: 4 },
    { keywords: ['Toronto'], href: '/ca/toronto', priority: 4 },
    { keywords: ['Vancouver'], href: '/ca/vancouver', priority: 4 },
    { keywords: ['Sydney'], href: '/au/sydney', priority: 4 },
  ]

  // Only apply to specific content sections to avoid over-linking
  const shouldOptimize = pathname !== '/' && !pathname.includes('/api/')

  if (!shouldOptimize) {
    return <>{children}</>
  }

  return (
    <div className="internal-link-enhanced">
      {children}

      {/* Quick links section for better internal linking */}
      <div className="mt-8 p-6 bg-slate-800/30 rounded-xl border border-slate-700/50">
        <h4 className="text-white font-semibold mb-4">Related Resources</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
          {siteStructure
            .filter(page => page.priority <= 2 && page.path !== pathname)
            .slice(0, 6)
            .map(page => (
              <Link
                key={page.path}
                href={page.path}
                className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors p-2 rounded hover:bg-slate-700/50"
              >
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></span>
                {page.title}
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}