"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { MessageCircle, X, Send, Loader2, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  role: "user" | "assistant"
  content: string
}

type Phase = "chat" | "lead-form" | "done"

const MAX_USER_MESSAGES = 12
const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content: "Hey, what are you working on right now?",
}

const QUICK_REPLIES = [
  "Service business",
  "Ecommerce",
  "Personal brand",
  "Not sure",
]

const WRAP_KEYWORDS = [
  "book a call",
  "cal.com",
  "info@stenth.com",
  "next step",
  "conversion audit",
  "website fix sprint",
  "content system",
  "ads creative sprint",
]

const CAP_MESSAGE: Message = {
  role: "assistant",
  content: "Best next step is a quick call. You can book here: https://cal.com/stenth/30min",
}

const FALLBACK_REPLY = "Something went wrong on my side. Can you try again?"

export default function StenthChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [phase, setPhase] = useState<Phase>("chat")
  const [userMsgCount, setUserMsgCount] = useState(0)
  const [capped, setCapped] = useState(false)
  const [quickRepliesUsed, setQuickRepliesUsed] = useState(false)

  const [leadName, setLeadName] = useState("")
  const [leadEmail, setLeadEmail] = useState("")
  const [leadSubmitting, setLeadSubmitting] = useState(false)
  const [leadError, setLeadError] = useState("")

  const collectedData = useRef({
    businessType: "",
    mainGoal: "",
    website: "",
    biggestIssue: "",
    timeline: "",
    budgetComfort: "",
  })

  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, phase])

  useEffect(() => {
    if (open && inputRef.current && phase === "chat" && !capped) {
      inputRef.current.focus()
    }
  }, [open, phase, capped])

  const parseAnswer = useCallback(
    (userMsg: string, msgIndex: number) => {
      const data = collectedData.current
      switch (msgIndex) {
        case 1:
          data.businessType = userMsg
          break
        case 2:
          data.mainGoal = userMsg
          break
        case 3:
          data.website = userMsg
          break
        case 4:
          data.biggestIssue = userMsg
          break
        case 5:
          data.timeline = userMsg
          break
        case 6:
          data.budgetComfort = userMsg
          break
      }
    },
    []
  )

  const isWrapUp = (text: string) =>
    WRAP_KEYWORDS.some((kw) => text.toLowerCase().includes(kw))

  const sendText = async (text: string) => {
    if (!text || loading || phase !== "chat" || capped) return

    const newCount = userMsgCount + 1

    if (newCount > MAX_USER_MESSAGES) {
      setMessages((prev) => [
        ...prev,
        { role: "user", content: text },
        CAP_MESSAGE,
      ])
      setCapped(true)
      return
    }

    setUserMsgCount(newCount)
    parseAnswer(text, newCount)

    const userMessage: Message = { role: "user", content: text }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInput("")
    setLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      const data = await res.json()
      const reply = data.reply || FALLBACK_REPLY
      const assistantMsg: Message = { role: "assistant", content: reply }
      setMessages((prev) => [...prev, assistantMsg])

      if (isWrapUp(reply)) {
        setTimeout(() => setPhase("lead-form"), 1500)
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: FALLBACK_REPLY },
      ])
    } finally {
      setLoading(false)
    }
  }

  const sendMessage = () => {
    const text = input.trim()
    if (text) sendText(text)
  }

  const handleQuickReply = (text: string) => {
    setQuickRepliesUsed(true)
    sendText(text)
  }

  const submitLead = async () => {
    if (!leadName.trim() || !leadEmail.trim()) {
      setLeadError("Name and email are required.")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(leadEmail)) {
      setLeadError("Please enter a valid email.")
      return
    }

    setLeadSubmitting(true)
    setLeadError("")

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: leadName.trim(),
          email: leadEmail.trim(),
          ...collectedData.current,
        }),
      })

      if (res.ok) {
        setPhase("done")
      } else {
        setLeadError("Could not save. Please try again.")
      }
    } catch {
      setLeadError("Connection error. Try again or email info@stenth.com.")
    } finally {
      setLeadSubmitting(false)
    }
  }

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 transition-transform hover:scale-110 active:scale-95"
          aria-label="Open chat assistant"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {open && (
        <div className="fixed bottom-4 right-4 z-50 flex w-[380px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0f1117] shadow-2xl shadow-black/50 sm:bottom-6 sm:right-6">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-purple-600">
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Stenth
                </p>
                <p className="text-[11px] text-gray-400">
                  Usually replies instantly
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-4"
            style={{ maxHeight: "380px", minHeight: "280px" }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  "flex",
                  msg.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed",
                    msg.role === "user"
                      ? "rounded-br-md bg-gradient-to-br from-cyan-600 to-cyan-700 text-white"
                      : "rounded-bl-md bg-[#1a1d27] text-gray-200"
                  )}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Quick reply buttons (shown once, after initial message) */}
            {!quickRepliesUsed && messages.length === 1 && !loading && phase === "chat" && (
              <div className="flex flex-wrap gap-1.5">
                {QUICK_REPLIES.map((label) => (
                  <button
                    key={label}
                    onClick={() => handleQuickReply(label)}
                    className="rounded-full border border-white/10 bg-[#1a1d27] px-3 py-1.5 text-xs text-gray-300 transition-colors hover:border-cyan-500/40 hover:text-white"
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}

            {/* Typing indicator */}
            {loading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-[#1a1d27] px-4 py-3">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:0ms]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:150ms]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:300ms]" />
                </div>
              </div>
            )}

            {/* Lead form */}
            {phase === "lead-form" && (
              <div className="mt-2 rounded-xl border border-white/10 bg-[#1a1d27] p-4">
                <p className="mb-3 text-sm font-medium text-white">
                  Before we go further, what&apos;s your name and email?
                </p>
                <div className="flex flex-col gap-2.5">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    className="rounded-lg border border-white/10 bg-[#0f1117] px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && submitLead()}
                    className="rounded-lg border border-white/10 bg-[#0f1117] px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30"
                  />
                  {leadError && (
                    <p className="text-xs text-red-400">{leadError}</p>
                  )}
                  <button
                    onClick={submitLead}
                    disabled={leadSubmitting}
                    className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-600 to-purple-600 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                  >
                    {leadSubmitting ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        Submit <ArrowRight className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Done / CTAs */}
            {phase === "done" && (
              <div className="mt-2 rounded-xl border border-white/10 bg-[#1a1d27] p-4">
                <p className="mb-3 text-sm text-white">
                  Thanks{leadName ? `, ${leadName.split(" ")[0]}` : ""}. Check your inbox for a reply. Here is what you can do next:
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://cal.com/stenth/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-700 px-3.5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                  >
                    Book a call
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="mailto:info@stenth.com"
                    className="flex items-center justify-between rounded-lg border border-white/10 bg-[#0f1117] px-3.5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/5"
                  >
                    Email info@stenth.com
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Input bar */}
          {phase === "chat" && (
            <div className="border-t border-white/10 bg-[#0f1117] px-3 py-3">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder={capped ? "Chat ended" : "Type your message..."}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  disabled={loading || capped}
                  className="flex-1 rounded-lg border border-white/10 bg-[#1a1d27] px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 disabled:opacity-50"
                />
                <button
                  onClick={sendMessage}
                  disabled={loading || !input.trim() || capped}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-600 to-purple-600 text-white transition-opacity hover:opacity-90 disabled:opacity-30"
                  aria-label="Send message"
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </button>
              </div>
              {userMsgCount > 0 && !capped && (
                <p className="mt-1.5 text-center text-[10px] text-gray-600">
                  {MAX_USER_MESSAGES - userMsgCount} messages remaining
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </>
  )
}
