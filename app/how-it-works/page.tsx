"use client";

import Link from "next/link";
import { ArrowRight, FileText, Figma, Github, Code2, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-vert-500 border-b border-border-divider">
        <div className="max-w-7xl mx-auto px-8 py-32 md:py-40">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>
              How It Works
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl leading-relaxed font-medium">
              From brand guidelines to production code—a seamless pipeline powered by design tokens
            </p>
          </div>
        </div>
      </section>

      {/* The Pipeline */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center" style={{ letterSpacing: '-0.02em' }}>
          The Token Pipeline
        </h2>

        {/* SVG Pipeline Diagram */}
        <div className="relative mb-24">
          <svg viewBox="0 0 1200 400" className="w-full h-auto">
            {/* Connecting Arrows */}
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#64748b" />
              </marker>
            </defs>

            {/* Connection Lines */}
            <line x1="200" y1="200" x2="340" y2="200" stroke="#64748b" strokeWidth="3" markerEnd="url(#arrowhead)" className="animate-pulse" />
            <line x1="460" y1="200" x2="600" y2="200" stroke="#64748b" strokeWidth="3" markerEnd="url(#arrowhead)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <line x1="720" y1="200" x2="860" y2="200" stroke="#64748b" strokeWidth="3" markerEnd="url(#arrowhead)" className="animate-pulse" style={{ animationDelay: '1s' }} />
            <line x1="980" y1="200" x2="1120" y2="200" stroke="#64748b" strokeWidth="3" markerEnd="url(#arrowhead)" className="animate-pulse" style={{ animationDelay: '1.5s' }} />

            {/* Stage 1: Brand Guidelines */}
            <g>
              <rect x="50" y="140" width="150" height="120" fill="#f97316" rx="8" />
              <text x="125" y="190" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Brand</text>
              <text x="125" y="215" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Guidelines</text>
            </g>

            {/* Stage 2: Figma/Token Studio */}
            <g>
              <rect x="340" y="140" width="120" height="120" fill="#1a70ef" rx="8" />
              <text x="400" y="190" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Token</text>
              <text x="400" y="215" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Studio</text>
            </g>

            {/* Stage 3: GitHub */}
            <g>
              <rect x="600" y="140" width="120" height="120" fill="#15ce49" rx="8" />
              <text x="660" y="190" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">GitHub</text>
              <text x="660" y="215" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Sync</text>
            </g>

            {/* Stage 4: Build Process */}
            <g>
              <rect x="860" y="140" width="120" height="120" fill="#fc72e0" rx="8" />
              <text x="920" y="190" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Style</text>
              <text x="920" y="215" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Dictionary</text>
            </g>

            {/* Stage 5: Production */}
            <g>
              <rect x="1120" y="140" width="120" height="120" fill="#eac30f" rx="8" />
              <text x="1180" y="190" textAnchor="middle" fill="#1e293b" fontSize="16" fontWeight="bold">Production</text>
              <text x="1180" y="215" textAnchor="middle" fill="#1e293b" fontSize="16" fontWeight="bold">Site</text>
            </g>
          </svg>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          <Card className="border-t-8 border-orange-500">
            <CardContent className="p-6">
              <FileText className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. Brand Guidelines</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Your brand guidelines define colours, typography, spacing, and visual identity.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-8 border-bleu-500">
            <CardContent className="p-6">
              <Figma className="w-10 h-10 text-bleu-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">2. Token Studio</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Designers define tokens in Figma using Token Studio plugin. Colours, spacing, typography—all captured as structured data.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-8 border-vert-500">
            <CardContent className="p-6">
              <Github className="w-10 h-10 text-vert-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">3. GitHub Sync</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Tokens push to GitHub automatically. Version controlled, reviewed, and merged like code.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-8 border-rose-500">
            <CardContent className="p-6">
              <Code2 className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">4. Build Process</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Style Dictionary transforms tokens into CSS, JavaScript, and platform-specific formats.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-8 border-jaune-500">
            <CardContent className="p-6">
              <Globe className="w-10 h-10 text-jaune-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">5. Production</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Tokens power every component, every page. Update once, change everywhere.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Update Once, Change Everywhere */}
      <section className="bg-gradient-to-br from-bleu-50 to-white py-24 border-y-4 border-bleu-500">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center" style={{ letterSpacing: '-0.02em' }}>
            Update Once. Change Everywhere.
          </h2>

          <div className="bg-white p-10 shadow-xl border-l-8 border-bleu-600">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">The Old Way</h3>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">✗</span>
                    <span>Designer updates brand color in 47 different files</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">✗</span>
                    <span>Developer manually updates CSS across dozens of components</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">✗</span>
                    <span>Inconsistencies slip through, different blues everywhere</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">✗</span>
                    <span>Takes weeks, costs thousands, introduces bugs</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">The Token Way</h3>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-vert-500 mr-3 text-xl">✓</span>
                    <span>Designer updates one token: <code className="bg-slate-100 px-2 py-1 text-bleu-600">brand-primary</code></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-vert-500 mr-3 text-xl">✓</span>
                    <span>Push to GitHub, automated build triggered</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-vert-500 mr-3 text-xl">✓</span>
                    <span>All components update automatically, perfectly consistent</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-vert-500 mr-3 text-xl">✓</span>
                    <span>Takes minutes, costs nothing, zero bugs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Example */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center" style={{ letterSpacing: '-0.02em' }}>
          See It In Action
        </h2>

        <div className="bg-slate-900 text-white p-10 font-mono text-sm leading-relaxed overflow-x-auto">
          <p className="text-vert-400 mb-4">// tokens/colors.json</p>
          <p className="text-slate-300">{'{'}</p>
          <p className="text-slate-300 ml-4">&quot;bleu&quot;: {'{'}</p>
          <p className="text-slate-300 ml-8">&quot;500&quot;: {'{'}</p>
          <p className="ml-12"><span className="text-orange-400">&quot;value&quot;</span>: <span className="text-vert-400">&quot;#1a70ef&quot;</span>,</p>
          <p className="ml-12"><span className="text-orange-400">&quot;type&quot;</span>: <span className="text-vert-400">&quot;colour&quot;</span></p>
          <p className="text-slate-300 ml-8">{'}'}</p>
          <p className="text-slate-300 ml-4">{'}'}</p>
          <p className="text-slate-300">{'}'}</p>

          <p className="text-slate-500 my-6">↓ Style Dictionary transforms ↓</p>

          <p className="text-vert-400 mb-4">// Generated CSS</p>
          <p className="text-slate-300">:root {'{'}</p>
          <p className="ml-4"><span className="text-orange-400">--bleu-500</span>: <span className="text-vert-400">#1a70ef</span>;</p>
          <p className="text-slate-300">{'}'}</p>

          <p className="text-slate-500 my-6">↓ Used in components ↓</p>

          <p className="text-vert-400 mb-4">// Button component</p>
          <p className="text-slate-300">{'<'}button className=<span className="text-vert-400">&quot;bg-bleu-500 hover:bg-bleu-600&quot;</span>{'>'}</p>
        </div>

        <p className="text-center text-slate-600 text-lg mt-8">
          Change <code className="bg-slate-100 px-2 py-1 text-bleu-600 font-mono">#1a70ef</code> to <code className="bg-slate-100 px-2 py-1 text-bleu-600 font-mono">#2080ff</code> — every button, every card, every component updates instantly.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
            Ready to See the System?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Explore the full component library, design tokens, and interactive examples.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/foundations" 
              className="inline-flex items-center justify-center bg-bleu-500 hover:bg-bleu-600 text-white px-8 py-4 font-bold text-lg transition-colors"
            >
              View Foundations
            </Link>
            <Link 
              href="/components" 
              className="inline-flex items-center justify-center border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 font-bold text-lg transition-colors"
            >
              Explore Components
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
