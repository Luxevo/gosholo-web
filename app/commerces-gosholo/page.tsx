"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ClientWrapper } from "@/components/ClientWrapper"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { getCommerces } from "@/lib/supabase"
import { useTranslation } from "@/hooks/useTranslation"
import { useLanguage } from "@/contexts/LanguageContext"
import { CommerceCard } from "@/components/cards/CommerceCard"
import { AppDownloadModal } from "@/components/ui/AppDownloadModal"
import { Store, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"
import type { Database } from "@/types/supabase"

type Commerce = Database['public']['Tables']['commerces']['Row']

function CommercesGosholoContent() {
  const { isVisible } = useScrollAnimation()
  const { t } = useTranslation()
  const { language } = useLanguage()
  const router = useRouter()
  const [commerces, setCommerces] = useState<Commerce[]>([])
  const [loading, setLoading] = useState(true)
  const [isAppModalOpen, setIsAppModalOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    router.push(`/#${sectionId}`)
  }

  useEffect(() => {
    async function loadData() {
      const commercesData = await getCommerces()
      
      // Trier pour mettre les boostés en premier
      const sortedCommerces = [...commercesData].sort((a, b) => {
        if (a.boosted && !b.boosted) return -1
        if (!a.boosted && b.boosted) return 1
        return 0
      })
      
      setCommerces(sortedCommerces)
      setLoading(false)
    }

    loadData()
  }, [])

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
                <Store className="mr-2 h-4 w-4" />
                {language === 'fr' ? 'Découvrez nos commerces' : 'Discover our businesses'}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 sm:mb-6 leading-tight">
                {t("commerces.title")}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                {language === 'fr' 
                  ? 'Découvrez tous nos commerces partenaires locaux. 100% local, 100% authentique.'
                  : 'Discover all our local partner businesses. 100% local, 100% authentic.'}
              </p>
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
                  <p className="text-gray-600">{t("commerces.loading")}</p>
                </div>
              </div>
            )}

            {/* Grid */}
            {!loading && commerces.length > 0 && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                  {commerces.map((commerce) => (
                    <CommerceCard 
                      key={commerce.id}
                      commerce={commerce} 
                      locale={language}
                      onOpenAppModal={() => setIsAppModalOpen(true)}
                    />
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
                          ? 'Téléchargez l\'app gosholo pour accéder à toutes les fonctionnalités exclusives et découvrir tous les commerces près de vous !'
                          : 'Download the gosholo app to access all exclusive features and discover all businesses near you!'}
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

            {/* Message si aucun commerce */}
            {!loading && commerces.length === 0 && (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 mb-4">
                  <Store className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  {t("commerces.noCommerces")}
                </h3>
                <p className="text-gray-500">
                  {t("commerces.comeBackSoon")}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />

      {/* App Download Modal */}
      <AppDownloadModal
        isOpen={isAppModalOpen}
        onClose={() => setIsAppModalOpen(false)}
      />
    </div>
  )
}

export const dynamic = 'force-dynamic'

export default function CommercesGosholoPage() {
  return (
    <ClientWrapper>
      <CommercesGosholoContent />
    </ClientWrapper>
  )
}

