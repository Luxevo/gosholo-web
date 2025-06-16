"use client"

import { useTranslation } from "@/hooks/useTranslation"
import { Smartphone, Gift, Coffee } from "lucide-react"

export function WhoWeAreSection() {
  const { t } = useTranslation()

  const featureBadges = [
    { icon: Smartphone, label: t("whoWeAre.mobileApp") },
    { icon: Gift, label: t("whoWeAre.rewards") },
    { icon: Coffee, label: t("whoWeAre.localBusinesses") },
  ]

  return (
    <section
      id="who-we-are"
      className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-gosholo-dark-teal"
      role="region"
      aria-labelledby="who-we-are-title"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-12">
          <div
            className="inline-flex items-center justify-center rounded-full border px-3 py-2 text-xs sm:text-sm md:text-base font-semibold border-transparent bg-gosholo-orange text-white w-fit mx-auto transition-all duration-300 hover:scale-105 hover:shadow-lg"
            role="presentation"
          >
            {t("whoWeAre.badge")}
          </div>
          <h2
            id="who-we-are-title"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-gosholo-light-green text-center"
          >
            {t("whoWeAre.title")}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
          <p className="text-base sm:text-lg leading-relaxed text-gosholo-light-green text-center sm:text-left">
            {t("whoWeAre.description1")}
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-gosholo-light-green text-center sm:text-left">
            {t("whoWeAre.description2")}
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            {featureBadges.map((badge, index) => {
              const IconComponent = badge.icon
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/20 px-3 sm:px-4 py-2 rounded-full border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-lg group"
                  role="presentation"
                >
                  <IconComponent
                    className="h-4 w-4 sm:h-5 sm:w-5 text-gosholo-orange transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                    aria-hidden="true"
                  />
                  <span className="font-medium text-white text-xs sm:text-sm">{badge.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
