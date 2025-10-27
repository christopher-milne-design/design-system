import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Fast Performance",
    description: "Lightning-fast load times and optimized performance for the best user experience.",
    icon: "⚡",
  },
  {
    title: "Scalable Architecture",
    description: "Built to grow with your business, from startup to enterprise scale.",
    icon: "📈",
  },
  {
    title: "Easy Integration",
    description: "Seamlessly integrate with your existing tools and workflows.",
    icon: "🔗",
  },
  {
    title: "Secure by Default",
    description: "Enterprise-grade security and compliance built into every feature.",
    icon: "🔒",
  },
  {
    title: "24/7 Support",
    description: "Our dedicated team is here to help you succeed around the clock.",
    icon: "💬",
  },
  {
    title: "Custom Solutions",
    description: "Tailored solutions that fit your unique business requirements.",
    icon: "🎯",
  },
];

// Vibrant brand colors from guidelines
const brandColors = [
  '#FF5B8F', // rose
  '#F9DC5C', // jaune
  '#7EC4FC', // bleu clair
  '#20EA57', // vert
  '#F77C41', // orange
  '#B6D1AE', // celadon
];

export default function Features() {
  return (
    <section className="bg-white px-4 py-24">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-5xl font-black uppercase tracking-tight md:text-6xl lg:text-7xl">
            Why Choose Us
          </h2>
          <p className="mx-auto max-w-3xl text-xl font-medium text-foreground/80">
            Discover the features that make our platform the perfect choice for your business.
          </p>
        </div>
        <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-12 transition-all hover:scale-105"
              style={{ backgroundColor: brandColors[index % brandColors.length] }}
            >
              <div className="mb-4 text-6xl">{feature.icon}</div>
              <h3 className="mb-4 text-2xl font-black uppercase text-white">{feature.title}</h3>
              <p className="text-lg font-medium text-white/90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
