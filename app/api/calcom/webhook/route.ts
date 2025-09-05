import { type NextRequest, NextResponse } from "next/server"
import crypto from "crypto"
import { z } from "zod"
import { supabaseAdmin } from "@/lib/supabase/admin"

const SECRET = process.env.CALCOM_WEBHOOK_SECRET || "missing"

const CalEvent = z.object({
  triggerEvent: z.enum(["BOOKING_CREATED", "BOOKING_CANCELLED"]),
  payload: z.object({
    uid: z.string().optional(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
    attendee: z
      .object({
        name: z.string().nullable().optional(),
        email: z.string().email().nullable().optional(),
        timeZone: z.string().nullable().optional(),
      })
      .optional(),
    cancelReason: z.string().optional(),
    eventType: z.object({ slug: z.string().optional() }).optional(),
  }),
})

function verify(req: NextRequest, raw: string) {
  const sig = req.headers.get("x-cal-signature-256") || req.headers.get("x-cal-signature")
  if (!sig) return false

  const hmac = crypto.createHmac("sha256", SECRET)
  hmac.update(raw, "utf8")
  const digest = `sha256=${hmac.digest("hex")}`

  try {
    return crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(sig))
  } catch {
    return false
  }
}

function iso(s?: string) {
  try {
    return s ? new Date(s).toISOString() : null
  } catch {
    return null
  }
}

export async function POST(req: NextRequest) {
  const raw = await req.text()

  if (!verify(req, raw)) {
    return NextResponse.json({ ok: false, error: "invalid signature" }, { status: 401 })
  }

  const parsed = CalEvent.safeParse(JSON.parse(raw))
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: parsed.error.flatten() }, { status: 400 })
  }

  const { triggerEvent, payload } = parsed.data
  const email = payload.attendee?.email || undefined
  const start = iso(payload.startTime)

  if (triggerEvent === "BOOKING_CREATED") {
    if (email) {
      await supabaseAdmin
        .from("bookings")
        .update({
          status: "booked",
          cal_uid: payload.uid || null,
          start_time: start,
          end_time: iso(payload.endTime),
          timezone: payload.attendee?.timeZone || null,
          updated_at: new Date().toISOString(),
        })
        .eq("email", email)
    }

    await supabaseAdmin.from("booking_events").insert({
      event_type: "BOOKING_CREATED",
      email,
      payload,
    })
  }

  if (triggerEvent === "BOOKING_CANCELLED") {
    if (email) {
      await supabaseAdmin
        .from("bookings")
        .update({
          status: "canceled",
          updated_at: new Date().toISOString(),
        })
        .eq("email", email)
    }

    await supabaseAdmin.from("booking_events").insert({
      event_type: "BOOKING_CANCELLED",
      email,
      payload,
    })
  }

  return NextResponse.json({ ok: true })
}
