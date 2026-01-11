"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import type { BlogPost } from "@/lib/blog-types"
import BlogCard from "./blog-card"

interface RelatedPostsProps {
  currentPostId: string
}

export default function RelatedPosts({ currentPostId }: RelatedPostsProps) {
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        const response = await fetch(
          `/api/blog/related?postId=${currentPostId}&limit=3`
        )
        const data = await response.json()
        setRelatedPosts(data)
      } catch (error) {
        console.error("Error fetching related posts:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchRelatedPosts()
  }, [currentPostId])

  if (isLoading) {
    return (
      <div className="mt-16 pt-16 border-t border-slate-700/50">
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    )
  }

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <section className="mt-16 pt-12 border-t border-slate-200">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Related Articles
        </h2>
        <a
          href="/blog"
          className="text-cyan-600 hover:text-cyan-700 flex items-center gap-2 text-sm font-medium transition-colors"
        >
          View all posts
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Related Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}
