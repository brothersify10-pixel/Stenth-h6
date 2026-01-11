"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Upload, X, Save, Eye, ArrowLeft } from "lucide-react"
import type { BlogPost, BlogCategory } from "@/lib/blog-types"
import { generateSlug } from "@/lib/blog-helpers"

interface PostEditorProps {
  postId?: string
  initialData?: BlogPost
}

export default function PostEditor({ postId, initialData }: PostEditorProps) {
  const router = useRouter()
  const [categories, setCategories] = useState<BlogCategory[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [uploadingImage, setUploadingImage] = useState(false)
  const [error, setError] = useState("")

  // Form state
  const [title, setTitle] = useState(initialData?.title || "")
  const [slug, setSlug] = useState(initialData?.slug || "")
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || "")
  const [content, setContent] = useState(initialData?.content || "")
  const [featuredImage, setFeaturedImage] = useState(initialData?.featured_image || "")
  const [featuredImageAlt, setFeaturedImageAlt] = useState(initialData?.featured_image_alt || "")
  const [authorName, setAuthorName] = useState(initialData?.author_name || "Stenth Team")
  const [metaDescription, setMetaDescription] = useState(initialData?.meta_description || "")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [autoSlug, setAutoSlug] = useState(!postId)

  useEffect(() => {
    fetchCategories()
    if (initialData?.categories) {
      const catIds = initialData.categories.map((c) => c.category.id)
      setSelectedCategories(catIds)
    }
  }, [])

  useEffect(() => {
    if (autoSlug && title) {
      setSlug(generateSlug(title))
    }
  }, [title, autoSlug])

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/blog/categories")
      const data = await response.json()
      setCategories(data)
    } catch (error) {
      console.error("Error fetching categories:", error)
    }
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploadingImage(true)
    setError("")

    try {
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Upload failed")
      }

      const data = await response.json()
      setFeaturedImage(data.url)
    } catch (error: any) {
      setError(error.message || "Failed to upload image")
    } finally {
      setUploadingImage(false)
    }
  }

  const handleSubmit = async (status: "draft" | "published") => {
    setError("")

    // Validation
    if (!title.trim()) {
      setError("Title is required")
      return
    }
    if (!excerpt.trim()) {
      setError("Excerpt is required")
      return
    }
    if (!content.trim()) {
      setError("Content is required")
      return
    }

    setIsLoading(true)

    try {
      const postData = {
        title: title.trim(),
        slug: slug.trim() || generateSlug(title),
        excerpt: excerpt.trim(),
        content: content.trim(),
        featured_image: featuredImage || null,
        featured_image_alt: featuredImageAlt.trim() || title,
        author_name: authorName.trim(),
        status,
        meta_description: metaDescription.trim() || excerpt.trim(),
        categories: selectedCategories,
        tags: [],
      }

      const url = postId ? `/api/admin/posts/${postId}` : "/api/admin/posts"
      const method = postId ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Failed to save post")
      }

      const savedPost = await response.json()

      // Redirect to dashboard or preview
      if (status === "published") {
        router.push(`/blog/${savedPost.slug}`)
      } else {
        router.push("/admin/blog")
      }
    } catch (error: any) {
      setError(error.message || "Failed to save post")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => router.push("/admin/blog")}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </button>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg">
          <p className="text-red-400">{error}</p>
        </div>
      )}

      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 md:p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white mb-6">
          {postId ? "Edit Post" : "Create New Post"}
        </h2>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Title *
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
            placeholder="Enter post title..."
            required
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            URL Slug *
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={slug}
              onChange={(e) => {
                setSlug(e.target.value)
                setAutoSlug(false)
              }}
              className="flex-1 px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              placeholder="post-url-slug"
              required
            />
            <button
              onClick={() => {
                setAutoSlug(true)
                setSlug(generateSlug(title))
              }}
              className="px-4 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors whitespace-nowrap"
            >
              Auto-generate
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            URL: /blog/{slug || "your-slug"}
          </p>
        </div>

        {/* Featured Image */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Featured Image
          </label>
          {featuredImage ? (
            <div className="relative">
              <img
                src={featuredImage}
                alt="Featured"
                className="w-full h-64 object-cover rounded-lg"
              />
              <button
                onClick={() => setFeaturedImage("")}
                className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <label className="block w-full p-8 border-2 border-dashed border-slate-700 rounded-lg hover:border-cyan-400 transition-colors cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                disabled={uploadingImage}
              />
              <div className="text-center">
                <Upload className="w-12 h-12 text-slate-500 mx-auto mb-4" />
                <p className="text-slate-400 mb-2">
                  {uploadingImage ? "Uploading..." : "Click to upload featured image"}
                </p>
                <p className="text-xs text-slate-500">
                  PNG, JPG, WebP or GIF (max 5MB)
                </p>
              </div>
            </label>
          )}
        </div>

        {/* Image Alt Text */}
        {featuredImage && (
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Image Alt Text
            </label>
            <input
              type="text"
              value={featuredImageAlt}
              onChange={(e) => setFeaturedImageAlt(e.target.value)}
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              placeholder="Describe the image..."
            />
          </div>
        )}

        {/* Excerpt */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Excerpt *
          </label>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            rows={3}
            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none"
            placeholder="Brief summary of your post..."
            required
          />
          <p className="text-xs text-slate-400 mt-1">
            {excerpt.length} characters
          </p>
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Content * (Markdown supported)
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={20}
            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none font-mono text-sm"
            placeholder="Write your post content in Markdown..."
            required
          />
          <p className="text-xs text-slate-400 mt-1">
            {content.split(/\s+/).filter(Boolean).length} words
          </p>
        </div>

        {/* Categories */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-3">
            Categories
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {categories.map((category) => (
              <label
                key={category.id}
                className="flex items-center gap-2 p-3 bg-slate-900/50 border border-slate-700 rounded-lg hover:border-cyan-400/50 cursor-pointer transition-colors"
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedCategories([...selectedCategories, category.id])
                    } else {
                      setSelectedCategories(
                        selectedCategories.filter((id) => id !== category.id)
                      )
                    }
                  }}
                  className="w-4 h-4 text-cyan-400 bg-slate-800 border-slate-600 rounded focus:ring-2 focus:ring-cyan-400"
                />
                <span className="text-slate-300 text-sm">{category.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Author */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Author Name
          </label>
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
            placeholder="Author name..."
          />
        </div>

        {/* Meta Description */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Meta Description (SEO)
          </label>
          <textarea
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
            rows={2}
            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none"
            placeholder="SEO description (defaults to excerpt if empty)..."
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 pt-6 border-t border-slate-700">
          <button
            onClick={() => handleSubmit("draft")}
            disabled={isLoading}
            className="px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            Save as Draft
          </button>
          <button
            onClick={() => handleSubmit("published")}
            disabled={isLoading}
            className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            {isLoading ? "Saving..." : "Publish"}
          </button>
        </div>
      </div>
    </div>
  )
}
