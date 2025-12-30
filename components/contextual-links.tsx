import Link from "next/link"

interface ContextualLinksProps {
  context: 'services' | 'locations' | 'case-studies' | 'about' | 'general'
  className?: string
}

export default function ContextualLinks({ context, className = "" }: ContextualLinksProps) {
  const linkGroups = {
    services: [
      { text: "Google Ads management", href: "/services/ads", description: "Professional paid advertising services" },
      { text: "SEO optimization", href: "/services/seo", description: "Search engine optimization services" },
      { text: "web development", href: "/services/web", description: "Custom website development" },
      { text: "content marketing", href: "/services/content", description: "Strategic content creation" },
      { text: "analytics setup", href: "/services/analytics", description: "Marketing analytics and tracking" },
      { text: "brand strategy", href: "/services/branding", description: "Professional branding services" },
    ],
    locations: [
      { text: "digital marketing in Australia", href: "/au", description: "Marketing services across Australia" },
      { text: "digital marketing in Canada", href: "/ca", description: "Marketing services across Canada" },
      { text: "Melbourne marketing agency", href: "/au/melbourne", description: "Local Melbourne expertise" },
      { text: "Toronto marketing services", href: "/ca/toronto", description: "Toronto-based marketing" },
      { text: "Vancouver SEO", href: "/ca/seo-services-vancouver", description: "SEO services in Vancouver" },
      { text: "Sydney Google Ads", href: "/au/google-ads-sydney", description: "Google Ads management in Sydney" },
    ],
    'case-studies': [
      { text: "STENTH X campaign results", href: "/portfolio/stenth-x", description: "300% ROI growth case study" },
      { text: "retail transformation", href: "/portfolio/retail-boost", description: "E-commerce success story" },
      { text: "SaaS growth strategy", href: "/portfolio/leadgen-saas", description: "$2M revenue growth case" },
      { text: "our portfolio", href: "/portfolio", description: "All our case studies" },
      { text: "Australian success stories", href: "/au/case-studies", description: "AU client testimonials" },
      { text: "Canadian case studies", href: "/ca/case-studies", description: "CA client success stories" },
    ],
    about: [
      { text: "our team", href: "/about", description: "Meet the STENTH team" },
      { text: "our approach", href: "/about", description: "How we work with clients" },
      { text: "get started", href: "/start", description: "Begin your marketing journey" },
      { text: "book a consultation", href: "/book", description: "Free strategy session" },
      { text: "contact us", href: "/contact", description: "Get in touch today" },
    ],
    general: [
      { text: "digital marketing services", href: "/services", description: "Full range of marketing services" },
      { text: "case studies", href: "/portfolio", description: "Proven results and success stories" },
      { text: "free consultation", href: "/book", description: "Schedule your strategy session" },
      { text: "contact our team", href: "/contact", description: "Speak with our experts" },
      { text: "about STENTH", href: "/about", description: "Learn about our agency" },
    ]
  }

  const links = linkGroups[context] || linkGroups.general

  return (
    <div className={`inline-flex flex-wrap gap-2 ${className}`}>
      {links.slice(0, 4).map((link, index) => (
        <Link
          key={link.href}
          href={link.href}
          className="inline-flex items-center px-3 py-1 text-sm bg-slate-800/50 hover:bg-slate-700/50 text-cyan-400 hover:text-cyan-300 rounded-full border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
          title={link.description}
        >
          {link.text}
          <svg className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      ))}
    </div>
  )
}

// Helper component for inline text links
export function InlineLink({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/30 hover:decoration-cyan-300/50 transition-colors duration-300"
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      href={href}
      className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/30 hover:decoration-cyan-300/50 transition-colors duration-300"
    >
      {children}
    </Link>
  )
}
