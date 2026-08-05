"use client"

import { useEffect } from "react"

import { captureAttributionFromUrl } from "@/lib/utm"

export function UtmCapture() {
  useEffect(() => {
    captureAttributionFromUrl()
  }, [])
  return null
}
