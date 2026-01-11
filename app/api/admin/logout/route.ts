import { NextResponse } from "next/server"
import { destroyAdminSession } from "@/lib/auth"

export async function POST() {
  try {
    await destroyAdminSession()
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Error in admin logout:", error)
    return NextResponse.json(
      { error: "Logout failed" },
      { status: 500 }
    )
  }
}
