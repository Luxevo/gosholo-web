"use client"

import { Building2, Users, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "@/hooks/useTranslation"

export function AboutSection() {
  const { t } = useTranslation()

  const serviceCards = [
    {
      icon: Building2,
      title: t("about.visibilityTitle"),
      description: t("about.visibilityDescription"),
      link: "#signup",
      ariaLabel: t("about.learnMoreVisibility"),
    },
    {
      icon: Users,
      title: t("about.communityTitle"),
      description: t("about.communityDescription"),
      link: "#signup",
      ariaLabel: t("about.learnMoreCommunity"),
    },
    {
      icon: TrendingUp,
      title: t("about.impactTitle"),
      description: t("about.impactDescription"),
      link: "#signup",
      ariaLabel: t("about.learnMoreImpact"),
    },
  ]

  return (
    <section
      id="about"
      className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-gray-50"
      role="region"
      aria-labelledby="about-title"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div
            className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs sm:text-sm font-semibold bg-gosholo-light-green text-gosholo-primary w-fit mx-auto transition-all duration-300 hover:scale-105"
            role="presentation"
          >
            {t("about.badge")}
          </div>
          <div className="space-y-2">
            <h2
              id="about-title"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-gosholo-primary"
            >
              {t("about.title")}
            </h2>
            <p className="max-w-[900px] text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4">
              {t("about.description")}
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:gap-8 py-8 sm:py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {serviceCards.map((card, index) => {
            const IconComponent = card.icon
            return (
              <article
                key={index}
                className="flex flex-col items-center space-y-4 rounded-2xl border-2 border-gray-200 p-6 sm:p-8 shadow-sm transition-all duration-500 hover:shadow-xl bg-white hover:scale-105 hover:-translate-y-2 hover:border-gosholo-light-green group"
              >
                <div
                  className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gosholo-primary shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
                  role="presentation"
                >
                  <IconComponent
                    className="h-8 w-8 sm:h-10 sm:w-10 text-white transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gosholo-primary">{card.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{card.description}</p>
                </div>
                <Link
                  href={card.link}
                  className="inline-flex items-center text-sm font-medium text-gosholo-orange hover:text-gosholo-primary transition-colors duration-300 group-link touch-target-44 p-2"
                  aria-label={card.ariaLabel}
                >
                  {t("about.learnMore")}{" "}
                  <ArrowRight
                    className="ml-1 h-4 w-4 transition-transform duration-300 group-link-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
