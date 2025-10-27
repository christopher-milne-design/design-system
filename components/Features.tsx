import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Fast Performance",
    description: "Lightning-fast load times and optimized performance for the best user experience.",
    icon: "⚡",
    colorClass: "bg-rose-500",
  },
  {
    title: "Scalable Architecture",
    description: "Built to grow with your business, from startup to enterprise scale.",
    icon: "📈",
    colorClass: "bg-jaune-400",
  },
  {
    title: "Easy Integration",
    description: "Seamlessly integrate with your existing tools and workflows.",
    icon: "🔗",
    colorClass: "bg-bleu-clair-500",
  },
  {
    title: "Secure by Default",
    description: "Enterprise-grade security and compliance built into every feature.",
    icon: "🔒",
    colorClass: "bg-vert-400",
  },
  {
    title: "24/7 Support",
    description: "Our dedicated team is here to help you succeed around the clock.",
    icon: "💬",
    colorClass: "bg-orange-500",
  },
  {
    title: "Custom Solutions",
    description: "Tailored solutions that fit your unique business requirements.",
    icon: "🎯",
    colorClass: "bg-celadon-500",
  },
];

export default function Features() {
  return (
    <section className="bg-surface-background px-4 py-24">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary" style={{ letterSpacing: '-0.02em' }}>
            Why Choose Us
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-text-secondary leading-relaxed">
            Discover the features that make our platform the perfect choice for your business.
          </p>
        </div>
        <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`${feature.colorClass} p-12 transition-all hover:scale-105`}
            >
              <div className="mb-4 text-6xl">{feature.icon}</div>
              <h3 className="mb-4 text-2xl font-bold text-text-inverse" style={{ letterSpacing: '-0.02em' }}>
                {feature.title}
              </h3>
              <p className="text-lg text-text-inverse/90 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
