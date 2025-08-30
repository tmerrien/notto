import React from 'react'
import { render, screen } from '@testing-library/react'
import { Logo } from '../../app/components/core/logo'

// Mock Next.js Link
jest.mock('next/link', () => {
  return function MockLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }
})

// Mock the branding module
jest.mock('../../app/components/branding', () => ({
  brandConfig: {
    components: {
      logo: {
        base: 'logo-base',
        icon: {
          background: 'icon-bg',
          shape: 'icon-shape',
          inner: 'icon-inner'
        },
        text: {
          base: 'text-base'
        },
        sizes: {
          sm: {
            container: 'container-sm',
            icon: 'icon-sm',
            iconInner: 'icon-inner-sm',
            text: 'text-sm'
          },
          md: {
            container: 'container-md',
            icon: 'icon-md',
            iconInner: 'icon-inner-md',
            text: 'text-md'
          },
          lg: {
            container: 'container-lg',
            icon: 'icon-lg',
            iconInner: 'icon-inner-lg',
            text: 'text-lg'
          }
        }
      }
    }
  }
}))

describe('Logo Component', () => {
  it('should render default NOTTO text', () => {
    render(<Logo />)
    
    expect(screen.getByText('NOTTO')).toBeInTheDocument()
  })

  it('should render custom children text', () => {
    render(<Logo>Custom Logo</Logo>)
    
    expect(screen.getByText('Custom Logo')).toBeInTheDocument()
    expect(screen.queryByText('NOTTO')).not.toBeInTheDocument()
  })

  it('should render with medium size by default', () => {
    render(<Logo />)
    
    const container = screen.getByText('NOTTO').parentElement
    expect(container).toHaveClass('logo-base', 'container-md')
  })

  it('should render with small size', () => {
    render(<Logo size="sm" />)
    
    const container = screen.getByText('NOTTO').parentElement
    expect(container).toHaveClass('logo-base', 'container-sm')
  })

  it('should render with large size', () => {
    render(<Logo size="lg" />)
    
    const container = screen.getByText('NOTTO').parentElement
    expect(container).toHaveClass('logo-base', 'container-lg')
  })

  it('should apply custom className', () => {
    render(<Logo className="custom-logo" />)
    
    const container = screen.getByText('NOTTO').parentElement
    expect(container).toHaveClass('custom-logo')
  })

  it('should render as div when no href provided', () => {
    const { container } = render(<Logo />)
    
    const logoElement = container.querySelector('div')
    expect(logoElement).toBeInTheDocument()
    expect(logoElement).toHaveClass('logo-base')
  })

  it('should render as link when href provided', () => {
    render(<Logo href="/" />)
    
    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
    expect(link).toHaveClass('logo-base')
  })

  it('should render icon with proper classes', () => {
    const { container } = render(<Logo />)
    
    const iconOuter = container.querySelector('.icon-bg.icon-shape')
    expect(iconOuter).toBeInTheDocument()
    expect(iconOuter).toHaveClass('icon-md', 'flex', 'items-center', 'justify-center')
    
    const iconInner = container.querySelector('.icon-inner')
    expect(iconInner).toBeInTheDocument()
    expect(iconInner).toHaveClass('icon-inner-md')
  })

  it('should render text with proper classes', () => {
    const { container } = render(<Logo />)
    
    const text = screen.getByText('NOTTO')
    expect(text).toHaveClass('text-base', 'text-md')
  })

  it('should handle size-specific icon classes', () => {
    const { container } = render(<Logo size="sm" />)
    
    const iconOuter = container.querySelector('.icon-bg.icon-shape')
    expect(iconOuter).toHaveClass('icon-sm')
    
    const iconInner = container.querySelector('.icon-inner')
    expect(iconInner).toHaveClass('icon-inner-sm')
  })

  it('should handle link with custom className', () => {
    render(<Logo href="/" className="custom-link-logo" />)
    
    const link = screen.getByRole('link')
    expect(link).toHaveClass('logo-base', 'container-md', 'custom-link-logo')
  })

  it('should handle complex children', () => {
    render(
      <Logo>
        <span>Custom</span> <strong>Brand</strong>
      </Logo>
    )
    
    expect(screen.getByText('Custom')).toBeInTheDocument()
    expect(screen.getByText('Brand')).toBeInTheDocument()
  })

  it('should combine all size classes correctly for large size', () => {
    const { container } = render(<Logo size="lg" className="extra-class" />)
    
    const logoContainer = screen.getByText('NOTTO').parentElement
    expect(logoContainer).toHaveClass('logo-base', 'container-lg', 'extra-class')
    
    const text = screen.getByText('NOTTO')
    expect(text).toHaveClass('text-base', 'text-lg')
    
    const iconOuter = container.querySelector('.icon-bg.icon-shape')
    expect(iconOuter).toHaveClass('icon-lg')
  })
})