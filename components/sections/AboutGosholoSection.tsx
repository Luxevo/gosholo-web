"use client"

import { useTranslation } from "@/hooks/useTranslation"
import { Smartphone, MapPin, Gift, Zap, Users, Calendar, ArrowRight, Star } from "lucide-react"

export function AboutGosholoSection() {
  const { t } = useTranslation()

  const features = [
    {
      icon: Gift,
      title: t("aboutGosholo.feature1Title"),
      description: t("aboutGosholo.feature1Description"),
      bgColor: "bg-gosholo-orange",
    },
    {
      icon: Zap,
      title: t("aboutGosholo.feature2Title"),
      description: t("aboutGosholo.feature2Description"),
      bgColor: "bg-gosholo-light-blue",
    },
    {
      icon: Calendar,
      title: t("aboutGosholo.feature3Title"),
      description: t("aboutGosholo.feature3Description"),
      bgColor: "bg-gosholo-light-green",
    },
  ]

  const benefits = [
    { icon: MapPin, text: t("aboutGosholo.benefit1") },
    { icon: Users, text: t("aboutGosholo.benefit2") },
    { icon: Star, text: t("aboutGosholo.benefit3") },
    { icon: Smartphone, text: t("aboutGosholo.benefit4") },
  ]

  return (
    <section
      id="about-gosholo"
      className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-gosholo-light-green relative overflow-hidden"
      role="region"
      aria-labelledby="about-gosholo-title"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gosholo-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gosholo-light-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center rounded-full border px-3 py-2 text-xs sm:text-sm md:text-base font-semibold border-transparent bg-gosholo-orange text-white w-fit mx-auto transition-all duration-300 hover:scale-105 hover:shadow-lg">
            {t("aboutGosholo.badge")}
          </div>
          <h2
            id="about-gosholo-title"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-gosholo-dark-teal"
          >
            {t("aboutGosholo.title")}
          </h2>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 sm:mb-20">
          {/* Left side - Text content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-lg sm:text-xl leading-relaxed text-gosholo-dark-teal font-medium">
                {t("aboutGosholo.description1")}
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gosholo-dark-teal">
                {t("aboutGosholo.description2")}
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gosholo-dark-teal">
                {t("aboutGosholo.description3")}
              </p>
            </div>

            {/* Benefits list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/60 backdrop-blur-sm border border-gosholo-light-green/30 transition-all duration-300 hover:bg-white/80 hover:scale-105 hover:shadow-md group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gosholo-orange/10 flex items-center justify-center group-hover:bg-gosholo-orange/20 transition-colors duration-300">
                      <IconComponent className="h-4 w-4 text-gosholo-orange" />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-gosholo-dark-teal">{benefit.text}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="relative">
            <div className="relative bg-gosholo-dark-teal rounded-3xl p-8 sm:p-12 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-white/10 rounded-3xl"></div>
              <div className="relative text-center space-y-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Smartphone className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">{t("aboutGosholo.appTitle")}</h3>
                <p className="text-white/90 text-sm sm:text-base">{t("aboutGosholo.appDescription")}</p>
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium backdrop-blur-sm">
                    <div className="w-2 h-2 bg-gosholo-light-green rounded-full animate-pulse"></div>
                    {t("aboutGosholo.comingSoon")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3 mb-12 sm:mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gosholo-light-green/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gosholo-dark-teal mb-3 group-hover:text-gosholo-orange transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gosholo-dark-teal leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to action */}
        <div className="text-center bg-gosholo-dark-teal rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gosholo-light-green">
              {t("aboutGosholo.tagline")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 px-6 py-3 bg-white/20 rounded-full text-white font-medium backdrop-blur-sm">
                <div className="w-3 h-3 bg-gosholo-light-green rounded-full animate-pulse"></div>
                {t("aboutGosholo.launchingSoon")}
              </div>
              <ArrowRight className="h-5 w-5 text-white/60 rotate-90 sm:rotate-0" />
              <div className="text-white/80 text-sm">{t("aboutGosholo.stayTuned")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
