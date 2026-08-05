"use client"

import { useEffect, useState } from "react"
import { Calendar, Mail } from "lucide-react"

import { TrackedCta } from "@/components/analytics/outbound-link"
import { profile } from "@/lib/resume"
import { cn } from "@/lib/utils"

export function StickyMobileCta({
  location = "sticky_mobile",
}: {
  location?: string
}) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.65)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-foreground/18 bg-canvas/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-sm transition-transform duration-300 sm:hidden",
        visible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="mx-auto flex max-w-5xl gap-2">
        <TrackedCta
          location={location}
          destination="calendly"
          href={profile.calendly}
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          className="flex-1"
        >
          <Calendar className="size-3.5" />
          Book a call
        </TrackedCta>
        <TrackedCta
          location={location}
          destination="email"
          href={`mailto:${profile.email}`}
          variant="outline"
          size="sm"
          className="flex-1"
        >
          <Mail className="size-3.5" />
          Email
        </TrackedCta>
      </div>
    </div>
  )
}
