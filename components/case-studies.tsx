import { Button } from "@/components/ui/button"
import { TrendingUp, Users, DollarSign } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
      image: "/portfolio/stenth-x/cover.png",
      alt: "Growth dashboard neon charts",
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
      image: "/portfolio/retail-boost/cover.png",
      alt: "Retail store analytics with QR codes",
    },
    {
      company: "LeadGen SaaS Success",
      industry: "Fintech",
      metric: "$2M Revenue Growth",
      description: "Strategic marketing automation and targeted campaigns generated $2M in additional revenue.",
      icon: DollarSign,
      stats: ["$2M revenue growth", "150% lead quality", "8 months ROI"],
      slug: "leadgen-saas",
      image: "/portfolio/leadgen-saas/cover.png",
      alt: "SaaS analytics dashboard",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Link
              key={index}
              href={`/portfolio/${study.slug}`}
              className="block group focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 rounded-2xl"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="relative group">
  <div className="aspect-[16/9] overflow-hidden rounded-xl bg-slate-800/30 border border-slate-700/50">
    <Image
      src={study.image}
      alt={study.alt}
      width={1280}
      height={720}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      quality={85}
      priority={index === 0}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = "/placeholder.svg";
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-emerald-400/10 to-purple-600/20 mix-blend-overlay opacity-100 group-hover:opacity-75 transition-opacity duration-300"></div>
  </div>
</div>

                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <study.icon className="w-6 h-6 text-white" aria-hidden="true" />
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
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            <Link href="/portfolio">See Success Stories →</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
