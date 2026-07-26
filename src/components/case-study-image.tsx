"use client"

import { Expand } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

type CaseStudyImageProps = {
  src: string
  alt: string
  caption?: string
  priority?: boolean
  /** Tighter thumbs for dense document layouts */
  size?: "default" | "compact"
  className?: string
}

export function CaseStudyImage({
  src,
  alt,
  caption,
  priority = false,
  size = "default",
  className,
}: CaseStudyImageProps) {
  const thumbMax =
    size === "compact"
      ? "max-h-[180px] sm:max-h-[220px] md:max-h-[260px]"
      : "max-h-[200px] sm:max-h-[240px] md:max-h-[300px]"

  return (
    <figure className={cn("w-full", className)}>
      <Dialog>
        <DialogTrigger
          className={cn(
            "group relative block w-full cursor-zoom-in rounded-none border border-foreground/18 bg-muted text-left outline-none transition-colors",
            "hover:border-foreground/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          )}
        >
          <div
            className={cn(
              "flex w-full items-center justify-center overflow-hidden px-3 py-3 md:px-4 md:py-4",
              thumbMax
            )}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              className={cn(
                "h-auto w-auto max-w-full object-contain transition-transform duration-300 motion-safe:group-hover:scale-[1.02]",
                thumbMax
              )}
            />
          </div>
          <span
            aria-hidden
            className="pointer-events-none absolute right-2 bottom-2 inline-flex items-center gap-1.5 border border-foreground/18 bg-canvas/95 px-2 py-1 text-[10px] font-medium tracking-wide text-foreground uppercase opacity-0 shadow-none transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
          >
            <Expand className="size-3" />
            Expand
          </span>
          <span className="sr-only">Open full-size image</span>
        </DialogTrigger>

        <DialogContent
          showCloseButton
          className={cn(
            "max-h-[92vh] w-[min(96vw,1120px)] max-w-[min(96vw,1120px)] gap-0 overflow-hidden rounded-none border border-foreground/18 bg-canvas p-0 ring-0 sm:max-w-[min(96vw,1120px)]",
            "translate-z-0"
          )}
        >
          <DialogTitle className="sr-only">{alt}</DialogTitle>
          <DialogDescription className="sr-only">
            Full-size preview. Press Escape to close.
          </DialogDescription>
          <div className="flex max-h-[92vh] items-center justify-center overflow-auto bg-muted/50 p-3 md:p-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="h-auto max-h-[calc(92vh-2.5rem)] w-auto max-w-full object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
      {caption ? (
        <figcaption className="mt-2 text-xs text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
