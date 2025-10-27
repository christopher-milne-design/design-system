import { tokens } from '@/lib/tokens';
import Link from 'next/link';

function CodeBlock({ children, title }: { children: string; title?: string }) {
  return (
    <div className="bg-neutral-400 rounded-lg overflow-hidden">
      {title && (
        <div className="bg-neutral-300 px-4 py-2 text-neutral-50 text-sm font-semibold">
          {title}
        </div>
      )}
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-neutral-100">{children}</code>
      </pre>
    </div>
  );
}

export default function TokensPage() {
  return (
    <div className="min-h-screen bg-neutral-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-neutral-400 mb-4">
            Style Guide
          </h1>
          <p className="text-lg text-neutral-300 mb-4">
            Design tokens automatically synced from Figma via Token Studio → GitHub → Style Dictionary → Tailwind
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#semantic" className="text-bleu-500 hover:text-bleu-700 font-medium">Semantic Tokens</a>
            <a href="#typography" className="text-bleu-500 hover:text-bleu-700 font-medium">Typography System</a>
            <a href="#colors" className="text-bleu-500 hover:text-bleu-700">Primitive Colors</a>
            <a href="#spacing" className="text-bleu-500 hover:text-bleu-700">Spacing</a>
            <a href="#radius" className="text-bleu-500 hover:text-bleu-700">Border Radius</a>
            <a href="#examples" className="text-bleu-500 hover:text-bleu-700">Examples</a>
          </div>
        </div>

        {/* Semantic Tokens */}
        <section id="semantic" className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-neutral-400">Semantic Tokens</h2>
            <span className="text-sm text-neutral-300">Purpose-based design tokens</span>
          </div>
          
          <div className="bg-bleu-50 border-l-4 border-bleu-500 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-bleu-900 mb-2">What are semantic tokens?</h3>
            <p className="text-bleu-800 mb-3">
              Semantic tokens reference primitive tokens but are named by their <strong>purpose</strong>, not their appearance. 
              This allows you to change the entire design system by updating just the semantic mappings.
            </p>
            <p className="text-bleu-700 text-sm">
              For example: <code className="bg-bleu-100 px-2 py-1 rounded">bg-brand-primary</code> → 
              <code className="bg-bleu-100 px-2 py-1 rounded mx-1">var(--color-bleu-500)</code> → 
              <code className="bg-bleu-100 px-2 py-1 rounded">#1a70ef</code>
            </p>
          </div>

          {/* Brand Colors */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-neutral-400 mb-4">Brand Colors</h3>
            <p className="text-sm text-neutral-300 mb-6">Interactive buttons demonstrating all semantic color states</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Primary Brand */}
              <div className="bg-neutral-100 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold text-neutral-400">Primary Brand</h4>
                  <span className="text-xs text-neutral-300 font-mono">→ bleu-500</span>
                </div>
                
                <div className="space-y-4">
                  {/* Default State */}
                  <div>
                    <label className="text-xs text-neutral-300 block mb-2">Default</label>
                    <button className="w-full bg-brand-primary text-neutral-50 px-6 py-3 rounded-lg font-semibold transition-all">
                      Primary Button
                    </button>
                    <code className="text-xs text-neutral-300 block mt-1">bg-brand-primary</code>
                  </div>
                  
                  {/* Hover State */}
                  <div>
                    <label className="text-xs text-neutral-300 block mb-2">Hover</label>
                    <button className="w-full bg-brand-primary-hover text-neutral-50 px-6 py-3 rounded-lg font-semibold transition-all">
                      Hover State
                    </button>
                    <code className="text-xs text-neutral-300 block mt-1">bg-brand-primary-hover</code>
                  </div>
                  
                  {/* Active State */}
                  <div>
                    <label className="text-xs text-neutral-300 block mb-2">Active/Pressed</label>
                    <button className="w-full bg-brand-primary-active text-neutral-50 px-6 py-3 rounded-lg font-semibold transition-all">
                      Active State
                    </button>
                    <code className="text-xs text-neutral-300 block mt-1">bg-brand-primary-active</code>
                  </div>
                  
                  {/* Focus State */}
                  <div>
                    <label className="text-xs text-neutral-300 block mb-2">Focus</label>
                    <button className="w-full bg-brand-primary text-neutral-50 px-6 py-3 rounded-lg font-semibold ring-4 ring-brand-primary-focus ring-opacity-30">
                      Focused State
                    </button>
                    <code className="text-xs text-neutral-300 block mt-1">ring-brand-primary-focus</code>
                  </div>
                  
                  {/* Disabled State */}
                  <div>
                    <label className="text-xs text-neutral-300 block mb-2">Disabled</label>
                    <button disabled className="w-full bg-brand-disabled text-brand-disabled-text px-6 py-3 rounded-lg font-semibold cursor-not-allowed opacity-60">
                      Disabled Button
                    </button>
                    <code className="text-xs text-neutral-300 block mt-1">bg-brand-disabled</code>
                  </div>
                  
                  {/* Interactive Demo */}
                  <div className="pt-2 border-t border-neutral-200">
                    <label className="text-xs text-neutral-300 block mb-2">Interactive Demo</label>
                    <button className="w-full bg-brand-primary hover:bg-brand-primary-hover active:bg-brand-primary-active focus:ring-4 focus:ring-brand-primary-focus focus:ring-opacity-30 text-neutral-50 px-6 py-3 rounded-lg font-semibold transition-all">
                      Try Me!
                    </button>
                    <code className="text-xs text-neutral-300 block mt-1">hover:bg-brand-primary-hover active:bg-brand-primary-active</code>
                  </div>
                </div>
              </div>
              
              {/* Secondary Brand */}
              <div className="bg-neutral-100 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold text-neutral-400">Secondary Brand</h4>
                  <span className="text-xs text-neutral-300 font-mono">→ orange-600</span>
                </div>
                
                <div className="space-y-4">
                  {/* Default State */}
                  <div>
                    <label className="text-xs text-neutral-300 block mb-2">Default</label>
                    <button className="w-full bg-brand-secondary text-neutral-50 px-6 py-3 rounded-lg font-semibold transition-all">
                      Secondary Button
                    </button>
                    <code className="text-xs text-neutral-300 block mt-1">bg-brand-secondary</code>
                  </div>
                  
                  {/* Hover State */}
                  <div>
                    <label className="text-xs text-neutral-300 block mb-2">Hover</label>
                    <button className="w-full bg-brand-secondary-hover text-neutral-50 px-6 py-3 rounded-lg font-semibold transition-all">
                      Hover State
                    </button>
                    <code className="text-xs text-neutral-300 block mt-1">bg-brand-secondary-hover</code>
                  </div>
                  
                  {/* Active State */}
                  <div>
                    <label className="text-xs text-neutral-300 block mb-2">Active/Pressed</label>
                    <button className="w-full bg-brand-secondary-active text-neutral-50 px-6 py-3 rounded-lg font-semibold transition-all">
                      Active State
                    </button>
                    <code className="text-xs text-neutral-300 block mt-1">bg-brand-secondary-active</code>
                  </div>
                  
                  {/* Focus State */}
                  <div>
                    <label className="text-xs text-neutral-300 block mb-2">Focus</label>
                    <button className="w-full bg-brand-secondary text-neutral-50 px-6 py-3 rounded-lg font-semibold ring-4 ring-brand-secondary-focus ring-opacity-30">
                      Focused State
                    </button>
                    <code className="text-xs text-neutral-300 block mt-1">ring-brand-secondary-focus</code>
                  </div>
                  
                  {/* Disabled State */}
                  <div>
                    <label className="text-xs text-neutral-300 block mb-2">Disabled</label>
                    <button disabled className="w-full bg-brand-disabled text-brand-disabled-text px-6 py-3 rounded-lg font-semibold cursor-not-allowed opacity-60">
                      Disabled Button
                    </button>
                    <code className="text-xs text-neutral-300 block mt-1">bg-brand-disabled</code>
                  </div>
                  
                  {/* Interactive Demo */}
                  <div className="pt-2 border-t border-neutral-200">
                    <label className="text-xs text-neutral-300 block mb-2">Interactive Demo</label>
                    <button className="w-full bg-brand-secondary hover:bg-brand-secondary-hover active:bg-brand-secondary-active focus:ring-4 focus:ring-brand-secondary-focus focus:ring-opacity-30 text-neutral-50 px-6 py-3 rounded-lg font-semibold transition-all">
                      Try Me!
                    </button>
                    <code className="text-xs text-neutral-300 block mt-1">hover:bg-brand-secondary-hover active:bg-brand-secondary-active</code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Colors */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-neutral-400 mb-4">Text Colors</h3>
            <div className="bg-neutral-100 p-6 rounded-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                  <span className="text-text-primary text-lg">Primary text color (body content)</span>
                  <code className="text-xs bg-neutral-200 px-2 py-1 rounded">text-text-primary</code>
                </div>
                <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                  <span className="text-text-secondary text-lg">Secondary text (supporting content)</span>
                  <code className="text-xs bg-neutral-200 px-2 py-1 rounded">text-text-secondary</code>
                </div>
                <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                  <span className="text-text-muted text-lg">Muted text (de-emphasized)</span>
                  <code className="text-xs bg-neutral-200 px-2 py-1 rounded">text-text-muted</code>
                </div>
                <div className="flex items-center justify-between bg-neutral-400 p-3 rounded">
                  <span className="text-text-inverse text-lg">Inverse text (dark backgrounds)</span>
                  <code className="text-xs bg-neutral-300 px-2 py-1 rounded text-neutral-50">text-text-inverse</code>
                </div>
              </div>
            </div>
          </div>

          {/* Surface Colors */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-neutral-400 mb-4">Surface Colors</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-surface-background border-2 border-neutral-200 p-6 rounded-lg">
                <code className="text-xs bg-neutral-200 px-2 py-1 rounded mb-3 inline-block">bg-surface-background</code>
                <p className="text-neutral-300">Base page background</p>
              </div>
              <div className="bg-surface-card border-2 border-neutral-200 p-6 rounded-lg">
                <code className="text-xs bg-neutral-200 px-2 py-1 rounded mb-3 inline-block">bg-surface-card</code>
                <p className="text-neutral-300">Card and container backgrounds</p>
              </div>
            </div>
          </div>

          {/* Feedback Colors */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-neutral-400 mb-4">Feedback Colors</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-feedback-success-subtle border-l-4 border-feedback-success p-4 rounded">
                <p className="text-feedback-success font-semibold mb-1">Success</p>
                <code className="text-xs">bg-feedback-success</code>
              </div>
              <div className="bg-feedback-warning-subtle border-l-4 border-feedback-warning p-4 rounded">
                <p className="text-feedback-warning font-semibold mb-1">Warning</p>
                <code className="text-xs">bg-feedback-warning</code>
              </div>
              <div className="bg-feedback-error-subtle border-l-4 border-feedback-error p-4 rounded">
                <p className="text-feedback-error font-semibold mb-1">Error</p>
                <code className="text-xs">bg-feedback-error</code>
              </div>
              <div className="bg-feedback-info-subtle border-l-4 border-feedback-info p-4 rounded">
                <p className="text-feedback-info font-semibold mb-1">Info</p>
                <code className="text-xs">bg-feedback-info</code>
              </div>
            </div>
          </div>

          {/* Border Colors */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-neutral-400 mb-4">Border Colors</h3>
            <div className="space-y-4">
              <div className="border-2 border-border-subtle p-4 rounded-lg">
                <code className="text-xs bg-neutral-200 px-2 py-1 rounded">border-border-subtle</code>
                <p className="text-neutral-300 text-sm mt-2">Subtle borders for light separation</p>
              </div>
              <div className="border-2 border-border-default p-4 rounded-lg">
                <code className="text-xs bg-neutral-200 px-2 py-1 rounded">border-border-default</code>
                <p className="text-neutral-300 text-sm mt-2">Default borders for cards and containers</p>
              </div>
              <div className="border-2 border-border-strong p-4 rounded-lg">
                <code className="text-xs bg-neutral-200 px-2 py-1 rounded">border-border-strong</code>
                <p className="text-neutral-300 text-sm mt-2">Strong borders for emphasis</p>
              </div>
              <div className="border-2 border-border-focus p-4 rounded-lg">
                <code className="text-xs bg-neutral-200 px-2 py-1 rounded">border-border-focus</code>
                <p className="text-neutral-300 text-sm mt-2">Focus ring color</p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-100 p-6 rounded-lg">
            <h3 className="text-sm font-semibold text-neutral-400 mb-3">Usage Example</h3>
            <CodeBlock>
{`// Use semantic tokens in components
<button className="bg-brand-primary hover:bg-brand-primary-hover 
                   text-text-inverse px-6 py-3 rounded-lg">
  Primary Action
</button>

<div className="bg-surface-card border border-border-default p-6 rounded-lg">
  <h3 className="text-text-primary text-xl font-bold mb-2">
    Card Title
  </h3>
  <p className="text-text-secondary">
    Card description with semantic tokens
  </p>
</div>

<div className="bg-feedback-success-subtle border-l-4 border-feedback-success p-4">
  <p className="text-feedback-success font-semibold">
    Operation successful!
  </p>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* Primitive Colors */}
        <section id="colors" className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-neutral-400">Colors</h2>
            <span className="text-sm text-neutral-300">{Object.keys(tokens.colors).length} palettes</span>
          </div>
          
          <div className="bg-neutral-100 p-6 rounded-lg mb-8">
            <h3 className="text-sm font-semibold text-neutral-400 mb-3">Usage</h3>
            <CodeBlock>
{`// Background colors
<div className="bg-bleu-500">Primary blue background</div>

// Text colors
<p className="text-vert-600">Green text</p>

// Border colors
<div className="border-2 border-rouge-400">Red border</div>

// Hover states
<button className="bg-bleu-500 hover:bg-bleu-700">
  Hover me
</button>`}
            </CodeBlock>
          </div>

          <div className="space-y-12">
            {Object.entries(tokens.colors).map(([colorName, shades]) => (
              <div key={colorName}>
                <h3 className="text-xl font-semibold text-neutral-400 mb-4 capitalize">
                  {colorName.replace(/-/g, ' ')}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-3">
                  {Object.entries(shades).map(([shade, value]) => (
                    <div key={`${colorName}-${shade}`} className="group relative">
                      <div
                        className="w-full aspect-square rounded-lg shadow-sm border border-neutral-200 transition-transform group-hover:scale-105 cursor-pointer"
                        style={{ backgroundColor: value as string }}
                        title={`${colorName}-${shade}: ${value}`}
                      />
                      <div className="mt-2 text-center">
                        <span className="text-xs font-semibold text-neutral-400 block">{shade}</span>
                        <span className="text-xs text-neutral-300 font-mono">{value}</span>
                      </div>
                      {/* Tooltip on hover */}
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <div className="bg-neutral-400 text-neutral-50 text-xs px-2 py-1 rounded whitespace-nowrap">
                          {colorName}-{shade}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spacing */}
        <section id="spacing" className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-neutral-400">Spacing</h2>
            <span className="text-sm text-neutral-300">{Object.keys(tokens.spacing).length} tokens</span>
          </div>

          <div className="bg-neutral-100 p-6 rounded-lg mb-8">
            <h3 className="text-sm font-semibold text-neutral-400 mb-3">Usage</h3>
            <CodeBlock>
{`// Padding
<div className="p-md">Medium padding on all sides</div>
<div className="px-lg py-sm">Large horizontal, small vertical</div>

// Margin
<div className="m-xl">Extra large margin</div>
<div className="mt-2xl mb-xs">Different top and bottom</div>

// Gap (Flexbox/Grid)
<div className="flex gap-md">Items with medium gap</div>`}
            </CodeBlock>
          </div>

          <div className="space-y-4">
            {Object.entries(tokens.spacing).map(([name, value]) => (
              <div key={name} className="flex items-center gap-4 bg-neutral-100 p-4 rounded-lg">
                <span className="text-neutral-400 font-semibold w-20">{name}</span>
                <div className="flex-1 flex items-center gap-4">
                  <div
                    className="bg-bleu-500 h-8 rounded transition-all"
                    style={{ width: value as string }}
                  />
                  <span className="text-neutral-300 text-sm font-mono">{value}</span>
                </div>
                <code className="text-xs bg-neutral-200 px-2 py-1 rounded text-neutral-400">p-{name}</code>
              </div>
            ))}
          </div>
        </section>

        {/* Typography System */}
        <section id="typography" className="mb-20">
          <h2 className="text-3xl font-bold text-neutral-400 mb-6">Typography System</h2>
          
          <div className="bg-bleu-50 border-l-4 border-bleu-500 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-bleu-900 mb-2">1.33x Type Scale</h3>
            <p className="text-bleu-800 mb-3">
              This typography system uses a <strong>1.33x scale ratio</strong> optimized for marketing sites, with 16px as the base unit. 
              All calculations follow specific rules:
            </p>
            <ul className="text-bleu-700 text-sm space-y-1 list-disc list-inside">
              <li><strong>Headings</strong>: Line height = font size × 1.2 (rounded down), letter-spacing -2%</li>
              <li><strong>Paragraphs</strong>: Line height = font size × 1.5 (rounded to 4px), no letter-spacing</li>
              <li><strong>Caps Labels</strong>: Line height 100%, letter-spacing +5%</li>
              <li><strong>Buttons</strong>: Line height 100%, prevents multi-line wrapping</li>
            </ul>
          </div>

          {/* Desktop Headings */}
          {tokens.typography?.desktop?.headings && (
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-neutral-400 mb-6">Headings (Desktop)</h3>
              <p className="text-sm text-neutral-300 mb-6">All headings use -2% letter-spacing and 1.2x line height</p>
              
              <div className="space-y-6">
                {Object.entries(tokens.typography.desktop.headings).map(([name, styles]: [string, any]) => (
                  <div key={name} className="bg-neutral-100 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <code className="text-sm bg-neutral-200 px-3 py-1 rounded text-neutral-400">{name.toUpperCase()}</code>
                        <span className="text-xs text-neutral-300 ml-3">{styles.description}</span>
                      </div>
                      <div className="text-right text-xs text-neutral-300 font-mono">
                        <div>{styles.fontSize}</div>
                        <div className="text-neutral-400">LH: {styles.lineHeight}</div>
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: styles.fontSize,
                        lineHeight: styles.lineHeight,
                        letterSpacing: styles.letterSpacing,
                        fontWeight: styles.fontWeight
                      }}
                      className="text-neutral-400"
                    >
                      The quick brown fox jumps over the lazy dog
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Desktop Paragraphs */}
          {tokens.typography?.desktop?.paragraphs && (
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-neutral-400 mb-6">Paragraphs (Desktop)</h3>
              <p className="text-sm text-neutral-300 mb-6">Paragraphs use 1.5x line height with no letter-spacing adjustments</p>
              
              <div className="space-y-6">
                {Object.entries(tokens.typography.desktop.paragraphs).map(([name, styles]: [string, any]) => (
                  <div key={name} className="bg-neutral-100 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <code className="text-sm bg-neutral-200 px-3 py-1 rounded text-neutral-400">{name.toUpperCase()}</code>
                        <span className="text-xs text-neutral-300 ml-3">{styles.description}</span>
                      </div>
                      <div className="text-right text-xs text-neutral-300 font-mono">
                        <div>{styles.fontSize}</div>
                        <div className="text-neutral-400">LH: {styles.lineHeight}</div>
                      </div>
                    </div>
                    <p
                      style={{
                        fontSize: styles.fontSize,
                        lineHeight: styles.lineHeight,
                        letterSpacing: styles.letterSpacing,
                        fontWeight: styles.fontWeight
                      }}
                      className="text-neutral-400"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Labels */}
          {tokens.typography?.desktop?.labels && (
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-neutral-400 mb-6">Labels</h3>
              <p className="text-sm text-neutral-300 mb-6">Labels use 100% line height. Caps labels have +5% letter-spacing</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(tokens.typography.desktop.labels).map(([name, styles]: [string, any]) => (
                  <div key={name} className="bg-neutral-100 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <code className="text-sm bg-neutral-200 px-3 py-1 rounded text-neutral-400">{name}</code>
                      <span className="text-xs text-neutral-300 font-mono">{styles.fontSize}</span>
                    </div>
                    <div
                      style={{
                        fontSize: styles.fontSize,
                        lineHeight: styles.lineHeight,
                        letterSpacing: styles.letterSpacing,
                        fontWeight: styles.fontWeight,
                        textTransform: styles.textTransform || 'none'
                      }}
                      className="text-neutral-400"
                    >
                      {name.includes('caps') ? 'All Caps Label' : 'Label Text'}
                    </div>
                    <p className="text-xs text-neutral-300 mt-3">{styles.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Buttons */}
          {tokens.typography?.desktop?.buttons && (
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-neutral-400 mb-6">Buttons</h3>
              <p className="text-sm text-neutral-300 mb-6">Buttons use 100% line height to prevent wrapping and enable precise alignment</p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(tokens.typography.desktop.buttons).map(([name, styles]: [string, any]) => (
                  <div key={name} className="bg-neutral-100 p-6 rounded-lg">
                    <code className="text-xs bg-neutral-200 px-2 py-1 rounded text-neutral-400 block mb-4">{name}</code>
                    <button
                      style={{
                        fontSize: styles.fontSize,
                        lineHeight: styles.lineHeight,
                        letterSpacing: styles.letterSpacing,
                        fontWeight: styles.fontWeight
                      }}
                      className="w-full bg-brand-primary text-neutral-50 px-6 py-3 rounded-lg"
                    >
                      Button Text
                    </button>
                    <p className="text-xs text-neutral-300 mt-3 text-center">{styles.fontSize}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mobile Typography */}
          {tokens.typography?.mobile && (
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-neutral-400 mb-6">Mobile Scale</h3>
              <p className="text-sm text-neutral-300 mb-6">Reduced sizes for mobile viewports (&lt; 768px)</p>
              
              <div className="bg-neutral-100 p-6 rounded-lg">
                <h4 className="font-semibold text-neutral-400 mb-4">Mobile Headings</h4>
                <div className="space-y-3">
                  {Object.entries(tokens.typography.mobile.headings).map(([name, styles]: [string, any]) => (
                    <div key={name} className="flex items-center justify-between py-2 border-b border-neutral-200 last:border-0">
                      <code className="text-xs text-neutral-400">{name.toUpperCase()}</code>
                      <span className="text-xs text-neutral-300 font-mono">{styles.fontSize} (from {tokens.typography.desktop.headings[name as keyof typeof tokens.typography.desktop.headings]?.fontSize})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Usage Examples */}
          <div className="bg-neutral-100 p-6 rounded-lg">
            <h3 className="text-sm font-semibold text-neutral-400 mb-3">Usage Examples</h3>
            <CodeBlock>
{`// Headings with proper line height and letter-spacing
<h1 style={{
  fontSize: '60px',
  lineHeight: '72px',  // 60px × 1.2
  letterSpacing: '-0.02em',  // -2%
  fontWeight: '700'
}}>
  Main Heading
</h1>

// Paragraph with 1.5x line height
<p style={{
  fontSize: '16px',
  lineHeight: '24px',  // 16px × 1.5
  letterSpacing: '0',  // Never adjust
  fontWeight: '400'
}}>
  Body text optimized for readability
</p>

// Caps label with increased spacing
<span style={{
  fontSize: '14px',
  lineHeight: '1',  // 100%
  letterSpacing: '0.05em',  // +5%
  fontWeight: '600',
  textTransform: 'uppercase'
}}>
  Label
</span>

// Button with 100% line height
<button style={{
  fontSize: '14px',
  lineHeight: '1',  // Prevents wrapping
  letterSpacing: '0',
  fontWeight: '600'
}}>
  Button Text
</button>`}
            </CodeBlock>
          </div>
        </section>

        {/* Border Radius */}
        <section id="radius" className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-neutral-400">Border Radius</h2>
            <span className="text-sm text-neutral-300">{Object.keys(tokens.borderRadius).length} tokens</span>
          </div>

          <div className="bg-neutral-100 p-6 rounded-lg mb-8">
            <h3 className="text-sm font-semibold text-neutral-400 mb-3">Usage</h3>
            <CodeBlock>
{`// Border radius
<div className="rounded-sm">Small rounded corners</div>
<div className="rounded-lg">Large rounded corners</div>
<div className="rounded-full">Fully rounded (circle/pill)</div>

// Individual corners
<div className="rounded-t-xl">Top corners only</div>
<div className="rounded-br-2xl">Bottom-right corner only</div>`}
            </CodeBlock>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {Object.entries(tokens.borderRadius).map(([name, value]) => (
              <div key={name} className="bg-neutral-100 p-4 rounded-lg text-center">
                <div className="flex justify-center mb-3">
                  <div
                    className="w-20 h-20 bg-bleu-500 shadow-md"
                    style={{ borderRadius: value as string }}
                  />
                </div>
                <code className="text-xs bg-neutral-200 px-2 py-1 rounded text-neutral-400 block mb-2">
                  rounded-{name}
                </code>
                <span className="text-xs text-neutral-300 font-mono">{value}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
