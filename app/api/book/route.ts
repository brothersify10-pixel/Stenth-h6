import 'server-only'
export const runtime = 'nodejs'
import { type NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { supabaseAdmin } from '@/lib/supabase'

const FormSchema = z.object({
  name: z.string().trim().optional(),
  email: z.string().email(),
  company: z.string().trim().optional().default(''),
  notes: z.string().trim().optional().default(''),
  phone: z.string().trim().optional(),
  country: z.string().trim().optional(),
  region: z.string().trim().optional(),
  city: z.string().trim().optional(),
  source: z.string().trim().optional().default('main_booking_page'),
})

export async function POST(req: NextRequest) {
  const nodemailer = (await import('nodemailer')).default
  
  const json = await req.json()
  const parsed = FormSchema.safeParse(json)

  if (!parsed.success) {
    return NextResponse.json({
      ok: false,
      error: "Validation failed: " + parsed.error.issues.map(issue => `${issue.path.join('.')}: ${issue.message}`).join(', ')
    }, { status: 400 })
  }

  const { name, email, company, notes, phone, country, region, city, source } = parsed.data

  // Log environment check
  console.log("Environment check:", {
    hasEmailUser: !!process.env.EMAIL_USER,
    hasEmailPass: !!process.env.EMAIL_PASS,
    emailUser: process.env.EMAIL_USER,
    emailTo: process.env.EMAIL_TO,
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
  })

  // Safer lookup (doesn't error if not found)
  const { data: existingBooking, error: existingErr } = await supabaseAdmin
    .from("bookings")
    .select("id")
    .eq("email", email)
    .maybeSingle()

  if (existingErr) {
    console.error("Supabase lookup error:", existingErr)
  }

  const isNewBooking = !existingBooking

  const { error: upsertErr } = await supabaseAdmin.from("bookings").upsert(
    {
      email,
      name,
      company,
      notes,
      phone,
      country,
      region,
      city,
      source,
      status: "form_submitted",
      updated_at: new Date().toISOString(),
    },
    { onConflict: "email" }
  )

  if (upsertErr) {
    return NextResponse.json({ ok: false, error: upsertErr.message }, { status: 500 })
  }

  await supabaseAdmin.from("booking_events").insert({
    event_type: "FORM",
    email,
    payload: { name, company, notes, phone, country, region, city, source, isNewBooking },
  })

  // Send email for all bookings (including repeat submissions)
  // Skip email sending in development to avoid DNS lookup issues
  if (process.env.NODE_ENV === 'production' && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.EMAIL_PORT || '587', 10),
        secure: false,
        requireTLS: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        },
        dnsTimeout: 30000,
        connectionTimeout: 30000,
      })

      await transporter.verify()

      const recipients =
        process.env.EMAIL_TO?.split(',').map(s => s.trim()).filter(Boolean)
        || ['info@stenth.com']
      
      const fromAddress = process.env.EMAIL_FROM || process.env.EMAIL_USER

      await transporter.sendMail({
        from: `"Stenth - Bookings" <${fromAddress}>`,
        to: recipients,
        replyTo: email,
        subject: `📅 New ${country || 'Global'} Session Booking from ${name || email}`,
        text: `
New Session Booking

Name: ${name || "Not provided"}
Email: ${email}
Company: ${company || "Not provided"}
${phone ? `Phone: ${phone}` : ""}
${country ? `Country: ${country}` : ""}
${region ? `Region: ${region}` : ""}
${city ? `City: ${city}` : ""}
${source ? `Source: ${source}` : ""}
${notes ? `Notes: ${notes}` : ""}

Status: Form Submitted
Submitted: ${new Date().toLocaleString()}

Team notified: ${recipients.join(", ")}

Reply to this email to contact ${name || "the customer"}.
        `,
        html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
            <div style="background: linear-gradient(135deg, #4f46e5, #7c3aed); padding: 40px 30px; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 28px; text-align: center;">
                📅 New ${country || 'Global'} Session Booking
              </h1>
              <p style="color: #e0e7ff; margin: 10px 0 0 0; text-align: center; font-size: 16px;">
                Someone wants to book a session with Stenth${country ? ` from ${country}` : ''}!
              </p>
            </div>
            
            <div style="background: #f8fafc; padding: 40px 30px; border-radius: 0 0 10px 10px;">
              <div style="background: white; padding: 25px; border-radius: 12px; margin-bottom: 20px; border-left: 5px solid #4f46e5; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <h3 style="color: #1e293b; margin: 0 0 20px 0; font-size: 20px;">
                  👤 Booking Information
                </h3>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 100px;">Name:</td>
                    <td style="padding: 8px 0; color: #1e293b; font-size: 16px;">${name || 'Not provided'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Email:</td>
                    <td style="padding: 8px 0;">
                      <a href="mailto:${email}" style="color: #4f46e5; text-decoration: none; font-size: 16px; font-weight: 500;">${email}</a>
                    </td>
                  </tr>
                  ${company ? `
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Company:</td>
                    <td style="padding: 8px 0; color: #1e293b; font-size: 16px;">${company}</td>
                  </tr>
                  ` : ''}
                  ${phone ? `
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Phone:</td>
                    <td style="padding: 8px 0; color: #1e293b; font-size: 16px;">${phone}</td>
                  </tr>
                  ` : ''}
                  ${country ? `
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Country:</td>
                    <td style="padding: 8px 0; color: #1e293b; font-size: 16px;">${country}</td>
                  </tr>
                  ` : ''}
                  ${region ? `
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Region:</td>
                    <td style="padding: 8px 0; color: #1e293b; font-size: 16px;">${region}</td>
                  </tr>
                  ` : ''}
                  ${city ? `
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-weight: 600;">City:</td>
                    <td style="padding: 8px 0; color: #1e293b; font-size: 16px;">${city}</td>
                  </tr>
                  ` : ''}
                  ${source ? `
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Source:</td>
                    <td style="padding: 8px 0; color: #1e293b; font-size: 16px;">${source}</td>
                  </tr>
                  ` : ''}
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Status:</td>
                    <td style="padding: 8px 0;">
                      <span style="background: #fef3c7; color: #92400e; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600;">
                        📋 FORM SUBMITTED
                      </span>
                    </td>
                  </tr>
                </table>
              </div>
              
              ${notes ? `
              <div style="background: white; padding: 25px; border-radius: 12px; margin-bottom: 20px; border-left: 5px solid #7c3aed; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 20px;">
                  📝 Notes & Requirements
                </h3>
                <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; line-height: 1.6; color: #334155; white-space: pre-wrap; font-size: 15px; border: 1px solid #e2e8f0;">
${notes}
                </div>
              </div>
              ` : ''}
              
              <div style="background: white; padding: 20px; border-radius: 12px; border-left: 5px solid #10b981; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 20px;">
                <h4 style="color: #1e293b; margin: 0 0 10px 0; font-size: 16px;">📧 Notification sent to:</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                  ${recipients.map(recipient => `
                    <span style="background: #f0fdf4; color: #166534; padding: 6px 12px; border-radius: 20px; font-size: 14px; font-weight: 500; border: 1px solid #bbf7d0;">
                      ${recipient}
                    </span>
                  `).join('')}
                </div>
              </div>
              
              <div style="text-align: center; margin: 30px 0 20px 0;">
                <a href="mailto:${email}?subject=Re:%20Your%20session%20booking%20with%20Stenth&body=Hi%20${name || ''},%0D%0A%0D%0AThank%20you%20for%20your%20interest%20in%20booking%20a%20session%20with%20Stenth.%0D%0A%0D%0A" 
                   style="display: inline-block; background: linear-gradient(135deg, #4f46e5, #7c3aed); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: 600; margin: 0 10px; box-shadow: 0 4px 15px rgba(79, 70, 229, 0.3);">
                  📧 Reply to ${name || 'Customer'}
                </a>
                <a href="https://calendar.google.com/calendar/u/0/appointments/schedules" 
                   style="display: inline-block; background: linear-gradient(135deg, #059669, #047857); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: 600; margin: 0 10px; box-shadow: 0 4px 15px rgba(5, 150, 105, 0.3);">
                  📅 Schedule Meeting
                </a>
              </div>
              
              <div style="margin-top: 40px; padding-top: 25px; border-top: 2px solid #e2e8f0; text-align: center;">
                <p style="color: #64748b; font-size: 14px; margin: 5px 0; line-height: 1.5;">
                  📅 Booking submitted on ${new Date().toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
                <p style="color: #64748b; font-size: 14px; margin: 5px 0;">
                  🚀 This email was sent from the Stenth booking system
                </p>
                <p style="color: #64748b; font-size: 12px; margin: 15px 0 0 0;">
                  💡 <strong>Next step:</strong> Reply to schedule the session with ${name || 'the customer'}!
                </p>
                <p style="color: #64748b; font-size: 12px; margin: 5px 0 0 0;">
                  Team notified: ${recipients.join(', ')}
                </p>
              </div>
            </div>
          </div>
        `,
      })

      await supabaseAdmin.from("booking_events").insert({
        event_type: "EMAIL_SENT",
        email,
        payload: { emailType: "booking_notification", sentTo: recipients },
      })

      console.log('Booking email sent successfully to:', recipients)

    } catch (err: any) {
      console.error('Booking email sending failed (summary):', {
        name: err?.name, 
        code: err?.code, 
        command: err?.command,
        response: err?.response, 
        message: err?.message,
      })

      await supabaseAdmin.from("booking_events").insert({
        event_type: "EMAIL_FAILED",
        email,
        payload: {
          name: err?.name,
          code: err?.code,
          command: err?.command,
          response: err?.response,
          message: err?.message,
        },
      })
    }
  } else if (process.env.NODE_ENV === 'development') {
    // Development mode: Log email instead of sending
    const recipients = process.env.EMAIL_TO?.split(',').map(s => s.trim()).filter(Boolean)
      || ['info@stenth.com']

    console.log('📧 [DEV MODE] Would send booking email to:', recipients)
    console.log('📧 [DEV MODE] Booking details:', { name, email, company, phone, country, region, city, source })

    await supabaseAdmin.from("booking_events").insert({
      event_type: "EMAIL_SIMULATED",
      email,
      payload: { emailType: "booking_notification", sentTo: recipients, dev_mode: true },
    })
  }

  return NextResponse.json({ ok: true })
}
