import { brand, buildComponentClasses, getColor, getSpacing, getRadius, brandConfig } from '../../app/components/branding/brand-utils'

// Mock the brand-config module
jest.mock('../../app/components/branding/brand-config', () => ({
  brandConfig: {
    typography: {
      fontFamily: { primary: 'font-primary', secondary: 'font-secondary' },
      textTransform: { primary: 'uppercase', secondary: 'none' },
      letterSpacing: { widest: 'tracking-widest' },
      fontWeight: { bold: 'font-bold' }
    },
    colors: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      accent: { gradient: 'from-blue-500 to-purple-600' },
      text: { muted: 'gray-500' }
    },
    spacing: { sm: 'p-2', md: 'p-4', lg: 'p-6' },
    radius: { sm: 'rounded', md: 'rounded-md', lg: 'rounded-lg' },
    components: {
      button: { base: 'btn-base' },
      heading: { base: 'heading-base' },
      card: { base: 'card-base' }
    }
  },
  getBrandClasses: jest.fn((component, variant, size) => {
    let result = 'btn-base'
    if (variant) result += ` btn-${variant}`
    if (size) result += ` btn-${size}`
    return result
  })
}))

describe('Brand Utils', () => {
  describe('brand object', () => {
    describe('font', () => {
      it('should have correct font family properties', () => {
        expect(brand.font.primary).toBe('font-primary')
        expect(brand.font.secondary).toBe('font-secondary')
        expect(brand.font.mono).toBe('font-primary')
      })
    })

    describe('text', () => {
      it('should have correct text transform properties', () => {
        expect(brand.text.transform.upper).toBe('uppercase')
        expect(brand.text.transform.none).toBe('none')
      })

      it('should have correct text tracking', () => {
        expect(brand.text.tracking).toBeDefined()
      })

      it('should have correct font weight', () => {
        expect(brand.text.weight).toBeDefined()
      })
    })

    describe('colors', () => {
      it('should have access to brand colors', () => {
        expect(brand.colors).toBeDefined()
        expect(brand.colors.primary).toBe('text-primary')
        expect(brand.colors.secondary).toBe('text-secondary')
      })
    })

    describe('component', () => {
      it('should call getBrandClasses with correct parameters', () => {
        const result = brand.component('button', 'primary', 'md')
        expect(result).toBeDefined()
      })
    })

    describe('patterns', () => {
      it('should have buttonBase pattern', () => {
        expect(brand.patterns.buttonBase).toBe('btn-base')
      })

      it('should have headingBase pattern', () => {
        expect(brand.patterns.headingBase).toBe('heading-base')
      })

      it('should have card pattern', () => {
        expect(brand.patterns.card).toBe('card-base')
      })

      it('should have monoUpper pattern', () => {
        expect(brand.patterns.monoUpper).toContain('font-primary')
        expect(brand.patterns.monoUpper).toContain('uppercase')
        expect(brand.patterns.monoUpper).toContain('tracking-widest')
      })

      it('should have accentGradient pattern', () => {
        expect(brand.patterns.accentGradient).toContain('bg-gradient-to-br')
        expect(brand.patterns.accentGradient).toContain('from-blue-500 to-purple-600')
      })

      it('should have mutedText pattern', () => {
        expect(brand.patterns.mutedText).toContain('text-gray-500')
      })
    })
  })

  describe('buildComponentClasses', () => {
    it('should build classes with only component', () => {
      const result = buildComponentClasses('button')
      expect(result).toBeDefined()
    })

    it('should build classes with component and variant', () => {
      const result = buildComponentClasses('button', { variant: 'primary' })
      expect(result).toBeDefined()
    })

    it('should build classes with component and size', () => {
      const result = buildComponentClasses('button', { size: 'md' })
      expect(result).toBeDefined()
    })

    it('should build classes with component, variant, and size', () => {
      const result = buildComponentClasses('button', { 
        variant: 'primary', 
        size: 'lg' 
      })
      expect(result).toBeDefined()
    })

    it('should build classes with additional classes', () => {
      const result = buildComponentClasses('button', { 
        variant: 'primary', 
        size: 'md',
        additional: 'custom-class'
      })
      expect(result).toContain('custom-class')
    })

    it('should handle empty additional classes', () => {
      const result = buildComponentClasses('button', { 
        variant: 'primary', 
        size: 'md',
        additional: ''
      })
      expect(result).toBeDefined()
    })
  })

  describe('getColor', () => {
    it('should return color for valid path', () => {
      const result = getColor('primary')
      expect(result).toBe('text-primary')
    })

    it('should return color for nested path', () => {
      const result = getColor('accent.gradient')
      expect(result).toBe('from-blue-500 to-purple-600')
    })

    it('should return empty string for invalid path', () => {
      const result = getColor('invalid.path')
      expect(result).toBe('')
    })

    it('should return empty string for non-existent path', () => {
      const result = getColor('nonexistent')
      expect(result).toBe('')
    })

    it('should handle empty path', () => {
      const result = getColor('')
      expect(result).toBe('')
    })
  })

  describe('getSpacing', () => {
    it('should return spacing for valid size', () => {
      const result = getSpacing('md')
      expect(result).toBe('p-4')
    })

    it('should return spacing for small size', () => {
      const result = getSpacing('sm')
      expect(result).toBe('p-2')
    })

    it('should return spacing for large size', () => {
      const result = getSpacing('lg')
      expect(result).toBe('p-6')
    })
  })

  describe('getRadius', () => {
    it('should return radius for valid size', () => {
      const result = getRadius('md')
      expect(result).toBe('rounded-md')
    })

    it('should return radius for small size', () => {
      const result = getRadius('sm')
      expect(result).toBe('rounded')
    })

    it('should return radius for large size', () => {
      const result = getRadius('lg')
      expect(result).toBe('rounded-lg')
    })
  })

  describe('brandConfig export', () => {
    it('should export brandConfig', () => {
      expect(brandConfig).toBeDefined()
      expect(brandConfig.components).toBeDefined()
    })
  })
})
