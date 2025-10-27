import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="bg-black px-4 py-24">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-[#FF5B8F] via-[#F9DC5C] to-[#7EC4FC] px-8 py-24 text-center md:px-16">
          <h2 className="mb-6 text-5xl font-black uppercase tracking-tight text-white md:text-6xl lg:text-7xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-xl font-medium text-white/95 md:text-2xl">
            Join thousands of satisfied customers who have transformed their business with our platform.
          </p>
          <div className="flex flex-col gap-6 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-white px-12 py-7 text-xl font-bold text-black hover:bg-white/90">
              Start Free Trial
            </Button>
            <Button size="lg" className="bg-[#1A70EF] px-12 py-7 text-xl font-bold text-white hover:bg-[#105ECB]">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
