export type Attribution = {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  gclid?: string
  li_fat_id?: string
  landing_path?: string
  referrer?: string
}

const UTM_STORAGE_KEY = "sa-attribution-v1"

const ATTR_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "li_fat_id",
] as const

export function captureAttributionFromUrl(
  search: string = typeof window !== "undefined" ? window.location.search : ""
): Attribution | null {
  if (typeof window === "undefined") return null

  const params = new URLSearchParams(search)
  const next: Attribution = {}
  let found = false

  for (const key of ATTR_KEYS) {
    const value = params.get(key)
    if (value) {
      next[key] = value
      found = true
    }
  }

  const existing = readAttribution()
  if (!found && existing) return existing

  if (!found && !existing) {
    const baseline: Attribution = {
      landing_path: `${window.location.pathname}${window.location.search}`,
      referrer: document.referrer || undefined,
    }
    writeAttribution(baseline)
    return baseline
  }

  const merged: Attribution = {
    ...existing,
    ...next,
    landing_path:
      existing?.landing_path ??
      `${window.location.pathname}${window.location.search}`,
    referrer: existing?.referrer ?? (document.referrer || undefined),
  }
  writeAttribution(merged)
  return merged
}

export function readAttribution(): Attribution | null {
  if (typeof window === "undefined") return null
  try {
    const raw = window.sessionStorage.getItem(UTM_STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as Attribution
  } catch {
    return null
  }
}

function writeAttribution(value: Attribution) {
  try {
    window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(value))
  } catch {
    // ignore
  }
}

export function attributionProps(): Record<string, string> {
  const attr = readAttribution()
  if (!attr) return {}
  return Object.fromEntries(
    Object.entries(attr).filter(
      (entry): entry is [string, string] => typeof entry[1] === "string"
    )
  )
}
