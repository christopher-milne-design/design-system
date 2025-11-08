import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '@/components/ui/badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Badge>

export const BadgeVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge className="bg-feedback-success text-white">Open</Badge>
      <Badge className="bg-feedback-error text-white">Closed</Badge>
      <Badge className="bg-brand-primary text-white">New</Badge>
      <Badge className="bg-bleu-500 text-white">Featured</Badge>
    </div>
  ),
}
