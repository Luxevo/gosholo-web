import { createClient } from '@supabase/supabase-js'
import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react"
import { MobileRedirectClient } from "./MobileRedirectClient"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

async function getOffer(id: string) {
  if (!supabaseUrl || !supabaseAnonKey) {
    return null
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey)

  const { data, error } = await supabase
    .from('offers')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching offer:', error)
    return null
  }

  return data
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function OfferMobilePage({ params }: PageProps) {
  const { id } = await params
  const offer = await getOffer(id)

  const appScheme = `gosholomobile://offer/${id}`

  return (
    <div className="min-h-screen bg-gradient-to-b from-gosholo-primary to-gosholo-primary/90 flex flex-col items-center justify-center p-6">
      {/* Client component for app redirect attempt */}
      <MobileRedirectClient appScheme={appScheme} />

      {/* Logo */}
      <div className="mb-8">
        <Image
          src="/images/gosholo-logo.png"
          alt="Gosholo"
          width={180}
          height={60}
          className="h-14 w-auto"
          priority
        />
      </div>

      {/* Offer Preview Card */}
      {offer && (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm w-full mb-8">
          {offer.image_url && (
            <div className="relative w-full h-48">
              <Image
                src={offer.image_url}
                alt={offer.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
              {offer.title}
            </h2>
            {offer.description && (
              <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                {offer.description}
              </p>
            )}
            {offer.custom_location && (
              <div className="flex items-center text-gray-500 text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="truncate">{offer.custom_location}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="text-center text-white max-w-md mb-8">
        <h1 className="text-2xl font-bold mb-4">
          Voir cette offre sur gosholo
        </h1>
        <p className="text-lg text-white/90 leading-relaxed">
          Telechargez l'application pour decouvrir cette offre et bien d'autres!
        </p>
      </div>

      {/* Download Buttons */}
      <div className="space-y-4 w-full max-w-sm">
        <Link
          href="https://apps.apple.com/app/gosholo/id6743078498"
          target="_blank"
          className="flex items-center justify-center w-full bg-black text-white hover:bg-gray-900 h-14 text-lg font-semibold rounded-lg transition-colors"
        >
          <Image
            src="/apptore.png"
            alt="App Store"
            width={24}
            height={24}
            className="mr-3"
          />
          App Store
        </Link>
        <Link
          href="https://play.google.com/store/apps/details?id=com.gosholo.gosholo"
          target="_blank"
          className="flex items-center justify-center w-full bg-black text-white hover:bg-gray-900 h-14 text-lg font-semibold rounded-lg transition-colors"
        >
          <Image
            src="/playstore.png"
            alt="Google Play"
            width={24}
            height={24}
            className="mr-3"
          />
          Google Play
        </Link>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center">
        <p className="text-white/60 text-sm">
          &copy; 2025 gosholo
        </p>
      </div>
    </div>
  )
}
