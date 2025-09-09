"use client"

import { useEffect, useState } from "react"

const stats = [
  { number: "108+", label: "Projects Completed" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "27+", label: "Team Members" },
  { number: "245k+", label: "Revenue Generated" },
]

export default function About() {
  const [counters, setCounters] = useState(stats.map(() => 0))

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      const target = Number.parseInt(stat.number.replace(/[^0-9]/g, ""))
      const increment = target / 100

      return setInterval(() => {
        setCounters((prev) => {
          const newCounters = [...prev]
          if (newCounters[index] < target) {
            newCounters[index] = Math.min(newCounters[index] + increment, target)
          }
          return newCounters
        })
      }, 20)
    })

    return () => intervals.forEach(clearInterval)
  }, [])

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-white leading-tight">
              The Story Behind{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                STENTH
              </span>
            </h2>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                {"We Don’t Just Market Brands. We Build Businesses."}
                </p>
                
              <p>
               {"The story of STENTH begins with two childhood best friends, Aakash Lakhataria and Ansh Rai. Growing up together, we always shared the same ambition—to create something meaningful, something that could grow into a legacy."}
              </p>

              <p>
                {"Life took us to Canada for our studies, but the dream of building a business never left our conversations. We’d talk for hours about ideas, growth strategies, and possibilities. Then one night in 2022, Aakash had a vivid dream—a name, a vision, and a company: STENTH.\n\nThe next morning, he drove straight to Ansh’s house and said, “I saw our future. It’s called STENTH.”\n\nThat was the moment everything changed."}
              </p>

              <p>
                Our approach combines human creativity with artificial intelligence, delivering personalized experiences
                that resonate with your audience and drive measurable results.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent mb-2">
                    {Math.floor(counters[index])}
                    {stat.number.replace(/[0-9]/g, "")}
                  </div>
                  <div className="text-slate-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img src="modern-digital-marketing-team-collaboration.jpg" alt="Digital Marketing Team" className="rounded-2xl shadow-2xl" />
            </div>

            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-pink-500 to-emerald-400 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
