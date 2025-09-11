import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { supabaseAdmin } from "@/lib/supabase/index"

const FormSchema = z.object({
  name: z.string().trim().optional(),
  email: z.string().email(),
  company: z.string().trim().optional().default(""),
  notes: z.string().trim().optional().default(""),
})

export async function POST(req: NextRequest) {
  const json = await req.json()
  const parsed = FormSchema.safeParse(json)

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: parsed.error.flatten() }, { status: 400 })
  }

  const { name, email, company, notes } = parsed.data

  const { error } = await supabaseAdmin.from("bookings").upsert(
    {
      email,
      name,
      company,
      notes,
      status: "form_submitted",
      updated_at: new Date().toISOString(),
    },
    { onConflict: "email" },
  )

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }

  await supabaseAdmin.from("booking_events").insert({
    event_type: "FORM",
    email,
    payload: { name, company, notes },
  })

  return NextResponse.json({ ok: true })
}
