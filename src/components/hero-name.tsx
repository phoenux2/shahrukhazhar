"use client"

import { useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { profile } from "@/lib/resume"
import { cn } from "@/lib/utils"

export function HeroName() {
  const [open, setOpen] = useState(false)

  return (
    <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1">
      <h1 className="text-[2.125rem] leading-[1.1] font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
        {profile.name}
      </h1>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger
          type="button"
          aria-label="Show portrait"
          title="Peek at the face behind the CV"
          className={cn(
            "inline-flex size-10 shrink-0 items-center justify-center border border-transparent text-xl leading-none transition-colors",
            "hover:border-foreground/18 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            "sm:size-11 sm:text-2xl"
          )}
        >
          <span aria-hidden>🤳</span>
        </DialogTrigger>
        <DialogContent
          showCloseButton
          className="w-[min(92vw,360px)] max-w-[360px] gap-0 overflow-hidden rounded-none border border-foreground/18 bg-canvas p-0 sm:max-w-[360px]"
        >
          <DialogTitle className="sr-only">{profile.name}</DialogTitle>
          <DialogDescription className="sr-only">
            Portrait of {profile.name}
          </DialogDescription>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/portrait.png"
            alt={profile.name}
            className="block h-auto w-full bg-foreground object-cover"
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}
