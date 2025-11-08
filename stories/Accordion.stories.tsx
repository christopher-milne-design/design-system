import type { Meta, StoryObj } from '@storybook/react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Accordion>

export const AccordionExample: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What funding programs are available?</AccordionTrigger>
        <AccordionContent>
          The Canada Council offers various programs including Explore and Create, Concept to Realization, and Arts Across Canada.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How do I apply for funding?</AccordionTrigger>
        <AccordionContent>
          Applications are submitted through our online portal. You'll need to create an account and provide project details.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
