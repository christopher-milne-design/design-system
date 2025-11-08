import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tabs>

export const TabsExample: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
        <TabsTrigger value="apply">How to Apply</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="mt-4">
        <p className="text-text-secondary">Program overview and key information goes here.</p>
      </TabsContent>
      <TabsContent value="eligibility" className="mt-4">
        <p className="text-text-secondary">Eligibility requirements and criteria.</p>
      </TabsContent>
      <TabsContent value="apply" className="mt-4">
        <p className="text-text-secondary">Instructions and steps to apply.</p>
      </TabsContent>
    </Tabs>
  ),
}
