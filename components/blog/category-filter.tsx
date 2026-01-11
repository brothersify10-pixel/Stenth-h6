"use client"

import { useRouter, useSearchParams } from "next/navigation"
import type { BlogCategory } from "@/lib/blog-types"

interface CategoryFilterProps {
  categories: BlogCategory[]
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const activeCategory = searchParams.get("category")

  const handleCategoryClick = (categorySlug: string | null) => {
    const params = new URLSearchParams(searchParams.toString())

    if (categorySlug) {
      params.set("category", categorySlug)
    } else {
      params.delete("category")
    }

    // Reset to page 1 when filtering
    params.delete("page")

    router.push(`/blog${params.toString() ? `?${params.toString()}` : ""}`)
  }

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2">
      {/* All Posts Button */}
      <button
        onClick={() => handleCategoryClick(null)}
        className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
          !activeCategory
            ? "bg-cyan-600 text-white"
            : "bg-white border border-slate-200 text-slate-700 hover:border-slate-300"
        }`}
      >
        All Posts
      </button>

      {/* Category Buttons */}
      {categories.map((category) => {
        const isActive = activeCategory === category.slug

        return (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.slug)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
              isActive
                ? "bg-cyan-600 text-white"
                : "bg-white border border-slate-200 text-slate-700 hover:border-slate-300"
            }`}
          >
            {category.name}
            {category.post_count !== undefined && category.post_count > 0 && (
              <span className="ml-1.5 text-xs opacity-75">
                ({category.post_count})
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
