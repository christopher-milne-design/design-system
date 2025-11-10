# CCA Design Tokens

Central design token repository for the CCA design system. Synced with Token Studio for Figma.

## Token Files

- **`tokens.json`** - Main token file with colors and global tokens (Token Studio format)
- **`typography-primitives.json`** - Base typography values (font families, weights, sizes)
- **`typography-system.json`** - Semantic typography tokens (heading, body, label, code, link, input)

## Typography Structure (UI Prep System)

### Typography Primitives Collection

**Font Family:**
- Sans: Helvetica Neue, Helvetica, Arial, sans-serif
- Mono: ui-monospace, system monospace

**Font Weight:**
- Regular: 400
- Semibold: 600
- Bold: 700
- Italic: italic

**Font Size Scale:**
- Desktop: 50 (11px) → 1300 (60px)
- Mobile: 50 (13px) → 1300 (70px)

### Typography System Collection

Semantic tokens with Desktop and Mobile modes:

- **Heading**: Sans family, Bold weight, Sizes XL/L/M/S
- **Body**: Sans/Mono family, Regular/Semibold/Italic weight, Sizes L/M/S/XS
- **Label**: Sans family, Semibold weight, Sizes L/M/S/XS
- **Code**: Mono family, Regular weight, Sizes L/M/S
- **Link**: Sans family, Semibold weight, Sizes L/M/S/XS
- **Input**: Sans family, Regular weight, Sizes L/M/S

## Workflow

### Figma → Code

1. Edit tokens in Token Studio (Figma)
2. Push to this GitHub repo from Token Studio
3. In consuming projects, run `npm run sync:auto`

### Code → Figma

1. Edit token files in this repo
2. Commit and push to GitHub
3. In Token Studio (Figma), pull from GitHub

## Token Studio Configuration

**Repository:** `christopher-milne-design/design-system`  
**Branch:** `main` (or feature branches)  
**Sync:** Two-way sync enabled

## Setting Up Modes in Token Studio

To use Desktop/Mobile typography modes in Figma:

1. Open Token Studio in Figma
2. Pull latest tokens from GitHub
3. Create modes:
   - Mode: "Desktop" (uses `fontSize.desktop.*`)
   - Mode: "Mobile" (uses `fontSize.mobile.*`)
4. Apply modes to Figma components for responsive typography

## Consuming Projects

Projects that use these tokens:
- `nextjs-landing-page` - Landing page using CCA design system
