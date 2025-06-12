"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Building2,
  MapPin,
  ShoppingBag,
  TrendingUp,
  Users,
  Search,
  ChevronRight,
  Star,
  Clock,
  ArrowRight,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Ouvrir le pop-up après un court délai
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* En-tête */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-gosholo-dark-teal">
              À propos
            </Link>
            <Link href="#concours" className="text-sm font-medium transition-colors hover:text-gosholo-dark-teal">
              Concours
            </Link>
            <Link href="#commerces" className="text-sm font-medium transition-colors hover:text-gosholo-dark-teal">
              Commerces
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-gosholo-dark-teal">
              Contact
            </Link>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <div className="hidden md:block">
              <Button className="bg-gosholo-dark-teal hover:bg-gosholo-dark-teal/90">S'inscrire</Button>
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
              <Link
                href="#commerces"
                className="text-sm font-medium p-2 hover:bg-gosholo-light-blue/10 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Commerces
              </Link>
              <Link
                href="#"
                className="text-sm font-medium p-2 hover:bg-gosholo-light-blue/10 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="bg-gosholo-dark-teal hover:bg-gosholo-dark-teal/90 mt-2">S'inscrire</Button>
            </nav>
          </div>
        )}
      </header>

      {/* Section héro */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gosholo-light-blue/20 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gosholo-light-green text-gosholo-dark-teal">
                <Star className="mr-1 h-3 w-3" /> Nouveau concours Osheaga
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Découvrez et soutenez les <span className="text-gosholo-dark-teal">commerces locaux</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Gosholo vous aide à trouver les meilleures boutiques locales et vous encourage à soutenir l'économie
                  de votre quartier.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Rechercher un commerce local..."
                    className="h-10 w-full rounded-l-md border border-r-0 bg-background pl-9 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:rounded-r-none"
                  />
                </div>
                <Button className="bg-gosholo-dark-teal hover:bg-gosholo-dark-teal/90 sm:rounded-l-none">
                  Rechercher
                </Button>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-gosholo-dark-teal hover:bg-gosholo-dark-teal/90 group">
                  Découvrir les commerces
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline">
                  En savoir plus
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gosholo-light-green rounded-full opacity-60 blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gosholo-light-blue rounded-full opacity-60 blur-xl"></div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Commerces locaux"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square relative z-10 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section statistiques */}
      <section className="w-full py-8 bg-white border-y">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <div className="text-3xl font-bold text-gosholo-dark-teal">500+</div>
              <p className="text-sm text-muted-foreground">Commerces partenaires</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <div className="text-3xl font-bold text-gosholo-dark-teal">50 000+</div>
              <p className="text-sm text-muted-foreground">Utilisateurs actifs</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <div className="text-3xl font-bold text-gosholo-dark-teal">15+</div>
              <p className="text-sm text-muted-foreground">Villes couvertes</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <div className="text-3xl font-bold text-gosholo-dark-teal">2M$+</div>
              <p className="text-sm text-muted-foreground">Revenus générés</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section À propos */}
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gosholo-light-blue/20 text-gosholo-dark-teal">
              Notre mission
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Soutenir l'économie locale</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Chez Gosholo, nous croyons au pouvoir du commerce local pour créer des communautés plus fortes et plus
                durables.
              </p>
            </div>
          </div>

          <div className="grid gap-8 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gosholo-light-blue/30">
                <Building2 className="h-10 w-10 text-gosholo-dark-teal" />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Visibilité accrue</h3>
                <p className="text-muted-foreground">
                  Nous aidons les commerces locaux à être plus visibles en ligne et à attirer de nouveaux clients.
                </p>
              </div>
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-gosholo-dark-teal hover:underline"
              >
                En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gosholo-light-blue/30">
                <Users className="h-10 w-10 text-gosholo-dark-teal" />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Communauté engagée</h3>
                <p className="text-muted-foreground">
                  Nous créons une communauté de consommateurs engagés qui valorisent l'achat local et durable.
                </p>
              </div>
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-gosholo-dark-teal hover:underline"
              >
                En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gosholo-light-blue/30">
                <TrendingUp className="h-10 w-10 text-gosholo-dark-teal" />
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
                className="inline-flex items-center text-sm font-medium text-gosholo-dark-teal hover:underline"
              >
                En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section commerces */}
      <section id="commerces" className="w-full py-12 md:py-24 lg:py-32 bg-gosholo-light-blue/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gosholo-light-blue/20 text-gosholo-dark-teal">
              Découvrez
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Commerces populaires</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explorez les commerces locaux les mieux notés par notre communauté.
              </p>
            </div>
          </div>

          <div className="grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Commerce+${item}`}
                    width={400}
                    height={200}
                    alt={`Commerce ${item}`}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-md text-xs font-medium flex items-center">
                  <Star className="h-3 w-3 text-yellow-500 mr-1" fill="currentColor" />
                  4.{item + 3}/5
                </div>
                <div className="p-4">
                  <h3 className="font-bold">Boutique Locale {item}</h3>
                  <p className="text-sm text-muted-foreground mt-1">Catégorie · Quartier</p>
                  <div className="flex items-center mt-3 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                    <span className="text-muted-foreground">Ouvert jusqu'à 19h</span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-4 group-hover:bg-gosholo-dark-teal group-hover:text-white"
                  >
                    Voir le commerce
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button className="bg-gosholo-dark-teal hover:bg-gosholo-dark-teal/90">
              Voir tous les commerces
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Section témoignages */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gosholo-light-blue/20 text-gosholo-dark-teal">
              Témoignages
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ce que disent nos partenaires</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Découvrez comment Gosholo a aidé des centaines de commerces locaux à prospérer.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="relative rounded-lg border bg-background p-6 shadow-sm">
                <svg
                  className="absolute -top-6 -left-6 h-12 w-12 text-gosholo-light-blue opacity-20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
                <div className="space-y-2">
                  <p className="text-lg">
                    "Grâce à Gosholo, notre boutique a connu une augmentation de 30% de nouveaux clients. La visibilité
                    que nous avons gagnée est inestimable."
                  </p>
                  <div className="flex items-center pt-4">
                    <div className="h-10 w-10 rounded-full bg-gosholo-light-blue/30"></div>
                    <div className="ml-4">
                      <p className="text-sm font-medium">Marie Tremblay</p>
                      <p className="text-sm text-muted-foreground">Boutique Écolo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="relative rounded-lg border bg-background p-6 shadow-sm">
                <svg
                  className="absolute -top-6 -left-6 h-12 w-12 text-gosholo-light-blue opacity-20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
                <div className="space-y-2">
                  <p className="text-lg">
                    "L'application nous a permis de nous connecter avec notre communauté locale d'une façon que nous
                    n'aurions jamais imaginée. Nos ventes ont augmenté de 25%."
                  </p>
                  <div className="flex items-center pt-4">
                    <div className="h-10 w-10 rounded-full bg-gosholo-light-blue/30"></div>
                    <div className="ml-4">
                      <p className="text-sm font-medium">Jean Dupont</p>
                      <p className="text-sm text-muted-foreground">Café du Coin</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section concours */}
      <section
        id="concours"
        className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gosholo-light-green/20"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gosholo-light-green text-gosholo-dark-teal">
              Événement spécial
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Concours Osheaga</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Participez à notre concours exclusif et gagnez des billets pour le festival Osheaga!
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-4xl mt-12">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-6">
                <div className="relative">
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-gosholo-light-green rounded-full"></div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gosholo-light-green rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gosholo-light-green rounded-full"></div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gosholo-light-green rounded-full"></div>
                  <div className="border-2 border-dashed border-gosholo-light-green p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4">Comment participer</h3>
                    <ul className="space-y-4 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gosholo-light-blue/30 text-gosholo-dark-teal font-medium">
                          1
                        </div>
                        <p>Téléchargez l'application Gosholo sur votre téléphone</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gosholo-light-blue/30 text-gosholo-dark-teal font-medium">
                          2
                        </div>
                        <p>Effectuez un achat dans l'un de nos commerces locaux partenaires</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gosholo-light-blue/30 text-gosholo-dark-teal font-medium">
                          3
                        </div>
                        <p>Scannez votre reçu dans l'application pour obtenir une participation</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gosholo-light-blue/30 text-gosholo-dark-teal font-medium">
                          4
                        </div>
                        <p>Plus vous effectuez d'achats, plus vous avez de chances de gagner!</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="bg-gosholo-dark-teal hover:bg-gosholo-dark-teal/90 w-full sm:w-auto">
                    Télécharger l'application
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gosholo-light-blue rounded-full opacity-30 blur-lg"></div>
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    width={500}
                    height={300}
                    alt="Festival Osheaga"
                    className="mx-auto rounded-lg object-cover shadow-lg"
                  />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h4 className="font-bold mb-4 text-lg flex items-center">
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
                      className="mr-2 text-gosholo-dark-teal"
                    >
                      <path d="M21 8v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8"></path>
                      <path d="m8 6 4-4 4 4"></path>
                      <path d="M12 2v14"></path>
                    </svg>
                    Détails du concours
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 p-2 hover:bg-gosholo-light-blue/5 rounded-md transition-colors">
                      <MapPin className="h-5 w-5 text-gosholo-dark-teal" />
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
                        className="text-gosholo-dark-teal"
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
                        className="text-gosholo-dark-teal"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                      <span>Les gagnants seront contactés par courriel</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <div className="text-sm">Temps restant:</div>
                      <div className="font-bold text-gosholo-dark-teal">32 jours</div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div className="bg-gosholo-dark-teal h-2.5 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="w-full py-12 md:py-24 bg-gosholo-dark-teal text-white">
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
                <Button className="bg-white text-gosholo-dark-teal hover:bg-white/90">
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
                <Button className="bg-white text-gosholo-dark-teal hover:bg-white/90">
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
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gosholo-light-green rounded-full opacity-20 blur-xl"></div>
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
        </div>
      </section>

      {/* Pied de page */}
      <footer className="border-t bg-background">
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
              <Link href="#" className="text-muted-foreground hover:text-gosholo-dark-teal">
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
              <Link href="#" className="text-muted-foreground hover:text-gosholo-dark-teal">
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
              <Link href="#" className="text-muted-foreground hover:text-gosholo-dark-teal">
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
                  <Link href="#" className="hover:text-gosholo-dark-teal">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gosholo-dark-teal">
                    Carrières
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gosholo-dark-teal">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">Ressources</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-gosholo-dark-teal">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gosholo-dark-teal">
                    Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gosholo-dark-teal">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">Légal</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-gosholo-dark-teal">
                    Confidentialité
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gosholo-dark-teal">
                    Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gosholo-dark-teal">
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
              <Button variant="link" size="sm" className="text-xs text-muted-foreground hover:text-gosholo-dark-teal">
                Politique de confidentialité
              </Button>
              <span className="text-muted-foreground mx-2">|</span>
              <Button variant="link" size="sm" className="text-xs text-muted-foreground hover:text-gosholo-dark-teal">
                Conditions d'utilisation
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* Pop-up du concours Osheaga */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">Concours Osheaga!</DialogTitle>
          </DialogHeader>
          <div className="py-4 text-center">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gosholo-light-green rounded-full opacity-30 blur-lg"></div>
              <Image
                src="/placeholder.svg?height=200&width=400"
                width={400}
                height={200}
                alt="Festival Osheaga"
                className="mx-auto rounded-lg object-cover shadow-md"
              />
            </div>
            <div className="mt-4 text-lg font-medium text-gosholo-dark-teal">
              Participez à notre concours et gagnez des billets pour le festival Osheaga!
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              Pour chaque achat effectué via l'application Gosholo dans un commerce local participant, obtenez une
              chance de gagner une paire de billets pour le festival de musique le plus attendu de l'été.
            </div>
          </div>
          <div className="flex flex-col space-y-4 py-4">
            <div className="flex items-center space-x-2 bg-gosholo-light-blue/10 p-3 rounded-md">
              <MapPin className="h-5 w-5 text-gosholo-dark-teal" />
              <span>Montréal, du 2 au 4 août 2025</span>
            </div>
            <div className="text-center text-sm text-muted-foreground bg-gosholo-light-green/10 p-3 rounded-md">
              Le tirage aura lieu le 15 juillet 2025. Les gagnants seront contactés par courriel.
            </div>
          </div>
          <DialogFooter className="flex flex-col gap-2 sm:flex-row sm:justify-center">
            <Button
              className="w-full bg-gosholo-dark-teal hover:bg-gosholo-dark-teal/90 group"
              onClick={() => {
                setIsOpen(false)
                setTimeout(() => {
                  document.getElementById("concours")?.scrollIntoView({ behavior: "smooth" })
                }, 100)
              }}
            >
              En savoir plus sur le concours
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="w-full" onClick={() => setIsOpen(false)}>
              Fermer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
