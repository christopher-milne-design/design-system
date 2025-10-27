# Typography System Documentation

## Overview

This typography system uses a 1.33x type scale ratio optimized for marketing sites, with 16px as the base unit. All calculations follow specific rules for line heights, letter spacing, and grid alignment.

## Type Scale Calculation

**Formula**: Size × 1.33x (rounded to nearest 4px)

### Desktop Headings
- **H1**: 60px (1.33⁴ × 16px base) 
- **H2**: 44px (1.33³ × 16px base)
- **H3**: 32px (1.33² × 16px base)
- **H4**: 24px (1.33¹ × 16px base)
- **H5**: 20px ← Maps to P1
- **H6**: 16px (base unit) ← Maps to P2

## Line Height Rules

### Headings: Font Size × 120% (rounded down to nearest 4px)
- Creates tighter, more dramatic appearance
- Maintains visual hierarchy
- Example: 60px × 1.2 = 72px

### Paragraphs: Font Size × 150% (rounded to nearest 4px)
- Optimizes readability
- More generous spacing for body text
- Example: 16px × 1.5 = 24px

### Labels & Buttons: 100% line height
- Prevents multi-line wrapping
- Enables precise optical alignment
- No built-in padding interference

## Letter Spacing Rules

### Headings: -2% across all levels
- Compensates for increased absolute spacing at larger sizes
- Creates refined, professional appearance
- Applied consistently: `-0.02em` or `-2%`

### Paragraphs: 0% (never adjust)
- Default spacing optimized for legibility
- Tampering reduces readability
- Leave at browser default

### Caps Labels: +5% increase
- Dramatically improves all-caps readability
- Adds visual distinction
- Only for uppercase text: `0.05em` or `5%`

## Strategic Font Size Mapping

The system allows flexible pairing by mapping heading sizes to paragraph sizes:

| Heading | Size | Paragraph | Size | Purpose |
|---------|------|-----------|------|---------|
| H5 | 20px | P1 | 20px | Interchangeable for emphasis |
| H6 | 16px | P2 | 16px | Reduces total page font sizes |

This creates:
- **Fewer unique font sizes** per page
- **More flexible typography** options
- **Consistent vertical rhythm**

## Typography Categories

### 1. Headings (H1-H6)
```
font-size: [calculated size]
line-height: [size × 1.2, rounded down to 4px]
letter-spacing: -2%
font-weight: bold (H1-H4) or semibold (H5-H6)
```

### 2. Paragraphs (P1-P3)
```
font-size: [20px, 16px, 14px]
line-height: [size × 1.5, rounded to 4px]
letter-spacing: 0%
font-weight: normal
```

### 3. Labels
**Standard Labels:**
```
font-size: 14px or 12px
line-height: 100%
letter-spacing: 0%
font-weight: medium
```

**Caps Labels:**
```
font-size: 14px or 12px
line-height: 100%
letter-spacing: 5%
font-weight: semibold
text-transform: uppercase
```

### 4. Buttons
```
font-size: 16px, 14px, or 12px
line-height: 100%
letter-spacing: 0%
font-weight: semibold
```

## Responsive Breakpoints

### Desktop (default)
- Full scale from H1 (60px) to H6 (16px)
- Optimized for large screens
- Maximum hierarchy depth

### Mobile (< 768px)
- Reduced headings: H1 (40px) down to H6 (14px)
- Slightly smaller P1 (18px vs 20px desktop)
- P2 and P3 remain same as desktop
- Labels and buttons unchanged for touch targets

### Tablet (optional for mature products)
- Can interpolate between mobile and desktop
- Recommended for large design systems
- Not implemented in initial system

## 4px Grid System

All values rounded to nearest 4 pixels:
- ✅ **Clean spacing relationships**
- ✅ **No decimal values**
- ✅ **Easier mental math**
- ✅ **Consistent vertical rhythm**

Examples:
- 44px × 1.2 = 52.8px → **52px** (rounded down for headings)
- 20px × 1.5 = 30px → **32px** (rounded up to nearest 4px)

## Usage Examples

### Heading with proper styles
```css
.heading-1 {
  font-size: 60px;
  line-height: 72px;  /* 60px × 1.2 */
  letter-spacing: -0.02em;  /* -2% */
  font-weight: 700;
}
```

### Paragraph with proper styles
```css
.paragraph-2 {
  font-size: 16px;
  line-height: 24px;  /* 16px × 1.5 */
  letter-spacing: 0;  /* never adjust */
  font-weight: 400;
}
```

### Caps label with increased spacing
```css
.caps-label {
  font-size: 14px;
  line-height: 1;  /* 100% */
  letter-spacing: 0.05em;  /* +5% */
  font-weight: 600;
  text-transform: uppercase;
}
```

### Button with 100% line height
```css
.button-medium {
  font-size: 14px;
  line-height: 1;  /* 100% - prevents wrapping */
  letter-spacing: 0;
  font-weight: 600;
}
```

## Implementation Notes

### Token Studio Format
The typography system is defined in `tokens/typography-system.json` using Token Studio's format with:
- Separate objects for desktop and mobile
- Organized by functional category (headings, paragraphs, labels, buttons)
- Token references for font weights: `{fontWeight.bold}`
- Descriptions explaining calculations

### Next Steps
1. Integrate with Style Dictionary build process
2. Generate Tailwind utility classes
3. Create responsive variants using `@media` queries
4. Add to style guide documentation page
5. Create Figma typography styles matching token structure

## Key Principles

1. **Base Unit**: 16px standard (H6 and P2)
2. **Scale Ratio**: 1.33x for dramatic marketing feel
3. **Grid Alignment**: All values divisible by 4px
4. **Heading Line Height**: Font size × 1.2 (rounded down)
5. **Paragraph Line Height**: Font size × 1.5 (rounded to nearest 4px)
6. **Heading Letter Spacing**: Always -2%
7. **Paragraph Letter Spacing**: Never adjust (0%)
8. **Caps Letter Spacing**: Always +5%
9. **Button/Label Line Height**: Always 100%
10. **Strategic Mapping**: H5=P1, H6=P2 for flexibility
