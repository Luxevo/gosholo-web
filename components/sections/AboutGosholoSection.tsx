"use client"

import { useTranslation } from "@/hooks/useTranslation"
import { Gift, Zap, Calendar } from "lucide-react"
import Image from "next/image"

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
          </div>

          {/* Right side - Image only */}
          <div className="relative">
            <Image
              src="/images/about-gosholo.jpeg"
              width={500}
              height={400}
              alt={t("aboutGosholo.appDescription")}
              className="w-full h-auto rounded-3xl object-cover shadow-2xl transition-transform duration-500 hover:scale-105"
            />
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

        {/* Call to action - Simplified */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gosholo-dark-teal">
              {t("aboutGosholo.tagline")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
