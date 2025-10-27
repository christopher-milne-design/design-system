import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-bleu-50 via-neutral-50 to-celadon-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6" style={{ letterSpacing: '-0.02em' }}>
              Design System
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
              A comprehensive design system built with <strong>Token Studio</strong>, <strong>Style Dictionary</strong>, 
              <strong>Tailwind CSS</strong>, and <strong>Next.js</strong>. Featuring semantic tokens, 
              a calculated typography system, and full Figma integration.
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                href="/style-guide" 
                className="bg-brand-primary hover:bg-brand-primary-hover text-neutral-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Explore Style Guide
              </Link>
              <Link 
                href="/components" 
                className="bg-neutral-100 hover:bg-neutral-200 text-neutral-400 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                View Components
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4" style={{ letterSpacing: '-0.02em' }}>
            System Features
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed">
            Everything you need to build consistent, scalable interfaces
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1: Design Tokens */}
          <Link href="/style-guide#semantic" className="group">
            <div className="bg-neutral-100 p-8 rounded-lg border-2 border-transparent hover:border-brand-primary transition-all">
              <div className="w-12 h-12 bg-brand-primary rounded-lg mb-4 flex items-center justify-center text-neutral-50 text-2xl">
                🎨
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-3" style={{ letterSpacing: '-0.02em' }}>
                Semantic Tokens
              </h3>
              <p className="text-text-secondary mb-4 leading-relaxed">
                Purpose-based design tokens that reference primitives. Change your entire color scheme by updating semantic mappings.
              </p>
              <span className="text-brand-primary font-semibold group-hover:underline">Explore tokens →</span>
            </div>
          </Link>

          {/* Feature 2: Typography */}
          <Link href="/style-guide#typography" className="group">
            <div className="bg-neutral-100 p-8 rounded-lg border-2 border-transparent hover:border-brand-primary transition-all">
              <div className="w-12 h-12 bg-brand-primary rounded-lg mb-4 flex items-center justify-center text-neutral-50 text-2xl">
                📝
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-3" style={{ letterSpacing: '-0.02em' }}>
                Typography System
              </h3>
              <p className="text-text-secondary mb-4 leading-relaxed">
                1.33x type scale with calculated line heights and letter-spacing. Optimized for marketing with proper heading and paragraph styles.
              </p>
              <span className="text-brand-primary font-semibold group-hover:underline">View typography →</span>
            </div>
          </Link>

          {/* Feature 3: Components */}
          <Link href="/components" className="group">
            <div className="bg-neutral-100 p-8 rounded-lg border-2 border-transparent hover:border-brand-primary transition-all">
              <div className="w-12 h-12 bg-brand-primary rounded-lg mb-4 flex items-center justify-center text-neutral-50 text-2xl">
                🧩
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-3" style={{ letterSpacing: '-0.02em' }}>
                Component Library
              </h3>
              <p className="text-text-secondary mb-4 leading-relaxed">
                Built with ShadCN UI components, customized with design tokens. All interactive states documented and showcased.
              </p>
              <span className="text-brand-primary font-semibold group-hover:underline">Browse components →</span>
            </div>
          </Link>

          {/* Feature 4: Token Studio */}
          <div className="bg-neutral-100 p-8 rounded-lg">
            <div className="w-12 h-12 bg-celadon-500 rounded-lg mb-4 flex items-center justify-center text-neutral-50 text-2xl">
              🔄
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-3" style={{ letterSpacing: '-0.02em' }}>
              Figma Integration
            </h3>
            <p className="text-text-secondary mb-4 leading-relaxed">
              Bidirectional sync with Figma via Token Studio. Designers update tokens in Figma, push to GitHub, developers pull and rebuild.
            </p>
            <span className="text-neutral-300 text-sm">Figma ↔ GitHub ↔ Code</span>
          </div>

          {/* Feature 5: Responsive */}
          <div className="bg-neutral-100 p-8 rounded-lg">
            <div className="w-12 h-12 bg-celadon-500 rounded-lg mb-4 flex items-center justify-center text-neutral-50 text-2xl">
              📱
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-3" style={{ letterSpacing: '-0.02em' }}>
              Responsive Scales
            </h3>
            <p className="text-text-secondary mb-4 leading-relaxed">
              Separate mobile and desktop typography scales. Components adapt gracefully across all breakpoints with consistent spacing.
            </p>
            <span className="text-neutral-300 text-sm">Mobile-first approach</span>
          </div>

          {/* Feature 6: Documentation */}
          <Link href="/style-guide" className="group">
            <div className="bg-neutral-100 p-8 rounded-lg border-2 border-transparent hover:border-brand-primary transition-all">
              <div className="w-12 h-12 bg-celadon-500 rounded-lg mb-4 flex items-center justify-center text-neutral-50 text-2xl">
                📚
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-3" style={{ letterSpacing: '-0.02em' }}>
                Interactive Docs
              </h3>
              <p className="text-text-secondary mb-4 leading-relaxed">
                Live examples, code snippets, and interactive demos. See every token, component state, and usage pattern in action.
              </p>
              <span className="text-brand-primary font-semibold group-hover:underline">Read the docs →</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-neutral-100 border-y border-neutral-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center" style={{ letterSpacing: '-0.02em' }}>
            Built With
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-2xl font-bold text-text-primary mb-2" style={{ letterSpacing: '-0.02em' }}>Next.js 16</p>
              <p className="text-sm text-text-secondary">React Framework</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-text-primary mb-2" style={{ letterSpacing: '-0.02em' }}>Tailwind v4</p>
              <p className="text-sm text-text-secondary">CSS Framework</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-text-primary mb-2" style={{ letterSpacing: '-0.02em' }}>Token Studio</p>
              <p className="text-sm text-text-secondary">Design Tokens</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-text-primary mb-2" style={{ letterSpacing: '-0.02em' }}>ShadCN UI</p>
              <p className="text-sm text-text-secondary">Components</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 py-20 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6" style={{ letterSpacing: '-0.02em' }}>
          Ready to Explore?
        </h2>
        <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
          Dive into the style guide to see all design tokens, typography scales, and interactive components in action.
        </p>
        <Link 
          href="/style-guide" 
          className="inline-block bg-brand-primary hover:bg-brand-primary-hover text-neutral-50 px-10 py-5 rounded-lg font-semibold text-lg transition-colors"
        >
          View Complete Style Guide
        </Link>
      </section>
    </main>
  );
}
