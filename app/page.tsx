import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface-background">
      {/* Hero Section */}
      <section className="bg-bleu-500 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Bringing the arts to life
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
              The Canada Council for the Arts is proud to be Canada's public arts funder. The Council contributes to the vibrancy of a creative and diverse arts and literary scene through grants, services, prizes and payments to artists and arts organizations from Canada.
            </p>
            <Button className="bg-brand-primary hover:bg-brand-primary-hover text-white font-bold text-base px-6 py-3">
              Stay Informed
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 md:py-32 bg-surface-background">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center" style={{ letterSpacing: '-0.02em' }}>
            Featured
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="border-0 bg-white">
              <div className="relative w-full h-48 bg-neutral-200">
                <Image
                  src="/images/features/artist-story.jpg"
                  alt="Webinars"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-text-primary">Webinars and information sessions</CardTitle>
                <CardDescription className="text-text-secondary">Join us for webinars and an information session for guidance from a Program Officer.</CardDescription>
              </CardHeader>
            </Card>

            {/* Card 2 */}
            <Card className="border-0 bg-white">
              <div className="relative w-full h-48 bg-neutral-200">
                <Image
                  src="/images/features/misha-maseka.png"
                  alt="GGBooks"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardHeader>
                <div className="flex gap-2 mb-2">
                  <Badge className="bg-brand-primary text-white text-xs">New</Badge>
                </div>
                <CardTitle className="text-lg text-text-primary">GGBooks 2025 winners announced</CardTitle>
                <CardDescription className="text-text-secondary">The 2025 Governor General's Literary Award winners have been announced. Discover them at ggbooks.ca!</CardDescription>
              </CardHeader>
            </Card>

            {/* Card 3 */}
            <Card className="border-0 bg-white">
              <div className="relative w-full h-48 bg-neutral-200">
                <Image
                  src="/images/features/music-all-around.png"
                  alt="Annual Report"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-text-primary">Release of the Canada Council's 2024-25 Annual Report</CardTitle>
                <CardDescription className="text-text-secondary">$302.4M in total grants, prizes and payments awarded to recipients in 2,107 communities across Canada.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 md:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-16 text-center" style={{ letterSpacing: '-0.02em' }}>
            Impact by the numbers
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-32 h-32 rounded-full border-4 border-bleu-500 flex items-center justify-center">
                  <p className="text-3xl font-bold text-bleu-500">$1.5B</p>
                </div>
              </div>
              <p className="text-text-secondary text-lg">Spending by arts organizations in their communities</p>
            </div>
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-32 h-32 rounded-full border-4 border-jaune-400 flex items-center justify-center">
                  <p className="text-3xl font-bold text-jaune-400">180,000</p>
                </div>
              </div>
              <p className="text-text-secondary text-lg">Artistic activities created, produced and presented by arts organizations</p>
            </div>
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-32 h-32 rounded-full border-4 border-rose-500 flex items-center justify-center">
                  <p className="text-3xl font-bold text-rose-500">72M</p>
                </div>
              </div>
              <p className="text-text-secondary text-lg">Attendees at artistic activities</p>
            </div>
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-32 h-32 rounded-full border-4 border-neutral-400 flex items-center justify-center">
                  <p className="text-3xl font-bold text-neutral-400">1:6</p>
                </div>
              </div>
              <p className="text-text-secondary text-lg">For every additional dollar the Council invested in organizations receiving core funding, these organizations spent six dollars in their communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-vert-500 py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>
            Learn more about our work
          </h2>
          <p className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto leading-relaxed">
            Explore our funding opportunities, research, and initiatives supporting the arts across Canada.
          </p>
          <Button className="bg-brand-primary hover:bg-brand-primary-hover text-white font-bold text-base px-8 py-3">
            Explore
          </Button>
        </div>
      </section>
    </main>
  );
}
