# Component Showcase - Contentful Integration Guide

## Overview

Your new `/showcase` page displays UI components with code examples side-by-side. To make this content-driven (so you can add/edit examples in Contentful), follow this guide.

## Current State

✅ **Live now:** `/showcase` with hardcoded examples
- Buttons (variants, sizes, custom colors)
- Cards (basic, colored with tokens)
- Badges (token colors)
- Alerts (info, success, warning, error)
- Forms (inputs, labels, textarea)

## Future State (Contentful-Driven)

Make examples editable in Contentful so you can:
- Add new component examples without code changes
- Edit descriptions and code snippets
- Organize by category
- Enable/disable examples
- Preview before publishing

---

## Contentful Content Model

### 1. Component Example Content Type
**Content Type ID:** `componentExample`

| Field Name | Field ID | Type | Validation |
|------------|----------|------|------------|
| Title | `title` | Short text | Required |
| Description | `description` | Long text | Optional |
| Category | `category` | Short text | Required (buttons, cards, badges, alerts, forms, etc.) |
| Code | `code` | Long text | Required (the code snippet to display) |
| Preview Type | `previewType` | Short text | Required (variant, size, color, etc.) |
| Is Published | `isPublished` | Boolean | Default: true |
| Order | `order` | Integer | For sorting within category |
| Layout | `layout` | Short text | Options: "side-by-side", "stacked" |

---

## Implementation Steps

### Phase 1: Create Content Model in Contentful

1. Go to Contentful → Content model
2. Create `componentExample` content type
3. Add all fields from table above
4. Save and publish

### Phase 2: Populate with Existing Examples

Create entries for current examples:

#### Buttons Category
```
1. Title: "Button Variants"
   Description: "Different button styles for various contexts"
   Category: "buttons"
   Code: [copy from showcase page]
   Preview Type: "variants"
   Order: 1
   
2. Title: "Button Sizes"
   Description: "Buttons in different sizes"
   Category: "buttons"
   Code: [copy from showcase page]
   Preview Type: "sizes"
   Order: 2
   
3. Title: "Buttons with Custom Token Colors"
   Description: "Using design tokens for custom styling"
   Category: "buttons"
   Code: [copy from showcase page]
   Preview Type: "colors"
   Order: 3
```

#### Cards Category
```
1. Title: "Basic Card"
   Description: "Simple card with header, content, and footer"
   Category: "cards"
   Code: [copy from showcase page]
   Preview Type: "basic"
   Order: 1
   
2. Title: "Colored Card with Tokens"
   Description: "Card using design tokens for branding"
   Category: "cards"
   Code: [copy from showcase page]
   Preview Type: "colored"
   Order: 2
```

Continue for badges, alerts, and forms...

### Phase 3: Update Code to Fetch from Contentful

**Step 1:** Add TypeScript interface in `lib/contentful.ts`

```typescript
export interface ComponentExampleContent {
  fields: {
    title: string;
    description?: string;
    category: string;
    code: string;
    previewType: string;
    isPublished: boolean;
    order: number;
    layout?: 'side-by-side' | 'stacked';
  };
}

export async function getComponentExamples(category?: string) {
  try {
    const query: any = {
      content_type: 'componentExample',
      'fields.isPublished': true,
      order: 'fields.order',
    };
    
    if (category) {
      query['fields.category'] = category;
    }
    
    const entries = await client.getEntries<ComponentExampleContent>(query);
    return entries.items;
  } catch (error) {
    console.error('Error fetching component examples:', error);
    return [];
  }
}

export async function getComponentsByCategory() {
  try {
    const entries = await client.getEntries<ComponentExampleContent>({
      content_type: 'componentExample',
      'fields.isPublished': true,
      order: 'fields.order',
    });
    
    // Group by category
    const grouped = entries.items.reduce((acc, item) => {
      const category = item.fields.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    }, {} as Record<string, typeof entries.items>);
    
    return grouped;
  } catch (error) {
    console.error('Error fetching component examples:', error);
    return {};
  }
}
```

**Step 2:** Update `app/showcase/page.tsx`

```typescript
import { getComponentsByCategory } from '@/lib/contentful';

export default async function ShowcasePage() {
  const examples = await getComponentsByCategory();
  
  // Map Contentful data to UI
  // Keep hardcoded examples as fallback
  // ...
}
```

---

## Benefits

### For Content Editors
- ✅ Add new examples without developer
- ✅ Edit code snippets easily
- ✅ Reorder examples
- ✅ Draft/publish workflow

### For Developers
- ✅ Separate content from code
- ✅ Type-safe with TypeScript
- ✅ Fallback to hardcoded examples
- ✅ Easy to extend

---

## Advanced Features (Future)

### 1. Component Metadata
Add more fields:
- `tags` (Array of tags for filtering)
- `difficulty` (beginner, intermediate, advanced)
- `dependencies` (ShadCN components used)
- `tokenCategories` (which token types are used)

### 2. Live Code Editor
- Integrate CodeSandbox or StackBlitz
- Allow "Try it" button
- Interactive examples

### 3. Search & Filter
- Search by title/description
- Filter by category, tags, difficulty
- Filter by tokens used

### 4. Usage Analytics
- Track which examples are viewed most
- Add "helpful" voting
- Show popularity

---

## Next Steps

1. **Decide:** Do you want to make this Contentful-driven now?
2. **If yes:** I'll create the content model and update the code
3. **If later:** Continue building more hardcoded examples first

The showcase page works great as-is. Contentful integration can be added later when you're ready to scale content management.

---

## Questions?

Let me know if you want to:
- Add Contentful integration now
- Add more component examples first
- Add syntax highlighting for better code display
- Create a navigation sidebar for the showcase
