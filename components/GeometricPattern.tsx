/**
 * Geometric pattern component inspired by Canada Council brand guidelines
 * Creates abstract patterns based on the box/triangle motif system
 */

interface GeometricPatternProps {
  variant?: 1 | 2 | 3 | 4;
  colorScheme?: 'jaune' | 'rose-marron' | 'rouge-orange' | 'bleu-celadon' | 'vert';
  className?: string;
}

export default function GeometricPattern({ 
  variant = 1, 
  colorScheme = 'jaune',
  className = '' 
}: GeometricPatternProps) {
  
  // Color schemes based on brand guidelines
  const colorSchemes = {
    'jaune': {
      primary: '#F5D132',
      secondary: '#EAC30F',
      light: '#FEF0B3',
    },
    'rose-marron': {
      primary: '#FC72E0',
      secondary: '#B39340',
      light: '#FFD0F5',
    },
    'rouge-orange': {
      primary: '#E32249',
      secondary: '#F26118',
      light: '#F798AA',
    },
    'bleu-celadon': {
      primary: '#1A70EF',
      secondary: '#B6D1AE',
      light: '#C3DEFE',
    },
    'vert': {
      primary: '#15CE49',
      secondary: '#20EA57',
      light: '#E0F1FF',
    }
  };

  const colors = colorSchemes[colorScheme];

  // Pattern 1: Triangle grid (like Motif 3 from guidelines)
  if (variant === 1) {
    return (
      <svg 
        viewBox="0 0 400 400" 
        className={className}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id={`triangles-${colorScheme}`} x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <polygon points="0,0 50,0 25,43.3" fill={colors.primary} />
            <polygon points="50,0 100,0 75,43.3" fill={colors.secondary} />
            <polygon points="25,43.3 75,43.3 50,86.6" fill={colors.light} />
            <polygon points="0,0 25,43.3 0,86.6" fill={colors.secondary} />
            <polygon points="75,43.3 100,0 100,86.6" fill={colors.primary} />
            <polygon points="0,86.6 50,86.6 25,100" fill={colors.light} />
            <polygon points="50,86.6 100,86.6 75,100" fill={colors.primary} />
          </pattern>
        </defs>
        <rect width="400" height="400" fill={`url(#triangles-${colorScheme})`} />
      </svg>
    );
  }

  // Pattern 2: Organic shapes (like Motif 2 from guidelines)
  if (variant === 2) {
    return (
      <svg 
        viewBox="0 0 400 400" 
        className={className}
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="400" height="400" fill={colors.light} />
        <path d="M 0,200 Q 100,100 200,150 T 400,100 L 400,400 L 0,400 Z" fill={colors.primary} />
        <path d="M 0,0 Q 150,100 250,80 T 400,150 L 400,0 Z" fill={colors.secondary} />
        <ellipse cx="300" cy="250" rx="80" ry="100" fill={colors.secondary} opacity="0.8" />
        <polygon points="100,350 180,280 250,380" fill={colors.primary} opacity="0.7" />
      </svg>
    );
  }

  // Pattern 3: Geometric blocks (like Motif 1 from guidelines)
  if (variant === 3) {
    return (
      <svg 
        viewBox="0 0 400 400" 
        className={className}
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="400" height="400" fill={colors.light} />
        <polygon points="0,0 150,0 120,180 0,150" fill={colors.primary} />
        <polygon points="150,0 400,0 400,200 280,180" fill={colors.secondary} />
        <polygon points="0,150 120,180 100,400 0,400" fill={colors.secondary} />
        <polygon points="280,180 400,200 400,400 150,400 100,400 120,180" fill={colors.primary} />
      </svg>
    );
  }

  // Pattern 4: Diagonal geometric (like Motif 4 from guidelines)
  if (variant === 4) {
    return (
      <svg 
        viewBox="0 0 400 400" 
        className={className}
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="400" height="400" fill={colors.light} />
        <circle cx="100" cy="100" r="120" fill={colors.primary} />
        <circle cx="300" cy="100" r="120" fill={colors.secondary} />
        <circle cx="100" cy="300" r="120" fill={colors.secondary} />
        <circle cx="300" cy="300" r="120" fill={colors.primary} />
        <rect x="0" y="150" width="400" height="100" fill={colors.light} />
        <rect x="150" y="0" width="100" height="400" fill={colors.light} />
      </svg>
    );
  }

  return null;
}
