"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ClientWrapper } from "@/components/ClientWrapper"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { useTranslation } from "@/hooks/useTranslation"

function EntrepriseContent() {
  const { isVisible } = useScrollAnimation()
  const { t } = useTranslation()

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const headerHeight = 64
      const elementPosition = section.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header isVisible={isVisible} onScrollToSection={scrollToSection} />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gosholo-primary">
                {t("nav.entreprise")}
              </h1>
              <p className="max-w-[700px] text-gray-600 md:text-xl">
                Page en construction
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default function Entreprise() {
  return (
    <ClientWrapper>
      <EntrepriseContent />
    </ClientWrapper>
  )
}
