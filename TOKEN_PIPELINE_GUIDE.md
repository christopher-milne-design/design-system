# Token Pipeline: Figma → Token Studio → GitHub → Style Dictionary → Tailwind

## 🎯 Overview

Your design token pipeline is **fully operational** and working as follows:

```
Figma Variables
    ↓ (Token Studio Plugin)
Token Studio (UI updates)
    ↓ (Sync to GitHub)
GitHub Repo: christopher-milne-design/cca-design-tokens
    ↓ (npm run sync:token-studio)
tokens/*.json (Local files)
    ↓ (npm run tokens / Style Dictionary)
lib/tokens.js + lib/tokens.css
    ↓ (Tailwind Config)
Available as Tailwind Classes
```

## ✅ What's Currently Working

### 1. **Token Categories in Sync**
- ✅ **Colors**: 11 color palettes (mountain-mist, neutral, marron, jaune-clair, rose, jaune, celadon, bleu-clair, rouge, orange, vert, bleu)
- ✅ **Spacing**: xs → 5xl (0.25rem → 8rem)
- ✅ **Typography**: Font sizes (xs → 7xl), weights (normal → bold), line heights (tight, normal, relaxed)
- ✅ **Border Radius**: none → full (0 → 9999px)

### 2. **Infrastructure**
- ✅ Style Dictionary configured with custom formatters
- ✅ Tailwind config imports and flattens tokens
- ✅ GitHub Actions workflow for automated sync (daily at 9 AM UTC)
- ✅ Manual sync scripts available

### 3. **Generated Files**
- `lib/tokens.js` - JavaScript exports for programmatic use
- `lib/tokens.css` - CSS custom properties and utility classes
- `tokens/*.json` - Source token files organized by category

## 🚀 Daily Workflow

### Making Changes in Figma

1. **Update variables in Figma** using Token Studio plugin
2. **Sync from Token Studio** → pushes to GitHub repo
3. **Automatic sync happens** (GitHub Actions runs daily at 9 AM UTC)

   OR manually trigger:
   ```bash
   npm run sync:token-studio  # Fetch from GitHub
   npm run tokens             # Generate Tailwind tokens
   ```

### Using Tokens in Your Code

#### Method 1: Tailwind Classes (Recommended)
```jsx
// Colors
<div className="bg-bleu-500 text-neutral-50">
  Blue background with light text
</div>

// Spacing
<div className="p-md m-lg">
  Medium padding, large margin
</div>

// Typography
<h1 className="text-3xl font-bold leading-tight">
  Bold heading
</h1>

// Border Radius
<div className="rounded-xl">
  Extra large border radius
</div>
```

#### Method 2: CSS Custom Properties
```css
.my-component {
  background-color: var(--color-bleu-500);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-xl);
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
}
```

#### Method 3: JavaScript/TypeScript Import
```tsx
import { tokens } from '@/lib/tokens';

<div style={{
  backgroundColor: tokens.colors.bleu['500'],
  padding: tokens.spacing.md,
  borderRadius: tokens.borderRadius.xl
}}>
  Content
</div>
```

## 📋 NPM Scripts Reference

```bash
# Token Management
npm run sync:token-studio    # Fetch tokens from GitHub repo
npm run tokens              # Run Style Dictionary to generate tokens
npm run tokens:watch        # Watch for token changes and rebuild

# Development
npm run dev                 # Run tokens + start dev server
npm run build              # Run tokens + build for production

# Testing
npm run test:sync          # Test token sync (if available)
```

## 🔍 Testing Your Pipeline

### View Token Showcase
1. Start dev server: `npm run dev`
2. Visit: `http://localhost:3000/tokens`
3. You'll see all your design tokens visualized

### Manual Token Sync Test
```bash
# 1. Fetch latest tokens from GitHub
npm run sync:token-studio

# 2. Generate Tailwind tokens
npm run tokens

# 3. Check the output
cat lib/tokens.js
```

## 🔧 Configuration Files

### `style-dictionary.config.mjs`
- Defines source token paths (`tokens/**/*.json`)
- Custom formatters for Tailwind theme and CSS
- Outputs to `lib/tokens.js` and `lib/tokens.css`

### `tailwind.config.js`
- Imports generated tokens from `lib/tokens.js`
- Flattens nested color objects (e.g., `bleu.500` → `bleu-500`)
- Extends Tailwind's default theme

### `scripts/sync-from-token-studio.js`
- Fetches tokens from GitHub using API
- Converts Token Studio format to Style Dictionary format
- Saves to individual JSON files by category

### `.github/workflows/sync-tokens.yml`
- Runs daily at 9 AM UTC
- Can be manually triggered
- Auto-commits changes with `[skip ci]` tag

## 🎨 Token Naming Conventions

### Colors
```
{colorName}-{shade}
Examples: bleu-500, neutral-50, rouge-900
```

### Spacing
```
{size}
Examples: xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl
```

### Typography
```
Font Sizes: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl
Font Weights: normal, medium, semibold, bold
Line Heights: tight, normal, relaxed
```

### Border Radius
```
none, sm, md, lg, xl, 2xl, full
```

## 🔐 Environment Variables

Required in `.env.local`:
```bash
# For token sync
GITHUB_TOKEN=your_github_personal_access_token
TOKEN_STUDIO_REPO=christopher-milne-design/cca-design-tokens

# For Contentful (if using)
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

## 🐛 Troubleshooting

### Tokens not updating?
1. Check GitHub Actions logs for sync errors
2. Verify `GITHUB_TOKEN` has repo access
3. Ensure Token Studio is pushing to correct repo
4. Run manual sync: `npm run sync:token-studio`

### Tailwind classes not working?
1. Run `npm run tokens` to regenerate
2. Check `lib/tokens.js` exists and has content
3. Verify token name matches (e.g., `bleu-500`, not `bleu.500`)
4. Restart dev server

### Style Dictionary errors?
1. Check token JSON format matches expected structure
2. Ensure all tokens have `value` and `type` properties
3. Review `style-dictionary.config.mjs` formatters

## 📚 Adding New Token Types

To add a new token category (e.g., shadows, animations):

1. **Update `sync-from-token-studio.js`**:
   ```js
   case 'shadow':
     converted.shadows[tokenKey] = {
       value: value,
       type: 'shadow',
       ...(description && { description })
     };
     break;
   ```

2. **Update `style-dictionary.config.mjs`**:
   ```js
   else if (path[0] === 'shadow') {
     shadows[path[1]] = token.value;
   }
   ```

3. **Update `tailwind.config.js`**:
   ```js
   boxShadow: tokens.shadows || {},
   ```

## 🎯 Next Steps

1. ✅ **Pipeline is working** - Your tokens are syncing correctly
2. 🎨 **Update Figma variables** - Changes will flow through automatically
3. 🚀 **Use tokens in components** - Replace hardcoded values with token classes
4. 📝 **Document your design system** - Add descriptions in Token Studio
5. 🔄 **Set up GitHub Actions secrets** - For automated syncing

## 📖 Resources

- [Style Dictionary Docs](https://amzn.github.io/style-dictionary/)
- [Token Studio Plugin](https://tokens.studio/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [GitHub Actions](https://docs.github.com/en/actions)

---

**Current Token Count**: 144 color tokens + 9 spacing + 11 font sizes + 4 font weights + 3 line heights + 7 border radii = **178 design tokens** 🎉
