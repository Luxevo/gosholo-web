"use client"

import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"

interface MobileRedirectClientProps {
  appScheme: string
}

export function MobileRedirectClient({ appScheme }: MobileRedirectClientProps) {
  const [isAttempting, setIsAttempting] = useState(true)

  useEffect(() => {
    // Only attempt redirect on mobile devices
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    if (isMobile) {
      // Attempt to open the app
      window.location.href = appScheme

      // After a short delay, assume the app didn't open
      const timeout = setTimeout(() => {
        setIsAttempting(false)
      }, 2500)

      return () => clearTimeout(timeout)
    } else {
      setIsAttempting(false)
    }
  }, [appScheme])

  if (!isAttempting) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-gosholo-primary flex flex-col items-center justify-center z-50">
      <Loader2 className="h-8 w-8 text-white animate-spin mb-4" />
      <p className="text-white text-lg">Ouverture de l'application...</p>
    </div>
  )
}
