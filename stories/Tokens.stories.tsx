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

export const Typography: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Typography System</h1>
        <p className="text-text-muted mb-8">
          Helvetica Neue for headings, Echo for body text
        </p>
      </div>

      <section className="space-y-6">
        <div>
          <p className="text-xs text-text-muted mb-2">Heading 1</p>
          <h1 className="text-6xl font-bold">The quick brown fox jumps</h1>
        </div>
        <div>
          <p className="text-xs text-text-muted mb-2">Heading 2</p>
          <h2 className="text-5xl font-bold">The quick brown fox jumps</h2>
        </div>
        <div>
          <p className="text-xs text-text-muted mb-2">Heading 3</p>
          <h3 className="text-4xl font-semibold">The quick brown fox jumps</h3>
        </div>
        <div>
          <p className="text-xs text-text-muted mb-2">Heading 4</p>
          <h4 className="text-3xl font-semibold">The quick brown fox jumps</h4>
        </div>
        <div>
          <p className="text-xs text-text-muted mb-2">Body Large</p>
          <p className="text-lg">
            The quick brown fox jumps over the lazy dog. This is body text using the Echo font family.
          </p>
        </div>
        <div>
          <p className="text-xs text-text-muted mb-2">Body Regular</p>
          <p className="text-base">
            The quick brown fox jumps over the lazy dog. This is body text using the Echo font family.
          </p>
        </div>
        <div>
          <p className="text-xs text-text-muted mb-2">Body Small</p>
          <p className="text-sm">
            The quick brown fox jumps over the lazy dog. This is body text using the Echo font family.
          </p>
        </div>
      </section>
    </div>
  ),
}
