"use client"

import { useEffect, useState } from "react"

export default function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Network nodes with subtle glow */}
      <div
        className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyan-400 rounded-full opacity-40 animate-pulse shadow-lg shadow-cyan-400/50"
        style={{ animationDelay: "0s", animationDuration: "2s" }}
      />

      <div
        className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-500 rounded-full opacity-50 animate-pulse shadow-lg shadow-blue-500/50"
        style={{ animationDelay: "0.8s", animationDuration: "2.5s" }}
      />

      <div
        className="absolute bottom-1/3 left-1/5 w-4 h-4 bg-purple-500 rounded-full opacity-30 animate-pulse shadow-lg shadow-purple-500/50"
        style={{ animationDelay: "1.2s", animationDuration: "3s" }}
      />

      <div
        className="absolute bottom-1/4 right-1/4 w-2.5 h-2.5 bg-teal-400 rounded-full opacity-45 animate-pulse shadow-lg shadow-teal-400/50"
        style={{ animationDelay: "1.8s", animationDuration: "2.2s" }}
      />

      <div
        className="absolute top-2/3 left-2/3 w-3.5 h-3.5 bg-cyan-300 rounded-full opacity-35 animate-pulse shadow-lg shadow-cyan-300/50"
        style={{ animationDelay: "2.5s", animationDuration: "2.8s" }}
      />

      {/* Flowing connection lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="line1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="line2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        <line
          x1="25%"
          y1="25%"
          x2="66%"
          y2="33%"
          stroke="url(#line1)"
          strokeWidth="1"
          className="animate-pulse"
          style={{ animationDelay: "1s", animationDuration: "3s" }}
        />

        <line
          x1="20%"
          y1="66%"
          x2="75%"
          y2="25%"
          stroke="url(#line2)"
          strokeWidth="1"
          className="animate-pulse"
          style={{ animationDelay: "2s", animationDuration: "4s" }}
        />

        <line
          x1="66%"
          y1="66%"
          x2="25%"
          y2="25%"
          stroke="url(#line1)"
          strokeWidth="0.8"
          className="animate-pulse"
          style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
        />
      </svg>

      {/* Subtle floating data particles */}
      <div
        className="absolute top-1/2 left-1/6 w-1 h-1 bg-cyan-200 rounded-full opacity-60 animate-ping"
        style={{ animationDelay: "0.3s", animationDuration: "4s" }}
      />

      <div
        className="absolute top-3/4 right-1/6 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-50 animate-ping"
        style={{ animationDelay: "1.5s", animationDuration: "3.5s" }}
      />

      <div
        className="absolute bottom-1/2 left-3/4 w-1 h-1 bg-purple-300 rounded-full opacity-55 animate-ping"
        style={{ animationDelay: "2.2s", animationDuration: "4.2s" }}
      />

      {/* Ambient glow effects */}
      <div
        className="absolute top-20 right-20 w-40 h-40 bg-gradient-radial from-cyan-400/5 to-transparent rounded-full animate-pulse"
        style={{ animationDelay: "0s", animationDuration: "6s" }}
      />

      <div
        className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-radial from-purple-500/5 to-transparent rounded-full animate-pulse"
        style={{ animationDelay: "3s", animationDuration: "5s" }}
      />
    </div>
  )
}
