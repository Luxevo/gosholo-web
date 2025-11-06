# Guide d'Implémentation - Normes de Marque Gosholo

Ce document explique comment respecter les normes de marque Gosholo dans le code.

## 🎨 Palette de Couleurs

**Conformes au Guide de Normes Gosholo 2024**

> **"Les couleurs principales de la marque sont le vert forêt et le vert lime, on utilise le bleu et l'orange pour mettre l'accent sur des éléments."**

### Couleurs Principales de la Marque ⭐

```typescript
// VERT FORÊT - Couleur principale #1
bg-gosholo-forest-green   // #016167 (recommandé - nom officiel)
bg-gosholo-vert-foret     // #016167 (alias français)
bg-gosholo-primary        // #016167 (alias compatible)

text-gosholo-forest-green
border-gosholo-forest-green

// VERT LIME - Couleur principale #2
bg-gosholo-lime-green     // #b2fd9d (recommandé - nom officiel)
bg-gosholo-vert-lime      // #b2fd9d (alias français)
bg-gosholo-light-green    // #b2fd9d (alias compatible)

text-gosholo-lime-green
border-gosholo-lime-green
```

### Couleurs d'Accent (pour mettre l'accent sur des éléments)

```typescript
// BLEU ACIER - Accent
bg-gosholo-steel-blue     // #5bc4db (recommandé - nom officiel)
bg-gosholo-bleu-acier     // #5bc4db (alias français)
bg-gosholo-light-blue     // #5bc4db (alias compatible)

text-gosholo-steel-blue
border-gosholo-steel-blue

// ORANGE - Accent
bg-gosholo-orange         // #ff6233
text-gosholo-orange
border-gosholo-orange

// BLANC
bg-gosholo-white          // #ffffff
```

### ⚠️ Règles Importantes

#### Bleu Acier (Couleur d'Accent)
**Le bleu est utilisé pour mettre l'accent sur des éléments**

⚠️ **IMPORTANT** : Si utilisé en arrière-plan, doit TOUJOURS être à 50%

```tsx
// ✅ CORRECT - Bleu acier à 50% d'opacité
<div className="bg-gosholo-steel-blue/50">
  Contenu
</div>

// Ou avec l'alias compatible
<div className="bg-gosholo-light-blue/50">
  Contenu
</div>

// ❌ INCORRECT - Bleu acier sans opacité 50%
<div className="bg-gosholo-steel-blue">
  Contenu
</div>
```

#### Orange (Couleur d'Accent)
**L'orange est utilisé pour mettre l'accent sur des éléments**

- Principalement pour boutons et CTA
- Accents visuels importants
- Utiliser avec parcimonie
- Rarement en arrière-plan
- Classe : `bg-gosholo-orange`

#### Vert Lime (#b2fd9d) ⭐
**Couleur principale #2 de la marque**
- Pour les sections importantes
- Mise en valeur d'éléments
- Sections d'accent visuels
- Classes : `bg-gosholo-lime-green`, `bg-gosholo-vert-lime`, `bg-gosholo-light-green`

#### Vert Forêt (#016167) ⭐
**Couleur principale #1 de la marque**
- Généralement utilisé en arrière-plan
- Sections hero et principales
- Couleur dominante du site
- Classes : `bg-gosholo-forest-green`, `bg-gosholo-vert-foret`, `bg-gosholo-primary`

---

## 📝 Typographie

### Police Principale : Raleway ⭐
**Utilisée pour TOUT le texte courant et les titres**

- ✅ Font locale (fichiers TTF dans `public/fonts/`)
- ✅ Tous les poids disponibles (100-900)
- ✅ Appliquée par défaut sur tout le site
- ✅ Variable CSS: `--font-raleway`

```tsx
// Par défaut (déjà appliqué globalement - PAS BESOIN de spécifier)
<p>Texte standard en Raleway</p>
<h1 className="font-bold">Titre en Raleway</h1>

// Ou explicitement si nécessaire
<p className="font-raleway">Texte en Raleway</p>
```

### Police Secondaire : Baskervville ⚠️
**Utilisée UNIQUEMENT pour mettre l'accent sur certains mots - À utiliser avec PARCIMONIE**

- ⚠️ Font locale (fichiers TTF dans `public/fonts/`)
- ⚠️ Maximum 3-5 utilisations par page
- ⚠️ Seulement pour 1-2 mots d'accent
- ⚠️ Variable CSS: `--font-baskerville`

```tsx
// Pour accentuer un mot ou une phrase courte
<span className="font-baskerville italic">mot accentué</span>

// Exemple d'utilisation
<h2 className="font-raleway text-3xl">
  Découvrez <span className="font-baskerville italic">l'excellence</span> locale
</h2>
```

#### ⚠️ Règles d'Utilisation de Baskerville
- ✅ Pour accentuer des mots clés
- ✅ Pour des citations courtes
- ✅ Maximum 1-2 mots par section
- ❌ Ne jamais utiliser pour des paragraphes entiers
- ❌ Ne pas utiliser pour la navigation
- ❌ Ne pas surcharger une page

---

## 🔤 Nomenclature "gosholo"

### ⚠️ RÈGLE IMPORTANTE
**"Ne jamais mettre de G majuscule en avant de gosholo quand il est écrit, toujours en minuscule."**

```tsx
// ✅ CORRECT
"Bienvenue sur gosholo"
"L'application gosholo"
"Rejoignez gosholo"
"À propos de gosholo"

// ❌ INCORRECT
"Bienvenue sur Gosholo"
"L'application Gosholo"
"Rejoignez Gosholo"
"À propos de Gosholo"
```

### Exceptions
- **Début de phrase** : Toujours en minuscule, même en début de phrase
  ```
  ✅ "gosholo est une application..."
  ❌ "Gosholo est une application..."
  ```

- **Titre de page (metadata)** : Peut commencer par minuscule
  ```tsx
  <title>gosholo - Découvrez les commerces locaux</title>
  ```

---

## 🎭 Logo

### Variations du Logo
Le logo existe en plusieurs versions :
- **Couleur** : Sur fond blanc ou fond sombre
- **Noir** : Pour impressions monochromes
- **Blanc** : Sur fond foncé
- **Gris** (#B2B2B2) : Pour situations spéciales

### Taille Minimale
- **Web** : 100px minimum
- **Print** : 0.75" minimum

### Espace Protégé
- Utiliser le "h" du logo comme référence
- Aucun élément ne peut entrer dans l'espace protégé

### Logomark (Bonhomme Sourire)
**Le symbole doit toujours être sur fond :**
- Blanc
- Vert lime (#B2FD9D)
- Vert forêt (#016167)

---

## 💡 Exemples d'Implémentation

### Bouton Principal (CTA)
```tsx
<!-- Orange pour les actions principales -->
<button className="bg-gosholo-orange text-white hover:bg-gosholo-orange/90">
  S'inscrire
</button>
```

### Section Hero
```tsx
<!-- Vert forêt (couleur dominante) -->
<section className="bg-gosholo-forest-green text-white">
  <h1 className="font-raleway text-5xl font-bold">
    Découvrez gosholo
  </h1>
</section>

<!-- Ou bleu acier à 50% -->
<section className="bg-gosholo-steel-blue/50 text-white">
  <h1 className="font-raleway text-5xl font-bold">
    Découvrez gosholo
  </h1>
</section>
```

### Accent avec Baskerville
```tsx
<h2 className="font-raleway text-4xl">
  L'application qui change 
  <span className="font-baskerville italic text-gosholo-orange"> tout</span>
</h2>
```

### Card avec Couleurs de Marque
```tsx
<div className="bg-white border-2 border-gosholo-lime-green rounded-lg p-6">
  <h3 className="font-raleway font-bold text-gosholo-forest-green">Titre</h3>
  <p className="font-raleway text-gray-700">Description</p>
  <button className="bg-gosholo-orange text-white mt-4 hover:bg-gosholo-orange/90">
    En savoir plus
  </button>
</div>
```

---

## ✅ Checklist de Conformité

Avant de valider vos changements, vérifiez :

### Nomenclature
- [ ] Aucune occurrence de "Gosholo" avec majuscule (toujours "gosholo")
- [ ] Même en début de phrase : "gosholo" (pas "Gosholo")

### Typographie
- [ ] Raleway utilisée pour TOUT le texte par défaut
- [ ] Baskerville utilisée avec PARCIMONIE (max 3-5 fois par page)
- [ ] Baskerville UNIQUEMENT pour 1-2 mots d'accent
- [ ] Baskerville toujours en italique

### Couleurs
- [ ] **Couleurs principales** : Vert forêt (#016167) et Vert lime (#b2fd9d)
- [ ] **Couleurs d'accent** : Bleu (#5bc4db) et Orange (#ff6233) pour mettre l'accent
- [ ] Nomenclature conforme : `forest-green`, `lime-green`, `steel-blue`, `orange`
- [ ] Hex codes en minuscules (`#016167`, `#b2fd9d`, `#5bc4db`, `#ff6233`)
- [ ] Bleu acier en arrière-plan **TOUJOURS à 50%** (`bg-gosholo-steel-blue/50`)
- [ ] Bleu et Orange utilisés pour **mettre l'accent sur des éléments**
- [ ] Hiérarchie respectée : Principales (Vert forêt + Vert lime) > Accents (Bleu + Orange)

### Logo
- [ ] Logo conforme aux tailles minimales (100px web, 0.75" print)
- [ ] Espacement protégé autour du logo respecté
- [ ] Logomark (bonhomme sourire) sur fond blanc, vert lime ou vert forêt uniquement

---

## 🔗 Ressources

- **Guide de Normes Complet** : Voir le PDF original
- **Couleurs** : Voir `tailwind.config.ts`
- **Fonts** : Voir `app/layout.tsx`
- **Traductions** : Voir `locales/fr.ts` et `locales/en.ts`

---

## 📞 Contact

Pour toute question sur les normes de marque :
- **Email** : assistance@gosholo.com
- **Propriétaire** : Les Sociétés Haeyu Inc.

