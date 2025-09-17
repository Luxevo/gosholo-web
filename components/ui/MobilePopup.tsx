"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "@/hooks/useTranslation"

interface MobilePopupProps {
  isOpen: boolean
  onClose: () => void
}

export function MobilePopup({ isOpen, onClose }: MobilePopupProps) {
  const { t } = useTranslation()

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="sm:max-w-md w-[95vw] max-w-[400px] p-0 overflow-hidden border-0 mx-auto rounded-2xl focus:outline-none focus:ring-0 [&>button]:hidden"
        role="dialog"
        aria-labelledby="mobile-popup-title"
        aria-describedby="mobile-popup-description"
      >
        <div className="relative bg-white">
          {/* Close button */}
          <button
            className="absolute top-4 right-4 z-10 h-8 w-8 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-0 border-0 shadow-none flex items-center justify-center cursor-pointer transition-colors duration-200"
            onClick={onClose}
            aria-label={t("common.close")}
            type="button"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Main content */}
          <div className="p-8 text-center">

             {/* Tagline */}
             <div className="mb-8">
              <p className="text-lg font-medium text-[#ff6233] leading-relaxed">
                {t("popup.mobileTagline")}
              </p>
            </div>
            
            {/* Gosholo logo/brand */}
            <div className="mb-6 flex justify-center">
              <Image
                src="/images/gosholo2-logo.png"
                alt="gosholo"
                width={200}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </div>


            {/* Coming Soon text */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#016167] mb-2">
                {t("popup.mobileComingSoon")}
              </h2>
              <p className="text-gray-600 text-sm">
                {t("popup.mobileDescription")}
              </p>
            </div>

            {/* App Store Icons */}
            <div className="mb-8">
              <p className="text-gray-700 font-medium mb-4">
                {t("popup.comingSoonOn")}
              </p>
              
              <div className="flex justify-center gap-6">
                {/* Apple App Store */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-lg overflow-hidden mb-2">
                    <Image
                      src="/apptore.png"
                      alt={t("popup.appStoreAlt")}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                 
                </div>

                {/* Google Play Store */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-lg overflow-hidden mb-2">
                    <Image
                      src="/playstore.png"
                      alt={t("popup.playStoreAlt")}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
