import { getSpotlights } from "@/lib/contentful";
import SpotlightGrid from "@/components/SpotlightGrid";
import BrandHero from "@/components/BrandHero";

// This is a Server Component - it fetches data at build/request time
export default async function SpotlightsPage() {
  // Fetch spotlights from Contentful
  const spotlights = await getSpotlights();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <BrandHero
        title="Spotlights"
        subtitle="Discover inspiring stories from artists, organizations, and communities across Canada. Explore our featured articles highlighting the vibrant arts and culture landscape."
        colorScheme="bleu-celadon"
        pattern={2}
      />

      {/* Spotlight Grid Section */}
      <SpotlightGrid
        spotlights={spotlights}
        heading="Featured Articles"
        description="Stay informed about the latest news, stories, and insights from Canada's arts community."
      />
    </main>
  );
}

// Optional: Add metadata for SEO
export const metadata = {
  title: "Spotlights | Canada Council for the Arts",
  description: "Discover inspiring stories from artists, organizations, and communities across Canada.",
};
