import type { Meta, StoryObj } from '@storybook/react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/Dropdown',
  component: DropdownMenu,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DropdownMenu>

export const DropdownExample: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-0">
        <DropdownMenuItem>Language: English</DropdownMenuItem>
        <DropdownMenuItem>Language: Français</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}
