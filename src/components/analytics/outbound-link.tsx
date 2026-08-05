"use client"

import type { ComponentProps, ReactNode } from "react"

import { Button } from "@/components/ui/button"
import {
  trackCta,
  type CtaDestination,
} from "@/lib/analytics"

type ButtonProps = ComponentProps<typeof Button>

type TrackedCtaProps = Omit<ButtonProps, "render"> & {
  location: string
  destination: CtaDestination
  href: string
  download?: boolean
  target?: string
  rel?: string
  children: ReactNode
}

export function TrackedCta({
  location,
  destination,
  href,
  download,
  target,
  rel,
  children,
  onClick,
  ...buttonProps
}: TrackedCtaProps) {
  return (
    <Button
      {...buttonProps}
      render={
        <a
          href={href}
          download={download || undefined}
          target={target}
          rel={rel}
        />
      }
      onClick={(event) => {
        trackCta(location, destination)
        onClick?.(event)
      }}
    >
      {children}
    </Button>
  )
}

type TrackedTextLinkProps = {
  location: string
  destination: CtaDestination
  href: string
  className?: string
  target?: string
  rel?: string
  children: ReactNode
  onClick?: () => void
}

export function TrackedTextLink({
  location,
  destination,
  href,
  className,
  target,
  rel,
  children,
  onClick,
}: TrackedTextLinkProps) {
  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={() => {
        trackCta(location, destination)
        onClick?.()
      }}
    >
      {children}
    </a>
  )
}
