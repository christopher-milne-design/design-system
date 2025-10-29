import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="bg-surface-elevated py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-text-secondary">
            Join thousands of satisfied customers who have transformed their business with our platform.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button 
              size="lg" 
              className="bg-brand-primary hover:bg-brand-primary-hover text-white font-medium shadow-sm hover:shadow-md transition-all"
            >
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              className="bg-brand-secondary hover:bg-brand-secondary-hover text-white font-medium shadow-sm hover:shadow-md transition-all"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
