"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useLanguage } from "@/contexts/LanguageContext"
import { useTranslation } from "@/hooks/useTranslation"
import Image from "next/image"
import { X } from "lucide-react"

interface AppDownloadModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AppDownloadModal({ isOpen, onClose }: AppDownloadModalProps) {
  const { language } = useLanguage()
  const { t } = useTranslation()
  const [isRedirecting, setIsRedirecting] = useState(true)

  useEffect(() => {
    if (!isOpen) return

    // Détecter l'appareil
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera

    // Détecter iOS
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream

    // Détecter Android
    const isAndroid = /android/i.test(userAgent)

    // Délai pour afficher le modal avant la redirection
    const redirectTimer = setTimeout(() => {
      if (isIOS) {
        window.location.href = "https://apps.apple.com/us/app/gosholo/id6749919037"
      } else if (isAndroid) {
        window.location.href = "https://play.google.com/store/apps/details?id=com.gosholo.gosholo"
      } else {
        setIsRedirecting(false)
      }
    }, 500)

    return () => clearTimeout(redirectTimer)
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="sm:max-w-md w-[95vw] max-w-[400px] p-0 overflow-hidden border-0 mx-auto rounded-2xl bg-gosholo-light-green focus:outline-none focus:ring-0 [&>button]:hidden"
        role="dialog"
        aria-labelledby="app-download-title"
      >
        <div className="relative bg-gosholo-light-green p-8">
          {/* Close button */}
          <button
            className="absolute top-4 right-4 z-10 h-8 w-8 rounded-full bg-gosholo-primary/20 hover:bg-gosholo-primary/30 text-gosholo-primary focus:outline-none focus:ring-0 border-0 shadow-none flex items-center justify-center cursor-pointer transition-colors duration-200"
            onClick={onClose}
            aria-label={t("common.close")}
            type="button"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="text-center space-y-6">
            {/* Logo */}
            <div className="flex justify-center">
              <Image
                src="/images/GOSHOLO_LOGOS_v2-09.png"
                alt="gosholo"
                width={180}
                height={72}
                className="h-16 w-auto object-contain"
              />
            </div>

            {/* Message de chargement ou options */}
            {isRedirecting ? (
              <div className="space-y-4 py-4">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-gosholo-primary border-t-transparent mx-auto"></div>
                <p className="text-gosholo-primary text-base font-medium">
                  {language === 'fr' 
                    ? 'Redirection vers le store...' 
                    : 'Redirecting to store...'}
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <h3
                    id="app-download-title"
                    className="text-xl font-bold text-gosholo-primary"
                  >
                    {language === 'fr'
                      ? 'Choisissez votre plateforme'
                      : 'Choose your platform'}
                  </h3>
                  <p className="text-gosholo-primary/80 text-sm">
                    {language === 'fr'
                      ? 'Sélectionnez votre store pour télécharger l\'application'
                      : 'Select your store to download the app'}
                  </p>
                </div>

                {/* Options de téléchargement */}
                <div className="flex flex-col gap-4 pt-2">
                  {/* App Store */}
                  <a
                    href="https://apps.apple.com/us/app/gosholo/id6749919037"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-white hover:bg-gosholo-primary/10 rounded-xl p-4 transition-all duration-300 hover:scale-105 cursor-pointer group border-2 border-gosholo-primary"
                    onClick={onClose}
                  >
                    <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-xl transition-shadow">
                      <Image
                        src="/apptore.png"
                        alt={t("aboutGosholo.appStore")}
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-gosholo-primary font-semibold text-sm">
                        {t("aboutGosholo.appStore")}
                      </p>
                      <p className="text-gosholo-primary/70 text-xs">
                        {language === 'fr' ? 'Pour iPhone et iPad' : 'For iPhone and iPad'}
                      </p>
                    </div>
                  </a>

                  {/* Google Play */}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.gosholo.gosholo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-white hover:bg-gosholo-primary/10 rounded-xl p-4 transition-all duration-300 hover:scale-105 cursor-pointer group border-2 border-gosholo-primary"
                    onClick={onClose}
                  >
                    <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-xl transition-shadow">
                      <Image
                        src="/playstore.png"
                        alt={t("aboutGosholo.playStore")}
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-gosholo-primary font-semibold text-sm">
                        {t("aboutGosholo.playStore")}
                      </p>
                      <p className="text-gosholo-primary/70 text-xs">
                        {language === 'fr' ? 'Pour Android' : 'For Android'}
                      </p>
                    </div>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

