import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/supabase'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Supabase environment variables are missing. Some features may not work.')
}

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient<Database>(supabaseUrl, supabaseAnonKey)
  : null as any

/**
 * Compter le nombre d'offres actives
 */
export async function countOffres() {
  const { count, error } = await supabase
    .from('offers')
    .select('*', { count: 'exact', head: true })
    .eq('is_active', true)
  
  if (error) {
    console.error('❌ Erreur comptage offres:', error.message)
    return 0
  }
  
  return count || 0
}

/**
 * Compter le nombre d'événements actifs
 */
export async function countEvents() {
  const { count, error } = await supabase
    .from('events')
    .select('*', { count: 'exact', head: true })
    .eq('is_active', true)
  
  if (error) {
    console.error('❌ Erreur comptage événements:', error.message)
    return 0
  }
  
  return count || 0
}

/**
 * Récupérer toutes les offres actives avec les informations du commerce
 */
export async function getOffres() {
  if (!supabase) {
    console.warn('⚠️ Supabase client not initialized')
    return []
  }

  const { data: offersData, error: offersError } = await supabase
    .from('offers')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false })
  
  if (offersError) {
    console.error('❌ Erreur récupération offres:', offersError.message)
    return []
  }

  // Récupérer les IDs des commerces uniques
  const commerceIds = [...new Set(offersData.map((offer: any) => offer.commerce_id).filter(Boolean))]
  
  // Récupérer les commerces correspondants
  let commercesMap: Record<string, any> = {}
  if (commerceIds.length > 0) {
    const { data: commercesData, error: commercesError } = await supabase
      .from('commerces')
      .select('id, address, postal_code')
      .in('id', commerceIds)
    
    if (!commercesError && commercesData) {
      commercesMap = commercesData.reduce((acc: Record<string, any>, commerce: any) => {
        acc[commerce.id] = commerce
        return acc
      }, {})
    }
  }
  
  // Enrichir les données avec l'adresse du commerce si custom_location est vide
  const enrichedData = offersData.map((offer: any) => {
    if (!offer.custom_location && offer.commerce_id) {
      const commerce = commercesMap[offer.commerce_id]
      if (commerce && commerce.address) {
        offer.custom_location = commerce.postal_code 
          ? `${commerce.address}, ${commerce.postal_code}`
          : commerce.address
      }
    }
    return offer
  })
  
  console.log(`✅ ${enrichedData.length} offre(s) récupérée(s)`)
  return enrichedData
}

/**
 * Récupérer tous les événements actifs avec les informations du commerce
 */
export async function getEvents() {
  if (!supabase) {
    console.warn('⚠️ Supabase client not initialized')
    return []
  }

  const { data: eventsData, error: eventsError } = await supabase
    .from('events')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false })
  
  if (eventsError) {
    console.error('❌ Erreur récupération événements:', eventsError.message)
    return []
  }

  // Récupérer les IDs des commerces uniques
  const commerceIds = [...new Set(eventsData.map((event: any) => event.commerce_id).filter(Boolean))]
  
  // Récupérer les commerces correspondants
  let commercesMap: Record<string, any> = {}
  if (commerceIds.length > 0) {
    const { data: commercesData, error: commercesError } = await supabase
      .from('commerces')
      .select('id, address, postal_code')
      .in('id', commerceIds)
    
    if (!commercesError && commercesData) {
      commercesMap = commercesData.reduce((acc: Record<string, any>, commerce: any) => {
        acc[commerce.id] = commerce
        return acc
      }, {})
    }
  }
  
  // Enrichir les données avec l'adresse du commerce si custom_location est vide
  const enrichedData = eventsData.map((event: any) => {
    if (!event.custom_location && event.commerce_id) {
      const commerce = commercesMap[event.commerce_id]
      if (commerce && commerce.address) {
        event.custom_location = commerce.postal_code 
          ? `${commerce.address}, ${commerce.postal_code}`
          : commerce.address
      }
    }
    return event
  })
  
  console.log(`✅ ${enrichedData.length} événement(s) récupéré(s)`)
  return enrichedData
}

/**
 * Récupérer tous les commerces
 */
export async function getCommerces() {
  if (!supabase) {
    console.warn('⚠️ Supabase client not initialized')
    return []
  }

  const { data, error } = await supabase
    .from('commerces')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) {
    console.error('❌ Erreur récupération commerces:', error.message)
    return []
  }
  
  console.log(`✅ ${data.length} commerce(s) récupéré(s)`)
  return data
}

