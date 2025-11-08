import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Card>

export const CardWithBadge: Story = {
  render: () => (
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
      <Card className="border-0">
        <div className="relative w-full h-32 bg-neutral-200" />
        <CardHeader>
          <CardTitle className="text-lg">Explore and Create</CardTitle>
          <CardDescription>Support for artistic exploration and creation.</CardDescription>
        </CardHeader>
      </Card>
      
      <Card className="border-0">
        <div className="relative w-full h-32 bg-neutral-200" />
        <CardHeader className="pb-8">
          <div className="flex gap-2 mb-2">
            <Badge className="bg-brand-primary text-white text-xs">New</Badge>
            <Badge className="bg-feedback-success text-white text-xs">Open</Badge>
          </div>
          <CardTitle className="text-lg">Arts Across Canada</CardTitle>
          <CardDescription>Connect with artistic communities nationwide.</CardDescription>
        </CardHeader>
      </Card>
    </div>
  ),
}
