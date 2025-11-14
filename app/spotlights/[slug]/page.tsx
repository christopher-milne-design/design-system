import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getSpotlightBySlug, getSpotlights } from "@/lib/contentful";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SpotlightPageProps {
  params: {
    slug: string;
  };
}

// Generate static paths for all spotlights at build time
export async function generateStaticParams() {
  const spotlights = await getSpotlights();

  return spotlights.map((spotlight) => ({
    slug: spotlight.fields.slug,
  }));
}

// This is a Server Component - it fetches data at build/request time
export default async function SpotlightPage({ params }: SpotlightPageProps) {
  const spotlight = await getSpotlightBySlug(params.slug);

  // If spotlight not found, show 404
  if (!spotlight) {
    notFound();
  }

  const { title, excerpt, featuredImage, publishDate, author, tags, body } = spotlight.fields;

  // Format Contentful image URL
  const imageUrl = featuredImage?.fields?.file?.url
    ? `https:${featuredImage.fields.file.url}`
    : undefined;

  // Format publish date
  const formattedDate = publishDate
    ? new Date(publishDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : undefined;

  return (
    <main className="min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="bg-surface-background border-b border-border-subtle">
        <div className="container mx-auto px-4 py-6">
          <Button variant="link" className="text-brand-primary hover:text-brand-primary-hover p-0" asChild>
            <Link href="/spotlights" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Spotlights
            </Link>
          </Button>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="bg-brand-primary text-white"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              {title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-4 text-text-secondary mb-8 pb-8 border-b border-border-subtle">
              {author && <span className="font-medium">By {author}</span>}
              {formattedDate && <span>{formattedDate}</span>}
            </div>

            {/* Excerpt */}
            {excerpt && (
              <p className="text-xl text-text-secondary leading-relaxed mb-12">
                {excerpt}
              </p>
            )}

            {/* Featured Image */}
            {imageUrl && (
              <div className="relative w-full aspect-video mb-12 overflow-hidden border border-border-subtle">
                <Image
                  src={imageUrl}
                  alt={featuredImage?.fields?.title || title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
              </div>
            )}

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              {/*
                TODO: Render rich text content from Contentful
                You'll need to install and use @contentful/rich-text-react-renderer
                to properly render the rich text body content.

                For now, showing placeholder text:
              */}
              <div className="text-text-primary leading-relaxed space-y-6">
                <p>
                  This is where your rich text content from Contentful will be rendered.
                  To display the actual content, you'll need to:
                </p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Install the Contentful rich text renderer: <code className="bg-surface-elevated px-2 py-1 rounded">npm install @contentful/rich-text-react-renderer</code></li>
                  <li>Import the renderer in this component</li>
                  <li>Replace this placeholder with: <code className="bg-surface-elevated px-2 py-1 rounded">documentToReactComponents(body)</code></li>
                </ol>
                <p className="text-sm text-text-muted mt-8 p-4 bg-feedback-info-subtle border-l-4 border-feedback-info">
                  <strong>Note:</strong> Once you add content to Contentful with a rich text body,
                  it will automatically display here when you implement the rich text renderer.
                </p>
              </div>
            </div>

            {/* Back to Spotlights CTA */}
            <div className="mt-16 pt-8 border-t border-border-subtle text-center">
              <Button variant="outline" asChild>
                <Link href="/spotlights" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  View All Spotlights
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

// Generate metadata for each spotlight page
export async function generateMetadata({ params }: SpotlightPageProps) {
  const spotlight = await getSpotlightBySlug(params.slug);

  if (!spotlight) {
    return {
      title: "Spotlight Not Found",
    };
  }

  return {
    title: `${spotlight.fields.title} | Spotlights | Canada Council for the Arts`,
    description: spotlight.fields.excerpt,
  };
}
