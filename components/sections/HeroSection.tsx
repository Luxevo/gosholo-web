"use client"

import { Button } from "@/components/ui/button"
import { Star, ChevronRight, Clock } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "@/hooks/useTranslation"

interface HeroSectionProps {
  isVisible: boolean
  onScrollToSection: (sectionId: string) => void
}

export function HeroSection({ isVisible, onScrollToSection }: HeroSectionProps) {
  const { t } = useTranslation()

  return (
    <section
      className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-gosholo-light-blue overflow-hidden"
      role="banner"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div
            className={`flex flex-col justify-center space-y-4 sm:space-y-6 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
          >
            <button
              onClick={() => onScrollToSection("contest")}
              className="inline-flex items-center justify-center rounded-full border px-3 py-2 text-xs sm:text-sm font-semibold transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 border-transparent bg-gosholo-orange text-white w-fit mx-auto hover:bg-gosholo-orange/90 cursor-pointer group hover:scale-105 hover:shadow-lg animate-pulse touch-target-44"
              aria-label={t("hero.seeContest")}
            >
              <Star className="mr-1.5 h-3 w-3 sm:h-4 sm:w-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12" />
              <span className="px-0.5 group-hover:underline whitespace-nowrap">{t("hero.newContest")}</span>
              <ChevronRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
            </button>
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-white leading-tight">
                {t("hero.title")}{" "}
                <span className="text-gosholo-light-green animate-pulse">{t("hero.titleHighlight")}</span>
              </h1>
              <p className="max-w-[600px] text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                {t("hero.description")}
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button
                size="lg"
                className="bg-gosholo-orange hover:bg-gosholo-orange/90 text-white group transition-all duration-300 hover:scale-105 hover:shadow-lg touch-target-44 text-sm sm:text-base"
                disabled
              >
                <Clock className="mr-2 h-4 w-4 animate-spin" />
                {t("hero.comingSoon")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-gosholo-dark-teal border-white hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg touch-target-44 text-sm sm:text-base"
                onClick={() => onScrollToSection("about")}
              >
                {t("hero.learnMore")}
              </Button>
            </div>
          </div>
          <div
            className={`relative mt-6 lg:mt-0 transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
          >
            <Image
              src="/images/local-food.png"
              width={550}
              height={550}
              alt={t("hero.heroImageAlt")}
              className="mx-auto overflow-hidden rounded-xl object-cover w-full max-w-md lg:max-w-none lg:aspect-square shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
