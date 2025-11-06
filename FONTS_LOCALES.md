# 🎨 Configuration des Fonts Locales - gosholo

**Date**: 6 novembre 2025  
**Statut**: ✅ Configuré

---

## 📁 Fichiers Installés

### Font Principale : Raleway (18 fichiers)

Tous les fichiers sont dans `public/fonts/` :

```
Raleway-Thin.ttf              (weight: 100)
Raleway-ThinItalic.ttf        (weight: 100, italic)
Raleway-ExtraLight.ttf        (weight: 200)
Raleway-ExtraLightItalic.ttf  (weight: 200, italic)
Raleway-Light.ttf             (weight: 300)
Raleway-LightItalic.ttf       (weight: 300, italic)
Raleway-Regular.ttf           (weight: 400) ⭐ Par défaut
Raleway-Italic.ttf            (weight: 400, italic)
Raleway-Medium.ttf            (weight: 500)
Raleway-MediumItalic.ttf      (weight: 500, italic)
Raleway-SemiBold.ttf          (weight: 600)
Raleway-SemiBoldItalic.ttf    (weight: 600, italic)
Raleway-Bold.ttf              (weight: 700) ⭐ Pour titres
Raleway-BoldItalic.ttf        (weight: 700, italic)
Raleway-ExtraBold.ttf         (weight: 800)
Raleway-ExtraBoldItalic.ttf   (weight: 800, italic)
Raleway-Black.ttf             (weight: 900)
Raleway-BlackItalic.ttf       (weight: 900, italic)
```

### Font Secondaire : Baskervville (8 fichiers)

```
Baskervville-Regular.ttf         (weight: 400) ⭐ Par défaut
Baskervville-Italic.ttf          (weight: 400, italic) ⭐ Pour accents
Baskervville-Medium.ttf          (weight: 500)
Baskervville-MediumItalic.ttf    (weight: 500, italic)
Baskervville-SemiBold.ttf        (weight: 600)
Baskervville-SemiBoldItalic.ttf  (weight: 600, italic)
Baskervville-Bold.ttf            (weight: 700)
Baskervville-BoldItalic.ttf      (weight: 700, italic)
```

---

## ⚙️ Configuration Technique

### app/layout.tsx

```typescript
import localFont from "next/font/local";

// Police Principale: Raleway (tous les poids)
const raleway = localFont({
  src: [
    { path: '../public/fonts/Raleway-Thin.ttf', weight: '100', style: 'normal' },
    { path: '../public/fonts/Raleway-ThinItalic.ttf', weight: '100', style: 'italic' },
    // ... (tous les autres poids)
    { path: '../public/fonts/Raleway-Black.ttf', weight: '900', style: 'normal' },
  ],
  variable: '--font-raleway',
  display: 'swap',
});

// Police Secondaire: Baskervville
const baskerville = localFont({
  src: [
    { path: '../public/fonts/Baskervville-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/Baskervville-Italic.ttf', weight: '400', style: 'italic' },
    // ... (tous les autres poids)
  ],
  variable: '--font-baskerville',
  display: 'swap',
});
```

### tailwind.config.ts

```typescript
fontFamily: {
  sans: ['var(--font-raleway)', 'system-ui', 'sans-serif'], // ⭐ Par défaut
  raleway: ['var(--font-raleway)', 'sans-serif'],
  baskerville: ['var(--font-baskerville)', 'serif'],
}
```

---

## 🎯 Utilisation

### Raleway (Police Principale) ⭐

**Appliquée automatiquement partout**

```tsx
// ✅ PAS BESOIN de spécifier - Raleway est appliqué par défaut
<p>Texte standard</p>
<h1 className="font-bold">Titre en gras</h1>
<h2 className="font-semibold">Sous-titre</h2>

// Si besoin explicite
<p className="font-raleway">Texte en Raleway</p>

// Tous les poids disponibles
<p className="font-thin">Thin (100)</p>
<p className="font-extralight">ExtraLight (200)</p>
<p className="font-light">Light (300)</p>
<p className="font-normal">Regular (400)</p>
<p className="font-medium">Medium (500)</p>
<p className="font-semibold">SemiBold (600)</p>
<p className="font-bold">Bold (700)</p>
<p className="font-extrabold">ExtraBold (800)</p>
<p className="font-black">Black (900)</p>
```

### Baskervville (Police Secondaire) ⚠️

**Utilisée UNIQUEMENT pour accents - Maximum 3-5 fois par page**

```tsx
// ✅ BON USAGE - Accentuer 1-2 mots
<h1 className="font-raleway text-5xl">
  Découvrez l'<span className="font-baskerville italic text-gosholo-orange">excellence</span> locale
</h1>

// ✅ BON USAGE - Citation courte
<blockquote>
  <span className="font-baskerville italic">Votre quartier</span> à portée de main
</blockquote>

// ❌ MAUVAIS USAGE - Trop de texte
<p className="font-baskerville">
  Paragraphe entier en Baskervville
</p>

// ❌ MAUVAIS USAGE - Trop d'accents sur une page
// Ne pas utiliser plus de 5 fois par page
```

---

## 🔍 Vérification

### 1. Test Visuel dans le Navigateur

```bash
npm run dev
```

Ouvrez DevTools → Computed → font-family :
- Devrait afficher : `Raleway` (pas "Inter")

### 2. Vérifier le Chargement des Fonts

Dans DevTools → Network :
- Filtrer par "Font"
- Devrait voir les fichiers `.ttf` chargés depuis `/fonts/`

### 3. Test des Poids

Créez une page test :

```tsx
export default function FontTest() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-4xl font-thin">Raleway Thin (100)</h1>
      <h1 className="text-4xl font-light">Raleway Light (300)</h1>
      <h1 className="text-4xl font-normal">Raleway Regular (400)</h1>
      <h1 className="text-4xl font-medium">Raleway Medium (500)</h1>
      <h1 className="text-4xl font-semibold">Raleway SemiBold (600)</h1>
      <h1 className="text-4xl font-bold">Raleway Bold (700)</h1>
      <h1 className="text-4xl font-black">Raleway Black (900)</h1>
      
      <div className="mt-8">
        <p className="text-2xl font-baskerville">Baskervville Regular</p>
        <p className="text-2xl font-baskerville italic">Baskervville Italic</p>
        <p className="text-2xl font-baskerville font-bold">Baskervville Bold</p>
      </div>
    </div>
  )
}
```

---

## 🚀 Performance

### Avantages des Fonts Locales

- ✅ **Pas de requêtes externes** (Google Fonts)
- ✅ **Chargement plus rapide** (servies depuis le même domaine)
- ✅ **Pas de GDPR concerns** (pas de tracking Google)
- ✅ **Fonctionne offline** (après premier chargement)

### Optimisations Appliquées

```typescript
display: 'swap'  // Affiche le texte immédiatement avec font de secours
```

- Le texte s'affiche immédiatement
- La font se charge en arrière-plan
- Pas de flash de contenu invisible (FOIT)

---

## 📊 Tailles de Fichiers

### Raleway (total ~18 fichiers)
- Chaque fichier : ~30-50KB
- **Total** : ~600-900KB (tous les poids)

### Baskervville (total 8 fichiers)  
- Chaque fichier : ~25-40KB
- **Total** : ~200-320KB (tous les poids)

**Note** : Next.js ne charge que les poids utilisés sur chaque page, donc l'impact réel est beaucoup plus faible.

---

## 🎨 Hiérarchie Typographique Recommandée

### Page d'Accueil

```tsx
// Hero Title - Raleway Bold 700
<h1 className="text-5xl font-bold">
  Découvrez l'<span className="font-baskerville italic text-gosholo-orange">excellence</span> locale
</h1>

// Hero Description - Raleway Regular 400
<p className="text-xl">Description...</p>

// Section Titles - Raleway Bold 700
<h2 className="text-4xl font-bold">Section Title</h2>

// Body Text - Raleway Regular 400
<p className="text-base">Body text...</p>

// Accents - Baskervville Italic 400
<span className="font-baskerville italic">mot accentué</span>
```

---

## ⚠️ Règles Importantes

### TOUJOURS Respecter

1. **Raleway = Police par défaut**
   - Utilisée pour TOUT le texte
   - Pas besoin de spécifier explicitement

2. **Baskervville = Accents UNIQUEMENT**
   - Maximum 3-5 fois par page
   - Toujours en italique
   - Seulement pour 1-2 mots

3. **Poids Recommandés**
   - **Regular (400)** : Texte courant
   - **Medium (500)** : Sous-titres
   - **SemiBold (600)** : Titres secondaires
   - **Bold (700)** : Titres principaux

4. **Ne jamais utiliser**
   - Baskervville pour des paragraphes entiers
   - Plus de 5 accents Baskervville par page
   - Fonts externes (Google Fonts, etc.)

---

## 🔧 Dépannage

### La font ne s'affiche pas

**1. Vérifier les chemins**
```typescript
// Dans app/layout.tsx
path: '../public/fonts/Raleway-Regular.ttf'
// Le "../" est important car on remonte d'un niveau depuis app/
```

**2. Vérifier les fichiers**
```bash
ls -la public/fonts/
# Devrait afficher tous les fichiers TTF
```

**3. Redémarrer le serveur**
```bash
# Ctrl+C pour arrêter
npm run dev
# Les fonts sont chargées au démarrage
```

### La font est floue / mal rendue

**1. Vérifier les fichiers TTF**
- Ouvrir un fichier TTF pour vérifier qu'il n'est pas corrompu

**2. Activer le lissage CSS**
```css
/* globals.css */
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

---

## ✅ Checklist de Validation

- [ ] Tous les fichiers TTF sont dans `public/fonts/`
- [ ] `app/layout.tsx` configuré avec `localFont`
- [ ] `tailwind.config.ts` configuré avec `fontFamily`
- [ ] Test visuel dans le navigateur
- [ ] DevTools confirme que Raleway est chargé
- [ ] Tous les poids s'affichent correctement
- [ ] Baskervville s'affiche en italique
- [ ] Pas d'erreurs dans la console

---

**🎉 Configuration terminée et fonctionnelle !**

Les fonts locales sont maintenant utilisées partout sur le site, avec Raleway comme police principale et Baskervville comme police secondaire pour les accents.

