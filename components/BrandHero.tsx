import GeometricPattern from './GeometricPattern';

interface BrandHeroProps {
  title: string;
  subtitle?: string;
  pattern?: 1 | 2 | 3 | 4;
  colorScheme?: 'jaune' | 'rose-marron' | 'rouge-orange' | 'bleu-celadon' | 'vert';
  children?: React.ReactNode;
}

/**
 * Brand hero section with geometric patterns
 * Inspired by the banner designs from Canada Council brand guidelines
 */
export default function BrandHero({ 
  title, 
  subtitle, 
  pattern = 1,
  colorScheme = 'jaune',
  children 
}: BrandHeroProps) {
  return (
    <div className="relative overflow-hidden bg-white mb-20">
      {/* Geometric pattern background */}
      <div className="absolute inset-0 opacity-100">
        <GeometricPattern 
          variant={pattern} 
          colorScheme={colorScheme}
          className="w-full h-full"
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-text-primary mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
              {subtitle}
            </p>
          )}
          {children && (
            <div className="mt-8">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
