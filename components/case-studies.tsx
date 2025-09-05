import { Button } from "@/components/ui/button"
import { TrendingUp, Users, DollarSign, Target } from "lucide-react"
import Link from "next/link"

export default function CaseStudies() {
  const caseStudies = [
    {
      company: "STENTH X Campaign",
      industry: "Multi-Channel Growth",
      metric: "300% ROI Growth",
      description: "Transformed lead generation strategy resulting in 5x increase in qualified leads within 4 months.",
      icon: TrendingUp,
      stats: ["300% ROI increase", "5x qualified leads", "4 months timeline"],
      slug: "stenth-x",
    },
    {
      company: "Retail Boost Project",
      industry: "E-commerce",
      metric: "Leads Doubled",
      description:
        "Complete brand overhaul and multi-channel campaign doubled monthly leads and improved conversion rates.",
      icon: Users,
      stats: ["2x monthly leads", "45% conversion boost", "6 months growth"],
      slug: "retail-boost",
    },
    {
      company: "LeadGen SaaS Success",
      industry: "Fintech",
      metric: "$2M Revenue Growth",
      description: "Strategic marketing automation and targeted campaigns generated $2M in additional revenue.",
      icon: DollarSign,
      stats: ["$2M revenue growth", "150% lead quality", "8 months ROI"],
      slug: "leadgen-saas",
    },
    {
      company: "HealthTech Innovations",
      industry: "Healthcare",
      metric: "400% Conversion Rate",
      description: "Data-driven optimization and strategic positioning increased conversion rates by 400%.",
      icon: Target,
      stats: ["400% conversion rate", "3x market reach", "5 months results"],
      slug: "healthtech-innovations",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Real Results.{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Real Growth.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Link key={index} href={`/portfolio/${study.slug}`} className="block">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="flex items-start gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg">
                    <study.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{study.company}</h3>
                    <p className="text-slate-400 text-sm">{study.industry}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                    {study.metric}
                  </span>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">{study.description}</p>

                <div className="space-y-2">
                  {study.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex items-center text-sm text-slate-400">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                      {stat}
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl"
          >
            <Link href="/portfolio">See Success Stories →</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
