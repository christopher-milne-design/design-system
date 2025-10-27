#!/usr/bin/env node

/**
 * Push Tokens Script
 * 
 * This script pushes local tokens to the cca-design-tokens repo in Token Studio format.
 * It converts your individual JSON files into a unified tokens.json file.
 * 
 * Usage:
 *   node scripts/push-tokens.js
 */

const fs = require('fs');
const path = require('path');

const TOKENS_DIR = path.join(__dirname, '..', 'tokens');
const REPO_PATH = '/tmp/cca-design-tokens/cca-design-tokens';
const OUTPUT_PATH = path.join(REPO_PATH, 'tokens.json');

console.log('📦 Converting tokens to Token Studio format...\n');

// Read all token files
const colors = fs.existsSync(path.join(TOKENS_DIR, 'colors.json'))
  ? JSON.parse(fs.readFileSync(path.join(TOKENS_DIR, 'colors.json'), 'utf8'))
  : {};

const spacing = fs.existsSync(path.join(TOKENS_DIR, 'spacing.json'))
  ? JSON.parse(fs.readFileSync(path.join(TOKENS_DIR, 'spacing.json'), 'utf8'))
  : {};

const typography = fs.existsSync(path.join(TOKENS_DIR, 'typography.json'))
  ? JSON.parse(fs.readFileSync(path.join(TOKENS_DIR, 'typography.json'), 'utf8'))
  : {};

const radius = fs.existsSync(path.join(TOKENS_DIR, 'radius.json'))
  ? JSON.parse(fs.readFileSync(path.join(TOKENS_DIR, 'radius.json'), 'utf8'))
  : {};

const semantic = fs.existsSync(path.join(TOKENS_DIR, 'semantic.json'))
  ? JSON.parse(fs.readFileSync(path.join(TOKENS_DIR, 'semantic.json'), 'utf8'))
  : {};

// Convert to Token Studio format with proper types
function convertToTokenStudio(tokens) {
  const converted = {};

  // Process colors
  if (tokens.color) {
    converted.color = {};
    Object.entries(tokens.color).forEach(([colorName, shades]) => {
      converted.color[colorName] = {};
      Object.entries(shades).forEach(([shade, token]) => {
        converted.color[colorName][shade] = {
          value: token.value,
          type: 'color',
          ...(token.description && { description: token.description })
        };
      });
    });
  }

  // Process spacing
  if (tokens.spacing) {
    converted.spacing = {};
    Object.entries(tokens.spacing).forEach(([name, token]) => {
      converted.spacing[name] = {
        value: token.value,
        type: 'spacing',
        ...(token.description && { description: token.description })
      };
    });
  }

  // Process typography
  if (tokens.fontFamily) {
    converted.fontFamily = {};
    Object.entries(tokens.fontFamily).forEach(([name, token]) => {
      converted.fontFamily[name] = {
        value: token.value,
        type: 'fontFamilies',
        ...(token.description && { description: token.description })
      };
    });
  }

  if (tokens.fontSize) {
    converted.fontSize = {};
    Object.entries(tokens.fontSize).forEach(([name, token]) => {
      converted.fontSize[name] = {
        value: token.value,
        type: 'fontSizes',
        ...(token.description && { description: token.description })
      };
    });
  }

  if (tokens.fontWeight) {
    converted.fontWeight = {};
    Object.entries(tokens.fontWeight).forEach(([name, token]) => {
      converted.fontWeight[name] = {
        value: token.value,
        type: 'fontWeights',
        ...(token.description && { description: token.description })
      };
    });
  }

  if (tokens.lineHeight) {
    converted.lineHeight = {};
    Object.entries(tokens.lineHeight).forEach(([name, token]) => {
      converted.lineHeight[name] = {
        value: token.value,
        type: 'lineHeights',
        ...(token.description && { description: token.description })
      };
    });
  }

  // Process border radius
  if (tokens.borderRadius) {
    converted.borderRadius = {};
    Object.entries(tokens.borderRadius).forEach(([name, token]) => {
      converted.borderRadius[name] = {
        value: token.value,
        type: 'borderRadius',
        ...(token.description && { description: token.description })
      };
    });
  }

  // Process semantic tokens (nested structure)
  if (tokens.semantic) {
    converted.semantic = {};
    Object.entries(tokens.semantic).forEach(([category, categoryTokens]) => {
      converted.semantic[category] = {};
      Object.entries(categoryTokens).forEach(([name, token]) => {
        if (typeof token === 'object' && token.value) {
          converted.semantic[category][name] = {
            value: token.value,
            type: token.type || 'color',
            ...(token.description && { description: token.description })
          };
        } else if (typeof token === 'object') {
          // Handle nested semantic tokens (e.g., brand.primary)
          converted.semantic[category][name] = {};
          Object.entries(token).forEach(([subName, subToken]) => {
            if (subToken.value) {
              converted.semantic[category][name][subName] = {
                value: subToken.value,
                type: subToken.type || 'color',
                ...(subToken.description && { description: subToken.description })
              };
            }
          });
        }
      });
    });
  }

  return converted;
}

// Merge all tokens
const allTokens = {
  ...colors,
  ...spacing,
  ...typography,
  ...radius,
  ...semantic
};

const convertedTokens = convertToTokenStudio(allTokens);

// Create Token Studio format
const tokenStudioFormat = {
  $themes: [
    {
      id: 'default',
      name: 'Default',
      selectedTokenSets: {
        global: 'enabled'
      }
    }
  ],
  $metadata: {
    tokenSetOrder: ['global']
  },
  global: convertedTokens
};

// Ensure repo directory exists
if (!fs.existsSync(REPO_PATH)) {
  console.error('❌ cca-design-tokens repo not found!');
  console.error(`   Expected at: ${REPO_PATH}`);
  console.error('');
  console.error('💡 First run:');
  console.error('   cd /tmp && git clone https://github.com/christopher-milne-design/cca-design-tokens.git');
  process.exit(1);
}

// Write tokens.json
fs.writeFileSync(OUTPUT_PATH, JSON.stringify(tokenStudioFormat, null, 2));

console.log('✅ Tokens converted to Token Studio format\n');
console.log('📊 Summary:');
console.log(`   Colors: ${Object.keys(convertedTokens.color || {}).length} palettes`);
console.log(`   Spacing: ${Object.keys(convertedTokens.spacing || {}).length} tokens`);
console.log(`   Font Families: ${Object.keys(convertedTokens.fontFamily || {}).length} tokens`);
console.log(`   Font Sizes: ${Object.keys(convertedTokens.fontSize || {}).length} tokens`);
console.log(`   Font Weights: ${Object.keys(convertedTokens.fontWeight || {}).length} tokens`);
console.log(`   Line Heights: ${Object.keys(convertedTokens.lineHeight || {}).length} tokens`);
console.log(`   Border Radius: ${Object.keys(convertedTokens.borderRadius || {}).length} tokens`);
console.log(`   Semantic: ${Object.keys(convertedTokens.semantic || {}).length} categories`);
console.log('');
console.log(`📁 File saved to: ${OUTPUT_PATH}`);
console.log('');
console.log('📤 Next steps:');
console.log('   1. cd /tmp/cca-design-tokens/cca-design-tokens');
console.log('   2. git add tokens.json');
console.log('   3. git commit -m "chore: sync tokens from nextjs-landing-page"');
console.log('   4. git push origin main');
console.log('');
console.log('   Then in Figma Token Studio:');
console.log('   5. Click "Pull from GitHub" to import these tokens');
