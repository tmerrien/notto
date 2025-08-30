import React from 'react'
import { render, screen } from '@testing-library/react'
import { Logo } from '../../../app/components/core/logo'

// Mock Next.js Link component
jest.mock('next/link', () => {
  return function MockedLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }
})

// Mock the branding module
jest.mock('../../../app/components/branding', () => ({
  brandConfig: {
    components: {
      logo: {
        base: 'logo-base',
        icon: {
          background: 'logo-icon-bg',
          shape: 'logo-icon-shape',
          inner: 'logo-icon-inner'
        },
        text: {
          base: 'logo-text-base'
        },
        sizes: {
          sm: {
            container: 'logo-sm-container',
            icon: 'logo-sm-icon',
            iconInner: 'logo-sm-icon-inner',
            text: 'logo-sm-text'
          },
          md: {
            container: 'logo-md-container',
            icon: 'logo-md-icon',
            iconInner: 'logo-md-icon-inner',
            text: 'logo-md-text'
          },
          lg: {
            container: 'logo-lg-container',
            icon: 'logo-lg-icon',
            iconInner: 'logo-lg-icon-inner',
            text: 'logo-lg-text'
          }
        }
      }
    }
  }
}))

describe('Logo Component', () => {
  it('should render logo with default size', () => {
    render(<Logo />)
    
    const logo = screen.getByText('NOTTO')
    expect(logo).toBeInTheDocument()
  })

  it('should render logo with small size', () => {
    render(<Logo size="sm" />)
    
    const logo = screen.getByText('NOTTO')
    expect(logo).toBeInTheDocument()
    expect(logo.closest('div')).toHaveClass('logo-sm-container')
  })

  it('should render logo with medium size', () => {
    render(<Logo size="md" />)
    
    const logo = screen.getByText('NOTTO')
    expect(logo).toBeInTheDocument()
    expect(logo.closest('div')).toHaveClass('logo-md-container')
  })

  it('should render logo with large size', () => {
    render(<Logo size="lg" />)
    
    const logo = screen.getByText('NOTTO')
    expect(logo).toBeInTheDocument()
    expect(logo.closest('div')).toHaveClass('logo-lg-container')
  })

  it('should render logo with custom children', () => {
    render(<Logo>Custom Brand</Logo>)
    
    const logo = screen.getByText('Custom Brand')
    expect(logo).toBeInTheDocument()
  })

  it('should render logo with custom className', () => {
    render(<Logo className="custom-logo" />)
    
    const logo = screen.getByText('NOTTO')
    expect(logo.closest('div')).toHaveClass('custom-logo')
  })

  it('should render as link when href is provided', () => {
    render(<Logo href="/home" />)
    
    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/home')
  })

  it('should render as div when no href is provided', () => {
    render(<Logo />)
    
    const logo = screen.getByText('NOTTO')
    expect(logo.closest('div')).toBeInTheDocument()
    expect(logo.closest('a')).not.toBeInTheDocument()
  })

  it('should apply correct classes for icon elements', () => {
    render(<Logo size="md" />)
    
    const logo = screen.getByText('NOTTO')
    const container = logo.closest('div')
    
    // Check that icon classes are applied
    expect(container).toHaveClass('logo-md-icon', 'logo-icon-bg', 'logo-icon-shape')
  })

  it('should apply correct classes for text elements', () => {
    render(<Logo size="md" />)
    
    const logo = screen.getByText('NOTTO')
    expect(logo).toHaveClass('logo-text-base', 'logo-md-text')
  })

  it('should combine all classes correctly when href is provided', () => {
    render(<Logo href="/home" size="lg" className="custom-class" />)
    
    const link = screen.getByRole('link')
    expect(link).toHaveClass('logo-base', 'logo-lg-container', 'custom-class')
  })

  it('should combine all classes correctly when no href is provided', () => {
    render(<Logo size="lg" className="custom-class" />)
    
    const container = screen.getByText('NOTTO').closest('div')
    expect(container).toHaveClass('logo-base', 'logo-lg-container', 'custom-class')
  })

  it('should render icon inner element', () => {
    render(<Logo size="md" />)
    
    const logo = screen.getByText('NOTTO')
    const container = logo.closest('div')
    const iconInner = container?.querySelector('.logo-md-icon-inner')
    
    expect(iconInner).toBeInTheDocument()
    expect(iconInner).toHaveClass('logo-icon-inner')
  })
})
