import { brandConfig, getBrandClasses } from './brand-config'

// Utility functions for accessing brand configuration

/**
 * Get typography classes
 */
export const brand = {
  // Typography utilities
  font: {
    primary: brandConfig.typography.fontFamily.primary,
    secondary: brandConfig.typography.fontFamily.secondary,
    mono: brandConfig.typography.fontFamily.primary
  },

  text: {
    transform: {
      upper: brandConfig.typography.textTransform.primary,
      none: brandConfig.typography.textTransform.secondary
    },
    tracking: brandConfig.typography.letterSpacing,
    weight: brandConfig.typography.fontWeight
  },

  // Color utilities
  colors: brandConfig.colors,

  // Get component-specific styling
  component: (component: keyof typeof brandConfig.components, variant?: string, size?: string) => {
    return getBrandClasses(component, variant, size)
  },

  // Quick access to common patterns
  patterns: {
    // Standard button base without variants
    buttonBase: brandConfig.components.button.base,
    
    // Standard heading base without variants
    headingBase: brandConfig.components.heading.base,
    
    // Standard card styling
    card: brandConfig.components.card.base,
    
    // Monospace text with uppercase
    monoUpper: `${brandConfig.typography.fontFamily.primary} ${brandConfig.typography.textTransform.primary} ${brandConfig.typography.letterSpacing.widest}`,
    
    // Accent gradient
    accentGradient: `bg-gradient-to-br ${brandConfig.colors.accent.gradient}`,
    
    // Muted text
    mutedText: `text-${brandConfig.colors.text.muted}`
  }
}

/**
 * Build component class string with brand configuration
 */
export function buildComponentClasses(
  component: keyof typeof brandConfig.components,
  options: {
    variant?: string
    size?: string
    additional?: string
  } = {}
) {
  const { variant, size, additional = '' } = options
  const brandClasses = getBrandClasses(component, variant, size)
  return `${brandClasses} ${additional}`.trim()
}

/**
 * Get color class for a specific color token
 */
export function getColor(path: string): string {
  const parts = path.split('.')
  let current: unknown = brandConfig.colors
  
  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = (current as Record<string, unknown>)[part]
    } else {
      return ''
    }
  }
  
  return typeof current === 'string' ? current : ''
}

/**
 * Get spacing class
 */
export function getSpacing(size: keyof typeof brandConfig.spacing): string {
  return brandConfig.spacing[size]
}

/**
 * Get radius class
 */
export function getRadius(size: keyof typeof brandConfig.radius): string {
  return brandConfig.radius[size]
}

// Export the main brand config for advanced usage
export { brandConfig }