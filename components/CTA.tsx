import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="bg-neutral-400 px-4 py-24">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-rose-500 via-jaune-400 to-bleu-clair-500 px-8 py-24 text-center md:px-16 rounded-lg">
          <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-text-inverse" style={{ letterSpacing: '-0.02em' }}>
            Ready to Get Started?
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-xl md:text-2xl text-text-inverse/95 leading-relaxed">
            Join thousands of satisfied customers who have transformed their business with our platform.
          </p>
          <div className="flex flex-col gap-6 sm:flex-row sm:justify-center">
            <Button 
              size="lg" 
              className="bg-surface-elevated hover:bg-neutral-100 active:bg-neutral-200 px-12 py-7 text-xl font-semibold text-text-primary transition-colors"
            >
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              className="bg-brand-primary hover:bg-brand-primary-hover active:bg-brand-primary-active px-12 py-7 text-xl font-semibold text-text-inverse transition-colors"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
