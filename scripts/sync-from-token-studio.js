#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration
const TOKEN_STUDIO_REPO = process.env.TOKEN_STUDIO_REPO || 'christopher-milne-design/cca-design-tokens';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const TOKENS_DIR = path.join(__dirname, '..', 'tokens');

if (!GITHUB_TOKEN) {
  console.error(' Missing required environment variable:');
  console.error('   - GITHUB_TOKEN: Your GitHub personal access token');
  console.error('   - TOKEN_STUDIO_REPO: Your token studio repository (default: cca-design-tokens)');
  console.error('');
  console.error(' To set up your environment, run: npm run setup:env');
  process.exit(1);
}

// GitHub API helper
async function fetchFromGitHub(endpoint) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: endpoint,
      method: 'GET',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'User-Agent': 'Token-Sync-Script',
        'Accept': 'application/vnd.github.v3.raw',
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode >= 400) {
          reject(new Error(`GitHub API error: ${res.statusCode} - ${data}`));
          return;
        }
        
        try {
          const jsonData = JSON.parse(data);
          resolve(jsonData);
        } catch (error) {
          reject(new Error(`Failed to parse JSON: ${error.message}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
}

// Convert Token Studio format to individual JSON files
function convertTokenStudioFormat(tokens) {
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
  function processTokenGroup(obj, path = []) {
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
          // Handle colour tokens
          // Path examples: ['Primary', 'Bleu', '500'] or ['Neutral', '100']
          let colorName, shade;
          
          if (path.length === 2) {
            // Format: Primary.Bleu.500
            colorName = path[1].toLowerCase().replace(/\s+/g, '-');
            shade = key;
          } else if (path.length === 1) {
            // Format: Neutral.100
            colorName = path[0].toLowerCase().replace(/\s+/g, '-');
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
        } else if (tokenType === 'fontSizes' || (path.includes('fontSize') || path.includes('font-size'))) {
          converted.typography.fontSize[key.toLowerCase()] = {
            value: tokenValue,
            type: 'dimension',
            ...(description && { description })
          };
        } else if (tokenType === 'fontWeights' || (path.includes('fontWeight') || path.includes('font-weight'))) {
          converted.typography.fontWeight[key.toLowerCase()] = {
            value: tokenValue,
            type: 'fontWeight',
            ...(description && { description })
          };
        } else if (tokenType === 'lineHeights' || (path.includes('lineHeight') || path.includes('line-height'))) {
          converted.typography.lineHeight[key.toLowerCase()] = {
            value: tokenValue,
            type: 'number',
            ...(description && { description })
          };
        } else if (tokenType === 'borderRadius' || path.includes('radius')) {
          converted.borderRadius[key.toLowerCase()] = {
            value: tokenValue,
            type: 'dimension',
            ...(description && { description })
          };
        }
      } else if (value && typeof value === 'object') {
        // It's a group, recurse into it
        processTokenGroup(value, [...path, key]);
      }
    });
  }

  processTokenGroup(tokens);
  return converted;
}

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
    console.log(' Updated colors.json');
  }

  // Save spacing
  if (Object.keys(tokens.spacing).length > 0) {
    const spacingFile = path.join(TOKENS_DIR, 'spacing.json');
    fs.writeFileSync(spacingFile, JSON.stringify({ spacing: tokens.spacing }, null, 2));
    console.log(' Updated spacing.json');
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
    console.log(' Updated typography.json');
  }

  // Save border radius
  if (Object.keys(tokens.borderRadius).length > 0) {
    const radiusFile = path.join(TOKENS_DIR, 'radius.json');
    fs.writeFileSync(radiusFile, JSON.stringify({ borderRadius: tokens.borderRadius }, null, 2));
    console.log(' Updated radius.json');
  }
}

// Main sync function
async function syncTokens() {
  try {
    console.log(` Fetching tokens from ${TOKEN_STUDIO_REPO} repository...`);
    console.log(` Repository: https://github.com/${TOKEN_STUDIO_REPO}`);
    
    // Fetch tokens.json from the repository
    const tokens = await fetchFromGitHub(`/repos/${TOKEN_STUDIO_REPO}/contents/tokens.json`);
    
    if (!tokens || typeof tokens !== 'object') {
      throw new Error('No valid tokens found in the repository');
    }

    console.log(` Found ${Object.keys(tokens).length} tokens`);

    // Convert Token Studio format to individual files
    const convertedTokens = convertTokenStudioFormat(tokens);
    
    // Save tokens to individual files
    saveTokens(convertedTokens);
    
    console.log(' Design tokens synced successfully from Token Studio!');
    
  } catch (error) {
    console.error(' Error syncing tokens:', error.message);
    console.error('');
    console.error(' Troubleshooting:');
    console.error('1. Check that your GitHub token has access to the repository');
    console.error('2. Verify the repository name is correct');
    console.error('3. Ensure the tokens.json file exists in the repository root');
    console.error('4. Check that the tokens.json file is not empty');
    process.exit(1);
  }
}

// Run the sync
syncTokens();
