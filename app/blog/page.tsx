"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import FloatingElements from "@/components/floating-elements"
import BlogGrid from "@/components/blog/blog-grid"
import CategoryFilter from "@/components/blog/category-filter"
import BlogPagination from "@/components/blog/blog-pagination"
import type { BlogPost, BlogCategory, BlogPagination as PaginationType } from "@/lib/blog-types"

function BlogContent() {
  const searchParams = useSearchParams()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [categories, setCategories] = useState<BlogCategory[]>([])
  const [pagination, setPagination] = useState<PaginationType>({
    page: 1,
    limit: 12,
    total: 0,
    totalPages: 0,
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const page = parseInt(searchParams.get("page") || "1")
        const category = searchParams.get("category") || ""

        // Build query params
        const params = new URLSearchParams()
        params.set("page", page.toString())
        params.set("limit", "12")
        if (category) params.set("category", category)

        const response = await fetch(`/api/blog/posts?${params.toString()}`)
        const data = await response.json()

        setPosts(data.posts || [])
        setPagination(data.pagination)

        // Fetch categories only once
        if (categories.length === 0) {
          const categoriesResponse = await fetch("/api/blog/categories")
          const categoriesData = await categoriesResponse.json()
          setCategories(categoriesData)
        }
      } catch (error) {
        console.error("Error fetching blog data:", error)
        setPosts([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [searchParams])

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Blog
            </h1>
            <p className="text-lg text-slate-600">
              Expert insights, strategies, and tips to help your business grow online.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        {categories.length > 0 && (
          <div className="mb-10">
            <CategoryFilter categories={categories} />
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="w-10 h-10 border-3 border-slate-300 border-t-cyan-500 rounded-full animate-spin" />
          </div>
        )}

        {/* Blog Grid */}
        {!isLoading && <BlogGrid posts={posts} />}

        {/* Pagination */}
        {!isLoading && posts.length > 0 && (
          <BlogPagination pagination={pagination} />
        )}
      </div>
    </main>
  )
}

export default function BlogPage() {
  return (
    <Suspense
      fallback={
        <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-x-hidden">
          <FloatingElements />
          <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-center items-center py-20">
                <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
              </div>
            </div>
          </div>
        </main>
      }
    >
      <BlogContent />
    </Suspense>
  )
}
