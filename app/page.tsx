"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Building2,
  MapPin,
  ShoppingBag,
  TrendingUp,
  Users,
  ChevronRight,
  Star,
  ArrowRight,
  Menu,
  X,
  Smartphone,
  Gift,
  Coffee,
  Store,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"user" | "business">("user")
  const [showPassword, setShowPassword] = useState(false)
  const [rulesOpen, setRulesOpen] = useState(false)

  useEffect(() => {
    // Ouvrir le pop-up après un court délai
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* En-tête */}
      <header className="sticky top-0 z-40 w-full border-b bg-white">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gosholo-dark-teal flex items-center justify-center">
                <ShoppingBag className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl">Gosholo</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 mx-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-gosholo-dark-teal">
              Accueil
            </Link>
            <Link href="#who-we-are" className="text-sm font-medium transition-colors hover:text-gosholo-dark-teal">
              Qui nous sommes
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-gosholo-dark-teal">
              À propos
            </Link>
            <Link href="#concours" className="text-sm font-medium transition-colors hover:text-gosholo-dark-teal">
              Concours
            </Link>
            <Link href="#signup" className="text-sm font-medium transition-colors hover:text-gosholo-dark-teal">
              S'inscrire
            </Link>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <div className="hidden md:block">
              <Button
                className="bg-gosholo-orange hover:bg-gosholo-orange/90 text-white"
                onClick={() => scrollToSection("signup")}
              >
                S'inscrire
              </Button>
            </div>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b">
            <nav className="flex flex-col p-4 space-y-3">
              <Link
                href="/"
                className="text-sm font-medium p-2 hover:bg-gosholo-light-blue/10 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="#who-we-are"
                className="text-sm font-medium p-2 hover:bg-gosholo-light-blue/10 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Qui nous sommes
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium p-2 hover:bg-gosholo-light-blue/10 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                À propos
              </Link>
              <Link
                href="#concours"
                className="text-sm font-medium p-2 hover:bg-gosholo-light-blue/10 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Concours
              </Link>
              <Button
                className="bg-gosholo-orange hover:bg-gosholo-orange/90 text-white mt-2"
                onClick={() => {
                  scrollToSection("signup")
                  setMobileMenuOpen(false)
                }}
              >
                S'inscrire
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Section héro */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gosholo-light-blue">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-6">
              <button
                onClick={() => scrollToSection("concours")}
                className="inline-flex items-center justify-center rounded-full border px-2 py-1 text-sm md:text-base font-semibold transition-colors focus:outline-none border-transparent bg-gosholo-orange text-white w-auto mx-auto hover:bg-gosholo-orange/90 cursor-pointer group"
                aria-label="Voir le concours Osheaga"
              >
                <Star className="mr-1.5 h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="px-0.5 group-hover:underline">Nouveau concours Osheaga</span>
                <ChevronRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  Découvrez et soutenez les <span className="text-gosholo-light-green">commerces locaux</span>
                </h1>
                <p className="max-w-[600px] text-white md:text-xl">
                  Gosholo vous aide à trouver les meilleures boutiques locales et vous encourage à soutenir l'économie
                  de votre quartier.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-gosholo-orange hover:bg-gosholo-orange/90 text-white group">
                  Découvrir les commerces
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-gosholo-dark-teal border-white hover:bg-white/90"
                >
                  En savoir plus
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/local-food.png"
                width={550}
                height={550}
                alt="Repas local partagé"
                className="mx-auto overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Qui nous sommes */}
      <section id="who-we-are" className="w-full py-12 md:py-24 lg:py-32 bg-gosholo-dark-teal">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center justify-center rounded-full border px-2 py-1 text-sm md:text-base font-semibold transition-colors focus:outline-none border-transparent bg-gosholo-orange text-white w-auto mx-auto hover:bg-gosholo-orange/90 cursor-pointer group">
              Qui nous sommes
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gosholo-light-green">
              Découvrez Gosholo
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg leading-relaxed text-gosholo-light-green">
              Une application innovante qui transforme ta façon de découvrir et de profiter des offres locales ! À
              chaque achat chez nos partenaires, tu accumules des points que tu peux utiliser pour débloquer des offres
              exclusives, des réductions et des expériences uniques.
            </p>
            <p className="text-lg leading-relaxed text-gosholo-light-green">
              Que tu aies envie d'un café, de faire des courses, ou de découvrir de nouvelles activités, gosholo te
              permet de soutenir les commerces de ton quartier tout en économisant.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Smartphone className="h-5 w-5 text-gosholo-light-green" />
                <span className="font-medium text-gosholo-light-green">Application mobile</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Gift className="h-5 w-5 text-gosholo-light-green" />
                <span className="font-medium text-gosholo-light-green">Récompenses</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Coffee className="h-5 w-5 text-gosholo-light-green" />
                <span className="font-medium text-gosholo-light-green">Commerces locaux</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section À propos */}
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gosholo-light-green">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center justify-center rounded-full border px-2 py-1 text-sm md:text-base font-semibold transition-colors focus:outline-none border-transparent bg-gosholo-orange text-white w-auto mx-auto hover:bg-gosholo-orange/90 cursor-pointer group">
              Notre mission
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gosholo-dark-teal">
                Soutenir l'économie locale
              </h2>
              <p className="max-w-[900px] text-gosholo-dark-teal md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Chez Gosholo, nous croyons au pouvoir du commerce local pour créer des communautés plus fortes et plus
                durables.
              </p>
            </div>
          </div>

          <div className="grid gap-8 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md bg-white">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gosholo-dark-teal">
                <Building2 className="h-10 w-10 text-white" />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Visibilité accrue</h3>
                <p className="text-muted-foreground">
                  Nous aidons les commerces locaux à être plus visibles en ligne et à attirer de nouveaux clients.
                </p>
              </div>
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-gosholo-orange hover:underline"
              >
                En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md bg-white">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gosholo-dark-teal">
                <Users className="h-10 w-10 text-white" />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Communauté engagée</h3>
                <p className="text-muted-foreground">
                  Nous créons une communauté de consommateurs engagés qui valorisent l'achat local et durable.
                </p>
              </div>
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-gosholo-orange hover:underline"
              >
                En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md bg-white">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gosholo-dark-teal">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Impact économique</h3>
                <p className="text-muted-foreground">
                  Nous contribuons à la croissance économique locale en redirigeant les dépenses vers les entreprises de
                  quartier.
                </p>
              </div>
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-gosholo-orange hover:underline"
              >
                En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section concours */}
      <section id="concours" className="w-full py-12 md:py-24 lg:py-32 bg-gosholo-light-blue">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center justify-center rounded-full border px-2 py-1 text-sm md:text-base font-semibold transition-colors focus:outline-none border-transparent bg-gosholo-orange text-white w-auto mx-auto hover:bg-gosholo-orange/90 cursor-pointer group">
              Événement spécial
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Concours Osheaga</h2>
              <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Participez à notre concours exclusif et gagnez des billets pour le festival Osheaga!
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-4xl mt-12">
            <div className="grid gap-8">
              <div className="flex flex-col justify-center space-y-6">
                <div className="relative">
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-gosholo-orange rounded-full"></div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gosholo-orange rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gosholo-orange rounded-full"></div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gosholo-orange rounded-full"></div>
                  <div className="border-2 border-dashed border-white p-6 rounded-lg bg-gosholo-dark-teal">
                    <h3 className="text-2xl font-bold mb-4 text-white">Comment participer</h3>
                    <ul className="space-y-4 text-white">
                      <li className="flex items-start gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gosholo-orange text-white font-medium">
                          1
                        </div>
                        <p>Téléchargez l'application Gosholo sur votre téléphone</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gosholo-orange text-white font-medium">
                          2
                        </div>
                        <p>Suivez notre compte Instagram officiel : @gosholo</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gosholo-orange text-white font-medium">
                          3
                        </div>
                        <p>Repostez en story Instagram la publication officielle du concours</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gosholo-orange text-white font-medium">
                          4
                        </div>
                        <p>Taguez 2 amis dans les commentaires de la publication</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="relative">
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-gosholo-orange rounded-full"></div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gosholo-orange rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gosholo-orange rounded-full"></div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gosholo-orange rounded-full"></div>
                  <div className="border-2 border-dashed border-white p-6 rounded-lg bg-white">
                    <h3 className="text-2xl font-bold mb-4 text-gosholo-dark-teal flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 text-gosholo-orange"
                      >
                        <path d="M21 8v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8"></path>
                        <path d="m8 6 4-4 4 4"></path>
                        <path d="M12 2v14"></path>
                      </svg>
                      Détails du concours
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 p-2 hover:bg-gosholo-light-blue/5 rounded-md transition-colors">
                        <MapPin className="h-5 w-5 text-gosholo-orange" />
                        <span>Montréal, du 2 au 4 août 2025</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 hover:bg-gosholo-light-blue/5 rounded-md transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gosholo-orange"
                        >
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span>Fin du concours: 15 juillet 2025</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 hover:bg-gosholo-light-blue/5 rounded-md transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gosholo-orange"
                        >
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Les gagnants seront contactés par courriel</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <div className="flex items-center justify-between">
                        <div className="text-sm">Temps restant:</div>
                        <div className="font-bold text-gosholo-orange">32 jours</div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div className="bg-gosholo-orange h-2.5 rounded-full" style={{ width: "65%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Règlement du concours */}
            <div className="mt-12 bg-white rounded-lg shadow-sm border overflow-hidden">
              <button
                onClick={() => setRulesOpen(!rulesOpen)}
                className="w-full flex items-center justify-between p-4 font-bold text-lg text-gosholo-dark-teal hover:bg-gosholo-light-blue/10 transition-colors"
              >
                Règlement officiel du concours
                <ChevronDown className={`h-5 w-5 transition-transform ${rulesOpen ? "transform rotate-180" : ""}`} />
              </button>

              {rulesOpen && (
                <div className="p-6 border-t text-sm">
                  <h3 className="font-bold text-lg mb-4">Règlement officiel du concours – Osheaga 2025</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-gosholo-dark-teal mb-2">1. Durée du concours</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          Le concours débute le 16 juin 2025 à 9h00 et se termine le jeudi 17 juillet 2025 à 23h59
                          (heure du Québec).
                        </li>
                        <li>Le tirage aura lieu le vendredi 18 juillet 2025 à 15h.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gosholo-dark-teal mb-2">2. Conditions de participation</h4>
                      <p className="mb-2">Pour être admissible au tirage, les participants doivent :</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          Télécharger notre application gosholo et créer un compte (si tu es déjà inscrit, tu peux
                          sauter cette étape).
                        </li>
                        <li>Suivre notre compte Instagram officiel : @gosholo</li>
                        <li>
                          Reposter en story Instagram la publication officielle du concours (la story doit inclure le
                          tag @gosholo).
                        </li>
                        <li>Taguer 2 amis dans les commentaires de la publication du concours sur Instagram.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gosholo-dark-teal mb-2">3. Admissibilité</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Ce concours est ouvert à toute personne âgée de 18 ans ou plus, résidant au Québec.</li>
                        <li>Une seule participation par personne est autorisée.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gosholo-dark-teal mb-2">4. Tirage et attribution du prix</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          Le gagnant sera sélectionné au hasard parmi les personnes admissibles, ayant complété les 4
                          étapes ci-dessus.
                        </li>
                        <li>
                          Le gagnant sera contacté par message privé Instagram et devra fournir le courriel utilisé lors
                          de l'inscription à l'app, afin de valider son identité.
                        </li>
                        <li>
                          Si le gagnant ne répond pas dans un délai de 24 heures, un nouveau tirage sera effectué.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gosholo-dark-teal mb-2">5. Prix</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Une paire de billets pour Osheaga – samedi 2 août 2025 (valeur approximative : 400 $)</li>
                        <li>Le prix est non monnayable, non transférable et non échangeable.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gosholo-dark-teal mb-2">6. Limite de responsabilité</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          Ce concours n'est en aucun cas affilié, commandité ou géré par Instagram, Meta, Osheaga,
                          evenko ou leurs partenaires.
                        </li>
                        <li>
                          En participant, les utilisateurs dégagent Instagram et les autres tiers de toute
                          responsabilité.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gosholo-dark-teal mb-2">7. Consentement</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          En participant à ce concours, les personnes acceptent que leur nom d'utilisateur et leur
                          prénom puissent être mentionnés publiquement en cas de gain (réseaux sociaux ou site web de
                          l'organisateur).
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Bouton d'action */}
            <div className="flex justify-center mt-12">
              <Button size="lg" className="bg-gosholo-orange hover:bg-gosholo-orange/90 text-white group">
                Télécharger l'application
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="w-full py-12 md:py-24 bg-gosholo-orange text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Prêt à découvrir les commerces locaux?
                </h2>
                <p className="text-white/80 md:text-xl/relaxed">
                  Téléchargez l'application Gosholo dès aujourd'hui et commencez à explorer les trésors cachés de votre
                  quartier.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button className="bg-white text-gosholo-orange hover:bg-white/90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"></path>
                    <path d="M12 19v2"></path>
                    <path d="M12 3V1"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M19 12h2"></path>
                    <path d="M1 12h2"></path>
                    <path d="m17.66 6.34 1.41-1.41"></path>
                    <path d="m4.93 19.07 1.41-1.41"></path>
                  </svg>
                  App Store
                </Button>
                <Button className="bg-white text-gosholo-orange hover:bg-white/90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                    <path d="M5 3v4"></path>
                    <path d="M19 17v4"></path>
                    <path d="M3 5h4"></path>
                    <path d="M17 19h4"></path>
                  </svg>
                  Google Play
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/placeholder.svg?height=300&width=200&text=App+Mobile"
                width={200}
                height={400}
                alt="Application mobile Gosholo"
                className="rounded-xl shadow-lg border-8 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Inscription */}
      <section id="signup" className="w-full py-12 md:py-24 lg:py-32 bg-gosholo-dark-teal">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center justify-center rounded-full border px-2 py-1 text-sm md:text-base font-semibold transition-colors focus:outline-none border-transparent bg-gosholo-orange text-white w-auto mx-auto hover:bg-gosholo-orange/90 cursor-pointer group">
              Rejoignez-nous
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gosholo-light-green">
              Créez votre compte
            </h2>
            <p className="max-w-[700px] text-white/80 md:text-xl/relaxed">
              Rejoignez notre communauté et commencez à profiter des avantages Gosholo dès aujourd'hui.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Onglets */}
              <div className="flex border-b">
                <button
                  className={`flex-1 py-4 px-6 text-center font-medium text-lg transition-colors ${
                    activeTab === "user"
                      ? "bg-gosholo-light-green/10 text-gosholo-dark-teal border-b-2 border-gosholo-dark-teal"
                      : "text-gray-500 hover:text-gosholo-dark-teal"
                  }`}
                  onClick={() => setActiveTab("user")}
                >
                  <div className="flex items-center justify-center gap-2">
                    <User className="h-5 w-5" />
                    <span>Utilisateur</span>
                  </div>
                </button>
                <button
                  className={`flex-1 py-4 px-6 text-center font-medium text-lg transition-colors ${
                    activeTab === "business"
                      ? "bg-gosholo-light-green/10 text-gosholo-dark-teal border-b-2 border-gosholo-dark-teal"
                      : "text-gray-500 hover:text-gosholo-dark-teal"
                  }`}
                  onClick={() => setActiveTab("business")}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Store className="h-5 w-5" />
                    <span>Commerce</span>
                  </div>
                </button>
              </div>

              {/* Contenu des onglets */}
              <div className="p-6 md:p-8">
                {activeTab === "user" ? (
                  <div className="space-y-6">
                    <div className="text-left">
                      <h3 className="text-xl font-bold mb-2">Inscription utilisateur</h3>
                      <p className="text-gray-500">
                        Créez votre compte pour découvrir et soutenir les commerces locaux.
                      </p>
                    </div>

                    <p className="text-xs text-gray-500 mb-4">
                      Les champs marqués d'un <span className="text-red-500">*</span> sont obligatoires.
                    </p>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                          Prénom <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal"
                          placeholder="Votre prénom"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                          Nom <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal"
                          placeholder="Votre nom"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="userPostalCode" className="text-sm font-medium text-gray-700">
                        Code postal <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="userPostalCode"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal"
                        placeholder="Ex: H2X 1Y6"
                        required
                      />
                      <p className="text-xs text-gray-500">Format: A1A 1A1 (code postal canadien)</p>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="userEmail" className="text-sm font-medium text-gray-700">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                          type="email"
                          id="userEmail"
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal"
                          placeholder="votre.email@exemple.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="userPassword" className="text-sm font-medium text-gray-700">
                        Mot de passe <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                          type={showPassword ? "text" : "password"}
                          id="userPassword"
                          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal"
                          placeholder="Votre mot de passe"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                      <p className="text-xs text-gray-500">Le mot de passe doit contenir au moins 8 caractères.</p>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="termsUser"
                        className="h-4 w-4 text-gosholo-dark-teal border-gray-300 rounded focus:ring-gosholo-dark-teal"
                      />
                      <label htmlFor="termsUser" className="ml-2 block text-sm text-gray-700">
                        J'accepte les{" "}
                        <a href="#" className="text-gosholo-orange hover:underline">
                          conditions d'utilisation
                        </a>{" "}
                        et la{" "}
                        <a href="#" className="text-gosholo-orange hover:underline">
                          politique de confidentialité
                        </a>
                      </label>
                    </div>

                    <Button className="w-full bg-gosholo-orange hover:bg-gosholo-orange/90 text-white">
                      Créer mon compte
                    </Button>

                    <div className="text-center text-sm text-gray-500">
                      Vous avez déjà un compte?{" "}
                      <a href="#" className="text-gosholo-orange hover:underline font-medium">
                        Connectez-vous
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="text-left">
                      <h3 className="text-xl font-bold mb-2">Inscription commerce</h3>
                      <p className="text-gray-500">
                        Rejoignez notre réseau de commerces locaux et augmentez votre visibilité.
                      </p>
                    </div>

                    <p className="text-xs text-gray-500 mb-4">
                      Les champs marqués d'un <span className="text-red-500">*</span> sont obligatoires.
                    </p>

                    <div className="space-y-2">
                      <label htmlFor="businessName" className="text-sm font-medium text-gray-700">
                        Nom du commerce <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal"
                        placeholder="Nom de votre commerce"
                        required
                      />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="businessType" className="text-sm font-medium text-gray-700">
                          Type de commerce <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="businessType"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal"
                          required
                        >
                          <option value="">Sélectionnez une catégorie</option>
                          <option value="restaurant">Restaurant</option>
                          <option value="cafe">Café</option>
                          <option value="retail">Commerce de détail</option>
                          <option value="service">Service</option>
                          <option value="other">Autre</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="businessLocation" className="text-sm font-medium text-gray-700">
                          Ville <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="businessLocation"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal"
                          placeholder="Votre ville"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="businessPostalCode" className="text-sm font-medium text-gray-700">
                        Code postal <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="businessPostalCode"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal"
                        placeholder="Ex: H2X 1Y6"
                        required
                      />
                      <p className="text-xs text-gray-500">Format: A1A 1A1 (code postal canadien)</p>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="businessEmail" className="text-sm font-medium text-gray-700">
                        Email professionnel <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                          type="email"
                          id="businessEmail"
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal"
                          placeholder="commerce@exemple.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="businessPassword" className="text-sm font-medium text-gray-700">
                        Mot de passe <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                          type={showPassword ? "text" : "password"}
                          id="businessPassword"
                          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal"
                          placeholder="Votre mot de passe"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                      <p className="text-xs text-gray-500">Le mot de passe doit contenir au moins 8 caractères.</p>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="termsBusiness"
                        className="h-4 w-4 text-gosholo-dark-teal border-gray-300 rounded focus:ring-gosholo-dark-teal"
                      />
                      <label htmlFor="termsBusiness" className="ml-2 block text-sm text-gray-700">
                        J'accepte les{" "}
                        <a href="#" className="text-gosholo-orange hover:underline">
                          conditions d'utilisation
                        </a>{" "}
                        et la{" "}
                        <a href="#" className="text-gosholo-orange hover:underline">
                          politique de confidentialité
                        </a>
                      </label>
                    </div>

                    <Button className="w-full bg-gosholo-orange hover:bg-gosholo-orange/90 text-white">
                      Inscrire mon commerce
                    </Button>

                    <div className="text-center text-sm text-gray-500">
                      Vous avez déjà un compte?{" "}
                      <a href="#" className="text-gosholo-orange hover:underline font-medium">
                        Connectez-vous
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pied de page */}
      <footer className="border-t bg-white">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:py-12">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gosholo-dark-teal flex items-center justify-center">
                <ShoppingBag className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl">Gosholo</span>
            </Link>
            <p className="text-sm text-muted-foreground">Soutenir les commerces locaux, un achat à la fois.</p>
            <div className="flex gap-4 mt-2">
              <Link href="#" className="text-muted-foreground hover:text-gosholo-orange">
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-gosholo-orange">
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-gosholo-orange">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">Entreprise</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-gosholo-orange">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gosholo-orange">
                    Carrières
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gosholo-orange">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">Ressources</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-gosholo-orange">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gosholo-orange">
                    Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gosholo-orange">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">Légal</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-gosholo-orange">
                    Confidentialité
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gosholo-orange">
                    Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gosholo-orange">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Gosholo. Tous droits réservés.
            </p>
            <div className="flex items-center">
              <Button variant="link" size="sm" className="text-xs text-muted-foreground hover:text-gosholo-orange">
                Politique de confidentialité
              </Button>
              <span className="text-muted-foreground mx-2">|</span>
              <Button variant="link" size="sm" className="text-xs text-muted-foreground hover:text-gosholo-orange">
                Conditions d'utilisation
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* Pop-up du concours Osheaga */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md p-4">
          <DialogHeader className="pb-2">
            <DialogTitle className="text-xl font-bold text-center">Concours Osheaga!</DialogTitle>
          </DialogHeader>
          <div className="py-2 text-center">
            <Image
              src="/placeholder.svg?height=150&width=300"
              width={300}
              height={150}
              alt="Festival Osheaga"
              className="mx-auto rounded-lg object-cover shadow-md"
            />
            <div className="mt-2 text-base font-medium text-gosholo-orange">
              Gagnez des billets pour le festival Osheaga!
            </div>
            <div className="mt-1 text-xs text-muted-foreground">
              Pour chaque achat via l'application Gosholo, obtenez une chance de gagner.
            </div>
          </div>
          <div className="flex flex-col space-y-2 py-2">
            <div className="flex items-center space-x-2 bg-gosholo-light-blue p-2 rounded-md text-xs">
              <MapPin className="h-4 w-4 text-gosholo-dark-teal" />
              <span>Montréal, du 2 au 4 août 2025</span>
            </div>
            <div className="text-center text-xs text-white bg-gosholo-orange p-2 rounded-md">
              Fin du concours: 15 juillet 2025
            </div>
          </div>
          <div className="flex flex-row space-y-0 gap-2 py-2">
            <Button
              className="bg-gosholo-orange hover:bg-gosholo-orange/90 text-white text-xs h-8 px-3"
              onClick={() => {
                setIsOpen(false)
                // Faire défiler jusqu'à la section du concours après la fermeture du popup
                setTimeout(() => {
                  const concoursSection = document.getElementById("concours")
                  if (concoursSection) {
                    concoursSection.scrollIntoView({ behavior: "smooth" })
                  }
                }, 100)
              }}
            >
              En savoir plus
              <ChevronRight className="ml-1 h-3 w-3" />
            </Button>
            <Button variant="outline" className="text-xs h-8 px-3" onClick={() => setIsOpen(false)}>
              Fermer
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
