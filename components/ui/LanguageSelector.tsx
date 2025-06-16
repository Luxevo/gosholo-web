"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { useTranslation } from "@/hooks/useTranslation"
import { ChevronDown, Globe } from "lucide-react"
import type { Language } from "@/types"

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const languages: { code: Language; name: string }[] = [
    { code: "fr", name: t("language.french") },
    { code: "en", name: t("language.english") },
  ]

  const currentLanguage = languages.find((lang) => lang.code === language)

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gosholo-dark-teal transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 rounded-md touch-target-44"
        aria-label={t("language.selectLanguage")}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        <span className="hidden sm:inline">{currentLanguage?.name}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} aria-hidden="true" />

          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-20">
            <div className="py-1" role="menu" aria-orientation="vertical">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center justify-between px-4 py-2 text-sm text-left hover:bg-gosholo-light-blue/10 transition-colors duration-200 touch-target-44 ${
                    language === lang.code
                      ? "bg-gosholo-light-blue/20 text-gosholo-dark-teal font-medium"
                      : "text-gray-700"
                  }`}
                  role="menuitem"
                >
                  <span>{lang.name}</span>
                  {language === lang.code && <span className="text-gosholo-orange">✓</span>}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
