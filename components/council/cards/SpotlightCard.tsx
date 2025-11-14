import * as React from "react";
import { SpotlightEntry } from "@/lib/contentful";
import ContentCard from "./ContentCard";

interface SpotlightCardProps {
  spotlight: SpotlightEntry;
  className?: string;
}

/**
 * SpotlightCard component for displaying spotlight articles
 * Wraps ContentCard with Contentful spotlight data
 */
export default function SpotlightCard({ spotlight, className }: SpotlightCardProps) {
  const { title, slug, excerpt, featuredImage, publishDate, author, tags } = spotlight.fields;

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
    <ContentCard
      variant="story"
      title={title}
      description={excerpt}
      image={imageUrl}
      href={`/spotlights/${slug}`}
      ctaText="Read Article"
      tags={tags}
      author={author}
      readTime={formattedDate}
      className={className}
    />
  );
}
