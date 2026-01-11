"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import type { BlogPost } from "@/lib/blog-types"
import { formatDate } from "@/lib/blog-helpers"

interface BlogPostHeaderProps {
  post: BlogPost
}

export default function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <header className="mb-10">
      {/* Back Button */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-cyan-600 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Blog
      </Link>

      {/* Categories */}
      {post.categories && post.categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories.map((cat) => {
            const category = cat.category
            return (
              <span
                key={category.id}
                className="px-3 py-1 text-xs font-semibold text-cyan-600 bg-cyan-50 rounded-full"
              >
                {category.name}
              </span>
            )
          })}
        </div>
      )}

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
        {post.title}
      </h1>

      {/* Metadata */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mb-8">
        {/* Author */}
        <div className="flex items-center gap-2">
          {post.author_avatar ? (
            <Image
              src={post.author_avatar}
              alt={post.author_name}
              width={28}
              height={28}
              className="rounded-full"
            />
          ) : (
            <div className="w-7 h-7 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center text-sm font-semibold">
              {post.author_name.charAt(0)}
            </div>
          )}
          <span className="font-medium text-slate-900">{post.author_name}</span>
        </div>

        <span className="text-slate-300">•</span>

        {/* Date */}
        <div className="flex items-center gap-1.5">
          <Calendar className="w-4 h-4" />
          <span>{formatDate(post.published_at)}</span>
        </div>

        {/* Read Time */}
        {post.read_time_minutes && (
          <>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{post.read_time_minutes} min read</span>
            </div>
          </>
        )}
      </div>

      {/* Featured Image */}
      {post.featured_image && (
        <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden mb-10 bg-slate-100">
          <Image
            src={post.featured_image}
            alt={post.featured_image_alt || post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority
          />
        </div>
      )}
    </header>
  )
}
