#!/usr/bin/env node

/**
 * Script de Vérification de Conformité aux Normes de Marque Gosholo
 * 
 * Ce script vérifie automatiquement :
 * 1. Nomenclature "gosholo" (toujours minuscule)
 * 2. Utilisation correcte du bleu acier (50% opacité en background)
 * 3. Surcharge de Baskerville (max 5 par fichier)
 * 
 * Usage: node scripts/check-brand-compliance.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Couleurs pour le terminal
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

let totalErrors = 0;
let totalWarnings = 0;

console.log(`${colors.cyan}
╔════════════════════════════════════════════════════════════════╗
║  Vérification de Conformité aux Normes de Marque Gosholo     ║
╚════════════════════════════════════════════════════════════════╝
${colors.reset}\n`);

/**
 * Règle 1: Vérifier "Gosholo" avec majuscule
 */
function checkGosholoCapitalization() {
  console.log(`${colors.blue}[1/3] Vérification de la nomenclature "gosholo"...${colors.reset}`);
  
  try {
    // Rechercher "Gosholo" avec majuscule dans les fichiers de contenu
    const result = execSync(
      'grep -rn "Gosholo" --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --exclude-dir=node_modules --exclude-dir=.next --exclude-dir=build locales/ components/ app/ 2>/dev/null || true',
      { encoding: 'utf8' }
    );

    if (result.trim()) {
      const lines = result.trim().split('\n');
      console.log(`${colors.red}  ✗ ${lines.length} violation(s) trouvée(s):${colors.reset}`);
      lines.forEach(line => {
        console.log(`    ${colors.red}${line}${colors.reset}`);
      });
      console.log(`${colors.yellow}  → Règle: Toujours écrire "gosholo" en minuscule${colors.reset}\n`);
      totalErrors += lines.length;
    } else {
      console.log(`${colors.green}  ✓ Aucune violation de nomenclature détectée${colors.reset}\n`);
    }
  } catch (error) {
    console.log(`${colors.yellow}  ⚠ Impossible de vérifier (grep non disponible)${colors.reset}\n`);
  }
}

/**
 * Règle 2: Vérifier l'utilisation du bleu acier sans opacité 50%
 */
function checkBlueBackgroundOpacity() {
  console.log(`${colors.blue}[2/3] Vérification du bleu acier en arrière-plan...${colors.reset}`);
  
  try {
    // Rechercher bg-gosholo-light-blue sans /50
    const result = execSync(
      'grep -rn "bg-gosholo-light-blue[^/]" --include="*.tsx" --include="*.jsx" --exclude-dir=node_modules --exclude-dir=.next app/ components/ 2>/dev/null || true',
      { encoding: 'utf8' }
    );

    if (result.trim()) {
      const lines = result.trim().split('\n').filter(line => 
        !line.includes('bg-gosholo-light-blue/') && line.includes('bg-gosholo-light-blue')
      );
      
      if (lines.length > 0) {
        console.log(`${colors.yellow}  ⚠ ${lines.length} utilisation(s) potentiellement incorrecte(s):${colors.reset}`);
        lines.forEach(line => {
          console.log(`    ${colors.yellow}${line}${colors.reset}`);
        });
        console.log(`${colors.yellow}  → Règle: Le bleu acier en arrière-plan doit TOUJOURS être à 50%${colors.reset}`);
        console.log(`${colors.yellow}  → Utilisez: bg-gosholo-light-blue/50${colors.reset}\n`);
        totalWarnings += lines.length;
      } else {
        console.log(`${colors.green}  ✓ Utilisation du bleu acier conforme${colors.reset}\n`);
      }
    } else {
      console.log(`${colors.green}  ✓ Aucune utilisation du bleu acier détectée${colors.reset}\n`);
    }
  } catch (error) {
    console.log(`${colors.yellow}  ⚠ Impossible de vérifier (grep non disponible)${colors.reset}\n`);
  }
}

/**
 * Règle 3: Vérifier la surcharge de Baskerville (max 5 par fichier)
 */
function checkBaskervilleUsage() {
  console.log(`${colors.blue}[3/3] Vérification de l'utilisation de Baskerville...${colors.reset}`);
  
  const filesWithOveruse = [];
  
  function scanDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory() && !['node_modules', '.next', 'build', '.git'].includes(entry.name)) {
        scanDirectory(fullPath);
      } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.jsx'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        const matches = content.match(/font-baskerville/g);
        
        if (matches && matches.length > 5) {
          filesWithOveruse.push({
            file: fullPath,
            count: matches.length
          });
        }
      }
    }
  }
  
  try {
    scanDirectory('./app');
    scanDirectory('./components');
    
    if (filesWithOveruse.length > 0) {
      console.log(`${colors.yellow}  ⚠ ${filesWithOveruse.length} fichier(s) avec surcharge de Baskerville:${colors.reset}`);
      filesWithOveruse.forEach(({ file, count }) => {
        console.log(`    ${colors.yellow}${file}: ${count} utilisations${colors.reset}`);
      });
      console.log(`${colors.yellow}  → Règle: Maximum 5 accents Baskerville par page${colors.reset}`);
      console.log(`${colors.yellow}  → Baskerville doit être utilisé avec PARCIMONIE${colors.reset}\n`);
      totalWarnings += filesWithOveruse.length;
    } else {
      console.log(`${colors.green}  ✓ Utilisation de Baskerville conforme${colors.reset}\n`);
    }
  } catch (error) {
    console.log(`${colors.yellow}  ⚠ Erreur lors de la vérification: ${error.message}${colors.reset}\n`);
  }
}

/**
 * Afficher le résumé
 */
function displaySummary() {
  console.log(`${colors.cyan}═══════════════════════════════════════════════════════════════${colors.reset}`);
  console.log(`${colors.cyan}RÉSUMÉ${colors.reset}\n`);
  
  if (totalErrors > 0) {
    console.log(`${colors.red}  ✗ ${totalErrors} erreur(s) critique(s)${colors.reset}`);
  }
  
  if (totalWarnings > 0) {
    console.log(`${colors.yellow}  ⚠ ${totalWarnings} avertissement(s)${colors.reset}`);
  }
  
  if (totalErrors === 0 && totalWarnings === 0) {
    console.log(`${colors.green}  ✓ Aucun problème détecté - Code conforme aux normes de marque!${colors.reset}`);
  }
  
  console.log(`${colors.cyan}═══════════════════════════════════════════════════════════════${colors.reset}\n`);
  
  // Exit code
  if (totalErrors > 0) {
    process.exit(1);
  }
}

// Exécuter toutes les vérifications
checkGosholoCapitalization();
checkBlueBackgroundOpacity();
checkBaskervilleUsage();
displaySummary();

