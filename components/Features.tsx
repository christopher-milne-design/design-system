import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Artist Story: Feature Article",
    description: "Discover the stories behind the artists shaping Canada's cultural landscape.",
    image: "/images/features/artist-story.jpg",
    colorClass: "bg-rose-500",
  },
  {
    title: "Featured Misha Maseka: Not That Deep",
    description: "An intimate look at creative expression and personal connection.",
    image: "/images/features/misha-maseka.png",
    colorClass: "bg-jaune-400",
  },
  {
    title: "Featured Music All Around",
    description: "Experience the rich diversity of musical performances across Canada.",
    image: "/images/features/music-all-around.png",
    colorClass: "bg-bleu-clair-500",
  },
  {
    title: "Research Cards Impact",
    description: "Explore the data and insights shaping arts and culture policy.",
    image: "/images/features/research-impact.jpg",
    colorClass: "bg-vert-400",
  },
  {
    title: "Arts Across Canada",
    description: "Connect with artistic communities from coast to coast to coast.",
    image: "/images/features/arts-canada.jpg",
    colorClass: "bg-orange-500",
  },
  {
    title: "Featured Homesick",
    description: "Electronic music and live performance pushing creative boundaries.",
    image: "/images/features/homesick.jpg",
    colorClass: "bg-celadon-500",
  },
  {
    title: "Explore and Create",
    description: "Tools and resources to support your artistic journey and growth.",
    image: "/images/features/explore-create.png",
    colorClass: "bg-bleu-500",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
            Why Choose Us
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary">
            Discover the features that make our platform the perfect choice for your business.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group relative overflow-hidden border border-border-default bg-white hover:shadow-lg transition-all duration-300"
            >
              {/* Accent color bar */}
              <div className={`absolute top-0 left-0 w-full h-1.5 ${feature.colorClass}`} />
              
              {/* Feature image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              
              <CardHeader className="pt-6">
                <CardTitle className="text-xl font-bold text-text-primary">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-text-secondary leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
