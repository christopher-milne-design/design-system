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

        <div className="bg-neutral-100 p-12 rounded-lg border-2 border-neutral-200 text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4" style={{ letterSpacing: '-0.02em' }}>
            Coming Soon
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            This section will include detailed documentation on getting started, design principles, 
            accessibility guidelines, contribution guidelines, and API references for all components and tokens.
          </p>
        </div>
      </div>
    </main>
  );
}
