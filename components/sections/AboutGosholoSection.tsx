"use client"

import { useTranslation } from "@/hooks/useTranslation"
import { Heart, Check, Sparkles, ChevronRight } from "lucide-react"
import Image from "next/image"

export function AboutGosholoSection() {
  const { t } = useTranslation()

  const highlights = [
    {
      icon: Heart,
      text: t("aboutGosholo.highlight1"),
    },
    {
      icon: Sparkles,
      text: t("aboutGosholo.highlight2"),
    },
    {
      icon: Check,
      text: t("aboutGosholo.highlight3"),
    },
  ]

  return (
    <section
      id="about-gosholo"
      className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-white relative overflow-hidden"
      role="region"
      aria-labelledby="about-gosholo-title"
    >
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <Image
                src="/images/about-gosholo.jpeg"
                width={600}
                height={500}
                alt="Personne souriante utilisant gosholo"
                className="w-full h-auto rounded-2xl object-cover shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
            {/* Badge */}
            <div>
              <span className="inline-flex items-center justify-center rounded-full bg-gosholo-light-green px-4 py-2 text-sm font-semibold text-gosholo-primary">
                {t("aboutGosholo.missionBadge")}
              </span>
            </div>

            {/* Titre */}
            <h2
              id="about-gosholo-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gosholo-primary leading-tight"
            >
              {t("aboutGosholo.missionTitle")}
            </h2>

            {/* Texte avec mots-clés en Baskerville */}
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-700">
              <p className="text-lg sm:text-xl font-medium text-gosholo-primary">
                {t("aboutGosholo.missionText1")} <span className="font-baskerville italic">{t("aboutGosholo.missionText1Accent")}</span> {t("aboutGosholo.missionText1End")}
              </p>
              <p>
                {t("aboutGosholo.missionText2")} <span className="font-baskerville italic text-gosholo-primary font-semibold">{t("aboutGosholo.missionText2Accent")}</span> {t("aboutGosholo.missionText2End")}
              </p>
              <p className="font-medium text-gosholo-primary">
                {t("aboutGosholo.missionText3")}
              </p>
            </div>

            {/* Mini-points illustrés */}
            <div className="flex flex-wrap gap-4 sm:gap-6 pt-4">
              {highlights.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2 bg-gosholo-orange/10 rounded-full px-4 py-2 border border-gosholo-orange/20"
                  >
                    <IconComponent className="h-4 w-4 text-gosholo-orange" />
                    <span className="text-sm font-medium text-gosholo-primary">{item.text}</span>
                  </div>
                )
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-bold bg-gosholo-light-green text-gosholo-primary rounded-xl hover:bg-gosholo-primary hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                {t("aboutGosholo.ctaButton")}
                <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
