"use client"

import type React from "react"
import { Button } from "../ui/button"
import { FormInput } from "./form/FormInput"
import { useTranslation } from "@/hooks/useTranslation"
import { useCallback } from "react"
import { Mail, Phone, User } from "lucide-react"

export function ContestForm() {
  const { t } = useTranslation()

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    // Add form submission logic here
  }, [])

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className="p-4 sm:p-6 md:p-8">
        <div className="text-center mb-6">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gosholo-dark-teal">
            {t("contest.contestForm.title")}
          </h3>
          <p className="text-gray-500 text-sm sm:text-base">{t("contest.contestForm.description")}</p>
        </div>

        <p className="text-xs text-red-500 mb-4 text-center">{t("contest.contestForm.requiredFields")}</p>

        <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit} noValidate>
          {/* First Name & Last Name Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            <FormInput
              id="contestFirstName"
              name="firstName"
              label={t("contest.contestForm.firstName")}
              placeholder={t("contest.contestForm.firstNamePlaceholder")}
              icon={User}
              required
            />

            <FormInput
              id="contestLastName"
              name="lastName"
              label={t("contest.contestForm.lastName")}
              placeholder={t("contest.contestForm.lastNamePlaceholder")}
              icon={User}
              required
            />
          </div>

          {/* Phone & Postal Code Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            <FormInput
              id="contestPhone"
              name="phoneNumber"
              type="tel"
              label={t("contest.contestForm.phoneNumber")}
              placeholder={t("contest.contestForm.phoneNumberPlaceholder")}
              icon={Phone}
              required
            />

            <FormInput
              id="contestPostalCode"
              name="postalCode"
              label={t("contest.contestForm.postalCode")}
              placeholder={t("contest.contestForm.postalCodePlaceholder")}
              pattern="[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d"
              required
            />
          </div>

          {/* Email */}
          <FormInput
            id="contestEmail"
            name="email"
            type="email"
            label={t("contest.contestForm.email")}
            placeholder={t("contest.contestForm.emailPlaceholder")}
            icon={Mail}
            required
          />

          {/* Contest Rules Checkbox */}
          <div className="flex items-start">
            <input
              type="checkbox"
              id="contestRulesAccept"
              name="contestRulesAccept"
              className="h-5 w-5 text-gosholo-dark-teal border-gray-300 rounded focus:ring-gosholo-dark-teal mt-0.5 transition-all duration-300 hover:scale-110"
              required
              aria-required="true"
            />
            <label htmlFor="contestRulesAccept" className="ml-3 block text-sm text-gray-700">
              {t("contest.contestForm.acceptRules")}
            </label>
          </div>

          <Button
            type="submit"
            className="w-full bg-gosholo-orange hover:bg-gosholo-orange/90 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg touch-target-44 text-base py-3"
          >
            {t("contest.contestForm.submitContest")}
          </Button>
        </form>
      </div>
    </div>
  )
}
