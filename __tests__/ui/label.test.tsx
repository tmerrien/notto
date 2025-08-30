import React from 'react'
import { render, screen } from '@testing-library/react'
import { Label } from '../../../app/components/ui/label'

// Mock the shadcn/ui label component
jest.mock('../../../components/ui/label', () => ({
  Label: ({ children, className, ...props }: { children: React.ReactNode; className?: string; [key: string]: unknown }) => (
    <label className={className} {...props}>
      {children}
    </label>
  )
}))

describe('Label Component', () => {
  it('should render children', () => {
    render(<Label>Test Label</Label>)
    
    const label = screen.getByText('Test Label')
    expect(label).toBeInTheDocument()
    expect(label.tagName).toBe('LABEL')
  })

  it('should render with default variant', () => {
    render(<Label>Default Label</Label>)
    
    const label = screen.getByText('Default Label')
    expect(label).toHaveClass('text-stone-900', 'dark:text-stone-100')
  })

  it('should render with system variant', () => {
    render(<Label variant="system">System Label</Label>)
    
    const label = screen.getByText('System Label')
    expect(label).toHaveClass('text-amber-800', 'dark:text-amber-300')
  })

  it('should apply base classes', () => {
    render(<Label>Base Label</Label>)
    
    const label = screen.getByText('Base Label')
    expect(label).toHaveClass('font-mono', 'uppercase', 'tracking-widest', 'text-xs', 'font-medium')
  })

  it('should apply custom className', () => {
    render(<Label className="custom-label">Custom Label</Label>)
    
    const label = screen.getByText('Custom Label')
    expect(label).toHaveClass('custom-label')
  })

  it('should combine all classes correctly', () => {
    render(<Label variant="system" className="custom-class">Combined Label</Label>)
    
    const label = screen.getByText('Combined Label')
    expect(label).toHaveClass('font-mono', 'uppercase', 'tracking-widest', 'text-xs', 'font-medium')
    expect(label).toHaveClass('text-amber-800', 'dark:text-amber-300')
    expect(label).toHaveClass('custom-class')
  })

  it('should handle htmlFor prop', () => {
    render(<Label htmlFor="input-id">For Input</Label>)
    
    const label = screen.getByText('For Input')
    expect(label).toHaveAttribute('for', 'input-id')
  })

  it('should handle id prop', () => {
    render(<Label id="label-id">With ID</Label>)
    
    const label = screen.getByText('With ID')
    expect(label).toHaveAttribute('id', 'label-id')
  })

  it('should handle all label attributes', () => {
    render(
      <Label
        htmlFor="test-input"
        id="test-label"
        className="test-class"
        data-testid="test-label"
        aria-label="Accessible label"
      >
        Full Props Label
      </Label>
    )
    
    const label = screen.getByText('Full Props Label')
    expect(label).toHaveAttribute('for', 'test-input')
    expect(label).toHaveAttribute('id', 'test-label')
    expect(label).toHaveClass('test-class')
    expect(label).toHaveAttribute('data-testid', 'test-label')
    expect(label).toHaveAttribute('aria-label', 'Accessible label')
  })

  it('should handle complex children', () => {
    render(
      <Label>
        <span>Complex</span> <strong>Content</strong>
      </Label>
    )
    
    const label = screen.getByText('Complex')
    expect(label.closest('label')).toContainHTML('<span>Complex</span> <strong>Content</strong>')
  })

  it('should handle empty children', () => {
    render(<Label></Label>)
    
    const label = screen.getByRole('generic')
    expect(label).toBeInTheDocument()
    expect(label).toHaveTextContent('')
  })

  it('should handle text content', () => {
    render(<Label>Simple text content</Label>)
    
    const label = screen.getByText('Simple text content')
    expect(label).toBeInTheDocument()
  })

  it('should handle numbers as children', () => {
    render(<Label>{42}</Label>)
    
    const label = screen.getByText('42')
    expect(label).toBeInTheDocument()
  })

  it('should handle boolean children', () => {
    render(<Label>{true}</Label>)
    
    const label = screen.getByText('true')
    expect(label).toBeInTheDocument()
  })

  it('should handle null children', () => {
    render(<Label>{null}</Label>)
    
    const label = screen.getByRole('generic')
    expect(label).toBeInTheDocument()
    expect(label).toHaveTextContent('')
  })

  it('should handle undefined children', () => {
    render(<Label>{undefined}</Label>)
    
    const label = screen.getByRole('generic')
    expect(label).toBeInTheDocument()
    expect(label).toHaveTextContent('')
  })

  it('should handle empty className', () => {
    render(<Label className="">Empty Class Label</Label>)
    
    const label = screen.getByText('Empty Class Label')
    expect(label).toHaveClass('font-mono', 'uppercase', 'tracking-widest', 'text-xs', 'font-medium')
  })

  it('should handle multiple custom classes', () => {
    render(<Label className="class1 class2 class3">Multiple Classes</Label>)
    
    const label = screen.getByText('Multiple Classes')
    expect(label).toHaveClass('class1', 'class2', 'class3')
  })

  it('should handle special characters in className', () => {
    render(<Label className="special-class_123">Special Class</Label>)
    
    const label = screen.getByText('Special Class')
    expect(label).toHaveClass('special-class_123')
  })

  it('should handle aria attributes', () => {
    render(
      <Label
        aria-label="Accessible label"
        aria-describedby="label-help"
        aria-required="true"
      >
        Aria Label
      </Label>
    )
    
    const label = screen.getByText('Aria Label')
    expect(label).toHaveAttribute('aria-label', 'Accessible label')
    expect(label).toHaveAttribute('aria-describedby', 'label-help')
    expect(label).toHaveAttribute('aria-required', 'true')
  })

  it('should handle data attributes', () => {
    render(<Label data-testid="test-label" data-cy="label">Data Label</Label>)
    
    const label = screen.getByText('Data Label')
    expect(label).toHaveAttribute('data-testid', 'test-label')
    expect(label).toHaveAttribute('data-cy', 'label')
  })

  it('should handle form attributes', () => {
    render(<Label form="test-form">Form Label</Label>)
    
    const label = screen.getByText('Form Label')
    expect(label).toHaveAttribute('form', 'test-form')
  })

  it('should handle all variant types', () => {
    const { rerender } = render(<Label variant="default">Default</Label>)
    expect(screen.getByText('Default')).toHaveClass('text-stone-900', 'dark:text-stone-100')
    
    rerender(<Label variant="system">System</Label>)
    expect(screen.getByText('System')).toHaveClass('text-amber-800', 'dark:text-amber-300')
  })

  it('should handle style prop', () => {
    render(<Label style={{ color: 'red' }}>Styled Label</Label>)
    
    const label = screen.getByText('Styled Label')
    expect(label).toHaveStyle({ color: 'red' })
  })

  it('should handle title prop', () => {
    render(<Label title="Tooltip text">Titled Label</Label>)
    
    const label = screen.getByText('Titled Label')
    expect(label).toHaveAttribute('title', 'Tooltip text')
  })
})
