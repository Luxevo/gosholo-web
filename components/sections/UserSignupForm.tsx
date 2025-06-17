import React from "react";
import { Button } from "../ui/button";
import { FormInput } from "./form/FormInput"; // Import the standalone FormInput component
import { useTranslation } from "@/hooks/useTranslation";
import { useState, useCallback, useMemo } from "react";
import { Mail, Phone, Lock, Eye, EyeOff } from "lucide-react";

interface UserSignupFormProps {
  activeTab: "user" | "business";
}

export function UserSignupForm({ activeTab }: UserSignupFormProps) {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);

  // Memoize panel className to avoid recalculation
  const panelClassName = useMemo(
    () =>
      `space-y-4 sm:space-y-6 transition-all duration-500 ${
        activeTab === "user"
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-4"
      }`,
    [activeTab]
  );

  // Use useCallback for event handlers to prevent unnecessary re-renders
  const togglePassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  }, []);

  return (
    <div
      role="tabpanel"
      id="user-panel"
      aria-labelledby="user-tab"
      className={panelClassName}
    >
      <div className="text-left">
        <h3 className="text-lg sm:text-xl font-bold mb-2">
          {t("signup.userTitle")}
        </h3>
        <p className="text-gray-500 text-sm sm:text-base">
          {t("signup.userDescription")}
        </p>
      </div>

      <p className="text-xs text-gray-500 mb-4">{t("signup.requiredFields")}</p>

      <form
        className="space-y-4 sm:space-y-6"
        onSubmit={handleSubmit}
        noValidate
      >
        {/* First Name & Last Name Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          <FormInput
            id="firstName"
            name="firstName"
            label={t("signup.firstName")}
            placeholder={t("signup.yourFirstName")}
            required
          />

          <FormInput
            id="lastName"
            name="lastName"
            label={t("signup.lastName")}
            placeholder={t("signup.yourLastName")}
            required
          />
        </div>

        {/* Postal Code */}
        <FormInput
          id="userPostalCode"
          name="postalCode"
          label={t("signup.postalCode")}
          placeholder={t("signup.postalCodeExample")}
          pattern="[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d"
          helpText={t("signup.postalCodeFormat")}
          helpId="postal-code-help"
          required
        />

        {/* Email */}
        <FormInput
          id="userEmail"
          name="email"
          type="email"
          label={t("signup.email")}
          placeholder={t("signup.yourEmail")}
          icon={Mail}
          required
        />

        {/* Phone */}
        <FormInput
          id="phoneNumberUser"
          name="phoneNumber"
          type="tel"
          label={t("signup.phoneNumber")}
          placeholder={t("signup.phoneNumberPlaceholder")}
          icon={Phone}
          required
        />

        {/* Password */}
        <FormInput
          id="userPassword"
          name="password"
          type={showPassword ? "text" : "password"}
          label={t("signup.password")}
          placeholder={t("signup.yourPassword")}
          minLength={8}
          icon={Lock}
          helpText={t("signup.passwordHelp")}
          helpId="password-help"
          required
        >
          <button
            type="button"
            onClick={togglePassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 rounded transition-all duration-300 hover:scale-110 touch-target-44 p-2"
            aria-label={
              showPassword ? t("signup.hidePassword") : t("signup.showPassword")
            }
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </FormInput>

        {/* Terms Checkbox */}
        <div className="flex items-start">
          <input
            type="checkbox"
            id="termsUser"
            name="terms"
            className="h-5 w-5 text-gosholo-dark-teal border-gray-300 rounded focus:ring-gosholo-dark-teal mt-0.5 transition-all duration-300 hover:scale-110"
            required
            aria-required="true"
          />
          <label
            htmlFor="termsUser"
            className="ml-3 block text-sm text-gray-700"
          >
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

        <Button
          type="submit"
          className="w-full bg-gosholo-orange hover:bg-gosholo-orange/90 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg touch-target-44 text-base py-3"
        >
          {t("signup.createAccount")}
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
  );
}
