import { NextResponse } from "next/server"
import { getCategories } from "@/lib/supabase/blog"

export async function GET() {
  try {
    const categories = await getCategories(true) // Include post counts

    return NextResponse.json(categories, { status: 200 })
  } catch (error) {
    console.error("Error in /api/blog/categories:", error)
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    )
  }
}
