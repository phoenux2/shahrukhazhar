import type { Metadata } from "next"
import { DM_Sans, Noto_Nastaliq_Urdu, Schibsted_Grotesk } from "next/font/google"
import { AnalyticsProviders } from "@/components/analytics/providers"
import JsonLd from "@/components/JsonLd"
import {
  personJsonLd,
  profilePageJsonLd,
  websiteJsonLd,
} from "@/lib/structuredData"
import { PERSON, SITE_URL } from "@/lib/site"
import "./globals.css"

const sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const display = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const urdu = Noto_Nastaliq_Urdu({
  variable: "--font-urdu",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
})

const ogImage = `/og?title=${encodeURIComponent(PERSON.name)}&subtitle=${encodeURIComponent(PERSON.description)}`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${PERSON.name} — ${PERSON.jobTitle}`,
    template: `%s · ${PERSON.name}`,
  },
  description: PERSON.description,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: `${PERSON.name} — ${PERSON.jobTitle}`,
    description: PERSON.description,
    type: "website",
    url: SITE_URL,
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSON.name} — ${PERSON.jobTitle}`,
    description: PERSON.description,
    images: [ogImage],
  },
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${urdu.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <AnalyticsProviders>
          <JsonLd id="person-jsonld" data={personJsonLd()} />
          <JsonLd id="website-jsonld" data={websiteJsonLd()} />
          <JsonLd id="profilepage-jsonld" data={profilePageJsonLd()} />
          {children}
        </AnalyticsProviders>
      </body>
    </html>
  )
}
