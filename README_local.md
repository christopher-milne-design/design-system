# Next.js Landing Page

A modern, responsive landing page built with Next.js, ShadCN UI, Tailwind CSS, and Contentful CMS. Optimized for deployment on Vercel.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **CMS**: [Contentful](https://www.contentful.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## Features

-  Lightning-fast performance with Next.js App Router
-  Beautiful, accessible UI components from ShadCN
-  Fully responsive design
-  Dynamic content management via Contentful CMS
-  Optimized for Vercel deployment
-  Type-safe with TypeScript
-  SEO-ready

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Main landing page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # ShadCN UI components
│   ├── Hero.tsx          # Hero section
│   ├── Features.tsx      # Features section
│   └── CTA.tsx           # Call-to-action section
├── lib/                   # Utility functions
│   ├── contentful.ts     # Contentful client & helpers
│   └── utils.ts          # General utilities
└── vercel.json           # Vercel deployment config
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Contentful account with Space ID and API tokens
- (Optional) Vercel account for deployment

### Installation

1. **Install dependencies** (if not already done)

```bash
npm install
```

2. **Environment variables**

Your Contentful credentials are already configured in `.env.local`. To update them or set up in a new environment, edit `.env.local`:

```env
CONTENTFUL_SPACE_ID=mnmbj6wxal0l
CONTENTFUL_ACCESS_TOKEN=your_delivery_api_token
CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_api_token
```

3. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your landing page.

## Contentful Setup

### Content Model

To use the example Contentful integration, create a content type called `landingPage` with the following fields:

- `title` (Short text)
- `subtitle` (Long text)
- `heroButtonText` (Short text)
- `featuresHeading` (Short text)
- `ctaHeading` (Short text)
- `ctaDescription` (Long text)

### Fetching Content

The project includes helper functions in `lib/contentful.ts`:

```typescript
import { getLandingPageContent, getEntries } from '@/lib/contentful';

// Fetch landing page content
const content = await getLandingPageContent();

// Fetch any content type
const entries = await getEntries('yourContentType');
```

## Deployment on Vercel

### Quick Deploy

1. **Push your code to GitHub**

```bash
git add .
git commit -m "Initial commit"
git remote add origin your-repo-url
git push -u origin main
```

2. **Deploy to Vercel**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

- Import your GitHub repository
- Add environment variables in the Vercel dashboard:
  - `CONTENTFUL_SPACE_ID`
  - `CONTENTFUL_ACCESS_TOKEN`
  - `CONTENTFUL_PREVIEW_ACCESS_TOKEN` (optional)

3. **Deploy!**

Vercel will automatically build and deploy your site.

### Environment Variables on Vercel

Set your environment variables in the Vercel dashboard:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add the required variables for Production, Preview, and Development environments

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Adding More Components

Add more ShadCN components:

```bash
npx shadcn@latest add [component-name]
```

Browse available components at [ui.shadcn.com](https://ui.shadcn.com/).

### Styling

- Edit `app/globals.css` for global styles
- Modify Tailwind config in `tailwind.config.ts`
- Update ShadCN theme variables in `app/globals.css`

### Content

- Update components in `components/` directory
- Modify page layout in `app/page.tsx`
- Integrate more Contentful content types in `lib/contentful.ts`

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [ShadCN UI Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Contentful Documentation](https://www.contentful.com/developers/docs/)
- [Vercel Documentation](https://vercel.com/docs)

## License

MIT
