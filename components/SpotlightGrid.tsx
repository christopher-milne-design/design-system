import * as React from "react";
import { SpotlightEntry } from "@/lib/contentful";
import SpotlightCard from "./council/cards/SpotlightCard";
import { cn } from "@/lib/utils";

interface SpotlightGridProps {
  spotlights: SpotlightEntry[];
  heading?: string;
  description?: string;
  className?: string;
  limit?: number;
}

/**
 * SpotlightGrid component displays a responsive grid of spotlight articles
 * Integrates with Contentful to display spotlight content
 */
export default function SpotlightGrid({
  spotlights,
  heading = "Spotlights",
  description,
  className,
  limit,
}: SpotlightGridProps) {
  // Apply limit if specified
  const displayedSpotlights = limit ? spotlights.slice(0, limit) : spotlights;

  // Show message if no spotlights available
  if (displayedSpotlights.length === 0) {
    return (
      <section className={cn("bg-white py-20 md:py-28", className)}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
              {heading}
            </h2>
            {description && (
              <p className="mx-auto max-w-2xl text-lg text-text-secondary mb-8">
                {description}
              </p>
            )}
            <p className="text-text-muted">No spotlights available yet. Check back soon!</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={cn("bg-white py-20 md:py-28", className)}>
      <div className="container mx-auto px-4">
        {/* Section header */}
        {(heading || description) && (
          <div className="mb-16 text-center">
            {heading && (
              <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
                {heading}
              </h2>
            )}
            {description && (
              <p className="mx-auto max-w-2xl text-lg text-text-secondary">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Spotlight grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedSpotlights.map((spotlight) => (
            <SpotlightCard
              key={spotlight.sys.id}
              spotlight={spotlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
