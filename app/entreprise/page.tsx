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
        <section className="w-full py-24 md:py-32 bg-gradient-to-br from-[#016167] to-[#018a8a] relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-10 w-32 h-32 bg-[#B2FD9D]/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-[#FF6233]/10 rounded-full blur-lg"></div>
            <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-md"></div>
          </div>
          <div className="container px-4 md:px-6 relative">
            <div className="max-w-6xl mx-auto">
              
              {/* CTA Section - Top */}
              <div className="text-center space-y-10 mb-20">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
                    {t("entreprise.ctaTitle")}
                  </h2>
                  <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 leading-relaxed">
                    {t("entreprise.ctaDescription")}
                  </p>
                </div>
                
                {/* Enhanced Dashboard Button */}
                <div className="pt-6">
                  <a
                    href="https://dashboard.gosholo.com/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center px-12 py-6 bg-transparent text-[#B2FD9D] font-semibold text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:bg-gradient-to-r hover:from-[#B2FD9D] hover:to-[#c8ffa8] hover:text-[#016167] border-2 border-[#B2FD9D]"
                  >
                    {t("entreprise.dashboardButton")}
                  </a>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
                
                {/* Feature 1 */}
                <div className="group text-center space-y-6 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="flex justify-center">
                    <div className="w-28 h-28 bg-gradient-to-br from-[#FF6233] to-[#ff8a66] rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src="/visibilite.png"
                        alt={t("entreprise.feature1Title")}
                        width={64}
                        height={64}
                        className="w-16 h-16 object-contain filter brightness-0 invert"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white tracking-tight">
                    {t("entreprise.feature1Title")}
                  </h3>
                  <p className="leading-relaxed text-white/90 text-lg">
                    {t("entreprise.feature1Description")}
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="group text-center space-y-6 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="flex justify-center">
                    <div className="w-28 h-28 bg-gradient-to-br from-[#FF6233] to-[#ff8a66] rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src="/publication.png"
                        alt={t("entreprise.feature2Title")}
                        width={64}
                        height={64}
                        className="w-16 h-16 object-contain filter brightness-0 invert"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white tracking-tight">
                    {t("entreprise.feature2Title")}
                  </h3>
                  <p className="leading-relaxed text-white/90 text-lg">
                    {t("entreprise.feature2Description")}
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="group text-center space-y-6 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="flex justify-center">
                    <div className="w-28 h-28 bg-gradient-to-br from-[#FF6233] to-[#ff8a66] rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src="/croissance.png"
                        alt={t("entreprise.feature3Title")}
                        width={64}
                        height={64}
                        className="w-16 h-16 object-contain filter brightness-0 invert"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white tracking-tight">
                    {t("entreprise.feature3Title")}
                  </h3>
                  <p className="leading-relaxed text-white/90 text-lg">
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