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
 * Récupérer toutes les offres actives
 */
export async function getOffres() {
  if (!supabase) {
    console.warn('⚠️ Supabase client not initialized')
    return []
  }

  const { data, error } = await supabase
    .from('offers')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false })
  
  if (error) {
    console.error('❌ Erreur récupération offres:', error.message)
    return []
  }
  
  console.log(`✅ ${data.length} offre(s) récupérée(s)`)
  return data
}

/**
 * Récupérer tous les événements actifs
 */
export async function getEvents() {
  if (!supabase) {
    console.warn('⚠️ Supabase client not initialized')
    return []
  }

  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false })
  
  if (error) {
    console.error('❌ Erreur récupération événements:', error.message)
    return []
  }
  
  console.log(`✅ ${data.length} événement(s) récupéré(s)`)
  return data
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

