export type ConsentLevel = "unknown" | "essential" | "accepted"

export type ConsentState = {
  level: ConsentLevel
  analytics: boolean
  marketing: boolean
}

export const CONSENT_STORAGE_KEY = "sa-consent-v1"

export function consentFromLevel(level: ConsentLevel): ConsentState {
  if (level === "accepted") {
    return { level, analytics: true, marketing: true }
  }
  if (level === "essential") {
    return { level, analytics: false, marketing: false }
  }
  return { level: "unknown", analytics: false, marketing: false }
}

export function readConsent(): ConsentState {
  if (typeof window === "undefined") return consentFromLevel("unknown")
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    if (raw === "accepted" || raw === "essential") {
      return consentFromLevel(raw)
    }
  } catch {
    // ignore
  }
  return consentFromLevel("unknown")
}

export function writeConsent(level: "essential" | "accepted"): ConsentState {
  const state = consentFromLevel(level)
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, level)
  } catch {
    // ignore
  }
  window.dispatchEvent(
    new CustomEvent("sa-consent-change", { detail: state })
  )
  return state
}
