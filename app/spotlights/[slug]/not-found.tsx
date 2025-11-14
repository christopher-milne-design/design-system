import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-text-primary mb-4" style={{ letterSpacing: '-0.02em' }}>
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6" style={{ letterSpacing: '-0.02em' }}>
            Spotlight Not Found
          </h2>
          <p className="text-xl text-text-secondary mb-12 leading-relaxed">
            Sorry, we couldn't find the spotlight article you're looking for.
            It may have been moved or is no longer available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link href="/spotlights" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Spotlights
              </Link>
            </Button>
            <Button className="bg-brand-primary text-white" asChild>
              <Link href="/">Go to Homepage</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
