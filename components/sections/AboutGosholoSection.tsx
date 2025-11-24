"use client"

import { useEffect, useState } from "react"
import { useTranslation } from "@/hooks/useTranslation"
import { useLanguage } from "@/contexts/LanguageContext"
import { getOffres, getEvents } from "@/lib/supabase"
import { CustomerCard } from "@/components/cards/CustomerCard"
import Link from "next/link"
import { ArrowRight, Tag, Calendar } from "lucide-react"
import type { Database } from "@/types/supabase"

type Offer = Database['public']['Tables']['offers']['Row']
type Event = Database['public']['Tables']['events']['Row']

export function AboutGosholoSection() {
  const { t } = useTranslation()
  const { language } = useLanguage()
  const [offres, setOffres] = useState<Offer[]>([])
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'offres' | 'events'>('offres')

  useEffect(() => {
    async function loadData() {
      const [offresData, eventsData] = await Promise.all([
        getOffres(),
        getEvents()
      ])
      setOffres(offresData)
      setEvents(eventsData)
      setLoading(false)
    }

    loadData()
  }, [])

  // Afficher les items selon l'onglet actif (max 6 items)
  const maxItems = 6
  const displayedItems = activeTab === 'offres' 
    ? offres.slice(0, maxItems).map(item => ({ item, type: 'offer' as const }))
    : events.slice(0, maxItems).map(item => ({ item, type: 'event' as const }))

  return (
    <section
      id="about-gosholo"
      className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-white relative overflow-hidden"
      role="region"
      aria-labelledby="about-gosholo-title"
    >
      <div className="container px-4 md:px-6">
        {/* Titre */}
        <div className="text-center mb-8 sm:mb-12">
          <h2
            id="about-gosholo-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gosholo-primary leading-tight mb-8"
          >
            Faire rayonner le commerce local, une offre à la fois.
          </h2>
        </div>

        {/* Tabs Section */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <button
            onClick={() => setActiveTab('offres')}
            className={`px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
              activeTab === 'offres'
                ? 'bg-gosholo-light-green text-gosholo-primary shadow-md'
                : 'border-2 border-gray-300 text-gray-700 hover:border-gosholo-primary hover:text-gosholo-primary'
            }`}
          >
            <Tag className="inline-block mr-2 h-4 w-4" />
            {language === 'fr' ? `Offres` : `Offers`}
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
              activeTab === 'events'
                ? 'bg-gosholo-light-green text-gosholo-primary shadow-md'
                : 'border-2 border-gray-300 text-gray-700 hover:border-gosholo-primary hover:text-gosholo-primary'
            }`}
          >
            <Calendar className="inline-block mr-2 h-4 w-4" />
            {language === 'fr' ? `Événements` : `Events`}
          </button>
        </div>

        {/* Grid des cartes */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-gosholo-primary border-t-transparent mx-auto mb-4"></div>
              <p className="text-gray-600">{t("nosOffres.loading")}</p>
            </div>
          </div>
        ) : displayedItems.length > 0 ? (
          <>
            <div className="flex flex-wrap justify-center md:justify-start gap-8 max-w-6xl mx-auto">
              {displayedItems.map(({ item, type }) => (
                <CustomerCard
                  key={item.id}
                  type={type}
                  data={item}
                  locale={language}
                />
              ))}
            </div>
            
            {/* CTA Voir plus */}
            <div className="mt-12 sm:mt-16 text-center">
              <Link
                href="/nos-offres"
                className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-bold bg-gosholo-primary text-white rounded-xl hover:bg-gosholo-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                {language === 'fr' ? 'Voir plus' : 'See more'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500">
              {language === 'fr' ? 'Aucune offre ou événement disponible pour le moment.' : 'No offers or events available at the moment.'}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
