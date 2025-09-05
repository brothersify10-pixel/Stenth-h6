import { Button } from "@/components/ui/button"
import { PenTool, Megaphone, Search, FileText, Layout, BarChart3 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function STENTHServices() {
  const services = [
    {
      icon: PenTool,
      title: "Brand Strategy & Identity",
      description:
        "Complete brand development from strategy to visual identity, creating memorable brands that convert.",
      href: "/services/branding",
      image: "/services/branding.jpg",
      alt: "Brand identity kit on desk",
    },
    {
      icon: Megaphone,
      title: "Paid Advertising",
      description: "Data-driven Google Ads, Facebook, and social media campaigns that maximize ROI and drive growth.",
      href: "/services/ads",
      image: "/services/ads.jpg",
      alt: "Digital ad dashboard",
    },
    {
      icon: Search,
      title: "Search Engine Optimization",
      description: "Dominate search results with comprehensive SEO strategies that drive organic traffic and leads.",
      href: "/services/seo",
      image: "/services/seo.jpg",
      alt: "SEO analytics and SERP",
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description: "Engaging content that educates, entertains, and converts prospects into loyal customers.",
      href: "/services/content",
      image: "/services/content.jpg",
      alt: "Content creation setup",
    },
    {
      icon: Layout,
      title: "Web Development",
      description: "High-converting websites and applications that drive business growth and user engagement.",
      href: "/services/web",
      image: "/services/web.jpg",
      alt: "Web design interface",
    },
    {
      icon: BarChart3,
      title: "Analytics & Tracking",
      description: "Comprehensive data analysis and ROI tracking to optimize your marketing performance.",
      href: "/services/analytics",
      image: "/services/analytics.jpg",
      alt: "Data dashboard charts",
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
            <Link
              key={index}
              href={service.href}
              className="block group focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 rounded-2xl"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="relative">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.alt}
                    width={400}
                    height={267}
                    className="aspect-[3/2] w-full rounded-t-2xl object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <div className="absolute inset-0 rounded-t-2xl bg-gradient-to-tr from-blue-500/20 via-emerald-400/10 to-purple-600/20 mix-blend-overlay pointer-events-none"></div>
                </div>

                <div className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{service.description}</p>
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
            <Link href="/services">View All Services →</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
