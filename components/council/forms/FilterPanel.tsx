"use client";

import * as React from "react";
import { X, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

export interface FilterGroup {
  id: string;
  label: string;
  type: "checkbox" | "select";
  options: FilterOption[];
}

export interface ActiveFilter {
  groupId: string;
  optionId: string;
  label: string;
}

interface FilterPanelProps {
  groups: FilterGroup[];
  activeFilters?: ActiveFilter[];
  onFilterChange?: (filters: ActiveFilter[]) => void;
  onClearAll?: () => void;
  className?: string;
  showMobileToggle?: boolean;
}

export default function FilterPanel({
  groups,
  activeFilters = [],
  onFilterChange,
  onClearAll,
  className,
  showMobileToggle = true,
}: FilterPanelProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleCheckboxChange = (groupId: string, option: FilterOption, checked: boolean) => {
    const newFilters = checked
      ? [
          ...activeFilters,
          { groupId, optionId: option.id, label: option.label },
        ]
      : activeFilters.filter(
          (f) => !(f.groupId === groupId && f.optionId === option.id)
        );
    onFilterChange?.(newFilters);
  };

  const handleSelectChange = (groupId: string, value: string) => {
    const group = groups.find((g) => g.id === groupId);
    const option = group?.options.find((o) => o.id === value);
    
    if (!option) return;

    const newFilters = [
      ...activeFilters.filter((f) => f.groupId !== groupId),
      { groupId, optionId: option.id, label: option.label },
    ];
    onFilterChange?.(newFilters);
  };

  const handleRemoveFilter = (filter: ActiveFilter) => {
    const newFilters = activeFilters.filter(
      (f) => !(f.groupId === filter.groupId && f.optionId === filter.optionId)
    );
    onFilterChange?.(newFilters);
  };

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-text-primary">
              Active Filters ({activeFilters.length})
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearAll}
              className="h-auto p-0 text-xs text-brand-primary hover:text-brand-primary-hover"
            >
              Clear All
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {activeFilters.map((filter) => (
              <Badge
                key={`${filter.groupId}-${filter.optionId}`}
                variant="secondary"
                className="gap-1 pr-1"
              >
                {filter.label}
                <button
                  onClick={() => handleRemoveFilter(filter)}
                  className="ml-1 rounded-full hover:bg-surface-elevated p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
          <Separator />
        </div>
      )}

      {/* Filter Groups */}
      <Accordion type="multiple" defaultValue={groups.map((g) => g.id)} className="w-full">
        {groups.map((group) => (
          <AccordionItem key={group.id} value={group.id} className="border-border-subtle">
            <AccordionTrigger className="text-sm font-semibold text-text-primary hover:text-brand-primary">
              {group.label}
            </AccordionTrigger>
            <AccordionContent>
              {group.type === "checkbox" ? (
                <div className="space-y-3 pt-2">
                  {group.options.map((option) => {
                    const isChecked = activeFilters.some(
                      (f) => f.groupId === group.id && f.optionId === option.id
                    );
                    return (
                      <div key={option.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`${group.id}-${option.id}`}
                          checked={isChecked}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange(group.id, option, !!checked)
                          }
                        />
                        <label
                          htmlFor={`${group.id}-${option.id}`}
                          className="flex flex-1 items-center justify-between text-sm text-text-secondary cursor-pointer"
                        >
                          <span>{option.label}</span>
                          {option.count !== undefined && (
                            <span className="text-xs text-text-muted">
                              ({option.count})
                            </span>
                          )}
                        </label>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <Select
                  value={
                    activeFilters.find((f) => f.groupId === group.id)?.optionId || ""
                  }
                  onValueChange={(value) => handleSelectChange(group.id, value)}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    {group.options.map((option) => (
                      <SelectItem key={option.id} value={option.id}>
                        {option.label}
                        {option.count !== undefined && ` (${option.count})`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle */}
      {showMobileToggle && (
        <div className="md:hidden mb-4">
          <Button
            variant="outline"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full justify-between"
          >
            <span className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
              {activeFilters.length > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {activeFilters.length}
                </Badge>
              )}
            </span>
          </Button>
          {isOpen && (
            <div className="mt-4 rounded-lg border border-border-default bg-white p-4">
              <FilterContent />
            </div>
          )}
        </div>
      )}

      {/* Desktop Panel */}
      <div className={cn("hidden md:block", className)}>
        <div className="rounded-lg border border-border-default bg-white p-6">
          <div className="mb-4 flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5 text-brand-primary" />
            <h3 className="text-lg font-bold text-text-primary">Filters</h3>
          </div>
          <FilterContent />
        </div>
      </div>
    </>
  );
}
