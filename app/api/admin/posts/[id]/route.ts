import { NextRequest, NextResponse } from "next/server"
import { isAdminAuthenticated } from "@/lib/auth"
import { supabaseAdmin } from "@/lib/supabase"
import { calculateReadTime } from "@/lib/blog-helpers"

// GET single post by ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const isAuth = await isAdminAuthenticated()
    if (!isAuth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { id } = await params

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
      .eq("id", id)
      .single()

    if (error) throw error

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.error("Error fetching post:", error)
    return NextResponse.json(
      { error: "Post not found" },
      { status: 404 }
    )
  }
}

// PUT update post
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const isAuth = await isAdminAuthenticated()
    if (!isAuth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { id } = await params
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

    // Calculate read time
    const read_time_minutes = calculateReadTime(content)

    // Get current post to check status change
    const { data: currentPost } = await supabaseAdmin
      .from("blog_posts")
      .select("status, published_at")
      .eq("id", id)
      .single()

    // Set published_at if status changed to published
    let published_at = currentPost?.published_at
    if (status === "published" && currentPost?.status !== "published") {
      published_at = new Date().toISOString()
    } else if (status === "draft") {
      published_at = null
    }

    // Update post
    const { data: post, error: postError } = await supabaseAdmin
      .from("blog_posts")
      .update({
        title,
        slug,
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
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single()

    if (postError) throw postError

    // Delete existing category links
    await supabaseAdmin
      .from("blog_post_categories")
      .delete()
      .eq("post_id", id)

    // Insert new category links
    if (categories && categories.length > 0) {
      const categoryLinks = categories.map((categoryId: string) => ({
        post_id: id,
        category_id: categoryId,
      }))

      await supabaseAdmin
        .from("blog_post_categories")
        .insert(categoryLinks)
    }

    // Delete existing tag links
    await supabaseAdmin
      .from("blog_post_tags")
      .delete()
      .eq("post_id", id)

    // Insert new tag links
    if (tags && tags.length > 0) {
      const tagLinks = tags.map((tagId: string) => ({
        post_id: id,
        tag_id: tagId,
      }))

      await supabaseAdmin
        .from("blog_post_tags")
        .insert(tagLinks)
    }

    return NextResponse.json(post, { status: 200 })
  } catch (error: any) {
    console.error("Error updating post:", error)

    if (error.code === "23505") {
      return NextResponse.json(
        { error: "A post with this slug already exists" },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: "Failed to update post" },
      { status: 500 }
    )
  }
}

// DELETE post
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const isAuth = await isAdminAuthenticated()
    if (!isAuth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { id } = await params

    const { error } = await supabaseAdmin
      .from("blog_posts")
      .delete()
      .eq("id", id)

    if (error) throw error

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Error deleting post:", error)
    return NextResponse.json(
      { error: "Failed to delete post" },
      { status: 500 }
    )
  }
}
