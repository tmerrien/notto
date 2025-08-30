import React from 'react'
import { render, screen } from '@testing-library/react'
import { Link } from '../../../app/components/core/link'

// Mock the branding module
jest.mock('../../../app/components/branding', () => ({
  brandConfig: {
    components: {
      link: {
        base: 'link-base',
        variants: {
          default: 'link-default',
          accent: 'link-accent',
          muted: 'link-muted'
        }
      }
    }
  }
}))

describe('Link Component', () => {
  it('should render a link with children', () => {
    render(<Link href="/test">Test Link</Link>)
    
    const link = screen.getByRole('link', { name: /test link/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/test')
  })

  it('should render with default variant when no variant specified', () => {
    render(<Link href="/test">Default Link</Link>)
    
    const link = screen.getByRole('link', { name: /default link/i })
    expect(link).toHaveClass('link-base', 'link-default')
  })

  it('should render with accent variant', () => {
    render(<Link href="/test" variant="accent">Accent Link</Link>)
    
    const link = screen.getByRole('link', { name: /accent link/i })
    expect(link).toHaveClass('link-base', 'link-accent')
  })

  it('should render with muted variant', () => {
    render(<Link href="/test" variant="muted">Muted Link</Link>)
    
    const link = screen.getByRole('link', { name: /muted link/i })
    expect(link).toHaveClass('link-base', 'link-muted')
  })

  it('should apply custom className', () => {
    render(<Link href="/test" className="custom-class">Custom Link</Link>)
    
    const link = screen.getByRole('link', { name: /custom link/i })
    expect(link).toHaveClass('custom-class')
  })

  it('should set target attribute', () => {
    render(<Link href="/test" target="_blank">External Link</Link>)
    
    const link = screen.getByRole('link', { name: /external link/i })
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('should set rel attribute', () => {
    render(<Link href="/test" rel="noopener noreferrer">Secure Link</Link>)
    
    const link = screen.getByRole('link', { name: /secure link/i })
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should combine all classes correctly', () => {
    render(
      <Link 
        href="/test" 
        variant="accent" 
        className="custom-class"
      >
        Combined Link
      </Link>
    )
    
    const link = screen.getByRole('link', { name: /combined link/i })
    expect(link).toHaveClass('link-base', 'link-accent', 'custom-class')
  })

  it('should handle empty className', () => {
    render(<Link href="/test" className="">Empty Class Link</Link>)
    
    const link = screen.getByRole('link', { name: /empty class link/i })
    expect(link).toHaveClass('link-base', 'link-default')
  })

  it('should render with complex children', () => {
    render(
      <Link href="/test">
        <span>Complex</span> <strong>Content</strong>
      </Link>
    )
    
    const link = screen.getByRole('link')
    expect(link).toContainHTML('<span>Complex</span> <strong>Content</strong>')
  })
})
