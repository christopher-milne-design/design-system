import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Users, Zap, DollarSign, Clock } from "lucide-react";

export default function DocumentationPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-bleu-500 border-b border-border-divider">
        <div className="max-w-7xl mx-auto px-8 py-32 md:py-40">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white" style={{ letterSpacing: '-0.02em' }}>
              Documentation
            </h1>
            <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl leading-relaxed font-medium">
              Why this matters. How it works. Where we're going.
            </p>
          </div>
        </div>
      </section>
      {/* Why This Matters */}
      <section className="max-w-7xl mx-auto px-8 py-24 border-t border-border-divider">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12" style={{ letterSpacing: '-0.02em' }}>
          Why This Matters
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-l-8 border-bleu-500">
            <CardContent className="p-8">
              <TrendingUp className="w-12 h-12 text-bleu-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Efficiency at Scale</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Design systems cut development time by 50-70%. When we need to update a color, change typography, or adjust spacing—it happens once, not across dozens of files.
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>What this means:</strong> Projects that used to take weeks now take days. Updates that risked breaking things are now risk-free.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-8 border-vert-500">
            <CardContent className="p-8">
              <Users className="w-12 h-12 text-vert-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Consistent Brand Experience</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our new brand guidelines deserve a system that brings them to life consistently. Design tokens ensure every button, every card, every page reflects our brand perfectly.
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>What this means:</strong> No more "which blue is the right blue?" questions. No more inconsistent spacing. Just our brand, expressed clearly.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-8 border-orange-500">
            <CardContent className="p-8">
              <DollarSign className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Lower Long-Term Costs</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Modern CMS platforms like Contentful cost 60-80% less than enterprise systems like Sitecore, while being faster and easier to use.
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>What this means:</strong> We can reallocate budget from licensing fees to actually improving user experience and creating better content.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-8 border-rose-500">
            <CardContent className="p-8">
              <Zap className="w-12 h-12 text-rose-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Faster Time to Market</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Reusable components mean we're not rebuilding the same patterns over and over. Launch new pages, features, and campaigns faster.
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>What this means:</strong> We can be more responsive to organizational needs and user feedback. Less time building, more time improving.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The System in Practice */}
      <section className="bg-surface-background py-24 border-y border-border-divider">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12" style={{ letterSpacing: '-0.02em' }}>
            The System in Practice
          </h2>

          <div className="space-y-12">
            {/* Design Tokens */}
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Design Tokens</h3>
              <div className="bg-white p-8 border-l-8 border-bleu-500">
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  Design tokens are the atomic units of our design system. Colors, typography, spacing—all defined once, used everywhere.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">Source</p>
                    <p className="text-slate-600">Brand guidelines define values in Figma via Token Studio plugin</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">Transform</p>
                    <p className="text-slate-600">Style Dictionary converts tokens to CSS, JavaScript, and platform formats</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">Consume</p>
                    <p className="text-slate-600">Components automatically use tokens—update once, change everywhere</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Component Library */}
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Component Library</h3>
              <div className="bg-white p-8 border-l-8 border-vert-500">
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  Reusable, composable components built with accessibility and scalability in mind. Not rigid templates—flexible building blocks.
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-vert-600 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Composable:</strong> Mix and match components to create any layout</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-vert-600 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Accessible:</strong> WCAG AA compliant, keyboard navigation, screen reader support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-vert-600 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Responsive:</strong> Works seamlessly on mobile, tablet, and desktop</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-vert-600 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Documented:</strong> Every component has examples and usage guidelines</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Content Management */}
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Modern Content Management</h3>
              <div className="bg-white p-8 border-l-8 border-orange-500">
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  Contentful enables content editors to work independently, without developer involvement for routine updates. Content lives separately from code, making it portable and reusable.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="font-bold text-slate-900 mb-3">Why Contentful Works</p>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Modern API-first architecture</li>
                      <li>• Intuitive editor interface</li>
                      <li>• Preview changes before publishing</li>
                      <li>• Multi-language support built-in</li>
                      <li>• Fast, reliable, and scalable</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-3">Strategic Benefits</p>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Significantly lower total cost of ownership</li>
                      <li>• Faster onboarding for new team members</li>
                      <li>• Content can power multiple platforms</li>
                      <li>• No vendor lock-in—portable content</li>
                      <li>• Active ecosystem and support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="max-w-7xl mx-auto px-8 py-24 border-t border-border-divider">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12" style={{ letterSpacing: '-0.02em' }}>
          Implementation Roadmap
        </h2>

        <div className="space-y-8">
          {/* Phase 1 */}
          <Card className="border-l-8 border-bleu-500">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-sm font-bold text-bleu-600 mb-2 uppercase tracking-wide">Phase 1</p>
                  <h3 className="text-2xl font-bold text-slate-900">Foundations and Validation</h3>
                </div>
                <Clock className="w-10 h-10 text-bleu-600" />
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                <strong>What:</strong> Prove the concept, establish the foundation, secure buy-in.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li>• Design token pipeline working end-to-end</li>
                <li>• Core component library established</li>
                <li>• Documentation and examples complete</li>
                <li>• Stakeholder demos and feedback</li>
              </ul>
            </CardContent>
          </Card>

          {/* Phase 2 */}
          <Card className="border-l-8 border-vert-500">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-sm font-bold text-vert-600 mb-2 uppercase tracking-wide">Phase 2</p>
                  <h3 className="text-2xl font-bold text-slate-900">Pilot Implementation</h3>
                </div>
                <Clock className="w-10 h-10 text-vert-600" />
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                <strong>What:</strong> Launch a pilot project using the design system and new stack.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li>• Select high-value, manageable pilot (microsites, campaign pages)</li>
                <li>• Migrate content to Contentful</li>
                <li>• Build with design system components</li>
                <li>• Measure performance, gather learnings</li>
              </ul>
            </CardContent>
          </Card>

          {/* Phase 3 */}
          <Card className="border-l-8 border-orange-500">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-sm font-bold text-orange-600 mb-2 uppercase tracking-wide">Phase 3</p>
                  <h3 className="text-2xl font-bold text-slate-900">Scaled Rollout</h3>
                </div>
                <Clock className="w-10 h-10 text-orange-600" />
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                <strong>What:</strong> Expand to more sections of the site, refine based on feedback.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li>• Prioritize sections by impact and complexity</li>
                <li>• Expand component library as needed</li>
                <li>• Train content editors and developers</li>
                <li>• Establish governance and contribution guidelines</li>
              </ul>
            </CardContent>
          </Card>

          {/* Phase 4 */}
          <Card className="border-l-8 border-rose-500">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-sm font-bold text-rose-600 mb-2 uppercase tracking-wide">Phase 4</p>
                  <h3 className="text-2xl font-bold text-slate-900">Full Migration and Optimization</h3>
                </div>
                <Clock className="w-10 h-10 text-rose-600" />
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                <strong>What:</strong> Complete the migration, optimize, and maintain momentum.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li>• Migrate remaining site sections</li>
                <li>• Performance optimization and accessibility audits</li>
                <li>• Decommission legacy systems</li>
                <li>• Continuous improvement based on user feedback</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-overlay text-text-inverse py-24 border-t border-border-divider">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            This is more than a prototype—it's a working system, ready to scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/how-it-works" 
              className="inline-flex items-center justify-center bg-bleu-500 hover:bg-bleu-600 text-white px-8 py-4 font-bold text-lg transition-colors"
            >
              See How It Works
            </Link>
            <Link 
              href="/examples" 
              className="inline-flex items-center justify-center border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 font-bold text-lg transition-colors"
            >
              View Examples
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
