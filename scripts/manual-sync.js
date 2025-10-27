#!/usr/bin/env node

/**
 * Manual Token Sync Script
 * 
 * This script manually syncs tokens from a local clone of your GitHub repo.
 * Useful when you don't have GITHUB_TOKEN set or want to test locally.
 * 
 * Usage:
 * 1. Clone your token repo: cd /tmp && git clone https://github.com/christopher-milne-design/cca-design-tokens.git
 * 2. Run this script: node scripts/manual-sync.js [path-to-tokens.json]
 */

const fs = require('fs');
const path = require('path');

// Get token file path from args or use default
let tokenFilePath = process.argv[2] || '/tmp/cca-design-tokens/tokens.json';
const TOKENS_DIR = path.join(__dirname, '..', 'tokens');

// Check for nested folder structure
if (!fs.existsSync(tokenFilePath)) {
  const nestedPath = '/tmp/cca-design-tokens/cca-design-tokens/tokens.json';
  if (fs.existsSync(nestedPath)) {
    tokenFilePath = nestedPath;
  }
}

console.log(`📂 Reading tokens from: ${tokenFilePath}`);

// Check if file exists
if (!fs.existsSync(tokenFilePath)) {
  console.error('❌ Token file not found!');
  console.error(`   Checked: ${tokenFilePath}`);
  console.error('');
  console.error('💡 To sync:');
  console.error('   1. cd /tmp');
  console.error('   2. git clone https://github.com/christopher-milne-design/cca-design-tokens.git');
  console.error('   3. cd back to your project');
  console.error('   4. node scripts/manual-sync.js');
  process.exit(1);
}

// Read tokens
let tokens = JSON.parse(fs.readFileSync(tokenFilePath, 'utf8'));

// Handle Token Studio's nested structure (e.g., Primitives/Light)
// Check if tokens are nested under a theme key
if (tokens['Primitives/Light']) {
  tokens = tokens['Primitives/Light'];
} else if (tokens.$themes && Object.keys(tokens).length > 0) {
  // Find the first non-metadata key
  const themeKeys = Object.keys(tokens).filter(k => !k.startsWith('$') && k !== 'global');
  if (themeKeys.length > 0) {
    tokens = tokens[themeKeys[0]];
  }
}

const converted = {
  colors: {},
  spacing: {},
  typography: {
    fontSize: {},
    fontWeight: {},
    lineHeight: {}
  },
  borderRadius: {}
};

// Recursive function to process nested token structure
function processTokenGroup(obj, pathArray = []) {
  Object.entries(obj).forEach(([key, value]) => {
    // If this has a 'value' and 'type', it's a token
    // Support both old format (value/type) and W3C DTCG format ($value/$type)
    const hasOldFormat = value && typeof value === 'object' && 'value' in value && 'type' in value;
    const hasNewFormat = value && typeof value === 'object' && '$value' in value && '$type' in value;
    
    if (hasOldFormat || hasNewFormat) {
      const tokenValue = value.$value || value.value;
      const tokenType = value.$type || value.type;
      const description = value.description || value.$description;
      
      // Determine category based on type and path
      if (tokenType === 'color') {
        // Handle color tokens
        // Path examples: ['Primary', 'Bleu', '500'] or ['Neutral', '100']
        let colorName, shade;
        
        if (pathArray.length === 2) {
          // Format: Primary.Bleu.500
          colorName = pathArray[1].toLowerCase().replace(/\s+/g, '-');
          shade = key;
        } else if (pathArray.length === 1) {
          // Format: Neutral.100
          colorName = pathArray[0].toLowerCase().replace(/\s+/g, '-');
          shade = key;
        } else {
          return;
        }
        
        if (!converted.colors[colorName]) converted.colors[colorName] = {};
        converted.colors[colorName][shade] = {
          value: tokenValue,
          type: 'color',
          ...(description && { description })
        };
      } else if (tokenType === 'dimension' || tokenType === 'sizing' || tokenType === 'spacing') {
        // Handle spacing tokens
        const spacingName = key.toLowerCase();
        converted.spacing[spacingName] = {
          value: tokenValue,
          type: 'dimension',
          ...(description && { description })
        };
      } else if (tokenType === 'fontSizes' || (pathArray.includes('fontSize') || pathArray.includes('font-size'))) {
        converted.typography.fontSize[key.toLowerCase()] = {
          value: tokenValue,
          type: 'dimension',
          ...(description && { description })
        };
      } else if (tokenType === 'fontWeights' || (pathArray.includes('fontWeight') || pathArray.includes('font-weight'))) {
        converted.typography.fontWeight[key.toLowerCase()] = {
          value: tokenValue,
          type: 'fontWeight',
          ...(description && { description })
        };
      } else if (tokenType === 'lineHeights' || (pathArray.includes('lineHeight') || pathArray.includes('line-height'))) {
        converted.typography.lineHeight[key.toLowerCase()] = {
          value: tokenValue,
          type: 'number',
          ...(description && { description })
        };
      } else if (tokenType === 'borderRadius' || pathArray.includes('radius')) {
        converted.borderRadius[key.toLowerCase()] = {
          value: tokenValue,
          type: 'dimension',
          ...(description && { description })
        };
      }
    } else if (value && typeof value === 'object') {
      // It's a group, recurse into it
      processTokenGroup(value, [...pathArray, key]);
    }
  });
}

processTokenGroup(tokens);

// Save tokens to individual JSON files
function saveTokens(tokens) {
  // Ensure tokens directory exists
  if (!fs.existsSync(TOKENS_DIR)) {
    fs.mkdirSync(TOKENS_DIR, { recursive: true });
  }

  // Save colors
  if (Object.keys(tokens.colors).length > 0) {
    const colorsFile = path.join(TOKENS_DIR, 'colors.json');
    fs.writeFileSync(colorsFile, JSON.stringify({ color: tokens.colors }, null, 2));
    console.log('✅ Updated colors.json');
  }

  // Save spacing
  if (Object.keys(tokens.spacing).length > 0) {
    const spacingFile = path.join(TOKENS_DIR, 'spacing.json');
    fs.writeFileSync(spacingFile, JSON.stringify({ spacing: tokens.spacing }, null, 2));
    console.log('✅ Updated spacing.json');
  }

  // Save typography
  const typographyFile = path.join(TOKENS_DIR, 'typography.json');
  const typographyData = {};
  if (Object.keys(tokens.typography.fontSize).length > 0) {
    typographyData.fontSize = tokens.typography.fontSize;
  }
  if (Object.keys(tokens.typography.fontWeight).length > 0) {
    typographyData.fontWeight = tokens.typography.fontWeight;
  }
  if (Object.keys(tokens.typography.lineHeight).length > 0) {
    typographyData.lineHeight = tokens.typography.lineHeight;
  }
  
  if (Object.keys(typographyData).length > 0) {
    fs.writeFileSync(typographyFile, JSON.stringify(typographyData, null, 2));
    console.log('✅ Updated typography.json');
  }

  // Save border radius
  if (Object.keys(tokens.borderRadius).length > 0) {
    const radiusFile = path.join(TOKENS_DIR, 'radius.json');
    fs.writeFileSync(radiusFile, JSON.stringify({ borderRadius: tokens.borderRadius }, null, 2));
    console.log('✅ Updated radius.json');
  }
}

saveTokens(converted);

console.log('');
console.log('🎉 Tokens synced successfully!');
console.log('');
console.log('📊 Summary:');
console.log(`   Colors: ${Object.keys(converted.colors).length} palettes`);
console.log(`   Spacing: ${Object.keys(converted.spacing).length} tokens`);
console.log(`   Font Sizes: ${Object.keys(converted.typography.fontSize).length} tokens`);
console.log(`   Font Weights: ${Object.keys(converted.typography.fontWeight).length} tokens`);
console.log(`   Line Heights: ${Object.keys(converted.typography.lineHeight).length} tokens`);
console.log(`   Border Radius: ${Object.keys(converted.borderRadius).length} tokens`);
console.log('');
console.log('Next steps:');
console.log('   1. npm run tokens       (generate Tailwind classes)');
console.log('   2. npm run dev         (start dev server)');
