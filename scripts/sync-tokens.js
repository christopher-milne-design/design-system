#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration
const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const TOKENS_DIR = path.join(__dirname, '..', 'tokens');

if (!FIGMA_TOKEN || !FIGMA_FILE_KEY) {
  console.error(' Missing required environment variables:');
  console.error('   - FIGMA_TOKEN: Your Figma personal access token');
  console.error('   - FIGMA_FILE_KEY: Your Figma file key');
  process.exit(1);
}

// Figma API helper
async function fetchFromFigma(endpoint) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.figma.com',
      path: endpoint,
      method: 'GET',
      headers: {
        'X-Figma-Token': FIGMA_TOKEN,
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
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

// Extract design tokens from Figma variables
function extractTokensFromVariables(variables) {
  const tokens = {
    colors: {},
    spacing: {},
    typography: {
      fontSize: {},
      fontWeight: {},
      lineHeight: {}
    },
    borderRadius: {}
  };

  Object.values(variables).forEach(variable => {
    const { name, valuesByMode, resolvedType } = variable;
    const value = valuesByMode[Object.keys(valuesByMode)[0]];

    if (!value) return;

    // Parse variable name to determine category and key
    const nameParts = name.split('/');
    if (nameParts.length < 2) return;

    const category = nameParts[0].toLowerCase();
    const key = nameParts[nameParts.length - 1];

    switch (resolvedType) {
      case 'COLOR':
        if (!tokens.colors[category]) tokens.colors[category] = {};
        tokens.colors[category][key] = {
          value: value,
          type: 'color'
        };
        break;
        
      case 'FLOAT':
        if (category === 'spacing') {
          tokens.spacing[key] = {
            value: `${value}px`,
            type: 'dimension'
          };
        } else if (category === 'fontsize') {
          tokens.typography.fontSize[key] = {
            value: `${value}px`,
            type: 'dimension'
          };
        } else if (category === 'borderradius') {
          tokens.borderRadius[key] = {
            value: `${value}px`,
            type: 'dimension'
          };
        }
        break;
        
      case 'STRING':
        if (category === 'fontweight') {
          tokens.typography.fontWeight[key] = {
            value: value,
            type: 'fontWeight'
          };
        } else if (category === 'lineheight') {
          tokens.typography.lineHeight[key] = {
            value: value,
            type: 'number'
          };
        }
        break;
    }
  });

  return tokens;
}

// Save tokens to JSON files
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
    console.log(' Fetching design tokens from Figma...');
    
    // Fetch variables from Figma
    const variablesResponse = await fetchFromFigma(`/v1/files/${FIGMA_FILE_KEY}/variables`);
    
    if (!variablesResponse.meta || !variablesResponse.meta.variables) {
      throw new Error('No variables found in Figma file');
    }

    console.log(` Found ${Object.keys(variablesResponse.meta.variables).length} variables`);

    // Extract tokens from variables
    const tokens = extractTokensFromVariables(variablesResponse.meta.variables);
    
    // Save tokens to files
    saveTokens(tokens);
    
    console.log(' Design tokens synced successfully!');
    
  } catch (error) {
    console.error(' Error syncing tokens:', error.message);
    process.exit(1);
  }
}

// Run the sync
syncTokens();

