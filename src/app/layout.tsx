import type { Metadata } from "next"
import { JetBrains_Mono, Noto_Nastaliq_Urdu } from "next/font/google"
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

export const metadata: Metadata = {
  metadataBase: new URL("https://shahrukhazhar.com"),
  title: "Shahrukh Azhar — Product Design Lead",
  description:
    "Fractional Head of Design. Founder of Phoenux.Design and Ferd.AI. Formerly Lead Product Designer at Unlayer (YC W22). 12+ years across SaaS, enterprise, and AI products.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Shahrukh Azhar — Product Design Lead",
    description:
      "Product design leader specializing in systems, strategy, and complex B2B platforms.",
    type: "website",
    url: "https://shahrukhazhar.com",
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
      <body className="flex min-h-full flex-col font-mono">{children}</body>
    </html>
  )
}
