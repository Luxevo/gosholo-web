import type React from "react"

export type Language = "fr" | "en"

export interface NavigationItem {
  href: string
  label: string
  ariaLabel?: string
}

export interface ContestStep {
  number: number
  description: string
}

export interface ContestDetail {
  icon: React.ReactNode
  text: string
}

export interface FeatureBadge {
  icon: React.ReactNode
  label: string
}

export interface ServiceCard {
  icon: React.ReactNode
  title: string
  description: string
  link: string
  ariaLabel: string
}

export type TabType = "user" | "business"

export interface FormData {
  firstName?: string
  lastName?: string
  businessName?: string
  businessType?: string
  city?: string
  postalCode: string
  email: string
  password: string
  terms: boolean
}

export interface Translation {
  [key: string]: string | Translation
}
