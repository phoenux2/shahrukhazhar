import { ImageResponse } from "next/og"
import { PERSON, SITE_URL } from "@/lib/site"

export const runtime = "edge"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title =
    searchParams.get("title")?.slice(0, 120) || PERSON.name
  const subtitle =
    searchParams.get("subtitle")?.slice(0, 160) || PERSON.description

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4f4f2",
          color: "#000000",
          border: "8px solid #000000",
          padding: "56px 64px",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {PERSON.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 48 ? 44 : 56,
              fontWeight: 700,
              lineHeight: 1.15,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              lineHeight: 1.4,
              color: "#333333",
              maxWidth: 900,
            }}
          >
            {subtitle}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "0.04em",
            borderTop: "3px solid #000000",
            paddingTop: 24,
          }}
        >
          <span>{PERSON.jobTitle}</span>
          <span>{SITE_URL.replace(/^https?:\/\//, "")}</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
