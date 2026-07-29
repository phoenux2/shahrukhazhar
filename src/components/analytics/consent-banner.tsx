"use client"

import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  type ConsentState,
  readConsent,
  writeConsent,
} from "@/lib/consent"

export function ConsentBanner() {
  const [consent, setConsent] = useState<ConsentState | null>(null)

  useEffect(() => {
    setConsent(readConsent())
    const onChange = (event: Event) => {
      const detail = (event as CustomEvent<ConsentState>).detail
      if (detail) setConsent(detail)
    }
    window.addEventListener("sa-consent-change", onChange)
    return () => window.removeEventListener("sa-consent-change", onChange)
  }, [])

  if (!consent || consent.level !== "unknown") return null

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-foreground/18 bg-canvas/95 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-[0_-4px_24px_rgba(0,0,0,0.08)] backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <p className="text-sm font-semibold tracking-tight text-foreground">
            This site uses cookies
          </p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            We use cookies to improve your experience and analyze site usage.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:shrink-0">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setConsent(writeConsent("essential"))}
          >
            Essential only
          </Button>
          <Button
            type="button"
            size="sm"
            onClick={() => setConsent(writeConsent("accepted"))}
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  )
}
