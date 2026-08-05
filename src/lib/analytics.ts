import posthog from "posthog-js"

import { readConsent } from "@/lib/consent"
import { attributionProps } from "@/lib/utm"

export type CtaDestination =
  | "calendly"
  | "email"
  | "linkedin"
  | "resume"
  | "tel"
  | "studio"

export type AnalyticsEvent =
  | "cta_click"
  | "calendly_click"
  | "calendly_booked"
  | "case_study_view"
  | "gate_view"
  | "gate_browse_first"
  | "gate_calendly"
  | "gate_submit_attempt"
  | "lead_captured"
  | "resume_download"

type EventProps = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js" | "consent",
      targetOrAction: string,
      params?: Record<string, unknown>
    ) => void
    dataLayer?: unknown[]
    lintrk?: (action: string, payload?: Record<string, unknown>) => void
  }
}

function canTrackAnalytics() {
  return readConsent().analytics
}

export function track(event: AnalyticsEvent, props: EventProps = {}) {
  if (typeof window === "undefined") return
  if (!canTrackAnalytics()) return

  const payload = {
    ...attributionProps(),
    ...props,
  }

  try {
    if (posthog.__loaded) {
      posthog.capture(event, payload)
    }
  } catch {
    // ignore
  }

  try {
    window.gtag?.("event", event, payload)
  } catch {
    // ignore
  }
}

export function trackCta(
  location: string,
  destination: CtaDestination,
  extra: EventProps = {}
) {
  track("cta_click", { location, destination, ...extra })
  if (destination === "calendly") {
    track("calendly_click", { location, ...extra })
  }
  if (destination === "resume") {
    track("resume_download", { location, ...extra })
  }
}

export function trackPageview(url: string) {
  if (typeof window === "undefined") return
  if (!canTrackAnalytics()) return

  try {
    if (posthog.__loaded) {
      posthog.capture("$pageview", { $current_url: url })
    }
  } catch {
    // ignore
  }

  try {
    window.gtag?.("event", "page_view", {
      page_path: url,
      ...attributionProps(),
    })
  } catch {
    // ignore
  }
}
