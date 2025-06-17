"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ClientWrapper } from "@/components/ClientWrapper"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { useTranslation } from "@/hooks/useTranslation"
import { Button } from "@/components/ui/button"
import { MessageCircle, HelpCircle, Bug, CreditCard, Store, User, CheckCircle, ArrowLeft, Send } from "lucide-react"
import Link from "next/link"

function AssistanceContent() {
  const { isVisible } = useScrollAnimation()
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

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

    // Simuler l'envoi du formulaire
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header isVisible={isVisible} onScrollToSection={scrollToSection} />

        <main className="flex-1 bg-gosholo-light-green">
          <div className="container px-4 py-16 md:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                <CheckCircle className="h-16 w-16 text-gosholo-orange mx-auto mb-4" />
                <h1 className="text-3xl md:text-4xl font-bold text-gosholo-dark-teal mb-4">
                  {t("assistance.success.title")}
                </h1>
                <p className="text-lg text-gosholo-dark-teal mb-8">{t("assistance.success.message")}</p>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-8">
                  <h3 className="font-semibold text-gosholo-dark-teal mb-2">{t("assistance.success.responseTime")}</h3>
                  <p className="text-gosholo-dark-teal">{t("assistance.success.responseTimeValue")}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button className="bg-gosholo-orange hover:bg-gosholo-orange/90 text-white">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {t("nav.backToHome")}
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-gosholo-dark-teal text-gosholo-dark-teal hover:bg-gosholo-dark-teal hover:text-white"
                  onClick={() => setIsSubmitted(false)}
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
        <section className="w-full py-12 md:py-16 lg:py-20 bg-gosholo-light-blue">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-6">
                <Link
                  href="/"
                  className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-300 mb-4"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t("nav.backToHome")}
                </Link>
              </div>

              <div className="inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold border-transparent bg-gosholo-orange text-white w-fit mx-auto mb-6">
                <MessageCircle className="mr-2 h-4 w-4" />
                {t("assistance.badge")}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white mb-4">
                {t("assistance.title")}
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">{t("assistance.description")}</p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="w-full py-12 md:py-16 bg-gosholo-light-green">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gosholo-dark-teal mb-6 text-center">
                    {t("assistance.form.title")}
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Category Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        {t("assistance.form.category")} <span className="text-red-500">*</span>
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {categories.map((category) => {
                          const IconComponent = category.icon
                          return (
                            <button
                              key={category.id}
                              type="button"
                              onClick={() => setSelectedCategory(category.id)}
                              className={`p-4 rounded-lg border-2 text-left transition-all duration-300 hover:scale-105 ${
                                selectedCategory === category.id
                                  ? "border-gosholo-orange bg-gosholo-orange/5"
                                  : "border-gray-200 hover:border-gosholo-light-blue"
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <IconComponent
                                  className={`h-5 w-5 mt-0.5 ${
                                    selectedCategory === category.id ? "text-gosholo-orange" : "text-gray-400"
                                  }`}
                                />
                                <div>
                                  <h3 className="font-medium text-gray-900">{category.title}</h3>
                                  <p className="text-sm text-gray-500 mt-1">{category.description}</p>
                                </div>
                              </div>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Personal Info */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          {t("signup.firstName")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:border-transparent transition-all duration-300"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:border-transparent transition-all duration-300"
                          placeholder={t("signup.yourLastName")}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          {t("signup.email")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:border-transparent transition-all duration-300"
                          placeholder={t("signup.yourEmail")}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          {t("signup.phoneNumber")}{" "}
                          <span className="text-gray-400">({t("assistance.form.optional")})</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:border-transparent transition-all duration-300"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:border-transparent transition-all duration-300"
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
                        rows={6}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:border-transparent transition-all duration-300 resize-vertical"
                        placeholder={t("assistance.form.messagePlaceholder")}
                      />
                      <p className="text-sm text-gray-500 mt-2">{t("assistance.form.messageHelp")}</p>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={!selectedCategory || isSubmitting}
                        className="w-full bg-gosholo-orange hover:bg-gosholo-orange/90 text-white py-4 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            {t("assistance.form.sending")}
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            {t("assistance.form.send")}
                          </>
                        )}
                      </Button>
                      {!selectedCategory && (
                        <p className="text-sm text-red-500 mt-2 text-center">{t("assistance.form.selectCategory")}</p>
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
