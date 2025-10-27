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
export async function getBlogPosts() {
  try {
    const entries = await client.getEntries<BlogPostContent>({
      content_type: "blogPost",
    });

    return entries.items;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
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
