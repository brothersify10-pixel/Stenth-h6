import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import nodemailer from "nodemailer"
import { supabaseAdmin } from "@/lib/supabase"

// Round-robin counter (resets on cold start, which is fine for alternation)
let leadCounter = 0

const TEAM = [
  { name: "Ansh", email: "australia@stenth.com" },   // odd: 1,3,5...
  { name: "Aakash", email: "canada@stenth.com" },    // even: 2,4,6...
]

const leadSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z.string().email("Invalid email address").max(320),
  website: z.string().max(500).optional().default(""),
  businessType: z.string().max(500).optional().default(""),
  mainGoal: z.string().max(500).optional().default(""),
  biggestIssue: z.string().max(500).optional().default(""),
  timeline: z.string().max(200).optional().default(""),
  budgetComfort: z.string().max(200).optional().default(""),
})

type LeadData = z.infer<typeof leadSchema>

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "smtp.gmail.com",
    port: parseInt(process.env.EMAIL_PORT || "587"),
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    connectionTimeout: 30000,
    dnsTimeout: 30000,
  })
}

function buildPersonalLine(data: LeadData): string {
  if (data.website) {
    return `I'll check out ${data.website} and send you specific feedback.`
  }
  if (data.mainGoal) {
    return `I saw you want help with ${data.mainGoal}.`
  }
  const tl = data.timeline.toLowerCase()
  if (tl === "asap" || tl === "this month") {
    return "Since you want to move fast, I'll prioritize this."
  }
  return "I got your details and will review everything."
}

function buildAutoReplyHtml(data: LeadData, assignedName: string): string {
  const firstName = data.name.split(" ")[0]
  const personalLine = buildPersonalLine(data)
  const tl = data.timeline.toLowerCase()
  const timelineLine =
    !personalLine.includes("move fast") && (tl === "asap" || tl === "this month")
      ? `<p style="color:#334155;font-size:15px;line-height:1.6;margin:0 0 16px 0;">Since you want to move fast, I'll prioritize this.</p>`
      : ""

  return `
    <div style="font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;max-width:560px;margin:0 auto;background:#ffffff;padding:40px 30px;">
      <p style="color:#334155;font-size:15px;line-height:1.6;margin:0 0 16px 0;">Hey ${firstName},</p>
      <p style="color:#334155;font-size:15px;line-height:1.6;margin:0 0 16px 0;">Thanks for reaching out.</p>
      <p style="color:#334155;font-size:15px;line-height:1.6;margin:0 0 16px 0;">${personalLine}</p>
      ${timelineLine}
      <p style="color:#334155;font-size:15px;line-height:1.6;margin:0 0 24px 0;">I'll get back to you within 24 hours.</p>
      <p style="color:#334155;font-size:15px;line-height:1.6;margin:0 0 8px 0;">Want to talk sooner? Book a call:</p>
      <p style="margin:0 0 32px 0;">
        <a href="https://cal.com/stenth/30min" style="color:#0891b2;font-size:15px;font-weight:500;text-decoration:none;">https://cal.com/stenth/30min</a>
      </p>
      <p style="color:#334155;font-size:15px;line-height:1.6;margin:0;">${assignedName}</p>
      <p style="color:#64748b;font-size:14px;margin:4px 0 0 0;">STENTH</p>
    </div>
  `
}

function buildAutoReplyText(data: LeadData, assignedName: string): string {
  const firstName = data.name.split(" ")[0]
  const personalLine = buildPersonalLine(data)
  const tl = data.timeline.toLowerCase()
  const timelineLine =
    !personalLine.includes("move fast") && (tl === "asap" || tl === "this month")
      ? "Since you want to move fast, I'll prioritize this.\n\n"
      : ""

  return `Hey ${firstName},

Thanks for reaching out.

${personalLine}

${timelineLine}I'll get back to you within 24 hours.

Want to talk sooner? Book a call:
https://cal.com/stenth/30min

${assignedName}
STENTH`
}

async function sendAutoReply(data: LeadData, assigned: typeof TEAM[number]) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log("[SKIP] Email credentials not set. Would send auto-reply to:", data.email)
    console.log("[SKIP] Assigned to:", assigned.name, assigned.email)
    return
  }

  const transporter = createTransporter()
  const fromAddr = process.env.EMAIL_FROM || process.env.EMAIL_USER

  console.log("[EMAIL] Sending auto-reply to:", data.email, "| CC:", assigned.email, "| From:", fromAddr)

  await transporter.sendMail({
    from: `"Stenth" <${fromAddr}>`,
    to: data.email,
    cc: assigned.email,
    replyTo: assigned.email,
    subject: "Got your message",
    html: buildAutoReplyHtml(data, assigned.name),
    text: buildAutoReplyText(data, assigned.name),
  })

  console.log("[EMAIL] Auto-reply sent successfully to:", data.email)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = leadSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const { data } = parsed

    // Insert into Supabase
    const { error } = await supabaseAdmin.from("ai_leads").insert({
      name: data.name,
      email: data.email,
      website: data.website,
      business_type: data.businessType,
      goal: data.mainGoal,
      issue: data.biggestIssue,
      timeline: data.timeline,
      budget: data.budgetComfort,
    })

    if (error) {
      console.error("Supabase insert error:", error)
      return NextResponse.json(
        { success: false, error: "Failed to save lead." },
        { status: 500 }
      )
    }

    // Round-robin assignment
    leadCounter++
    const assigned = leadCounter % 2 === 1 ? TEAM[0] : TEAM[1] // odd=Ansh, even=Aakash

    // Send auto-reply (don't block response on failure)
    sendAutoReply(data, assigned).catch((err) => {
      console.error("Auto-reply email failed:", err)
    })

    return NextResponse.json({ success: true, assignedTo: assigned.name })
  } catch (error) {
    console.error("Lead API error:", error)
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    )
  }
}
