#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Files to process
const filesToProcess = [
  // Documentation
  'CONTENTFUL_SETUP.md',
  'DESIGN_SYSTEM_IMPLEMENTATION.md',
  'PROJECT_TASKS.md',
  'README.md',
  'README_local.md',
  'SHOWCASE_CONTENTFUL.md',
  'SYNC_TOKENS.md',
  'TOKEN_PIPELINE_GUIDE.md',
  'TOKEN_STUDIO_GUIDE.md',
  'TOKEN_SYNC.md',
  'TYPOGRAPHY_SYSTEM.md',
  'WARP.md',
  'tokens/README.md',
  
  // React/TSX files (for emojis only, not color->colour in code)
  'app/components/page.tsx',
  'app/page.tsx',
  'components/Features.tsx',
  'components/CTA.tsx',
  
  // Scripts (comments only)
  'scripts/push-tokens.js',
  'scripts/sync-tokens.js',
  'scripts/manual-sync.js',
  'scripts/sync-from-token-studio.js',
];

// Emoji regex pattern - matches most emojis
const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}\u{1F1E0}-\u{1F1FF}]/gu;

function processFile(filePath) {
  const fullPath = path.join(__dirname, '..', filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  Skipping ${filePath} (not found)`);
    return;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  let changed = false;
  
  // Remove emojis
  const withoutEmojis = content.replace(emojiRegex, '');
  if (withoutEmojis !== content) {
    content = withoutEmojis;
    changed = true;
  }
  
  // Replace "color" with "colour" in documentation/comments
  // Only in .md files and comments in code files
  if (filePath.endsWith('.md')) {
    // In markdown, replace all instances
    const withColour = content.replace(/\bcolor\b/gi, (match) => {
      // Preserve case
      if (match === 'color') return 'colour';
      if (match === 'Color') return 'Colour';
      if (match === 'COLOR') return 'COLOUR';
      return match;
    });
    
    if (withColour !== content) {
      content = withColour;
      changed = true;
    }
  } else if (filePath.endsWith('.js')) {
    // In JavaScript, only replace in comments
    const lines = content.split('\n');
    const processedLines = lines.map(line => {
      if (line.trim().startsWith('//') || line.trim().startsWith('*') || line.trim().startsWith('/*')) {
        return line.replace(/\bcolor\b/gi, (match) => {
          if (match === 'color') return 'colour';
          if (match === 'Color') return 'Colour';
          if (match === 'COLOR') return 'COLOUR';
          return match;
        });
      }
      return line;
    });
    
    const newContent = processedLines.join('\n');
    if (newContent !== content) {
      content = newContent;
      changed = true;
    }
  }
  
  if (changed) {
    fs.writeFileSync(fullPath, content);
    console.log(`✓ Updated ${filePath}`);
  } else {
    console.log(`  No changes needed for ${filePath}`);
  }
}

console.log('Starting cleanup...\n');

filesToProcess.forEach(processFile);

console.log('\nCleanup complete!');
