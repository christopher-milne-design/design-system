import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const meta: Meta = {
  title: 'Components/Form',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

export const FormExample: Story = {
  render: () => (
    <div className="space-y-4 max-w-sm">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Your name" className="border-0" />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="your@email.com" className="border-0" />
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="Your message" className="border-0" rows={3} />
      </div>
      <Button className="bg-brand-primary text-white w-full">Submit</Button>
    </div>
  ),
}
