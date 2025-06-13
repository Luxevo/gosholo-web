"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import {
  Building2,
  MapPin,
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
  Clock,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"user" | "business">("user")
  const [showPassword, setShowPassword] = useState(false)
  const [rulesOpen, setRulesOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    // Animation d'entrée progressive
    setIsVisible(true)

    // Ouvrir le pop-up après un court délai
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 2000) // Légèrement plus long pour laisser les animations se terminer

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" },
    )

    // Observer tous les titres de sections
    const titleElements = document.querySelectorAll("[data-animate-title]")
    titleElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [isVisible])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* En-tête avec animation de slide-down */}
      <header
        className={`sticky top-0 z-40 w-full border-b bg-white transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center group" aria-label="Retour à l'accueil">
              <Image
                src="/images/gosholo-logo.png"
                alt="Logo Gosholo - Soutenez les commerces locaux"
                width={160}
                height={40}
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>
          </div>
          <nav
            className="hidden md:flex items-center space-x-4 lg:space-x-6 mx-6"
            role="navigation"
            aria-label="Navigation principale"
          >
            <Link
              href="/"
              className="text-sm font-medium transition-all duration-300 hover:text-gosholo-dark-teal hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gosholo-dark-teal after:transition-all after:duration-300 hover:after:w-full"
            >
              Accueil
            </Link>
            <Link
              href="#who-we-are"
              className="text-sm font-medium transition-all duration-300 hover:text-gosholo-dark-teal hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gosholo-dark-teal after:transition-all after:duration-300 hover:after:w-full"
            >
              Qui nous sommes
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium transition-all duration-300 hover:text-gosholo-dark-teal hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gosholo-dark-teal after:transition-all after:duration-300 hover:after:w-full"
            >
              À propos
            </Link>
            <Link
              href="#concours"
              className="text-sm font-medium transition-all duration-300 hover:text-gosholo-dark-teal hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gosholo-dark-teal after:transition-all after:duration-300 hover:after:w-full"
            >
              Concours
            </Link>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <div className="hidden md:block">
              <Button
                className="bg-gosholo-orange hover:bg-gosholo-orange/90 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => scrollToSection("signup")}
                aria-label="Aller à la section d'inscription"
              >
                S'inscrire
              </Button>
            </div>
            <button
              className={`md:hidden p-2 transition-all duration-300 hover:scale-110 ${mobileMenuOpen ? "rotate-180" : "rotate-0"}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menu mobile avec animation slide-down */}
        <div
          className={`md:hidden bg-white border-b transition-all duration-500 ease-in-out ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
          role="navigation"
          aria-label="Navigation mobile"
        >
          <nav className="flex flex-col p-4 space-y-3">
            <Link
              href="/"
              className="text-sm font-medium p-2 hover:bg-gosholo-light-blue/10 rounded-md transition-all duration-300 hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="#who-we-are"
              className="text-sm font-medium p-2 hover:bg-gosholo-light-blue/10 rounded-md transition-all duration-300 hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Qui nous sommes
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium p-2 hover:bg-gosholo-light-blue/10 rounded-md transition-all duration-300 hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              À propos
            </Link>
            <Link
              href="#concours"
              className="text-sm font-medium p-2 hover:bg-gosholo-light-blue/10 rounded-md transition-all duration-300 hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Concours
            </Link>
            <Button
              className="bg-gosholo-orange hover:bg-gosholo-orange/90 text-white mt-2 transition-all duration-300 hover:scale-105"
              onClick={() => {
                scrollToSection("signup")
                setMobileMenuOpen(false)
              }}
              aria-label="Aller à la section d'inscription"
            >
              S'inscrire
            </Button>
          </nav>
        </div>
      </header>

      {/* Section héro avec animations d'entrée */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gosholo-light-blue overflow-hidden" role="banner">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div
              className={`flex flex-col justify-center space-y-6 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
            >
              <button
                onClick={() => scrollToSection("concours")}
                className="inline-flex items-center justify-center rounded-full border px-3 py-2 text-xs sm:text-sm md:text-base font-semibold transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 border-transparent bg-gosholo-orange text-white w-fit mx-auto hover:bg-gosholo-orange/90 cursor-pointer group hover:scale-105 hover:shadow-lg animate-pulse"
                aria-label="Voir le concours Osheaga"
              >
                <Star className="mr-1.5 h-3 w-3 sm:h-4 sm:w-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12" />
                <span className="px-0.5 group-hover:underline whitespace-nowrap">Nouveau concours Osheaga</span>
                <ChevronRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
              </button>
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none text-white">
                  Découvrez et soutenez les{" "}
                  <span className="text-gosholo-light-green animate-pulse">commerces locaux</span>
                </h1>
                <p className="max-w-[600px] text-white/90 text-base md:text-xl leading-relaxed">
                  Gosholo vous aide à trouver les meilleures boutiques locales et vous encourage à soutenir l'économie
                  de votre quartier.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-gosholo-orange hover:bg-gosholo-orange/90 text-white group transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  disabled
                >
                  <Clock className="mr-2 h-4 w-4 animate-spin" />
                  Bientôt disponible
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-gosholo-dark-teal border-white hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  onClick={() => scrollToSection("about")}
                >
                  En savoir plus
                </Button>
              </div>
            </div>
            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
            >
              <Image
                src="/images/local-food.png"
                width={550}
                height={550}
                alt="Personnes partageant un repas local dans un cadre convivial"
                className="mx-auto overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Qui nous sommes avec animations au scroll */}
      <section
        id="who-we-are"
        className="w-full py-12 md:py-24 lg:py-32 bg-gosholo-dark-teal"
        role="region"
        aria-labelledby="who-we-are-title"
      >
        <div className="container px-4 md:px-6">
          <div id="who-we-are" className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div
              className="inline-flex items-center justify-center rounded-full border px-3 py-2 text-sm md:text-base font-semibold border-transparent bg-gosholo-orange text-white w-fit mx-auto transition-all duration-300 hover:scale-105 hover:shadow-lg"
              role="presentation"
            >
              Qui nous sommes
            </div>
            <h2
              id="who-we-are-title"
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-gosholo-light-green"
            >
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
              <div
                className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-lg group"
                role="presentation"
              >
                <Smartphone
                  className="h-5 w-5 text-gosholo-orange transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                  aria-hidden="true"
                />
                <span className="font-medium text-white">Application mobile</span>
              </div>
              <div
                className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-lg group"
                role="presentation"
              >
                <Gift
                  className="h-5 w-5 text-gosholo-orange transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                  aria-hidden="true"
                />
                <span className="font-medium text-white">Récompenses</span>
              </div>
              <div
                className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-lg group"
                role="presentation"
              >
                <Coffee
                  className="h-5 w-5 text-gosholo-orange transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                  aria-hidden="true"
                />
                <span className="font-medium text-white">Commerces locaux</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section À propos avec animations de cartes */}
      <section
        id="about"
        className="w-full py-12 md:py-24 lg:py-32 bg-gosholo-light-green"
        role="region"
        aria-labelledby="about-title"
      >
        <div className="container px-4 md:px-6">
          <div id="about" className="flex flex-col items-center justify-center space-y-4 text-center">
            <div
              className="inline-flex items-center justify-center rounded-full border px-3 py-2 text-sm md:text-base font-semibold border-transparent bg-gosholo-orange text-white w-fit mx-auto transition-all duration-300 hover:scale-105 hover:shadow-lg"
              role="presentation"
            >
              Notre mission
            </div>
            <div className="space-y-2">
              <h2 id="about-title" className="text-3xl font-bold tracking-tighter sm:text-5xl text-gosholo-dark-teal">
                Soutenir l'économie locale
              </h2>
              <p className="max-w-[900px] text-gosholo-dark-teal md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Chez Gosholo, nous croyons au pouvoir du commerce local pour créer des communautés plus fortes et plus
                durables.
              </p>
            </div>
          </div>

          <div className="grid gap-8 py-12 lg:grid-cols-3 lg:gap-12">
            <article className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all duration-500 hover:shadow-xl bg-white hover:scale-105 hover:-translate-y-2 group">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full bg-gosholo-dark-teal transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                role="presentation"
              >
                <Building2
                  className="h-10 w-10 text-white transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Visibilité accrue</h3>
                <p className="text-muted-foreground">
                  Nous aidons les commerces locaux à être plus visibles en ligne et à attirer de nouveaux clients.
                </p>
              </div>
              <Link
                href="#signup"
                className="inline-flex items-center text-sm font-medium text-gosholo-orange hover:underline focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 rounded transition-all duration-300 hover:scale-105 group"
                aria-label="En savoir plus sur la visibilité accrue"
              >
                En savoir plus{" "}
                <ArrowRight
                  className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </article>
            <article className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all duration-500 hover:shadow-xl bg-white hover:scale-105 hover:-translate-y-2 group">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full bg-gosholo-dark-teal transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                role="presentation"
              >
                <Users
                  className="h-10 w-10 text-white transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Communauté engagée</h3>
                <p className="text-muted-foreground">
                  Nous créons une communauté de consommateurs engagés qui valorisent l'achat local et durable.
                </p>
              </div>
              <Link
                href="#signup"
                className="inline-flex items-center text-sm font-medium text-gosholo-orange hover:underline focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 rounded transition-all duration-300 hover:scale-105 group"
                aria-label="En savoir plus sur la communauté engagée"
              >
                En savoir plus{" "}
                <ArrowRight
                  className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </article>
            <article className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all duration-500 hover:shadow-xl bg-white hover:scale-105 hover:-translate-y-2 group">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full bg-gosholo-dark-teal transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                role="presentation"
              >
                <TrendingUp
                  className="h-10 w-10 text-white transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Impact économique</h3>
                <p className="text-muted-foreground">
                  Nous contribuons à la croissance économique locale en redirigeant les dépenses vers les entreprises de
                  quartier.
                </p>
              </div>
              <Link
                href="#signup"
                className="inline-flex items-center text-sm font-medium text-gosholo-orange hover:underline focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 rounded transition-all duration-300 hover:scale-105 group"
                aria-label="En savoir plus sur l'impact économique"
              >
                En savoir plus{" "}
                <ArrowRight
                  className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Section concours avec animations interactives */}
      <section
        id="concours"
        className="w-full py-12 md:py-24 lg:py-32 bg-gosholo-light-blue"
        role="region"
        aria-labelledby="concours-title"
      >
        <div className="container px-4 md:px-6">
          <div id="concours" className="flex flex-col items-center justify-center space-y-4 text-center">
            <div
              className="inline-flex items-center justify-center rounded-full border px-3 py-2 text-sm md:text-base font-semibold border-transparent bg-gosholo-orange text-white w-fit mx-auto transition-all duration-300 hover:scale-105 hover:shadow-lg"
              role="presentation"
            >
              Événement spécial
            </div>
            <div className="space-y-2">
              <h2 id="concours-title" className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                Concours Osheaga
              </h2>
              <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Participez à notre concours exclusif et gagnez des billets pour le festival Osheaga!
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-4xl mt-12">
            <div className="grid gap-8">
              <div className="flex flex-col justify-center space-y-6">
                <div className="relative group">
                  <div
                    className="absolute -top-2 -left-2 w-4 h-4 bg-gosholo-orange rounded-full animate-pulse"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-gosholo-orange rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                    aria-hidden="true"
                  ></div>
                  <div
                    className="absolute -bottom-2 -left-2 w-4 h-4 bg-gosholo-orange rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                    aria-hidden="true"
                  ></div>
                  <div
                    className="absolute -bottom-2 -right-2 w-4 h-4 bg-gosholo-orange rounded-full animate-pulse"
                    style={{ animationDelay: "1.5s" }}
                    aria-hidden="true"
                  ></div>
                  <div className="border-2 border-dashed border-white p-6 rounded-lg bg-gosholo-dark-teal transition-all duration-300 hover:shadow-xl group-hover:scale-105">
                    <h3 className="text-2xl font-bold mb-4 text-white">Comment participer</h3>
                    <ol className="space-y-4 text-white list-none">
                      <li className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2">
                        <div
                          className="flex h-6 w-6 items-center justify-center rounded-full bg-gosholo-orange text-white font-medium text-sm transition-all duration-300 hover:scale-110"
                          aria-hidden="true"
                        >
                          1
                        </div>
                        <p>Suivez notre compte Instagram officiel : @gosholo</p>
                      </li>
                      <li className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2">
                        <div
                          className="flex h-6 w-6 items-center justify-center rounded-full bg-gosholo-orange text-white font-medium text-sm transition-all duration-300 hover:scale-110"
                          aria-hidden="true"
                        >
                          2
                        </div>
                        <p>Repostez en story Instagram la publication officielle du concours</p>
                      </li>
                      <li className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2">
                        <div
                          className="flex h-6 w-6 items-center justify-center rounded-full bg-gosholo-orange text-white font-medium text-sm transition-all duration-300 hover:scale-110"
                          aria-hidden="true"
                        >
                          3
                        </div>
                        <p>Taguez 2 amis dans les commentaires de la publication</p>
                      </li>
                      <li className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2">
                        <div
                          className="flex h-6 w-6 items-center justify-center rounded-full bg-gosholo-orange text-white font-medium text-sm transition-all duration-300 hover:scale-110"
                          aria-hidden="true"
                        >
                          4
                        </div>
                        <p>Téléchargez l'application Gosholo quand elle sera disponible (avant le début du concours)</p>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="relative group">
                  <div
                    className="absolute -top-2 -left-2 w-4 h-4 bg-gosholo-orange rounded-full animate-bounce"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-gosholo-orange rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                    aria-hidden="true"
                  ></div>
                  <div
                    className="absolute -bottom-2 -left-2 w-4 h-4 bg-gosholo-orange rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                    aria-hidden="true"
                  ></div>
                  <div
                    className="absolute -bottom-2 -right-2 w-4 h-4 bg-gosholo-orange rounded-full animate-bounce"
                    style={{ animationDelay: "0.6s" }}
                    aria-hidden="true"
                  ></div>
                  <div className="border-2 border-dashed border-white p-6 rounded-lg bg-white transition-all duration-300 hover:shadow-xl group-hover:scale-105">
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
                        className="mr-2 text-gosholo-orange transition-transform duration-300 group-hover:scale-110"
                        aria-hidden="true"
                      >
                        <path d="M21 8v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8"></path>
                        <path d="m8 6 4-4 4 4"></path>
                        <path d="M12 2v14"></path>
                      </svg>
                      Détails du concours
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 p-2 hover:bg-gosholo-light-blue/5 rounded-md transition-all duration-300 hover:translate-x-2">
                        <MapPin
                          className="h-5 w-5 text-gosholo-orange flex-shrink-0 transition-transform duration-300 hover:scale-110"
                          aria-hidden="true"
                        />
                        <span>Montréal, du 2 au 4 août 2025</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 hover:bg-gosholo-light-blue/5 rounded-md transition-all duration-300 hover:translate-x-2">
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
                          className="text-gosholo-orange flex-shrink-0 transition-transform duration-300 hover:scale-110"
                          aria-hidden="true"
                        >
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span>Fin du concours: 15 juillet 2025</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 hover:bg-gosholo-light-blue/5 rounded-md transition-all duration-300 hover:translate-x-2">
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
                          className="text-gosholo-orange flex-shrink-0 transition-transform duration-300 hover:scale-110"
                          aria-hidden="true"
                        >
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Les gagnants seront contactés par courriel</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <div className="flex items-center justify-between">
                        <div className="text-sm">Temps restant:</div>
                        <div className="font-bold text-gosholo-orange">31 jours</div>
                      </div>
                      <div
                        className="w-full bg-gray-200 rounded-full h-2.5 mt-2"
                        role="progressbar"
                        aria-valuenow={65}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label="Progression du concours"
                      >
                        <div
                          className="bg-gosholo-orange h-2.5 rounded-full transition-all duration-1000 ease-out animate-pulse"
                          style={{ width: "65%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Règlement du concours avec animation d'accordéon */}
            <div className="mt-12 bg-white rounded-lg shadow-sm border overflow-hidden transition-all duration-300 hover:shadow-lg">
              <button
                onClick={() => setRulesOpen(!rulesOpen)}
                className="w-full flex items-center justify-between p-4 font-bold text-lg text-gosholo-dark-teal hover:bg-gosholo-light-blue/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 group"
                aria-expanded={rulesOpen}
                aria-controls="rules-content"
              >
                Règlement officiel du concours
                <ChevronDown
                  className={`h-5 w-5 transition-all duration-500 ${rulesOpen ? "transform rotate-180" : ""} group-hover:scale-110`}
                  aria-hidden="true"
                />
              </button>

              <div
                className={`transition-all duration-500 ease-in-out ${rulesOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
              >
                <div id="rules-content" className="p-6 border-t text-sm">
                  <h3 className="font-bold text-lg mb-4">Règlement officiel du concours – Osheaga 2025</h3>

                  <div className="space-y-6">
                    <div className="transition-all duration-300 hover:translate-x-2">
                      <h4 className="font-bold text-gosholo-dark-teal mb-2">1. Durée du concours</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          Le concours débute le 16 juin 2025 à 9h00 et se termine le jeudi 17 juillet 2025 à 23h59
                          (heure du Québec).
                        </li>
                        <li>Le tirage aura lieu le vendredi 18 juillet 2025 à 15h.</li>
                      </ul>
                    </div>

                    <div className="transition-all duration-300 hover:translate-x-2">
                      <h4 className="font-bold text-gosholo-dark-teal mb-2">2. Conditions de participation</h4>
                      <p className="mb-2">Pour être admissible au tirage, les participants doivent :</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Suivre notre compte Instagram officiel : @gosholo</li>
                        <li>
                          Reposter en story Instagram la publication officielle du concours (la story doit inclure le
                          tag @gosholo).
                        </li>
                        <li>Taguer 2 amis dans les commentaires de la publication du concours sur Instagram.</li>
                        <li>
                          Télécharger notre application gosholo et créer un compte (l'application sera disponible avant
                          le début du concours).
                        </li>
                      </ul>
                    </div>

                    <div className="transition-all duration-300 hover:translate-x-2">
                      <h4 className="font-bold text-gosholo-dark-teal mb-2">3. Admissibilité</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Ce concours est ouvert à toute personne âgée de 18 ans ou plus, résidant au Québec.</li>
                        <li>Une seule participation par personne est autorisée.</li>
                      </ul>
                    </div>

                    <div className="transition-all duration-300 hover:translate-x-2">
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

                    <div className="transition-all duration-300 hover:translate-x-2">
                      <h4 className="font-bold text-gosholo-dark-teal mb-2">5. Prix</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Une paire de billets pour Osheaga – samedi 2 août 2025 (valeur approximative : 400 $)</li>
                        <li>Le prix est non monnayable, non transférable et non échangeable.</li>
                      </ul>
                    </div>

                    <div className="transition-all duration-300 hover:translate-x-2">
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

                    <div className="transition-all duration-300 hover:translate-x-2">
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
              </div>
            </div>
            {/* Bouton d'action */}
            <div className="flex justify-center mt-12">
              <Button
                size="lg"
                className="bg-gosholo-orange hover:bg-gosholo-orange/90 text-white group transition-all duration-300 hover:scale-105 hover:shadow-lg"
                disabled
              >
                <Clock className="mr-2 h-4 w-4 animate-spin" />
                Application bientôt disponible
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA avec animations */}
      <section className="w-full py-12 md:py-24 bg-gosholo-orange text-white" role="region" aria-labelledby="cta-title">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div id="cta" className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 id="cta-title" className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Bientôt disponible pour découvrir les commerces locaux!
                </h2>
                <p className="text-white/90 md:text-xl/relaxed">
                  L'application Gosholo sera bientôt disponible pour vous permettre d'explorer les trésors cachés de
                  votre quartier.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  className="bg-white text-gosholo-orange hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                  disabled
                >
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
                    className="mr-2 transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
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
                  Bientôt sur App Store
                </Button>
                <Button
                  className="bg-white text-gosholo-orange hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                  disabled
                >
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
                    className="mr-2 transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                    <path d="M5 3v4"></path>
                    <path d="M19 17v4"></path>
                    <path d="M3 5h4"></path>
                    <path d="M17 19h4"></path>
                  </svg>
                  Bientôt sur Google Play
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/placeholder.svg?height=300&width=200&text=App+Mobile"
                width={200}
                height={400}
                alt="Aperçu de l'application mobile Gosholo sur smartphone"
                className="rounded-xl shadow-lg border-8 border-white transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Inscription avec animations de tabs */}
      <section
        id="signup"
        className="w-full py-12 md:py-24 lg:py-32 bg-gosholo-dark-teal"
        role="region"
        aria-labelledby="signup-title"
      >
        <div className="container px-4 md:px-6">
          <div id="signup" className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div
              className="inline-flex items-center justify-center rounded-full border px-3 py-2 text-sm md:text-base font-semibold border-transparent bg-gosholo-orange text-white w-fit mx-auto transition-all duration-300 hover:scale-105 hover:shadow-lg"
              role="presentation"
            >
              Rejoignez-nous
            </div>
            <h2 id="signup-title" className="text-3xl font-bold tracking-tighter sm:text-5xl text-gosholo-light-green">
              Créez votre compte
            </h2>
            <p className="max-w-[700px] text-white/90 md:text-xl/relaxed">
              Rejoignez notre communauté et commencez à profiter des avantages Gosholo dès aujourd'hui.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
              {/* Onglets avec animations */}
              <div className="flex border-b" role="tablist" aria-label="Type d'inscription">
                <button
                  className={`flex-1 py-4 px-6 text-center font-medium text-lg transition-all duration-500 ${
                    activeTab === "user"
                      ? "bg-gosholo-light-green/10 text-gosholo-dark-teal border-b-2 border-gosholo-dark-teal scale-105"
                      : "text-gray-500 hover:text-gosholo-dark-teal hover:scale-105"
                  }`}
                  onClick={() => setActiveTab("user")}
                  role="tab"
                  aria-selected={activeTab === "user"}
                  aria-controls="user-panel"
                  id="user-tab"
                >
                  <div className="flex items-center justify-center gap-2">
                    <User
                      className={`h-5 w-5 transition-transform duration-300 ${activeTab === "user" ? "scale-110" : ""}`}
                      aria-hidden="true"
                    />
                    <span>Utilisateur</span>
                  </div>
                </button>
                <button
                  className={`flex-1 py-4 px-6 text-center font-medium text-lg transition-all duration-500 ${
                    activeTab === "business"
                      ? "bg-gosholo-light-green/10 text-gosholo-dark-teal border-b-2 border-gosholo-dark-teal scale-105"
                      : "text-gray-500 hover:text-gosholo-dark-teal hover:scale-105"
                  }`}
                  onClick={() => setActiveTab("business")}
                  role="tab"
                  aria-selected={activeTab === "business"}
                  aria-controls="business-panel"
                  id="business-tab"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Store
                      className={`h-5 w-5 transition-transform duration-300 ${activeTab === "business" ? "scale-110" : ""}`}
                      aria-hidden="true"
                    />
                    <span>Commerce</span>
                  </div>
                </button>
              </div>

              {/* Contenu des onglets avec animations de transition */}
              <div className="p-6 md:p-8">
                {activeTab === "user" ? (
                  <div
                    role="tabpanel"
                    id="user-panel"
                    aria-labelledby="user-tab"
                    className={`space-y-6 transition-all duration-500 ${activeTab === "user" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
                  >
                    <div className="text-left">
                      <h3 className="text-xl font-bold mb-2">Inscription utilisateur</h3>
                      <p className="text-gray-500">
                        Créez votre compte pour découvrir et soutenir les commerces locaux.
                      </p>
                    </div>

                    <p className="text-xs text-gray-500 mb-4">
                      Les champs marqués d'un <span className="text-red-500">*</span> sont obligatoires.
                    </p>

                    <form className="space-y-6" noValidate>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                            Prénom{" "}
                            <span className="text-red-500" aria-label="obligatoire">
                              *
                            </span>
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal focus:border-transparent transition-all duration-300 hover:border-gosholo-light-blue"
                            placeholder="Votre prénom"
                            required
                            aria-required="true"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                            Nom{" "}
                            <span className="text-red-500" aria-label="obligatoire">
                              *
                            </span>
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal focus:border-transparent transition-all duration-300 hover:border-gosholo-light-blue"
                            placeholder="Votre nom"
                            required
                            aria-required="true"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="userPostalCode" className="text-sm font-medium text-gray-700">
                          Code postal{" "}
                          <span className="text-red-500" aria-label="obligatoire">
                            *
                          </span>
                        </label>
                        <input
                          type="text"
                          id="userPostalCode"
                          name="postalCode"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal focus:border-transparent transition-all duration-300 hover:border-gosholo-light-blue"
                          placeholder="Ex: H2X 1Y6"
                          pattern="[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d"
                          required
                          aria-required="true"
                          aria-describedby="postal-code-help"
                        />
                        <p id="postal-code-help" className="text-xs text-gray-500">
                          Format: A1A 1A1 (code postal canadien)
                        </p>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="userEmail" className="text-sm font-medium text-gray-700">
                          Email{" "}
                          <span className="text-red-500" aria-label="obligatoire">
                            *
                          </span>
                        </label>
                        <div className="relative group">
                          <Mail
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 transition-all duration-300 group-focus-within:text-gosholo-dark-teal group-focus-within:scale-110"
                            aria-hidden="true"
                          />
                          <input
                            type="email"
                            id="userEmail"
                            name="email"
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal focus:border-transparent transition-all duration-300 hover:border-gosholo-light-blue"
                            placeholder="votre.email@exemple.com"
                            required
                            aria-required="true"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="userPassword" className="text-sm font-medium text-gray-700">
                          Mot de passe{" "}
                          <span className="text-red-500" aria-label="obligatoire">
                            *
                          </span>
                        </label>
                        <div className="relative group">
                          <Lock
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 transition-all duration-300 group-focus-within:text-gosholo-dark-teal group-focus-within:scale-110"
                            aria-hidden="true"
                          />
                          <input
                            type={showPassword ? "text" : "password"}
                            id="userPassword"
                            name="password"
                            className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal focus:border-transparent transition-all duration-300 hover:border-gosholo-light-blue"
                            placeholder="Votre mot de passe"
                            minLength={8}
                            required
                            aria-required="true"
                            aria-describedby="password-help"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 rounded transition-all duration-300 hover:scale-110"
                            aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                          >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                        <p id="password-help" className="text-xs text-gray-500">
                          Le mot de passe doit contenir au moins 8 caractères.
                        </p>
                      </div>

                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="termsUser"
                          name="terms"
                          className="h-4 w-4 text-gosholo-dark-teal border-gray-300 rounded focus:ring-gosholo-dark-teal mt-0.5 transition-all duration-300 hover:scale-110"
                          required
                          aria-required="true"
                        />
                        <label htmlFor="termsUser" className="ml-2 block text-sm text-gray-700">
                          J'accepte les{" "}
                          <a
                            href="#"
                            className="text-gosholo-orange hover:underline focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 rounded transition-all duration-300 hover:scale-105"
                          >
                            conditions d'utilisation
                          </a>{" "}
                          et la{" "}
                          <a
                            href="#"
                            className="text-gosholo-orange hover:underline focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 rounded transition-all duration-300 hover:scale-105"
                          >
                            politique de confidentialité
                          </a>
                        </label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gosholo-orange hover:bg-gosholo-orange/90 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        Créer mon compte
                      </Button>
                    </form>

                    <div className="text-center text-sm text-gray-500">
                      Vous avez déjà un compte?{" "}
                      <a
                        href="#"
                        className="text-gosholo-orange hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 rounded transition-all duration-300 hover:scale-105"
                      >
                        Connectez-vous
                      </a>
                    </div>
                  </div>
                ) : (
                  <div
                    role="tabpanel"
                    id="business-panel"
                    aria-labelledby="business-tab"
                    className={`space-y-6 transition-all duration-500 ${activeTab === "business" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
                  >
                    <div className="text-left">
                      <h3 className="text-xl font-bold mb-2">Inscription commerce</h3>
                      <p className="text-gray-500">
                        Rejoignez notre réseau de commerces locaux et augmentez votre visibilité.
                      </p>
                    </div>

                    <p className="text-xs text-gray-500 mb-4">
                      Les champs marqués d'un <span className="text-red-500">*</span> sont obligatoires.
                    </p>

                    <form className="space-y-6" noValidate>
                      <div className="space-y-2">
                        <label htmlFor="businessName" className="text-sm font-medium text-gray-700">
                          Nom du commerce{" "}
                          <span className="text-red-500" aria-label="obligatoire">
                            *
                          </span>
                        </label>
                        <input
                          type="text"
                          id="businessName"
                          name="businessName"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal focus:border-transparent transition-all duration-300 hover:border-gosholo-light-blue"
                          placeholder="Nom de votre commerce"
                          required
                          aria-required="true"
                        />
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="businessType" className="text-sm font-medium text-gray-700">
                            Type de commerce{" "}
                            <span className="text-red-500" aria-label="obligatoire">
                              *
                            </span>
                          </label>
                          <select
                            id="businessType"
                            name="businessType"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal focus:border-transparent transition-all duration-300 hover:border-gosholo-light-blue"
                            required
                            aria-required="true"
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
                            Ville{" "}
                            <span className="text-red-500" aria-label="obligatoire">
                              *
                            </span>
                          </label>
                          <input
                            type="text"
                            id="businessLocation"
                            name="city"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal focus:border-transparent transition-all duration-300 hover:border-gosholo-light-blue"
                            placeholder="Votre ville"
                            required
                            aria-required="true"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="businessPostalCode" className="text-sm font-medium text-gray-700">
                          Code postal{" "}
                          <span className="text-red-500" aria-label="obligatoire">
                            *
                          </span>
                        </label>
                        <input
                          type="text"
                          id="businessPostalCode"
                          name="postalCode"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal focus:border-transparent transition-all duration-300 hover:border-gosholo-light-blue"
                          placeholder="Ex: H2X 1Y6"
                          pattern="[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d"
                          required
                          aria-required="true"
                          aria-describedby="business-postal-code-help"
                        />
                        <p id="business-postal-code-help" className="text-xs text-gray-500">
                          Format: A1A 1A1 (code postal canadien)
                        </p>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="businessEmail" className="text-sm font-medium text-gray-700">
                          Email professionnel{" "}
                          <span className="text-red-500" aria-label="obligatoire">
                            *
                          </span>
                        </label>
                        <div className="relative group">
                          <Mail
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 transition-all duration-300 group-focus-within:text-gosholo-dark-teal group-focus-within:scale-110"
                            aria-hidden="true"
                          />
                          <input
                            type="email"
                            id="businessEmail"
                            name="email"
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal focus:border-transparent transition-all duration-300 hover:border-gosholo-light-blue"
                            placeholder="commerce@exemple.com"
                            required
                            aria-required="true"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="businessPassword" className="text-sm font-medium text-gray-700">
                          Mot de passe{" "}
                          <span className="text-red-500" aria-label="obligatoire">
                            *
                          </span>
                        </label>
                        <div className="relative group">
                          <Lock
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 transition-all duration-300 group-focus-within:text-gosholo-dark-teal group-focus-within:scale-110"
                            aria-hidden="true"
                          />
                          <input
                            type={showPassword ? "text" : "password"}
                            id="businessPassword"
                            name="password"
                            className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal focus:border-transparent transition-all duration-300 hover:border-gosholo-light-blue"
                            placeholder="Votre mot de passe"
                            minLength={8}
                            required
                            aria-required="true"
                            aria-describedby="business-password-help"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 rounded transition-all duration-300 hover:scale-110"
                            aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                          >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                        <p id="business-password-help" className="text-xs text-gray-500">
                          Le mot de passe doit contenir au moins 8 caractères.
                        </p>
                      </div>

                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="termsBusiness"
                          name="terms"
                          className="h-4 w-4 text-gosholo-dark-teal border-gray-300 rounded focus:ring-gosholo-dark-teal mt-0.5 transition-all duration-300 hover:scale-110"
                          required
                          aria-required="true"
                        />
                        <label htmlFor="termsBusiness" className="ml-2 block text-sm text-gray-700">
                          J'accepte les{" "}
                          <a
                            href="#"
                            className="text-gosholo-orange hover:underline focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 rounded transition-all duration-300 hover:scale-105"
                          >
                            conditions d'utilisation
                          </a>{" "}
                          et la{" "}
                          <a
                            href="#"
                            className="text-gosholo-orange hover:underline focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 rounded transition-all duration-300 hover:scale-105"
                          >
                            politique de confidentialité
                          </a>
                        </label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gosholo-orange hover:bg-gosholo-orange/90 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        Inscrire mon commerce
                      </Button>
                    </form>

                    <div className="text-center text-sm text-gray-500">
                      Vous avez déjà un compte?{" "}
                      <a
                        href="#"
                        className="text-gosholo-orange hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 rounded transition-all duration-300 hover:scale-105"
                      >
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

      {/* Pied de page avec animations */}
      <footer className="border-t bg-white" role="contentinfo">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center group" aria-label="Retour à l'accueil">
                <Image
                  src="/images/gosholo-logo.png"
                  alt="Logo Gosholo"
                  width={140}
                  height={35}
                  className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <nav
                className="hidden md:flex items-center space-x-4 lg:space-x-6"
                role="navigation"
                aria-label="Navigation du pied de page"
              >
                <Link
                  href="/"
                  className="text-sm font-medium transition-all duration-300 hover:text-gosholo-dark-teal focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 rounded hover:scale-105"
                >
                  Accueil
                </Link>
                <Link
                  href="#who-we-are"
                  className="text-sm font-medium transition-all duration-300 hover:text-gosholo-dark-teal focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 rounded hover:scale-105"
                >
                  Qui nous sommes
                </Link>
                <Link
                  href="#about"
                  className="text-sm font-medium transition-all duration-300 hover:text-gosholo-dark-teal focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 rounded hover:scale-105"
                >
                  À propos
                </Link>
                <Link
                  href="#concours"
                  className="text-sm font-medium transition-all duration-300 hover:text-gosholo-dark-teal focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 rounded hover:scale-105"
                >
                  Concours
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.instagram.com/gosholo/"
                className="text-muted-foreground hover:text-gosholo-orange focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 rounded transition-all duration-300 hover:scale-110 hover:rotate-12"
                aria-label="Suivez-nous sur Instagram"
              >
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
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Link>
            </div>
          </div>
          <div className="mt-6 border-t pt-6 text-center md:text-left">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Gosholo. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Pop-up du concours Osheaga avec animations */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="sm:max-w-md p-0 overflow-hidden border-0"
          role="dialog"
          aria-labelledby="popup-title"
          aria-describedby="popup-description"
        >
          <div className="relative">
            <Image
              src="/images/concours-popup.png"
              width={400}
              height={500}
              alt="Concours Osheaga - Shop local avec Gosholo"
              className="w-full h-auto object-cover max-h-96"
            />
            <div className="p-4" style={{ backgroundColor: "#016167" }}>
              <Button
                size="default"
                className="w-full bg-gosholo-orange hover:bg-gosholo-orange/90 text-white group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gosholo-dark-teal transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
                aria-label="Voir les détails du concours Osheaga"
              >
                Voir les détails du concours
                <ChevronRight
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
