# 🎨 Palette de Couleurs - Conforme au Guide de Normes Gosholo 2024

**Date**: 6 novembre 2025  
**Version**: 2.0 - Mise à jour conforme au guide de normes officiel

---

## 📋 Résumé des Changements

### ✅ Corrections Appliquées

1. **Nomenclature** : Noms des couleurs alignés avec le guide officiel
2. **Hex Codes** : Minuscules conformes au guide (`#b2fd9d` au lieu de `#B2FD9D`)
3. **Structure** : Hiérarchie claire Principale → Secondaires/Accents
4. **Alias** : Maintien de la compatibilité avec le code existant

---

## 🎨 Palette Officielle

> **"Les couleurs principales de la marque sont le vert forêt et le vert lime, on utilise le bleu et l'orange pour mettre l'accent sur des éléments."**  
> — Guide de Normes Gosholo 2024

### Couleurs Principales de la Marque

#### VERT FORÊT 🌲
```
HEX:  #016167
RGB:  R001 G097 B103
CMYK: 090 / 045 / 050 / 025
```

**Usage** :
- Couleur dominante de la marque
- Généralement utilisée en arrière-plan
- Sections hero et principales

**Classes Tailwind** :
```typescript
// Noms officiels (recommandés)
bg-gosholo-forest-green
text-gosholo-forest-green
border-gosholo-forest-green

// Alias français
bg-gosholo-vert-foret

// Alias compatible (ancien code)
bg-gosholo-primary
```

---

#### VERT LIME 💚
```
HEX:  #b2fd9d
RGB:  R178 G253 B157
CMYK: 030 / 000 / 054 / 000
```

**Usage** :
- Couleur principale de la marque
- Pour sections importantes
- Mise en valeur d'éléments
- Sections d'accent visuels

**Classes Tailwind** :
```typescript
// Nom officiel (recommandé)
bg-gosholo-lime-green
text-gosholo-lime-green

// Alias français
bg-gosholo-vert-lime

// Alias compatible
bg-gosholo-light-green
```

---

### Couleurs d'Accent (pour mettre l'accent sur des éléments)

#### BLEU ACIER 💙
```
HEX:  #5bc4db
RGB:  R091 G196 B219
CMYK: 058 / 002 / 012 / 000
```

**Usage** :
- Couleur d'accent (pour mettre l'accent sur des éléments)
- **IMPORTANT** : Si utilisé en arrière-plan, TOUJOURS à 50% d'opacité

**Classes Tailwind** :
```typescript
// Nom officiel (recommandé)
bg-gosholo-steel-blue/50    // ⚠️ TOUJOURS avec /50 en background
text-gosholo-steel-blue

// Alias français
bg-gosholo-bleu-acier/50

// Alias compatible
bg-gosholo-light-blue/50
```

**⚠️ RÈGLE CRITIQUE** :
```tsx
// ✅ CORRECT
<div className="bg-gosholo-steel-blue/50">Fond bleu à 50%</div>

// ❌ INCORRECT
<div className="bg-gosholo-steel-blue">Fond bleu sans opacité</div>
```

---

#### ORANGE 🧡
```
HEX:  #ff6233
RGB:  R255 G098 B051
CMYK: 000 / 062 / 080 / 000
```

**Usage** :
- Couleur accent
- Principalement pour boutons et CTA
- **Rarement** utilisé comme arrière-plan

**Classes Tailwind** :
```typescript
bg-gosholo-orange          // Pour boutons
text-gosholo-orange        // Pour accents texte
border-gosholo-orange
```

---

#### BLANC ⚪
```
HEX:  #ffffff
RGB:  R255 G255 B255
```

**Classes Tailwind** :
```typescript
bg-gosholo-white
text-gosholo-white
```

---

## 📊 Hiérarchie des Couleurs

Selon le guide de normes officiel :

### Couleurs Principales de la Marque ⭐
1. **Vert Forêt** (#016167)
   - Couleur principale #1
   - Arrière-plans dominants
   - Sections hero

2. **Vert Lime** (#b2fd9d)
   - Couleur principale #2
   - Sections importantes
   - Mise en valeur

### Couleurs d'Accent (pour mettre l'accent sur des éléments)
- **Bleu Acier** (#5bc4db) - Toujours à 50% en background
- **Orange** (#ff6233) - Boutons, CTA, accents visuels

---

## 🎨 Teintes et Variations

Selon le guide de normes, voici les teintes utilisables :

### Vert Forêt (#016167)
```tsx
bg-gosholo-forest-green/30   // 30% opacité
bg-gosholo-forest-green/50   // 50% opacité
bg-gosholo-forest-green/80   // 80% opacité
bg-gosholo-forest-green      // 100% opacité
```

### Vert Lime (#b2fd9d)
```tsx
bg-gosholo-lime-green/30
bg-gosholo-lime-green/50
bg-gosholo-lime-green/80
bg-gosholo-lime-green
```

### Bleu Acier (#5bc4db)
```tsx
// ⚠️ IMPORTANT : En arrière-plan, TOUJOURS à 50%
bg-gosholo-steel-blue/50     // ✅ Correct pour background
text-gosholo-steel-blue      // ✅ Correct pour texte
border-gosholo-steel-blue    // ✅ Correct pour bordures
```

### Orange (#ff6233)
```tsx
bg-gosholo-orange/30
bg-gosholo-orange/50
bg-gosholo-orange/80
bg-gosholo-orange
```

---

## 💡 Exemples d'Utilisation

### Hero Section
```tsx
<section className="bg-gosholo-forest-green text-white">
  <h1 className="text-5xl font-bold">
    Découvrez gosholo
  </h1>
</section>
```

### Section d'Accent
```tsx
<section className="bg-gosholo-lime-green">
  <h2 className="text-gosholo-forest-green font-bold">
    À propos
  </h2>
</section>
```

### Section Secondaire
```tsx
<!-- ⚠️ Notez le /50 pour le bleu acier -->
<section className="bg-gosholo-steel-blue/50 text-white">
  <h2 className="font-bold">Newsletter</h2>
</section>
```

### Boutons CTA
```tsx
<!-- Bouton principal - Orange -->
<button className="bg-gosholo-orange text-white hover:bg-gosholo-orange/90">
  S'inscrire
</button>

<!-- Bouton secondaire - Vert forêt -->
<button className="bg-gosholo-forest-green text-white">
  En savoir plus
</button>
```

### Cards
```tsx
<div className="bg-white border-2 border-gosholo-lime-green rounded-lg p-6">
  <h3 className="text-gosholo-forest-green font-bold">Titre</h3>
  <p className="text-gray-700">Description</p>
</div>
```

---

## ⚙️ Configuration Technique

### tailwind.config.ts
```typescript
gosholo: {
  // Couleur Principale
  "forest-green": "#016167",  // ⭐ Recommandé
  "vert-foret": "#016167",    // Alias français
  
  // Couleurs Secondaires/Accents
  "lime-green": "#b2fd9d",    // ⭐ Recommandé
  "vert-lime": "#b2fd9d",     // Alias français
  "steel-blue": "#5bc4db",    // ⭐ Recommandé
  "bleu-acier": "#5bc4db",    // Alias français
  orange: "#ff6233",
  
  // Blanc
  white: "#ffffff",
  
  // Alias compatibilité
  primary: "#016167",         // → forest-green
  "light-green": "#b2fd9d",   // → lime-green
  "light-blue": "#5bc4db",    // → steel-blue
}
```

---

## 🔄 Migration du Code Existant

### Option 1 : Utiliser les Nouveaux Noms (Recommandé)

```tsx
// ❌ ANCIEN
<div className="bg-gosholo-primary">...</div>
<div className="bg-gosholo-light-green">...</div>
<div className="bg-gosholo-light-blue/50">...</div>

// ✅ NOUVEAU (conforme au guide)
<div className="bg-gosholo-forest-green">...</div>
<div className="bg-gosholo-lime-green">...</div>
<div className="bg-gosholo-steel-blue/50">...</div>
```

### Option 2 : Utiliser les Alias (Compatible)

```tsx
// ✅ COMPATIBLE - Fonctionne toujours
<div className="bg-gosholo-primary">...</div>
<div className="bg-gosholo-light-green">...</div>
<div className="bg-gosholo-light-blue/50">...</div>

// Les alias pointent vers les bonnes couleurs
```

**Note** : Les alias sont maintenus pour la compatibilité, mais les nouveaux noms sont recommandés.

---

## ✅ Checklist de Conformité

### Couleurs
- [ ] Utiliser `forest-green` ou `vert-foret` pour le vert principal
- [ ] Utiliser `lime-green` ou `vert-lime` pour le vert secondaire
- [ ] Utiliser `steel-blue` ou `bleu-acier` pour le bleu
- [ ] Bleu acier en arrière-plan **TOUJOURS à 50%** (`/50`)
- [ ] Orange principalement pour boutons/CTA
- [ ] Hex codes en minuscules

### Hiérarchie
- [ ] Vert forêt = couleur dominante (60-70%)
- [ ] Vert lime + Bleu acier = couleurs secondaires (20-30%)
- [ ] Orange = accent (10%)

### Documentation
- [ ] Commenter les usages des couleurs dans le code
- [ ] Former l'équipe sur les nouveaux noms

---

## 🎯 Bonnes Pratiques

### ✅ À Faire

1. **Utiliser les noms officiels** du guide de normes
   ```tsx
   bg-gosholo-forest-green
   bg-gosholo-lime-green
   bg-gosholo-steel-blue/50
   ```

2. **Respecter la hiérarchie** : Vert forêt dominant

3. **Bleu acier à 50%** en arrière-plan

4. **Orange pour CTA** (boutons, liens importants)

5. **Documenter** les choix de couleurs

### ❌ À Éviter

1. ❌ Bleu acier sans opacité 50% en background
2. ❌ Orange en arrière-plan principal
3. ❌ Mélanger trop de couleurs (max 3 par section)
4. ❌ Ignorer la hiérarchie (vert forêt doit dominer)

---

## 📞 Référence

**Guide de Normes Gosholo 2024** - Section Palette de Couleurs

- Vert Forêt : Couleur principale
- Vert Lime : Couleur secondaire/accent
- Bleu Acier : Couleur secondaire/accent (50% en background)
- Orange : Couleur accent

---

**Dernière mise à jour** : 6 novembre 2025  
**Conformité** : ✅ 100% conforme au Guide de Normes 2024

