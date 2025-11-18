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
      className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-gosholo-primary overflow-hidden relative"
      role="banner"
    >
      {/* Decorative accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px] items-center">
          {/* Left Content */}
          <div
            className={`flex flex-col justify-center space-y-8 sm:space-y-10 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
          >
            {/* Titres empilés */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none">
                {t("hero.discover")}
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none">
                {t("hero.save")}
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none">
                {t("hero.enjoy")}
              </h1>
            </div>

            {/* Description */}
            <p className="max-w-[600px] text-white/90 text-base sm:text-lg md:text-xl leading-relaxed">
              {t("hero.newDescription")}
            </p>

            {/* CTA Button */}
            <div>
              <button
                onClick={() => onScrollToSection("about-gosholo")}
                className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-bold bg-gosholo-light-green text-gosholo-primary rounded-xl hover:bg-gosholo-primary hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                {t("hero.learnMore")}
                <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              
            </div>
          </div>
          

          {/* Right Image */}
          <div
            className={`relative mt-6 lg:mt-0 transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
          >
            <Image
              src="/images/hero-gosholo.jpeg"
              width={450}
              height={450}
              alt={t("hero.heroImageAlt")}
              className="mx-auto overflow-hidden rounded-xl object-cover w-full max-w-sm lg:max-w-none lg:aspect-square shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
