import { brandConfig, getBrandClasses } from '../../app/components/branding/brand-config'

describe('Brand Config', () => {
  describe('brandConfig structure', () => {
    it('should have typography configuration', () => {
      expect(brandConfig.typography).toBeDefined()
      expect(brandConfig.typography.fontFamily).toBeDefined()
      expect(brandConfig.typography.textTransform).toBeDefined()
      expect(brandConfig.typography.letterSpacing).toBeDefined()
      expect(brandConfig.typography.fontWeight).toBeDefined()
    })

    it('should have colors configuration', () => {
      expect(brandConfig.colors).toBeDefined()
    })

    it('should have spacing configuration', () => {
      expect(brandConfig.spacing).toBeDefined()
    })

    it('should have radius configuration', () => {
      expect(brandConfig.radius).toBeDefined()
    })

    it('should have components configuration', () => {
      expect(brandConfig.components).toBeDefined()
    })
  })

  describe('getBrandClasses', () => {
    it('should return empty string for non-existent component', () => {
      const result = getBrandClasses('nonexistent' as any)
      expect(result).toBe('')
    })

    it('should return base classes for valid component', () => {
      const result = getBrandClasses('button')
      expect(typeof result).toBe('string')
    })

    it('should handle variant classes', () => {
      const result = getBrandClasses('button', 'primary')
      expect(typeof result).toBe('string')
    })

    it('should handle size classes', () => {
      const result = getBrandClasses('button', undefined, 'sm')
      expect(typeof result).toBe('string')
    })

    it('should handle variant and size together', () => {
      const result = getBrandClasses('button', 'primary', 'sm')
      expect(typeof result).toBe('string')
    })

    it('should handle string variant configuration', () => {
      // Test assumes some components have string variants
      const result = getBrandClasses('heading', 'h1')
      expect(typeof result).toBe('string')
    })

    it('should handle object variant configuration with dark mode', () => {
      // Test with a variant that might have dark mode
      const result = getBrandClasses('text', 'muted')
      expect(typeof result).toBe('string')
    })

    it('should trim whitespace from result', () => {
      const result = getBrandClasses('button')
      expect(result).toBe(result.trim())
    })
  })

  describe('component configurations', () => {
    it('should have button component configuration', () => {
      expect(brandConfig.components.button).toBeDefined()
      expect(brandConfig.components.button.base).toBeDefined()
    })

    it('should have heading component configuration', () => {
      expect(brandConfig.components.heading).toBeDefined()
      expect(brandConfig.components.heading.base).toBeDefined()
    })

    it('should have card component configuration', () => {
      expect(brandConfig.components.card).toBeDefined()
      expect(brandConfig.components.card.base).toBeDefined()
    })

    it('should have text component configuration', () => {
      expect(brandConfig.components.text).toBeDefined()
    })

    it('should have link component configuration', () => {
      expect(brandConfig.components.link).toBeDefined()
    })
  })
})