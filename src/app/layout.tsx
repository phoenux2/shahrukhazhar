import type { Metadata } from "next"
import { JetBrains_Mono, Noto_Nastaliq_Urdu } from "next/font/google"
import JsonLd from "@/components/JsonLd"
import {
  personJsonLd,
  profilePageJsonLd,
  websiteJsonLd,
} from "@/lib/structuredData"
import { PERSON, SITE_URL } from "@/lib/site"
import "./globals.css"

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
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
    default: `${PERSON.name} — Product Design Lead`,
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
    title: `${PERSON.name} — Product Design Lead`,
    description: PERSON.description,
    type: "website",
    url: SITE_URL,
    images: [{ url: ogImage, width: 1200, height: 630 }],
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
      className={`${jetbrains.variable} ${urdu.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-mono">
        <JsonLd id="person-jsonld" data={personJsonLd()} />
        <JsonLd id="website-jsonld" data={websiteJsonLd()} />
        <JsonLd id="profilepage-jsonld" data={profilePageJsonLd()} />
        {children}
      </body>
    </html>
  )
}
