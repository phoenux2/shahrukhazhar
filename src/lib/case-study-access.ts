const STORAGE_KEY = "sa-case-study-access-v1"

export type CaseStudyAccess = {
  /** First case study slug viewed freely */
  freeSlug: string | null
  /** Unlocked all further case studies (browse first / booked interest) */
  unlocked: boolean
}

const DEFAULT: CaseStudyAccess = {
  freeSlug: null,
  unlocked: false,
}

export function readCaseStudyAccess(): CaseStudyAccess {
  if (typeof window === "undefined") return DEFAULT
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...DEFAULT }
    const parsed = JSON.parse(raw) as Partial<CaseStudyAccess>
    return {
      freeSlug: typeof parsed.freeSlug === "string" ? parsed.freeSlug : null,
      unlocked: Boolean(parsed.unlocked),
    }
  } catch {
    return { ...DEFAULT }
  }
}

export function writeCaseStudyAccess(next: CaseStudyAccess) {
  if (typeof window === "undefined") return
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
}

/** True when this slug can be viewed without the glass gate. */
export function canViewCaseStudy(
  slug: string,
  access: CaseStudyAccess = readCaseStudyAccess()
): boolean {
  if (access.unlocked) return true
  if (access.freeSlug === null) return true
  return access.freeSlug === slug
}

/** Claim the free view for this slug if none claimed yet. */
export function claimFreeCaseStudy(slug: string): CaseStudyAccess {
  const access = readCaseStudyAccess()
  if (access.freeSlug === null) {
    const next = { ...access, freeSlug: slug }
    writeCaseStudyAccess(next)
    return next
  }
  return access
}

export function unlockAllCaseStudies(): CaseStudyAccess {
  const next = { ...readCaseStudyAccess(), unlocked: true }
  writeCaseStudyAccess(next)
  return next
}
