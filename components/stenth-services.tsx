import { Button } from "@/components/ui/button"
import { BarChart3, Megaphone, Target, Calendar, Settings } from "lucide-react"
import Link from "next/link"

export default function STENTHServices() {
  const services = [
    {
      icon: BarChart3,
      title: "Brand Strategy & Identity",
      description:
        "Complete brand development from strategy to visual identity, creating memorable brands that convert.",
      href: "/services/branding",
    },
    {
      icon: Megaphone,
      title: "Paid Advertising",
      description: "Data-driven Google Ads, Facebook, and social media campaigns that maximize ROI and drive growth.",
      href: "/services/ads",
    },
    {
      icon: Target,
      title: "Search Engine Optimization",
      description: "Dominate search results with comprehensive SEO strategies that drive organic traffic and leads.",
      href: "/services/seo",
    },
    {
      icon: Calendar,
      title: "Content Marketing",
      description: "Engaging content that educates, entertains, and converts prospects into loyal customers.",
      href: "/services/content",
    },
    {
      icon: Settings,
      title: "Web Development",
      description: "High-converting websites and applications that drive business growth and user engagement.",
      href: "/services/web",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Digital Marketing Services That{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Drive Growth
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="block">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group cursor-pointer">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 leading-relaxed">{service.description}</p>
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
            <Link href="/services">View All Services →</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
