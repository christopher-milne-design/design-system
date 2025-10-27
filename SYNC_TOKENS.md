# How to Sync Tokens from Figma

## 🎯 Quick Sync (When Changes Don't Show Up)

If you've made changes in Figma but they're not showing in GitHub:

### Step 1: Make sure Token Studio synced to GitHub
1. Open Figma
2. Open Token Studio plugin
3. Click **"Push to GitHub"** or check sync settings
4. Create a Pull Request if needed and merge it to `main`
5. Verify changes are visible at: https://github.com/christopher-milne-design/cca-design-tokens

### Step 2: Pull changes to your project
```bash
# Option A: Manual sync (no GitHub token needed)
cd /tmp
git clone https://github.com/christopher-milne-design/cca-design-tokens.git
cd ~/projects/nextjs-landing-page
npm run sync:manual
npm run tokens
npm run dev

# Option B: With GitHub token (automated)
export GITHUB_TOKEN="your_token_here"
npm run sync:token-studio
npm run tokens
npm run dev
```

## 📋 Common Issues

### Issue: "Changes not reflected in GitHub"

**Symptoms**: You edited colors in Figma, but the GitHub repo still shows old values.

**Solutions**:
1. **Check Token Studio sync settings**:
   - Open Token Studio plugin in Figma
   - Go to Settings → GitHub
   - Verify repository is set to: `christopher-milne-design/cca-design-tokens`
   - Check branch is set to: `main`
   - Click "Push to GitHub" button

2. **Check if PR was created**:
   - Visit: https://github.com/christopher-milne-design/cca-design-tokens/pulls
   - If there's an open PR with your changes, **merge it**
   - Then run sync commands above

3. **Check GitHub token in Figma**:
   - Token Studio → Settings → GitHub
   - Verify your GitHub token is valid
   - Token needs `repo` scope

### Issue: "npm run sync:token-studio fails"

**Symptoms**: Error message about missing `GITHUB_TOKEN`

**Solution**: Use manual sync instead:
```bash
# 1. Clone the repo locally
cd /tmp
git clone https://github.com/christopher-milne-design/cca-design-tokens.git

# 2. Run manual sync
cd ~/projects/nextjs-landing-page
npm run sync:manual
npm run tokens
```

### Issue: "Colors have wrong names"

**Symptoms**: Token names in Tailwind don't match your Figma names

**How Token Names Work**:
- Figma structure: `Primary / Bleu / 500`
- Converted to: `bleu-500`
- Usage: `className="bg-bleu-500"`

**Rules**:
- Spaces become hyphens: `Bleu clair` → `bleu-clair`
- Capitalization is lowercased: `Bleu` → `bleu`
- Top-level groups (Primary/Secondary) are removed

## 🔄 Complete Sync Workflow

### From Figma to Your App

1. **In Figma**: Edit design tokens using Token Studio plugin
2. **Token Studio**: Push to GitHub
3. **GitHub**: Review and merge PR (if created)
4. **Your Machine**: 
   ```bash
   npm run sync:manual  # or sync:token-studio with token
   npm run tokens       # Generate Tailwind classes
   npm run dev          # See changes in app
   ```

### Verify It Worked

1. Check `tokens/colors.json` - should have your latest colors
2. Check `lib/tokens.js` - should have updated hex values
3. Visit `http://localhost:3000/tokens` - should show new colors

## 🚀 Available Commands

```bash
# Sync tokens (requires GITHUB_TOKEN)
npm run sync:token-studio

# Manual sync (no token needed)
npm run sync:manual

# Generate Tailwind classes from tokens
npm run tokens

# Watch for token changes (auto-rebuild)
npm run tokens:watch

# Full workflow: sync + generate + dev server
npm run sync:manual && npm run tokens && npm run dev
```

## 📁 File Structure

```
GitHub Repo (cca-design-tokens)
└── tokens.json              # Source of truth from Figma

Your Project
├── tokens/
│   ├── colors.json          # Converted color tokens
│   ├── spacing.json         # Spacing tokens (if any)
│   ├── typography.json      # Typography tokens (if any)
│   └── radius.json          # Border radius tokens (if any)
├── lib/
│   ├── tokens.js            # JavaScript exports
│   └── tokens.css           # CSS custom properties
└── scripts/
    ├── sync-from-token-studio.js  # Auto sync (needs token)
    └── manual-sync.js              # Manual sync (no token)
```

## 💡 Pro Tips

1. **Always check GitHub first**: If Token Studio says "synced" but you don't see changes, check if a PR was created
2. **Use manual sync for development**: No need to set up GitHub token
3. **Check the token showcase**: Visit `/tokens` route to see all your design tokens
4. **Keep spacing/typography**: If you add spacing or typography tokens to Figma, they'll automatically sync too

## 🆘 Still Having Issues?

1. **Check the GitHub repo directly**: 
   - https://github.com/christopher-milne-design/cca-design-tokens
   - Look at `tokens.json` - does it have your changes?

2. **Test the conversion**:
   ```bash
   node scripts/test-conversion.js
   ```

3. **Clean and resync**:
   ```bash
   rm -rf tokens/*.json
   npm run sync:manual
   npm run tokens
   ```

4. **Check Token Studio in Figma**:
   - Make sure you're editing the right file
   - Check which tokens are selected for sync
   - Verify GitHub sync is enabled

---

**Quick Reference Card:**
```bash
# Made changes in Figma? Run these 3 commands:
cd /tmp && git pull origin main  # (if repo already cloned)
npm run sync:manual              # Pull tokens from GitHub
npm run tokens                   # Generate Tailwind classes
```
