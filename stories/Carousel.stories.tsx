import type { Meta, StoryObj } from '@storybook/react'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Carousel>

export const CarouselExample: Story = {
  render: () => (
    <Carousel className="w-full max-w-md mx-auto">
      <CarouselContent>
        <CarouselItem className="bg-bleu-500 text-white p-8 text-center min-h-40 flex items-center justify-center">
          <div>
            <h3 className="text-xl font-bold mb-2">Featured Artist</h3>
            <p>Discover incredible talent</p>
          </div>
        </CarouselItem>
        <CarouselItem className="bg-vert-500 text-white p-8 text-center min-h-40 flex items-center justify-center">
          <div>
            <h3 className="text-xl font-bold mb-2">New Program</h3>
            <p>Open for applications</p>
          </div>
        </CarouselItem>
        <CarouselItem className="bg-orange-500 text-white p-8 text-center min-h-40 flex items-center justify-center">
          <div>
            <h3 className="text-xl font-bold mb-2">Success Story</h3>
            <p>Read inspiring stories</p>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="left-0" />
      <CarouselNext className="right-0" />
    </Carousel>
  ),
}
