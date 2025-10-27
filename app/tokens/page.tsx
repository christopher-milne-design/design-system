import { tokens } from '@/lib/tokens';

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
            Design System Style Guide
          </h1>
          <p className="text-lg text-neutral-300 mb-4">
            Design tokens automatically synced from Figma via Token Studio → GitHub → Style Dictionary → Tailwind
          </p>
          <div className="flex gap-4 text-sm">
            <a href="#semantic" className="text-bleu-500 hover:text-bleu-700">Semantic Tokens</a>
            <a href="#colors" className="text-bleu-500 hover:text-bleu-700">Primitive Colors</a>
            <a href="#spacing" className="text-bleu-500 hover:text-bleu-700">Spacing</a>
            <a href="#typography" className="text-bleu-500 hover:text-bleu-700">Typography</a>
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
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-100 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <code className="text-sm bg-neutral-200 px-3 py-1 rounded text-neutral-400">bg-brand-primary</code>
                  <span className="text-xs text-neutral-300 font-mono">→ bleu-500</span>
                </div>
                <div className="space-y-2">
                  <div className="bg-brand-primary h-16 rounded-lg flex items-center justify-center text-neutral-50 font-semibold">
                    Primary Brand
                  </div>
                  <div className="bg-brand-primary-hover h-12 rounded-lg flex items-center justify-center text-neutral-50 text-sm">
                    Hover State
                  </div>
                  <div className="bg-brand-primary-active h-12 rounded-lg flex items-center justify-center text-neutral-50 text-sm">
                    Active State
                  </div>
                </div>
              </div>
              <div className="bg-neutral-100 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <code className="text-sm bg-neutral-200 px-3 py-1 rounded text-neutral-400">bg-brand-secondary</code>
                  <span className="text-xs text-neutral-300 font-mono">→ orange-600</span>
                </div>
                <div className="space-y-2">
                  <div className="bg-brand-secondary h-16 rounded-lg flex items-center justify-center text-neutral-50 font-semibold">
                    Secondary Brand
                  </div>
                  <div className="bg-brand-secondary-hover h-12 rounded-lg flex items-center justify-center text-neutral-50 text-sm">
                    Hover State
                  </div>
                  <div className="bg-brand-secondary-active h-12 rounded-lg flex items-center justify-center text-neutral-50 text-sm">
                    Active State
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

        {/* Typography */}
        <section id="typography" className="mb-20">
          <h2 className="text-3xl font-bold text-neutral-400 mb-6">Typography</h2>

          <div className="bg-neutral-100 p-6 rounded-lg mb-8">
            <h3 className="text-sm font-semibold text-neutral-400 mb-3">Usage</h3>
            <CodeBlock>
{`// Font sizes
<h1 className="text-4xl">Large heading</h1>
<p className="text-base">Body text</p>

// Font weights
<span className="font-bold">Bold text</span>
<span className="font-normal">Normal text</span>

// Line heights
<p className="leading-tight">Tight line height</p>
<p className="leading-relaxed">Relaxed line height</p>

// Combined
<h2 className="text-2xl font-semibold leading-tight">
  Heading with multiple properties
</h2>`}
            </CodeBlock>
          </div>

          {/* Font Sizes */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-neutral-400 mb-4">Font Sizes</h3>
            <div className="space-y-4">
              {Object.entries(tokens.fontSize).map(([name, value]) => (
                <div key={name} className="bg-neutral-100 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-xs bg-neutral-200 px-2 py-1 rounded text-neutral-400">text-{name}</code>
                    <span className="text-neutral-300 text-xs font-mono">{value}</span>
                  </div>
                  <span
                    className="text-neutral-400 block"
                    style={{ fontSize: value as string }}
                  >
                    The quick brown fox jumps over the lazy dog
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Font Weights */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-neutral-400 mb-4">Font Weights</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(tokens.fontWeight).map(([name, value]) => (
                <div key={name} className="bg-neutral-100 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-xs bg-neutral-200 px-2 py-1 rounded text-neutral-400">font-{name}</code>
                    <span className="text-neutral-300 text-xs font-mono">{value}</span>
                  </div>
                  <span
                    className="text-neutral-400 text-lg block"
                    style={{ fontWeight: value as string }}
                  >
                    The quick brown fox jumps over the lazy dog
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Line Heights */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-400 mb-4">Line Heights</h3>
            <div className="space-y-4">
              {Object.entries(tokens.lineHeight).map(([name, value]) => (
                <div key={name} className="bg-neutral-100 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <code className="text-xs bg-neutral-200 px-2 py-1 rounded text-neutral-400">leading-{name}</code>
                    <span className="text-neutral-300 text-xs">{value}</span>
                  </div>
                  <p
                    className="text-neutral-400"
                    style={{ lineHeight: value as string }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              ))}
            </div>
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

        {/* Component Examples */}
        <section id="examples" className="mb-20">
          <h2 className="text-3xl font-bold text-neutral-400 mb-6">Component Examples</h2>
          <p className="text-neutral-300 mb-8">
            Real-world examples showing how to combine design tokens in components.
          </p>

          <div className="space-y-12">
            {/* Card Example */}
            <div>
              <h3 className="text-xl font-semibold text-neutral-400 mb-4">Card Component</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="bg-bleu-50 p-8 rounded-xl border-2 border-bleu-200 shadow-lg">
                    <h4 className="text-3xl font-bold text-bleu-900 mb-4">
                      Design System Card
                    </h4>
                    <p className="text-lg text-bleu-700 leading-relaxed mb-6">
                      This card uses tokens for colors, spacing, typography, and border radius. All values sync from Figma.
                    </p>
                    <div className="flex gap-4">
                      <button className="bg-bleu-500 hover:bg-bleu-700 text-neutral-50 px-6 py-3 rounded-lg font-semibold transition-colors">
                        Primary Action
                      </button>
                      <button className="bg-celadon-500 hover:bg-celadon-700 text-neutral-50 px-6 py-3 rounded-lg font-semibold transition-colors">
                        Secondary
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <CodeBlock title="Card.tsx">
{`<div className="bg-bleu-50 p-8 rounded-xl 
             border-2 border-bleu-200 shadow-lg">
  <h4 className="text-3xl font-bold text-bleu-900 mb-4">
    Design System Card
  </h4>
  <p className="text-lg text-bleu-700 leading-relaxed mb-6">
    This card uses tokens for colors, spacing,
    typography, and border radius.
  </p>
  <div className="flex gap-4">
    <button className="bg-bleu-500 hover:bg-bleu-700 
                       text-neutral-50 px-6 py-3 
                       rounded-lg font-semibold">
      Primary Action
    </button>
    <button className="bg-celadon-500 hover:bg-celadon-700 
                       text-neutral-50 px-6 py-3 
                       rounded-lg font-semibold">
      Secondary
    </button>
  </div>
</div>`}
                  </CodeBlock>
                </div>
              </div>
            </div>

            {/* Alert Examples */}
            <div>
              <h3 className="text-xl font-semibold text-neutral-400 mb-4">Alert Components</h3>
              <div className="space-y-4">
                <div className="bg-vert-50 border-l-4 border-vert-600 p-4 rounded">
                  <p className="text-vert-900 font-semibold mb-1">Success!</p>
                  <p className="text-vert-700">Your changes have been saved successfully.</p>
                </div>
                <div className="bg-jaune-50 border-l-4 border-jaune-600 p-4 rounded">
                  <p className="text-jaune-900 font-semibold mb-1">Warning</p>
                  <p className="text-jaune-800">Please review your information before continuing.</p>
                </div>
                <div className="bg-rouge-50 border-l-4 border-rouge-600 p-4 rounded">
                  <p className="text-rouge-900 font-semibold mb-1">Error</p>
                  <p className="text-rouge-700">There was a problem processing your request.</p>
                </div>
              </div>
              <div className="mt-4">
                <CodeBlock title="Alerts.tsx">
{`// Success Alert
<div className="bg-vert-50 border-l-4 border-vert-600 p-4 rounded">
  <p className="text-vert-900 font-semibold">Success!</p>
  <p className="text-vert-700">Your changes have been saved.</p>
</div>

// Warning Alert
<div className="bg-jaune-50 border-l-4 border-jaune-600 p-4 rounded">
  <p className="text-jaune-900 font-semibold">Warning</p>
  <p className="text-jaune-800">Please review your information.</p>
</div>

// Error Alert
<div className="bg-rouge-50 border-l-4 border-rouge-600 p-4 rounded">
  <p className="text-rouge-900 font-semibold">Error</p>
  <p className="text-rouge-700">There was a problem.</p>
</div>`}
                </CodeBlock>
              </div>
            </div>

            {/* Badge Examples */}
            <div>
              <h3 className="text-xl font-semibold text-neutral-400 mb-4">Badge Components</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-bleu-100 text-bleu-800 text-sm font-semibold px-3 py-1 rounded-full">Primary</span>
                <span className="bg-vert-100 text-vert-800 text-sm font-semibold px-3 py-1 rounded-full">Success</span>
                <span className="bg-jaune-100 text-jaune-800 text-sm font-semibold px-3 py-1 rounded-full">Warning</span>
                <span className="bg-rouge-100 text-rouge-800 text-sm font-semibold px-3 py-1 rounded-full">Danger</span>
                <span className="bg-neutral-200 text-neutral-400 text-sm font-semibold px-3 py-1 rounded-full">Neutral</span>
                <span className="bg-orange-100 text-orange-800 text-sm font-semibold px-3 py-1 rounded-full">Orange</span>
                <span className="bg-rose-100 text-rose-800 text-sm font-semibold px-3 py-1 rounded-full">Rose</span>
              </div>
              <div className="mt-4">
                <CodeBlock title="Badge.tsx">
{`<span className="bg-bleu-100 text-bleu-800 text-sm 
                font-semibold px-3 py-1 rounded-full">
  Primary
</span>

<span className="bg-vert-100 text-vert-800 text-sm 
                font-semibold px-3 py-1 rounded-full">
  Success
</span>`}
                </CodeBlock>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
