const { tokens } = require('./lib/tokens.js');

// Helper function to flatten nested color objects for Tailwind
function flattenColors(colors) {
  const flattened = {};
  Object.keys(colors).forEach(colorName => {
    Object.keys(colors[colorName]).forEach(shade => {
      flattened[`${colorName}-${shade}`] = colors[colorName][shade];
    });
  });
  return flattened;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ...flattenColors(tokens.colors || {}),
        // Keep default Tailwind colors as fallbacks
        transparent: 'transparent',
        current: 'currentColor',
      },
      spacing: tokens.spacing || {},
      fontSize: tokens.fontSize || {},
      fontWeight: tokens.fontWeight || {},
      lineHeight: tokens.lineHeight || {},
      borderRadius: tokens.borderRadius || {},
    },
  },
  plugins: [],
};
