import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Design System/Tokens',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

const ColorSwatch = ({ name, className }: { name: string; className: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div className={`w-20 h-20 rounded-md border border-border-default ${className}`} />
    <span className="text-sm text-text-secondary font-mono">{name}</span>
  </div>
)

const SpacingSwatch = ({ name, value }: { name: string; value: string }) => (
  <div className="flex items-center gap-4">
    <div className={`bg-brand-primary h-8 ${value}`} />
    <span className="text-sm text-text-secondary font-mono">{name}</span>
  </div>
)

export const Colors: Story = {
  render: () => (
    <div className="p-8 space-y-12">
      <div>
        <h1 className="text-3xl font-bold mb-2">Color Tokens</h1>
        <p className="text-text-muted mb-8">
          Semantic color tokens from Token Studio, synced via GitHub
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Brand Colors</h2>
        <div className="flex flex-wrap gap-6">
          <ColorSwatch name="primary" className="bg-brand-primary" />
          <ColorSwatch name="primary-hover" className="bg-brand-primary-hover" />
          <ColorSwatch name="primary-active" className="bg-brand-primary-active" />
          <ColorSwatch name="secondary" className="bg-brand-secondary" />
          <ColorSwatch name="secondary-hover" className="bg-brand-secondary-hover" />
          <ColorSwatch name="secondary-active" className="bg-brand-secondary-active" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Text Colors</h2>
        <div className="flex flex-wrap gap-6">
          <ColorSwatch name="primary" className="bg-text-primary" />
          <ColorSwatch name="secondary" className="bg-text-secondary" />
          <ColorSwatch name="muted" className="bg-text-muted" />
          <ColorSwatch name="inverse" className="bg-text-inverse" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Surface Colors</h2>
        <div className="flex flex-wrap gap-6">
          <ColorSwatch name="background" className="bg-surface-background" />
          <ColorSwatch name="card" className="bg-surface-card" />
          <ColorSwatch name="elevated" className="bg-surface-elevated" />
          <ColorSwatch name="overlay" className="bg-surface-overlay" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Feedback Colors</h2>
        <div className="flex flex-wrap gap-6">
          <ColorSwatch name="success" className="bg-feedback-success" />
          <ColorSwatch name="success-subtle" className="bg-feedback-success-subtle" />
          <ColorSwatch name="warning" className="bg-feedback-warning" />
          <ColorSwatch name="warning-subtle" className="bg-feedback-warning-subtle" />
          <ColorSwatch name="error" className="bg-feedback-error" />
          <ColorSwatch name="error-subtle" className="bg-feedback-error-subtle" />
          <ColorSwatch name="info" className="bg-feedback-info" />
          <ColorSwatch name="info-subtle" className="bg-feedback-info-subtle" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Border Colors</h2>
        <div className="flex flex-wrap gap-6">
          <ColorSwatch name="default" className="bg-border-default" />
          <ColorSwatch name="subtle" className="bg-border-subtle" />
          <ColorSwatch name="strong" className="bg-border-strong" />
          <ColorSwatch name="divider" className="bg-border-divider" />
          <ColorSwatch name="focus" className="bg-border-focus" />
        </div>
      </section>
    </div>
  ),
}

export const Spacing: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Spacing Tokens</h1>
        <p className="text-text-muted mb-8">
          Consistent spacing scale from design tokens
        </p>
      </div>

      <section className="space-y-4">
        <SpacingSwatch name="xs" value="w-xs" />
        <SpacingSwatch name="sm" value="w-sm" />
        <SpacingSwatch name="md" value="w-md" />
        <SpacingSwatch name="lg" value="w-lg" />
        <SpacingSwatch name="xl" value="w-xl" />
        <SpacingSwatch name="2xl" value="w-2xl" />
        <SpacingSwatch name="3xl" value="w-3xl" />
        <SpacingSwatch name="4xl" value="w-4xl" />
      </section>
    </div>
  ),
}

const TypographyExample = ({ 
  label, 
  mobileSize, 
  desktopSize, 
  children 
}: { 
  label: string
  mobileSize: string
  desktopSize: string
  children: React.ReactNode 
}) => (
  <div className="space-y-2">
    <div className="flex items-center gap-4 text-xs text-text-muted">
      <span className="font-mono w-24">{label}</span>
      <span className="text-text-muted">
        <span className="md:hidden">{mobileSize}</span>
        <span className="hidden md:inline">{desktopSize} (from {mobileSize})</span>
      </span>
    </div>
    {children}
  </div>
)

export const Typography: Story = {
  render: () => (
    <div className="p-8 space-y-12">
      <div>
        <h1 className="text-3xl font-bold mb-2">Typography System</h1>
        <p className="text-text-muted mb-4">
          Helvetica Neue for headings, Echo for body text
        </p>
        <p className="text-sm text-text-secondary">
          Resize your browser to see mobile (&lt; 768px) vs desktop scales
        </p>
      </div>

      <section className="space-y-8">
        <h2 className="text-2xl font-semibold mb-4">Headings</h2>
        
        <TypographyExample label="H1" mobileSize="40px" desktopSize="60px">
          <h1 className="text-[40px] leading-[48px] md:text-[60px] md:leading-[72px] font-bold tracking-[-0.02em]">
            The quick brown fox jumps
          </h1>
        </TypographyExample>

        <TypographyExample label="H2" mobileSize="32px" desktopSize="44px">
          <h2 className="text-[32px] leading-[40px] md:text-[44px] md:leading-[52px] font-bold tracking-[-0.02em]">
            The quick brown fox jumps
          </h2>
        </TypographyExample>

        <TypographyExample label="H3" mobileSize="24px" desktopSize="32px">
          <h3 className="text-[24px] leading-[28px] md:text-[32px] md:leading-[40px] font-bold tracking-[-0.02em]">
            The quick brown fox jumps
          </h3>
        </TypographyExample>

        <TypographyExample label="H4" mobileSize="20px" desktopSize="24px">
          <h4 className="text-[20px] leading-[24px] md:text-[24px] md:leading-[28px] font-bold tracking-[-0.02em]">
            The quick brown fox jumps
          </h4>
        </TypographyExample>

        <TypographyExample label="H5" mobileSize="16px" desktopSize="20px">
          <h5 className="text-[16px] leading-[20px] md:text-[20px] md:leading-[24px] font-semibold tracking-[-0.02em]">
            The quick brown fox jumps
          </h5>
        </TypographyExample>

        <TypographyExample label="H6" mobileSize="14px" desktopSize="16px">
          <h6 className="text-[14px] leading-[16px] md:text-[16px] md:leading-[20px] font-semibold tracking-[-0.02em]">
            The quick brown fox jumps
          </h6>
        </TypographyExample>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-semibold mb-4">Paragraphs</h2>
        
        <TypographyExample label="P1" mobileSize="18px" desktopSize="20px">
          <p className="text-[18px] leading-[28px] md:text-[20px] md:leading-[32px]">
            The quick brown fox jumps over the lazy dog. This is body text using the Echo font family with comfortable line spacing for extended reading.
          </p>
        </TypographyExample>

        <TypographyExample label="P2" mobileSize="16px" desktopSize="16px">
          <p className="text-[16px] leading-[24px]">
            The quick brown fox jumps over the lazy dog. This is body text using the Echo font family with comfortable line spacing for extended reading.
          </p>
        </TypographyExample>

        <TypographyExample label="P3" mobileSize="14px" desktopSize="14px">
          <p className="text-[14px] leading-[20px]">
            The quick brown fox jumps over the lazy dog. This is body text using the Echo font family.
          </p>
        </TypographyExample>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-semibold mb-4">Labels</h2>
        
        <TypographyExample label="CAPS Large" mobileSize="12px" desktopSize="14px">
          <p className="text-[12px] md:text-[14px] leading-none font-semibold uppercase tracking-[0.05em]">
            ALL CAPS LABEL
          </p>
        </TypographyExample>

        <TypographyExample label="CAPS Small" mobileSize="10px" desktopSize="12px">
          <p className="text-[10px] md:text-[12px] leading-none font-semibold uppercase tracking-[0.05em]">
            ALL CAPS LABEL
          </p>
        </TypographyExample>

        <TypographyExample label="Label Large" mobileSize="14px" desktopSize="14px">
          <p className="text-[14px] leading-none font-medium">
            Standard Label
          </p>
        </TypographyExample>

        <TypographyExample label="Label Small" mobileSize="12px" desktopSize="12px">
          <p className="text-[12px] leading-none font-medium">
            Small Label
          </p>
        </TypographyExample>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
        
        <TypographyExample label="Button Large" mobileSize="16px" desktopSize="16px">
          <span className="text-[16px] leading-none font-semibold">
            Button Text
          </span>
        </TypographyExample>

        <TypographyExample label="Button Medium" mobileSize="14px" desktopSize="14px">
          <span className="text-[14px] leading-none font-semibold">
            Button Text
          </span>
        </TypographyExample>

        <TypographyExample label="Button Small" mobileSize="12px" desktopSize="12px">
          <span className="text-[12px] leading-none font-semibold">
            Button Text
          </span>
        </TypographyExample>
      </section>
    </div>
  ),
}
