"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { AboutGosholoSection } from "@/components/sections/AboutGosholoSection"
import { ContestPopup } from "@/components/ui/ContestPopup"
import { ConstructionBadge } from "@/components/ui/ConstructionBadge"
import { ClientWrapper } from "@/components/ClientWrapper"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { usePopupTimer } from "@/hooks/usePopupTimer"
import { useTranslation } from "@/hooks/useTranslation"
import { Button } from "@/components/ui/button"
import { Clock, Mail } from "lucide-react"
import { NewsletterForm } from "@/components/sections/NewsletterForm"
import { ContestForm } from "@/components/sections/ContestForm"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

function HomeContent() {
  const { isVisible } = useScrollAnimation()
  const { isOpen, setIsOpen } = usePopupTimer()
  const { t, tArray } = useTranslation()
  const router = useRouter()

  // Gérer la navigation vers les sections avec les ancres
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const sectionId = hash.substring(1)
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
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const headerHeight = 64 // Hauteur approximative du header
      const elementPosition = section.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  const handleViewContest = () => {
    scrollToSection("contest")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header isVisible={isVisible} onScrollToSection={scrollToSection} />

      <main>
        <HeroSection isVisible={isVisible} onScrollToSection={scrollToSection} />

        {/* About Gosholo Section */}
        <AboutGosholoSection />

        {/* Contest Section */}
        <section
          id="contest"
          className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-gosholo-light-blue"
          role="region"
          aria-labelledby="contest-title"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div
                className="inline-flex items-center justify-center rounded-full border px-3 py-2 text-xs sm:text-sm md:text-base font-semibold border-transparent bg-gosholo-orange text-white w-fit mx-auto"
                role="presentation"
              >
                {t("contest.badge")}
              </div>
              <div className="space-y-2">
                <h2
                  id="contest-title"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white"
                >
                  {t("contest.title")}
                </h2>
                <p className="max-w-[900px] text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4">
                  {t("contest.description")}
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-4xl mt-8 sm:mt-12">
              {/* How to Participate - Full Width */}
              <div className="mb-8 sm:mb-12">
                <div className="border-2 border-dashed border-white p-4 sm:p-6 rounded-lg bg-gosholo-primary">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white text-center">
                    {t("contest.howToParticipate")}
                  </h3>
                  <ol className="space-y-3 sm:space-y-4 text-white list-none max-w-3xl mx-auto">
                    <li className="flex items-start gap-3">
                      <div
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-gosholo-orange text-white font-medium text-sm flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        1
                      </div>
                      <p className="text-sm sm:text-base">{t("contest.step1")}</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-gosholo-orange text-white font-medium text-sm flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        2
                      </div>
                      <p className="text-sm sm:text-base">
                        {t("contest.step2").split("@gosholo")[0]}
                        <a
                          href="https://www.instagram.com/gosholo/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gosholo-orange hover:text-gosholo-light-green transition-colors duration-300 font-semibold underline hover:no-underline"
                        >
                          @gosholo
                        </a>
                        {t("contest.step2").split("@gosholo")[1]}
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-gosholo-orange text-white font-medium text-sm flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        3
                      </div>
                      <p className="text-sm sm:text-base">{t("contest.step3")}</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-gosholo-orange text-white font-medium text-sm flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        4
                      </div>
                      <p className="text-sm sm:text-base">{t("contest.step4")}</p>
                    </li>
                  </ol>
                </div>
              </div>

              {/* Contest Rules - Collapsible with Vertical Layout */}
              <div className="mb-8 sm:mb-12">
                <details className="bg-white rounded-lg shadow-sm border overflow-hidden">
                  <summary className="p-4 sm:p-6 cursor-pointer flex items-center justify-between font-bold text-base sm:text-lg text-gosholo-primary hover:bg-gray-50 transition-colors duration-300">
                    {t("contestRules.title")}
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
                      className="transition-transform duration-300"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </summary>
                  <div className="p-4 sm:p-6 text-sm border-t max-h-96 overflow-y-auto">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-gosholo-primary mb-2 text-sm sm:text-base">
                          {t("contestRules.prize")}
                        </h4>
                        <div className="space-y-1 text-xs sm:text-sm">
                          {tArray("contestRules.prizeContent").map((item: string, index: number) => (
                            <p key={index}>{item}</p>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-gosholo-primary mb-2 text-sm sm:text-base">
                          {t("contestRules.duration")}
                        </h4>
                        <div className="space-y-1 text-xs sm:text-sm">
                          {tArray("contestRules.durationContent").map((item: string, index: number) => (
                            <p key={index}>{item}</p>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-gosholo-primary mb-2 text-sm sm:text-base">
                          {t("contestRules.contestDetails")}
                        </h4>
                        <div className="space-y-1 text-xs sm:text-sm">
                          {tArray("contestRules.contestDetailsContent").map((item: string, index: number) => (
                            <p key={index}>{item}</p>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-gosholo-primary mb-2 text-sm sm:text-base">
                          {t("contestRules.participation")}
                        </h4>
                        <p className="mb-2 text-xs sm:text-sm">{t("contestRules.participationIntro")}</p>
                        <div className="space-y-1 text-xs sm:text-sm">
                          {tArray("contestRules.participationContent").map((item: string, index: number) => (
                            <p key={index} className={item.startsWith("•") ? "ml-3" : ""}>
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-gosholo-primary mb-2 text-sm sm:text-base">
                          {t("contestRules.eligibility")}
                        </h4>
                        <div className="space-y-1 text-xs sm:text-sm">
                          {tArray("contestRules.eligibilityContent").map((item: string, index: number) => (
                            <p key={index}>{item}</p>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-gosholo-primary mb-2 text-sm sm:text-base">
                          {t("contestRules.draw")}
                        </h4>
                        <div className="space-y-1 text-xs sm:text-sm">
                          {tArray("contestRules.drawContent").map((item: string, index: number) => (
                            <p key={index}>{item}</p>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-gosholo-primary mb-2 text-sm sm:text-base">
                          {t("contestRules.liability")}
                        </h4>
                        <div className="space-y-1 text-xs sm:text-sm">
                          {tArray("contestRules.liabilityContent").map((item: string, index: number) => (
                            <p key={index}>{item}</p>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-gosholo-primary mb-2 text-sm sm:text-base">
                          {t("contestRules.consent")}
                        </h4>
                        <div className="space-y-1 text-xs sm:text-sm">
                          {tArray("contestRules.consentContent").map((item: string, index: number) => (
                            <p key={index}>{item}</p>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-gosholo-primary mb-2 text-sm sm:text-base">
                          {t("contestRules.communications")}
                        </h4>
                        <div className="space-y-1 text-xs sm:text-sm">
                          {tArray("contestRules.communicationsContent").map((item: string, index: number) => (
                            <p key={index}>{item}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>

              {/* Contest Form - Now at the bottom */}
              <div className="max-w-2xl mx-auto mb-8 sm:mb-12">
                <ContestForm />
              </div>

              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="bg-gosholo-orange hover:bg-gosholo-orange/90 text-white touch-target-44 text-sm sm:text-base px-6 sm:px-8"
                  disabled
                >
                  <Clock className="mr-2 h-4 w-4 animate-spin" />
                  {t("contest.appComingSoon")}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="w-full py-8 sm:py-12 md:py-16 lg:py-24 bg-gosholo-orange text-white"
          role="region"
          aria-labelledby="cta-title"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center space-y-6">
              <div className="space-y-4">
                <h2 id="cta-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  {t("cta.newTitle")}
                </h2>
                <p className="max-w-[800px] text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                  {t("cta.newDescription")}
                </p>
              </div>
              <Button
                size="lg"
                className="bg-white text-gosholo-orange hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg group touch-target-44 text-base sm:text-lg px-8 py-4"
                onClick={() => scrollToSection("newsletter")}
                aria-label={t("cta.signupButton")}
              >
                <Mail className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                {t("cta.signupNow")}
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section - Now at the bottom */}
        <section
          id="newsletter"
          className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-gosholo-primary"
          role="region"
          aria-labelledby="newsletter-title"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-12">
              <h2
                id="newsletter-title"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-gosholo-light-green"
              >
                {t("newsletter.title")}
              </h2>
              <p className="max-w-[700px] text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4">
                {t("newsletter.description")}
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
                <div className="p-4 sm:p-6 md:p-8">
                  <NewsletterForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ContestPopup isOpen={isOpen} onClose={() => setIsOpen(false)} onViewContest={handleViewContest} />

      <ConstructionBadge />
    </div>
  )
}

export default function Home() {
  return (
    <ClientWrapper>
      <HomeContent />
    </ClientWrapper>
  )
}
