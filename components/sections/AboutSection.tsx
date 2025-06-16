"use client"

import { Building2, Users, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { ServiceCard } from "@/types"

const SERVICE_CARDS: ServiceCard[] = [
  {
    icon: Building2,
    title: "Visibilité accrue",
    description: "Nous aidons les commerces locaux à être plus visibles en ligne et à attirer de nouveaux clients.",
    link: "#signup",
    ariaLabel: "En savoir plus sur la visibilité accrue",
  },
  {
    icon: Users,
    title: "Communauté engagée",
    description: "Nous créons une communauté de consommateurs engagés qui valorisent l'achat local et durable.",
    link: "#signup",
    ariaLabel: "En savoir plus sur la communauté engagée",
  },
  {
    icon: TrendingUp,
    title: "Impact économique",
    description:
      "Nous contribuons à la croissance économique locale en redirigeant les dépenses vers les entreprises de quartier.",
    link: "#signup",
    ariaLabel: "En savoir plus sur l'impact économique",
  },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-gosholo-light-green"
      role="region"
      aria-labelledby="about-title"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div
            className="inline-flex items-center justify-center rounded-full border px-3 py-2 text-xs sm:text-sm md:text-base font-semibold border-transparent bg-gosholo-orange text-white w-fit mx-auto transition-all duration-300 hover:scale-105 hover:shadow-lg"
            role="presentation"
          >
            Notre mission
          </div>
          <div className="space-y-2">
            <h2
              id="about-title"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-gosholo-dark-teal"
            >
              Soutenir l'économie locale
            </h2>
            <p className="max-w-[900px] text-gosholo-dark-teal text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4">
              Chez gosholo, nous croyons au pouvoir du commerce local pour créer des communautés plus fortes et plus
              durables.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:gap-8 py-8 sm:py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {SERVICE_CARDS.map((card, index) => {
            const IconComponent = card.icon
            return (
              <article
                key={index}
                className="flex flex-col items-center space-y-4 rounded-lg border p-4 sm:p-6 shadow-sm transition-all duration-500 hover:shadow-xl bg-white hover:scale-105 hover:-translate-y-2 group"
              >
                <div
                  className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gosholo-dark-teal transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                  role="presentation"
                >
                  <IconComponent
                    className="h-8 w-8 sm:h-10 sm:w-10 text-white transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-lg sm:text-xl font-bold">{card.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{card.description}</p>
                </div>
                <Link
                  href={card.link}
                  className="inline-flex items-center text-sm font-medium text-gosholo-orange hover:underline focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 rounded transition-all duration-300 hover:scale-105 group touch-target-44 p-2"
                  aria-label={card.ariaLabel}
                >
                  En savoir plus{" "}
                  <ArrowRight
                    className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
