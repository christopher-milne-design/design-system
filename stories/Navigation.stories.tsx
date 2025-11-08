import type { Meta, StoryObj } from '@storybook/react'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from '@/components/ui/navigation-menu'

const meta: Meta<typeof NavigationMenu> = {
  title: 'Components/Navigation',
  component: NavigationMenu,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof NavigationMenu>

export const NavigationExample: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-40 p-4 space-y-2">
              <p className="text-sm font-semibold">Explore and Create</p>
              <p className="text-sm font-semibold">Concept to Realization</p>
              <p className="text-sm font-semibold">Arts Across Canada</p>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}
