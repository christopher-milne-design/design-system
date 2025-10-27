# Token Studio Integration Guide

This guide explains how to sync design tokens between your codebase, GitHub, and Figma via Token Studio.

## Setup: Connecting Token Studio to GitHub

### 1. In Figma (Token Studio Plugin)
1. Open the Token Studio plugin in Figma
2. Click on the **Settings** tab (gear icon)
3. Under **Sync Providers**, select **GitHub**
4. Configure GitHub sync:
   - **Repository**: Your GitHub repo (e.g., `username/repo-name`)
   - **Branch**: `main` (or your preferred branch)
   - **File Path**: `tokens/` (directory where token files are stored)
   - **GitHub Token**: Create a Personal Access Token with `repo` scope

### 2. Generate GitHub Personal Access Token
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a descriptive name: "Token Studio - [Project Name]"
4. Select scope: `repo` (full control of private repositories)
5. Click "Generate token"
6. Copy the token and paste it into Token Studio

## Workflow: Pushing Tokens from Code to Figma

### Step 1: Commit Your Token Files
```bash
git add tokens/
git commit -m "Add semantic tokens"
git push origin main
```

### Step 2: Pull Tokens into Token Studio (Figma)
1. Open Token Studio plugin in Figma
2. Click the **Sync** tab
3. Click **Pull from GitHub**
4. Token Studio will read your JSON files and display them in the UI

Your tokens are now visible in Figma! Designers can:
- View primitive tokens (colors, spacing, etc.)
- View semantic tokens with their references (e.g., `{color.bleu.500}`)
- Edit token values or mappings
- Push changes back to GitHub

## Workflow: Pulling Tokens from Figma to Code

When designers update tokens in Figma and push to GitHub:

### Option 1: Automatic Sync (Recommended)
```bash
npm run sync:auto
```
This command:
1. Clones/pulls the latest tokens from GitHub
2. Copies them to your `tokens/` directory
3. Runs Style Dictionary to rebuild `lib/tokens.js`
4. Your dev server auto-reloads with the new tokens

### Option 2: Manual Sync
```bash
# Pull the latest changes from GitHub
git pull origin main

# Rebuild tokens
npm run tokens

# Dev server will pick up the changes automatically
```

## Token File Structure

Token Studio expects this JSON format:

**Primitive Tokens** (`tokens/colors.json`):
```json
{
  "color": {
    "bleu": {
      "500": {
        "value": "#1a70ef",
        "type": "color"
      }
    }
  }
}
```

**Semantic Tokens** (`tokens/semantic.json`):
```json
{
  "semantic": {
    "brand": {
      "primary": {
        "value": "{color.bleu.500}",
        "type": "color",
        "description": "Primary brand color"
      }
    }
  }
}
```

### Token References
Token Studio uses `{path.to.token}` syntax for references:
- `{color.bleu.500}` → References the primitive bleu-500 color
- `{semantic.brand.primary}` → References another semantic token

When you run `npm run tokens`, Style Dictionary transforms these into:
- `var(--color-bleu-500)` → CSS variable references
- `#1a70ef` → Resolved hex values (for primitives)

## Best Practices

### 1. Always Use Semantic Tokens in Components
❌ Don't:
```tsx
<button className="bg-bleu-500 hover:bg-bleu-700">
```

✅ Do:
```tsx
<button className="bg-brand-primary hover:bg-brand-primary-hover">
```

This way, when designers change the brand color from blue to green, your components automatically update.

### 2. Keep Primitive Tokens Generic
- ✅ `bleu-500`, `orange-600` (color names)
- ❌ `primary-blue`, `accent-orange` (purpose in primitive layer)

### 3. Put Purpose in Semantic Tokens
- ✅ `brand-primary`, `feedback-success`, `text-muted`
- ❌ `blue-button`, `green-alert` (appearance in semantic layer)

### 4. Document Semantic Tokens
Always add descriptions in Token Studio:
```json
{
  "value": "{color.bleu.500}",
  "type": "color",
  "description": "Primary brand color for CTAs and key interactive elements"
}
```

## Troubleshooting

### Token Studio can't find my tokens
- Check the file path in Token Studio settings matches your repo structure
- Ensure files are in the correct Token Studio format with `type` and `value` fields
- Verify your GitHub token has `repo` scope

### Changes in Figma aren't showing up in code
1. Check if Token Studio pushed to GitHub (check recent commits)
2. Run `npm run sync:auto` to pull latest
3. If using `npm run tokens:watch`, it should auto-rebuild

### Semantic tokens not working
- Ensure references use `{path.to.token}` syntax in JSON
- Run `npm run tokens` to rebuild
- Check `lib/tokens.js` to see if semantic tokens are present

### Dev server not updating
- Restart the dev server: `npm run dev`
- Clear Next.js cache: `rm -rf .next && npm run dev`

## Example: Changing Brand Color

### In Figma (Token Studio)
1. Find `semantic.brand.primary` token
2. Change value from `{color.bleu.500}` to `{color.vert.500}`
3. Push to GitHub
4. Commit message: "Change brand color from blue to green"

### In Your Code
```bash
npm run sync:auto
```

All components using `bg-brand-primary` now show green instead of blue! 🎉

No code changes needed. The semantic token layer makes this possible.
