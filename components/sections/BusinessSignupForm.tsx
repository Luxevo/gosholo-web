"use client"

import type React from "react"

import { Button } from "../ui/button"
import { useTranslation } from "@/hooks/useTranslation"
import { useState, useCallback, useMemo } from "react"
import { Mail, Phone, Lock, Eye, EyeOff } from "lucide-react"
import { FormInput } from "./form/FormInput"

interface BusinessSignupFormProps {
  activeTab: "user" | "business"
}

// Extract reusable input styles to avoid repetition
const INPUT_STYLES = {
  base: "w-full px-3 py-3 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal focus:border-transparent transition-all duration-300 hover:border-gosholo-light-blue text-base",
  withIcon:
    "w-full pl-10 pr-3 py-3 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal focus:border-transparent transition-all duration-300 hover:border-gosholo-light-blue text-base",
  withPasswordToggle:
    "w-full pl-10 pr-12 py-3 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal focus:border-transparent transition-all duration-300 hover:border-gosholo-light-blue text-base",
  icon: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 transition-all duration-300 group-focus-within:text-gosholo-dark-teal group-focus-within:scale-110",
  label: "text-sm font-medium text-gray-700",
  required: "text-red-500",
  container: "space-y-2",
  group: "relative group",
}

// Extract business type options to avoid inline repetition
const BUSINESS_TYPES = [
  { value: "", key: "selectCategory" },
  { value: "restaurant", key: "restaurant" },
  { value: "cafe", key: "cafe" },
  { value: "retail", key: "retail" },
  { value: "service", key: "service" },
  { value: "other", key: "other" },
]

export function BusinessSignupForm({ activeTab }: BusinessSignupFormProps) {
  const { t } = useTranslation()
  const [showPassword, setShowPassword] = useState(false)

  // Memoize panel className to avoid recalculation
  const panelClassName = useMemo(
    () =>
      `space-y-4 sm:space-y-6 transition-all duration-500 ${
        activeTab === "business" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
      }`,
    [activeTab],
  )

  // Use useCallback for event handlers to prevent unnecessary re-renders
  const togglePassword = useCallback(() => {
    setShowPassword((prev) => !prev)
  }, [])

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    // Add form submission logic here
  }, [])

  return (
    <div role="tabpanel" id="business-panel" aria-labelledby="business-tab" className={panelClassName}>
      <div className="text-left">
        <h3 className="text-lg sm:text-xl font-bold mb-2">{t("signup.businessTitle")}</h3>
        <p className="text-gray-500 text-sm sm:text-base">{t("signup.businessDescription")}</p>
      </div>

      <p className="text-xs text-gray-500 mb-4">{t("signup.requiredFields")}</p>

      <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit} noValidate>
        {/* Business Name */}
        <FormInput
          id="businessName"
          name="businessName"
          label={t("signup.businessName")}
          placeholder={t("signup.yourBusinessName")}
          required
        />

        {/* Business Type & City Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className={INPUT_STYLES.container}>
            <label htmlFor="businessType" className={INPUT_STYLES.label}>
              {t("signup.businessType")}{" "}
              <span className={INPUT_STYLES.required} aria-label="Required">
                *
              </span>
            </label>
            <select id="businessType" name="businessType" className={INPUT_STYLES.base} required aria-required="true">
              {BUSINESS_TYPES.map(({ value, key }) => (
                <option key={value} value={value}>
                  {t(`signup.${key}`)}
                </option>
              ))}
            </select>
          </div>

          <FormInput
            id="businessLocation"
            name="city"
            label={t("signup.city")}
            placeholder={t("signup.yourCity")}
            required
          />
        </div>

        {/* Postal Code */}
        <FormInput
          id="businessPostalCode"
          name="postalCode"
          label={t("signup.postalCode")}
          placeholder={t("signup.postalCodeExample")}
          pattern="[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d"
          helpText={t("signup.postalCodeFormat")}
          helpId="business-postal-code-help"
          required
        />

        {/* Email */}
        <FormInput
          id="businessEmail"
          name="email"
          type="email"
          label={t("signup.businessEmail")}
          placeholder={t("signup.businessEmailPlaceholder")}
          icon={Mail}
          className={INPUT_STYLES.withIcon}
          required
        />

        {/* Phone */}
        <FormInput
          id="phoneNumberBusiness"
          name="phoneNumber"
          type="tel"
          label={t("signup.phoneNumber")}
          placeholder={t("signup.phoneNumberPlaceholder")}
          icon={Phone}
          className={INPUT_STYLES.withIcon}
          required
        />

        {/* Password */}
        <FormInput
          id="businessPassword"
          name="password"
          type={showPassword ? "text" : "password"}
          label={t("signup.password")}
          placeholder={t("signup.yourPassword")}
          minLength={8}
          icon={Lock}
          className={INPUT_STYLES.withPasswordToggle}
          helpText={t("signup.passwordHelp")}
          helpId="business-password-help"
          required
        >
          <button
            type="button"
            onClick={togglePassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 rounded transition-all duration-300 hover:scale-110 touch-target-44 p-2"
            aria-label={showPassword ? t("signup.hidePassword") : t("signup.showPassword")}
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </FormInput>

        {/* Terms Checkbox */}
        <div className="flex items-start">
          <input
            type="checkbox"
            id="termsBusiness"
            name="terms"
            className="h-5 w-5 text-gosholo-dark-teal border-gray-300 rounded focus:ring-gosholo-dark-teal mt-0.5 transition-all duration-300 hover:scale-110"
            required
            aria-required="true"
          />
          <label htmlFor="termsBusiness" className="ml-3 block text-sm text-gray-700">
            {t("signup.terms")}{" "}
            <a
              href="#"
              className="text-gosholo-orange hover:underline focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 rounded transition-all duration-300 hover:scale-105"
            >
              {t("signup.termsOfUse")}
            </a>{" "}
            et la{" "}
            <a
              href="#"
              className="text-gosholo-orange hover:underline focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 rounded transition-all duration-300 hover:scale-105"
            >
              {t("signup.privacyPolicy")}
            </a>
          </label>
        </div>

        {/* Contest Rules Checkbox */}
        <div className="flex items-start">
          <input
            type="checkbox"
            id="contestRulesBusiness"
            name="contestRules"
            className="h-5 w-5 text-gosholo-dark-teal border-gray-300 rounded focus:ring-gosholo-dark-teal mt-0.5 transition-all duration-300 hover:scale-110"
            required
            aria-required="true"
          />
          <label htmlFor="contestRulesBusiness" className="ml-3 block text-sm text-gray-700">
            {t("signup.contestRules")}{" "}
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
              {t("signup.contestRulesLink")}
            </a>
          </label>
        </div>

        <Button
          type="submit"
          className="w-full bg-gosholo-orange hover:bg-gosholo-orange/90 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg touch-target-44 text-base py-3"
        >
          {t("signup.registerBusiness")}
        </Button>
      </form>

      <div className="text-center text-sm text-gray-500">
        {t("signup.alreadyHaveAccount")}{" "}
        <a
          href="#"
          className="text-gosholo-orange hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 rounded transition-all duration-300 hover:scale-105 touch-target-44 p-1"
        >
          {t("signup.signIn")}
        </a>
      </div>
    </div>
  )
}
