import { tokens } from '@/lib/tokens';

export default function TokenExample() {
  return (
    <div className="p-lg space-y-md">
      <h2 className="text-2xl font-bold text-mountain-mist-900">
        Design Token Examples
      </h2>
      
      {/* Color Examples */}
      <div className="space-y-sm">
        <h3 className="text-lg font-semibold text-mountain-mist-800">
          Colors
        </h3>
        <div className="grid grid-cols-2 gap-sm">
          <div className="bg-bleu-500 p-md rounded-md text-white">
            Bleu 500
          </div>
          <div className="bg-rose-500 p-md rounded-md text-white">
            Rose 500
          </div>
          <div className="bg-vert-500 p-md rounded-md text-white">
            Vert 500
          </div>
          <div className="bg-orange-500 p-md rounded-md text-white">
            Orange 500
          </div>
        </div>
      </div>

      {/* Spacing Examples */}
      <div className="space-y-sm">
        <h3 className="text-lg font-semibold text-mountain-mist-800">
          Spacing
        </h3>
        <div className="space-y-xs">
          <div className="bg-mountain-mist-200 p-xs rounded-sm">
            Extra Small (xs)
          </div>
          <div className="bg-mountain-mist-200 p-sm rounded-sm">
            Small (sm)
          </div>
          <div className="bg-mountain-mist-200 p-md rounded-sm">
            Medium (md)
          </div>
          <div className="bg-mountain-mist-200 p-lg rounded-sm">
            Large (lg)
          </div>
        </div>
      </div>

      {/* Typography Examples */}
      <div className="space-y-sm">
        <h3 className="text-lg font-semibold text-mountain-mist-800">
          Typography
        </h3>
        <div className="space-y-xs">
          <p className="text-xs text-mountain-mist-600">
            Extra Small Text (xs)
          </p>
          <p className="text-sm text-mountain-mist-600">
            Small Text (sm)
          </p>
          <p className="text-base text-mountain-mist-600">
            Base Text (base)
          </p>
          <p className="text-lg text-mountain-mist-600">
            Large Text (lg)
          </p>
          <p className="text-xl font-bold text-mountain-mist-800">
            Extra Large Bold Text (xl)
          </p>
        </div>
      </div>

      {/* Border Radius Examples */}
      <div className="space-y-sm">
        <h3 className="text-lg font-semibold text-mountain-mist-800">
          Border Radius
        </h3>
        <div className="grid grid-cols-2 gap-sm">
          <div className="bg-celadon-500 p-md rounded-none text-white">
            None
          </div>
          <div className="bg-celadon-500 p-md rounded-sm text-white">
            Small
          </div>
          <div className="bg-celadon-500 p-md rounded-md text-white">
            Medium
          </div>
          <div className="bg-celadon-500 p-md rounded-lg text-white">
            Large
          </div>
        </div>
      </div>

      {/* CSS Custom Properties Example */}
      <div className="space-y-sm">
        <h3 className="text-lg font-semibold text-mountain-mist-800">
          CSS Custom Properties
        </h3>
        <div 
          className="p-md rounded-xl"
          style={{
            backgroundColor: 'var(--color-jaune-500)',
            color: 'var(--color-mountain-mist-900)',
            fontSize: 'var(--font-size-lg)',
            fontWeight: 'var(--font-weight-semibold)',
          }}
        >
          Using CSS Custom Properties
        </div>
      </div>

      {/* JavaScript Tokens Example */}
      <div className="space-y-sm">
        <h3 className="text-lg font-semibold text-mountain-mist-800">
          JavaScript Tokens
        </h3>
        <div 
          className="p-md rounded-xl"
          style={{
            backgroundColor: tokens.colors['jaune-clair'][500],
            color: tokens.colors.mountain.mist[900],
            padding: tokens.spacing.lg,
            borderRadius: tokens.borderRadius.xl,
          }}
        >
          Using JavaScript Tokens Object
        </div>
      </div>
    </div>
  );
}
