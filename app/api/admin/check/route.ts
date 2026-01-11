import { NextResponse } from "next/server"
import { isAdminAuthenticated } from "@/lib/auth"

export async function GET() {
  try {
    const isAuthenticated = await isAdminAuthenticated()
    return NextResponse.json({ authenticated: isAuthenticated }, { status: 200 })
  } catch (error) {
    console.error("Error checking admin auth:", error)
    return NextResponse.json({ authenticated: false }, { status: 200 })
  }
}
