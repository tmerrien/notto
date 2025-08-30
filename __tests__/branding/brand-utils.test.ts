import { 
  brand, 
  buildComponentClasses, 
  getColor, 
  getSpacing, 
  getRadius 
} from '../../app/components/branding/brand-utils'
import { brandConfig } from '../../app/components/branding/brand-config'

describe('Brand Utils', () => {
  describe('brand object', () => {
    it('should provide font utilities', () => {
      expect(brand.font.primary).toBeDefined()
      expect(brand.font.secondary).toBeDefined()
      expect(brand.font.mono).toBeDefined()
    })

    it('should provide text utilities', () => {
      expect(brand.text.transform.upper).toBeDefined()
      expect(brand.text.transform.none).toBeDefined()
      expect(brand.text.tracking).toBeDefined()
      expect(brand.text.weight).toBeDefined()
    })

    it('should provide color utilities', () => {
      expect(brand.colors).toBe(brandConfig.colors)
    })

    it('should provide component function', () => {
      expect(typeof brand.component).toBe('function')
    })

    it('should provide patterns object', () => {
      expect(brand.patterns.buttonBase).toBeDefined()
      expect(brand.patterns.headingBase).toBeDefined()
      expect(brand.patterns.card).toBeDefined()
      expect(brand.patterns.monoUpper).toBeDefined()
      expect(brand.patterns.accentGradient).toBeDefined()
      expect(brand.patterns.mutedText).toBeDefined()
    })
  })

  describe('buildComponentClasses', () => {
    it('should build classes with just component name', () => {
      const result = buildComponentClasses('button')
      expect(typeof result).toBe('string')
    })

    it('should build classes with variant', () => {
      const result = buildComponentClasses('button', { variant: 'primary' })
      expect(typeof result).toBe('string')
    })

    it('should build classes with size', () => {
      const result = buildComponentClasses('button', { size: 'sm' })
      expect(typeof result).toBe('string')
    })

    it('should build classes with additional classes', () => {
      const result = buildComponentClasses('button', { additional: 'custom-class' })
      expect(result).toContain('custom-class')
    })

    it('should build classes with all options', () => {
      const result = buildComponentClasses('button', {
        variant: 'primary',
        size: 'sm',
        additional: 'custom-class'
      })
      expect(typeof result).toBe('string')
      expect(result).toContain('custom-class')
    })
  })

  describe('getColor', () => {
    it('should return empty string for invalid path', () => {
      const result = getColor('invalid.path')
      expect(result).toBe('')
    })

    it('should return empty string for non-existent color', () => {
      const result = getColor('nonexistent')
      expect(result).toBe('')
    })

    it('should handle empty path', () => {
      const result = getColor('')
      expect(result).toBe('')
    })

    it('should handle nested paths correctly', () => {
      // Test with a path that should exist based on structure
      const result = getColor('primary.base')
      expect(typeof result).toBe('string')
    })
  })

  describe('getSpacing', () => {
    it('should return spacing value for valid key', () => {
      // Test with a spacing key that should exist
      const result = getSpacing('xs' as keyof typeof brandConfig.spacing)
      expect(typeof result).toBe('string')
    })

    it('should handle various spacing sizes', () => {
      const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as Array<keyof typeof brandConfig.spacing>
      sizes.forEach(size => {
        const result = getSpacing(size)
        expect(typeof result).toBe('string')
      })
    })
  })

  describe('getRadius', () => {
    it('should return radius value for valid key', () => {
      // Test with a radius key that should exist
      const result = getRadius('sm' as keyof typeof brandConfig.radius)
      expect(typeof result).toBe('string')
    })

    it('should handle various radius sizes', () => {
      const sizes = ['none', 'sm', 'md', 'lg', 'full'] as Array<keyof typeof brandConfig.radius>
      sizes.forEach(size => {
        const result = getRadius(size)
        expect(typeof result).toBe('string')
      })
    })
  })
})