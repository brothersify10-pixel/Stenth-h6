import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { supabaseAdmin } from "@/lib/supabase/index"
import nodemailer from 'nodemailer'

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

  // Check if this is a new booking or update
  const { data: existingBooking } = await supabaseAdmin
    .from("bookings")
    .select("id")
    .eq("email", email)
    .single()

  const isNewBooking = !existingBooking

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

  // Add event
  await supabaseAdmin.from("booking_events").insert({
    event_type: "FORM",
    email,
    payload: { name, company, notes, isNewBooking },
  })

  // Send email notification for new bookings
  if (isNewBooking && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    try {
      const transporter = nodemailer.createTransporter({
        host: process.env.EMAIL_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.EMAIL_PORT || '587'),
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      })

      await transporter.sendMail({
        from: `"Stenth Bookings" <${process.env.EMAIL_FROM}>`,
        to: process.env.EMAIL_TO,
        replyTo: email,
        subject: `📅 New Booking Request from ${name || email}`,
        html: `
          <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #4f46e5, #7c3aed); padding: 30px; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">📅 New Booking Request</h1>
            </div>
            
            <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px;">
              <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #4f46e5;">
                <h3 style="margin-top: 0;">Booking Details</h3>
                <p><strong>Name:</strong> ${name || 'Not provided'}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Company:</strong> ${company || 'Not provided'}</p>
                ${notes ? `<p><strong>Notes:</strong><br>${notes}</p>` : ''}
              </div>
              
              <div style="text-align: center; margin-top: 20px;">
                <a href="mailto:${email}?subject=Re:%20Your%20booking%20request" 
                   style="background: #4f46e5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600;">
                  Reply to ${name || 'Customer'}
                </a>
              </div>
            </div>
          </div>
        `,
      })

      // Log email sent event
      await supabaseAdmin.from("booking_events").insert({
        event_type: "EMAIL_SENT",
        email,
        payload: { emailType: "booking_notification" },
      })

    } catch (emailError) {
      console.error('Email sending failed:', emailError)
    }
  }

  return NextResponse.json({ ok: true })
}
