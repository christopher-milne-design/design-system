# Composable Card System

A flexible, brand-aligned card component system for the Canada Council for the Arts.

## Philosophy

Rather than creating rigid card variants, this system uses **composition** — you build different card types by combining simple sub-components.

## Components

### Core Components

- **`<Card>`** — Base container with brand-aligned styling
- **`<CardImage>`** — Responsive images with aspect ratio control
- **`<CardBadges>`** — Container for category badges
- **`<CardHeader>`** — Top section for titles and badges
- **`<CardTitle>`** — Blue brand-colored heading
- **`<CardDescription>`** — Body text description
- **`<CardContent>`** — Main content area with consistent padding
- **`<CardStat>`** — Large stat display with optional icon
- **`<CardFooter>`** — Bottom actions area

## Usage Examples

### 1. Stat Card

```tsx
<Card>
  <CardStat 
    value="$308.8M" 
    label="in grants and funding initiatives in 2023-24"
    icon={<Sprout className="w-8 h-8" />}
  />
</Card>
```

### 2. Project Card (Image + Title + Description)

```tsx
<Card>
  <CardImage 
    src="/image.jpg" 
    alt="Project name"
    aspectRatio="video"
  />
  <CardContent className="space-y-4">
    <CardTitle>Alberta Focus Initiative</CardTitle>
    <CardDescription>
      This focused initiative aims to strengthen engagement...
    </CardDescription>
  </CardContent>
</Card>
```

### 3. Article Card (Image + Badges + Content)

```tsx
<Card>
  <CardImage 
    src="/article.jpg" 
    alt="Article title"
    aspectRatio="video"
  />
  <CardHeader>
    <CardBadges>
      <Badge variant="outline" className="bg-bleu-50 text-bleu-700 border-bleu-200">
        Francophonie
      </Badge>
      <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
        International
      </Badge>
    </CardBadges>
  </CardHeader>
  <CardContent className="space-y-4">
    <CardTitle>Finding Community at the CITF Incubator</CardTitle>
    <CardDescription>
      Siona Gareau-Brennan finds artistic connection...
    </CardDescription>
  </CardContent>
</Card>
```

### 4. Results Card (Square Image + Content)

```tsx
<Card>
  <CardImage 
    src="/map.jpg" 
    alt="Funding results"
    aspectRatio="square"
  />
  <CardContent className="space-y-4">
    <CardTitle>Arts Across Canada Funding Results, 2024-25</CardTitle>
    <CardDescription>
      Of the 751 applications assessed...
    </CardDescription>
  </CardContent>
</Card>
```

## Image Aspect Ratios

The `CardImage` component supports three aspect ratios:

- `aspectRatio="video"` — 16:9 (default)
- `aspectRatio="square"` — 1:1
- `aspectRatio="wide"` — 21:9

## Brand Colors

Use brand color tokens for badge backgrounds:

```tsx
// Blue
className="bg-bleu-50 text-bleu-700 border-bleu-200"

// Orange
className="bg-orange-50 text-orange-700 border-orange-200"

// Green
className="bg-vert-50 text-vert-700 border-vert-200"

// Yellow
className="bg-jaune-50 text-jaune-700 border-jaune-200"

// Rose/Pink
className="bg-rose-50 text-rose-700 border-rose-200"
```

## Design Principles

1. **Clean & Minimal** — White backgrounds, subtle shadows, no busy backgrounds
2. **Brand Colors** — Blue titles (`text-bleu-600`), vibrant badges
3. **Consistent Spacing** — Standard padding and gaps
4. **Composable** — Mix and match sub-components as needed
5. **Responsive** — Images scale properly, text remains readable

## Grid Layouts

Cards work well in responsive grids:

```tsx
{/* 2-column stat cards */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <Card>...</Card>
  <Card>...</Card>
</div>

{/* 3-column content cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <Card>...</Card>
  <Card>...</Card>
  <Card>...</Card>
</div>
```

## When to Use Each Component

- **CardStat** — Large numbers, metrics, impact stats
- **CardImage + CardContent** — Projects, programs, initiatives
- **CardImage + CardBadges + CardContent** — Articles, stories, news
- **CardImage (square) + CardContent** — Reports, research, data visualizations
- **CardFooter** — Add CTAs or actions when needed
