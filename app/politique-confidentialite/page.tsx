"use client"
import { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ClientWrapper } from "@/components/ClientWrapper"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { useTranslation } from "@/hooks/useTranslation"
import { ArrowLeft, Shield } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

function PrivacyPolicyContent() {
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
                <Shield className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                {t("privacyPolicy.badge")}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white mb-3 sm:mb-4">
                {t("privacyPolicy.title")}
              </h1>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed">{t("privacyPolicy.lastUpdated")}</p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="w-full py-8 sm:py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                {/* Introduction */}
                <div className="mb-6 sm:mb-8">
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {t("privacyPolicy.introduction")}
                  </p>
                </div>

                <div className="space-y-6 sm:space-y-8">
                  {/* Information We Collect */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gosholo-dark-teal mb-3 sm:mb-4">
                      {t("privacyPolicy.informationCollected.title")}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
                      {t("privacyPolicy.informationCollected.intro")}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base ml-4">
                      <li>
                        <strong>{t("privacyPolicy.informationCollected.personalInfo.title")} :</strong>{" "}
                        {t("privacyPolicy.informationCollected.personalInfo.description")}
                      </li>
                      <li>
                        <strong>{t("privacyPolicy.informationCollected.technicalInfo.title")} :</strong>{" "}
                        {t("privacyPolicy.informationCollected.technicalInfo.description")}
                      </li>
                      <li>
                        <strong>{t("privacyPolicy.informationCollected.transactionalData.title")} :</strong>{" "}
                        {t("privacyPolicy.informationCollected.transactionalData.description")}
                      </li>
                    </ul>
                  </div>

                  {/* Use of Information */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gosholo-dark-teal mb-3 sm:mb-4">
                      {t("privacyPolicy.useOfInformation.title")}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
                      {t("privacyPolicy.useOfInformation.intro")}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base ml-4">
                      <li>
                        <strong>{t("privacyPolicy.useOfInformation.provideServices.title")} :</strong>{" "}
                        {t("privacyPolicy.useOfInformation.provideServices.description")}
                      </li>
                      <li>
                        <strong>{t("privacyPolicy.useOfInformation.communicate.title")} :</strong>{" "}
                        {t("privacyPolicy.useOfInformation.communicate.description")}
                      </li>
                      <li>
                        <strong>{t("privacyPolicy.useOfInformation.analyze.title")} :</strong>{" "}
                        {t("privacyPolicy.useOfInformation.analyze.description")}
                      </li>
                      <li>
                        <strong>{t("privacyPolicy.useOfInformation.legalCompliance.title")} :</strong>{" "}
                        {t("privacyPolicy.useOfInformation.legalCompliance.description")}
                      </li>
                    </ul>
                  </div>

                  {/* Sharing Information */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gosholo-dark-teal mb-3 sm:mb-4">
                      {t("privacyPolicy.sharingInformation.title")}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
                      {t("privacyPolicy.sharingInformation.intro")}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base ml-4">
                      <li>
                        <strong>{t("privacyPolicy.sharingInformation.businessPartners.title")} :</strong>{" "}
                        {t("privacyPolicy.sharingInformation.businessPartners.description")}
                      </li>
                      <li>
                        <strong>{t("privacyPolicy.sharingInformation.serviceProviders.title")} :</strong>{" "}
                        {t("privacyPolicy.sharingInformation.serviceProviders.description")}
                      </li>
                      <li>
                        <strong>{t("privacyPolicy.sharingInformation.legalAuthorities.title")} :</strong>{" "}
                        {t("privacyPolicy.sharingInformation.legalAuthorities.description")}
                      </li>
                    </ul>
                  </div>

                  {/* Data Retention and Security */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gosholo-dark-teal mb-3 sm:mb-4">
                      {t("privacyPolicy.dataRetention.title")}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {t("privacyPolicy.dataRetention.content")}
                    </p>
                  </div>

                  {/* Your Rights and Choices */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gosholo-dark-teal mb-3 sm:mb-4">
                      {t("privacyPolicy.yourRights.title")}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
                      {t("privacyPolicy.yourRights.intro")}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base ml-4">
                      <li>
                        <strong>{t("privacyPolicy.yourRights.accessCorrection.title")} :</strong>{" "}
                        {t("privacyPolicy.yourRights.accessCorrection.description")}
                      </li>
                      <li>
                        <strong>{t("privacyPolicy.yourRights.withdrawalConsent.title")} :</strong>{" "}
                        {t("privacyPolicy.yourRights.withdrawalConsent.description")}
                      </li>
                      <li>
                        <strong>{t("privacyPolicy.yourRights.rightErasure.title")} :</strong>{" "}
                        {t("privacyPolicy.yourRights.rightErasure.description")}
                      </li>
                    </ul>
                  </div>

                  {/* Cookies and Similar Technologies */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gosholo-dark-teal mb-3 sm:mb-4">
                      {t("privacyPolicy.cookies.title")}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
                      {t("privacyPolicy.cookies.intro")}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base ml-4">
                      <li>{t("privacyPolicy.cookies.improveExperience")}</li>
                      <li>{t("privacyPolicy.cookies.analyzeUsage")}</li>
                      <li>{t("privacyPolicy.cookies.personalizeContent")}</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base mt-4">
                      {t("privacyPolicy.cookies.manageCookies")}
                    </p>
                  </div>

                  {/* Changes to Privacy Policy */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gosholo-dark-teal mb-3 sm:mb-4">
                      {t("privacyPolicy.changes.title")}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {t("privacyPolicy.changes.content")}
                    </p>
                  </div>

                  {/* Contact */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gosholo-dark-teal mb-3 sm:mb-4">
                      {t("privacyPolicy.contact.title")}
                    </h2>
                    <div className="text-gray-700 leading-relaxed text-sm sm:text-base space-y-2">
                      <p>{t("privacyPolicy.contact.intro")}</p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p>
                          Email:{" "}
                          <a href="mailto:assistance@gosholo.com" className="text-gosholo-orange hover:underline">
                            assistance@gosholo.com
                          </a>
                        </p>
                      </div>
                      <p className="text-sm text-gray-600 italic mt-4">{t("privacyPolicy.contact.ownership")}</p>
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

export default function PrivacyPolicyPage() {
  return (
    <ClientWrapper>
      <PrivacyPolicyContent />
    </ClientWrapper>
  )
}
