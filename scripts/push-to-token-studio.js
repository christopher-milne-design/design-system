#!/usr/bin/env node

/**
 * Push local tokens to Token Studio GitHub repo
 * 
 * This script merges your local token files into the Token Studio tokens.json format
 * and pushes them to the cca-design-tokens repo.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const TOKENS_DIR = path.join(__dirname, '../tokens');
const TOKEN_REPO_PATH = '/tmp/cca-design-tokens';
const TOKEN_STUDIO_FILE = path.join(TOKEN_REPO_PATH, 'tokens.json');

console.log('🚀 Pushing local tokens to Token Studio repo...\n');

// Step 1: Clone/pull the token repo
console.log('📥 Syncing with token repo...');
try {
  if (fs.existsSync(TOKEN_REPO_PATH)) {
    execSync('git pull', { cwd: TOKEN_REPO_PATH, stdio: 'inherit' });
  } else {
    execSync(`git clone https://github.com/christopher-milne-design/cca-design-tokens.git ${TOKEN_REPO_PATH}`, { stdio: 'inherit' });
  }
} catch (error) {
  console.error('❌ Failed to sync with token repo');
  process.exit(1);
}

// Step 2: Read existing Token Studio file
let tokenStudioData;
try {
  const fileContent = fs.readFileSync(TOKEN_STUDIO_FILE, 'utf8');
  tokenStudioData = JSON.parse(fileContent);
} catch (error) {
  console.error('❌ Failed to read tokens.json from repo');
  process.exit(1);
}

// Step 3: Read local token files
console.log('\n📖 Reading local tokens...');

const readTokenFile = (filename) => {
  const filePath = path.join(TOKENS_DIR, filename);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

const colors = readTokenFile('colors.json');
const semantic = readTokenFile('semantic.json');
const spacing = readTokenFile('spacing.json');
const typography = readTokenFile('typography.json');
const radius = readTokenFile('radius.json');

// Step 4: Merge into Token Studio format
console.log('🔄 Merging tokens into Token Studio format...\n');

if (!tokenStudioData.global) {
  tokenStudioData.global = {};
}

// Merge colors
if (colors?.color) {
  if (!tokenStudioData.global.color) {
    tokenStudioData.global.color = {};
  }
  Object.assign(tokenStudioData.global.color, colors.color);
  console.log(`✅ Merged ${Object.keys(colors.color).length} color palettes`);
}

// Merge semantic tokens
if (semantic?.semantic) {
  if (!tokenStudioData.global.semantic) {
    tokenStudioData.global.semantic = {};
  }
  Object.assign(tokenStudioData.global.semantic, semantic.semantic);
  console.log(`✅ Merged semantic tokens (${Object.keys(semantic.semantic).length} categories)`);
}

// Merge spacing
if (spacing?.spacing) {
  tokenStudioData.global.spacing = spacing.spacing;
  console.log(`✅ Merged ${Object.keys(spacing.spacing).length} spacing tokens`);
}

// Merge typography
if (typography) {
  // Merge fontSize
  if (typography.fontSize) {
    if (!tokenStudioData.global.fontSize) {
      tokenStudioData.global.fontSize = {};
    }
    Object.assign(tokenStudioData.global.fontSize, typography.fontSize);
    console.log(`✅ Merged ${Object.keys(typography.fontSize).length} font size tokens`);
  }
  
  // Merge fontWeight
  if (typography.fontWeight) {
    if (!tokenStudioData.global.fontWeight) {
      tokenStudioData.global.fontWeight = {};
    }
    Object.assign(tokenStudioData.global.fontWeight, typography.fontWeight);
    console.log(`✅ Merged ${Object.keys(typography.fontWeight).length} font weight tokens`);
  }
  
  // Merge lineHeight
  if (typography.lineHeight) {
    if (!tokenStudioData.global.lineHeight) {
      tokenStudioData.global.lineHeight = {};
    }
    Object.assign(tokenStudioData.global.lineHeight, typography.lineHeight);
    console.log(`✅ Merged ${Object.keys(typography.lineHeight).length} line height tokens`);
  }
}

// Merge border radius
if (radius?.borderRadius) {
  tokenStudioData.global.borderRadius = radius.borderRadius;
  console.log(`✅ Merged ${Object.keys(radius.borderRadius).length} border radius tokens`);
}

// Step 5: Write updated tokens.json
console.log('\n💾 Writing updated tokens.json...');
try {
  fs.writeFileSync(TOKEN_STUDIO_FILE, JSON.stringify(tokenStudioData, null, 2));
  console.log('✅ Successfully updated tokens.json');
} catch (error) {
  console.error('❌ Failed to write tokens.json');
  process.exit(1);
}

// Step 6: Commit and push to GitHub
console.log('\n📤 Pushing to GitHub...');
try {
  execSync('git add tokens.json', { cwd: TOKEN_REPO_PATH });
  execSync('git commit -m "Update tokens from local design system"', { cwd: TOKEN_REPO_PATH });
  execSync('git push', { cwd: TOKEN_REPO_PATH, stdio: 'inherit' });
  console.log('\n✅ Successfully pushed tokens to GitHub!');
} catch (error) {
  if (error.message.includes('nothing to commit')) {
    console.log('\n✅ No changes to push - tokens are already in sync');
  } else {
    console.error('\n❌ Failed to push to GitHub');
    console.error(error.message);
    process.exit(1);
  }
}

console.log('\n🎉 Done! Your tokens are now synced with Token Studio.\n');
