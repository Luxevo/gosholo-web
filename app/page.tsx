"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { WhoWeAreSection } from "@/components/sections/WhoWeAreSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { ContestPopup } from "@/components/ui/ContestPopup"
import { ConstructionBadge } from "@/components/ui/ConstructionBadge"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { usePopupTimer } from "@/hooks/usePopupTimer"
import { Button } from "@/components/ui/button"
import { MapPin, Store, User, Mail, Lock, Eye, EyeOff, ChevronDown, Clock } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function Home() {
  const { isVisible } = useScrollAnimation()
  const { isOpen, setIsOpen } = usePopupTimer()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"user" | "business">("user")
  const [showPassword, setShowPassword] = useState(false)
  const [rulesOpen, setRulesOpen] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleViewContest = () => {
    scrollToSection("concours")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header isVisible={isVisible} onScrollToSection={scrollToSection} />

      <main>
        <HeroSection isVisible={isVisible} onScrollToSection={scrollToSection} />
        <WhoWeAreSection />
        <AboutSection />
        {/* TODO: Add ContestSection, CTASection, SignupSection */}
        {/* Section concours optimisée mobile */}
        <section
          id="concours"
          className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-gosholo-light-blue"
          role="region"
          aria-labelledby="concours-title"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div
                className="inline-flex items-center justify-center rounded-full border px-3 py-2 text-xs sm:text-sm md:text-base font-semibold border-transparent bg-gosholo-orange text-white w-fit mx-auto"
                role="presentation"
              >
                Événement spécial
              </div>
              <div className="space-y-2">
                <h2
                  id="concours-title"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white"
                >
                  Concours Osheaga
                </h2>
                <p className="max-w-[900px] text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4">
                  Participez à notre concours exclusif et gagnez des billets pour le festival Osheaga!
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-4xl mt-8 sm:mt-12">
              <div className="grid gap-6 sm:gap-8">
                <div className="flex flex-col justify-center space-y-6">
                  <div className="border-2 border-dashed border-white p-4 sm:p-6 rounded-lg bg-gosholo-dark-teal">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">Comment participer</h3>
                    <ol className="space-y-3 sm:space-y-4 text-white list-none">
                      <li className="flex items-start gap-3">
                        <div
                          className="flex h-6 w-6 items-center justify-center rounded-full bg-gosholo-orange text-white font-medium text-sm flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        >
                          1
                        </div>
                        <p className="text-sm sm:text-base">Suivez notre compte Instagram officiel : @gosholo</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div
                          className="flex h-6 w-6 items-center justify-center rounded-full bg-gosholo-orange text-white font-medium text-sm flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        >
                          2
                        </div>
                        <p className="text-sm sm:text-base">
                          Repostez en story Instagram la publication officielle du concours
                        </p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div
                          className="flex h-6 w-6 items-center justify-center rounded-full bg-gosholo-orange text-white font-medium text-sm flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        >
                          3
                        </div>
                        <p className="text-sm sm:text-base">Taguez 2 amis dans les commentaires de la publication</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div
                          className="flex h-6 w-6 items-center justify-center rounded-full bg-gosholo-orange text-white font-medium text-sm flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        >
                          4
                        </div>
                        <p className="text-sm sm:text-base">
                          Téléchargez l'application gosholo quand elle sera disponible (avant le début du concours)
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="border-2 border-dashed border-white p-4 sm:p-6 rounded-lg bg-white">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gosholo-dark-teal flex items-center">
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
                        className="mr-2 text-gosholo-orange flex-shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M21 8v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8"></path>
                        <path d="m8 6 4-4 4 4"></path>
                        <path d="M12 2v14"></path>
                      </svg>
                      <span className="text-base sm:text-xl">Détails du concours</span>
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 p-2">
                        <MapPin
                          className="h-4 w-4 sm:h-5 sm:w-5 text-gosholo-orange flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-sm sm:text-base">Montréal, du 2 au 4 août 2025</span>
                      </div>
                      <div className="flex items-center gap-2 p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gosholo-orange flex-shrink-0 sm:w-5 sm:h-5"
                          aria-hidden="true"
                        >
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span className="text-sm sm:text-base">Fin du concours: 15 juillet 2025</span>
                      </div>
                      <div className="flex items-center gap-2 p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gosholo-orange flex-shrink-0 sm:w-5 sm:h-5"
                          aria-hidden="true"
                        >
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span className="text-sm sm:text-base">Les gagnants seront contactés par courriel</span>
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
                        <div className="bg-gosholo-orange h-2.5 rounded-full" style={{ width: "65%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Règlement du concours optimisé mobile */}
              <div className="mt-8 sm:mt-12 bg-white rounded-lg shadow-sm border overflow-hidden">
                <button
                  onClick={() => setRulesOpen(!rulesOpen)}
                  className="w-full flex items-center justify-between p-4 font-bold text-base sm:text-lg text-gosholo-dark-teal hover:bg-gosholo-light-blue/10 focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 touch-target-44"
                  aria-expanded={rulesOpen}
                  aria-controls="rules-content"
                >
                  <span>Règlement officiel du concours</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 ${rulesOpen ? "transform rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>

                <div className={`${rulesOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                  <div
                    className={`transition-all duration-500 ease-in-out ${rulesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
                  >
                    <div id="rules-content" className="p-4 sm:p-6 border-t text-sm overflow-y-auto max-h-80">
                      <h3 className="font-bold text-base sm:text-lg mb-4">
                        Règlement officiel du concours – Osheaga 2025
                      </h3>

                      <div className="space-y-4 sm:space-y-6">
                        <div>
                          <h4 className="font-bold text-gosholo-dark-teal mb-2 text-sm sm:text-base">
                            1. Durée du concours
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                            <li>
                              Le concours débute le 16 juin 2025 à 9h00 et se termine le jeudi 17 juillet 2025 à 23h59
                              (heure du Québec).
                            </li>
                            <li>Le tirage aura lieu le vendredi 18 juillet 2025 à 15h.</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold text-gosholo-dark-teal mb-2 text-sm sm:text-base">
                            2. Conditions de participation
                          </h4>
                          <p className="mb-2 text-xs sm:text-sm">
                            Pour être admissible au tirage, les participants doivent :
                          </p>
                          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                            <li>
                              Télécharger notre application gosholo et créer un compte (si tu es déjà inscrit, tu peux
                              sauter cette étape).
                            </li>
                            <li>Suivre notre compte Instagram officiel : @gosholo</li>
                            <li>
                              Reposter en story Instagram la publication officielle du concours (la story doit inclure
                              le tag @gosholo).
                            </li>
                            <li>Taguer 2 amis dans les commentaires de la publication du concours sur Instagram.</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold text-gosholo-dark-teal mb-2 text-sm sm:text-base">
                            3. Admissibilité
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                            <li>Ce concours est ouvert à toute personne âgée de 18 ans ou plus, résidant au Québec.</li>
                            <li>Une seule participation par personne est autorisée.</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold text-gosholo-dark-teal mb-2 text-sm sm:text-base">
                            4. Tirage et attribution du prix
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                            <li>
                              Le gagnant sera sélectionné au hasard parmi les personnes admissibles, ayant complété les
                              4 étapes ci-dessus.
                            </li>
                            <li>
                              Le gagnant sera contacté par message privé Instagram et devra fournir le courriel utilisé
                              lors de l'inscription à l'app, afin de valider son identité.
                            </li>
                            <li>
                              Si le gagnant ne répond pas dans un délai de 24 heures, un nouveau tirage sera effectué.
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold text-gosholo-dark-teal mb-2 text-sm sm:text-base">5. Prix</h4>
                          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                            <li>
                              Une paire de billets pour Osheaga – samedi 2 août 2025 (valeur approximative : 400 $)
                            </li>
                            <li>Le prix est non monnayable, non transférable et non échangeable.</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold text-gosholo-dark-teal mb-2 text-sm sm:text-base">
                            6. Limite de responsabilité
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
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
                          <h4 className="font-bold text-gosholo-dark-teal mb-2 text-sm sm:text-base">
                            7. Consentement
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                            <li>
                              En participant à ce concours, les personnes acceptent que leur nom d'utilisateur et leur
                              prénom puissent être mentionnés publiquement en cas de gain (réseaux sociaux ou site web
                              de l'organisateur).
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bouton d'action optimisé mobile */}
              <div className="flex justify-center mt-8 sm:mt-12">
                <Button
                  size="lg"
                  className="bg-gosholo-orange hover:bg-gosholo-orange/90 text-white touch-target-44 text-sm sm:text-base px-6 sm:px-8"
                  disabled
                >
                  <Clock className="mr-2 h-4 w-4 animate-spin" />
                  Application bientôt disponible
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section CTA optimisée mobile */}
        <section
          className="w-full py-8 sm:py-12 md:py-16 lg:py-24 bg-gosholo-orange text-white"
          role="region"
          aria-labelledby="cta-title"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 id="cta-title" className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
                    Bientôt disponible pour découvrir les commerces locaux!
                  </h2>
                  <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                    L'application Gosholo sera bientôt disponible pour vous permettre d'explorer les trésors cachés de
                    votre quartier.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    className="bg-white text-gosholo-orange hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg group touch-target-44 text-sm sm:text-base"
                    disabled
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 transition-transform duration-300 group-hover:scale-110 sm:w-5 sm:h-5"
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
                    className="bg-white text-gosholo-orange hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg group touch-target-44 text-sm sm:text-base"
                    disabled
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 transition-transform duration-300 group-hover:scale-110 sm:w-5 sm:h-5"
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
              <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
                <Image
                  src="/placeholder.svg?height=300&width=200&text=App+Mobile"
                  width={200}
                  height={400}
                  alt="Aperçu de l'application mobile Gosholo sur smartphone"
                  className="rounded-xl shadow-lg border-8 border-white transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-3 max-w-[200px] sm:max-w-[250px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section Inscription optimisée mobile */}
        <section
          id="signup"
          className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-gosholo-dark-teal"
          role="region"
          aria-labelledby="signup-title"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-12">
              <div
                className="inline-flex items-center justify-center rounded-full border px-3 py-2 text-xs sm:text-sm md:text-base font-semibold border-transparent bg-gosholo-orange text-white w-fit mx-auto transition-all duration-300 hover:scale-105 hover:shadow-lg"
                role="presentation"
              >
                Rejoignez-nous
              </div>
              <h2
                id="signup-title"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-gosholo-light-green"
              >
                Créez votre compte
              </h2>
              <p className="max-w-[700px] text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4">
                Rejoignez notre communauté et commencez à profiter des avantages Gosholo dès aujourd'hui.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
                {/* Onglets optimisés mobile */}
                <div className="flex border-b" role="tablist" aria-label="Type d'inscription">
                  <button
                    className={`flex-1 py-3 sm:py-4 px-4 sm:px-6 text-center font-medium text-sm sm:text-base lg:text-lg transition-all duration-500 touch-target-44 ${
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
                        className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 ${activeTab === "user" ? "scale-110" : ""}`}
                        aria-hidden="true"
                      />
                      <span>Utilisateur</span>
                    </div>
                  </button>
                  <button
                    className={`flex-1 py-3 sm:py-4 px-4 sm:px-6 text-center font-medium text-sm sm:text-base lg:text-lg transition-all duration-500 touch-target-44 ${
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
                        className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 ${activeTab === "business" ? "scale-110" : ""}`}
                        aria-hidden="true"
                      />
                      <span>Commerce</span>
                    </div>
                  </button>
                </div>

                {/* Contenu des onglets optimisé mobile */}
                <div className="p-4 sm:p-6 md:p-8">
                  {activeTab === "user" ? (
                    <div
                      role="tabpanel"
                      id="user-panel"
                      aria-labelledby="user-tab"
                      className={`space-y-4 sm:space-y-6 transition-all duration-500 ${activeTab === "user" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
                    >
                      <div className="text-left">
                        <h3 className="text-lg sm:text-xl font-bold mb-2">Inscription utilisateur</h3>
                        <p className="text-gray-500 text-sm sm:text-base">
                          Créez votre compte pour découvrir et soutenir les commerces locaux.
                        </p>
                      </div>

                      <p className="text-xs text-gray-500 mb-4">
                        Les champs marqués d'un <span className="text-red-500">*</span> sont obligatoires.
                      </p>

                      <form className="space-y-4 sm:space-y-6" noValidate>
                        <div className="grid gap-4 sm:grid-cols-2">
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
                              className="w-full px-3 py-3 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal focus:border-transparent transition-all duration-300 hover:border-gosholo-light-blue text-base"
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
                              className="w-full px-3 py-3 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal focus:border-transparent transition-all duration-300 hover:border-gosholo-light-blue text-base"
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
                            className="w-full px-3 py-3 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal focus:border-transparent transition-all duration-300 hover:border-gosholo-light-blue text-base"
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
                              className="w-full pl-10 pr-3 py-3 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal focus:border-transparent transition-all duration-300 hover:border-gosholo-light-blue text-base"
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
                              className="w-full pl-10 pr-12 py-3 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal focus:border-transparent transition-all duration-300 hover:border-gosholo-light-blue text-base"
                              placeholder="Votre mot de passe"
                              minLength={8}
                              required
                              aria-required="true"
                              aria-describedby="password-help"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 rounded transition-all duration-300 hover:scale-110 touch-target-44 p-2"
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
                            className="h-5 w-5 text-gosholo-dark-teal border-gray-300 rounded focus:ring-gosholo-dark-teal mt-0.5 transition-all duration-300 hover:scale-110"
                            required
                            aria-required="true"
                          />
                          <label htmlFor="termsUser" className="ml-3 block text-sm text-gray-700">
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
                          className="w-full bg-gosholo-orange hover:bg-gosholo-orange/90 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg touch-target-44 text-base py-3"
                        >
                          Créer mon compte
                        </Button>
                      </form>

                      <div className="text-center text-sm text-gray-500">
                        Vous avez déjà un compte?{" "}
                        <a
                          href="#"
                          className="text-gosholo-orange hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 rounded transition-all duration-300 hover:scale-105 touch-target-44 p-1"
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
                      className={`space-y-4 sm:space-y-6 transition-all duration-500 ${activeTab === "business" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
                    >
                      <div className="text-left">
                        <h3 className="text-lg sm:text-xl font-bold mb-2">Inscription commerce</h3>
                        <p className="text-gray-500 text-sm sm:text-base">
                          Rejoignez notre réseau de commerces locaux et augmentez votre visibilité.
                        </p>
                      </div>

                      <p className="text-xs text-gray-500 mb-4">
                        Les champs marqués d'un <span className="text-red-500">*</span> sont obligatoires.
                      </p>

                      <form className="space-y-4 sm:space-y-6" noValidate>
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
                            className="w-full px-3 py-3 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal focus:border-transparent transition-all duration-300 hover:border-gosholo-light-blue text-base"
                            placeholder="Nom de votre commerce"
                            required
                            aria-required="true"
                          />
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
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
                              className="w-full px-3 py-3 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal focus:border-transparent transition-all duration-300 hover:border-gosholo-light-blue text-base"
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
                              className="w-full px-3 py-3 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal focus:border-transparent transition-all duration-300 hover:border-gosholo-light-blue text-base"
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
                            className="w-full px-3 py-3 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal focus:border-transparent transition-all duration-300 hover:border-gosholo-light-blue text-base"
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
                              className="w-full pl-10 pr-3 py-3 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal focus:border-transparent transition-all duration-300 hover:border-gosholo-light-blue text-base"
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
                              className="w-full pl-10 pr-12 py-3 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-dark-teal focus:border-transparent transition-all duration-300 hover:border-gosholo-light-blue text-base"
                              placeholder="Votre mot de passe"
                              minLength={8}
                              required
                              aria-required="true"
                              aria-describedby="business-password-help"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 rounded transition-all duration-300 hover:scale-110 touch-target-44 p-2"
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
                            className="h-5 w-5 text-gosholo-dark-teal border-gray-300 rounded focus:ring-gosholo-dark-teal mt-0.5 transition-all duration-300 hover:scale-110"
                            required
                            aria-required="true"
                          />
                          <label htmlFor="termsBusiness" className="ml-3 block text-sm text-gray-700">
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
                          className="w-full bg-gosholo-orange hover:bg-gosholo-orange/90 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg touch-target-44 text-base py-3"
                        >
                          Inscrire mon commerce
                        </Button>
                      </form>

                      <div className="text-center text-sm text-gray-500">
                        Vous avez déjà un compte?{" "}
                        <a
                          href="#"
                          className="text-gosholo-orange hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-gosholo-orange focus:ring-offset-2 rounded transition-all duration-300 hover:scale-105 touch-target-44 p-1"
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
      </main>

      <Footer />

      <ContestPopup isOpen={isOpen} onClose={() => setIsOpen(false)} onViewContest={handleViewContest} />

      <ConstructionBadge />
    </div>
  )
}
