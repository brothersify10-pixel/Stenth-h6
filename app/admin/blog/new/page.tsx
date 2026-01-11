"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import FloatingElements from "@/components/floating-elements"
import PostEditor from "@/components/admin/post-editor"

export default function NewPostPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/admin/check")
      const data = await response.json()

      if (!data.authenticated) {
        router.push("/admin/blog/login")
      } else {
        setIsAuthenticated(true)
      }
    } catch (error) {
      router.push("/admin/blog/login")
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading || !isAuthenticated) {
    return (
      <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-x-hidden flex items-center justify-center">
        <FloatingElements />
        <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
      </main>
    )
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-x-hidden">
      <FloatingElements />

      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <PostEditor />
      </div>
    </main>
  )
}
