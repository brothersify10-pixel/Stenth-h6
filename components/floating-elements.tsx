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
      {/* Reduced number of floating elements for better performance */}
      <div
        className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyan-400/40 rounded-full animate-pulse"
        style={{ animationDuration: "2s" }}
      />

      <div
        className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-500/50 rounded-full animate-pulse"
        style={{ animationDelay: "0.8s", animationDuration: "2.5s" }}
      />

      <div
        className="absolute bottom-1/3 left-1/5 w-4 h-4 bg-purple-500/30 rounded-full animate-pulse"
        style={{ animationDelay: "1.2s", animationDuration: "3s" }}
      />

      <div
        className="absolute top-2/3 right-1/4 w-2 h-2 bg-pink-500/40 rounded-full animate-pulse"
        style={{ animationDelay: "1.8s", animationDuration: "2.2s" }}
      />

      <div
        className="absolute bottom-1/4 right-1/6 w-3 h-3 bg-green-400/35 rounded-full animate-pulse"
        style={{ animationDelay: "2.5s", animationDuration: "2.8s" }}
      />

      {/* Gradient overlays for depth */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-cyan-500/5 to-transparent animate-pulse"
           style={{ animationDuration: "4s" }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-purple-500/5 to-transparent animate-pulse"
           style={{ animationDelay: "2s", animationDuration: "4s" }} />
    </div>
  )
}