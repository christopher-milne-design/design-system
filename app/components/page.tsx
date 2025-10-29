"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ComponentExample from "@/components/ComponentExample";
import MainNav from "@/components/council/navigation/MainNav";
import SearchCombobox from "@/components/council/forms/SearchCombobox";
import FilterPanel from "@/components/council/forms/FilterPanel";
import { InfoBanner, WarningBanner, SuccessBanner, ErrorBanner } from "@/components/council/messaging/NotificationBanner";
import { CardExamples } from "@/components/CardExamples";

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
    <section className="mb-24">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4" style={{ letterSpacing: '-0.02em' }}>
          {title}
        </h2>
        <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-3xl">{description}</p>
      </div>
      {children}
    </section>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <div className="bg-surface-elevated rounded-lg overflow-hidden mt-4 border border-border-subtle">
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-text-secondary">{children}</code>
      </pre>
    </div>
  );
}

export default function ComponentsPage() {
  const [locale, setLocale] = React.useState<"en" | "fr">("en");
  const [searchResults] = React.useState([
    { id: "1", title: "Arts Funding Programs", description: "Support for artists and organizations", category: "Programs", href: "/programs" },
    { id: "2", title: "Research Publications", description: "Latest arts research and reports", category: "Resources", href: "/research" },
  ]);
  const [activeFilters, setActiveFilters] = React.useState<any[]>([]);

  const filterGroups = [
    {
      id: "discipline",
      label: "Discipline",
      type: "checkbox" as const,
      options: [
        { id: "visual", label: "Visual Arts", count: 45 },
        { id: "music", label: "Music", count: 32 },
        { id: "theatre", label: "Theatre", count: 28 },
        { id: "dance", label: "Dance", count: 15 },
      ],
    },
    {
      id: "date",
      label: "Date Range",
      type: "select" as const,
      options: [
        { id: "all", label: "All Time" },
        { id: "year", label: "Past Year" },
        { id: "month", label: "Past Month" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-rose-500">
        <div className="max-w-7xl mx-auto px-8 py-32 md:py-40">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white" style={{ letterSpacing: '-0.02em' }}>
              Component Library
            </h1>
            <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl leading-relaxed font-medium">
              Canada Council for the Arts design system — built with ShadCN UI and customized with our design tokens.
            </p>
            <nav className="flex gap-6 text-base flex-wrap" aria-label="Page sections">
              <a href="#accordion" className="text-white hover:text-jaune-300 font-semibold border-b-2 border-transparent hover:border-jaune-300 transition-colors">Accordion</a>
              <a href="#alerts" className="text-white hover:text-jaune-300 font-semibold border-b-2 border-transparent hover:border-jaune-300 transition-colors">Alerts</a>
              <a href="#buttons" className="text-white hover:text-jaune-300 font-semibold border-b-2 border-transparent hover:border-jaune-300 transition-colors">Buttons</a>
              <a href="#cards" className="text-white hover:text-jaune-300 font-semibold border-b-2 border-transparent hover:border-jaune-300 transition-colors">Cards</a>
              <a href="#filters" className="text-white hover:text-jaune-300 font-semibold border-b-2 border-transparent hover:border-jaune-300 transition-colors">Filters</a>
              <a href="#forms" className="text-white hover:text-jaune-300 font-semibold border-b-2 border-transparent hover:border-jaune-300 transition-colors">Forms</a>
              <a href="#notifications" className="text-white hover:text-jaune-300 font-semibold border-b-2 border-transparent hover:border-jaune-300 transition-colors">Notifications</a>
              <a href="#search" className="text-white hover:text-jaune-300 font-semibold border-b-2 border-transparent hover:border-jaune-300 transition-colors">Search</a>
              <a href="#tabs" className="text-white hover:text-jaune-300 font-semibold border-b-2 border-transparent hover:border-jaune-300 transition-colors">Tabs</a>
            </nav>
          </div>
        </div>
      </section>

      <div>
        <div className="max-w-7xl mx-auto px-8 py-20">

        {/* Accordion */}
        <section id="accordion">
        <ComponentSection
          title="Accordion"
          description="Expandable content sections for FAQs and collapsible information."
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What funding programs are available?</AccordionTrigger>
              <AccordionContent>
                The Canada Council offers various programs including Explore and Create, Concept to Realization, and Arts Across Canada.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I apply for funding?</AccordionTrigger>
              <AccordionContent>
                Applications are submitted through our online portal. You'll need to create an account and provide project details.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What are the eligibility requirements?</AccordionTrigger>
              <AccordionContent>
                Eligibility varies by program. Generally, applicants must be Canadian artists or arts organizations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <CodeBlock>
{`<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Question?</AccordionTrigger>
    <AccordionContent>
      Answer content here.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
          </CodeBlock>
        </ComponentSection>
        </section>

        {/* Alerts */}
        <section id="alerts">
        <ComponentSection
          title="Alerts"
          description="Feedback messages and notifications for different states."
        >
          <div className="space-y-6">
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
        </section>
      </div>

      {/* Buttons */}
      <div className="border-t border-border-divider">
        <div className="max-w-7xl mx-auto px-8 py-20">
        <section id="buttons">
        <ComponentSection
          title="Buttons"
          description="Interactive buttons with multiple variants and states. All use semantic tokens for consistent theming."
        >
          <div className="space-y-12">
            {/* Button Variants */}
            <div className="bg-surface-elevated p-10 rounded-lg border border-border-subtle">
              <h3 className="text-2xl font-semibold text-text-primary mb-8">Variants</h3>
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
            <div className="bg-surface-elevated p-10 rounded-lg border border-border-subtle">
              <h3 className="text-2xl font-semibold text-text-primary mb-8">Sizes</h3>
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
            <div className="bg-surface-elevated p-10 rounded-lg border border-border-subtle">
              <h3 className="text-2xl font-semibold text-text-primary mb-8">States</h3>
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
        </section>

        {/* Cards */}
        <section id="cards">
        <ComponentSection
          title="Cards"
          description="Composable card system and base card components."
        >
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-text-primary mb-6">Composable Card System</h3>
            <CardExamples />
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-text-primary mb-6">Base Card Components</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Simple Card</CardTitle>
                <CardDescription>A basic card with header and content</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary">
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
                <p className="text-text-secondary">
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
                <p className="text-text-secondary">
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
        </section>

        {/* Filters */}
        <section id="filters">
        <ComponentSection
          title="Filters"
          description="Filterable sidebar for research, programs, and results."
        >
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <FilterPanel
                groups={filterGroups}
                activeFilters={activeFilters}
                onFilterChange={setActiveFilters}
                onClearAll={() => setActiveFilters([])}
                showMobileToggle={false}
              />
            </div>
            <div className="md:col-span-3 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Results</CardTitle>
                  <CardDescription>
                    {activeFilters.length > 0
                      ? `${activeFilters.length} filter(s) applied`
                      : "Showing all results"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-text-secondary">
                    Results would appear here based on active filters.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <CodeBlock>
{`<FilterPanel
  groups={filterGroups}
  activeFilters={activeFilters}
  onFilterChange={setActiveFilters}
  onClearAll={() => setActiveFilters([])}
/>`}
          </CodeBlock>
        </ComponentSection>
        </section>

        {/* Forms */}
        <section id="forms">
        <ComponentSection
          title="Forms"
          description="Input fields, textareas, selects, and labels for building forms."
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Examples */}
            <div className="bg-surface-elevated p-10 rounded-lg border border-border-subtle">
              <h3 className="text-2xl font-semibold text-text-primary mb-8">Input Fields</h3>
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
            <div className="bg-surface-elevated p-10 rounded-lg border border-border-subtle">
              <h3 className="text-2xl font-semibold text-text-primary mb-8">Textarea & Select</h3>
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
            <div className="md:col-span-2 bg-surface-elevated p-10 rounded-lg border border-border-subtle">
              <h3 className="text-2xl font-semibold text-text-primary mb-8">Complete Form Example</h3>
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
        </section>

        {/* Notifications */}
        <section id="notifications">
        <ComponentSection
          title="Notifications"
          description="Important site messages and announcements."
        >
          <div className="space-y-4">
            <InfoBanner
              title="New Grant Programs Available"
              message="Applications are now open for our 2025 funding programs."
              action={{ label: "View Programs", href: "/programs" }}
            />
            <WarningBanner
              message="System maintenance scheduled for March 20, 2025 from 2-4 AM ET."
            />
            <SuccessBanner
              title="Application Submitted"
              message="Your grant application has been successfully submitted. You'll receive a confirmation email shortly."
            />
            <ErrorBanner
              title="Form Error"
              message="Please correct the highlighted fields before submitting."
              dismissible={false}
            />
          </div>

          <CodeBlock>
{`<InfoBanner
  title="New Grant Programs Available"
  message="Applications are now open for our 2025 funding programs."
  action={{ label: "View Programs", href: "/programs" }}
/>

<WarningBanner
  message="System maintenance scheduled."
/>

<SuccessBanner
  title="Success"
  message="Your action was successful."
/>`}
          </CodeBlock>
        </ComponentSection>
        </section>

        {/* Search */}
        <section id="search">
        <ComponentSection
          title="Search"
          description="Autocomplete search with categorized results."
        >
          <div className="max-w-2xl">
            <SearchCombobox
              results={searchResults}
              onSearch={(q) => console.log("Search:", q)}
              onSelect={(r) => console.log("Selected:", r)}
            />
          </div>

          <CodeBlock>
{`<SearchCombobox
  results={searchResults}
  onSearch={(q) => console.log("Search:", q)}
  onSelect={(r) => console.log("Selected:", r)}
/>`}
          </CodeBlock>
        </ComponentSection>
        </section>

        {/* Tabs */}
        <section id="tabs">
        <ComponentSection
          title="Tabs"
          description="Tabbed navigation for organizing related content."
        >
          <Tabs defaultValue="account" className="w-full">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="programs">Programs</TabsTrigger>
              <TabsTrigger value="funding">Funding</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="John Doe" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" defaultValue="john@example.com" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="programs">
              <Card>
                <CardHeader>
                  <CardTitle>Funding Programs</CardTitle>
                  <CardDescription>Explore available funding opportunities.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-text-secondary">Program information would appear here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="funding">
              <Card>
                <CardHeader>
                  <CardTitle>Funding History</CardTitle>
                  <CardDescription>View your past applications and grants.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-text-secondary">Funding history would appear here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <CodeBlock>
{`<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    Content for tab 1
  </TabsContent>
  <TabsContent value="tab2">
    Content for tab 2
  </TabsContent>
</Tabs>`}
          </CodeBlock>
        </ComponentSection>
        </section>
        </div>
      </div>

      <div className="border-t border-border-divider">
        <div className="max-w-7xl mx-auto px-8 py-20">
          {/* Integration Note */}
          <section className="bg-vert-50 border-l-8 border-vert-500 p-12 md:p-16">
            <h3 className="text-3xl font-bold text-text-primary mb-6" style={{ letterSpacing: '-0.02em' }}>Design System Integration</h3>
            <p className="text-text-secondary text-lg mb-6 leading-relaxed">
              All components are built with <strong>ShadCN UI</strong> and customized using our design system tokens:
            </p>
            <ul className="space-y-3 text-text-secondary text-lg">
              <li>✦ <strong>Semantic color tokens</strong> (brand-primary, feedback-success, etc.)</li>
              <li>✦ <strong>Typography system</strong> with calculated line heights and letter spacing</li>
              <li>✦ <strong>Spacing tokens</strong> for consistent padding and margins</li>
              <li>✦ <strong>Border radius tokens</strong> from the design system</li>
              <li>✦ <strong>Fully accessible</strong> with proper ARIA attributes</li>
            </ul>
            <div className="mt-8">
              <Link href="/style-guide" className="inline-block text-brand-primary hover:text-brand-primary-hover font-bold text-lg underline decoration-2 underline-offset-4">
                View Foundation →
              </Link>
            </div>
          </section>
        </div>
      </div>
      </div>
    </div>
  );
}
