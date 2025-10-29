import { Button } from "@/components/ui/button";
import { getHomePageContent } from "@/lib/contentful";

export default async function Hero() {
  const homePage = await getHomePageContent();
  const content = homePage?.heroSection?.fields;

  // Fallback content if Contentful fetch fails
  const title = content?.title || "Welcome to Our Platform";
  const subtitle = content?.subtitle || "Build amazing experiences with our powerful tools and seamless integrations. Get started today and transform your ideas into reality.";
  const buttonText = content?.buttonText || "Get Started";
  const buttonUrl = content?.buttonUrl;

  return (
    <section className="relative bg-surface-background py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Announcement badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-border-default bg-white shadow-sm">
            <div className="w-2 h-2 rounded-full bg-vert-500" />
            <span className="text-sm font-medium text-text-secondary">Now Available</span>
          </div>
          
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary">
            {title}
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg md:text-xl text-text-secondary leading-relaxed">
            {subtitle}
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button 
              size="lg" 
              className="bg-brand-primary hover:bg-brand-primary-hover text-white font-medium shadow-sm hover:shadow-md transition-all" 
              {...(buttonUrl && { asChild: true })}
            >
              {buttonUrl ? <a href={buttonUrl}>{buttonText}</a> : buttonText}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-border-default hover:bg-surface-elevated text-text-primary font-medium transition-all"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
