"use client"

/**
 * Page de Test des Fonts - gosholo
 * 
 * Cette page permet de vérifier que les fonts locales Raleway et Baskervville
 * sont correctement chargées et affichées.
 * 
 * Pour tester : http://localhost:3000/test-fonts
 */

import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TestFontsPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-gosholo-primary hover:text-gosholo-orange transition-colors mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à l'accueil
        </Link>
        
        <h1 className="text-4xl font-bold text-gosholo-primary mb-2">
          Test des Fonts Locales
        </h1>
        <p className="text-gray-600">
          Vérification de Raleway (principale) et Baskervville (secondaire)
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Raleway Tests */}
        <section className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gosholo-primary mb-6 border-b pb-4">
            Raleway - Police Principale ⭐
          </h2>
          
          <div className="space-y-6">
            <div>
              <p className="text-xs text-gray-500 font-mono mb-2">font-thin (100)</p>
              <p className="text-3xl font-thin">
                gosholo - Découvre. Économise. Profite.
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500 font-mono mb-2">font-extralight (200)</p>
              <p className="text-3xl font-extralight">
                gosholo - Découvre. Économise. Profite.
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500 font-mono mb-2">font-light (300)</p>
              <p className="text-3xl font-light">
                gosholo - Découvre. Économise. Profite.
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500 font-mono mb-2">font-normal (400) - Par défaut</p>
              <p className="text-3xl font-normal">
                gosholo - Découvre. Économise. Profite.
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500 font-mono mb-2">font-medium (500)</p>
              <p className="text-3xl font-medium">
                gosholo - Découvre. Économise. Profite.
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500 font-mono mb-2">font-semibold (600)</p>
              <p className="text-3xl font-semibold">
                gosholo - Découvre. Économise. Profite.
              </p>
            </div>

            <div className="bg-gosholo-light-green/20 p-4 rounded-lg">
              <p className="text-xs text-gray-500 font-mono mb-2">font-bold (700) - Pour titres ⭐</p>
              <p className="text-3xl font-bold">
                gosholo - Découvre. Économise. Profite.
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500 font-mono mb-2">font-extrabold (800)</p>
              <p className="text-3xl font-extrabold">
                gosholo - Découvre. Économise. Profite.
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500 font-mono mb-2">font-black (900)</p>
              <p className="text-3xl font-black">
                gosholo - Découvre. Économise. Profite.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t">
              <p className="text-xs text-gray-500 font-mono mb-2">Italiques</p>
              <div className="space-y-2">
                <p className="text-2xl font-normal italic">Raleway Regular Italic</p>
                <p className="text-2xl font-medium italic">Raleway Medium Italic</p>
                <p className="text-2xl font-semibold italic">Raleway SemiBold Italic</p>
                <p className="text-2xl font-bold italic">Raleway Bold Italic</p>
              </div>
            </div>
          </div>
        </section>

        {/* Baskervville Tests */}
        <section className="bg-gosholo-orange/5 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gosholo-primary mb-6 border-b border-gosholo-orange pb-4">
            Baskervville - Police Secondaire ⚠️
          </h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-sm text-yellow-800">
              <strong>⚠️ IMPORTANT :</strong> Cette police doit être utilisée avec PARCIMONIE (maximum 3-5 fois par page), 
              UNIQUEMENT pour accentuer 1-2 mots clés.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs text-gray-500 font-mono mb-2">font-baskerville (400)</p>
              <p className="text-3xl font-baskerville">
                gosholo - Découvre. Économise. Profite.
              </p>
            </div>

            <div className="bg-gosholo-orange/10 p-4 rounded-lg">
              <p className="text-xs text-gray-500 font-mono mb-2">font-baskerville italic (400) - Usage principal ⭐</p>
              <p className="text-3xl font-baskerville italic">
                gosholo - Découvre. Économise. Profite.
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500 font-mono mb-2">font-baskerville font-medium (500)</p>
              <p className="text-3xl font-baskerville font-medium">
                gosholo - Découvre. Économise. Profite.
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500 font-mono mb-2">font-baskerville font-semibold (600)</p>
              <p className="text-3xl font-baskerville font-semibold">
                gosholo - Découvre. Économise. Profite.
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500 font-mono mb-2">font-baskerville font-bold (700)</p>
              <p className="text-3xl font-baskerville font-bold">
                gosholo - Découvre. Économise. Profite.
              </p>
            </div>
          </div>
        </section>

        {/* Exemples d'Usage Correct */}
        <section className="bg-green-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-green-800 mb-6 border-b border-green-300 pb-4">
            ✅ Exemples d'Usage Correct
          </h2>

          <div className="space-y-8">
            <div>
              <p className="text-xs text-gray-500 font-mono mb-3">Exemple 1: Titre avec accent</p>
              <h3 className="text-4xl font-bold text-gosholo-primary">
                Découvrez l'<span className="font-baskerville italic text-gosholo-orange">excellence</span> locale
              </h3>
            </div>

            <div>
              <p className="text-xs text-gray-500 font-mono mb-3">Exemple 2: Slogan</p>
              <h3 className="text-3xl font-semibold text-gosholo-primary">
                L'application qui change{" "}
                <span className="font-baskerville italic text-gosholo-orange">tout</span>
              </h3>
            </div>

            <div>
              <p className="text-xs text-gray-500 font-mono mb-3">Exemple 3: Citation</p>
              <blockquote className="border-l-4 border-gosholo-orange pl-6">
                <p className="text-2xl text-gray-700">
                  gosholo, c'est{" "}
                  <span className="font-baskerville italic text-gosholo-primary">
                    votre quartier
                  </span>{" "}
                  à portée de main
                </p>
              </blockquote>
            </div>

            <div>
              <p className="text-xs text-gray-500 font-mono mb-3">Exemple 4: CTA</p>
              <div className="bg-gosholo-light-blue/50 rounded-xl p-6 text-center">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Profitez d'offres{" "}
                  <span className="font-baskerville italic">exclusives</span>
                </h3>
                <p className="text-xl text-white/90">
                  100% locales, 100% authentiques
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contre-exemples */}
        <section className="bg-red-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-red-800 mb-6 border-b border-red-300 pb-4">
            ❌ À NE PAS FAIRE
          </h2>

          <div className="space-y-6">
            <div className="bg-red-100 p-6 rounded-lg">
              <p className="text-xs text-red-600 font-mono mb-3">❌ Erreur : Paragraphe entier en Baskervville</p>
              <p className="text-base font-baskerville">
                Ne jamais faire un paragraphe entier en Baskervville. Cette police est réservée 
                aux accents courts et impactants. L'utiliser sur de longs textes nuit à la lisibilité 
                et va à l'encontre des normes de la marque gosholo.
              </p>
            </div>

            <div className="bg-red-100 p-6 rounded-lg">
              <p className="text-xs text-red-600 font-mono mb-3">❌ Erreur : Titre entier en Baskervville</p>
              <h3 className="text-3xl font-baskerville font-bold">
                Ne jamais faire un titre complet en Baskervville
              </h3>
            </div>

            <div className="bg-red-100 p-6 rounded-lg">
              <p className="text-xs text-red-600 font-mono mb-3">❌ Erreur : Trop d'accents</p>
              <p className="text-xl">
                <span className="font-baskerville italic text-gosholo-orange">Ne</span> pas{" "}
                <span className="font-baskerville italic text-gosholo-orange">utiliser</span> trop{" "}
                <span className="font-baskerville italic text-gosholo-orange">d'accents</span> dans{" "}
                <span className="font-baskerville italic text-gosholo-orange">une</span> seule{" "}
                <span className="font-baskerville italic text-gosholo-orange">phrase</span>
              </p>
            </div>
          </div>
        </section>

        {/* Vérification Technique */}
        <section className="bg-blue-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b border-blue-300 pb-4">
            🔧 Vérification Technique
          </h2>

          <div className="space-y-4 text-sm">
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <p className="font-mono text-blue-600 mb-2">Comment vérifier dans DevTools :</p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700">
                <li>Ouvrir DevTools (F12)</li>
                <li>Onglet "Elements" / "Éléments"</li>
                <li>Sélectionner un texte ci-dessus</li>
                <li>Onglet "Computed" / "Calculé"</li>
                <li>Chercher "font-family"</li>
                <li>Devrait afficher : <code className="bg-gray-200 px-2 py-1 rounded">Raleway</code> ou <code className="bg-gray-200 px-2 py-1 rounded">Baskervville</code></li>
              </ol>
            </div>

            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <p className="font-mono text-blue-600 mb-2">Fichiers chargés :</p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700">
                <li>DevTools → Onglet "Network" / "Réseau"</li>
                <li>Filtrer par "Font"</li>
                <li>Actualiser la page</li>
                <li>Devrait voir des fichiers .ttf chargés depuis /fonts/</li>
              </ol>
            </div>

            <div className="bg-green-100 p-4 rounded-lg border border-green-300">
              <p className="font-semibold text-green-800 mb-2">✅ Si tout fonctionne :</p>
              <ul className="list-disc list-inside space-y-1 text-green-700">
                <li>Tous les textes utilisent Raleway par défaut</li>
                <li>Les différents poids sont visibles (Thin à Black)</li>
                <li>Baskervville s'affiche pour les accents</li>
                <li>Pas d'erreurs dans la console</li>
              </ul>
            </div>
          </div>
        </section>

      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t text-center text-gray-500 text-sm">
        <p>
          Page de test des fonts locales - gosholo<br />
          Voir <code className="bg-gray-200 px-2 py-1 rounded">FONTS_LOCALES.md</code> pour la documentation complète
        </p>
      </div>
    </div>
  )
}

