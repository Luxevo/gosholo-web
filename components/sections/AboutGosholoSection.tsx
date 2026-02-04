"use client"

import { useEffect, useState, useRef } from "react"
import { useTranslation } from "@/hooks/useTranslation"
import { useLanguage } from "@/contexts/LanguageContext"
import { getCommerces } from "@/lib/supabase"
import { CommerceCard } from "@/components/cards/CommerceCard"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Database } from "@/types/supabase"

type Commerce = Database['public']['Tables']['commerces']['Row']

interface AboutGosholoSectionProps {
  onOpenAppModal?: () => void
}

export function AboutGosholoSection({ onOpenAppModal }: AboutGosholoSectionProps) {
  const { t } = useTranslation()
  const { language } = useLanguage()
  const [commerces, setCommerces] = useState<Commerce[]>([])
  const [loading, setLoading] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    async function loadData() {
      const commercesData = await getCommerces()

      // Trier pour mettre les boostés en premier
      const sortedCommerces = [...commercesData].sort((a, b) => {
        if (a.boosted && !b.boosted) return -1
        if (!a.boosted && b.boosted) return 1
        return a.name.localeCompare(b.name)
      })

      setCommerces(sortedCommerces)
      setLoading(false)
    }

    loadData()
  }, [])

  // Afficher max 6 commerces
  const displayedCommerces = commerces.slice(0, 6)

  return (
    <section
      ref={sectionRef}
      id="about-gosholo"
      className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-white relative overflow-hidden"
      role="region"
      aria-labelledby="about-gosholo-title"
    >
      <div className="container px-4 md:px-6">
        {/* Titre */}
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2
            id="about-gosholo-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gosholo-primary leading-tight"
          >
            {t("aboutGosholo.missionTitle")}
          </h2>
        </div>

        {/* Grid des cartes */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-gosholo-primary border-t-transparent mx-auto mb-4"></div>
              <p className="text-gray-600">{t("commerces.loading")}</p>
            </div>
          </div>
        ) : displayedCommerces.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {displayedCommerces.map((commerce, index) => (
                <div
                  key={commerce.id}
                  className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
                >
                  <CommerceCard
                    commerce={commerce}
                    locale={language}
                    onOpenAppModal={onOpenAppModal}
                  />
                </div>
              ))}
            </div>

            {/* CTA Voir plus */}
            <div className={`mt-12 sm:mt-16 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link
                href="/commerces-gosholo"
                className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-bold bg-gosholo-primary text-white rounded-xl hover:bg-gosholo-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                {language === 'fr' ? 'Voir tous les commerces' : 'See all businesses'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500">
              {language === 'fr' ? 'Aucun commerce disponible pour le moment.' : 'No businesses available at the moment.'}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
