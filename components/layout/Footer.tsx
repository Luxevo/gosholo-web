"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "@/hooks/useTranslation"
import { useRouter, usePathname } from "next/navigation"
import type React from "react"

export function Footer() {
  const { t } = useTranslation()
  const router = useRouter()
  const pathname = usePathname()

  const navigationItems = [
    { href: "/", label: t("nav.home") },
    { href: "/#about-gosholo", label: t("nav.aboutGosholo") },
    { href: "/assistance", label: t("nav.assistance") },
  ]

  // Fonction pour gérer le retour à l'accueil (logo et lien accueil)
  const handleHomeNavigation = (e: React.MouseEvent) => {
    e.preventDefault()
    if (pathname === "/") {
      // On est déjà sur la page d'accueil, scroll vers le haut
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else {
      // On est sur une autre page, redirection vers la page d'accueil
      router.push("/")
    }
  }

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    if (href === "/") {
      handleHomeNavigation(e)
    } else if (href.startsWith("/#")) {
      e.preventDefault()
      const sectionId = href.substring(2) // Enlever "/#"

      if (pathname === "/") {
        // On est sur la page d'accueil, scroll direct
        const section = document.getElementById(sectionId)
        if (section) {
          const headerHeight = 64
          const elementPosition = section.offsetTop - headerHeight
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          })
        }
      } else {
        // On est sur une autre page, redirection vers la page d'accueil
        router.push("/")
        // Attendre que la page se charge puis scroller
        setTimeout(() => {
          const element = document.getElementById(sectionId)
          if (element) {
            const headerHeight = 64
            const elementPosition = element.offsetTop - headerHeight
            window.scrollTo({
              top: elementPosition,
              behavior: "smooth",
            })
          }
        }, 100)
      }
    }
    // Les autres liens (/assistance) fonctionnent normalement
  }

  return (
    <footer className="border-t bg-white" role="contentinfo">
      <div className="container py-4 sm:py-6 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <Link
              href="/"
              className="flex items-center group"
              aria-label={t("nav.backToHome")}
              onClick={handleHomeNavigation}
            >
              <Image
                src="/images/gosholo-logo.png"
                alt="Logo Gosholo"
                width={120}
                height={30}
                className="h-8 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <nav
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6"
              role="navigation"
              aria-label={t("nav.footerNavigation")}
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleLinkClick(item.href, e)}
                  className="text-xs sm:text-sm font-medium transition-all duration-300 hover:text-gosholo-primary focus:outline-none focus:ring-2 focus:ring-gosholo-primary focus:ring-offset-2 rounded hover:scale-105 touch-target-44 p-2"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.instagram.com/gosholo/"
              className="text-muted-foreground hover:text-gosholo-orange focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 rounded transition-all duration-300 hover:scale-110 hover:rotate-12 touch-target-44 p-2"
              aria-label={t("footer.followInstagram")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </Link>
          </div>
        </div>
        <div className="mt-4 sm:mt-6 border-t pt-4 sm:pt-6 text-center md:text-left">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} Gosholo. {t("footer.allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  )
}
