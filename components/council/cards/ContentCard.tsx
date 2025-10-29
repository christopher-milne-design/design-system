import * as React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type CardVariant = "feature" | "event" | "stat" | "story";

interface ContentCardProps {
  variant?: CardVariant;
  title: string;
  description?: string;
  image?: string;
  href?: string;
  ctaText?: string;
  tags?: string[];
  // Event-specific
  date?: string;
  location?: string;
  // Stat-specific
  statValue?: string;
  statLabel?: string;
  // Story-specific
  author?: string;
  readTime?: string;
  className?: string;
}

export default function ContentCard({
  variant = "feature",
  title,
  description,
  image,
  href,
  ctaText = "Learn More",
  tags,
  date,
  location,
  statValue,
  statLabel,
  author,
  readTime,
  className,
}: ContentCardProps) {
  const CardWrapper = href ? "a" : "div";
  const wrapperProps = href ? { href } : {};

  return (
    <Card
      className={cn(
        "group h-full overflow-hidden border-border-default bg-white transition-all hover:shadow-lg",
        href && "cursor-pointer",
        className
      )}
    >
      <CardWrapper {...wrapperProps} className="flex h-full flex-col">
        {/* Image */}
        {image && (
          <div className="relative aspect-video w-full overflow-hidden bg-surface-elevated">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
            {tags && tags.length > 0 && (
              <div className="absolute left-3 top-3 flex gap-2">
                {tags.slice(0, 2).map((tag) => (
                  <Badge
                    key={tag}
                    className="bg-white/90 text-text-primary backdrop-blur-sm"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        )}

        <CardHeader className={cn("flex-1", !image && "pt-6")}>
          {/* Stat variant */}
          {variant === "stat" && statValue && (
            <div className="mb-4">
              <div className="text-4xl font-bold text-brand-primary">
                {statValue}
              </div>
              {statLabel && (
                <div className="text-sm font-medium text-text-muted">
                  {statLabel}
                </div>
              )}
            </div>
          )}

          {/* Event meta */}
          {variant === "event" && (date || location) && (
            <div className="mb-3 flex flex-wrap gap-3 text-sm text-text-secondary">
              {date && (
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{date}</span>
                </div>
              )}
              {location && (
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{location}</span>
                </div>
              )}
            </div>
          )}

          <CardTitle className="text-xl font-bold text-text-primary group-hover:text-brand-primary transition-colors">
            {title}
          </CardTitle>

          {description && (
            <CardDescription className="mt-2 text-base text-text-secondary leading-relaxed">
              {description}
            </CardDescription>
          )}
        </CardHeader>

        {/* Footer with CTA or metadata */}
        {(href || author || readTime) && (
          <CardFooter className="pt-0">
            {variant === "story" && (author || readTime) ? (
              <div className="flex w-full items-center justify-between text-sm text-text-muted">
                {author && <span>By {author}</span>}
                {readTime && <span>{readTime}</span>}
              </div>
            ) : (
              href && (
                <Button
                  variant="link"
                  className="group/btn p-0 text-brand-primary hover:text-brand-primary-hover"
                  asChild
                >
                  <span className="flex items-center gap-1">
                    {ctaText}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </span>
                </Button>
              )
            )}
          </CardFooter>
        )}
      </CardWrapper>
    </Card>
  );
}

// Convenience exports for specific card types
export function FeatureCard(props: Omit<ContentCardProps, "variant">) {
  return <ContentCard variant="feature" {...props} />;
}

export function EventCard(props: Omit<ContentCardProps, "variant">) {
  return <ContentCard variant="event" {...props} />;
}

export function StatCard(props: Omit<ContentCardProps, "variant">) {
  return <ContentCard variant="stat" {...props} />;
}

export function StoryCard(props: Omit<ContentCardProps, "variant">) {
  return <ContentCard variant="story" {...props} />;
}
