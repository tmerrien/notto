# Centralized Branding System

**Unified brand management** - Configure your entire design system from a single source of truth.

## Overview

Notto's centralized branding system separates **visual styling from component logic**, allowing you to customize the entire component library by modifying a single configuration file. No more hunting through individual components to update colors, typography, or spacing.

## Architecture

### Before: Distributed Styling ❌
```
Button.tsx    → hardcoded colors, fonts, sizes
Heading.tsx   → hardcoded colors, fonts, sizes  
Card.tsx      → hardcoded colors, fonts, sizes
...and so on
```

### After: Centralized Branding ✅
```
brand-config.ts → ALL brand decisions in one file
Button.tsx      → imports from brand-config
Heading.tsx     → imports from brand-config
Card.tsx        → imports from brand-config
```

## Core Files

### `/app/components/branding/brand-config.ts`
The **single source of truth** for all brand decisions:
- Typography (fonts, sizes, transforms, tracking)
- Color palette (primary, accent, system colors)
- Spacing system (gaps, margins, padding)
- Component-specific styling rules

### `/app/components/branding/brand-utils.ts`
**Utility functions** for accessing and applying brand configuration:
- `buildComponentClasses()` - Build complete class strings
- `getColor()` - Access color tokens
- `getSpacing()` - Access spacing tokens
- `brand` object - Quick access to common patterns

## Usage Examples

### 1. Component Implementation
```tsx
// OLD WAY - Hardcoded styles
export function Button({ children, style = 'dark' }) {
  const classes = style === 'dark' 
    ? 'bg-stone-900 text-white font-mono uppercase'
    : 'bg-stone-100 text-black font-mono uppercase'
    
  return <button className={classes}>{children}</button>
}

// NEW WAY - Centralized branding
import { buildComponentClasses } from '@/app/components/branding/brand-utils'

export function Button({ children, style = 'dark' }) {
  const classes = buildComponentClasses('button', { 
    variant: style 
  })
  
  return <button className={classes}>{children}</button>
}
```

### 2. Accessing Brand Tokens
```tsx
import { brand, getColor, getSpacing } from '@/app/components/branding/brand-utils'

// Typography
const monoFont = brand.font.mono
const upperTransform = brand.text.transform.upper

// Colors  
const accentColor = getColor('accent.primary')
const mutedText = getColor('text.muted')

// Spacing
const mediumGap = getSpacing('md')

// Component patterns
const cardStyling = brand.patterns.card
const gradientBg = brand.patterns.accentGradient
```

### 3. Custom Component Creation
```tsx
import { brandConfig } from '@/app/components/branding/brand-utils'

export function CustomAlert({ children, type = 'info' }) {
  // Access centralized alert styling
  const baseClasses = brandConfig.components.alert.base
  const variantClasses = brandConfig.components.alert.variants[type]
  
  return (
    <div className={`${baseClasses} ${variantClasses}`}>
      {children}
    </div>
  )
}
```

## Brand Configuration Structure

### Typography System
```typescript
typography: {
  fontFamily: {
    primary: 'var(--font-geist-mono)',    // Monospace
    secondary: 'var(--font-geist-sans)'   // Sans fallback
  },
  textTransform: {
    primary: 'uppercase',                 // Default transform
    secondary: 'none'                     // No transform
  },
  letterSpacing: {
    tight: 'tracking-tight',
    normal: 'tracking-normal',
    wide: 'tracking-wide',
    wider: 'tracking-wider', 
    widest: 'tracking-widest'
  }
}
```

### Color Palette
```typescript
colors: {
  primary: {
    50: 'stone-50',
    // ... full stone scale
    950: 'stone-950'
  },
  accent: {
    primary: 'amber-600',
    secondary: 'red-500', 
    gradient: 'from-amber-600 to-red-500'
  },
  text: {
    primary: 'stone-900 dark:stone-100',
    secondary: 'stone-700 dark:stone-300',
    muted: 'stone-500 dark:stone-400'
  }
}
```

### Component Configuration
```typescript
components: {
  button: {
    base: 'inline-flex items-center justify-center font-mono uppercase tracking-widest transition-colors',
    sizes: {
      sm: 'text-xs h-9 px-4',
      lg: 'text-base h-12 px-8'
    },
    variants: {
      light: {
        base: 'bg-stone-100 hover:bg-stone-200 text-stone-900',
        dark: 'dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700'
      }
    }
  }
}
```

## Customization Guide

### Step 1: Identify Your Brand
Define your brand characteristics:
- **Colors**: Primary palette, accent colors, semantic colors
- **Typography**: Font choices, text transforms, spacing
- **Personality**: Formal vs casual, bold vs subtle

### Step 2: Update Brand Config
Edit `/app/components/branding/brand-config.ts`:

```typescript
// Example: Change to a blue-based brand
colors: {
  primary: {
    // Change from stone to blue
    50: 'blue-50',
    // ... blue scale
    950: 'blue-950'
  },
  accent: {
    // Change from amber/red to blue/purple
    primary: 'blue-600',
    secondary: 'purple-500',
    gradient: 'from-blue-600 to-purple-500'
  }
}

// Example: Change typography personality  
typography: {
  textTransform: {
    // Change from uppercase to normal case
    primary: 'none',
    secondary: 'uppercase'
  }
}
```

### Step 3: Component Styles Update Automatically
All components using the centralized system will **immediately reflect** your brand changes:
- Buttons get new colors and typography
- Headings use new accent colors
- Cards use new primary colors
- All spacing and typography updates consistently

## Benefits

### 🎯 **Single Source of Truth**
- All brand decisions in one file
- No hunting through multiple components
- Consistent application across the entire system

### 🔄 **Easy Customization**
- Change colors once, apply everywhere
- Update typography consistently
- Modify spacing system globally

### 🚀 **Scalable Architecture**
- New components automatically inherit branding
- Easy to maintain as the system grows
- Clear separation of concerns

### 🛡️ **Type Safety**
- TypeScript interfaces prevent invalid configurations
- Autocomplete for available options
- Compile-time validation of brand tokens

### ⚡ **Developer Experience**
- Clear, documented API
- Helper functions for common patterns
- No need to memorize class combinations

## Migration Guide

### For Existing Components
1. Import branding utilities
2. Replace hardcoded classes with brand config
3. Use `buildComponentClasses()` for complex styling
4. Test that visual appearance remains consistent

### For New Components
1. Define component styling in `brand-config.ts`
2. Use branding utilities in component implementation
3. Follow established patterns for consistency

## Advanced Usage

### Custom Brand Tokens
Add your own tokens to the configuration:

```typescript
// In brand-config.ts
components: {
  myCustomComponent: {
    base: 'custom-base-classes',
    variants: {
      primary: 'custom-primary-classes',
      secondary: 'custom-secondary-classes'
    }
  }
}
```

### Dynamic Theming
Create multiple brand configurations for theme switching:

```typescript
// themes/dark-theme.ts
export const darkBrandConfig = {
  ...brandConfig,
  colors: {
    // Dark theme overrides
  }
}

// themes/light-theme.ts  
export const lightBrandConfig = {
  ...brandConfig,
  colors: {
    // Light theme overrides
  }
}
```

### Custom Utilities
Extend the branding utilities for your specific needs:

```typescript
// utils/custom-brand-utils.ts
import { brandConfig } from '@/app/components/branding/brand-config'

export function getCustomPattern(pattern: string) {
  // Your custom logic here
  return brandConfig.patterns[pattern]
}
```

## Best Practices

1. **Plan Before Implementation**: Define your complete brand system before coding
2. **Use Semantic Names**: Name tokens by purpose, not appearance (`primary` not `blue`)
3. **Maintain Consistency**: Stick to the established token system
4. **Document Decisions**: Comment complex brand rules in the config
5. **Test Thoroughly**: Verify all components after brand changes
6. **Progressive Migration**: Update components gradually to centralized system

## Conclusion

The centralized branding system transforms Notto from a component library with hardcoded styles into a **flexible design system** that adapts to your brand. By separating styling concerns from component logic, you gain the power to completely customize the visual appearance while maintaining the robust functionality and accessibility of the underlying components.