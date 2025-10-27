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
    <section className="relative flex min-h-[90vh] items-center justify-center bg-brand-primary px-4 py-20">
      <div className="container mx-auto text-center">
        <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold text-text-inverse" style={{ letterSpacing: '-0.02em' }}>
          {title}
        </h1>
        <p className="mx-auto mb-12 max-w-3xl text-xl md:text-2xl text-text-inverse/90 leading-relaxed">
          {subtitle}
        </p>
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-center">
          <Button 
            size="lg" 
            className="bg-brand-secondary hover:bg-brand-secondary-hover active:bg-brand-secondary-active focus:bg-brand-secondary-focus px-12 py-7 text-xl font-semibold text-text-inverse transition-colors" 
            {...(buttonUrl && { asChild: true })}
          >
            {buttonUrl ? <a href={buttonUrl}>{buttonText}</a> : buttonText}
          </Button>
          <Button 
            size="lg" 
            className="bg-surface-elevated hover:bg-neutral-100 active:bg-neutral-200 px-12 py-7 text-xl font-semibold text-brand-primary transition-colors"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
