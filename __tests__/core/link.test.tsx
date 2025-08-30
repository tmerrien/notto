import React from 'react'
import { render, screen } from '@testing-library/react'
import { Link } from '../../app/components/core/link'

// Mock the branding module
jest.mock('../../app/components/branding', () => ({
  brandConfig: {
    components: {
      link: {
        base: 'base-link-class',
        variants: {
          default: 'default-variant',
          accent: 'accent-variant',
          muted: 'muted-variant'
        }
      }
    }
  }
}))

describe('Link Component', () => {
  it('should render children', () => {
    render(<Link href="/test">Test Link</Link>)
    
    const link = screen.getByRole('link', { name: /test link/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveTextContent('Test Link')
  })

  it('should set href attribute', () => {
    render(<Link href="/test-url">Test Link</Link>)
    
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/test-url')
  })

  it('should apply default variant by default', () => {
    render(<Link href="/test">Test Link</Link>)
    
    const link = screen.getByRole('link')
    expect(link).toHaveClass('base-link-class', 'default-variant')
  })

  it('should apply accent variant when specified', () => {
    render(<Link href="/test" variant="accent">Test Link</Link>)
    
    const link = screen.getByRole('link')
    expect(link).toHaveClass('base-link-class', 'accent-variant')
  })

  it('should apply muted variant when specified', () => {
    render(<Link href="/test" variant="muted">Test Link</Link>)
    
    const link = screen.getByRole('link')
    expect(link).toHaveClass('base-link-class', 'muted-variant')
  })

  it('should apply custom className', () => {
    render(<Link href="/test" className="custom-class">Test Link</Link>)
    
    const link = screen.getByRole('link')
    expect(link).toHaveClass('custom-class')
  })

  it('should set target attribute', () => {
    render(<Link href="/test" target="_blank">Test Link</Link>)
    
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('should set rel attribute', () => {
    render(<Link href="/test" rel="noopener noreferrer">Test Link</Link>)
    
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should handle external links with target and rel', () => {
    render(
      <Link 
        href="https://example.com" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        External Link
      </Link>
    )
    
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://example.com')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should combine all classes correctly', () => {
    render(
      <Link 
        href="/test" 
        variant="accent" 
        className="custom additional-class"
      >
        Combined Link
      </Link>
    )
    
    const link = screen.getByRole('link')
    expect(link).toHaveClass('base-link-class', 'accent-variant', 'custom', 'additional-class')
  })

  it('should handle complex children', () => {
    render(
      <Link href="/test">
        <span>Complex</span> <strong>Link Content</strong>
      </Link>
    )
    
    const link = screen.getByRole('link')
    expect(link).toContainHTML('<span>Complex</span> <strong>Link Content</strong>')
  })
})