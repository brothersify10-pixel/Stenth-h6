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
              <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">STENTH</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
              <p>{"We don’t just market brands. We build businesses that last."}</p>

              <p>
                {
                  "The story of STENTH is, at its core, the story of two best friends chasing a dream. We—Aakash Lakhataria and Ansh Rai—grew up side by side, always talking about the future, always dreaming of creating something bigger than ourselves."
                }
              </p>

              <p>
                {
                  "Life took us abroad to Canada for our studies, but no matter how busy we got, the conversations never stopped. Nights turned into mornings as we sketched out ideas, imagined possibilities, and kept coming back to the same belief: one day, we’ll build something of our own."
                }
              </p>

              <p>
                {
                  "In 2022, that belief finally took shape. One night, Aakash had a dream—so vivid he woke up knowing exactly what to do. The dream gave us a name: STENTH. The very next morning, he drove to Ansh’s house, and with a fire in his eyes said, “I saw our future. It’s called STENTH.” From that moment on, it was real."
                }
              </p>

              <p>{"Since then, we’ve poured our hearts, skills, and experiences into bringing STENTH to life:"}</p>

              {/* Bullet points */}
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>
                  <strong>Ansh:</strong> Global expertise in Artificial Intelligence, Computer Science, and Marketing
                  Technology through projects across Canada, Australia, the Dominican Republic, and the US.
                </li>
                <li>
                  <strong>Aakash:</strong> Deep experience in AI-driven marketing, business analytics, and project
                  management, shaped by ventures like Bellacana and The Moon Stadium, along with direct collaboration
                  with Google Ads experts.
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent mb-2">
                    {Math.floor(counters[index])}
                    {stat.number.replace(/[0-9]/g, "")}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="modern-digital-marketing-team-collaboration.jpg"
                alt="Digital Marketing Team"
                className="rounded-2xl shadow-2xl"
              />
            </div>

            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-pink-500 to-emerald-400 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
