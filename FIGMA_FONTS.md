# Basel Classic Fonts for Figma Make

## 🔗 Public Font URLs

### Direct Font File URLs (jsDelivr CDN)

```
https://cdn.jsdelivr.net/gh/christopher-milne-design/design-system@main/public/fonts/basel/Basel-Classic-Bold.woff2

https://cdn.jsdelivr.net/gh/christopher-milne-design/design-system@main/public/fonts/basel/Basel-Classic-Bold-Italic.woff2
```

### CSS File URL

```
https://cdn.jsdelivr.net/gh/christopher-milne-design/design-system@main/public/fonts/basel/basel-figma.css
```

## 📝 Using in Figma Make

### Option 1: Load via CSS URL (Recommended)

In your Figma Make project, add this CSS import:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/christopher-milne-design/design-system@main/public/fonts/basel/basel-figma.css">
```

Or in your CSS:

```css
@import url('https://cdn.jsdelivr.net/gh/christopher-milne-design/design-system@main/public/fonts/basel/basel-figma.css');
```

### Option 2: Inline @font-face

Copy and paste this into your Figma Make project's CSS:

```css
@font-face {
  font-family: 'Basel Classic';
  src: url('https://cdn.jsdelivr.net/gh/christopher-milne-design/design-system@main/public/fonts/basel/Basel-Classic-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Basel Classic';
  src: url('https://cdn.jsdelivr.net/gh/christopher-milne-design/design-system@main/public/fonts/basel/Basel-Classic-Bold-Italic.woff2') format('woff2');
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}
```

### Using the Font

Once loaded, use the font in your CSS:

```css
h1, h2, h3, h4, h5, h6 {
  font-family: 'Basel Classic', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 700;
}

/* For italic */
.italic-heading {
  font-family: 'Basel Classic', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 700;
  font-style: italic;
}
```

## ⚡ CDN Details

- **Provider**: jsDelivr (free, global CDN)
- **Source**: GitHub repository `christopher-milne-design/design-system`
- **Branch**: `main`
- **Cache**: Fonts are cached globally for fast loading
- **Format**: WOFF2 (modern, compressed)

## 🔄 Updating Fonts

If you update the font files:

1. Commit and push changes to GitHub
2. jsDelivr will automatically update (may take a few minutes to propagate)
3. To force immediate update, add a version query:
   ```
   https://cdn.jsdelivr.net/gh/christopher-milne-design/design-system@latest/public/fonts/basel/Basel-Classic-Bold.woff2
   ```

## ✅ Font Specifications

- **Font Family**: Basel Classic
- **Available Weights**: 
  - Bold (700) - Normal
  - Bold (700) - Italic
- **Format**: WOFF2
- **File Sizes**: 
  - Basel-Classic-Bold.woff2: 114KB
  - Basel-Classic-Bold-Italic.woff2: 121KB

## 🧪 Test the Fonts

Test that the fonts are loading correctly:

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/christopher-milne-design/design-system@main/public/fonts/basel/basel-figma.css">
  <style>
    body { 
      font-family: Arial, sans-serif; 
      padding: 40px;
    }
    .test-heading {
      font-family: 'Basel Classic', sans-serif;
      font-weight: 700;
      font-size: 48px;
    }
    .test-italic {
      font-family: 'Basel Classic', sans-serif;
      font-weight: 700;
      font-style: italic;
      font-size: 48px;
    }
  </style>
</head>
<body>
  <h1 class="test-heading">Basel Classic Bold</h1>
  <h2 class="test-italic">Basel Classic Bold Italic</h2>
  <p>The quick brown fox jumps over the lazy dog</p>
</body>
</html>
```

## 📞 Support

If fonts don't load:
- Check browser console for CORS errors
- Verify URLs are accessible (click them directly)
- Clear browser cache
- Wait a few minutes for jsDelivr CDN propagation
