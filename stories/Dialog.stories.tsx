import type { Meta, StoryObj } from '@storybook/react'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Dialog>

export const DialogExample: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-brand-primary text-white">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="border-0">
        <DialogHeader>
          <DialogTitle>Accessibility Statement</DialogTitle>
          <DialogDescription>
            Our commitment to accessibility and inclusive design for all users.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-sm text-text-secondary">
            We are committed to ensuring digital accessibility for individuals with disabilities.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  ),
}
