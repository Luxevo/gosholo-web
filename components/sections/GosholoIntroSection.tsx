"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { useEffect, useRef, useState } from "react"

export function GosholoIntroSection() {
  const { language } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      image: "/images/decouvre.png",
      title: language === 'fr' ? "Découvre" : "Discover",
      description: language === 'fr'
        ? "Les commerces locaux, offres et événements près de chez toi."
        : "Local businesses, offers and events near you."
    },
    {
      image: "/images/gift.png",
      title: language === 'fr' ? "Économise" : "Save",
      description: language === 'fr'
        ? "Avec des offres locales qui valent vraiment la peine."
        : "With local offers that are truly worth it."
    },
    {
      image: "/images/profite.png",
      title: language === 'fr' ? "Profite" : "Enjoy",
      description: language === 'fr'
        ? "Présente l'offre en magasin ou participe à l'événement. C'est tout."
        : "Show the offer in store or attend the event. That's it."
    },
    {
      image: "/images/manquerien.png",
      title: language === 'fr' ? "Ne manque plus rien" : "Never miss anything",
      description: language === 'fr'
        ? "Suis tes commerces préférés et retrouve leurs offres et événements en un seul endroit."
        : "Follow your favorite businesses and find their offers and events in one place."
    }
  ]

  return (
    <section ref={sectionRef} id="how-it-works" className="w-full py-16 bg-white overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className={`flex flex-col items-center text-center max-w-4xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Image
            src="/images/gosholo2-logo.png"
            alt="gosholo"
            width={500}
            height={130}
            className="h-28 sm:h-36 md:h-44 w-auto mb-8"
          />
          <p className="text-xl sm:text-2xl md:text-3xl text-gosholo-primary leading-relaxed">
            {language === 'fr'
              ? "ton appli pour découvrir tes commerces préférés autour de toi, des offres uniques, des événements et bien plus encore."
              : "your app to discover your favorite local businesses around you, unique offers, events and much more."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gosholo-primary rounded-2xl p-8 text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={160}
                height={160}
                className="w-36 h-36 object-contain mx-auto mb-6 transition-transform duration-300 hover:scale-110"
              />
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
