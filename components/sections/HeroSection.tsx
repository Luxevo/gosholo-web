"use client"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "@/hooks/useTranslation"
import { useLanguage } from "@/contexts/LanguageContext"

interface HeroSectionProps {
  isVisible: boolean
  onScrollToSection: (sectionId: string) => void
  onOpenAppModal: () => void
}

export function HeroSection({ isVisible, onScrollToSection, onOpenAppModal }: HeroSectionProps) {
  const { t } = useTranslation()
  const { language } = useLanguage()

  return (
    <section
      className="w-full lg:min-h-[85vh] bg-gosholo-primary overflow-hidden relative"
      role="banner"
    >
      <div className="container px-4 md:px-6 relative z-10 h-full">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center min-h-[85vh]">
          <div
            className={`flex flex-col justify-center space-y-8 lg:max-w-[55%] transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
          >
            <div className="space-y-2">
              <h1 className="text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                {t("hero.discover")}
              </h1>
              <h1 className="text-6xl xl:text-7xl font-extrabold tracking-tight text-gosholo-light-green leading-[1.1]">
                {t("hero.save")}
              </h1>
              <h1 className="text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                {t("hero.enjoy")}
              </h1>
            </div>

            <p className="max-w-[500px] text-white/80 text-xl leading-relaxed">
              {t("hero.newDescription")}
            </p>

            <div className="flex flex-row gap-4 pt-2">
              <Link
                href="/nos-offres"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-gosholo-light-green text-gosholo-primary rounded-xl hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              >
                {language === 'fr' ? "Voir nos offres" : "See our offers"}
                <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <button
                onClick={onOpenAppModal}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold bg-white/10 text-white rounded-xl border-2 border-white/30 hover:bg-white hover:text-gosholo-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl backdrop-blur-sm group"
              >
                <span>{language === 'fr' ? "Télécharger l'app" : "Download the app"}</span>
                <div className="flex gap-1">
                  <Image
                    src="/apptore.png"
                    alt="App Store"
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain opacity-80 group-hover:opacity-100"
                  />
                  <Image
                    src="/playstore.png"
                    alt="Play Store"
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain opacity-80 group-hover:opacity-100"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex lg:hidden flex-col pt-20 pb-[280px]">
          <div
            className={`flex flex-col items-center text-center space-y-6 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
          >
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
                {t("hero.discover")}
              </h1>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gosholo-light-green leading-[1.1]">
                {t("hero.save")}
              </h1>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
                {t("hero.enjoy")}
              </h1>
            </div>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-sm">
              {t("hero.newDescription")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                href="/nos-offres"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold bg-gosholo-light-green text-gosholo-primary rounded-xl"
              >
                {language === 'fr' ? "Voir nos offres" : "See our offers"}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>

              <button
                onClick={onOpenAppModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-bold bg-white/10 text-white rounded-xl border-2 border-white/30"
              >
                <span>{language === 'fr' ? "Télécharger l'app" : "Download the app"}</span>
                <Image src="/apptore.png" alt="App Store" width={18} height={18} className="h-4 w-4 object-contain" />
                <Image src="/playstore.png" alt="Play Store" width={18} height={18} className="h-4 w-4 object-contain" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile hand image - absolute bottom */}
      <div
        className={`lg:hidden absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        <Image
          src="/images/heromain.png"
          width={320}
          height={400}
          alt={language === 'fr' ? "Application gosholo sur mobile" : "Gosholo app on mobile"}
          className="w-[280px] sm:w-[320px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </div>

      {/* Desktop hand image */}
      <div
        className={`hidden lg:block absolute bottom-0 right-0 lg:right-[5%] xl:right-[10%] transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
      >
        <Image
          src="/images/heromain.png"
          width={600}
          height={720}
          alt={language === 'fr' ? "Application gosholo sur mobile" : "Gosholo app on mobile"}
          className="w-[450px] xl:w-[550px] 2xl:w-[600px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </div>
    </section>
  )
}
