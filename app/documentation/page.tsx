export default function Documentation() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6" style={{ letterSpacing: '-0.02em' }}>
          Documentation
        </h1>
        <p className="text-xl text-text-secondary mb-12 max-w-3xl leading-relaxed">
          Comprehensive guides, best practices, and technical documentation for the Canada Council for the Arts Design System.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a href="/changelog" className="bg-neutral-100 p-8 rounded-lg border-2 border-transparent hover:border-brand-primary transition-all">
            <h2 className="text-2xl font-bold text-text-primary mb-3" style={{ letterSpacing: '-0.02em' }}>
              Changelog
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              View recent updates, features, and improvements synced from Linear.
            </p>
            <span className="text-brand-primary font-semibold">View changelog →</span>
          </a>

          <div className="bg-neutral-100 p-8 rounded-lg border-2 border-neutral-200">
            <h2 className="text-2xl font-bold text-text-primary mb-3" style={{ letterSpacing: '-0.02em' }}>
              Coming Soon
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Full documentation including getting started guides, design principles, 
              accessibility guidelines, and API references.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
