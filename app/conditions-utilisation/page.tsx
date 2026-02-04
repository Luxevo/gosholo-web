"use client"
import { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ClientWrapper } from "@/components/ClientWrapper"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { useTranslation } from "@/hooks/useTranslation"
import { ArrowLeft, FileText } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

function TermsOfUseContent() {
  const { isVisible } = useScrollAnimation()
  const { t } = useTranslation()
  const router = useRouter()

  // Fonction pour gérer la navigation vers les sections de la page d'accueil
  const scrollToSection = (sectionId: string) => {
    // Rediriger vers la page d'accueil avec l'ancre
    router.push(`/#${sectionId}`)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header isVisible={isVisible} onScrollToSection={scrollToSection} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-8 sm:py-12 md:py-16 bg-gosholo-primary">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="mb-4 sm:mb-6">
                <Link
                  href="/"
                  className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-300 mb-4 touch-target-44 p-2 -m-2"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  <span className="text-sm sm:text-base">{t("nav.backToHome")}</span>
                </Link>
              </div>

              <div className="inline-flex items-center justify-center rounded-full border px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold border-transparent bg-gosholo-orange text-white w-fit mb-4 sm:mb-6">
                <FileText className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                {t("termsOfUse.badge")}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white mb-3 sm:mb-4">
                {t("termsOfUse.title")}
              </h1>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed">{t("termsOfUse.lastUpdated")}</p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="w-full py-8 sm:py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <div className="space-y-6 sm:space-y-8">
                  {/* Website Use */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gosholo-dark-teal mb-3 sm:mb-4">
                      {t("termsOfUse.websiteUse.title")}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {t("termsOfUse.websiteUse.content")}
                    </p>
                  </div>

                  {/* Modification of Terms */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gosholo-dark-teal mb-3 sm:mb-4">
                      {t("termsOfUse.modification.title")}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {t("termsOfUse.modification.content")}
                    </p>
                  </div>

                  {/* Site Modification */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gosholo-dark-teal mb-3 sm:mb-4">
                      {t("termsOfUse.siteModification.title")}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {t("termsOfUse.siteModification.content")}
                    </p>
                  </div>

                  {/* Hyperlinks */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gosholo-dark-teal mb-3 sm:mb-4">
                      {t("termsOfUse.hyperlinks.title")}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {t("termsOfUse.hyperlinks.content")}
                    </p>
                  </div>

                  {/* Child Protection */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gosholo-dark-teal mb-3 sm:mb-4">
                      {t("termsOfUse.childProtection.title")}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {t("termsOfUse.childProtection.content")}
                    </p>
                  </div>

                  {/* Limitation of Liability */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gosholo-dark-teal mb-3 sm:mb-4">
                      {t("termsOfUse.liability.title")}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {t("termsOfUse.liability.content")}
                    </p>
                  </div>

                  {/* Internet Risks */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gosholo-dark-teal mb-3 sm:mb-4">
                      {t("termsOfUse.internetRisks.title")}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {t("termsOfUse.internetRisks.content")}
                    </p>
                  </div>

                  {/* Security */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gosholo-dark-teal mb-3 sm:mb-4">
                      {t("termsOfUse.security.title")}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {t("termsOfUse.security.content")}
                    </p>
                  </div>

                  {/* Information Use */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gosholo-dark-teal mb-3 sm:mb-4">
                      {t("termsOfUse.informationUse.title")}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {t("termsOfUse.informationUse.content")}
                    </p>
                  </div>

                  {/* Intellectual Property */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gosholo-dark-teal mb-3 sm:mb-4">
                      {t("termsOfUse.intellectualProperty.title")}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {t("termsOfUse.intellectualProperty.content")}
                    </p>
                  </div>

                  {/* Comments and Suggestions */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gosholo-dark-teal mb-3 sm:mb-4">
                      {t("termsOfUse.comments.title")}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {t("termsOfUse.comments.content")}
                    </p>
                  </div>

                  {/* Site Security */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gosholo-dark-teal mb-3 sm:mb-4">
                      {t("termsOfUse.siteSecurity.title")}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {t("termsOfUse.siteSecurity.content")}
                    </p>
                  </div>

                  {/* Termination */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gosholo-dark-teal mb-3 sm:mb-4">
                      {t("termsOfUse.termination.title")}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {t("termsOfUse.termination.content")}
                    </p>
                  </div>

                  {/* Other Terms */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gosholo-dark-teal mb-3 sm:mb-4">
                      {t("termsOfUse.otherTerms.title")}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {t("termsOfUse.otherTerms.content")}
                    </p>
                  </div>

                  {/* Applicable Laws */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gosholo-dark-teal mb-3 sm:mb-4">
                      {t("termsOfUse.applicableLaws.title")}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {t("termsOfUse.applicableLaws.content")}
                    </p>
                  </div>

                  {/* Contact */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gosholo-dark-teal mb-3 sm:mb-4">
                      {t("termsOfUse.contact.title")}
                    </h2>
                    <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-2">
                      <p>{t("termsOfUse.contact.intro")}</p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium">Les Sociétés Haeyu Inc.</p>
                        <p>3626 rue Adam, Montréal, Québec, H1W 1Y9</p>
                        <p>
                          Email:{" "}
                          <a href="mailto:assistance@gosholo.com" className="text-gosholo-orange hover:underline">
                            assistance@gosholo.com
                          </a>
                        </p>
                      </div>
                      <p className="text-sm text-gray-600 italic mt-4">{t("termsOfUse.contact.ownership")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default function TermsOfUsePage() {
  return (
    <ClientWrapper>
      <TermsOfUseContent />
    </ClientWrapper>
  )
}
