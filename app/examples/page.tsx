"use client";

import Link from "next/link";
import { Card, CardImage, CardBadges, CardContent, CardTitle, CardDescription, CardStat } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ExamplesPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
            Examples
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed mb-4">
            Real Canada Council pages, built with the design system. Components composed into complete experiences.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#grant-program" className="text-bleu-500 hover:text-bleu-700 font-medium">Grant Program Page</a>
            <a href="#research" className="text-bleu-500 hover:text-bleu-700 font-medium">Research Landing</a>
            <a href="#artist-story" className="text-bleu-500 hover:text-bleu-700 font-medium">Artist Story</a>
            <a href="#homepage" className="text-bleu-500 hover:text-bleu-700 font-medium">Homepage Recreation</a>
          </div>
        </div>
      {/* Example 1: Grant Program Page */}
      <section id="grant-program" className="scroll-mt-20">
        <div className="py-24">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4" style={{ letterSpacing: '-0.02em' }}>
            Grant Program: Explore and Create
          </h2>
          <p className="text-xl text-text-secondary">
            A comprehensive funding opportunity page with hero, stats, and artist stories
          </p>
        </div>

        {/* Hero Section */}
        <div className="bg-bleu-500 p-12 md:p-16 mb-8">
          <div className="max-w-4xl">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white" style={{ letterSpacing: '-0.02em' }}>
              Explore and Create
            </h3>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Supporting research, development, creation, production and sharing of work. The program encourages artists and organizations to investigate creative processes and take risks.
            </p>
            <div className="flex gap-4">
              <Button className="bg-white hover:bg-slate-100 text-bleu-600 font-bold">Apply Now</Button>
              <Button className="bg-transparent border-2 border-white hover:bg-white text-white hover:text-bleu-600 font-bold">Learn More</Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card><CardStat value="2,162" label="successful applications in 2023-24" /></Card>
          <Card><CardStat value="$52M" label="awarded through Explore and Create" /></Card>
        </div>

        {/* Featured Stories */}
        <div>
            <h4 className="text-2xl font-bold text-text-primary mb-6">Featured Grant Recipients</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardImage src="/images/features/homesick.jpg" alt="Homesick" aspectRatio="video" />
              <CardContent className="space-y-4">
                <CardBadges>
                  <Badge variant="outline" className="bg-vert-50 text-vert-700 border-vert-200">Music</Badge>
                  <Badge variant="outline" className="bg-rose-50 text-rose-700 border-rose-200">Funding</Badge>
                </CardBadges>
                <CardTitle>Homesick: A Sonic Return Home</CardTitle>
                <CardDescription>JUNO winner Ciel talks about the impact of Council funding on her journey from blueprint to breakthrough.</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardImage src="/images/features/music-all-around.png" alt="Music" aspectRatio="video" />
              <CardContent className="space-y-4">
                <CardBadges><Badge variant="outline" className="bg-vert-50 text-vert-700 border-vert-200">Music</Badge></CardBadges>
                <CardTitle>Music All Around</CardTitle>
                <CardDescription>On PEI's Meike Trail, you may catch sight of a raptor, a warbler — and the occasional musician.</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardImage src="/images/features/misha-maseka.png" alt="Media Arts" aspectRatio="video" />
              <CardContent className="space-y-4">
                <CardBadges><Badge variant="outline" className="bg-bleu-50 text-bleu-700 border-bleu-200">Media Arts</Badge></CardBadges>
                <CardTitle>Misha Maseka: Not That Deep</CardTitle>
                <CardDescription>Themes of heartbreak and identity through visual poetry, music and film.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
        </div>
      </section>

      {/* Example 2: Research Page */}
      <section id="research" className="scroll-mt-20 bg-surface-background py-24 border-y border-border-divider">
        <div>
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4" style={{ letterSpacing: '-0.02em' }}>
              Research and Impact Landing Page
            </h2>
            <p className="text-xl text-text-secondary">Data-driven content with funding results and filterable reports</p>
          </div>

          <div className="bg-rose-500 p-12 md:p-16 mb-8">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white" style={{ letterSpacing: '-0.02em' }}>
              Research and Impact
            </h3>
            <p className="text-xl text-white leading-relaxed max-w-3xl">
              Passionate about knowledge mobilization and data-driven culture in support of public funding of the arts.
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-white p-6 mb-8 flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input type="text" placeholder="Search research reports..." className="w-full pl-10 pr-4 py-3 border border-slate-300 focus:border-bleu-500 focus:ring-2 focus:ring-bleu-200 outline-none" />
            </div>
          </div>

          {/* Results */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardImage src="/images/features/arts-canada.jpg" alt="Arts Across Canada" aspectRatio="square" />
              <CardContent className="space-y-4">
                <CardTitle>Arts Across Canada Funding Results, 2024-25</CardTitle>
                <CardDescription>Of 751 applications, 250 successful totalling $9.6M (33.3% success rate).</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardImage src="/images/features/explore-create.png" alt="Explore and Create" aspectRatio="square" />
              <CardContent className="space-y-4">
                <CardTitle>Explore and Create Funding Results, 2024-25</CardTitle>
                <CardDescription>Of 7,370 applications, 1,735 successful totalling $52M (23.5% success rate).</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardImage src="/images/features/research-impact.jpg" alt="Research Impact" aspectRatio="square" />
              <CardContent className="space-y-4">
                <CardTitle>Impact of Research and Creation, 2024-25</CardTitle>
                <CardDescription>Funded projects enhancing arts access and driving artistic growth.</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="mt-12 bg-white p-10 border-l-8 border-vert-500">
            <h4 className="text-2xl font-bold text-text-primary mb-8">Impact of the Arts</h4>
            <div className="grid md:grid-cols-3 gap-8">
              <div><p className="text-4xl font-bold text-vert-600 mb-2">$60B</p><p className="text-text-secondary font-semibold">Culture sector contribution to GDP</p></div>
              <div><p className="text-4xl font-bold text-bleu-600 mb-2">Strong</p><p className="text-text-secondary font-semibold">Link between arts participation and health</p></div>
              <div><p className="text-4xl font-bold text-orange-600 mb-2">Higher</p><p className="text-text-secondary font-semibold">Sense of belonging for participants</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Example 3: Artist Story */}
      <section id="artist-story" className="scroll-mt-20 border-t border-border-divider">
        <div className="py-24">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4" style={{ letterSpacing: '-0.02em' }}>
            Artist Story: Feature Article
          </h2>
          <p className="text-xl text-text-secondary">Long-form storytelling with rich media</p>
        </div>

        <div className="mb-8">
          <img src="/images/features/artist-story.jpg" alt="Ciel" className="w-full aspect-[21/9] object-cover" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex gap-2 mb-4">
              <Badge variant="outline" className="bg-vert-50 text-vert-700 border-vert-200">Artist Stories</Badge>
              <Badge variant="outline" className="bg-rose-50 text-rose-700 border-rose-200">Funding</Badge>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">Homesick: A Sonic Return Home</h3>
            <p className="text-xl text-text-secondary">Fresh off a JUNO win, Ciel (Cindy Li) is gaining recognition for both her sound and the cultural depth behind it.</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-text-secondary mb-6">Her debut album, <em>Homesick</em>—supported through a Canada Council grant—is a vivid sonic memoir of diasporic identity.</p>

            <div className="bg-vert-500 p-10 md:p-12 my-8">
              <p className="text-2xl md:text-3xl font-bold italic leading-tight mb-4 text-white" style={{ letterSpacing: '-0.02em' }}>
                "I really did everything I said I would. That gave me confidence—knowing I could lay out a plan and bring it to life."
              </p>
              <p className="text-white font-bold text-lg mt-6">— Ciel</p>
            </div>

            <h4 className="text-2xl font-bold text-text-primary mb-4 mt-12">From Blueprint to Breakthrough</h4>
            <p className="text-text-secondary mb-6">Supported by a Concept to Realization grant, Ciel built her debut from the ground up. The funding enabled collaborations with instrumentalists, equipment acquisition, and music that mirrored ancestral memory and innovation.</p>
          </div>
        </div>
        </div>
      </section>

      {/* Example 4: Homepage Recreation */}
      <section id="homepage" className="scroll-mt-20 bg-vert-500 py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>
            Homepage Recreation
          </h2>
          <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto leading-relaxed">
            See a complete recreation of the Canada Council homepage, refactored using our design system tokens and components.
          </p>
          <Link 
            href="/examples/homepage" 
            className="inline-block bg-neutral-400 hover:bg-neutral-300 text-white px-10 py-5 font-bold text-lg transition-colors"
          >
            View Homepage Recreation
          </Link>
        </div>
      </section>
      </div>
    </main>
  );
}
