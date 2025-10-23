# Design Tokens

This project uses **Token Studio for Figma** with bidirectional sync to maintain design tokens across Figma and code.

## File Structure

### Token Studio Format (Primary Source)
- **`tokens.json`** (root) - Token Studio format with `$themes` and `$metadata`
  - Contains all tokens in the `global` token set
  - This is the single source of truth synced with Figma

### Legacy Files (Optional)
- `tokens/colors.json` - Individual color tokens
- `tokens/spacing.json` - Spacing scale tokens
- `tokens/typography.json` - Typography tokens
- `tokens/radius.json` - Border radius tokens

**Note**: The root `tokens.json` file takes precedence. Individual files in `tokens/` are kept for reference but not required.

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
<div style={{ color: 'var(--color-marron-500)' }}>
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
      "type": "color"
    }
  }
}
```

## Token Types

- `color` - Color values (hex, rgb, hsl)
- `spacing` - Spacing values with units
- `fontSizes` - Font size values
- `fontWeights` - Font weight values (400, 500, 600, 700)
- `lineHeights` - Line height ratios (unitless numbers)
- `borderRadius` - Border radius values

## Token Studio + Figma Sync Setup

### 1. Install Token Studio Plugin in Figma
1. Open Figma
2. Go to **Plugins** → **Browse plugins in Community**
3. Search for "**Tokens Studio for Figma**" and install it

### 2. Configure GitHub Sync in Token Studio
1. Open Token Studio plugin in Figma
2. Go to **Settings** → **Sync**
3. Choose **GitHub** as sync provider
4. Authenticate with your GitHub account
5. Configure sync settings:
   - **Repository**: `<your-username>/nextjs-landing-page`
   - **Branch**: `main` (or your preferred branch)
   - **File Path**: `tokens.json`
   - **Base Branch**: `main`

### 3. Push Your Tokens to GitHub
```bash
# Add tokens.json to git
git add tokens.json .github/workflows/token-studio-sync.yml

# Commit with a clear message
git commit -m "feat: add Token Studio format for Figma sync"

# Push to GitHub
git push origin main
```

### 4. Initial Pull in Figma
1. In Token Studio plugin, click **Pull from GitHub**
2. Your tokens will load into Figma
3. Apply tokens to your design system

### 5. Bidirectional Workflow

#### From Figma → Code
1. Edit tokens in Token Studio plugin in Figma
2. Click **Push to GitHub**
3. GitHub Actions automatically regenerates `lib/tokens.js` and `lib/tokens.css`
4. Pull changes locally: `git pull origin main`
5. Your code now has the updated tokens

#### From Code → Figma
1. Edit `tokens.json` locally
2. Run `npm run tokens` to verify it builds
3. Commit and push: `git add tokens.json && git commit -m "update tokens" && git push`
4. In Figma Token Studio, click **Pull from GitHub**
5. Your Figma design now has the updated tokens

### 6. Automated Sync
The GitHub Actions workflow (`.github/workflows/token-studio-sync.yml`) automatically:
- Detects changes to `tokens.json`
- Rebuilds `lib/tokens.js` and `lib/tokens.css`
- Commits and pushes generated files

### Tips
- Always pull before editing to avoid conflicts
- Use descriptive commit messages when pushing tokens
- Test token changes locally with `npm run tokens` before pushing
- Keep the `global` token set as your primary set for simplicity
