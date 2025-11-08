import type { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Alert>

export const AlertVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert className="bg-feedback-success border-0">
        <AlertTitle className="text-white">Success</AlertTitle>
        <AlertDescription className="text-white">Your grant application has been submitted successfully.</AlertDescription>
      </Alert>
      <Alert className="bg-feedback-error border-0">
        <AlertTitle className="text-white">Error</AlertTitle>
        <AlertDescription className="text-white">Please check your input and try again.</AlertDescription>
      </Alert>
      <Alert className="bg-feedback-warning border-0">
        <AlertTitle className="text-white">Warning</AlertTitle>
        <AlertDescription className="text-white">Please review your information before continuing.</AlertDescription>
      </Alert>
    </div>
  ),
}
