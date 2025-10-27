# Design Token Sync with Token Studio

This project is set up to automatically sync design tokens from your Token Studio repository to Tailwind CSS classes using Style Dictionary.

## Overview

The token sync system consists of:
- **Token Studio Integration**: Fetches design tokens from your `cca-design-tokens` repository
- **Style Dictionary**: Transforms tokens into Tailwind-compatible formats
- **GitHub Actions**: Automatically syncs tokens on a schedule
- **Tailwind Integration**: Uses synced tokens in your CSS classes

## Setup

### 1. Token Studio Setup

1. Set up your design system in Figma using Token Studio
2. Configure Token Studio to sync to your `cca-design-tokens` repository
3. Ensure your `tokens.json` file follows the Token Studio format:
   ```json
   {
     "color.primary.500": {
       "value": "#3b82f6",
       "type": "color",
       "description": "Primary brand color"
     },
     "spacing.md": {
       "value": "1rem",
       "type": "dimension",
       "description": "Medium spacing"
     }
   }
   ```

### 2. GitHub Secrets

Add these secrets to your GitHub repository:

- `GITHUB_TOKEN`: Your GitHub personal access token
  - Get this from GitHub → Settings → Developer settings → Personal access tokens
  - Needs `repo` scope to access your token repository
- `TOKEN_STUDIO_REPO`: Your token studio repository name (default: `christopher-milne-design/cca-design-tokens`)

### 3. Local Development

1. Set up environment variables:
   ```bash
   export GITHUB_TOKEN="your-github-token"
   export TOKEN_STUDIO_REPO="christopher-milne-design/cca-design-tokens"  # optional, defaults to christopher-milne-design/cca-design-tokens
   ```

2. Sync tokens manually:
   ```bash
   npm run sync:token-studio
   ```

3. Generate Tailwind classes:
   ```bash
   npm run tokens
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

## Usage

### Generated Files

The system generates several files:

- `lib/tokens.js`: JavaScript object with all tokens
- `lib/tokens.css`: CSS custom properties and utility classes
- `tokens/*.json`: Raw token files from Figma

### Using Tokens in Code

#### 1. Tailwind Classes

After syncing, you can use tokens as Tailwind classes:

```jsx
// Colors
<div className="bg-primary-500 text-neutral-100">
  Primary background with light text
</div>

// Spacing
<div className="p-md m-lg">
  Medium padding and large margin
</div>

// Typography
<h1 className="text-2xl font-bold leading-tight">
  Large bold heading
</h1>

// Border radius
<div className="rounded-lg">
  Rounded corners
</div>
```

#### 2. CSS Custom Properties

You can also use the generated CSS custom properties:

```css
.my-component {
  background-color: var(--color-primary-500);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-lg);
}
```

#### 3. JavaScript/TypeScript

Import tokens directly in your components:

```jsx
import { tokens } from '@/lib/tokens';

const MyComponent = () => {
  return (
    <div style={{ 
      backgroundColor: tokens.colors.primary[500],
      padding: tokens.spacing.md 
    }}>
      Content
    </div>
  );
};
```

## Automation

### GitHub Actions

The system includes a GitHub Action that:
- Runs daily at 9 AM UTC
- Syncs tokens from Figma
- Generates Tailwind classes
- Commits changes automatically
- Can be triggered manually

### Manual Sync

To sync tokens manually:

```bash
# Sync from Figma
npm run sync:tokens

# Generate Tailwind classes
npm run tokens

# Watch for changes during development
npm run tokens:watch
```

## Token Structure

### Colors
```json
{
  "color": {
    "primary": {
      "50": { "value": "#f0f9ff", "type": "color" },
      "500": { "value": "#3b82f6", "type": "color" },
      "900": { "value": "#1e3a8a", "type": "color" }
    }
  }
}
```

### Spacing
```json
{
  "spacing": {
    "xs": { "value": "0.25rem", "type": "dimension" },
    "md": { "value": "1rem", "type": "dimension" },
    "xl": { "value": "2rem", "type": "dimension" }
  }
}
```

### Typography
```json
{
  "fontSize": {
    "sm": { "value": "0.875rem", "type": "dimension" },
    "lg": { "value": "1.125rem", "type": "dimension" }
  },
  "fontWeight": {
    "medium": { "value": "500", "type": "fontWeight" },
    "bold": { "value": "700", "type": "fontWeight" }
  }
}
```

## Troubleshooting

### Common Issues

1. **"No variables found in Figma file"**
   - Ensure your Figma file has variables set up
   - Check that the file key is correct
   - Verify your Figma token has access to the file

2. **"Missing required environment variables"**
   - Set up your environment variables locally
   - Add secrets to your GitHub repository

3. **Tokens not updating**
   - Check the GitHub Actions logs
   - Verify your Figma variables are properly named
   - Ensure the sync script has the correct permissions

### Debug Mode

Run the sync script with debug information:

```bash
DEBUG=1 npm run sync:tokens
```

## Customization

### Adding New Token Types

To add support for new token types:

1. Update the `extractTokensFromVariables` function in `scripts/sync-tokens.js`
2. Add the new token type to the Style Dictionary formatters
3. Update the Tailwind configuration

### Custom Formatters

You can create custom Style Dictionary formatters for specific output formats:

```javascript
StyleDictionary.registerFormat({
  name: 'custom/format',
  format: ({ dictionary }) => {
    // Your custom formatting logic
  }
});
```

## Best Practices

1. **Consistent Naming**: Use consistent naming conventions in Figma
2. **Token Organization**: Group related tokens in Figma collections
3. **Version Control**: Commit token changes regularly
4. **Testing**: Test token changes in a development environment first
5. **Documentation**: Document your design system and token usage

## Support

For issues or questions:
1. Check the GitHub Actions logs
2. Review the Figma API documentation
3. Check the Style Dictionary documentation
4. Open an issue in this repository
