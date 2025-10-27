import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getBlogPosts } from "@/lib/contentful";
import Image from "next/image";

export default async function BlogPosts() {
  const posts = await getBlogPosts();

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="px-4 py-20">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Latest Blog Posts
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Explore our latest insights, stories, and updates.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            const heroImageUrl = post.fields.heroImage?.fields?.file?.url;
            const imageAlt = post.fields.heroImage?.fields?.title || post.fields.title;
            const description = post.fields.description || post.fields.subtitle;

            return (
              <Card key={post.sys.id} className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
                {heroImageUrl && (
                  <div className="relative h-64 w-full flex-shrink-0 overflow-hidden">
                    <Image
                      src={`https:${heroImageUrl}`}
                      alt={imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{post.fields.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
