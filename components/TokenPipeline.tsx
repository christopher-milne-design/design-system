interface PipelineStepProps {
  stepNumber: number;
  toolName: string;
  title: string;
  description: string;
  detailedExplanation: string;
  codeExample: {
    label: string;
    code: string;
  }[];
  transformNote?: string;
  numberColor: string;
}

function PipelineStep({ 
  stepNumber, 
  toolName, 
  title, 
  description, 
  detailedExplanation,
  codeExample,
  transformNote,
  numberColor
}: PipelineStepProps) {
  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Step number - large, outside box with brand colour */}
      <div className="mb-8">
        <div className={`text-[120px] md:text-[180px] font-bold leading-none ${numberColor}`} style={{ letterSpacing: '-0.02em' }}>
          {stepNumber}
        </div>
      </div>
      
      <div className="relative -mt-24 md:-mt-36">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-text-primary mb-2" style={{ letterSpacing: '-0.02em' }}>
            {toolName}
          </h3>
          <p className="text-lg font-semibold text-text-primary mb-2">{title}</p>
          <p className="text-text-secondary mb-4">{description}</p>
          <p className="text-text-secondary text-sm leading-relaxed mb-6">{detailedExplanation}</p>
        </div>

        {/* Code examples */}
        <div className="space-y-4">
        {codeExample.map((example, idx) => (
          <div key={idx} className="bg-surface-elevated p-5">
            <div className="mb-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
                {example.label}
              </span>
            </div>
            <pre className="text-sm text-text-secondary font-mono overflow-x-auto whitespace-pre-wrap">
              <code>{example.code}</code>
            </pre>
          </div>
        ))}
        {transformNote && (
          <div className="mt-4 text-sm text-text-muted italic">
            {transformNote}
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default function TokenPipeline() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-text-primary mb-6" style={{ letterSpacing: '-0.02em' }}>
            The Token Pipeline
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed mb-4">
            Every design decision flows through a precise pipeline, from brand guidelines in Figma to production code. Follow a single button as it transforms through each stage. This workflow ensures consistency, eliminates manual updates, and keeps design and code synchronized.
          </p>
          
          {/* Built With section moved here */}
          <div className="mb-20">
            <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-12" style={{ letterSpacing: '-0.02em' }}>
              Built With
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              {/* Figma */}
              <a 
                href="https://figma.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 group"
              >
                <div className="h-16 flex items-center justify-center">
                  <svg className="h-12 w-auto transition-opacity group-hover:opacity-70" viewBox="0 0 200 300" fill="none">
                    <rect x="50" y="50" width="50" height="50" rx="10" fill="#F24E1E"/>
                    <rect x="100" y="50" width="50" height="50" rx="10" fill="#A259FF"/>
                    <rect x="100" y="100" width="50" height="50" rx="10" fill="#1ABCFE"/>
                    <circle cx="75" cy="150" r="25" fill="#0ACF83"/>
                    <rect x="100" y="150" width="50" height="50" rx="10" fill="#FF61F6"/>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-text-primary mb-1 group-hover:text-brand-primary transition-colors" style={{ letterSpacing: '-0.02em' }}>Figma</p>
                  <p className="text-sm text-text-secondary">Design & Prototyping</p>
                </div>
              </a>

              {/* Next.js */}
              <a 
                href="https://nextjs.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 group"
              >
                <div className="h-16 flex items-center justify-center">
                  <svg className="h-12 w-auto transition-opacity group-hover:opacity-70" viewBox="0 0 180 180" fill="none">
                    <mask id="mask0_408_139" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                      <circle cx="90" cy="90" r="90" fill="black"/>
                    </mask>
                    <g mask="url(#mask0_408_139)">
                      <circle cx="90" cy="90" r="90" fill="black"/>
                      <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_139)"/>
                      <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_139)"/>
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_408_139" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"/>
                        <stop offset="1" stopColor="white" stopOpacity="0"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_408_139" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"/>
                        <stop offset="1" stopColor="white" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-text-primary mb-1 group-hover:text-brand-primary transition-colors" style={{ letterSpacing: '-0.02em' }}>Next.js 16</p>
                  <p className="text-sm text-text-secondary">React Framework</p>
                </div>
              </a>

              {/* Tailwind CSS */}
              <a 
                href="https://tailwindcss.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 group"
              >
                <div className="h-16 flex items-center justify-center">
                  <svg className="h-12 w-auto transition-opacity group-hover:opacity-70" viewBox="0 0 248 248">
                    <path fill="#06B6D4" d="M124,0C70.8,0,46.4,26.4,40,79.2c9.6-26.4,20.8-36.4,33.6-30c7.3,1.8,12.5,7,18.3,12.8 C103.7,73.8,118.1,88,148,88c53.2,0,77.6-26.4,84-79.2c-9.6,26.4-20.8,36.4-33.6,30c-7.3-1.8-12.5-7-18.3-12.8 C168.3,14.2,153.9,0,124,0z M76,88c-53.2,0-77.6,26.4-84,79.2c9.6-26.4,20.8-36.4,33.6-30c7.3,1.8,12.5,7,18.3,12.8 C55.7,161.8,70.1,176,100,176c53.2,0,77.6-26.4,84-79.2c-9.6,26.4-20.8,36.4-33.6,30c-7.3-1.8-12.5-7-18.3-12.8 C120.3,102.2,105.9,88,76,88z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-text-primary mb-1 group-hover:text-brand-primary transition-colors" style={{ letterSpacing: '-0.02em' }}>Tailwind CSS v4</p>
                  <p className="text-sm text-text-secondary">CSS Framework</p>
                </div>
              </a>

              {/* Token Studio */}
              <a 
                href="https://tokens.studio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 group"
              >
                <div className="h-16 flex items-center justify-center">
                  <svg className="h-12 w-auto transition-opacity group-hover:opacity-70" viewBox="0 0 200 200" fill="none">
                    <rect width="200" height="200" rx="40" fill="#8B5CF6"/>
                    <path d="M60 100L100 60L140 100L100 140L60 100Z" fill="white"/>
                    <circle cx="100" cy="100" r="15" fill="#8B5CF6"/>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-text-primary mb-1 group-hover:text-brand-primary transition-colors" style={{ letterSpacing: '-0.02em' }}>Token Studio</p>
                  <p className="text-sm text-text-secondary">Design Tokens</p>
                </div>
              </a>

              {/* Style Dictionary */}
              <a 
                href="https://amzn.github.io/style-dictionary" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 group"
              >
                <div className="h-16 flex items-center justify-center">
                  <svg className="h-12 w-auto transition-opacity group-hover:opacity-70" viewBox="0 0 200 200" fill="none">
                    <rect width="200" height="200" rx="0" fill="#000"/>
                    <rect x="20" y="50" width="30" height="100" fill="#FF6B6B"/>
                    <rect x="60" y="40" width="30" height="110" fill="#4ECDC4"/>
                    <rect x="100" y="60" width="30" height="90" fill="#45B7D1"/>
                    <rect x="140" y="30" width="30" height="120" fill="#95E1D3"/>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-text-primary mb-1 group-hover:text-brand-primary transition-colors" style={{ letterSpacing: '-0.02em' }}>Style Dictionary</p>
                  <p className="text-sm text-text-secondary">Token Transform</p>
                </div>
              </a>

              {/* ShadCN UI */}
              <a 
                href="https://ui.shadcn.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 group"
              >
                <div className="h-16 flex items-center justify-center">
                  <svg className="h-12 w-auto transition-opacity group-hover:opacity-70" viewBox="0 0 256 256" fill="none">
                    <rect width="256" height="256" rx="60" fill="black"/>
                    <path d="M128 34L94 98L128 162L162 98L128 34Z" fill="white"/>
                    <path d="M128 162L94 226H162L128 162Z" fill="white" opacity="0.7"/>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-text-primary mb-1 group-hover:text-brand-primary transition-colors" style={{ letterSpacing: '-0.02em' }}>ShadCN UI</p>
                  <p className="text-sm text-text-secondary">Components</p>
                </div>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 group"
              >
                <div className="h-16 flex items-center justify-center">
                  <svg className="h-12 w-auto transition-opacity group-hover:opacity-70" viewBox="0 0 24 24" fill="none">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="black"/>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-text-primary mb-1 group-hover:text-brand-primary transition-colors" style={{ letterSpacing: '-0.02em' }}>GitHub</p>
                  <p className="text-sm text-text-secondary">Version Control</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-24">
          {/* Step 1: Figma */}
          <PipelineStep
            stepNumber={1}
            toolName="Figma"
            title="Primitive Tokens"
            description="Designers define brand colours, typography, and spacing as variables in Figma"
            detailedExplanation="Raw design values from brand guidelines: hex codes, typography, spacing. They're called 'primitive' because they're foundational values before semantic meaning is applied."
            codeExample={[
              {
                label: "Figma Variables",
                code: `bleu-500: #1a70ef
orange-600: #ce4d0e
vert-500: #15ce49
jaune-400: #f5d132
rose-500: #fc72e0`
              }
            ]}
            numberColor="text-bleu-100"
          />

          {/* Step 2: Token Studio */}
          <PipelineStep
            stepNumber={2}
            toolName="Token Studio"
            title="Semantic Mapping"
            description="Primitive tokens are mapped to semantic names based on their purpose, not appearance"
            detailedExplanation="Instead of using 'bleu-500' directly in code, semantic tokens like 'brand-primary' reference primitive values. This means changing the entire brand colour scheme requires only updating the semantic mapping, with no component code changes needed."
            codeExample={[
              {
                label: "Semantic Token Definitions",
                code: `brand-primary: {color.bleu.500}
brand-primary-hover: {color.bleu.600}
brand-secondary: {color.orange.600}
text-primary: {color.slate.900}
surface-background: {color.slate.50}`
              }
            ]}
            transformNote="The {color.bleu.500} syntax references the primitive token, creating a dependency chain."
            numberColor="text-orange-100"
          />

          {/* Step 3: GitHub */}
          <PipelineStep
            stepNumber={3}
            toolName="GitHub"
            title="Version Control"
            description="Token Studio syncs tokens to a GitHub repository"
            detailedExplanation="All design tokens live as JSON files in a centralized repository. This creates a single source of truth that can be shared across projects, versioned, and integrated into CI/CD pipelines. Push and pull changes between Token Studio and GitHub to keep design and code repositories synchronized."
            codeExample={[
              {
                label: "Repository Structure",
                code: `tokens/
  ├── colors.json
  ├── semantic.json
  ├── spacing.json
  ├── typography.json
  └── radius.json`
              },
              {
                label: "Sync Workflow",
                code: `Figma → Token Studio → 
  GitHub Push/Pull → 
  Sync to projects`
              }
            ]}
            numberColor="text-vert-100"
          />

          {/* Step 4: Style Dictionary */}
          <PipelineStep
            stepNumber={4}
            toolName="Style Dictionary"
            title="Transform and Generate"
            description="Style Dictionary transforms JSON tokens into CSS variables, TypeScript types, and other platform formats"
            detailedExplanation="This is where tokens become code. Style Dictionary reads token files and generates CSS custom properties. It resolves semantic token references, turning {color.bleu.500} into the actual hex value #1a70ef."
            codeExample={[
              {
                label: "Generated CSS Variables",
                code: `:root {
  --color-bleu-500: #1a70ef;
  --color-brand-primary: #1a70ef;
  --color-brand-primary-hover: #105ecb;
  --color-text-primary: #0f172a;
  --color-surface-background: #f8fafc;
}`
              }
            ]}
            transformNote="Semantic tokens are resolved to their primitive values during this transformation."
            numberColor="text-rose-100"
          />

          {/* Step 5: Tailwind CSS */}
          <PipelineStep
            stepNumber={5}
            toolName="Tailwind CSS"
            title="Utility Classes"
            description="Tailwind generates utility classes from CSS variables, making tokens accessible as class names"
            detailedExplanation="A custom Tailwind plugin maps CSS variables to utility classes. Instead of writing style={{ backgroundColor: 'var(--color-brand-primary)' }}, use bg-brand-primary. This provides type safety, autocomplete, and Tailwind's responsive and state variants."
            codeExample={[
              {
                label: "Available Classes",
                code: `bg-brand-primary
hover:bg-brand-primary-hover
active:bg-brand-primary-active
text-brand-primary
text-text-primary
text-text-secondary
bg-surface-card
border-border-default`
              }
            ]}
            transformNote="These classes work with Tailwind's variants like hover:, focus:, and responsive breakpoints."
            numberColor="text-jaune-100"
          />

          {/* Step 6: Component */}
          <PipelineStep
            stepNumber={6}
            toolName="Component"
            title="Live Component"
            description="Components use semantic tokens via Tailwind classes, creating a maintainable and consistent design system"
            detailedExplanation="The token reaches a React component. Developers use semantic token classes, so components reflect design updates automatically. When brand colour changes in Figma, every component using bg-brand-primary updates with no code changes required."
            codeExample={[
              {
                label: "React Component",
                code: `<button 
  className="bg-brand-primary 
             hover:bg-brand-primary-hover 
             active:bg-brand-primary-active
             text-text-inverse 
             px-8 py-4 
             font-bold 
             transition-colors">
  View Foundations
</button>`
              }
            ]}
            transformNote="The button below demonstrates this exact component using semantic tokens."
            numberColor="text-bleu-clair-100"
          />
        </div>

        {/* Live Example */}
        <div className="mt-24 max-w-5xl mx-auto">
          <div className="bg-surface-elevated p-12">
            <h3 className="text-3xl font-bold text-text-primary mb-6" style={{ letterSpacing: '-0.02em' }}>
              See It In Action
            </h3>
            <p className="text-text-secondary mb-8 leading-relaxed">
              This button uses the exact token pipeline we just traced. Every colour, spacing, and typography value comes from the design system tokens.
            </p>
            <div className="flex justify-center mb-8">
              <button className="bg-brand-primary hover:bg-brand-primary-hover active:bg-brand-primary-active text-text-inverse px-10 py-5 font-bold text-lg transition-colors">
                View Foundations
              </button>
            </div>
            <div className="bg-white p-6 border border-border-default">
              <pre className="text-sm text-text-secondary font-mono overflow-x-auto">
                <code>{`<button 
  className="bg-brand-primary 
             hover:bg-brand-primary-hover 
             text-text-inverse 
             px-10 py-5">
  View Foundations
</button>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-24 max-w-5xl mx-auto">
          <div className="bg-bleu-50 p-12">
            <h3 className="text-3xl font-bold text-text-primary mb-6" style={{ letterSpacing: '-0.02em' }}>
              One Change, Everywhere
            </h3>
          <p className="text-text-secondary text-lg leading-relaxed mb-6">
            When a designer updates the primary brand colour in Figma, the change flows through the entire pipeline:
            </p>
            <ol className="space-y-3 text-text-secondary text-lg leading-relaxed ml-6">
              <li className="list-decimal"><strong className="text-text-primary">Figma</strong> → Colour variable updated</li>
              <li className="list-decimal"><strong className="text-text-primary">Token Studio</strong> → Semantic token reference resolves to new value</li>
              <li className="list-decimal"><strong className="text-text-primary">GitHub</strong> → Token files updated and committed</li>
              <li className="list-decimal"><strong className="text-text-primary">Style Dictionary</strong> → CSS variables regenerated on next build</li>
              <li className="list-decimal"><strong className="text-text-primary">Tailwind</strong> → Utility classes reflect new values</li>
              <li className="list-decimal"><strong className="text-text-primary">Components</strong> → Every button, card, and element using <code className="bg-surface-card px-2 py-1 text-sm font-mono">bg-brand-primary</code> updates—no code changes required</li>
            </ol>
            <p className="text-text-secondary text-lg leading-relaxed mt-8">
              No component code changes. No manual CSS updates. Design-driven, token-powered consistency across the system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
