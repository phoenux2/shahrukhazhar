import { focusAreas, profile } from "@/lib/resume"

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://shahrukhazhar.com"

export const PERSON = {
  name: profile.name,
  url: SITE_URL,
  email: profile.email,
  jobTitle: profile.title,
  description:
    "AI product designer shipping agentic workflows at Marketat, Whizpay, and AdVu. Founder of Phoenux. Formerly led design at Unlayer (YC W22).",
  sameAs: [profile.linkedin],
  worksFor: {
    name: "Phoenux.Design",
    url: profile.studio,
  },
  knowsAbout: focusAreas,
  location: profile.location,
} as const

export function absoluteUrl(path: string): string {
  if (!path || path === "/") return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
}
