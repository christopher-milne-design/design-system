import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

export default client;

// Type definitions for your content model
export interface HeroSectionContent {
  fields: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonUrl?: string;
    backgroundImage?: any;
  };
}

export interface HomePageContent {
  fields: {
    title: string;
    heroSection?: {
      fields: HeroSectionContent['fields'];
    };
    // Add other section references here as you build them out
    // featuresSection?: { fields: FeaturesSectionContent['fields'] };
    // ctaSection?: { fields: CTASectionContent['fields'] };
  };
}

export interface BlogPostContent {
  contentTypeId: 'blogPost';
  fields: {
    title: string;
    subtitle: string;
    description?: string;
    image?: {
      fields: {
        file: {
          url: string;
        };
        title?: string;
      };
    };
    heroImage?: {
      fields: {
        file: {
          url: string;
        };
        title?: string;
      };
    };
  };
}

export interface BlogPostEntry {
  sys: {
    id: string;
  };
  fields: BlogPostContent['fields'];
}

// Spotlight article content type
export interface SpotlightContent {
  contentTypeId: 'spotlight';
  fields: {
    title: string;
    slug: string;
    excerpt: string;
    body: any; // Rich text content
    featuredImage?: {
      fields: {
        file: {
          url: string;
        };
        title?: string;
        description?: string;
      };
    };
    publishDate: string;
    author?: string;
    tags?: string[];
    category?: string;
  };
}

export interface SpotlightEntry {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: SpotlightContent['fields'];
}

// Card Grid Section content type
export interface CardGridSectionContent {
  fields: {
    heading: string;
    description?: string;
    spotlights?: SpotlightEntry[];
  };
}

// Fetch home page content with all referenced sections
export async function getHomePageContent() {
  try {
    const entries = await client.getEntries({
      content_type: "homePage",
      limit: 1,
      include: 2, // Include referenced entries up to 2 levels deep
    });

    if (entries.items.length > 0) {
      return entries.items[0].fields as HomePageContent['fields'];
    }

    return null;
  } catch (error) {
    console.error("Error fetching home page content:", error);
    return null;
  }
}


// Fetch blog posts
export async function getBlogPosts(): Promise<BlogPostEntry[]> {
  try {
    const entries = await client.getEntries<BlogPostContent>({
      content_type: "blogPost",
    });

    return entries.items as BlogPostEntry[];
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

// Fetch all spotlight articles
export async function getSpotlights(): Promise<SpotlightEntry[]> {
  try {
    const entries = await client.getEntries<SpotlightContent>({
      content_type: "spotlight",
      order: ['-fields.publishDate'], // Most recent first
    });

    return entries.items as SpotlightEntry[];
  } catch (error) {
    console.error("Error fetching spotlights:", error);
    return [];
  }
}

// Fetch a single spotlight by slug
export async function getSpotlightBySlug(slug: string): Promise<SpotlightEntry | null> {
  try {
    const entries = await client.getEntries<SpotlightContent>({
      content_type: "spotlight",
      'fields.slug': slug,
      limit: 1,
    });

    if (entries.items.length > 0) {
      return entries.items[0] as SpotlightEntry;
    }

    return null;
  } catch (error) {
    console.error(`Error fetching spotlight with slug ${slug}:`, error);
    return null;
  }
}

// Fetch card grid section content
export async function getCardGridSection(): Promise<CardGridSectionContent['fields'] | null> {
  try {
    const entries = await client.getEntries({
      content_type: "cardGridSection",
      limit: 1,
      include: 2, // Include referenced spotlight entries
    });

    if (entries.items.length > 0) {
      return entries.items[0].fields as CardGridSectionContent['fields'];
    }

    return null;
  } catch (error) {
    console.error("Error fetching card grid section:", error);
    return null;
  }
}

// Example function to fetch all entries of a specific content type
export async function getEntries(contentType: string) {
  try {
    const entries = await client.getEntries({
      content_type: contentType,
    });

    return entries.items;
  } catch (error) {
    console.error(`Error fetching ${contentType} entries:`, error);
    return [];
  }
}
