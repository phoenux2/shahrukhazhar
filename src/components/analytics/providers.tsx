"use client"

import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { usePathname, useSearchParams } from "next/navigation"
import posthog from "posthog-js"
import { PostHogProvider } from "posthog-js/react"
import Script from "next/script"
import {
  Suspense,
  useEffect,
  useState,
  type ReactNode,
} from "react"

import { BookedHandler } from "@/components/analytics/booked-handler"
import { UtmCapture } from "@/components/analytics/utm-capture"
import {
  type ConsentState,
  readConsent,
} from "@/lib/consent"
import { trackPageview } from "@/lib/analytics"

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY
const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com"
const LINKEDIN_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID

function PostHogPageViews() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!readConsent().analytics) return
    const url =
      pathname +
      (searchParams?.toString() ? `?${searchParams.toString()}` : "")
    trackPageview(url)
  }, [pathname, searchParams])

  return null
}

function useConsentState() {
  const [consent, setConsent] = useState<ConsentState>(() =>
    typeof window === "undefined"
      ? { level: "unknown", analytics: false, marketing: false }
      : readConsent()
  )

  useEffect(() => {
    setConsent(readConsent())
    const onChange = (event: Event) => {
      const detail = (event as CustomEvent<ConsentState>).detail
      if (detail) setConsent(detail)
    }
    window.addEventListener("sa-consent-change", onChange)
    return () => window.removeEventListener("sa-consent-change", onChange)
  }, [])

  return consent
}

function ensurePostHog() {
  if (!POSTHOG_KEY || posthog.__loaded) return
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    capture_pageview: false,
    capture_pageleave: true,
    persistence: "localStorage+cookie",
    session_recording: {
      maskAllInputs: true,
    },
  })
}

export function AnalyticsProviders({ children }: { children: ReactNode }) {
  const consent = useConsentState()

  useEffect(() => {
    if (consent.analytics) {
      ensurePostHog()
      posthog.opt_in_capturing?.()
    } else if (posthog.__loaded) {
      posthog.opt_out_capturing?.()
    }
  }, [consent.analytics])

  return (
    <PostHogProvider client={posthog}>
      {children}
      <UtmCapture />
      <Suspense fallback={null}>
        <BookedHandler />
        <PostHogPageViews />
      </Suspense>
      <Analytics />
      <SpeedInsights />
      {consent.analytics && GA_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true, send_page_view: false });
            `}
          </Script>
        </>
      ) : null}
      {consent.marketing && LINKEDIN_ID ? (
        <Script id="linkedin-insight" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "${LINKEDIN_ID}";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </Script>
      ) : null}
    </PostHogProvider>
  )
}
