import { NextRequest, NextResponse } from "next/server"
import { getBlogPosts } from "@/lib/supabase/blog"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const page = parseInt(searchParams.get("page") || "1")
    const limit = parseInt(searchParams.get("limit") || "12")
    const category = searchParams.get("category") || undefined
    const tag = searchParams.get("tag") || undefined
    const search = searchParams.get("search") || undefined

    const result = await getBlogPosts({
      page,
      limit,
      category,
      tag,
      search,
    })

    return NextResponse.json(result, { status: 200 })
  } catch (error) {
    console.error("Error in /api/blog/posts:", error)
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    )
  }
}
