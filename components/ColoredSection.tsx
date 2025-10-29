import { ReactNode } from 'react';

interface ColoredSectionProps {
  children: ReactNode;
  color?: 'bleu' | 'orange' | 'vert' | 'celadon' | 'jaune' | 'rose' | 'rouge';
  className?: string;
}

/**
 * Colored accent section for breaking up content with brand colors
 */
export default function ColoredSection({ 
  children, 
  color = 'bleu',
  className = '' 
}: ColoredSectionProps) {
  
  // Background colors from brand palette (lighter shades for readability)
  const bgColors = {
    'bleu': 'bg-bleu-50',
    'orange': 'bg-orange-50',
    'vert': 'bg-vert-50',
    'celadon': 'bg-celadon-100',
    'jaune': 'bg-jaune-50',
    'rose': 'bg-rose-50',
    'rouge': 'bg-rouge-50',
  };

  // Border accent colors (stronger shades)
  const borderColors = {
    'bleu': 'border-bleu-500',
    'orange': 'border-orange-500',
    'vert': 'border-vert-500',
    'celadon': 'border-celadon-600',
    'jaune': 'border-jaune-500',
    'rose': 'border-rose-500',
    'rouge': 'border-rouge-500',
  };

  return (
    <section className={`${bgColors[color]} border-l-8 ${borderColors[color]} py-16 md:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-8">
        {children}
      </div>
    </section>
  );
}
