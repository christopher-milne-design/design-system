"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
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
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

function ComponentSection({ 
  title, 
  description, 
  example,
  code
}: { 
  title: string; 
  description: string; 
  example: React.ReactNode;
  code: string;
}) {
  return (
    <section className="mb-24">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-2" style={{ letterSpacing: '-0.02em' }}>
          {title}
        </h2>
        <p className="text-text-secondary leading-relaxed">{description}</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-surface-elevated p-8 border border-border-subtle">
          {example}
        </div>
        <div className="bg-neutral-400 overflow-hidden">
          <pre className="p-6 overflow-x-auto h-full">
            <code className="text-sm text-neutral-100">{code}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}

export default function ComponentsPage() {
  const [dialogOpen, setDialogOpen] = React.useState(false);

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
              Canada Council for the Arts design system, built with ShadCN UI and customized with our design tokens.
            </p>
            <nav className="flex gap-6 text-base flex-wrap" aria-label="Page sections">
              <a href="#accordion" className="text-white hover:text-jaune-300 font-semibold border-b-2 border-transparent hover:border-jaune-300 transition-colors">Accordion</a>
              <a href="#alert" className="text-white hover:text-jaune-300 font-semibold border-b-2 border-transparent hover:border-jaune-300 transition-colors">Alert</a>
              <a href="#badge" className="text-white hover:text-jaune-300 font-semibold border-b-2 border-transparent hover:border-jaune-300 transition-colors">Badge</a>
              <a href="#breadcrumb" className="text-white hover:text-jaune-300 font-semibold border-b-2 border-transparent hover:border-jaune-300 transition-colors">Breadcrumb</a>
              <a href="#button" className="text-white hover:text-jaune-300 font-semibold border-b-2 border-transparent hover:border-jaune-300 transition-colors">Button</a>
              <a href="#card" className="text-white hover:text-jaune-300 font-semibold border-b-2 border-transparent hover:border-jaune-300 transition-colors">Card</a>
              <a href="#carousel" className="text-white hover:text-jaune-300 font-semibold border-b-2 border-transparent hover:border-jaune-300 transition-colors">Carousel</a>
              <a href="#dialog" className="text-white hover:text-jaune-300 font-semibold border-b-2 border-transparent hover:border-jaune-300 transition-colors">Dialog</a>
              <a href="#dropdown" className="text-white hover:text-jaune-300 font-semibold border-b-2 border-transparent hover:border-jaune-300 transition-colors">Dropdown</a>
              <a href="#form" className="text-white hover:text-jaune-300 font-semibold border-b-2 border-transparent hover:border-jaune-300 transition-colors">Form</a>
              <a href="#navigation" className="text-white hover:text-jaune-300 font-semibold border-b-2 border-transparent hover:border-jaune-300 transition-colors">Navigation</a>
              <a href="#table" className="text-white hover:text-jaune-300 font-semibold border-b-2 border-transparent hover:border-jaune-300 transition-colors">Table</a>
              <a href="#tabs" className="text-white hover:text-jaune-300 font-semibold border-b-2 border-transparent hover:border-jaune-300 transition-colors">Tabs</a>
            </nav>
          </div>
        </div>
      </section>

      <div>
        <div className="max-w-7xl mx-auto px-8 py-20">

        {/* Accordion */}
        <section id="accordion" className="scroll-mt-20">
          <ComponentSection
            title="Accordion"
            description="Expandable content sections for FAQs and collapsible information."
            example={
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
              </Accordion>
            }
            code={`<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Question?</AccordionTrigger>
    <AccordionContent>
      Answer content here.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
          />
        </section>

        {/* Alert */}
        <section id="alert" className="scroll-mt-20">
          <ComponentSection
            title="Alert"
            description="Status and feedback messages with accessible color contrast."
            example={
              <div className="space-y-4">
                <Alert className="bg-feedback-success border-0">
                  <AlertTitle className="text-white">Success</AlertTitle>
                  <AlertDescription className="text-white">Your grant application has been submitted successfully.</AlertDescription>
                </Alert>
                <Alert className="bg-feedback-error border-0">
                  <AlertTitle className="text-white">Error</AlertTitle>
                  <AlertDescription className="text-white">Please check your input and try again.</AlertDescription>
                </Alert>
                <Alert className="bg-feedback-warning border-0">
                  <AlertTitle className="text-white">Warning</AlertTitle>
                  <AlertDescription className="text-white">Please review your information before continuing.</AlertDescription>
                </Alert>
              </div>
            }
            code={`<Alert className="bg-feedback-success border-0">
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Message here</AlertDescription>
</Alert>`}
          />
        </section>

        {/* Badge */}
        <section id="badge" className="scroll-mt-20">
          <ComponentSection
            title="Badge"
            description="Status indicators for open, closed, new, or featured content."
            example={
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-feedback-success text-white">Open</Badge>
                <Badge className="bg-feedback-error text-white">Closed</Badge>
                <Badge className="bg-brand-primary text-white">New</Badge>
                <Badge className="bg-bleu-500 text-white">Featured</Badge>
              </div>
            }
            code={`<Badge className="bg-feedback-success text-white">
  Open
</Badge>
<Badge className="bg-feedback-error text-white">
  Closed
</Badge>`}
          />
        </section>

        {/* Breadcrumb */}
        <section id="breadcrumb" className="scroll-mt-20">
          <ComponentSection
            title="Breadcrumb"
            description="Hierarchical navigation for deep content like funding programs."
            example={
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/programs">Programs</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Explore and Create</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            }
            code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
          />
        </section>

        {/* Button */}
        <section id="button" className="scroll-mt-20">
          <ComponentSection
            title="Button"
            description="Primary and secondary CTAs for user interactions."
            example={
              <div className="flex flex-wrap gap-4">
                <Button className="bg-brand-primary text-white">Apply Now</Button>
                <Button className="bg-brand-secondary text-white">Read More</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            }
            code={`<Button className="bg-brand-primary text-white">
  Apply Now
</Button>
<Button variant="outline">
  Learn More
</Button>`}
          />
        </section>

        {/* Card */}
        <section id="card" className="scroll-mt-20">
          <ComponentSection
            title="Card"
            description="Featured content with image, title, and description."
            example={
              <div className="grid md:grid-cols-2 gap-6">
                {/* Card without badge */}
                <Card className="border-0">
                  <div className="relative w-full h-32 bg-neutral-200">
                    <Image
                      src="/images/features/artist-story.jpg"
                      alt="Program"
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">Explore and Create</CardTitle>
                    <CardDescription>Support for artistic exploration and creation.</CardDescription>
                  </CardHeader>
                </Card>
                
                {/* Card with badges */}
                <Card className="border-0">
                  <div className="relative w-full h-32 bg-neutral-200">
                    <Image
                      src="/images/features/misha-maseka.png"
                      alt="Program"
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </div>
                  <CardHeader className="pb-8">
                    <div className="flex gap-2 mb-2">
                      <Badge className="bg-brand-primary text-white text-xs">New</Badge>
                      <Badge className="bg-feedback-success text-white text-xs">Open</Badge>
                    </div>
                    <CardTitle className="text-lg">Arts Across Canada</CardTitle>
                    <CardDescription>Connect with artistic communities nationwide.</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            }
            code={`<Card className="border-0">
  <div className="relative w-full h-32">
    <Image src="/..." alt="..." />
  </div>
  <CardHeader>
    <div className="flex gap-2 mb-2">
      <Badge>New</Badge>
    </div>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
</Card>`}
          />
        </section>

        {/* Carousel */}
        <section id="carousel" className="scroll-mt-20">
          <ComponentSection
            title="Carousel"
            description="Rotating features and visual highlights for engagement."
            example={
              <Carousel className="w-full max-w-md mx-auto">
                <CarouselContent>
                  <CarouselItem className="bg-bleu-500 text-white p-8 text-center min-h-40 flex items-center justify-center">
                    <div>
                      <h3 className="text-xl font-bold mb-2">Featured Artist</h3>
                      <p>Discover incredible talent</p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="bg-vert-500 text-white p-8 text-center min-h-40 flex items-center justify-center">
                    <div>
                      <h3 className="text-xl font-bold mb-2">New Program</h3>
                      <p>Open for applications</p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="bg-orange-500 text-white p-8 text-center min-h-40 flex items-center justify-center">
                    <div>
                      <h3 className="text-xl font-bold mb-2">Success Story</h3>
                      <p>Read inspiring stories</p>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
              </Carousel>
            }
            code={`<Carousel>
  <CarouselContent>
    <CarouselItem>Slide 1</CarouselItem>
    <CarouselItem>Slide 2</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
          />
        </section>

        {/* Dialog */}
        <section id="dialog" className="scroll-mt-20">
          <ComponentSection
            title="Dialog"
            description="Modal windows for confirmations, disclosures, and sign-ups."
            example={
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-brand-primary text-white">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent className="border-0">
                  <DialogHeader>
                    <DialogTitle>Accessibility Statement</DialogTitle>
                    <DialogDescription>
                      Our commitment to accessibility and inclusive design for all users.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <p className="text-sm text-text-secondary">
                      We are committed to ensuring digital accessibility for individuals with disabilities.
                    </p>
                    <Button onClick={() => setDialogOpen(false)} className="bg-brand-primary text-white">
                      Close
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            }
            code={`<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`}
          />
        </section>

        {/* Dropdown Menu */}
        <section id="dropdown" className="scroll-mt-20">
          <ComponentSection
            title="Dropdown Menu"
            description="Secondary navigation, user menus, and filters."
            example={
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="border-0">
                  <DropdownMenuItem>Language: English</DropdownMenuItem>
                  <DropdownMenuItem>Language: Français</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            }
            code={`<DropdownMenu>
  <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Item 1</DropdownMenuItem>
    <DropdownMenuItem>Item 2</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
          />
        </section>

        {/* Form */}
        <section id="form" className="scroll-mt-20">
          <ComponentSection
            title="Form"
            description="Newsletter signups, contact forms, and input fields."
            example={
              <div className="space-y-4 max-w-sm">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" className="border-0" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="border-0" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message" className="border-0" rows={3} />
                </div>
                <Button className="bg-brand-primary text-white w-full">Submit</Button>
              </div>
            }
            code={`<form className="space-y-4">
  <div>
    <Label>Name</Label>
    <Input placeholder="..." />
  </div>
  <Textarea placeholder="..." />
  <Button type="submit">Submit</Button>
</form>`}
          />
        </section>

        {/* Navigation Menu */}
        <section id="navigation" className="scroll-mt-20">
          <ComponentSection
            title="Navigation Menu"
            description="Main site navigation and sub-menus."
            example={
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-40 p-4 space-y-2">
                        <p className="text-sm font-semibold">Explore and Create</p>
                        <p className="text-sm font-semibold">Concept to Realization</p>
                        <p className="text-sm font-semibold">Arts Across Canada</p>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            }
            code={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
      <NavigationMenuContent>
        Menu items...
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
          />
        </section>

        {/* Table */}
        <section id="table" className="scroll-mt-20">
          <ComponentSection
            title="Table"
            description="Tabular content for grant listings, funding data, and schedules."
            example={
              <div className="overflow-x-auto border-0">
                <Table>
                  <TableHeader>
                    <TableRow className="border-0 border-b border-border-default">
                      <TableHead className="text-text-primary">Program</TableHead>
                      <TableHead className="text-text-primary">Status</TableHead>
                      <TableHead className="text-text-primary">Deadline</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-0 border-b border-border-subtle">
                      <TableCell>Explore and Create</TableCell>
                      <TableCell><Badge className="bg-feedback-success text-white">Open</Badge></TableCell>
                      <TableCell>Dec 31, 2024</TableCell>
                    </TableRow>
                    <TableRow className="border-0 border-b border-border-subtle">
                      <TableCell>Concept to Realization</TableCell>
                      <TableCell><Badge className="bg-feedback-success text-white">Open</Badge></TableCell>
                      <TableCell>Jan 15, 2025</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            }
            code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Column 1</TableHead>
      <TableHead>Column 2</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Data</TableCell>
      <TableCell>Data</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
          />
        </section>

        {/* Tabs */}
        <section id="tabs" className="scroll-mt-20">
          <ComponentSection
            title="Tabs"
            description="Toggling content sections within a page."
            example={
              <Tabs defaultValue="overview" className="w-full">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
                  <TabsTrigger value="apply">How to Apply</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-4">
                  <p className="text-text-secondary">Program overview and key information goes here.</p>
                </TabsContent>
                <TabsContent value="eligibility" className="mt-4">
                  <p className="text-text-secondary">Eligibility requirements and criteria.</p>
                </TabsContent>
                <TabsContent value="apply" className="mt-4">
                  <p className="text-text-secondary">Instructions and steps to apply.</p>
                </TabsContent>
              </Tabs>
            }
            code={`<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>`}
          />
        </section>

        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-vert-500 py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>
            See Real Examples
          </h2>
          <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto leading-relaxed">
            Explore complete page examples showing how components work together to create real Canada Council experiences.
          </p>
          <Link 
            href="/examples" 
            className="inline-block bg-neutral-400 hover:bg-neutral-300 text-white px-10 py-5 font-bold text-lg transition-colors"
          >
            View Examples
          </Link>
        </div>
      </section>
    </div>
  );
}
