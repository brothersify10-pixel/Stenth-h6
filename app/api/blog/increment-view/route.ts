import { NextRequest, NextResponse } from "next/server"
import { incrementPostViews } from "@/lib/supabase/blog"

export async function POST(request: NextRequest) {
  try {
    const { postId } = await request.json()

    if (!postId) {
      return NextResponse.json(
        { error: "Post ID is required" },
        { status: 400 }
      )
    }

    await incrementPostViews(postId)

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Error in /api/blog/increment-view:", error)
    return NextResponse.json(
      { error: "Failed to increment view count" },
      { status: 500 }
    )
  }
}
