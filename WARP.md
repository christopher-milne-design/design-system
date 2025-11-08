# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Core Commands
```bash
npm run dev       # Start development server at localhost:3000
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Run ESLint
```

### Adding ShadCN Components
```bash
npx shadcn@latest add [component-name]
```

### Design Token Commands
```bash
npm run tokens          # Build tokens from JSON sources
npm run tokens:watch    # Watch and rebuild tokens on changes
npm run sync:auto       # Sync tokens from GitHub repo and rebuild
```

### Storybook Commands
```bash
npm run storybook       # Start Storybook dev server at localhost:6006
npm run build-storybook # Build static Storybook site
```

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 with ShadCN UI components (New York style)
- **Typography**: Helvetica Neue for headings, Echo for body text
- **CMS**: Contentful for dynamic content management
- **Features**: React Compiler enabled for optimized rendering

### Project Structure
This is a single-page landing application with a modular component architecture:

```
app/
├── layout.tsx           # Root layout with Echo font configuration
├── page.tsx             # Main page composing Hero, Features, and CTA sections
└── globals.css          # Tailwind, ShadCN theme, and font family rules

public/
└── fonts/
    └── echo/            # Echo font files (woff, woff2)

components/
├── ui/                  # ShadCN components (Button, Card, etc.)
├── Hero.tsx             # Hero section with CTAs
├── Features.tsx         # Feature grid (6 feature cards)
└── CTA.tsx              # Call-to-action section

lib/
├── contentful.ts        # Contentful client, types, and fetch utilities
├── tokens.js            # Auto-generated design tokens (do not edit directly)
├── tailwind-tokens-plugin.js  # Plugin to expose tokens to Tailwind
└── utils.ts             # cn() utility for class merging

tokens/
├── colors.json          # Primitive colour tokens
├── semantic.json        # Semantic colour tokens
├── spacing.json         # Spacing scale tokens
├── typography.json      # Typography tokens (includes font families)
├── typography-system.json # Complete typography scale system
└── radius.json          # Border radius tokens
```

### Key Architectural Patterns

#### Path Aliases
The project uses `@/*` alias for imports (e.g., `@/components/Hero`), configured in both `tsconfig.json` and `components.json`.

#### ShadCN UI Integration
- **Style**: New York variant
- **Base colour**: Neutral
- **CSS Variables**: Enabled for theming
- **Icon Library**: Lucide React
- Components live in `components/ui/` and use the `cn()` utility for conditional styling

#### Contentful Integration
The `lib/contentful.ts` module provides:
- A singleton Contentful client initialized with env vars
- `getLandingPageContent()` - fetches content type "landingPage"
- `getEntries(contentType)` - generic content fetcher
- TypeScript interface `LandingPageContent` for type safety

**Note**: The current implementation has Contentful functions defined but they are not yet consumed by the components, which use hardcoded content.

### Environment Variables
Required in `.env.local`:
```
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_delivery_api_token
CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_api_token  # optional
```

### Contentful Content Model
The "landingPage" content type expects these fields:
- `title` (Short text)
- `subtitle` (Long text)
- `heroButtonText` (Short text)
- `featuresHeading` (Short text)
- `ctaHeading` (Short text)
- `ctaDescription` (Long text)

### Component Architecture
Components follow a consistent pattern:
- Server Components by default (no "use client" directives)
- Section-based layout with responsive containers
- Tailwind utility classes for styling
- ShadCN UI components for interactive elements

### Deployment
Configured for Vercel deployment via `vercel.json` with environment variable references using `@` prefix for Vercel secrets.

## Development Guidelines

### When Modifying Components
- Use the `cn()` utility from `@/lib/utils` for conditional classes
- Follow existing responsive breakpoints: `md:` (768px), `lg:` (1024px)
- Maintain the established spacing pattern: `px-4`, `py-20` for sections
- Use ShadCN components from `@/components/ui/` for UI elements

### When Adding Contentful Integration
- Add TypeScript interfaces in `lib/contentful.ts`
- Use async/await with try-catch for Contentful queries
- Call Contentful functions in Server Components (they are async)
- Handle null/undefined cases when content is unavailable

### When Adding New Pages
- Create route folders in `app/` directory (App Router pattern)
- Include `page.tsx` for the route component
- Optionally add `layout.tsx` for route-specific layouts
- Update metadata in layout files for SEO

### TypeScript Configuration
- Strict mode is enabled
- Path alias `@/*` maps to project root
- Target ES2017 for modern browser support
- JSX transform uses react-jsx (new JSX transform)

### Typography & Fonts

**Font Stack:**
- **Headings (h1-h6)**: Helvetica Neue (system font)
- **Body Text**: Echo (custom font, loaded locally)

**Font Files:**
- Echo fonts are stored in `public/fonts/echo/` as `.woff` and `.woff2` files
- Font weights: Regular (400), Medium (500), Semibold (600), Bold (700)
- Includes italic variants for all weights

**Configuration:**
1. `app/layout.tsx` - Loads Echo font using Next.js `localFont`
2. `app/globals.css` - Applies fonts via CSS:
   - `body` uses Echo font family
   - `h1-h6` use Helvetica Neue
3. `tokens/typography.json` - Defines `fontFamily.heading` and `fontFamily.body` tokens

**Typography System:**
- Full responsive scale in `tokens/typography-system.json`
- 1.33x scale ratio for desktop, adjusted for mobile
- Heading line height: 1.2x (tight)
- Body line height: 1.5x (readable)
- Letter spacing: -2% for headings, 0% for body, +5% for CAPS labels

## Design Tokens System

### Token Architecture
The project uses a two-tier token system:

1. **Primitive Tokens**: Base design values (colors, spacing, typography, etc.) stored in `tokens/*.json`
2. **Semantic Tokens**: Purpose-based tokens that reference primitives, defined in `tokens/semantic.json`

### Token Studio Integration
Tokens are stored in Token Studio format (Figma Tokens plugin) and transformed via Style Dictionary:

**Token Studio Format** (`tokens/*.json`):
```json
{
  "colour": {
    "bleu": {
      "500": {
        "value": "#1a70ef",
        "type": "colour"
      }
    }
  }
}
```

**Semantic Token Format** (`tokens/semantic.json`):
```json
{
  "semantic": {
    "brand": {
      "primary": {
        "value": "{colour.bleu.500}",
        "type": "colour",
        "description": "Primary brand colour"
      }
    }
  }
}
```

### Build Process
1. Token JSON files are stored in `tokens/` directory
2. Style Dictionary transforms them into `lib/tokens.js`
3. The Tailwind plugin (`lib/tailwind-tokens-plugin.js`) generates CSS variables
4. CSS variables are exposed in `app/globals.css` via `@theme` block

### Using Tokens in Components

**Primitive Tokens:**
- `bg-bleu-500` - Direct primitive colour
- `text-neutral-400` - Direct primitive text colour
- `p-md` - Spacing token

**Semantic Tokens:**
- `bg-brand-primary` - Primary brand colour
- `hover:bg-brand-primary-hover` - Hover state
- `text-text-primary` - Primary text colour
- `text-text-muted` - Muted text
- `bg-surface-card` - Card backgrounds
- `bg-feedback-success` - Success state
- `border-border-default` - Default borders

### Syncing with Token Studio (Figma)

**Push to GitHub:**
1. Edit tokens in Token Studio (Figma plugin)
2. Configure Token Studio to sync with GitHub
3. Push changes from Token Studio to your repo

**Pull from GitHub:**
```bash
npm run sync:auto  # Clones/pulls token repo and rebuilds
```

**Workflow:**
1. Design team updates tokens in Figma via Token Studio
2. Token Studio pushes to GitHub repository
3. Developers run `npm run sync:auto` to pull latest tokens
4. Tokens are automatically transformed and rebuilt
5. Dev server picks up changes via HMR

### Token File Structure
- `tokens/colors.json` - All primitive colour palettes
- `tokens/semantic.json` - Semantic colour mappings
- `tokens/spacing.json` - Spacing scale
- `tokens/typography.json` - Font sizes, weights, line heights
- `tokens/radius.json` - Border radius values

### Modifying Tokens

**Option 1: Via Token Studio (Recommended)**
- Edit in Figma using Token Studio plugin
- Push changes to GitHub
- Run `npm run sync:auto`

**Option 2: Direct Edit (Local Only)**
- Edit JSON files in `tokens/` directory
- Run `npm run tokens` to rebuild
- Changes are local until committed

### Style Dictionary Configuration
The transformation is configured in `style-dictionary.config.mjs`:
- Resolves Token Studio `{token.reference}` syntax
- Converts to CSS variable format `var(--token-name)`
- Generates both `tokens.js` and `tokens.css`
- Handles semantic token references to primitives

## Storybook Integration

### Overview
Storybook provides an interactive showcase for the design system and component library, demonstrating how Token Studio tokens are applied in real components.

### Running Storybook
```bash
npm run storybook       # Dev server at localhost:6006
npm run build-storybook # Build static site for deployment
```

### Story Structure
Stories are organized in `stories/` directory:

```
stories/
├── Tokens.stories.tsx      # Design token showcase (colors, spacing, typography)
├── Button.stories.tsx      # ShadCN Button component variations
└── Hero.stories.tsx        # Hero section with different content
```

### Token Showcase Stories
The `Tokens.stories.tsx` file demonstrates:
- **Color Tokens**: All semantic colors (brand, text, surface, feedback, border)
- **Spacing Tokens**: Visual representation of the spacing scale
- **Typography System**: Font families, sizes, and styles

These stories automatically reflect changes when you sync tokens from Token Studio via `npm run sync:auto`.

### Component Stories
Component stories show:
- All variants and states of UI components
- Integration with design tokens
- Interactive controls for testing different props
- Auto-generated documentation via `tags: ['autodocs']`

### Configuration
- `.storybook/main.ts` - Storybook configuration, addons, and framework settings
- `.storybook/preview.ts` - Imports `app/globals.css` to load Tailwind and token styles
- Static assets from `public/` are automatically available

### Addons Enabled
- **@storybook/addon-docs** - Auto-generated documentation
- **@storybook/addon-a11y** - Accessibility testing
- **@storybook/addon-vitest** - Visual testing integration
- **@chromatic-com/storybook** - Visual regression testing

### Token Pipeline Integration
Storybook is fully integrated with the token pipeline:

1. Edit tokens in Token Studio (Figma)
2. Sync via `npm run sync:auto`
3. Tokens rebuild automatically
4. Storybook hot-reloads with new token values
5. See changes reflected in all component stories

### Writing New Stories

**For Server Components:**
Since Next.js server components can't be used directly in Storybook, create a client wrapper:

```tsx
// Create a client version without async/await
const ComponentClient = ({ prop }: Props) => {
  return (
    // Component JSX
  )
}

const meta: Meta<typeof ComponentClient> = {
  title: 'Category/ComponentName',
  component: ComponentClient,
}
```

**For Client Components:**
Export directly:

```tsx
const meta: Meta<typeof Component> = {
  title: 'Category/ComponentName',
  component: Component,
  tags: ['autodocs'],
}
```

### Best Practices
- Use semantic token classes in stories to demonstrate the design system
- Create stories that show state variations (hover, active, disabled, etc.)
- Document token usage in story descriptions
- Keep stories simple and focused on one concept
- Use `parameters: { layout: 'fullscreen' }` for full-page sections
