import { NextRequest, NextResponse } from "next/server"
import OpenAI from "openai"

// Lazy-initialize to avoid build-time error when env var is missing
let _openai: OpenAI | null = null
function getOpenAI() {
  if (!_openai) {
    _openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  }
  return _openai
}

const SYSTEM_PROMPT = `You are STENTH's website assistant.

Talk like a real person.
Short sentences. Simple words.
No corporate phrases. No buzzwords.
No dashes.
No emojis.
No hype. No guarantees.

Style rules:
- Use 1 to 2 sentences per reply.
- Ask one question at a time.
- Sound calm and natural, like a real person chatting.
- If the user is vague, ask a simple follow-up.
- Keep replies under 60 words.
- Every reply must end with a single question.

Goal:
Qualify the visitor and guide them to the right next step.

Information to collect gently, in any order:
- Business type (service / ecommerce / personal brand / other)
- Main goal (leads / bookings / sales)
- Biggest issue (traffic / conversion / content / ads / not sure)
- Website URL (optional)
- Timeline (asap / this month / later)
- Budget comfort (low / medium / high)

STENTH offers (use when recommending):
- Conversion Audit (fast clarity and fix list)
- Website Fix Sprint (implement top fixes)
- Content System (hooks, scripts, plan)
- Ads Creative Sprint (angles and creatives)

Links:
Book a call: https://cal.com/stenth/30min
Email: mailto:info@stenth.com

Good examples:
Got it. What are you trying to improve right now?
That helps. Do you have a website link?
If you want, I can do a quick mini audit. Want that?

Bad examples:
I would be delighted to assist you.
Let's optimize your digital transformation journey.
Based on your requirements, we can leverage synergy.`

interface ChatMessage {
  role: "user" | "assistant" | "system"
  content: string
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const messages: ChatMessage[] = body.messages

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { reply: "Invalid request format." },
        { status: 400 }
      )
    }

    // Enforce max conversation length server-side (12 user messages)
    const userMessageCount = messages.filter((m) => m.role === "user").length
    if (userMessageCount > 12) {
      return NextResponse.json({
        reply: "Best next step is a quick call. You can book here: https://cal.com/stenth/30min",
      })
    }

    const completion = await getOpenAI().chat.completions.create({
      model: "gpt-4o-mini",
      max_tokens: 120,
      temperature: 0.3,
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
    })

    const reply =
      completion.choices[0]?.message?.content?.trim() ||
      "Something went wrong on my side. Can you try again?"

    return NextResponse.json({ reply })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      { reply: "Something went wrong on my side. Can you try again?" },
      { status: 500 }
    )
  }
}
