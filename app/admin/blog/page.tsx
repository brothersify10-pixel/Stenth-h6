"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Plus, Edit, Trash2, Eye, LogOut, FileText } from "lucide-react"
import FloatingElements from "@/components/floating-elements"
import type { BlogPost } from "@/lib/blog-types"
import { formatDate } from "@/lib/blog-helpers"

export default function AdminDashboard() {
  const router = useRouter()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

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
        fetchPosts()
      }
    } catch (error) {
      router.push("/admin/blog/login")
    }
  }

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/admin/posts")
      const data = await response.json()
      setPosts(data)
    } catch (error) {
      console.error("Error fetching posts:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" })
      router.push("/admin/blog/login")
    } catch (error) {
      console.error("Error logging out:", error)
    }
  }

  const handleDelete = async (postId: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) {
      return
    }

    try {
      const response = await fetch(`/api/admin/posts/${postId}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setPosts(posts.filter((post) => post.id !== postId))
      } else {
        alert("Failed to delete post")
      }
    } catch (error) {
      console.error("Error deleting post:", error)
      alert("Failed to delete post")
    }
  }

  if (!isAuthenticated) {
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
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Blog Admin
                </span>
              </h1>
              <p className="text-slate-400">
                Manage your blog posts
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/blog"
                target="_blank"
                className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-slate-300 rounded-lg hover:border-slate-600/50 hover:text-white transition-all flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                View Blog
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-slate-300 rounded-lg hover:border-red-500/50 hover:text-red-400 transition-all flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>

          {/* New Post Button */}
          <div className="mb-6">
            <Link
              href="/admin/blog/new"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-cyan-500/20"
            >
              <Plus className="w-5 h-5" />
              New Post
            </Link>
          </div>

          {/* Posts Table */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl overflow-hidden">
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <div className="w-8 h-8 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-20 px-4">
                <FileText className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No posts yet</h3>
                <p className="text-slate-400 mb-6">Create your first blog post to get started</p>
                <Link
                  href="/admin/blog/new"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300"
                >
                  <Plus className="w-5 h-5" />
                  Create First Post
                </Link>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-900/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                        Title
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                        Published
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                        Views
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-slate-300">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/50">
                    {posts.map((post) => (
                      <tr
                        key={post.id}
                        className="hover:bg-slate-900/30 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            {post.featured_image && (
                              <img
                                src={post.featured_image}
                                alt={post.title}
                                className="w-12 h-12 rounded object-cover"
                              />
                            )}
                            <div>
                              <p className="text-white font-medium">
                                {post.title}
                              </p>
                              <p className="text-slate-400 text-sm">
                                /{post.slug}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-2 py-1 text-xs font-semibold rounded-full ${
                              post.status === "published"
                                ? "bg-green-500/10 text-green-400 border border-green-500/50"
                                : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/50"
                            }`}
                          >
                            {post.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-slate-300 text-sm">
                          {post.published_at
                            ? formatDate(post.published_at)
                            : "-"}
                        </td>
                        <td className="px-6 py-4 text-slate-300 text-sm">
                          {post.views || 0}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2">
                            {post.status === "published" && (
                              <Link
                                href={`/blog/${post.slug}`}
                                target="_blank"
                                className="p-2 text-slate-400 hover:text-cyan-400 transition-colors"
                                title="View post"
                              >
                                <Eye className="w-4 h-4" />
                              </Link>
                            )}
                            <Link
                              href={`/admin/blog/edit/${post.id}`}
                              className="p-2 text-slate-400 hover:text-purple-400 transition-colors"
                              title="Edit post"
                            >
                              <Edit className="w-4 h-4" />
                            </Link>
                            <button
                              onClick={() => handleDelete(post.id, post.title)}
                              className="p-2 text-slate-400 hover:text-red-400 transition-colors"
                              title="Delete post"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
