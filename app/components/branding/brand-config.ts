// Main brand configuration - imports from organized token and component files
import { typographyTokens } from './tokens/typography'
import { colorTokens } from './tokens/colors'
import { spacingTokens } from './tokens/spacing'
import { uiComponentStyles } from './components/ui'
import { coreComponentStyles } from './components/core'

// Central branding configuration for Notto components
// Organized into manageable, focused modules
export const brandConfig = {
  // Design tokens
  typography: typographyTokens,
  colors: colorTokens,
  ...spacingTokens,

  // Component configurations  
  components: {
    // UI components (buttons, cards, forms, etc.)
    ...uiComponentStyles,
    
    // Core components (logo, link, section)
    ...coreComponentStyles
  }
}

// Helper function to get brand classes
export function getBrandClasses(component: keyof typeof brandConfig.components, variant?: string, size?: string) {
  const config = brandConfig.components[component]
  if (!config) return ''

  let classes = ''
  
  // Add base classes if available
  if ('base' in config && typeof config.base === 'string') {
    classes = config.base
  }
  
  // Add variant classes
  if (variant && 'variants' in config && config.variants) {
    const variantConfig = config.variants[variant as keyof typeof config.variants]
    if (variantConfig) {
      if (typeof variantConfig === 'string') {
        classes += ` ${variantConfig}`
      } else if (typeof variantConfig === 'object' && 'base' in variantConfig) {
        const objVariant = variantConfig as { base: string; dark?: string }
        classes += ` ${objVariant.base}`
        if ('dark' in objVariant && objVariant.dark) {
          classes += ` ${objVariant.dark}`
        }
      }
    }
  }

  // Add size classes
  if (size && 'sizes' in config && config.sizes) {
    const sizeConfig = config.sizes[size as keyof typeof config.sizes]
    if (sizeConfig) {
      classes += ` ${sizeConfig}`
    }
  }

  return classes.trim()
}

export type BrandConfig = typeof brandConfig