"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ClientWrapper } from "@/components/ClientWrapper"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { getOffres, getEvents } from "@/lib/supabase"
import { useTranslation } from "@/hooks/useTranslation"
import { useLanguage } from "@/contexts/LanguageContext"
import { CustomerCard } from "@/components/cards/CustomerCard"
import { Tag, Calendar, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"
import type { Database } from "@/types/supabase"

type Offer = Database['public']['Tables']['offers']['Row']
type Event = Database['public']['Tables']['events']['Row']

function NosOffresContent() {
  const { isVisible } = useScrollAnimation()
  const { t } = useTranslation()
  const { language } = useLanguage()
  const router = useRouter()
  const [offres, setOffres] = useState<Offer[]>([])
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'offres' | 'events'>('offres')

  const scrollToSection = (sectionId: string) => {
    router.push(`/#${sectionId}`)
  }

  useEffect(() => {
    async function loadData() {
      const [offresData, eventsData] = await Promise.all([
        getOffres(),
        getEvents()
      ])
      
      // Trier pour mettre les boostés en premier
      const sortedOffres = [...offresData].sort((a, b) => {
        if (a.boosted && !b.boosted) return -1
        if (!a.boosted && b.boosted) return 1
        return 0
      })
      
      const sortedEvents = [...eventsData].sort((a, b) => {
        if (a.boosted && !b.boosted) return -1
        if (!a.boosted && b.boosted) return 1
        return 0
      })
      
      setOffres(sortedOffres)
      setEvents(sortedEvents)
      setLoading(false)
    }

    loadData()
  }, [])

  const displayedItems = activeTab === 'offres' ? offres.slice(0, 6) : events.slice(0, 6)
  const itemType = activeTab === 'offres' ? 'offer' : 'event'
  const hasMore = activeTab === 'offres' ? offres.length > 6 : events.length > 6

  return (
    <div className="flex flex-col min-h-screen">
      <Header isVisible={isVisible} onScrollToSection={scrollToSection} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gosholo-primary relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container px-4 md:px-6 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold bg-gosholo-light-green text-gosholo-primary w-fit mx-auto mb-6 sm:mb-8">
                <Sparkles className="mr-2 h-4 w-4" />
                {language === 'fr' ? 'Découvrez nos offres' : 'Discover our offers'}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 sm:mb-6 leading-tight">
                {t("nosOffres.title")}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                {language === 'fr' 
                  ? 'Découvrez toutes les offres exceptionnelles et événements de nos commerces partenaires. 100% local, 100% exclusif.'
                  : 'Discover all exceptional offers and events from our partner businesses. 100% local, 100% exclusive.'}
              </p>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="w-full py-8 bg-white border-b shadow-sm sticky top-16 z-10">
          <div className="container px-4 md:px-6">
            <div className="flex justify-center gap-3 sm:gap-4">
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
          </div>
        </section>

        {/* Grid Section */}
        <section className="w-full py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            {/* Loading */}
            {loading && (
              <div className="flex justify-center items-center py-20">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-gosholo-primary border-t-transparent mx-auto mb-4"></div>
                  <p className="text-gray-600">{t("nosOffres.loading")}</p>
                </div>
              </div>
            )}

            {/* Grid */}
            {!loading && displayedItems.length > 0 && (
              <>
                <div className="flex flex-wrap justify-start gap-8 max-w-6xl mx-auto">
                  {displayedItems.map((item, index) => (
                    <div key={item.id} className="relative">
                      <CustomerCard 
                        type={itemType}
                        data={item} 
                        locale={language}
                      />
                      
                      {/* Overlay blur pour les 3 dernières cartes */}
                      {index >= 3 && (
                        <div className="absolute inset-0 backdrop-blur-sm bg-white/30 rounded-xl flex items-center justify-center">
                          <button 
                            onClick={() => scrollToSection('app-launch')}
                            className="inline-flex items-center justify-center px-6 py-3 text-base font-bold bg-gosholo-primary text-white rounded-xl hover:bg-gosholo-primary/90 transition-all duration-300 hover:scale-105 shadow-xl"
                          >
                            {language === 'fr' ? 'Voir plus' : 'See more'}
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* CTA Télécharger l'app */}
                <div className="mt-16 text-center">
                  <div className="inline-block bg-white rounded-2xl shadow-xl p-8 max-w-2xl">
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gosholo-light-green mb-4">
                        <Sparkles className="h-8 w-8 text-gosholo-primary" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gosholo-primary mb-3">
                        {language === 'fr' 
                          ? 'Encore plus dans l\'application !' 
                          : 'Even more in the app!'}
                      </h3>
                      <p className="text-gray-600 text-base sm:text-lg">
                        {language === 'fr' 
                          ? hasMore
                            ? `Découvrez ${activeTab === 'offres' ? `les ${offres.length - 6} autres offres` : `les ${events.length - 6} autres événements`} et bien plus encore en téléchargeant l'app gosholo.`
                            : 'Téléchargez l\'app gosholo pour accéder à toutes les fonctionnalités exclusives et ne manquer aucune offre près de vous !'
                          : hasMore
                            ? `Discover ${activeTab === 'offres' ? `${offres.length - 6} more offers` : `${events.length - 6} more events`} and much more by downloading the gosholo app.`
                            : 'Download the gosholo app to access all exclusive features and never miss any offers near you!'}
                      </p>
                    </div>
                    <button 
                      onClick={() => scrollToSection('app-launch')}
                      className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-bold bg-gosholo-primary text-white rounded-xl hover:bg-gosholo-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      {language === 'fr' ? 'Télécharger l\'app' : 'Download the app'}
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Message si aucun item */}
            {!loading && displayedItems.length === 0 && (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 mb-4">
                  {activeTab === 'offres' ? (
                    <Tag className="h-8 w-8 text-gray-400" />
                  ) : (
                    <Calendar className="h-8 w-8 text-gray-400" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  {activeTab === 'offres'
                    ? (language === 'fr' ? 'Aucune offre disponible' : 'No offers available')
                    : (language === 'fr' ? 'Aucun événement disponible' : 'No events available')
                  }
                </h3>
                <p className="text-gray-500">
                  {language === 'fr' ? 'Revenez bientôt !' : 'Come back soon!'}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export const dynamic = 'force-dynamic'

export default function NosOffresPage() {
  return (
    <ClientWrapper>
      <NosOffresContent />
    </ClientWrapper>
  )
}

