"use client"

import type React from "react"
import { Button } from "../ui/button"
import { FormInput } from "./form/FormInput"
import { useTranslation } from "@/hooks/useTranslation"
import { useCallback } from "react"
import { Mail, Phone } from "lucide-react"

export function NewsletterForm() {
  const { t } = useTranslation()

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    // Add form submission logic here
  }, [])

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="text-left">
        <h3 className="text-lg sm:text-xl font-bold mb-2">{t("newsletter.newsletterTitle")}</h3>
        <p className="text-gray-500 text-sm sm:text-base">{t("newsletter.newsletterDescription")}</p>
      </div>

      <p className="text-xs text-gray-500 mb-4">{t("newsletter.requiredFields")}</p>

      <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit} noValidate>
        {/* First Name & Last Name Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          <FormInput
            id="firstName"
            name="firstName"
            label={t("newsletter.firstName")}
            placeholder={t("newsletter.yourFirstName")}
            required
          />

          <FormInput
            id="lastName"
            name="lastName"
            label={t("newsletter.lastName")}
            placeholder={t("newsletter.yourLastName")}
            required
          />
        </div>

        {/* City & Postal Code Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          <FormInput
            id="city"
            name="city"
            label={t("newsletter.city")}
            placeholder={t("newsletter.yourCity")}
            required
          />

          <FormInput
            id="postalCode"
            name="postalCode"
            label={t("newsletter.postalCode")}
            placeholder={t("newsletter.postalCodeExample")}
            pattern="[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d"
            helpText={t("newsletter.postalCodeFormat")}
            helpId="postal-code-help"
            required
          />
        </div>

        {/* Email */}
        <FormInput
          id="email"
          name="email"
          type="email"
          label={t("newsletter.email")}
          placeholder={t("newsletter.yourEmail")}
          icon={Mail}
          required
        />

        {/* Phone */}
        <FormInput
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          label={t("newsletter.phoneNumber")}
          placeholder={t("newsletter.phoneNumberPlaceholder")}
          icon={Phone}
          required
        />

        {/* Terms Checkbox */}
        <div className="flex items-start">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            className="h-5 w-5 text-gosholo-dark-teal border-gray-300 rounded focus:ring-gosholo-dark-teal mt-0.5 transition-all duration-300 hover:scale-110"
            required
            aria-required="true"
          />
          <label htmlFor="terms" className="ml-3 block text-sm text-gray-700">
            {t("newsletter.terms")}{" "}
            <a
              href="/conditions-utilisation"
              className="text-gosholo-orange hover:underline focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 rounded transition-all duration-300 hover:scale-105"
            >
              {t("newsletter.termsOfUse")}
            </a>{" "}
            et la{" "}
            <a
              href="/politique-confidentialite"
              className="text-gosholo-orange hover:underline focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 rounded transition-all duration-300 hover:scale-105"
            >
              {t("newsletter.privacyPolicy")}
            </a>
          </label>
        </div>

        {/* Contest Rules Checkbox */}
        <div className="flex items-start">
          <input
            type="checkbox"
            id="contestRules"
            name="contestRules"
            className="h-5 w-5 text-gosholo-dark-teal border-gray-300 rounded focus:ring-gosholo-dark-teal mt-0.5 transition-all duration-300 hover:scale-110"
            required
            aria-required="true"
          />
          <label htmlFor="contestRules" className="ml-3 block text-sm text-gray-700">
            {t("newsletter.contestRules")}{" "}
            <a
              href="#contest"
              className="text-gosholo-orange hover:underline focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 rounded transition-all duration-300 hover:scale-105"
              onClick={(e) => {
                e.preventDefault()
                const section = document.getElementById("contest")
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              {t("newsletter.contestRulesLink")}
            </a>
          </label>
        </div>

        <Button
          type="submit"
          className="w-full bg-gosholo-orange hover:bg-gosholo-orange/90 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg touch-target-44 text-base py-3"
        >
          {t("newsletter.subscribeNewsletter")}
        </Button>
      </form>
    </div>
  )
}
