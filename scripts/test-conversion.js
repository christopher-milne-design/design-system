const fs = require('fs');
const path = require('path');

// Read the GitHub tokens
const githubTokens = JSON.parse(fs.readFileSync('/tmp/cca-design-tokens/tokens.json', 'utf8'));

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

function processTokenGroup(obj, pathArray = []) {
  Object.entries(obj).forEach(([key, value]) => {
    if (value && typeof value === 'object' && 'value' in value && 'type' in value) {
      const tokenValue = value.value;
      const tokenType = value.type;
      
      if (tokenType === 'color') {
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
        converted.colors[colorName][shade] = { value: tokenValue, type: 'color' };
      }
    } else if (value && typeof value === 'object') {
      processTokenGroup(value, [...pathArray, key]);
    }
  });
}

processTokenGroup(githubTokens);

console.log('Converted colors:');
console.log(JSON.stringify(converted.colors, null, 2));
console.log('\nColor count:', Object.keys(converted.colors).length);
