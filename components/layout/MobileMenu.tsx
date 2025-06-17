"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTranslation } from "@/hooks/useTranslation"
import type { NavigationItem } from "@/types"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  onScrollToSection: (sectionId: string) => void
  navigationItems: NavigationItem[]
}

export function MobileMenu({ isOpen, onClose, onScrollToSection, navigationItems }: MobileMenuProps) {
  const { t } = useTranslation()

  const handleLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      onScrollToSection(href.substring(1))
    } else if (href.startsWith("mailto:")) {
      // Les liens mailto s'ouvriront normalement
      window.location.href = href
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
            onClick={() => handleLinkClick(item.href)}
          >
            {item.label}
          </Link>
        ))}
        <Button
          className="bg-gosholo-orange hover:bg-gosholo-orange/90 text-white mt-3 transition-all duration-300 hover:scale-105 touch-target-44"
          onClick={() => {
            onScrollToSection("signup")
            onClose()
          }}
          aria-label={t("hero.goToSignup")}
        >
          {t("nav.signup")}
        </Button>
      </nav>
    </div>
  )
}
