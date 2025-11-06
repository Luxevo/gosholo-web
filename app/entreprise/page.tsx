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
        <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-gosholo-primary relative overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <div className="max-w-6xl mx-auto">
              
              {/* CTA Section - Top */}
              <div className="text-center space-y-8 mb-16 sm:mb-20">
                <div className="space-y-6">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                    {t("entreprise.ctaTitle")}
                  </h2>
                  <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-white/90 leading-relaxed">
                    {t("entreprise.ctaDescription")}
                  </p>
                </div>
                
                {/* Dashboard Button */}
                <div className="pt-6">
                  <a
                    href="https://dashboard.gosholo.com/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 bg-gosholo-light-green text-gosholo-primary font-bold text-base sm:text-lg rounded-xl hover:bg-gosholo-light-green/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    {t("entreprise.dashboardButton")}
                  </a>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                
                {/* Feature 1 */}
                <div className="group text-center space-y-6 bg-white rounded-2xl p-8 sm:p-10 shadow-lg border-2 border-gray-100 hover:border-gosholo-light-green transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-gosholo-orange to-gosholo-orange/80 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <Image
                        src="/visibilite.png"
                        alt={t("entreprise.feature1Title")}
                        width={56}
                        height={56}
                        className="w-12 h-12 sm:w-14 sm:h-14 object-contain filter brightness-0 invert"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gosholo-primary tracking-tight">
                    {t("entreprise.feature1Title")}
                  </h3>
                  <p className="leading-relaxed text-gray-600 text-base sm:text-lg">
                    {t("entreprise.feature1Description")}
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="group text-center space-y-6 bg-white rounded-2xl p-8 sm:p-10 shadow-lg border-2 border-gray-100 hover:border-gosholo-light-green transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-gosholo-orange to-gosholo-orange/80 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <Image
                        src="/publication.png"
                        alt={t("entreprise.feature2Title")}
                        width={56}
                        height={56}
                        className="w-12 h-12 sm:w-14 sm:h-14 object-contain filter brightness-0 invert"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gosholo-primary tracking-tight">
                    {t("entreprise.feature2Title")}
                  </h3>
                  <p className="leading-relaxed text-gray-600 text-base sm:text-lg">
                    {t("entreprise.feature2Description")}
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="group text-center space-y-6 bg-white rounded-2xl p-8 sm:p-10 shadow-lg border-2 border-gray-100 hover:border-gosholo-light-green transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-gosholo-orange to-gosholo-orange/80 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <Image
                        src="/croissance.png"
                        alt={t("entreprise.feature3Title")}
                        width={56}
                        height={56}
                        className="w-12 h-12 sm:w-14 sm:h-14 object-contain filter brightness-0 invert"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gosholo-primary tracking-tight">
                    {t("entreprise.feature3Title")}
                  </h3>
                  <p className="leading-relaxed text-gray-600 text-base sm:text-lg">
                    {t("entreprise.feature3Description")}
                  </p>
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