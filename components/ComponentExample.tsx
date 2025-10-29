import { ReactNode } from "react";

interface ComponentExampleProps {
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

/**
 * Wrapper component that displays components with a subtle card-style container
 * for the component library documentation.
 */
export default function ComponentExample({ 
  children, 
  title, 
  description,
  className = ""
}: ComponentExampleProps) {
  return (
    <div className="space-y-4">
      {(title || description) && (
        <div className="space-y-2">
          {title && (
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          )}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      )}
      
      {/* Component preview container */}
      <div className={`
        rounded-lg border border-border-subtle bg-surface-card p-8
        ${className}
      `}>
        {children}
      </div>
    </div>
  );
}
