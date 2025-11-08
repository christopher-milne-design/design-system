import type { Meta, StoryObj } from '@storybook/react';
import SpotlightGrid from '@/components/SpotlightGrid';
import { SpotlightEntry } from '@/lib/contentful';

const meta: Meta<typeof SpotlightGrid> = {
  title: 'Council/SpotlightGrid',
  component: SpotlightGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SpotlightGrid>;

// Mock spotlight data
const mockSpotlights: SpotlightEntry[] = [
  {
    sys: {
      id: 'spotlight-1',
      createdAt: '2024-01-15T10:00:00Z',
      updatedAt: '2024-01-15T10:00:00Z',
    },
    fields: {
      title: 'Celebrating Indigenous Artists Across Canada',
      slug: 'celebrating-indigenous-artists',
      excerpt: 'Discover how Indigenous artists are shaping contemporary Canadian culture through traditional and innovative artistic practices.',
      body: {},
      featuredImage: {
        fields: {
          file: {
            url: '//images.ctfassets.net/example/indigenous-art.jpg',
          },
          title: 'Indigenous artist working on canvas',
        },
      },
      publishDate: '2024-01-15T10:00:00Z',
      author: 'Sarah Thompson',
      tags: ['Indigenous Arts', 'Culture'],
      category: 'Community',
    },
  },
  {
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
  },
  {
    sys: {
      id: 'spotlight-3',
      createdAt: '2024-03-10T10:00:00Z',
      updatedAt: '2024-03-10T10:00:00Z',
    },
    fields: {
      title: 'Digital Transformation in the Arts',
      slug: 'digital-transformation-arts',
      excerpt: 'An in-depth exploration of how digital tools and platforms are transforming the way artists create, share, and monetize their work.',
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
      author: 'Alex Rivera',
      tags: ['Digital Arts', 'Technology'],
      category: 'Research',
    },
  },
  {
    sys: {
      id: 'spotlight-4',
      createdAt: '2024-04-05T10:00:00Z',
      updatedAt: '2024-04-05T10:00:00Z',
    },
    fields: {
      title: 'Theatre Revival: Post-Pandemic Success Stories',
      slug: 'theatre-revival',
      excerpt: 'How Canadian theatre companies are reimagining live performance and connecting with audiences in meaningful new ways.',
      body: {},
      featuredImage: {
        fields: {
          file: {
            url: '//images.ctfassets.net/example/theatre.jpg',
          },
          title: 'Theatre performance',
        },
      },
      publishDate: '2024-04-05T10:00:00Z',
      author: 'Jamie Lee',
      tags: ['Theatre', 'Performance'],
      category: 'Stories',
    },
  },
  {
    sys: {
      id: 'spotlight-5',
      createdAt: '2024-05-20T10:00:00Z',
      updatedAt: '2024-05-20T10:00:00Z',
    },
    fields: {
      title: 'Music Education Programs Making a Difference',
      slug: 'music-education-programs',
      excerpt: 'Highlighting innovative music education initiatives that are fostering the next generation of Canadian musicians.',
      body: {},
      publishDate: '2024-05-20T10:00:00Z',
      author: 'Patricia Brown',
      tags: ['Music', 'Education'],
      category: 'Programs',
    },
  },
  {
    sys: {
      id: 'spotlight-6',
      createdAt: '2024-06-15T10:00:00Z',
      updatedAt: '2024-06-15T10:00:00Z',
    },
    fields: {
      title: 'Visual Arts in Public Spaces: A Community Approach',
      slug: 'visual-arts-public-spaces',
      excerpt: 'Exploring how public art installations are strengthening community bonds and celebrating local culture across Canada.',
      body: {},
      featuredImage: {
        fields: {
          file: {
            url: '//images.ctfassets.net/example/public-art.jpg',
          },
          title: 'Public art installation',
        },
      },
      publishDate: '2024-06-15T10:00:00Z',
      author: 'David Kim',
      tags: ['Visual Arts', 'Community'],
      category: 'Impact',
    },
  },
];

/**
 * Default spotlight grid with heading and description
 */
export const Default: Story = {
  args: {
    spotlights: mockSpotlights,
    heading: 'Featured Spotlights',
    description: 'Discover inspiring stories from artists, organizations, and communities across Canada.',
  },
};

/**
 * Grid with limited number of spotlights
 */
export const LimitedItems: Story = {
  args: {
    spotlights: mockSpotlights,
    heading: 'Recent Spotlights',
    description: 'Check out our latest featured articles.',
    limit: 3,
  },
};

/**
 * Grid without heading
 */
export const NoHeading: Story = {
  args: {
    spotlights: mockSpotlights.slice(0, 3),
  },
};

/**
 * Empty state when no spotlights available
 */
export const EmptyState: Story = {
  args: {
    spotlights: [],
    heading: 'Spotlights Coming Soon',
    description: 'We\'re working on bringing you inspiring stories from the arts community.',
  },
};

/**
 * Grid with custom background
 */
export const CustomBackground: Story = {
  args: {
    spotlights: mockSpotlights.slice(0, 3),
    heading: 'Highlighted Stories',
    className: 'bg-surface-elevated',
  },
};
