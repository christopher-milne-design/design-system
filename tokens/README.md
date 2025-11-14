# Design Tokens Directory

## NEW: Typography Token Structure - Token Studio Integration

The typography tokens have been restructured to match the UI Prep design system with Desktop and Mobile modes.

### New Typography Files

- **`tokens/typography-primitives.json`** - Base typography values (font families, weights, sizes for desktop/mobile)
- **`tokens/typography-system.json`** - Semantic tokens referencing primitives (heading, body, label, code, link, input)

### Typography Structure

**Primitives Collection:**
- Font Family: Sans (Helvetica Neue), Mono (system monospace)
- Font Weight: Regular (400), Semibold (600), Bold (700), Italic
- Font Size: Desktop scale (11-60px) and Mobile scale (13-70px) with tokens 50-1300

**Typography System Collection:**
- **Heading**: Family Sans, Weight Strong, Sizes XL/L/M/S (desktop & mobile)
- **Body**: Family Sans/Mono, Weight Regular/Strong/Italic, Sizes L/M/S/XS (desktop & mobile)
- **Label**: Family Sans, Weight Strong, Sizes L/M/S/XS (desktop & mobile)
- **Code**: Family Mono, Weight Regular, Sizes L/M/S (desktop & mobile)
- **Link**: Family Sans, Weight Strong, Sizes L/M/S/XS (desktop & mobile)
- **Input**: Family Sans, Weight Regular, Sizes L/M/S (desktop & mobile)

### Pushing to Token Studio

To sync these new typography tokens with Figma Token Studio:

1. **Commit and push to your repository:**
   ```bash
   git add tokens/typography-primitives.json tokens/typography-system.json
   git commit -m "Add UI Prep typography structure with Desktop/Mobile modes"
   git push origin main
   ```

2. **In Figma Token Studio:**
   - Open the Token Studio plugin
   - Go to Settings → Storage
   - Click "Pull from GitHub"
   - Token Studio will sync the new collections

3. **Set up modes in Token Studio:**
   - Create "Desktop" mode (uses `fontSize.desktop.*` tokens)
   - Create "Mobile" mode (uses `fontSize.mobile.*` tokens)
   - Apply modes to Figma components for responsive typography

### Using New Typography Tokens

After running `npm run tokens`, use semantic tokens in your components:

```tsx
// Heading XL
<h1 className="text-heading-size-xl-desktop md:text-heading-size-xl-mobile font-bold">

// Body M with strong weight
<p className="text-body-size-m-desktop md:text-body-size-m-mobile font-semibold">

// Label S
<span className="text-label-size-s-desktop md:text-label-size-s-mobile">
```

This project syncs design tokens from the centralized **[cca-design-tokens](https://github.com/christopher-milne-design/cca-design-tokens)** repository, which is connected to **Token Studio for Figma**.

## Architecture

```
Figma (Token Studio) ↔ cca-design-tokens repo ↔ This project
```

## File Structure

- `tokens/colors.json` - Colour palette synced from cca-design-tokens
- `tokens/spacing.json` - Spacing scale synced from cca-design-tokens
- `tokens/typography.json` - Typography tokens synced from cca-design-tokens
- `tokens/radius.json` - Border radius tokens synced from cca-design-tokens

## Usage

### Building Tokens

```bash
# Generate tokens once
npm run tokens

# Watch mode (regenerate on changes)
npm run tokens:watch
```

The tokens are automatically built before `dev` and `build` commands.

### Generated Output

Style Dictionary generates `lib/tokens.js` which is then consumed by the Tailwind plugin.

### Using Tokens in Components

The tokens are available as Tailwind CSS classes and CSS variables:

#### Colors
```tsx
// As Tailwind classes
<div className="bg-marron-500 text-bleu-600">

// As CSS variables
<div style={{ colour: 'var(--colour-marron-500)' }}>
```

#### Spacing
```tsx
// As Tailwind classes
<div className="p-lg m-xl">

// As CSS variables
<div style={{ padding: 'var(--spacing-lg)' }}>
```

#### Typography
```tsx
// Font sizes
<h1 className="text-4xl">

// Font weights
<p className="font-semibold">

// Line heights
<p className="leading-relaxed">
```

#### Border Radius
```tsx
// As Tailwind classes
<div className="rounded-lg">

// As CSS variables
<div style={{ borderRadius: 'var(--radius-lg)' }}>
```

## Adding New Tokens

1. Add your token to the appropriate JSON file in this directory
2. Run `npm run tokens` to regenerate
3. The new tokens will be available as CSS variables and Tailwind classes

### Token Format

```json
{
  "category": {
    "token-name": {
      "value": "#FF0000",
      "type": "colour"
    }
  }
}
```

## Token Types

- `colour` - Colour values (hex, rgb, hsl)
- `spacing` - Spacing values with units
- `fontSizes` - Font size values
- `fontWeights` - Font weight values (400, 500, 600, 700)
- `lineHeights` - Line height ratios (unitless numbers)
- `borderRadius` - Border radius values

## Syncing Tokens

### Automated Sync (Recommended)
Pull latest tokens from cca-design-tokens and rebuild:
```bash
npm run sync:auto
```
This will:
1. Clone/update `cca-design-tokens` in `/tmp`
2. Sync tokens to `tokens/` directory
3. Rebuild `lib/tokens.js` and `lib/tokens.css`

### Manual Sync
If you need more control:
```bash
# Sync tokens only (without rebuilding)
npm run sync:manual

# Then rebuild
npm run tokens
```

### Development with Auto-Sync
Start dev server with fresh tokens:
```bash
npm run dev:sync
```

## Workflow

### From Figma → This Project
1. Edit tokens in **Token Studio for Figma**
2. Push to **cca-design-tokens** repo from Figma
3. In this project: `npm run sync:auto`
4. Your components now use updated tokens

### From This Project → Figma
1. Edit tokens in **cca-design-tokens** repo directly
2. Commit and push changes
3. In Figma Token Studio, pull from GitHub
4. In this project: `npm run sync:auto`

## Token Studio Configuration

The Token Studio plugin in Figma should be configured to sync with:
- **Repository**: `christopher-milne-design/cca-design-tokens`
- **Branch**: `main`
- **File Path**: (as configured in cca-design-tokens)

All changes flow through the central `cca-design-tokens` repository.
