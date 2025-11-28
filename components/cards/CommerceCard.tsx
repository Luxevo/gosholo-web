"use client"

import { MapPin, Phone, Mail, Globe, Clock, Sparkles, Store } from "lucide-react"
import Image from "next/image"
import type { Database } from "@/types/supabase"

type Commerce = Database['public']['Tables']['commerces']['Row']

interface CommerceCardProps {
  commerce: Commerce
  locale: 'fr' | 'en'
  onOpenAppModal: () => void
}

export function CommerceCard({ commerce, locale, onOpenAppModal }: CommerceCardProps) {
  const formatHours = (openAt: string | null, closeAt: string | null) => {
    if (!openAt || !closeAt) return locale === 'fr' ? 'Non disponible' : 'Not available'
    return `${openAt} - ${closeAt}`
  }

  return (
    <div className="relative w-full h-full rounded-xl bg-white border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col">
      
      {/* SECTION CONTENU */}
      <div className="p-6 flex flex-col flex-1">
        
        {/* Header avec icône logo et titre */}
        <div className="flex items-start gap-4 mb-4">
          {/* Icône logo */}
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gosholo-primary/10 to-gosholo-light-blue/10 flex items-center justify-center border-2 border-gosholo-primary/20 overflow-hidden">
              {commerce.image_url ? (
                <Image
                  src={commerce.image_url}
                  alt={commerce.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Store className="h-8 w-8 text-gosholo-primary" />
              )}
            </div>
            
            {/* Badge Boost sur l'icône */}
            {commerce.boosted && (
              <div className="absolute -top-1 -right-1">
                <div className="w-5 h-5 rounded-full bg-gosholo-primary flex items-center justify-center shadow-lg">
                  <Sparkles className="h-3 w-3 text-white" />
                </div>
              </div>
            )}
          </div>

          {/* Titre */}
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-gosholo-primary mb-1 line-clamp-2">
              {commerce.name}
            </h3>
            {commerce.sub_category && (
              <p className="text-xs text-gray-500">
                {commerce.sub_category}
              </p>
            )}
          </div>
        </div>

        {/* Description */}
        {commerce.description && (
          <p className="text-sm text-gray-700 mb-4 line-clamp-2 flex-shrink-0">
            {commerce.description}
          </p>
        )}

        {/* Informations */}
        <div className="space-y-2 mb-4 flex-1">
          {commerce.address && (
            <div className="flex items-start text-sm text-gray-600">
              <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-gosholo-primary" />
              <span className="line-clamp-2">{commerce.address}{commerce.postal_code && `, ${commerce.postal_code}`}</span>
            </div>
          )}

          {commerce.phone && (
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="h-4 w-4 mr-2 flex-shrink-0 text-gosholo-primary" />
              <a href={`tel:${commerce.phone}`} className="hover:text-gosholo-primary transition-colors">
                {commerce.phone}
              </a>
            </div>
          )}

          {commerce.email && (
            <div className="flex items-center text-sm text-gray-600">
              <Mail className="h-4 w-4 mr-2 flex-shrink-0 text-gosholo-primary" />
              <a href={`mailto:${commerce.email}`} className="hover:text-gosholo-primary transition-colors truncate">
                {commerce.email}
              </a>
            </div>
          )}

          {commerce.website && (
            <div className="flex items-center text-sm text-gray-600">
              <Globe className="h-4 w-4 mr-2 flex-shrink-0 text-gosholo-primary" />
              <a 
                href={commerce.website.startsWith('http') ? commerce.website : `https://${commerce.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gosholo-primary transition-colors truncate"
              >
                {commerce.website}
              </a>
            </div>
          )}

          {(commerce.open_at || commerce.close_at) && (
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="h-4 w-4 mr-2 flex-shrink-0 text-gosholo-primary" />
              <span>{formatHours(commerce.open_at, commerce.close_at)}</span>
            </div>
          )}
        </div>

        {/* Bouton d'action */}
        <button 
          onClick={onOpenAppModal}
          className="bg-gosholo-orange hover:bg-gosholo-orange/90 text-white text-sm font-medium py-2 px-4 rounded-full transition-colors w-full"
        >
          {locale === 'fr' ? 'Voir le commerce' : 'View business'}
        </button>
      </div>
    </div>
  )
}

