"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, Globe } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href?: string;
  description?: string;
  items?: {
    title: string;
    href: string;
    description: string;
  }[];
}

interface MainNavProps {
  items?: NavItem[];
  currentLocale?: "en" | "fr";
  onLocaleChange?: (locale: "en" | "fr") => void;
}

const defaultItems: NavItem[] = [
  {
    title: "Funding",
    items: [
      {
        title: "All Programs",
        href: "/funding/programs",
        description: "Browse all available funding opportunities",
      },
      {
        title: "Apply",
        href: "/funding/apply",
        description: "Start your funding application",
      },
      {
        title: "Guidelines",
        href: "/funding/guidelines",
        description: "Application guidelines and requirements",
      },
      {
        title: "Deadlines",
        href: "/funding/deadlines",
        description: "Important dates and timelines",
      },
    ],
  },
  {
    title: "About",
    items: [
      {
        title: "Who We Are",
        href: "/about",
        description: "Our mission and mandate",
      },
      {
        title: "Leadership",
        href: "/about/leadership",
        description: "Meet our team and board",
      },
      {
        title: "Research",
        href: "/about/research",
        description: "Reports and publications",
      },
      {
        title: "Contact",
        href: "/about/contact",
        description: "Get in touch with us",
      },
    ],
  },
  {
    title: "Stories",
    href: "/stories",
  },
  {
    title: "Resources",
    href: "/resources",
  },
];

export default function MainNav({
  items = defaultItems,
  currentLocale = "en",
  onLocaleChange,
}: MainNavProps) {
  return (
    <div className="w-full border-b border-border-default bg-surface-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded bg-brand-primary" />
          <span className="text-lg font-bold text-text-primary">
            Canada Council for the Arts
          </span>
        </Link>

        {/* Main Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {items.map((item) =>
              item.items ? (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger className="text-text-primary hover:text-brand-primary">
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {item.items.map((subItem) => (
                        <ListItem
                          key={subItem.title}
                          title={subItem.title}
                          href={subItem.href}
                        >
                          {subItem.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.title}>
                  <Link href={item.href || "#"}>
                    {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
                    }
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-text-primary hover:text-brand-primary"
                      )}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-border-default"
              >
                <Globe className="h-4 w-4" />
                {currentLocale.toUpperCase()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => onLocaleChange?.("en")}
                className={cn(
                  currentLocale === "en" && "bg-surface-elevated"
                )}
              >
                English
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onLocaleChange?.("fr")}
                className={cn(
                  currentLocale === "fr" && "bg-surface-elevated"
                )}
              >
                Français
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Login Button */}
          <Button
            asChild
            className="bg-brand-primary hover:bg-brand-primary-hover text-white"
          >
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-surface-elevated hover:text-brand-primary focus:bg-surface-elevated focus:text-brand-primary",
            className
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-none text-text-primary">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-text-secondary">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
