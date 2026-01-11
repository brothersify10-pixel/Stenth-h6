import { NextRequest, NextResponse } from "next/server"
import { getRelatedPosts } from "@/lib/supabase/blog"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const postId = searchParams.get("postId")
    const limit = parseInt(searchParams.get("limit") || "3")

    if (!postId) {
      return NextResponse.json(
        { error: "Post ID is required" },
        { status: 400 }
      )
    }

    const relatedPosts = await getRelatedPosts(postId, limit)

    return NextResponse.json(relatedPosts, { status: 200 })
  } catch (error) {
    console.error("Error in /api/blog/related:", error)
    return NextResponse.json(
      { error: "Failed to fetch related posts" },
      { status: 500 }
    )
  }
}
