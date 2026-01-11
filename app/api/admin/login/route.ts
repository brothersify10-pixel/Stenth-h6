import { NextRequest, NextResponse } from "next/server"
import { verifyAdminPassword, createAdminSession } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()

    if (!password) {
      return NextResponse.json(
        { error: "Password is required" },
        { status: 400 }
      )
    }

    if (verifyAdminPassword(password)) {
      await createAdminSession()
      return NextResponse.json({ success: true }, { status: 200 })
    }

    return NextResponse.json(
      { error: "Invalid password" },
      { status: 401 }
    )
  } catch (error) {
    console.error("Error in admin login:", error)
    return NextResponse.json(
      { error: "Login failed" },
      { status: 500 }
    )
  }
}
