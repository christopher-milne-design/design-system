"use client";

import * as React from "react";
import { Search, X } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface SearchResult {
  id: string;
  title: string;
  description?: string;
  category?: string;
  href: string;
}

interface SearchComboboxProps {
  placeholder?: string;
  results?: SearchResult[];
  onSearch?: (query: string) => void;
  onSelect?: (result: SearchResult) => void;
  className?: string;
  isLoading?: boolean;
}

export default function SearchCombobox({
  placeholder = "Search programs, stories, resources...",
  results = [],
  onSearch,
  onSelect,
  className,
  isLoading = false,
}: SearchComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");

  // Group results by category
  const groupedResults = React.useMemo(() => {
    const groups: Record<string, SearchResult[]> = {};
    results.forEach((result) => {
      const category = result.category || "Results";
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(result);
    });
    return groups;
  }, [results]);

  const handleSearch = (value: string) => {
    setQuery(value);
    onSearch?.(value);
    setOpen(value.length > 0);
  };

  const handleSelect = (result: SearchResult) => {
    onSelect?.(result);
    setQuery("");
    setOpen(false);
  };

  const handleClear = () => {
    setQuery("");
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className={cn("relative w-full", className)}>
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => query.length > 0 && setOpen(true)}
            className={cn(
              "w-full rounded-lg border border-border-default bg-white pl-10 pr-10 py-2.5 text-sm text-text-primary placeholder:text-text-muted",
              "focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent",
              "transition-all"
            )}
          />
          {query && (
            <button
              onClick={handleClear}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </PopoverTrigger>

      <PopoverContent
        className="w-[--radix-popover-trigger-width] p-0"
        align="start"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <Command>
          <CommandList>
            {isLoading ? (
              <div className="py-6 text-center text-sm text-text-muted">
                Loading...
              </div>
            ) : results.length === 0 && query ? (
              <CommandEmpty>No results found for "{query}"</CommandEmpty>
            ) : (
              Object.entries(groupedResults).map(([category, items]) => (
                <CommandGroup key={category} heading={category}>
                  {items.map((result) => (
                    <CommandItem
                      key={result.id}
                      value={result.title}
                      onSelect={() => handleSelect(result)}
                      className="cursor-pointer"
                    >
                      <div className="flex flex-col gap-1">
                        <div className="font-medium text-text-primary">
                          {result.title}
                        </div>
                        {result.description && (
                          <div className="text-xs text-text-secondary line-clamp-1">
                            {result.description}
                          </div>
                        )}
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
