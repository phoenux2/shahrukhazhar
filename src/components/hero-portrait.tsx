"use client"

import { useEffect, useId, useRef, useState } from "react"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

type HeroPortraitTriggerProps = {
  name: string
}

export function HeroPortraitTrigger({ name }: HeroPortraitTriggerProps) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false)
    }
    function onPointer(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    window.addEventListener("mousedown", onPointer)
    return () => {
      window.removeEventListener("keydown", onKey)
      window.removeEventListener("mousedown", onPointer)
    }
  }, [open])

  return (
    <div ref={rootRef} className="relative">
      <h1 className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[2.125rem] leading-[1.1] font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
        <span>{name}</span>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "Hide portrait" : "Show portrait"}
          onClick={() => setOpen((value) => !value)}
          className={cn(
            "inline-flex size-9 shrink-0 items-center justify-center rounded-none border border-foreground/18 bg-canvas text-lg leading-none transition-colors",
            "hover:border-foreground/40 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            "sm:size-10 sm:text-xl",
            open && "border-foreground bg-foreground text-background"
          )}
        >
          <span aria-hidden>🤳</span>
        </button>
      </h1>

      {/* Absolute panel — does not reflow hero typography or CTAs */}
      <div
        id={panelId}
        hidden={!open}
        className={cn(
          "absolute top-[calc(100%+0.75rem)] left-0 z-30 w-[min(100%,18rem)] border border-foreground/18 bg-canvas p-2 shadow-hard sm:w-72",
          !open && "pointer-events-none"
        )}
      >
        <div className="relative aspect-square overflow-hidden bg-ink">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/portrait.png"
            alt={`${name} — portrait`}
            className="size-full object-cover"
            width={800}
            height={800}
          />
          <button
            type="button"
            aria-label="Close portrait"
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 inline-flex size-8 items-center justify-center border border-foreground/18 bg-canvas/90 text-foreground transition-colors hover:bg-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X className="size-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}
