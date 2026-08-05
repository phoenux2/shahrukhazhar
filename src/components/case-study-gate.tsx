"use client"

import { useEffect, useRef, useState, useTransition } from "react"
import { Calendar, Coffee, Leaf, Video } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { track, trackCta } from "@/lib/analytics"
import {
  canViewCaseStudy,
  claimFreeCaseStudy,
  unlockAllCaseStudies,
} from "@/lib/case-study-access"
import { profile } from "@/lib/resume"
import { readAttribution } from "@/lib/utm"
import { cn } from "@/lib/utils"

type MeetPreference = "tea" | "coffee" | "zoom"

type CaseStudyGateProps = {
  slug: string
  title: string
  children: React.ReactNode
}

export function CaseStudyGate({ slug, title, children }: CaseStudyGateProps) {
  const [ready, setReady] = useState(false)
  const [blocked, setBlocked] = useState(false)
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [note, setNote] = useState("")
  const [preference, setPreference] = useState<MeetPreference>("coffee")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [pending, startTransition] = useTransition()
  const gateViewed = useRef(false)
  const caseViewed = useRef(false)

  useEffect(() => {
    const access = claimFreeCaseStudy(slug)
    const allowed = canViewCaseStudy(slug, access)
    setBlocked(!allowed)
    setOpen(!allowed)
    setReady(true)

    if (!caseViewed.current) {
      caseViewed.current = true
      track("case_study_view", { slug, unlocked: allowed })
    }
  }, [slug])

  useEffect(() => {
    if (!ready || !open || !blocked || gateViewed.current) return
    gateViewed.current = true
    track("gate_view", { slug, title })
  }, [ready, open, blocked, slug, title])

  function unlockAndClose() {
    unlockAllCaseStudies()
    setBlocked(false)
    setOpen(false)
  }

  function onBrowseFirst() {
    track("gate_browse_first", { slug, title })
    startTransition(() => {
      unlockAndClose()
    })
  }

  function openMailtoFallback() {
    const subject = encodeURIComponent(
      `Let's meet — interested in ${title}`
    )
    const body = encodeURIComponent(
      [
        `Hi Shahrukh,`,
        ``,
        `I'd love to meet over ${preference} and talk through the work in more detail.`,
        ``,
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Looking at: ${title} (/work/${slug})`,
        note.trim() ? `Note: ${note.trim()}` : null,
        ``,
        `— sent from shahrukhazhar.com`,
      ]
        .filter(Boolean)
        .join("\n")
    )
    window.open(
      `mailto:${profile.email}?subject=${subject}&body=${body}`,
      "_blank"
    )
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!name.trim() || !email.trim()) return

    setError(null)
    track("gate_submit_attempt", { slug, title, preference })

    const attribution = readAttribution() ?? undefined
    let delivered = false

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          note: note.trim(),
          preference,
          source: "case_study_gate",
          slug,
          title,
          attribution,
        }),
      })
      const data = (await response.json()) as {
        ok?: boolean
        fallback?: string
      }
      delivered = Boolean(data.ok)
      if (!delivered) {
        openMailtoFallback()
      }
    } catch {
      openMailtoFallback()
    }

    track("lead_captured", {
      slug,
      title,
      preference,
      delivery: delivered ? "api" : "mailto",
    })
    setSubmitted(true)
    unlockAndClose()
  }

  if (!ready) {
    return (
      <div className="min-h-[50vh] animate-pulse bg-muted/40" aria-hidden />
    )
  }

  return (
    <div className="relative">
      <div
        className={cn(
          blocked &&
            "max-h-[70vh] overflow-hidden select-none pointer-events-none"
        )}
        aria-hidden={blocked || undefined}
      >
        {children}
      </div>

      {blocked ? (
        <div
          className="absolute inset-0 z-30 flex items-start justify-center bg-canvas/30 pt-24 backdrop-blur-md supports-backdrop-filter:backdrop-blur-xl"
          aria-hidden
        >
          <div className="pointer-events-none mx-6 max-w-md border border-foreground/18 bg-canvas/70 p-6 text-center shadow-hard backdrop-blur-sm">
            <p className="micro-label">One free deep dive</p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/85">
              The rest of the work opens after we connect — or after you choose
              to browse first.
            </p>
          </div>
        </div>
      ) : null}

      <Dialog
        open={open}
        onOpenChange={(next) => {
          if (!next && blocked) {
            setOpen(true)
            return
          }
          setOpen(next)
        }}
      >
        <DialogContent
          showCloseButton={!blocked}
          className="max-h-[90vh] w-[min(96vw,440px)] max-w-[440px] overflow-y-auto rounded-none border border-foreground/18 bg-canvas p-0 sm:max-w-[440px]"
        >
          <div className="space-y-5 p-5 md:p-6">
            <DialogHeader className="gap-3 text-left">
              <p className="micro-label">Hey — I see you&apos;re interested</p>
              <DialogTitle className="text-xl font-semibold tracking-tight text-balance">
                Let&apos;s meet over tea, coffee, or a Zoom call
              </DialogTitle>
              <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
                I&apos;d love, as Shahrukh, to walk you through these projects in
                detail over a cup — or a quick video meet. Book a call, or drop
                your details. Prefer to decide after looking? That works too.
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-3 gap-2">
              {(
                [
                  ["tea", "Tea", Leaf],
                  ["coffee", "Coffee", Coffee],
                  ["zoom", "Zoom", Video],
                ] as const
              ).map(([value, label, Icon]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setPreference(value)}
                  className={cn(
                    "flex min-h-11 flex-col items-center justify-center gap-1 border px-2 py-2 text-xs font-medium transition-colors",
                    preference === value
                      ? "border-foreground bg-foreground text-background"
                      : "border-foreground/18 bg-canvas text-foreground hover:bg-muted"
                  )}
                >
                  <Icon className="size-4" />
                  {label}
                </button>
              ))}
            </div>

            <Button
              type="button"
              size="lg"
              className="w-full"
              disabled={pending}
              render={
                <a
                  href={profile.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              onClick={() => {
                track("gate_calendly", { slug, title })
                trackCta("gate", "calendly")
                unlockAndClose()
              }}
            >
              <Calendar className="size-4" />
              Book 20 min
            </Button>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="gate-name">Your name</Label>
                <Input
                  id="gate-name"
                  name="name"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-11 rounded-none"
                  placeholder="Alex Founder"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gate-email">Email</Label>
                <Input
                  id="gate-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 rounded-none"
                  placeholder="you@company.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gate-note">Anything I should know?</Label>
                <Textarea
                  id="gate-note"
                  name="note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="min-h-20 rounded-none"
                  placeholder="Timing, timezone, what you're curious about…"
                />
              </div>

              <Button
                type="submit"
                variant="outline"
                size="lg"
                className="w-full"
                disabled={pending}
              >
                Send details &amp; unlock the work
              </Button>
              {error ? (
                <p className="text-center text-xs text-destructive">{error}</p>
              ) : null}
            </form>

            <div className="border-t border-foreground/12 pt-4">
              <Button
                type="button"
                variant="ghost"
                size="lg"
                className="w-full"
                disabled={pending}
                onClick={onBrowseFirst}
              >
                Maybe I&apos;ll decide after looking at the work
              </Button>
              <p className="mt-2 text-center text-xs leading-relaxed text-muted-foreground">
                Unlocks the other case studies so you can browse first.
              </p>
            </div>

            {submitted ? (
              <p className="text-center text-xs text-foreground">
                Thanks — I&apos;ll follow up. The work is unlocked.
              </p>
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
