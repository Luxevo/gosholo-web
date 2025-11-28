"use client"

import { MapPin, Sparkles } from "lucide-react"
import Image from "next/image"
import type { Database } from "@/types/supabase"

type Offer = Database['public']['Tables']['offers']['Row']
type Event = Database['public']['Tables']['events']['Row']

interface CustomerCardProps {
  type: 'offer' | 'event'
  data: Offer | Event
  locale: 'fr' | 'en'
}

export function CustomerCard({ type, data, locale }: CustomerCardProps) {
  const buttonText = type === 'offer' 
    ? (locale === 'fr' ? "Voir l'offre" : 'View offer')
    : (locale === 'fr' ? "Voir l'événement" : 'View event')

  return (
    <div className="relative w-[356px] h-[658px] rounded-xl bg-white border border-gray-200 shadow-lg overflow-hidden">
      
      {/* SECTION IMAGE - 445px hauteur */}
      <div className="relative w-full h-[445px]">
        {data.image_url ? (
          <Image
            src={data.image_url}
            alt={data.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gosholo-primary/20 to-gosholo-light-blue/20 flex items-center justify-center">
            <span className="text-gray-400 text-sm">
              {locale === 'fr' ? "Aucune image" : "No image"}
            </span>
          </div>
        )}

        {/* Badge Boost (top-left) */}
        {data.boosted && (
          <div className="absolute top-3 left-3">
            <div className="px-2 py-1 rounded-full text-xs font-bold flex items-center text-white shadow-lg bg-gosholo-primary">
              <Sparkles className="h-3 w-3 mr-1" />
              {locale === 'fr' ? 'Vedette' : 'Featured'}
            </div>
          </div>
        )}

        {/* Barre d'adresse (bottom) - seulement si on a une localisation */}
        {data.custom_location && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3">
            <div className="flex items-center text-sm">
              <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
              <span className="truncate">
                {data.custom_location}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* SECTION CONTENU - 213px hauteur */}
      <div className="h-[213px] p-4 flex flex-col">
        
        {/* Titre */}
        <h4 className="text-xl font-semibold mb-3 text-black overflow-hidden line-clamp-2 break-words">
          {data.title}
        </h4>

        {/* Description */}
        <div className="text-sm mb-4 text-gray-700 flex-1">
          <p className="overflow-hidden line-clamp-3 break-words">
            {data.description}
          </p>
        </div>

        {/* Bouton d'action */}
        <div>
          <button className="bg-gosholo-orange hover:bg-gosholo-orange/90 text-white text-sm font-medium py-2 px-4 rounded-full transition-colors w-full">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}

