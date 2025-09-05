"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { portfolioCases } from "@/lib/cases"

export default function PortfolioModal({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(true)
  const project = portfolioCases[params.slug as keyof typeof portfolioCases]

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    setTimeout(() => router.back(), 150)
  }

  if (!project) {
    return null
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="relative max-w-3xl w-[92vw] max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">{project.title}</h1>
                <p className="text-xl text-cyan-600 mb-4">{project.category}</p>
                <div className="flex flex-wrap gap-2">
                  {project.badges.map((badge, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {project.images.map((image, index) => (
                  <div key={index} className="relative">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={300}
                      height={200}
                      className="w-full aspect-[3/2] object-cover rounded-xl"
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Overview</h3>
                  <p className="text-slate-600">{project.overview}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Goal</h3>
                  <p className="text-slate-600">{project.goal}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Strategy</h3>
                  <p className="text-slate-600">{project.strategy}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Execution</h3>
                  <p className="text-slate-600">{project.execution}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Results</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {project.stats.map((stat, index) => (
                      <div key={index} className="bg-slate-50 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-cyan-600 mb-1">{stat.value}</div>
                        <div className="text-sm font-medium text-slate-900 mb-1">{stat.label}</div>
                        <div className="text-xs text-slate-600">{stat.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Timeline</h4>
                    <p className="text-slate-600">{project.timeline}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-slate-200 text-slate-700 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">FAQ</h3>
                  <div className="space-y-4">
                    {project.faq.map((item, index) => (
                      <div key={index}>
                        <h4 className="font-medium text-slate-900 mb-1">{item.question}</h4>
                        <p className="text-slate-600 text-sm">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-200">
                <Button
                  asChild
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                >
                  <Link href="/start">Start</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                >
                  <Link href="/book">Book a free session</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
