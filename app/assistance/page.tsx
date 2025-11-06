"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ClientWrapper } from "@/components/ClientWrapper"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { useTranslation } from "@/hooks/useTranslation"
import { Button } from "@/components/ui/button"
import {
  MessageCircle,
  HelpCircle,
  Bug,
  CreditCard,
  Store,
  User,
  CheckCircle,
  ArrowLeft,
  Send,
  Mail,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { sendAssistanceEmail } from "@/app/actions/send-assistance-email"

function AssistanceContent() {
  const { isVisible } = useScrollAnimation()
  const { t } = useTranslation()
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  // Fonction pour gérer la navigation vers les sections de la page d'accueil
  const scrollToSection = (sectionId: string) => {
    // Rediriger vers la page d'accueil avec l'ancre
    router.push(`/#${sectionId}`)
  }

  const categories = [
    {
      id: "account",
      icon: User,
      title: t("assistance.categories.account.title"),
      description: t("assistance.categories.account.description"),
    },
    {
      id: "business",
      icon: Store,
      title: t("assistance.categories.business.title"),
      description: t("assistance.categories.business.description"),
    },
    {
      id: "payment",
      icon: CreditCard,
      title: t("assistance.categories.payment.title"),
      description: t("assistance.categories.payment.description"),
    },
    {
      id: "technical",
      icon: Bug,
      title: t("assistance.categories.technical.title"),
      description: t("assistance.categories.technical.description"),
    },
    {
      id: "general",
      icon: HelpCircle,
      title: t("assistance.categories.general.title"),
      description: t("assistance.categories.general.description"),
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const formData = new FormData(e.target as HTMLFormElement)

      // Ajouter la catégorie sélectionnée au FormData
      formData.append("category", selectedCategory)

      const result = await sendAssistanceEmail(formData)

      if (result.success) {
        setIsSubmitted(true)
      } else {
        setError(result.error || "Une erreur est survenue lors de l'envoi du message.")
      }
    } catch (err) {
      console.error("Erreur lors de l'envoi:", err)
      setError("Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header isVisible={isVisible} onScrollToSection={scrollToSection} />

        <main className="flex-1 bg-white">
          <div className="container px-4 py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-6 sm:mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gosholo-light-green mx-auto mb-6">
                  <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-gosholo-primary" />
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gosholo-primary mb-4 tracking-tight">
                  {t("assistance.success.title")}
                </h1>
                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 px-4">
                  {t("assistance.success.message")}
                </p>
                <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 mx-4 sm:mx-0 border border-gray-200">
                  <h3 className="font-bold text-gosholo-primary mb-3 text-base sm:text-lg">
                    {t("assistance.success.responseTime")}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-4">
                    {t("assistance.success.responseTimeValue")}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-300">
                    <p className="text-xs sm:text-sm text-gray-600">
                      {t("assistance.success.emailSent")} <strong className="text-gosholo-primary">assistance@gosholo.com</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
                <Link href="/" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-gosholo-light-green text-gosholo-primary hover:bg-gosholo-primary hover:text-white touch-target-44 text-sm sm:text-base font-bold rounded-xl">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {t("nav.backToHome")}
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-gosholo-primary text-gosholo-primary hover:bg-gosholo-primary hover:text-white touch-target-44 text-sm sm:text-base font-bold rounded-xl"
                  onClick={() => {
                    setIsSubmitted(false)
                    setSelectedCategory("")
                    setError("")
                  }}
                >
                  {t("assistance.success.sendAnother")}
                </Button>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header isVisible={isVisible} onScrollToSection={scrollToSection} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-gosholo-primary relative">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-6 sm:mb-8">
                <Link
                  href="/"
                  className="inline-flex items-center text-white/80 hover:text-gosholo-light-green transition-colors duration-300 mb-4 touch-target-44 p-2 -m-2"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  <span className="text-sm sm:text-base">{t("nav.backToHome")}</span>
                </Link>
              </div>

              <div className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold bg-gosholo-light-green text-gosholo-primary w-fit mx-auto mb-6 sm:mb-8">
                <MessageCircle className="mr-2 h-4 w-4" />
                {t("assistance.badge")}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 sm:mb-6 px-4 leading-tight">
                {t("assistance.title")}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed px-4">
                {t("assistance.description")}
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="w-full py-8 sm:py-12 md:py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
                <div className="p-4 sm:p-6 md:p-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gosholo-primary mb-6 sm:mb-8 text-center tracking-tight">
                    {t("assistance.form.title")}
                  </h2>

                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-red-800 text-sm font-medium">{t("assistance.form.error")}</p>
                        <p className="text-red-700 text-sm mt-1">{error}</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    {/* Category Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3 sm:mb-4">
                        {t("assistance.form.category")} <span className="text-red-500">*</span>
                      </label>
                      <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
                        {categories.map((category) => {
                          const IconComponent = category.icon
                          return (
                            <button
                              key={category.id}
                              type="button"
                              onClick={() => setSelectedCategory(category.id)}
                              className={`p-3 sm:p-4 rounded-xl border-2 text-left transition-all duration-300 hover:scale-105 touch-target-44 ${
                                selectedCategory === category.id
                                  ? "border-gosholo-light-green bg-gosholo-light-green/10 shadow-md"
                                  : "border-gray-200 hover:border-gosholo-light-green"
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <IconComponent
                                  className={`h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0 ${
                                    selectedCategory === category.id ? "text-gosholo-primary" : "text-gray-400"
                                  }`}
                                />
                                <div className="min-w-0 flex-1">
                                  <h3 className="font-medium text-gray-900 text-sm sm:text-base mb-1">
                                    {category.title}
                                  </h3>
                                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                                    {category.description}
                                  </p>
                                </div>
                              </div>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Personal Info */}
                    <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          {t("signup.firstName")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gosholo-light-green focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                          placeholder={t("signup.yourFirstName")}
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          {t("signup.lastName")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gosholo-light-green focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                          placeholder={t("signup.yourLastName")}
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          {t("signup.email")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gosholo-light-green focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                          placeholder={t("signup.yourEmail")}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          {t("signup.phoneNumber")}{" "}
                          <span className="text-gray-400 text-xs sm:text-sm">({t("assistance.form.optional")})</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gosholo-light-green focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                          placeholder={t("signup.phoneNumberPlaceholder")}
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("assistance.form.subject")} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gosholo-light-green focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                        placeholder={t("assistance.form.subjectPlaceholder")}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("assistance.form.message")} <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gosholo-light-green focus:border-transparent transition-all duration-300 resize-vertical text-sm sm:text-base min-h-[120px]"
                        placeholder={t("assistance.form.messagePlaceholder")}
                      />
                      <p className="text-xs sm:text-sm text-gray-500 mt-2">{t("assistance.form.messageHelp")}</p>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2 sm:pt-4">
                      <Button
                        type="submit"
                        disabled={!selectedCategory || isSubmitting}
                        className="w-full bg-gosholo-light-green text-gosholo-primary hover:bg-gosholo-primary hover:text-white py-3 sm:py-4 text-base sm:text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 touch-target-44 rounded-xl"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-gosholo-primary mr-2"></div>
                            {t("assistance.form.sending")}
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                            {t("assistance.form.send")}
                          </>
                        )}
                      </Button>
                      {!selectedCategory && (
                        <p className="text-xs sm:text-sm text-red-500 mt-2 text-center px-2">
                          {t("assistance.form.selectCategory")}
                        </p>
                      )}
                    </div>
                  </form>
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

export default function AssistancePage() {
  return (
    <ClientWrapper>
      <AssistanceContent />
    </ClientWrapper>
  )
}
