"use client";

import Link from "next/link";
import { Card, CardImage, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WarningBanner } from "@/components/council/messaging/NotificationBanner";
import { Search, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function HomepageExample() {
  const [noticeVisible, setNoticeVisible] = useState(true);

  return (
    <main className="min-h-screen bg-white">
      {/* Top Utility Bar */}
      <div className="bg-white border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-primary"></div>
              <div>
                <div className="text-sm font-bold text-text-primary">Canada Council for the Arts</div>
                <div className="text-xs text-text-secondary">Conseil des arts du Canada</div>
              </div>
            </div>
            
            {/* Utility Links */}
            <div className="flex items-center gap-6 text-sm">
              <Link href="#" className="text-text-secondary hover:text-text-primary font-semibold">ACCESSIBILITY</Link>
              <Link href="#" className="text-text-secondary hover:text-text-primary font-semibold">PRESS</Link>
              <Link href="#" className="text-text-secondary hover:text-text-primary font-semibold">CAREERS</Link>
              <Link href="#" className="text-text-secondary hover:text-text-primary font-semibold">CONTACT</Link>
              <Link href="#" className="text-text-secondary hover:text-text-primary font-semibold">FRANÇAIS</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="#" className="text-text-primary hover:text-brand-primary font-bold text-sm">FUNDING</Link>
              <Link href="#" className="text-text-primary hover:text-brand-primary font-bold text-sm">INITIATIVES</Link>
              <Link href="#" className="text-text-primary hover:text-brand-primary font-bold text-sm">PRIORITIES</Link>
              <Link href="#" className="text-text-primary hover:text-brand-primary font-bold text-sm">SPOTLIGHT</Link>
              <Link href="#" className="text-text-primary hover:text-brand-primary font-bold text-sm">RESEARCH</Link>
              <Link href="#" className="text-text-primary hover:text-brand-primary font-bold text-sm">ABOUT</Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-text-secondary hover:text-text-primary cursor-pointer">
                <Search className="w-5 h-5" />
                <span className="text-sm font-semibold">Search</span>
              </div>
              <Button variant="outline" className="font-bold text-sm">
                PORTAL
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Important Notice Banner */}
      {noticeVisible && (
        <div className="bg-feedback-info border-b border-border-subtle py-4">
          <div className="max-w-7xl mx-auto px-8 flex items-start justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm text-text-primary leading-relaxed">
                <strong>Gradual opening of the Canada Council's updated funding portal</strong><br />
                To ensure a smooth and reliable experience for everyone, we're taking a phased approach to the opening. This means that different features and access points will become available in stages, allowing feedback and tailored support to be provided as needed. For details on changes to programs and services, visit the Updates to Funding Opportunities and Portal web page.
              </p>
            </div>
            <button onClick={() => setNoticeVisible(false)} className="text-text-primary hover:text-text-secondary mt-1 flex-shrink-0">
              ×
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-neutral-100 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Bringing the arts to life.
            </h1>
            <p className="text-xl md:text-2xl text-text-primary mb-10 max-w-3xl mx-auto leading-relaxed">
              The Canada Council for the Arts is proud to be Canada's public arts funder. The Council contributes to the vibrancy of a creative and diverse arts and literary scene through grants, services, prizes and payments to artists and arts organizations from Canada.
            </p>
            
            {/* CTA Box */}
            <div className="bg-surface-card border border-border-default p-8 inline-block">
              <p className="text-text-primary font-semibold mb-4">Stay informed on Updates to Funding Opportunities and Portal.</p>
              <Button variant="outline" className="bg-surface-background border-border-default font-bold">
                Visit the page regularly
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-16" style={{ letterSpacing: '-0.02em' }}>
            Featured
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Webinars */}
            <Card>
              <CardImage 
                src="/images/features/webinar.png" 
                alt="Webinars and information sessions - Video conference illustration" 
                aspectRatio="video"
              />
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">Webinars and information sessions</CardTitle>
                <CardDescription>
                  Join a webinar or information session for guidance from a Program Officer.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 2: GGBooks */}
            <Card>
              <CardImage 
                src="/images/features/GGbooks_finalist_banner-e.jpg" 
                alt="GGBooks 2025 finalists - Collection of book covers" 
                aspectRatio="video"
              />
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">GGBooks 2025 finalists announced</CardTitle>
                <CardDescription>
                  The 2025 Governor General's Literary Awards finalists have been announced. Discover them at ggbooks.ca!
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 3: Arts Community Pulse Survey */}
            <Card>
              <CardImage 
                src="/images/features/ArtsCommunityPulseSurvey2025.jpg" 
                alt="Arts Community Pulse Survey - Interconnected ropes symbolizing unity" 
                aspectRatio="video"
              />
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">Arts Community Pulse Survey: Impact of Funding Analysis</CardTitle>
                <CardDescription>
                  Analysis reveals a high degree of economic, social and cultural impact for recipients of public funding.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 4: Resistant Fibres */}
            <Card>
              <CardImage 
                src="/images/features/Resistant-Fibres-EN-OG.png" 
                alt="Resistant Fibres exhibition" 
                aspectRatio="video"
              />
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">Resistant Fibres in the Àjagemô Exhibition Space</CardTitle>
                <CardDescription>
                  Curated by Julie Graff, Resistant Fibres highlights artwork drawn from the Art Bank collection, which holds more than 150 textile works.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 5: Ciel */}
            <Card>
              <CardImage 
                src="/images/features/Ciel_Frederique-Menard-Aubin_MUTEK-MTL.jpg" 
                alt="Ciel performing as a DJ" 
                aspectRatio="video"
              />
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">Ciel explores diasporic identity in Homesick</CardTitle>
                <CardDescription>
                  JUNO winner Ciel talks about the impact of Council funding on her journey from blueprint to breakthrough.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 6: A Letter to the Arts Community */}
            <Card>
              <CardImage 
                src="/images/features/SpotlightMichelleOG.jpg" 
                alt="Michelle Chawla, Director and CEO" 
                aspectRatio="video"
              />
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">A Letter to the Arts Community</CardTitle>
                <CardDescription>
                  Director and CEO Michelle Chawla describes how the arts can do what no other sector can to shape the future of Canada.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact by the numbers */}
      <section className="bg-surface-background py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-16" style={{ letterSpacing: '-0.02em' }}>
            Impact by the numbers
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-feedback-info-subtle flex items-center justify-center">
                <div className="text-5xl md:text-6xl font-bold text-brand-primary">$1.5B</div>
              </div>
              <p className="text-text-secondary font-semibold">Spending by arts organizations in their communities.</p>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-feedback-warning-subtle flex items-center justify-center">
                <div className="text-5xl md:text-6xl font-bold text-feedback-warning">180,000</div>
              </div>
              <p className="text-text-secondary font-semibold">Artistic activities created, produced and presented by arts organizations.</p>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-rose-600 flex items-center justify-center">
                <div className="text-5xl md:text-6xl font-bold text-text-inverse">72M</div>
              </div>
              <p className="text-text-secondary font-semibold">Attendees at artistic activities.</p>
            </div>

            {/* Stat 4 */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-marron-500 flex items-center justify-center">
                <div className="text-5xl md:text-6xl font-bold text-text-inverse">1:6</div>
              </div>
              <p className="text-text-secondary font-semibold">For every additional dollar the Council invested in organizations receiving core (operating) funding, those organizations spent six dollars in their communities.</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <Link href="#" className="text-brand-primary hover:text-brand-primary-hover font-bold">RESEARCH</Link>
            <Link href="#" className="text-brand-primary hover:text-brand-primary-hover font-bold">STATS AND STORIES 2023-24</Link>
            <Link href="#" className="text-brand-primary hover:text-brand-primary-hover font-bold">THE IMPACT OF THE ARTS</Link>
          </div>
        </div>
      </section>

      {/* Affiliated Sites */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-12" style={{ letterSpacing: '-0.02em' }}>
            Affiliated Sites
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            <Button variant="outline" size="lg" className="font-bold">
              ART BANK
            </Button>
            <Button variant="outline" size="lg" className="font-bold">
              CANADIAN COMMISSION FOR UNESCO
            </Button>
            <Button variant="outline" size="lg" className="font-bold">
              PUBLIC LENDING RIGHT
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - Three Columns */}
      <section className="bg-surface-background py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Left Column - Funding Opportunities */}
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6" style={{ letterSpacing: '-0.02em' }}>
                Find out more about funding opportunities.
              </h3>
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start font-bold" size="lg">GRANTS</Button>
                <Button variant="outline" className="w-full justify-start font-bold" size="lg">PRIZES</Button>
                <Button variant="outline" className="w-full justify-start font-bold" size="lg">STRATEGIC FUNDS</Button>
              </div>
            </div>

            {/* Middle Column - Mailing List & Contact */}
            <div>
              <Button variant="outline" size="lg" className="w-full mb-6 font-bold">
                SUBSCRIBE TO THE MAILING LIST
              </Button>
              
              {/* Social Media Icons */}
              <div className="flex gap-4 mb-6">
                <Button variant="ghost" size="icon" className="w-10 h-10">YT</Button>
                <Button variant="ghost" size="icon" className="w-10 h-10">f</Button>
                <Button variant="ghost" size="icon" className="w-10 h-10">X</Button>
                <Button variant="ghost" size="icon" className="w-10 h-10">in</Button>
                <Button variant="ghost" size="icon" className="w-10 h-10">IG</Button>
              </div>

              <div className="text-sm text-text-secondary">
                <p className="mb-2">150 Elgin St | P.O. Box 1047</p>
                <p className="mb-2">Ottawa, ON Canada | K1P 5V8</p>
                <p>1-800 263-5588 | 613 566-4414</p>
              </div>
            </div>

            {/* Right Column - Àjagemô Exhibition Space */}
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6" style={{ letterSpacing: '-0.02em' }}>
                Àjagemô Exhibition Space
              </h3>
              <Button variant="outline" size="lg" className="w-full mb-4 font-bold">
                VIEW CURRENT EXHIBIT
              </Button>
              <p className="text-sm text-text-secondary">
                At the Canada Council for the Arts<br />
                Open daily from 7am to 9pm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Footer Bar */}
      <footer className="bg-brand-primary text-text-inverse py-8">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-sm mb-6 leading-relaxed">
            The Canada Council's offices, located in Ottawa, are on the unceded, unsurrendered Territory of the Anishinaabe Algonquin Nation whose presence here reaches back to time immemorial.{" "}
            <Link href="#" className="underline hover:no-underline">Read the full statement</Link>.
          </p>
          
          <div className="flex flex-wrap gap-6 text-xs">
            <Link href="#" className="hover:underline">ACCESSIBILITY</Link>
            <Link href="#" className="hover:underline">LOGOS AND ACKNOWLEDGEMENT</Link>
            <Link href="#" className="hover:underline">PUBLIC ACCOUNTABILITY</Link>
            <Link href="#" className="hover:underline">PRIVACY</Link>
            <Link href="#" className="hover:underline">CONTACT</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
