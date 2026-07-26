"use client"

import { useId, useState } from "react"

import { cn } from "@/lib/utils"

type SeeMoreProps = {
  children: React.ReactNode
  preview: React.ReactNode
  moreLabel?: string
  lessLabel?: string
  className?: string
  buttonClassName?: string
}

export function SeeMore({
  children,
  preview,
  moreLabel = "See more",
  lessLabel = "Show less",
  className,
  buttonClassName,
}: SeeMoreProps) {
  const [expanded, setExpanded] = useState(false)
  const panelId = useId()

  return (
    <div className={className}>
      {preview}
      <div id={panelId} hidden={!expanded}>
        {children}
      </div>
      <button
        type="button"
        className={cn(
          "mt-3 inline-flex min-h-11 items-center border-b border-foreground/40 py-2 text-sm font-medium tracking-tight text-foreground transition-colors hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:min-h-9 sm:py-0.5 sm:text-xs",
          buttonClassName
        )}
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => setExpanded((value) => !value)}
      >
        {expanded ? lessLabel : moreLabel}
      </button>
    </div>
  )
}

const SUMMARY_PREVIEW_LENGTH = 160

type ExpandableTextProps = {
  text: string
  className?: string
  moreLabel?: string
  lessLabel?: string
}

export function ExpandableText({
  text,
  className,
  moreLabel = "See more",
  lessLabel = "Show less",
}: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false)
  const panelId = useId()
  const needsCollapse = text.length > SUMMARY_PREVIEW_LENGTH + 40

  if (!needsCollapse) {
    return <p className={className}>{text}</p>
  }

  const breakAt = text.lastIndexOf(" ", SUMMARY_PREVIEW_LENGTH)
  const preview =
    breakAt > SUMMARY_PREVIEW_LENGTH * 0.6
      ? text.slice(0, breakAt)
      : text.slice(0, SUMMARY_PREVIEW_LENGTH)

  return (
    <div>
      <p className={className} id={panelId}>
        {expanded ? (
          text
        ) : (
          <>
            {preview}
            <span aria-hidden>…</span>
          </>
        )}
      </p>
      <button
        type="button"
        className="mt-2 inline-flex min-h-9 items-center border-b border-foreground/40 pb-0.5 text-xs font-medium tracking-tight text-foreground transition-colors hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => setExpanded((value) => !value)}
      >
        {expanded ? lessLabel : moreLabel}
      </button>
    </div>
  )
}
