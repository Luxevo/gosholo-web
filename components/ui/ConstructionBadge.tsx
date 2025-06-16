"use client"

import { useTranslation } from "@/hooks/useTranslation"

export function ConstructionBadge() {
  const { t } = useTranslation()

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
      <div className="bg-gosholo-orange text-white px-3 sm:px-4 py-2 rounded-full shadow-lg border-2 border-white flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl group max-w-[calc(100vw-2rem)]">
        <div className="w-2 h-2 bg-white rounded-full animate-ping flex-shrink-0"></div>
        <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
          {t("construction.siteUnderConstruction")}
        </span>
        <div className="w-2 h-2 bg-gosholo-light-green rounded-full flex-shrink-0"></div>
      </div>
    </div>
  )
}
