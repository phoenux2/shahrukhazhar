"use client"

import { useEffect } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { track } from "@/lib/analytics"

const BOOKED_FLAG = "sa-calendly-booked-fired"

export function BookedHandler() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (searchParams.get("booked") !== "1") return

    try {
      if (!sessionStorage.getItem(BOOKED_FLAG)) {
        track("calendly_booked", { path: pathname })
        sessionStorage.setItem(BOOKED_FLAG, "1")
      }
    } catch {
      track("calendly_booked", { path: pathname })
    }

    const next = new URLSearchParams(searchParams.toString())
    next.delete("booked")
    const qs = next.toString()
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false })
  }, [searchParams, pathname, router])

  return null
}
