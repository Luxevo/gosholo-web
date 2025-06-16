"use client"

import type React from "react"

import { useLanguage } from "@/contexts/LanguageContext"
import { useEffect } from "react"

interface ClientWrapperProps {
  children: React.ReactNode
}

export function ClientWrapper({ children }: ClientWrapperProps) {
  const { language, isLoading } = useLanguage()

  // Update document language when language changes
  useEffect(() => {
    if (!isLoading && typeof document !== "undefined") {
      document.documentElement.lang = language
    }
  }, [language, isLoading])

  // Show loading state while language is being determined
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gosholo-orange mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
