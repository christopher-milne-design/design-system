import { tokens } from './tokens.js';

export default function tokensPlugin({ addBase }) {
  // Generate CSS variables from tokens
  const cssVars = {};
  
  // Add color variables
  if (tokens.colors) {
    Object.entries(tokens.colors).forEach(([colorName, shades]) => {
      Object.entries(shades).forEach(([shade, value]) => {
        cssVars[`--color-${colorName}-${shade}`] = value;
      });
    });
  }
  
  // Add spacing variables
  if (tokens.spacing) {
    Object.entries(tokens.spacing).forEach(([key, value]) => {
      cssVars[`--spacing-${key}`] = value;
    });
  }
  
  // Add font size variables
  if (tokens.fontSize) {
    Object.entries(tokens.fontSize).forEach(([key, value]) => {
      cssVars[`--font-size-${key}`] = value;
    });
  }
  
  // Add font weight variables
  if (tokens.fontWeight) {
    Object.entries(tokens.fontWeight).forEach(([key, value]) => {
      cssVars[`--font-weight-${key}`] = value;
    });
  }
  
  // Add line height variables
  if (tokens.lineHeight) {
    Object.entries(tokens.lineHeight).forEach(([key, value]) => {
      cssVars[`--line-height-${key}`] = value;
    });
  }
  
  // Add border radius variables
  if (tokens.borderRadius) {
    Object.entries(tokens.borderRadius).forEach(([key, value]) => {
      cssVars[`--radius-${key}`] = value;
    });
  }
  
  // Add semantic tokens
  if (tokens.semantic?.colors) {
    Object.entries(tokens.semantic.colors).forEach(([category, values]) => {
      Object.entries(values).forEach(([key, value]) => {
        cssVars[`--semantic-${category}-${key}`] = value;
      });
    });
  }
  
  addBase({
    ':root': cssVars,
  });
}
