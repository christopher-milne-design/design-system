import type { Meta, StoryObj } from '@storybook/react';
import SpotlightCard from '@/components/council/cards/SpotlightCard';
import { SpotlightEntry } from '@/lib/contentful';

const meta: Meta<typeof SpotlightCard> = {
  title: 'Council/Cards/SpotlightCard',
  component: SpotlightCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SpotlightCard>;

// Mock spotlight data
const mockSpotlight: SpotlightEntry = {
  sys: {
    id: 'spotlight-1',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  fields: {
    title: 'Celebrating Indigenous Artists Across Canada',
    slug: 'celebrating-indigenous-artists',
    excerpt: 'Discover how Indigenous artists are shaping contemporary Canadian culture through traditional and innovative artistic practices.',
    body: {}, // Rich text content would go here
    featuredImage: {
      fields: {
        file: {
          url: '//images.ctfassets.net/example/indigenous-art.jpg',
        },
        title: 'Indigenous artist working on canvas',
        description: 'An artist creating traditional Indigenous artwork',
      },
    },
    publishDate: '2024-01-15T10:00:00Z',
    author: 'Sarah Thompson',
    tags: ['Indigenous Arts', 'Culture'],
    category: 'Community',
  },
};

const mockSpotlightNoImage: SpotlightEntry = {
  sys: {
    id: 'spotlight-2',
    createdAt: '2024-02-01T10:00:00Z',
    updatedAt: '2024-02-01T10:00:00Z',
  },
  fields: {
    title: 'New Funding Opportunities for Emerging Artists',
    slug: 'new-funding-opportunities',
    excerpt: 'Learn about the latest grant programs designed to support early-career artists and arts organizations.',
    body: {},
    publishDate: '2024-02-01T10:00:00Z',
    author: 'Michael Chen',
    tags: ['Grants', 'Funding'],
    category: 'News',
  },
};

const mockSpotlightLongTitle: SpotlightEntry = {
  sys: {
    id: 'spotlight-3',
    createdAt: '2024-03-10T10:00:00Z',
    updatedAt: '2024-03-10T10:00:00Z',
  },
  fields: {
    title: 'Digital Transformation in the Arts: How Technology is Revolutionizing Creative Expression and Audience Engagement',
    slug: 'digital-transformation-arts',
    excerpt: 'An in-depth exploration of how digital tools and platforms are transforming the way artists create, share, and monetize their work in the modern era.',
    body: {},
    featuredImage: {
      fields: {
        file: {
          url: '//images.ctfassets.net/example/digital-art.jpg',
        },
        title: 'Digital art installation',
      },
    },
    publishDate: '2024-03-10T10:00:00Z',
    tags: ['Digital Arts', 'Technology', 'Innovation'],
    category: 'Research',
  },
};

/**
 * Default spotlight card with image, tags, and author
 */
export const Default: Story = {
  args: {
    spotlight: mockSpotlight,
  },
};

/**
 * Spotlight card without featured image
 */
export const NoImage: Story = {
  args: {
    spotlight: mockSpotlightNoImage,
  },
};

/**
 * Spotlight card with long title and multiple tags
 */
export const LongContent: Story = {
  args: {
    spotlight: mockSpotlightLongTitle,
  },
};

/**
 * Multiple cards in a grid to show layout
 */
export const GridLayout: Story = {
  decorators: [
    (Story) => (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        <SpotlightCard spotlight={mockSpotlight} />
        <SpotlightCard spotlight={mockSpotlightNoImage} />
        <SpotlightCard spotlight={mockSpotlightLongTitle} />
      </div>
    ),
  ],
  args: {
    spotlight: mockSpotlight,
  },
};
