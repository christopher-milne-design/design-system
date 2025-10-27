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
    <section className="relative flex min-h-[90vh] items-center justify-center bg-[#1A70EF] px-4 py-20">
      <div className="container mx-auto text-center">
        <h1 className="mb-6 text-5xl font-black uppercase tracking-tight text-white md:text-7xl lg:text-8xl">
          {title}
        </h1>
        <p className="mx-auto mb-12 max-w-3xl text-xl font-medium text-white/90 md:text-2xl">
          {subtitle}
        </p>
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-center">
          <Button size="lg" className="bg-[#CE4D0E] px-12 py-7 text-xl font-bold text-white hover:bg-[#A13D0D]" {...(buttonUrl && { asChild: true })}>
            {buttonUrl ? <a href={buttonUrl}>{buttonText}</a> : buttonText}
          </Button>
          <Button size="lg" className="bg-white px-12 py-7 text-xl font-bold text-[#1A70EF] hover:bg-white/90">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
