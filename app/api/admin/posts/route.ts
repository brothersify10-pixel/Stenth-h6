import { NextRequest, NextResponse } from "next/server"
import { isAdminAuthenticated } from "@/lib/auth"
import { supabaseAdmin } from "@/lib/supabase"
import { generateSlug, calculateReadTime } from "@/lib/blog-helpers"

// GET all posts (including drafts) for admin
export async function GET() {
  try {
    const isAuth = await isAdminAuthenticated()
    if (!isAuth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { data, error } = await supabaseAdmin
      .from("blog_posts")
      .select(`
        *,
        categories:blog_post_categories(
          category:blog_categories(*)
        ),
        tags:blog_post_tags(
          tag:blog_tags(*)
        )
      `)
      .order("created_at", { ascending: false })

    if (error) throw error

    return NextResponse.json(data || [], { status: 200 })
  } catch (error) {
    console.error("Error fetching admin posts:", error)
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    )
  }
}

// POST create new post
export async function POST(request: NextRequest) {
  try {
    const isAuth = await isAdminAuthenticated()
    if (!isAuth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const {
      title,
      slug,
      excerpt,
      content,
      featured_image,
      featured_image_alt,
      author_name,
      status,
      meta_description,
      meta_keywords,
      categories,
      tags,
    } = body

    // Validation
    if (!title || !excerpt || !content) {
      return NextResponse.json(
        { error: "Title, excerpt, and content are required" },
        { status: 400 }
      )
    }

    // Generate slug if not provided
    const finalSlug = slug || generateSlug(title)

    // Calculate read time
    const read_time_minutes = calculateReadTime(content)

    // Set published_at if status is published
    const published_at = status === "published" ? new Date().toISOString() : null

    // Insert post
    const { data: post, error: postError } = await supabaseAdmin
      .from("blog_posts")
      .insert([
        {
          title,
          slug: finalSlug,
          excerpt,
          content,
          featured_image: featured_image || null,
          featured_image_alt: featured_image_alt || null,
          author_name: author_name || "Stenth Team",
          status: status || "draft",
          published_at,
          read_time_minutes,
          meta_description: meta_description || excerpt,
          meta_keywords: meta_keywords || null,
        },
      ])
      .select()
      .single()

    if (postError) throw postError

    // Link categories
    if (categories && categories.length > 0) {
      const categoryLinks = categories.map((categoryId: string) => ({
        post_id: post.id,
        category_id: categoryId,
      }))

      await supabaseAdmin
        .from("blog_post_categories")
        .insert(categoryLinks)
    }

    // Link tags
    if (tags && tags.length > 0) {
      const tagLinks = tags.map((tagId: string) => ({
        post_id: post.id,
        tag_id: tagId,
      }))

      await supabaseAdmin
        .from("blog_post_tags")
        .insert(tagLinks)
    }

    return NextResponse.json(post, { status: 201 })
  } catch (error: any) {
    console.error("Error creating post:", error)

    // Check for unique constraint violation
    if (error.code === "23505") {
      return NextResponse.json(
        { error: "A post with this slug already exists" },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    )
  }
}
