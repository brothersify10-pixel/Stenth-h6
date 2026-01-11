"use client"

import Link from "next/link"
import Image from "next/image"
import { Clock, ArrowRight } from "lucide-react"
import type { BlogPost } from "@/lib/blog-types"
import { formatDate } from "@/lib/blog-helpers"

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  const primaryCategory = post.categories?.[0]?.category

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="h-full bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
        {/* Featured Image */}
        {post.featured_image && (
          <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-100">
            <Image
              src={post.featured_image}
              alt={post.featured_image_alt || post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {/* Category */}
          {primaryCategory && (
            <div className="mb-3">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan-600 bg-cyan-50 rounded-full">
                {primaryCategory.name}
              </span>
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-cyan-600 transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Metadata */}
          <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-4">
              <span>{formatDate(post.published_at)}</span>
              {post.read_time_minutes && (
                <>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.read_time_minutes} min read</span>
                  </div>
                </>
              )}
            </div>
            <ArrowRight className="w-4 h-4 text-cyan-600 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </article>
    </Link>
  )
}
