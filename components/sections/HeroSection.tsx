"use client"
import { Star, ChevronRight } from "lucide-react"
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
        <div className="grid gap-6 lg:grid-cols-[1fr_350px] lg:gap-12 xl:grid-cols-[1fr_450px]">
          <div
            className={`flex flex-col justify-center space-y-4 sm:space-y-6 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
          >
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-white leading-tight">
                {t("hero.newTitle")}
              </h1>
              <p className="max-w-[600px] text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                {t("hero.newDescription")}
              </p>
            </div>
          </div>
          <div
            className={`relative mt-6 lg:mt-0 transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
          >
            <Image
              src="/images/hero-gosholo.jpeg"
              width={450}
              height={450}
              alt={t("hero.heroImageAlt")}
              className="mx-auto overflow-hidden rounded-xl object-cover w-full max-w-sm lg:max-w-none lg:aspect-square shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
