import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

function ComponentSection({ 
  title, 
  description, 
  children 
}: { 
  title: string; 
  description: string; 
  children: React.ReactNode;
}) {
  return (
    <section className="mb-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-neutral-400 mb-2" style={{ letterSpacing: '-0.02em' }}>
          {title}
        </h2>
        <p className="text-neutral-300">{description}</p>
      </div>
      {children}
    </section>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <div className="bg-neutral-400 rounded-lg overflow-hidden mt-4">
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-neutral-100">{children}</code>
      </pre>
    </div>
  );
}

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-neutral-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-neutral-400 mb-4">
            Component Library
          </h1>
          <p className="text-lg text-neutral-300 mb-4">
            Built with ShadCN UI and customized with design system tokens. All components use semantic color tokens and typography system.
          </p>
          <div className="flex gap-4 text-sm">
            <a href="#buttons" className="text-brand-primary hover:text-brand-primary-hover font-medium">Buttons</a>
            <a href="#cards" className="text-brand-primary hover:text-brand-primary-hover font-medium">Cards</a>
            <a href="#forms" className="text-brand-primary hover:text-brand-primary-hover font-medium">Forms</a>
            <a href="#badges" className="text-brand-primary hover:text-brand-primary-hover font-medium">Badges</a>
            <a href="#alerts" className="text-brand-primary hover:text-brand-primary-hover font-medium">Alerts</a>
          </div>
        </div>

        {/* Buttons */}
        <ComponentSection
          title="Buttons"
          description="Interactive buttons with multiple variants and states. All use semantic tokens for consistent theming."
        >
          <div className="space-y-8">
            {/* Button Variants */}
            <div className="bg-neutral-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-neutral-400 mb-6">Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button>Default Button</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
              <CodeBlock>
{`<Button>Default Button</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
              </CodeBlock>
            </div>

            {/* Button Sizes */}
            <div className="bg-neutral-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-neutral-400 mb-6">Sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon"></Button>
              </div>
              <CodeBlock>
{`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"></Button>`}
              </CodeBlock>
            </div>

            {/* Button States */}
            <div className="bg-neutral-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-neutral-400 mb-6">States</h3>
              <div className="flex flex-wrap gap-4">
                <Button>Normal</Button>
                <Button disabled>Disabled</Button>
                <Button className="hover:bg-brand-primary-hover">Hover Me</Button>
                <Button className="active:bg-brand-primary-active">Click Me</Button>
              </div>
              <CodeBlock>
{`<Button>Normal</Button>
<Button disabled>Disabled</Button>
<Button className="hover:bg-brand-primary-hover">Hover Me</Button>`}
              </CodeBlock>
            </div>
          </div>
        </ComponentSection>

        {/* Cards */}
        <ComponentSection
          title="Cards"
          description="Flexible card components for displaying grouped content."
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Simple Card</CardTitle>
                <CardDescription>A basic card with header and content</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-300">
                  Cards are versatile containers for grouping related content and actions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Card with Footer</CardTitle>
                <CardDescription>Including actions at the bottom</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-300">
                  Add buttons or other actions in the footer section.
                </p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button size="sm">Action</Button>
                <Button size="sm" variant="outline">Cancel</Button>
              </CardFooter>
            </Card>

            <Card className="border-brand-primary border-2">
              <CardHeader>
                <CardTitle>Highlighted Card</CardTitle>
                <CardDescription>With custom border styling</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-300">
                  Cards can be customized with borders and backgrounds using semantic tokens.
                </p>
              </CardContent>
            </Card>
          </div>

          <CodeBlock>
{`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Your content here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}
          </CodeBlock>
        </ComponentSection>

        {/* Forms */}
        <ComponentSection
          title="Form Components"
          description="Input fields, textareas, selects, and labels for building forms."
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Examples */}
            <div className="bg-neutral-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-neutral-400 mb-6">Input Fields</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="email@example.com" />
                </div>
                <div>
                  <Label htmlFor="disabled">Disabled Input</Label>
                  <Input id="disabled" disabled placeholder="Disabled" />
                </div>
              </div>
              <CodeBlock>
{`<Label htmlFor="name">Name</Label>
<Input id="name" placeholder="Enter your name" />`}
              </CodeBlock>
            </div>

            {/* Textarea and Select */}
            <div className="bg-neutral-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-neutral-400 mb-6">Textarea & Select</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Type your message here" rows={4} />
                </div>
                <div>
                  <Label htmlFor="select">Select Option</Label>
                  <Select>
                    <SelectTrigger id="select">
                      <SelectValue placeholder="Choose an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <CodeBlock>
{`<Label htmlFor="message">Message</Label>
<Textarea id="message" placeholder="Type here" />

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Choose" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="opt1">Option 1</SelectItem>
  </SelectContent>
</Select>`}
              </CodeBlock>
            </div>

            {/* Complete Form Example */}
            <div className="md:col-span-2 bg-neutral-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-neutral-400 mb-6">Complete Form Example</h3>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Form</CardTitle>
                  <CardDescription>Send us a message</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="formEmail">Email</Label>
                    <Input id="formEmail" type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger id="subject">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">Support</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="formMessage">Message</Label>
                    <Textarea id="formMessage" placeholder="Your message here..." rows={4} />
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button>Send Message</Button>
                  <Button variant="outline">Reset</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </ComponentSection>

        {/* Badges */}
        <ComponentSection
          title="Badges"
          description="Small status indicators and labels."
        >
          <div className="bg-neutral-100 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-neutral-400 mb-6">Badge Variants</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>

            <h3 className="text-xl font-semibold text-neutral-400 mb-6 mt-8">Usage Examples</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-neutral-400">Status:</span>
                <Badge className="bg-feedback-success text-neutral-50">Active</Badge>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neutral-400">Priority:</span>
                <Badge className="bg-feedback-warning text-neutral-50">High</Badge>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neutral-400">Type:</span>
                <Badge variant="outline">Feature</Badge>
                <Badge variant="outline">Bug</Badge>
                <Badge variant="outline">Enhancement</Badge>
              </div>
            </div>

            <CodeBlock>
{`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge className="bg-feedback-success">Active</Badge>`}
            </CodeBlock>
          </div>
        </ComponentSection>

        {/* Alerts */}
        <ComponentSection
          title="Alerts"
          description="Feedback messages and notifications for different states."
        >
          <div className="space-y-4">
            <Alert>
              <AlertTitle>Default Alert</AlertTitle>
              <AlertDescription>
                This is a standard alert message. Use for general information.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertTitle>Error Alert</AlertTitle>
              <AlertDescription>
                Something went wrong. Please check your input and try again.
              </AlertDescription>
            </Alert>

            <Alert className="bg-feedback-success-subtle border-l-4 border-feedback-success">
              <AlertTitle className="text-feedback-success">Success!</AlertTitle>
              <AlertDescription className="text-feedback-success">
                Your changes have been saved successfully.
              </AlertDescription>
            </Alert>

            <Alert className="bg-feedback-warning-subtle border-l-4 border-feedback-warning">
              <AlertTitle className="text-feedback-warning">Warning</AlertTitle>
              <AlertDescription className="text-feedback-warning">
                Please review your information before continuing.
              </AlertDescription>
            </Alert>

            <Alert className="bg-feedback-info-subtle border-l-4 border-feedback-info">
              <AlertTitle className="text-feedback-info">Information</AlertTitle>
              <AlertDescription className="text-feedback-info">
                Did you know? You can customize alerts with semantic tokens.
              </AlertDescription>
            </Alert>
          </div>

          <CodeBlock>
{`<Alert>
  <AlertTitle>Alert Title</AlertTitle>
  <AlertDescription>
    Alert message here
  </AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Error message
  </AlertDescription>
</Alert>

<Alert className="bg-feedback-success-subtle border-l-4 border-feedback-success">
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Success message</AlertDescription>
</Alert>`}
          </CodeBlock>
        </ComponentSection>

        {/* Integration Note */}
        <section className="bg-bleu-50 border-l-4 border-bleu-500 p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-bleu-900 mb-3">Design System Integration</h3>
          <p className="text-bleu-800 mb-4">
            All components are built with <strong>ShadCN UI</strong> and customized using our design system tokens:
          </p>
          <ul className="space-y-2 text-bleu-700">
            <li> <strong>Semantic color tokens</strong> (brand-primary, feedback-success, etc.)</li>
            <li> <strong>Typography system</strong> with calculated line heights and letter spacing</li>
            <li> <strong>Spacing tokens</strong> for consistent padding and margins</li>
            <li> <strong>Border radius tokens</strong> from the design system</li>
            <li> <strong>Fully accessible</strong> with proper ARIA attributes</li>
          </ul>
          <div className="mt-6">
            <Link href="/style-guide" className="text-brand-primary hover:text-brand-primary-hover font-semibold">
              View Design Tokens →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
