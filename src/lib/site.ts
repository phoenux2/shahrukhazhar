import { focusAreas, profile } from "@/lib/resume"

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://shahrukhazhar.com"

export const PERSON = {
  name: profile.name,
  url: SITE_URL,
  email: profile.email,
  jobTitle: profile.title,
  description:
    "Product design leader with 12+ years in B2B SaaS. Former Lead Product Designer at Unlayer (YC W22), Senior Product Designer at Sendoso. Founder of Phoenux.Design.",
  sameAs: [profile.linkedin, profile.studio, profile.calendly],
  knowsAbout: focusAreas,
  location: profile.location,
} as const

export function absoluteUrl(path: string): string {
  if (!path || path === "/") return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
}
