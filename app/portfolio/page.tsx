// This should be in your homepage component where you link to case studies
// Make sure the href matches EXACTLY with the keys in caseStudyData

import Link from "next/link"
import { TrendingUp, Users, DollarSign } from "lucide-react"

const portfolioItems = [
  {
    slug: "stenth-x", // MUST match exactly (not "stenth-s" or "stenth x")
    title: "STENTH X Campaign",
    metric: "300% ROI Growth",
    description: "Multi-channel growth transformation",
    icon: TrendingUp,
  },
  {
    slug: "retail-boost", // MUST match exactly
    title: "Retail Boost Project", 
    metric: "Leads Doubled",
    description: "E-commerce brand overhaul",
    icon: Users,
  },
  {
    slug: "leadgen-saas", // MUST match exactly
    title: "LeadGen SaaS Success",
    metric: "$2M Revenue Growth",
    description: "Fintech marketing automation",
    icon: DollarSign,
  },
]

// In your homepage component:
export default function PortfolioSection() {
  return (
    <section className="py-20">
      <div className="grid md:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <Link
            key={item.slug}
            href={`/portfolio/${item.slug}`} // Correct path structure
            className="block group"
          >
            <div className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition">
              <item.icon className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-3">
                {item.metric}
              </p>
              <p className="text-slate-300">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
