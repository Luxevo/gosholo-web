"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { fr } from "@/locales/fr"
import { en } from "@/locales/en"

const translations = {
  fr,
  en,
}

export function useTranslation() {
  const { language } = useLanguage()

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        console.warn(`Translation key "${key}" not found for language "${language}"`)
        return key
      }
    }

    return typeof value === "string" ? value : key
  }

  const tArray = (key: string): string[] => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        console.warn(`Translation key "${key}" not found for language "${language}"`)
        return []
      }
    }

    return Array.isArray(value) ? value : []
  }

  return { t, tArray, language }
}
