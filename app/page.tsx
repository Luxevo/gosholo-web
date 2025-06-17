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
import { MapPin, Store, User, ChevronDown, Clock, UserPlus, Trophy } from "lucide-react"
import { useState } from "react"
import { UserSignupForm } from "@/components/sections/UserSignupForm"
import { BusinessSignupForm } from "@/components/sections/BusinessSignupForm"

function HomeContent() {
  const { isVisible } = useScrollAnimation()
  const { isOpen, setIsOpen } = usePopupTimer()
  const { t, tArray } = useTranslation()

  const [activeTab, setActiveTab] = useState<"user" | "business">("user")
  const [rulesOpen, setRulesOpen] = useState(false)

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
              <div className="grid gap-6 sm:gap-8">
                <div className="flex flex-col justify-center space-y-6">
                  <div className="border-2 border-dashed border-white p-4 sm:p-6 rounded-lg bg-gosholo-dark-teal">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">{t("contest.howToParticipate")}</h3>
                    <ol className="space-y-3 sm:space-y-4 text-white list-none">
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

                <div className="flex flex-col justify-center">
                  <div className="border-2 border-dashed border-white p-4 sm:p-6 rounded-lg bg-white">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gosholo-dark-teal flex items-center">
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
                        className="mr-2 text-gosholo-orange flex-shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M21 8v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8"></path>
                        <path d="m8 6 4-4 4 4"></path>
                        <path d="M12 2v14"></path>
                      </svg>
                      <span className="text-base sm:text-xl">{t("contest.contestDetails")}</span>
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 p-2">
                        <MapPin
                          className="h-4 w-4 sm:h-5 sm:w-5 text-gosholo-orange flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-sm sm:text-base">{t("contest.location")}</span>
                      </div>
                      <div className="flex items-center gap-2 p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gosholo-orange flex-shrink-0 sm:w-5 sm:h-5"
                          aria-hidden="true"
                        >
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span className="text-sm sm:text-base">{t("contest.endDate")}</span>
                      </div>
                      <div className="flex items-center gap-2 p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gosholo-orange flex-shrink-0 sm:w-5 sm:h-5"
                          aria-hidden="true"
                        >
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span className="text-sm sm:text-base">{t("contest.contact")}</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <div className="flex items-center justify-between">
                        <div className="text-sm">{t("contest.timeRemaining")}</div>
                        <div className="font-bold text-gosholo-orange">{t("contest.daysLeft")}</div>
                      </div>
                      <div
                        className="w-full bg-gray-200 rounded-full h-2.5 mt-2"
                        role="progressbar"
                        aria-valuenow={65}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={t("contest.progressLabel")}
                      >
                        <div className="bg-gosholo-orange h-2.5 rounded-full" style={{ width: "65%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contest Rules */}
              <div className="mt-8 sm:mt-12 bg-white rounded-lg shadow-sm border overflow-hidden">
                <button
                  onClick={() => setRulesOpen(!rulesOpen)}
                  className="w-full flex items-center justify-between p-4 font-bold text-base sm:text-lg text-gosholo-dark-teal hover:bg-gosholo-light-blue/10 focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 touch-target-44"
                  aria-expanded={rulesOpen}
                  aria-controls="rules-content"
                >
                  <span>{t("contest.rulesTitle")}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${
                      rulesOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out ${
                    rulesOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <div id="rules-content" className="p-4 sm:p-6 border-t text-sm overflow-y-auto max-h-96">
                    <h3 className="font-bold text-base sm:text-lg mb-4">{t("contestRules.title")}</h3>

                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h4 className="font-bold text-gosholo-dark-teal mb-2 text-sm sm:text-base">
                          {t("contestRules.prize")}
                        </h4>
                        <div className="space-y-1 text-xs sm:text-sm">
                          {tArray("contestRules.prizeContent").map((item: string, index: number) => (
                            <p key={index}>{item}</p>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-gosholo-dark-teal mb-2 text-sm sm:text-base">
                          {t("contestRules.duration")}
                        </h4>
                        <div className="space-y-1 text-xs sm:text-sm">
                          {tArray("contestRules.durationContent").map((item: string, index: number) => (
                            <p key={index}>{item}</p>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-gosholo-dark-teal mb-2 text-sm sm:text-base">
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
                        <h4 className="font-bold text-gosholo-dark-teal mb-2 text-sm sm:text-base">
                          {t("contestRules.eligibility")}
                        </h4>
                        <div className="space-y-1 text-xs sm:text-sm">
                          {tArray("contestRules.eligibilityContent").map((item: string, index: number) => (
                            <p key={index}>{item}</p>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-gosholo-dark-teal mb-2 text-sm sm:text-base">
                          {t("contestRules.draw")}
                        </h4>
                        <div className="space-y-1 text-xs sm:text-sm">
                          {tArray("contestRules.drawContent").map((item: string, index: number) => (
                            <p key={index}>{item}</p>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-gosholo-dark-teal mb-2 text-sm sm:text-base">
                          {t("contestRules.liability")}
                        </h4>
                        <div className="space-y-1 text-xs sm:text-sm">
                          {tArray("contestRules.liabilityContent").map((item: string, index: number) => (
                            <p key={index}>{item}</p>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-gosholo-dark-teal mb-2 text-sm sm:text-base">
                          {t("contestRules.consent")}
                        </h4>
                        <div className="space-y-1 text-xs sm:text-sm">
                          {tArray("contestRules.consentContent").map((item: string, index: number) => (
                            <p key={index}>{item}</p>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-gosholo-dark-teal mb-2 text-sm sm:text-base">
                          {t("contestRules.communications")}
                        </h4>
                        <div className="space-y-1 text-xs sm:text-sm">
                          {tArray("contestRules.communicationsContent").map((item: string, index: number) => (
                            <p key={index}>{item}</p>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bouton de participation à la fin des règlements */}
                    <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                      <Button
                        size="lg"
                        className="bg-gosholo-orange hover:bg-gosholo-orange/90 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg group touch-target-44 text-sm sm:text-base px-6 sm:px-8"
                        onClick={() => scrollToSection("signup")}
                        aria-label={t("contestRules.participateButton")}
                      >
                        <Trophy className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                        {t("contestRules.participateButton")}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8 sm:mt-12">
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
                onClick={() => scrollToSection("signup")}
                aria-label={t("cta.signupButton")}
              >
                <UserPlus className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                {t("cta.signupNow")}
              </Button>
            </div>
          </div>
        </section>

        {/* Signup Section */}
        <section
          id="signup"
          className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-gosholo-dark-teal"
          role="region"
          aria-labelledby="signup-title"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-12">
              <div
                className="inline-flex items-center justify-center rounded-full border px-3 py-2 text-xs sm:text-sm md:text-base font-semibold border-transparent bg-gosholo-orange text-white w-fit mx-auto transition-all duration-300 hover:scale-105 hover:shadow-lg"
                role="presentation"
              >
                {t("signup.badge")}
              </div>
              <h2
                id="signup-title"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-gosholo-light-green"
              >
                {t("signup.title")}
              </h2>
              <p className="max-w-[700px] text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4">
                {t("signup.description")}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
                {/* Tabs */}
                <div className="flex border-b" role="tablist" aria-label="Type d'inscription">
                  <button
                    className={`flex-1 py-3 sm:py-4 px-4 sm:px-6 text-center font-medium text-sm sm:text-base lg:text-lg transition-all duration-500 touch-target-44 ${
                      activeTab === "user"
                        ? "bg-gosholo-light-green/10 text-gosholo-dark-teal border-b-2 border-gosholo-dark-teal scale-105"
                        : "text-gray-500 hover:text-gosholo-dark-teal hover:scale-105"
                    }`}
                    onClick={() => setActiveTab("user")}
                    role="tab"
                    aria-selected={activeTab === "user"}
                    aria-controls="user-panel"
                    id="user-tab"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <User
                        className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 ${
                          activeTab === "user" ? "scale-110" : ""
                        }`}
                        aria-hidden="true"
                      />
                      <span>{t("signup.userTab")}</span>
                    </div>
                  </button>
                  <button
                    className={`flex-1 py-3 sm:py-4 px-4 sm:px-6 text-center font-medium text-sm sm:text-base lg:text-lg transition-all duration-500 touch-target-44 ${
                      activeTab === "business"
                        ? "bg-gosholo-light-green/10 text-gosholo-dark-teal border-b-2 border-gosholo-dark-teal scale-105"
                        : "text-gray-500 hover:text-gosholo-dark-teal hover:scale-105"
                    }`}
                    onClick={() => setActiveTab("business")}
                    role="tab"
                    aria-selected={activeTab === "business"}
                    aria-controls="business-panel"
                    id="business-tab"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Store
                        className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 ${
                          activeTab === "business" ? "scale-110" : ""
                        }`}
                        aria-hidden="true"
                      />
                      <span>{t("signup.businessTab")}</span>
                    </div>
                  </button>
                </div>

                {/* Tab Content */}
                <div className="p-4 sm:p-6 md:p-8">
                  {activeTab === "user" ? (
                    <UserSignupForm activeTab={activeTab} />
                  ) : (
                    <BusinessSignupForm activeTab={activeTab} />
                  )}
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
