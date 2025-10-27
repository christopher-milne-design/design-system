import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Info, AlertCircle, CheckCircle2, XCircle } from "lucide-react";

function CodeBlock({ children, title }: { children: string; title?: string }) {
  return (
    <div className="bg-neutral-400 rounded-lg overflow-hidden h-full flex flex-col">
      {title && (
        <div className="bg-neutral-300 px-4 py-2 text-neutral-50 text-sm font-semibold">
          {title}
        </div>
      )}
      <pre className="p-4 overflow-x-auto flex-1">
        <code className="text-sm text-neutral-100">{children}</code>
      </pre>
    </div>
  );
}

function ComponentShowcase({
  title,
  description,
  preview,
  code,
  layout = "side-by-side"
}: {
  title: string;
  description?: string;
  preview: React.ReactNode;
  code: string;
  layout?: "side-by-side" | "stacked";
}) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-2xl font-bold text-neutral-400 mb-2">{title}</h3>
        {description && <p className="text-neutral-300">{description}</p>}
      </div>
      <div className={layout === "side-by-side" ? "grid md:grid-cols-2 gap-6" : "space-y-6"}>
        <div className="bg-neutral-100 p-8 rounded-lg border border-neutral-200 flex items-center justify-center min-h-[200px]">
          {preview}
        </div>
        <div className="flex flex-col">
          <CodeBlock title="Code">{code}</CodeBlock>
        </div>
      </div>
    </div>
  );
}

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-neutral-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-neutral-400 mb-4">
            Component Showcase
          </h1>
          <p className="text-lg text-neutral-300 mb-4">
            Live UI components with code examples using ShadCN, Tailwind, and design tokens.
          </p>
          <div className="flex gap-4 text-sm">
            <a href="#buttons" className="text-bleu-500 hover:text-bleu-700">Buttons</a>
            <a href="#cards" className="text-bleu-500 hover:text-bleu-700">Cards</a>
            <a href="#badges" className="text-bleu-500 hover:text-bleu-700">Badges</a>
            <a href="#alerts" className="text-bleu-500 hover:text-bleu-700">Alerts</a>
            <a href="#forms" className="text-bleu-500 hover:text-bleu-700">Forms</a>
          </div>
        </div>

        <div className="space-y-20">
          {/* Buttons Section */}
          <section id="buttons">
            <h2 className="text-4xl font-bold text-neutral-400 mb-8">Buttons</h2>
            
            <div className="space-y-12">
              <ComponentShowcase
                title="Button Variants"
                description="Different button styles for various contexts"
                preview={
                  <div className="flex flex-wrap gap-4">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                  </div>
                }
                code={`import { Button } from "@/components/ui/button";

<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
              />

              <ComponentShowcase
                title="Button Sizes"
                description="Buttons in different sizes"
                preview={
                  <div className="flex flex-wrap items-center gap-4">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                  </div>
                }
                code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`}
              />

              <ComponentShowcase
                title="Buttons with Custom Token Colors"
                description="Using design tokens for custom styling"
                preview={
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-bleu-500 hover:bg-bleu-700">Blue Button</Button>
                    <Button className="bg-celadon-500 hover:bg-celadon-700">Celadon</Button>
                    <Button className="bg-vert-500 hover:bg-vert-700">Green</Button>
                    <Button className="bg-rouge-500 hover:bg-rouge-700">Red</Button>
                  </div>
                }
                code={`<Button className="bg-bleu-500 hover:bg-bleu-700">
  Blue Button
</Button>
<Button className="bg-celadon-500 hover:bg-celadon-700">
  Celadon
</Button>
<Button className="bg-vert-500 hover:bg-vert-700">
  Green
</Button>`}
              />
            </div>
          </section>

          {/* Cards Section */}
          <section id="cards">
            <h2 className="text-4xl font-bold text-neutral-400 mb-8">Cards</h2>
            
            <div className="space-y-12">
              <ComponentShowcase
                title="Basic Card"
                description="Simple card with header, content, and footer"
                preview={
                  <Card className="w-full max-w-md">
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card description goes here</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-300">
                        This is the card content. You can put any content here.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button>Action</Button>
                    </CardFooter>
                  </Card>
                }
                code={`import { Card, CardContent, CardDescription, 
        CardFooter, CardHeader, CardTitle } 
from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>
      Card description goes here
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p>This is the card content.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}
              />

              <ComponentShowcase
                title="Colored Card with Tokens"
                description="Card using design tokens for branding"
                preview={
                  <Card className="w-full max-w-md bg-bleu-50 border-bleu-200">
                    <CardHeader>
                      <CardTitle className="text-bleu-900">Featured Product</CardTitle>
                      <CardDescription className="text-bleu-700">
                        Premium tier available now
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-bleu-800 mb-4">
                        Unlock all features with our premium plan.
                      </p>
                      <div className="flex gap-2">
                        <Badge className="bg-bleu-500">New</Badge>
                        <Badge className="bg-celadon-500">Popular</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="gap-2">
                      <Button className="bg-bleu-500 hover:bg-bleu-700">
                        Learn More
                      </Button>
                      <Button variant="outline" className="border-bleu-300 text-bleu-700">
                        Try Free
                      </Button>
                    </CardFooter>
                  </Card>
                }
                code={`<Card className="bg-bleu-50 border-bleu-200">
  <CardHeader>
    <CardTitle className="text-bleu-900">
      Featured Product
    </CardTitle>
    <CardDescription className="text-bleu-700">
      Premium tier available now
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-bleu-800 mb-4">
      Unlock all features with our premium plan.
    </p>
    <div className="flex gap-2">
      <Badge className="bg-bleu-500">New</Badge>
      <Badge className="bg-celadon-500">Popular</Badge>
    </div>
  </CardContent>
  <CardFooter className="gap-2">
    <Button className="bg-bleu-500 hover:bg-bleu-700">
      Learn More
    </Button>
  </CardFooter>
</Card>`}
              />
            </div>
          </section>

          {/* Badges Section */}
          <section id="badges">
            <h2 className="text-4xl font-bold text-neutral-400 mb-8">Badges</h2>
            
            <ComponentShowcase
              title="Badge Variants with Token Colors"
              description="Status badges using design token colors"
              preview={
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-bleu-500">Primary</Badge>
                  <Badge className="bg-vert-500">Success</Badge>
                  <Badge className="bg-jaune-500 text-jaune-900">Warning</Badge>
                  <Badge className="bg-rouge-500">Error</Badge>
                  <Badge className="bg-celadon-500">Info</Badge>
                  <Badge className="bg-neutral-300 text-neutral-400">Neutral</Badge>
                  <Badge variant="outline" className="border-bleu-500 text-bleu-700">
                    Outline
                  </Badge>
                </div>
              }
              code={`<Badge className="bg-bleu-500">Primary</Badge>
<Badge className="bg-vert-500">Success</Badge>
<Badge className="bg-jaune-500 text-jaune-900">
  Warning
</Badge>
<Badge className="bg-rouge-500">Error</Badge>
<Badge className="bg-celadon-500">Info</Badge>
<Badge variant="outline" 
       className="border-bleu-500 text-bleu-700">
  Outline
</Badge>`}
            />
          </section>

          {/* Alerts Section */}
          <section id="alerts">
            <h2 className="text-4xl font-bold text-neutral-400 mb-8">Alerts</h2>
            
            <ComponentShowcase
              title="Alert Variants"
              description="Different alert types with icons"
              layout="stacked"
              preview={
                <div className="w-full space-y-4">
                  <Alert className="border-bleu-300 bg-bleu-50">
                    <Info className="h-4 w-4 stroke-bleu-600" />
                    <AlertTitle className="text-bleu-900">Info</AlertTitle>
                    <AlertDescription className="text-bleu-700">
                      This is an informational message.
                    </AlertDescription>
                  </Alert>
                  
                  <Alert className="border-vert-300 bg-vert-50">
                    <CheckCircle2 className="h-4 w-4 stroke-vert-600" />
                    <AlertTitle className="text-vert-900">Success</AlertTitle>
                    <AlertDescription className="text-vert-700">
                      Your changes have been saved successfully.
                    </AlertDescription>
                  </Alert>
                  
                  <Alert className="border-jaune-300 bg-jaune-50">
                    <AlertCircle className="h-4 w-4 stroke-jaune-600" />
                    <AlertTitle className="text-jaune-900">Warning</AlertTitle>
                    <AlertDescription className="text-jaune-800">
                      Please review your information before continuing.
                    </AlertDescription>
                  </Alert>
                  
                  <Alert variant="destructive" className="border-rouge-300 bg-rouge-50">
                    <XCircle className="h-4 w-4 stroke-rouge-600" />
                    <AlertTitle className="text-rouge-900">Error</AlertTitle>
                    <AlertDescription className="text-rouge-700">
                      There was a problem processing your request.
                    </AlertDescription>
                  </Alert>
                </div>
              }
              code={`import { Alert, AlertDescription, AlertTitle } 
from "@/components/ui/alert";
import { Info, AlertCircle, CheckCircle2, XCircle } 
from "lucide-react";

// Info Alert
<Alert className="border-bleu-300 bg-bleu-50">
  <Info className="h-4 w-4 stroke-bleu-600" />
  <AlertTitle className="text-bleu-900">Info</AlertTitle>
  <AlertDescription className="text-bleu-700">
    This is an informational message.
  </AlertDescription>
</Alert>

// Success Alert
<Alert className="border-vert-300 bg-vert-50">
  <CheckCircle2 className="h-4 w-4 stroke-vert-600" />
  <AlertTitle className="text-vert-900">Success</AlertTitle>
  <AlertDescription className="text-vert-700">
    Your changes have been saved successfully.
  </AlertDescription>
</Alert>`}
            />
          </section>

          {/* Forms Section */}
          <section id="forms">
            <h2 className="text-4xl font-bold text-neutral-400 mb-8">Forms</h2>
            
            <ComponentShowcase
              title="Form Components"
              description="Input fields, labels, and textareas"
              preview={
                <Card className="w-full max-w-md">
                  <CardHeader>
                    <CardTitle>Contact Form</CardTitle>
                    <CardDescription>Get in touch with us</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Your message here..." />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-bleu-500 hover:bg-bleu-700">
                      Send Message
                    </Button>
                  </CardFooter>
                </Card>
              }
              code={`import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

<Card>
  <CardHeader>
    <CardTitle>Contact Form</CardTitle>
    <CardDescription>Get in touch with us</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="Enter your name" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" 
             placeholder="your@email.com" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" 
                placeholder="Your message here..." />
    </div>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Send Message</Button>
  </CardFooter>
</Card>`}
            />
          </section>
        </div>
      </div>
    </div>
  );
}
