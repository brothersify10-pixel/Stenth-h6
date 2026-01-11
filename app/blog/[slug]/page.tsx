"use client"

import { useEffect, useState } from "react"
import { notFound } from "next/navigation"
import BlogPostHeader from "@/components/blog/blog-post-header"
import BlogPostContent from "@/components/blog/blog-post-content"
import RelatedPosts from "@/components/blog/related-posts"
import type { BlogPost } from "@/lib/blog-types"
import { getBlogPost } from "@/lib/supabase/blog"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [slug, setSlug] = useState<string>("")

  useEffect(() => {
    const loadParams = async () => {
      const resolvedParams = await params
      setSlug(resolvedParams.slug)
    }
    loadParams()
  }, [params])

  useEffect(() => {
    if (!slug) return

    const fetchPost = async () => {
      try {
        const fetchedPost = await getBlogPost(slug)

        if (!fetchedPost) {
          notFound()
          return
        }

        setPost(fetchedPost)

        // Increment view count
        if (fetchedPost.id) {
          await fetch("/api/blog/increment-view", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ postId: fetchedPost.id }),
          }).catch((err) => console.error("Error incrementing views:", err))
        }

        // Update document title
        document.title = `${fetchedPost.title} | Stenth Blog`

        // Update meta description
        const metaDescription = document.querySelector(
          'meta[name="description"]'
        )
        if (metaDescription && fetchedPost.meta_description) {
          metaDescription.setAttribute(
            "content",
            fetchedPost.meta_description
          )
        }
      } catch (error) {
        console.error("Error fetching blog post:", error)
        notFound()
      } finally {
        setIsLoading(false)
      }
    }

    fetchPost()
  }, [slug])

  if (isLoading) {
    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-center items-center py-20">
            <div className="w-10 h-10 border-3 border-slate-300 border-t-cyan-500 rounded-full animate-spin" />
          </div>
        </div>
      </main>
    )
  }

  if (!post) {
    notFound()
    return null
  }

  // Generate JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.featured_image || "https://www.stenth.com/Stenth_Logo-removebg.png",
    datePublished: post.published_at,
    dateModified: post.updated_at,
    author: {
      "@type": "Person",
      name: post.author_name,
    },
    publisher: {
      "@type": "Organization",
      name: "Stenth",
      logo: {
        "@type": "ImageObject",
        url: "https://www.stenth.com/Stenth_Logo-removebg.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.stenth.com/blog/${post.slug}`,
    },
  }

  return (
    <main className="min-h-screen bg-white">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Blog Post Header */}
        <BlogPostHeader post={post} />

        {/* Blog Post Content */}
        <BlogPostContent content={post.content} />

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-10 pt-8 border-t border-slate-200">
            <div className="flex flex-wrap gap-2">
              <span className="text-slate-600 text-sm font-medium mr-2">
                Tags:
              </span>
              {post.tags.map((tagObj) => {
                const tag = tagObj.tag
                return (
                  <a
                    key={tag.id}
                    href={`/blog?tag=${tag.slug}`}
                    className="px-3 py-1 text-sm bg-slate-50 border border-slate-200 text-slate-700 rounded-full hover:border-cyan-600 hover:text-cyan-600 transition-colors"
                  >
                    #{tag.name}
                  </a>
                )
              })}
            </div>
          </div>
        )}

        {/* Related Posts */}
        <RelatedPosts currentPostId={post.id} />
      </div>
    </main>
  )
}
