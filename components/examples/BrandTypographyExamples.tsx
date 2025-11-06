/**
 * Exemples d'Utilisation de la Typographie de Marque Gosholo
 * 
 * Ce fichier contient des exemples d'utilisation correcte des fonts
 * Raleway (principale) et Baskerville (accents).
 * 
 * Référence: Guide de Normes Gosholo - Typographie
 */

import React from "react"

export function BrandTypographyExamples() {
  return (
    <div className="space-y-12 p-8">
      {/* Exemple 1: Titre avec accent */}
      <section>
        <h3 className="text-sm font-semibold text-gray-500 mb-4">
          Exemple 1: Titre avec accent Baskerville
        </h3>
        <h1 className="font-raleway text-5xl font-bold text-gosholo-primary">
          Découvrez l'<span className="font-baskerville italic text-gosholo-orange">excellence</span> locale
        </h1>
      </section>

      {/* Exemple 2: Slogan avec mot clé accentué */}
      <section>
        <h3 className="text-sm font-semibold text-gray-500 mb-4">
          Exemple 2: Slogan avec mot clé
        </h3>
        <h2 className="font-raleway text-4xl font-semibold text-gosholo-primary">
          L'application qui change{" "}
          <span className="font-baskerville italic text-gosholo-orange">tout</span>
        </h2>
      </section>

      {/* Exemple 3: Citation */}
      <section>
        <h3 className="text-sm font-semibold text-gray-500 mb-4">
          Exemple 3: Citation courte
        </h3>
        <blockquote className="border-l-4 border-gosholo-orange pl-6">
          <p className="font-raleway text-xl text-gray-700">
            gosholo, c'est{" "}
            <span className="font-baskerville italic text-gosholo-primary">
              votre quartier
            </span>{" "}
            à portée de main
          </p>
        </blockquote>
      </section>

      {/* Exemple 4: Hero avec accent subtil */}
      <section>
        <h3 className="text-sm font-semibold text-gray-500 mb-4">
          Exemple 4: Hero avec accent subtil
        </h3>
        <div className="bg-gosholo-light-blue/50 rounded-xl p-8">
          <h1 className="font-raleway text-5xl font-bold text-white mb-4">
            Profitez d'offres{" "}
            <span className="font-baskerville italic">exclusives</span>
          </h1>
          <p className="font-raleway text-xl text-white/90">
            100% locales, 100% authentiques
          </p>
        </div>
      </section>

      {/* Exemple 5: CTA avec impact */}
      <section>
        <h3 className="text-sm font-semibold text-gray-500 mb-4">
          Exemple 5: CTA avec impact
        </h3>
        <div className="text-center space-y-4">
          <h2 className="font-raleway text-3xl font-bold text-gosholo-primary">
            Rejoignez la{" "}
            <span className="font-baskerville italic text-gosholo-orange">
              communauté
            </span>{" "}
            gosholo
          </h2>
          <button className="bg-gosholo-orange text-white px-8 py-3 rounded-lg font-raleway font-semibold hover:bg-gosholo-orange/90 transition">
            S'inscrire maintenant
          </button>
        </div>
      </section>

      {/* CONTRE-EXEMPLES : À NE PAS FAIRE */}
      <section className="border-t-2 border-red-500 pt-8 mt-12">
        <h3 className="text-sm font-semibold text-red-600 mb-4">
          ❌ CONTRE-EXEMPLES : À NE PAS FAIRE
        </h3>

        {/* Erreur 1: Trop de Baskerville */}
        <div className="mb-6 bg-red-50 p-6 rounded-lg">
          <p className="text-xs text-red-600 font-semibold mb-2">
            ❌ Erreur 1: Trop de Baskerville (surcharge)
          </p>
          <h2 className="font-baskerville text-3xl">
            {/* Ne jamais faire un titre entier en Baskerville */}
            Ne jamais faire un titre entier en Baskerville
          </h2>
          <p className="font-baskerville text-base mt-2">
            {/* Ne jamais faire un paragraphe entier en Baskerville */}
            Ne jamais faire un paragraphe entier en Baskerville non plus. 
            Cette police est réservée aux accents courts et impactants.
          </p>
        </div>

        {/* Erreur 2: "Gosholo" avec majuscule */}
        <div className="mb-6 bg-red-50 p-6 rounded-lg">
          <p className="text-xs text-red-600 font-semibold mb-2">
            ❌ Erreur 2: "Gosholo" avec majuscule
          </p>
          <h2 className="font-raleway text-3xl text-gosholo-primary">
            Bienvenue sur Gosholo {/* ❌ INCORRECT */}
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Correct : "Bienvenue sur gosholo" (toujours minuscule)
          </p>
        </div>

        {/* Erreur 3: Mauvaise utilisation des couleurs */}
        <div className="bg-red-50 p-6 rounded-lg">
          <p className="text-xs text-red-600 font-semibold mb-2">
            ❌ Erreur 3: Bleu acier en arrière-plan sans opacité 50%
          </p>
          <div className="bg-gosholo-light-blue p-4 rounded text-white">
            {/* ❌ INCORRECT: devrait être bg-gosholo-light-blue/50 */}
            Bleu sans opacité 50%
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Correct : Toujours utiliser <code className="bg-gray-200 px-2 py-1 rounded">bg-gosholo-light-blue/50</code> pour les arrière-plans
          </p>
        </div>
      </section>

      {/* Guide de Bonnes Pratiques */}
      <section className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-sm font-semibold text-green-700 mb-4">
          ✅ BONNES PRATIQUES RÉSUMÉES
        </h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">✓</span>
            <span>Raleway pour TOUS les textes principaux et titres</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">✓</span>
            <span>Baskerville UNIQUEMENT pour accentuer 1-2 mots maximum</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">✓</span>
            <span>Maximum 3-5 accents Baskerville par page</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">✓</span>
            <span>Toujours "gosholo" en minuscule (jamais "Gosholo")</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">✓</span>
            <span>Bleu acier en arrière-plan : toujours à 50% opacité</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">✓</span>
            <span>Orange principalement pour boutons et CTA</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold">✓</span>
            <span>Vert forêt (#016167) comme couleur dominante</span>
          </li>
        </ul>
      </section>
    </div>
  )
}

/**
 * Composant Helper: Titre avec Accent
 * Facilite l'utilisation correcte de Baskerville
 */
interface BrandHeadingProps {
  children: React.ReactNode
  accentWord?: string
  level?: 1 | 2 | 3
  accentColor?: "orange" | "primary"
}

export function BrandHeading({ 
  children, 
  accentWord, 
  level = 1, 
  accentColor = "orange" 
}: BrandHeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  const sizeClasses = {
    1: "text-5xl",
    2: "text-4xl",
    3: "text-3xl",
  }
  
  const colorClasses = {
    orange: "text-gosholo-orange",
    primary: "text-gosholo-primary",
  }

  // Si pas d'accent word, rendu simple
  if (!accentWord) {
    return (
      <Tag className={`font-raleway ${sizeClasses[level]} font-bold text-gosholo-primary`}>
        {children}
      </Tag>
    )
  }

  // Remplacer le mot accent par version stylisée
  const text = String(children)
  const parts = text.split(accentWord)

  return (
    <Tag className={`font-raleway ${sizeClasses[level]} font-bold text-gosholo-primary`}>
      {parts[0]}
      <span className={`font-baskerville italic ${colorClasses[accentColor]}`}>
        {accentWord}
      </span>
      {parts[1]}
    </Tag>
  )
}

/**
 * Exemples d'utilisation du composant helper:
 * 
 * <BrandHeading level={1} accentWord="excellence">
 *   Découvrez l'excellence locale
 * </BrandHeading>
 * 
 * <BrandHeading level={2} accentWord="tout" accentColor="orange">
 *   L'application qui change tout
 * </BrandHeading>
 */

