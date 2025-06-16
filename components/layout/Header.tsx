"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { NAVIGATION_ITEMS } from "@/constants"
import { MobileMenu } from "./MobileMenu"

interface HeaderProps {
  isVisible: boolean
  onScrollToSection: (sectionId: string) => void
}

export function Header({ isVisible, onScrollToSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b bg-white transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
    >
      <div className="container flex h-14 sm:h-16 items-center px-4">
        <div className="mr-2 sm:mr-4 flex">
          <Link href="/" className="flex items-center group" aria-label="Retour à l'accueil">
            <Image
              src="/images/gosholo-logo.png"
              alt="Logo Gosholo - Soutenez les commerces locaux"
              width={140}
              height={35}
              className="h-8 sm:h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>
        </div>

        <nav
          className="hidden md:flex items-center space-x-4 lg:space-x-6 mx-6"
          role="navigation"
          aria-label="Navigation principale"
        >
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-all duration-300 hover:text-gosholo-dark-teal hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gosholo-dark-teal after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center space-x-2 sm:space-x-4">
          <div className="hidden sm:block">
            <Button
              size="sm"
              className="bg-gosholo-orange hover:bg-gosholo-orange/90 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg text-xs sm:text-sm px-3 sm:px-4"
              onClick={() => onScrollToSection("signup")}
              aria-label="Aller à la section d'inscription"
            >
              S'inscrire
            </Button>
          </div>
          <button
            className={`md:hidden p-2 transition-all duration-300 hover:scale-110 touch-target-44 ${mobileMenuOpen ? "rotate-180" : "rotate-0"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileMenuOpen}
            style={{ minWidth: "44px", minHeight: "44px" }}
          >
            {mobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onScrollToSection={onScrollToSection}
      />
    </header>
  )
}
