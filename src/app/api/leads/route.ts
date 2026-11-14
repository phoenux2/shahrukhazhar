import { Resend } from "resend"
import { NextResponse } from "next/server"

import { SITE_URL } from "@/lib/site"

export const runtime = "nodejs"

type LeadBody = {
  name?: string
  email?: string
  note?: string
  preference?: string
  source?: string
  slug?: string
  title?: string
  /** Honeypot — real users leave empty */
  website?: string
  attribution?: Record<string, string>
}

const LIMITS = {
  name: 120,
  email: 254,
  note: 2000,
  preference: 40,
  source: 80,
  slug: 120,
  title: 200,
  attributionEntries: 20,
  attributionKey: 40,
  attributionValue: 200,
} as const

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000
const RATE_LIMIT_MAX = 5

type RateBucket = { count: number; resetAt: number }

const rateBuckets = new Map<string, RateBucket>()

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function clip(value: string | undefined, max: number) {
  return (value?.trim() ?? "").slice(0, max)
}

/** Strip CR/LF so values cannot break SMTP headers when used in subjects. */
function oneLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim()
}

function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim()
    if (first) return first
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown"
}

function takeRateLimit(ip: string): boolean {
  const now = Date.now()
  const existing = rateBuckets.get(ip)
  if (!existing || existing.resetAt <= now) {
    rateBuckets.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return true
  }
  if (existing.count >= RATE_LIMIT_MAX) return false
  existing.count += 1
  return true
}

function allowedHosts(): string[] {
  const hosts = new Set<string>()
  try {
    hosts.add(new URL(SITE_URL).origin)
  } catch {
    hosts.add("https://shahrukhazhar.com")
  }
  if (process.env.NODE_ENV !== "production") {
    hosts.add("http://localhost:3000")
    hosts.add("http://127.0.0.1:3000")
  }
  return [...hosts]
}

function requestHostOrigins(request: Request): string[] {
  const origins = new Set<string>()
  try {
    origins.add(new URL(request.url).origin)
  } catch {
    // ignore
  }
  const host = request.headers.get("x-forwarded-host") || request.headers.get("host")
  const proto =
    request.headers.get("x-forwarded-proto") ||
    (host?.startsWith("localhost") || host?.startsWith("127.") ? "http" : "https")
  if (host) {
    origins.add(`${proto}://${host}`)
  }
  return [...origins]
}

function isAllowedBrowserOrigin(request: Request): boolean {
  const allowed = new Set([...allowedHosts(), ...requestHostOrigins(request)])

  const origin = request.headers.get("origin")
  if (origin) return allowed.has(origin)

  const referer = request.headers.get("referer")
  if (!referer) return false
  try {
    return allowed.has(new URL(referer).origin)
  } catch {
    return false
  }
}

function sanitizeAttribution(
  raw: Record<string, string> | undefined
): Record<string, string> {
  if (!raw || typeof raw !== "object") return {}
  const out: Record<string, string> = {}
  let n = 0
  for (const [key, value] of Object.entries(raw)) {
    if (n >= LIMITS.attributionEntries) break
    if (typeof key !== "string" || typeof value !== "string") continue
    const k = clip(key, LIMITS.attributionKey)
    const v = clip(value, LIMITS.attributionValue)
    if (!k || !v) continue
    out[k] = v
    n += 1
  }
  return out
}

export async function POST(request: Request) {
  if (!isAllowedBrowserOrigin(request)) {
    return NextResponse.json({ ok: false, error: "Forbidden" }, { status: 403 })
  }

  const ip = clientIp(request)
  if (!takeRateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Try again later." },
      { status: 429 }
    )
  }

  let body: LeadBody
  try {
    body = (await request.json()) as LeadBody
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 })
  }

  // Honeypot: bots fill hidden fields; succeed silently without emailing.
  if (clip(body.website, 200)) {
    return NextResponse.json({ ok: true })
  }

  const name = oneLine(clip(body.name, LIMITS.name))
  const email = clip(body.email, LIMITS.email)
  const note = clip(body.note, LIMITS.note)
  const preference = clip(body.preference, LIMITS.preference) || "unspecified"
  const source = clip(body.source, LIMITS.source) || "unknown"
  const slug = clip(body.slug, LIMITS.slug)
  const title = oneLine(clip(body.title, LIMITS.title))
  const attribution = sanitizeAttribution(body.attribution)

  if (!name || !email || !isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Name and valid email are required" },
      { status: 400 }
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.LEADS_TO_EMAIL || "shahrukh@phoenux.design"
  const from =
    process.env.LEADS_FROM_EMAIL || "Portfolio <onboarding@resend.dev>"

  if (!apiKey) {
    return NextResponse.json(
      {
        ok: false,
        error: "Lead delivery is not configured",
        fallback: "mailto",
      },
      { status: 503 }
    )
  }

  const attributionLines = Object.keys(attribution).length
    ? Object.entries(attribution)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n")
    : ""

  const text = [
    `New portfolio lead`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Preference: ${preference}`,
    `Source: ${source}`,
    title ? `Case study: ${title}` : null,
    slug ? `Path: /work/${slug}` : null,
    note ? `Note: ${note}` : null,
    attributionLines ? `\nAttribution\n${attributionLines}` : null,
  ]
    .filter(Boolean)
    .join("\n")

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: title
        ? `Portfolio lead — ${name} · ${title}`
        : `Portfolio lead — ${name}`,
      text,
    })

    if (error) {
      console.error("[leads] Resend error:", error.message)
      return NextResponse.json(
        { ok: false, error: "Unable to deliver lead", fallback: "mailto" },
        { status: 502 }
      )
    }
  } catch (error) {
    console.error("[leads] send failed:", error)
    return NextResponse.json(
      { ok: false, error: "Unable to deliver lead", fallback: "mailto" },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
