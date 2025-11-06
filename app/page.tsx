import Link from "next/link";
import TokenPipeline from "@/components/TokenPipeline";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-orange-500">
        <div className="max-w-7xl mx-auto px-8 py-32 md:py-40">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              <span className="inline-block bg-jaune-400 text-neutral-400 px-8 py-4 mb-4">
                A Design System
              </span>
              <br />
              <span className="inline-block bg-jaune-400 text-neutral-400 px-8 py-4">
                for the Canada Council
              </span>
              <br />
              <span className="inline-block bg-jaune-400 text-neutral-400 px-8 py-4 mt-4">
                for the Arts
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl leading-relaxed font-medium">
              Built on our brand guidelines. Powered by design tokens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/foundations" 
                className="inline-flex items-center justify-center bg-neutral-400 hover:bg-neutral-300 text-white px-8 py-4 font-bold text-lg transition-colors"
              >
                View Foundations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Token Pipeline */}
      <TokenPipeline />

      {/* CTA Section */}
      <section className="bg-vert-500 py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>
            Ready to Explore?
          </h2>
          <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto leading-relaxed">
            Explore the foundation to see all design tokens, typography scales, and interactive components in action.
          </p>
          <Link 
            href="/foundations" 
            className="inline-block bg-neutral-400 hover:bg-neutral-300 text-white px-10 py-5 font-bold text-lg transition-colors"
          >
            View Foundations
          </Link>
        </div>
      </section>
    </main>
  );
}
