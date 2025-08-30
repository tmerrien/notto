import React from 'react'
import { render, screen } from '@testing-library/react'
import { Input } from '../../../app/components/ui/input'

// Mock the shadcn/ui input component
jest.mock('../../../components/ui/input', () => ({
  Input: React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
    ({ className, ...props }, ref) => (
      <input
        ref={ref}
        className={className}
        {...props}
      />
    )
  )
}))

describe('Input Component', () => {
  it('should render an input element', () => {
    render(<Input />)
    
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
  })

  it('should render with default variant', () => {
    render(<Input />)
    
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('bg-stone-50', 'dark:bg-stone-900', 'border-stone-200', 'dark:border-stone-800')
  })

  it('should render with system variant', () => {
    render(<Input variant="system" />)
    
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('bg-amber-50/50', 'dark:bg-amber-950/20', 'border-amber-600/30')
  })

  it('should apply base classes', () => {
    render(<Input />)
    
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('font-mono', 'uppercase', 'tracking-widest', 'text-xs')
  })

  it('should apply placeholder styles', () => {
    render(<Input />)
    
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('placeholder:text-stone-400', 'dark:placeholder:text-stone-600')
  })

  it('should apply custom className', () => {
    render(<Input className="custom-input" />)
    
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('custom-input')
  })

  it('should combine all classes correctly', () => {
    render(<Input variant="system" className="custom-class" />)
    
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('font-mono', 'uppercase', 'tracking-widest', 'text-xs')
    expect(input).toHaveClass('bg-amber-50/50', 'dark:bg-amber-950/20', 'border-amber-600/30')
    expect(input).toHaveClass('custom-class')
  })

  it('should forward ref', () => {
    const ref = React.createRef<HTMLInputElement>()
    render(<Input ref={ref} />)
    
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })

  it('should handle all input props', () => {
    render(
      <Input
        type="email"
        placeholder="Enter email"
        value="test@example.com"
        onChange={() => {}}
        disabled
        required
        id="email-input"
        name="email"
      />
    )
    
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('type', 'email')
    expect(input).toHaveAttribute('placeholder', 'Enter email')
    expect(input).toHaveAttribute('value', 'test@example.com')
    expect(input).toBeDisabled()
    expect(input).toBeRequired()
    expect(input).toHaveAttribute('id', 'email-input')
    expect(input).toHaveAttribute('name', 'email')
  })

  it('should handle type prop', () => {
    render(<Input type="password" />)
    
    const input = screen.getByDisplayValue('')
    expect(input).toHaveAttribute('type', 'password')
  })

  it('should handle placeholder prop', () => {
    render(<Input placeholder="Enter text" />)
    
    const input = screen.getByPlaceholderText('Enter text')
    expect(input).toBeInTheDocument()
  })

  it('should handle value prop', () => {
    render(<Input value="test value" onChange={() => {}} />)
    
    const input = screen.getByDisplayValue('test value')
    expect(input).toBeInTheDocument()
  })

  it('should handle disabled prop', () => {
    render(<Input disabled />)
    
    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()
  })

  it('should handle required prop', () => {
    render(<Input required />)
    
    const input = screen.getByRole('textbox')
    expect(input).toBeRequired()
  })

  it('should handle id prop', () => {
    render(<Input id="test-id" />)
    
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('id', 'test-id')
  })

  it('should handle name prop', () => {
    render(<Input name="test-name" />)
    
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('name', 'test-name')
  })

  it('should handle onChange event', () => {
    const handleChange = jest.fn()
    render(<Input onChange={handleChange} />)
    
    const input = screen.getByRole('textbox')
    input.focus()
    input.value = 'new value'
    input.dispatchEvent(new Event('input', { bubbles: true }))
    
    expect(handleChange).toHaveBeenCalled()
  })

  it('should handle onFocus event', () => {
    const handleFocus = jest.fn()
    render(<Input onFocus={handleFocus} />)
    
    const input = screen.getByRole('textbox')
    input.focus()
    
    expect(handleFocus).toHaveBeenCalled()
  })

  it('should handle onBlur event', () => {
    const handleBlur = jest.fn()
    render(<Input onBlur={handleBlur} />)
    
    const input = screen.getByRole('textbox')
    input.focus()
    input.blur()
    
    expect(handleBlur).toHaveBeenCalled()
  })

  it('should handle empty className', () => {
    render(<Input className="" />)
    
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('font-mono', 'uppercase', 'tracking-widest', 'text-xs')
  })

  it('should handle multiple custom classes', () => {
    render(<Input className="class1 class2 class3" />)
    
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('class1', 'class2', 'class3')
  })

  it('should have correct display name', () => {
    expect(Input.displayName).toBe('Input')
  })

  it('should handle aria attributes', () => {
    render(
      <Input
        aria-label="Email input"
        aria-describedby="email-help"
        aria-invalid="true"
      />
    )
    
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('aria-label', 'Email input')
    expect(input).toHaveAttribute('aria-describedby', 'email-help')
    expect(input).toHaveAttribute('aria-invalid', 'true')
  })

  it('should handle data attributes', () => {
    render(<Input data-testid="email-input" data-cy="email" />)
    
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('data-testid', 'email-input')
    expect(input).toHaveAttribute('data-cy', 'email')
  })
})
