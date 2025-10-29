import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-orange-500">
        <div className="max-w-7xl mx-auto px-8 py-32 md:py-40">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              <span className="inline-block bg-jaune-400 text-slate-900 px-6 py-3 mb-4">
                A Design System
              </span>
              <br />
              <span className="inline-block bg-jaune-400 text-slate-900 px-6 py-3">
                for the Canada Council
              </span>
              <br />
              <span className="inline-block bg-jaune-400 text-slate-900 px-6 py-3 mt-4">
                for the Arts
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl leading-relaxed font-medium">
              Built on our new brand guidelines. Powered by design tokens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/style-guide" 
                className="inline-flex items-center justify-center bg-neutral-400 hover:bg-neutral-300 text-white px-8 py-4 font-bold text-lg transition-colors"
              >
                View Foundation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Showcase */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-24 border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6" style={{ letterSpacing: '-0.02em' }}>
              Our Brand
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every color, every typeface, every spacing value from our brand guidelines—now a living, breathing system
            </p>
          </div>

          {/* Color Palette Preview */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            <div className="group cursor-pointer">
              <div className="h-32 bg-bleu-500 border-4 border-white shadow-lg transition-transform group-hover:scale-105" />
              <p className="text-center mt-3 font-bold text-slate-700">Bleu</p>
            </div>
            <div className="group cursor-pointer">
              <div className="h-32 bg-orange-500 border-4 border-white shadow-lg transition-transform group-hover:scale-105" />
              <p className="text-center mt-3 font-bold text-slate-700">Orange</p>
            </div>
            <div className="group cursor-pointer">
              <div className="h-32 bg-vert-500 border-4 border-white shadow-lg transition-transform group-hover:scale-105" />
              <p className="text-center mt-3 font-bold text-slate-700">Vert</p>
            </div>
            <div className="group cursor-pointer">
              <div className="h-32 bg-rose-500 border-4 border-white shadow-lg transition-transform group-hover:scale-105" />
              <p className="text-center mt-3 font-bold text-slate-700">Rose</p>
            </div>
            <div className="group cursor-pointer">
              <div className="h-32 bg-jaune-500 border-4 border-white shadow-lg transition-transform group-hover:scale-105" />
              <p className="text-center mt-3 font-bold text-slate-700">Jaune</p>
            </div>
          </div>

          <div className="bg-white p-10 border-l-8 border-bleu-500 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-5xl font-bold text-bleu-600 mb-2">10</p>
                <p className="text-slate-600 font-semibold">Color Palettes</p>
                <p className="text-sm text-slate-500 mt-1">With 11 shades each</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-orange-600 mb-2">24</p>
                <p className="text-slate-600 font-semibold">Typography Scales</p>
                <p className="text-sm text-slate-500 mt-1">Desktop & mobile optimized</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-vert-600 mb-2">50+</p>
                <p className="text-slate-600 font-semibold">Design Tokens</p>
                <p className="text-sm text-slate-500 mt-1">Spacing, radius, shadows</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-neutral-100 border-y-4 border-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center" style={{ letterSpacing: '-0.02em' }}>
            Built With
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {/* Next.js */}
            <a 
              href="https://nextjs.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 group"
            >
              <div className="h-16 flex items-center justify-center">
                <svg className="h-12 w-auto transition-opacity group-hover:opacity-70" viewBox="0 0 180 180" fill="none">
                  <mask id="mask0_408_139" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                    <circle cx="90" cy="90" r="90" fill="black"/>
                  </mask>
                  <g mask="url(#mask0_408_139)">
                    <circle cx="90" cy="90" r="90" fill="black"/>
                    <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_139)"/>
                    <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_139)"/>
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear_408_139" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white"/>
                      <stop offset="1" stopColor="white" stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_408_139" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white"/>
                      <stop offset="1" stopColor="white" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-text-primary mb-1 group-hover:text-brand-primary transition-colors" style={{ letterSpacing: '-0.02em' }}>Next.js 16</p>
                <p className="text-sm text-text-secondary">React Framework</p>
              </div>
            </a>

            {/* Tailwind CSS */}
            <a 
              href="https://tailwindcss.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 group"
            >
              <div className="h-16 flex items-center justify-center">
                <svg className="h-12 w-auto transition-opacity group-hover:opacity-70" viewBox="0 0 248 248">
                  <path fill="#06B6D4" d="M124,0C70.8,0,46.4,26.4,40,79.2c9.6-26.4,20.8-36.4,33.6-30c7.3,1.8,12.5,7,18.3,12.8 C103.7,73.8,118.1,88,148,88c53.2,0,77.6-26.4,84-79.2c-9.6,26.4-20.8,36.4-33.6,30c-7.3-1.8-12.5-7-18.3-12.8 C168.3,14.2,153.9,0,124,0z M76,88c-53.2,0-77.6,26.4-84,79.2c9.6-26.4,20.8-36.4,33.6-30c7.3,1.8,12.5,7,18.3,12.8 C55.7,161.8,70.1,176,100,176c53.2,0,77.6-26.4,84-79.2c-9.6,26.4-20.8,36.4-33.6,30c-7.3-1.8-12.5-7-18.3-12.8 C120.3,102.2,105.9,88,76,88z"/>
                </svg>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-text-primary mb-1 group-hover:text-brand-primary transition-colors" style={{ letterSpacing: '-0.02em' }}>Tailwind CSS v4</p>
                <p className="text-sm text-text-secondary">CSS Framework</p>
              </div>
            </a>

            {/* Token Studio */}
            <a 
              href="https://tokens.studio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 group"
            >
              <div className="h-16 flex items-center justify-center">
                <svg className="h-12 w-auto transition-opacity group-hover:opacity-70" viewBox="0 0 200 200" fill="none">
                  <rect width="200" height="200" rx="40" fill="#8B5CF6"/>
                  <path d="M60 100L100 60L140 100L100 140L60 100Z" fill="white"/>
                  <circle cx="100" cy="100" r="15" fill="#8B5CF6"/>
                </svg>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-text-primary mb-1 group-hover:text-brand-primary transition-colors" style={{ letterSpacing: '-0.02em' }}>Token Studio</p>
                <p className="text-sm text-text-secondary">Design Tokens</p>
              </div>
            </a>

            {/* ShadCN UI */}
            <a 
              href="https://ui.shadcn.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 group"
            >
              <div className="h-16 flex items-center justify-center">
                <svg className="h-12 w-auto transition-opacity group-hover:opacity-70" viewBox="0 0 256 256" fill="none">
                  <rect width="256" height="256" rx="60" fill="black"/>
                  <path d="M128 34L94 98L128 162L162 98L128 34Z" fill="white"/>
                  <path d="M128 162L94 226H162L128 162Z" fill="white" opacity="0.7"/>
                </svg>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-text-primary mb-1 group-hover:text-brand-primary transition-colors" style={{ letterSpacing: '-0.02em' }}>ShadCN UI</p>
                <p className="text-sm text-text-secondary">Components</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 py-20 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6" style={{ letterSpacing: '-0.02em' }}>
          Ready to Explore?
        </h2>
        <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
          Explore the foundation to see all design tokens, typography scales, and interactive components in action.
        </p>
        <Link 
          href="/style-guide" 
          className="inline-block bg-brand-primary hover:bg-brand-primary-hover text-neutral-50 px-10 py-5 rounded-lg font-semibold text-lg transition-colors"
        >
          View Foundation
        </Link>
      </section>
    </main>
  );
}
