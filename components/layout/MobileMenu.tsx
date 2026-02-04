"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTranslation } from "@/hooks/useTranslation"
import { usePathname } from "next/navigation"
import type { NavigationItem } from "@/types"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  onScrollToSection: (sectionId: string) => void
  onHomeNavigation: (e: React.MouseEvent) => void
  navigationItems: NavigationItem[]
  onOpenNewsletter?: () => void
}

export function MobileMenu({ isOpen, onClose, onScrollToSection, onHomeNavigation, navigationItems, onOpenNewsletter }: MobileMenuProps) {
  const { t } = useTranslation()
  const pathname = usePathname()

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    if (href === "/") {
      onHomeNavigation(e)
    } else if (href.startsWith("/#")) {
      e.preventDefault()
      const sectionId = href.substring(2) // Enlever "/#"
      onScrollToSection(sectionId)
    }
    onClose()
  }

  const handleNewsletterClick = () => {
    if (onOpenNewsletter) {
      onOpenNewsletter()
    }
    onClose()
  }

  return (
    <div
      className={`md:hidden bg-white border-b transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      role="navigation"
      aria-label={t("nav.mobileNavigation")}
    >
      <nav className="flex flex-col p-4 space-y-2">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm font-medium p-3 hover:bg-gosholo-light-blue/10 rounded-md transition-all duration-300 hover:translate-x-2 touch-target-44"
            onClick={(e) => handleLinkClick(item.href, e)}
          >
            {item.label}
          </Link>
        ))}
        <Button
          className="bg-gosholo-light-green text-gosholo-primary hover:bg-gosholo-primary hover:text-white mt-3 transition-all duration-300 hover:scale-105 touch-target-44 font-bold rounded-xl"
          onClick={handleNewsletterClick}
          aria-label={t("nav.newsletter")}
        >
          {t("nav.newsletter")}
        </Button>
      </nav>
    </div>
  )
}
