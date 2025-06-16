"use client"

import { useEffect, useState } from "react"
import { POPUP_DELAY } from "@/constants"

export function usePopupTimer() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, POPUP_DELAY)

    return () => clearTimeout(timer)
  }, [])

  return { isOpen, setIsOpen }
}
