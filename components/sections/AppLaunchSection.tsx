"use client"

import { Smartphone, Download } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "@/hooks/useTranslation"

export function AppLaunchSection() {
  const { t } = useTranslation()

  return (
    <section
      id="app-launch"
      className="w-full py-8 sm:py-12 md:py-16 lg:py-24 bg-gosholo-primary relative overflow-hidden"
      role="region"
      aria-labelledby="app-launch-title"
    >

      <div className="container px-4 md:px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-6 sm:space-y-8 mb-12">
            {/* Badge */}
            <div>
              <span className="inline-flex items-center justify-center rounded-full bg-gosholo-light-green px-4 py-2 text-sm font-semibold text-gosholo-primary">
                <Smartphone className="mr-2 h-4 w-4" />
                {t("aboutGosholo.comingSoon")}
              </span>
            </div>

            {/* Titre */}
            <h2
              id="app-launch-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
            >
              {t("aboutGosholo.launchingSoon")}
            </h2>

            {/* Description */}
            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-white/90 leading-relaxed">
              {t("aboutGosholo.appLaunchDescription")}
            </p>
          </div>

          {/* App Store Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                <Image
                  src="/apptore.png"
                  alt={t("aboutGosholo.appStore")}
                  width={64}
                  height={64}
                  className="w-14 h-14 object-contain"
                />
              </div>
              <span className="text-sm font-medium text-white/80">{t("aboutGosholo.appStore")}</span>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                <Image
                  src="/playstore.png"
                  alt={t("aboutGosholo.playStore")}
                  width={64}
                  height={64}
                  className="w-14 h-14 object-contain"
                />
              </div>
              <span className="text-sm font-medium text-white/80">{t("aboutGosholo.playStore")}</span>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-base sm:text-lg text-gosholo-light-green font-semibold">
              {t("aboutGosholo.stayTuned")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

