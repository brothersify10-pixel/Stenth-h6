"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PenTool, Megaphone, Search, FileText, Layout, BarChart3 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import FloatingElements from "@/components/floating-elements"

const services = [
  {
    title: "Brand Strategy & Identity",
    description:
      "Complete brand development from positioning to visual identity that resonates with your target audience.",
    icon: PenTool,
    image: "/services/branding.jpg",
    href: "/services/branding",
  },
  {
    title: "Paid Advertising",
    description: "Data-driven campaigns across Google, Meta, and LinkedIn that maximize ROI and drive qualified leads.",
    icon: Megaphone,
    image: "/services/ads.jpg",
    href: "/services/ads",
  },
  {
    title: "Search Engine Optimization",
    description: "Technical and content SEO strategies that improve rankings and drive organic traffic growth.",
    icon: Search,
    image: "/services/seo.jpg",
    href: "/services/seo",
  },
  {
    title: "Content Marketing",
    description: "Strategic content creation that educates, engages, and converts your audience at every funnel stage.",
    icon: FileText,
    image: "/services/content.jpg",
    href: "/services/content",
  },
  {
    title: "Web Development",
    description: "High-converting websites and landing pages optimized for performance, SEO, and user experience.",
    icon: Layout,
    image: "/services/web.jpg",
    href: "/services/web",
  },
  {
    title: "Analytics & Optimization",
    description: "Advanced tracking, reporting, and continuous optimization to maximize your marketing performance.",
    icon: BarChart3,
    image: "/services/analytics.jpg",
    href: "/services/analytics",
  },
]

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-x-hidden">
      <FloatingElements />

      <div className="relative z-10 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital marketing solutions designed to accelerate your business growth
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="group bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-emerald-400/10 to-purple-600/20 mix-blend-overlay"></div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className="h-6 w-6 text-cyan-400" aria-hidden="true" />
                      <CardTitle className="text-white group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-slate-300">{service.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                    >
                      <Link href={service.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Transform
              </span>{" "}
              Your Business?
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can accelerate your growth and maximize your ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/start">Get Started</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
