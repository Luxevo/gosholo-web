import type { NavigationItem, ContestStep, FeatureBadge } from "@/types"
import { Smartphone, Gift, Coffee, MapPin } from "lucide-react"

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { href: "/", label: "Accueil" },
  { href: "#who-we-are", label: "Qui nous sommes" },
  { href: "#about", label: "À propos" },
  { href: "#concours", label: "Concours" },
]

export const CONTEST_STEPS: ContestStep[] = [
  { number: 1, description: "Suivez notre compte Instagram officiel : @gosholo" },
  { number: 2, description: "Repostez en story Instagram la publication officielle du concours" },
  { number: 3, description: "Taguez 2 amis dans les commentaires de la publication" },
  {
    number: 4,
    description: "Téléchargez l'application gosholo quand elle sera disponible (avant le début du concours)",
  },
]

export const FEATURE_BADGES: FeatureBadge[] = [
  { icon: Smartphone, label: "Application mobile" },
  { icon: Gift, label: "Récompenses" },
  { icon: Coffee, label: "Commerces locaux" },
]

export const CONTEST_DETAILS = [
  { icon: MapPin, text: "Montréal, du 2 au 4 août 2025" },
  { icon: "calendar", text: "Fin du concours: 15 juillet 2025" },
  { icon: "message", text: "Les gagnants seront contactés par courriel" },
]

export const POPUP_DELAY = 2000
export const CONTEST_PROGRESS = 65
export const DAYS_REMAINING = 31
