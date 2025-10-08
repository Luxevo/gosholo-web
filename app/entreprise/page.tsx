"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ClientWrapper } from "@/components/ClientWrapper"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { useTranslation } from "@/hooks/useTranslation"
import Image from "next/image"

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
    <div className="flex flex-col min-h-screen bg-white">
      <Header isVisible={isVisible} onScrollToSection={scrollToSection} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              {/* Logo */}
              <div className="flex justify-center">
                <Image
                  src="/images/gosholo2-logo.png"
                  alt="gosholo"
                  width={400}
                  height={160}
                  className="h-32 md:h-40 lg:h-48 w-auto object-contain"
                />
              </div>

              {/* Tagline */}
              <h1 className="text-2xl md:text-3xl font-bold text-orange-600 leading-tight">
                {t("entreprise.tagline")}
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="w-full py-24 md:py-32" style={{ backgroundColor: '#5bc4db' }}>
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
                
                {/* Feature 1 */}
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="w-24 h-24 bg-orange-100 rounded-2xl flex items-center justify-center">
                      <Image
                        src="/visibilite.png"
                        alt="Visibilité locale"
                        width={64}
                        height={64}
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {t("entreprise.feature1Title")}
                  </h3>
                  <p className="leading-relaxed text-white">
                    {t("entreprise.feature1Description")}
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="w-24 h-24 bg-orange-100 rounded-2xl flex items-center justify-center">
                      <Image
                        src="/publication.png"
                        alt="Publication gratuite"
                        width={64}
                        height={64}
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {t("entreprise.feature2Title")}
                  </h3>
                  <p className="leading-relaxed text-white">
                    {t("entreprise.feature2Description")}
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="w-24 h-24 bg-orange-100 rounded-2xl flex items-center justify-center">
                      <Image
                        src="/croissance.png"
                        alt="Croissance rapide"
                        width={64}
                        height={64}
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {t("entreprise.feature3Title")}
                  </h3>
                  <p className="leading-relaxed text-white">
                    {t("entreprise.feature3Description")}
                  </p>
                </div>

              </div>
              
             

              {/* CTA Section */}
              <div className="text-center space-y-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {t("entreprise.ctaTitle")}
                </h2>
                <p className="text-lg max-w-2xl mx-auto text-white">
                  {t("entreprise.ctaDescription")}
                </p>
                
                {/* Dashboard Button */}
                <div className="pt-4">
                  <a
                    href="https://dashboard.gosholo.com/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#016167] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#018a8a]"
                  >
                    {t("entreprise.dashboardButton")}
                  </a>
                </div>
                 
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
       
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