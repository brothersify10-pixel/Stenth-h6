import { Button } from "@/components/ui/button"
import { BarChart3, Megaphone, Target, Calendar, Settings } from "lucide-react"

export default function STENTHServices() {
  const services = [
    {
      icon: BarChart3,
      title: "Business Analysis & Strategic Planning",
      description:
        "Deep-dive analysis of your business model, market position, and growth opportunities with data-driven strategic roadmaps.",
    },
    {
      icon: Megaphone,
      title: "Brand Recognition & Campaigns",
      description:
        "Comprehensive brand building through targeted campaigns, content strategy, and multi-channel marketing execution.",
    },
    {
      icon: Target,
      title: "Lead Generation & Conversion Tracking",
      description:
        "Systematic lead generation systems with detailed conversion tracking and optimization for maximum ROI.",
    },
    {
      icon: Calendar,
      title: "Monthly Growth Review Sessions",
      description:
        "Regular strategy sessions to review performance, analyze results, and adjust tactics for continuous growth.",
    },
    {
      icon: Settings,
      title: "End-to-End Marketing Management",
      description: "Complete marketing operations management from strategy to execution, monitoring, and optimization.",
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
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-slate-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl"
          >
            View All Services →
          </Button>
        </div>
      </div>
    </section>
  )
}
