import React from 'react'
import { render, screen } from '@testing-library/react'
import { Alert, AlertDescription, AlertTitle } from '../../../app/components/ui/alert'

// Mock the shadcn/ui alert components
jest.mock('../../../components/ui/alert', () => ({
  Alert: ({ children, variant, className }: { children: React.ReactNode; variant?: string; className?: string }) => (
    <div role="alert" data-variant={variant} className={className}>
      {children}
    </div>
  ),
  AlertDescription: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="alert-description">{children}</div>
  ),
  AlertTitle: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="alert-title">{children}</div>
  )
}))

describe('Alert Component', () => {
  it('should render children', () => {
    render(<Alert>Test Alert</Alert>)
    
    expect(screen.getByRole('alert')).toBeInTheDocument()
    expect(screen.getByRole('alert')).toHaveTextContent('Test Alert')
  })

  it('should render with default variant', () => {
    render(<Alert>Default Alert</Alert>)
    
    const alert = screen.getByRole('alert')
    expect(alert).toHaveAttribute('data-variant', 'default')
  })

  it('should render with destructive variant', () => {
    render(<Alert variant="destructive">Destructive Alert</Alert>)
    
    const alert = screen.getByRole('alert')
    expect(alert).toHaveAttribute('data-variant', 'destructive')
  })

  it('should render with system style by default', () => {
    render(<Alert>System Alert</Alert>)
    
    const alert = screen.getByRole('alert')
    expect(alert).toHaveClass('border-amber-600/30', 'bg-amber-50/50', 'text-amber-800')
  })

  it('should render with warning style', () => {
    render(<Alert style="warning">Warning Alert</Alert>)
    
    const alert = screen.getByRole('alert')
    expect(alert).toHaveClass('border-red-500/30', 'bg-red-50/50', 'text-red-800')
  })

  it('should render with success style', () => {
    render(<Alert style="success">Success Alert</Alert>)
    
    const alert = screen.getByRole('alert')
    expect(alert).toHaveClass('border-green-600/30', 'bg-green-50/50', 'text-green-800')
  })

  it('should apply base classes', () => {
    render(<Alert>Base Alert</Alert>)
    
    const alert = screen.getByRole('alert')
    expect(alert).toHaveClass('font-mono', 'uppercase', 'tracking-widest', 'text-xs', 'border-2')
  })

  it('should apply custom className', () => {
    render(<Alert className="custom-alert">Custom Alert</Alert>)
    
    const alert = screen.getByRole('alert')
    expect(alert).toHaveClass('custom-alert')
  })

  it('should combine all classes correctly', () => {
    render(
      <Alert 
        variant="destructive" 
        style="warning" 
        className="custom-class"
      >
        Combined Alert
      </Alert>
    )
    
    const alert = screen.getByRole('alert')
    expect(alert).toHaveAttribute('data-variant', 'destructive')
    expect(alert).toHaveClass('border-red-500/30', 'bg-red-50/50', 'text-red-800')
    expect(alert).toHaveClass('custom-class')
  })

  it('should handle complex children', () => {
    render(
      <Alert>
        <span>Complex</span> <strong>Content</strong>
      </Alert>
    )
    
    const alert = screen.getByRole('alert')
    expect(alert).toContainHTML('<span>Complex</span> <strong>Content</strong>')
  })

  it('should handle empty children', () => {
    render(<Alert></Alert>)
    
    const alert = screen.getByRole('alert')
    expect(alert).toBeInTheDocument()
    expect(alert).toHaveTextContent('')
  })

  it('should handle all style variants', () => {
    const { rerender } = render(<Alert style="system">System</Alert>)
    expect(screen.getByRole('alert')).toHaveClass('border-amber-600/30')
    
    rerender(<Alert style="warning">Warning</Alert>)
    expect(screen.getByRole('alert')).toHaveClass('border-red-500/30')
    
    rerender(<Alert style="success">Success</Alert>)
    expect(screen.getByRole('alert')).toHaveClass('border-green-600/30')
  })

  it('should handle all variant types', () => {
    const { rerender } = render(<Alert variant="default">Default</Alert>)
    expect(screen.getByRole('alert')).toHaveAttribute('data-variant', 'default')
    
    rerender(<Alert variant="destructive">Destructive</Alert>)
    expect(screen.getByRole('alert')).toHaveAttribute('data-variant', 'destructive')
  })
})

describe('AlertDescription Component', () => {
  it('should render children', () => {
    render(<AlertDescription>Test Description</AlertDescription>)
    
    expect(screen.getByTestId('alert-description')).toBeInTheDocument()
    expect(screen.getByTestId('alert-description')).toHaveTextContent('Test Description')
  })

  it('should handle complex children', () => {
    render(
      <AlertDescription>
        <span>Complex</span> <strong>Description</strong>
      </AlertDescription>
    )
    
    const description = screen.getByTestId('alert-description')
    expect(description).toContainHTML('<span>Complex</span> <strong>Description</strong>')
  })
})

describe('AlertTitle Component', () => {
  it('should render children', () => {
    render(<AlertTitle>Test Title</AlertTitle>)
    
    expect(screen.getByTestId('alert-title')).toBeInTheDocument()
    expect(screen.getByTestId('alert-title')).toHaveTextContent('Test Title')
  })

  it('should handle complex children', () => {
    render(
      <AlertTitle>
        <span>Complex</span> <strong>Title</strong>
      </AlertTitle>
    )
    
    const title = screen.getByTestId('alert-title')
    expect(title).toContainHTML('<span>Complex</span> <strong>Title</strong>')
  })
})
