// Supabase queries for Stenth Blog

import { supabaseAdmin } from "./index"
import type {
  BlogPost,
  BlogCategory,
  BlogTag,
  BlogPostsResponse,
  GetBlogPostsParams,
} from "../blog-types"

/**
 * Fetch blog posts with pagination and filtering
 */
export async function getBlogPosts({
  page = 1,
  limit = 12,
  category,
  tag,
  search,
}: GetBlogPostsParams = {}): Promise<BlogPostsResponse> {
  try {
    // Start with base query
    let query = supabaseAdmin
      .from("blog_posts")
      .select(
        `
        *,
        categories:blog_post_categories(
          category:blog_categories(*)
        ),
        tags:blog_post_tags(
          tag:blog_tags(*)
        )
      `,
        { count: "exact" }
      )
      .eq("status", "published")
      .lte("published_at", new Date().toISOString())
      .order("published_at", { ascending: false })

    // Apply category filter if provided
    if (category) {
      // Get category ID first
      const { data: categoryData } = await supabaseAdmin
        .from("blog_categories")
        .select("id")
        .eq("slug", category)
        .single()

      if (categoryData) {
        const { data: postIds } = await supabaseAdmin
          .from("blog_post_categories")
          .select("post_id")
          .eq("category_id", categoryData.id)

        if (postIds && postIds.length > 0) {
          query = query.in(
            "id",
            postIds.map((p) => p.post_id)
          )
        } else {
          // No posts found for this category
          return {
            posts: [],
            pagination: {
              page,
              limit,
              total: 0,
              totalPages: 0,
            },
          }
        }
      }
    }

    // Apply tag filter if provided
    if (tag) {
      const { data: tagData } = await supabaseAdmin
        .from("blog_tags")
        .select("id")
        .eq("slug", tag)
        .single()

      if (tagData) {
        const { data: postIds } = await supabaseAdmin
          .from("blog_post_tags")
          .select("post_id")
          .eq("tag_id", tagData.id)

        if (postIds && postIds.length > 0) {
          query = query.in(
            "id",
            postIds.map((p) => p.post_id)
          )
        } else {
          return {
            posts: [],
            pagination: {
              page,
              limit,
              total: 0,
              totalPages: 0,
            },
          }
        }
      }
    }

    // Apply search filter if provided
    if (search) {
      query = query.or(
        `title.ilike.%${search}%,excerpt.ilike.%${search}%,content.ilike.%${search}%`
      )
    }

    // Apply pagination
    const from = (page - 1) * limit
    const to = from + limit - 1
    query = query.range(from, to)

    const { data, error, count } = await query

    if (error) {
      console.error("Error fetching blog posts:", error)
      throw error
    }

    return {
      posts: (data as BlogPost[]) || [],
      pagination: {
        page,
        limit,
        total: count || 0,
        totalPages: Math.ceil((count || 0) / limit),
      },
    }
  } catch (error) {
    console.error("Error in getBlogPosts:", error)
    throw error
  }
}

/**
 * Fetch a single blog post by slug
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const { data, error } = await supabaseAdmin
      .from("blog_posts")
      .select(
        `
        *,
        categories:blog_post_categories(
          category:blog_categories(*)
        ),
        tags:blog_post_tags(
          tag:blog_tags(*)
        )
      `
      )
      .eq("slug", slug)
      .eq("status", "published")
      .lte("published_at", new Date().toISOString())
      .single()

    if (error) {
      if (error.code === "PGRST116") {
        // Post not found
        return null
      }
      console.error("Error fetching blog post:", error)
      throw error
    }

    return data as BlogPost
  } catch (error) {
    console.error("Error in getBlogPost:", error)
    throw error
  }
}

/**
 * Fetch all blog categories with optional post count
 */
export async function getCategories(
  includeCount: boolean = false
): Promise<BlogCategory[]> {
  try {
    let query = supabaseAdmin
      .from("blog_categories")
      .select("*")
      .order("name")

    const { data, error } = await query

    if (error) {
      console.error("Error fetching categories:", error)
      throw error
    }

    // If including counts, fetch post count for each category
    if (includeCount && data) {
      const categoriesWithCounts = await Promise.all(
        data.map(async (category) => {
          const { count } = await supabaseAdmin
            .from("blog_post_categories")
            .select("*", { count: "exact", head: true })
            .eq("category_id", category.id)

          return {
            ...category,
            post_count: count || 0,
          }
        })
      )
      return categoriesWithCounts as BlogCategory[]
    }

    return (data as BlogCategory[]) || []
  } catch (error) {
    console.error("Error in getCategories:", error)
    throw error
  }
}

/**
 * Fetch popular tags ordered by usage
 */
export async function getPopularTags(limit: number = 20): Promise<BlogTag[]> {
  try {
    // Get all tags first
    const { data: tags, error } = await supabaseAdmin
      .from("blog_tags")
      .select("*")
      .order("name")

    if (error) {
      console.error("Error fetching tags:", error)
      throw error
    }

    if (!tags || tags.length === 0) {
      return []
    }

    // Get post counts for each tag
    const tagsWithCounts = await Promise.all(
      tags.map(async (tag) => {
        const { count } = await supabaseAdmin
          .from("blog_post_tags")
          .select("*", { count: "exact", head: true })
          .eq("tag_id", tag.id)

        return {
          ...tag,
          post_count: count || 0,
        }
      })
    )

    // Sort by post count descending and limit
    return tagsWithCounts
      .sort((a, b) => (b.post_count || 0) - (a.post_count || 0))
      .slice(0, limit) as BlogTag[]
  } catch (error) {
    console.error("Error in getPopularTags:", error)
    throw error
  }
}

/**
 * Fetch related posts based on shared categories/tags
 */
export async function getRelatedPosts(
  postId: string,
  limit: number = 3
): Promise<BlogPost[]> {
  try {
    // Get current post's categories and tags
    const { data: currentPost } = await supabaseAdmin
      .from("blog_posts")
      .select(
        `
        id,
        categories:blog_post_categories(category_id),
        tags:blog_post_tags(tag_id)
      `
      )
      .eq("id", postId)
      .single()

    if (!currentPost) {
      return []
    }

    // Extract category and tag IDs
    const categoryIds =
      currentPost.categories?.map((c: any) => c.category_id) || []
    const tagIds = currentPost.tags?.map((t: any) => t.tag_id) || []

    if (categoryIds.length === 0 && tagIds.length === 0) {
      // No categories or tags, return recent posts
      const { data } = await supabaseAdmin
        .from("blog_posts")
        .select("*")
        .eq("status", "published")
        .neq("id", postId)
        .lte("published_at", new Date().toISOString())
        .order("published_at", { ascending: false })
        .limit(limit)

      return (data as BlogPost[]) || []
    }

    // Find posts that share categories
    const { data: relatedPostIds } = await supabaseAdmin
      .from("blog_post_categories")
      .select("post_id")
      .in("category_id", categoryIds)
      .neq("post_id", postId)

    // Get unique post IDs
    const postIds = Array.from(
      new Set(relatedPostIds?.map((p) => p.post_id) || [])
    )

    if (postIds.length === 0) {
      // No related posts found, return recent posts
      const { data } = await supabaseAdmin
        .from("blog_posts")
        .select("*")
        .eq("status", "published")
        .neq("id", postId)
        .lte("published_at", new Date().toISOString())
        .order("published_at", { ascending: false })
        .limit(limit)

      return (data as BlogPost[]) || []
    }

    // Fetch the related posts
    const { data, error } = await supabaseAdmin
      .from("blog_posts")
      .select(
        `
        *,
        categories:blog_post_categories(
          category:blog_categories(*)
        ),
        tags:blog_post_tags(
          tag:blog_tags(*)
        )
      `
      )
      .in("id", postIds)
      .eq("status", "published")
      .lte("published_at", new Date().toISOString())
      .order("published_at", { ascending: false })
      .limit(limit)

    if (error) {
      console.error("Error fetching related posts:", error)
      throw error
    }

    return (data as BlogPost[]) || []
  } catch (error) {
    console.error("Error in getRelatedPosts:", error)
    return []
  }
}

/**
 * Increment view count for a blog post
 */
export async function incrementPostViews(postId: string): Promise<void> {
  try {
    const { error } = await supabaseAdmin.rpc("increment_post_views", {
      post_id: postId,
    })

    if (error) {
      console.error("Error incrementing post views:", error)
      throw error
    }
  } catch (error) {
    console.error("Error in incrementPostViews:", error)
    throw error
  }
}

/**
 * Get recent blog posts (for sidebars, footers, etc.)
 */
export async function getRecentPosts(limit: number = 5): Promise<BlogPost[]> {
  try {
    const { data, error } = await supabaseAdmin
      .from("blog_posts")
      .select("id, slug, title, excerpt, featured_image, published_at")
      .eq("status", "published")
      .lte("published_at", new Date().toISOString())
      .order("published_at", { ascending: false })
      .limit(limit)

    if (error) {
      console.error("Error fetching recent posts:", error)
      throw error
    }

    return (data as BlogPost[]) || []
  } catch (error) {
    console.error("Error in getRecentPosts:", error)
    return []
  }
}
