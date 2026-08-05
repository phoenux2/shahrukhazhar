import { Resend } from "resend"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

type LeadBody = {
  name?: string
  email?: string
  note?: string
  preference?: string
  source?: string
  slug?: string
  title?: string
  attribution?: Record<string, string>
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function POST(request: Request) {
  let body: LeadBody
  try {
    body = (await request.json()) as LeadBody
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 })
  }

  const name = body.name?.trim() ?? ""
  const email = body.email?.trim() ?? ""
  const note = body.note?.trim() ?? ""
  const preference = body.preference?.trim() || "unspecified"
  const source = body.source?.trim() || "unknown"
  const slug = body.slug?.trim()
  const title = body.title?.trim()

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

  const attributionLines = body.attribution
    ? Object.entries(body.attribution)
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
      return NextResponse.json(
        { ok: false, error: error.message, fallback: "mailto" },
        { status: 502 }
      )
    }
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to send lead email"
    return NextResponse.json(
      { ok: false, error: message, fallback: "mailto" },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
