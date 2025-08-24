import { render, screen } from '@testing-library/react'
import { Button } from '../components/ui/button'

// Mock the class-variance-authority
jest.mock('class-variance-authority', () => ({
  cva: jest.fn(() => jest.fn(() => 'mocked-class')),
  type: {
    VariantProps: {} as any,
  },
}))

describe('Components', () => {
  describe('Button', () => {
    it('should render a button with children', () => {
      render(<Button>Click me</Button>)
      
      const button = screen.getByRole('button', { name: /click me/i })
      expect(button).toBeInTheDocument()
    })

    it('should render a button with custom className', () => {
      render(<Button className="custom-class">Click me</Button>)
      
      const button = screen.getByRole('button', { name: /click me/i })
      expect(button).toBeInTheDocument()
    })

    it('should render a disabled button', () => {
      render(<Button disabled>Disabled</Button>)
      
      const button = screen.getByRole('button', { name: /disabled/i })
      expect(button).toBeDisabled()
    })

    it('should handle click events', () => {
      const handleClick = jest.fn()
      render(<Button onClick={handleClick}>Clickable</Button>)
      
      const button = screen.getByRole('button', { name: /clickable/i })
      button.click()
      
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('should support different variants via props', () => {
      render(<Button variant="outline">Outline Button</Button>)
      
      const button = screen.getByRole('button', { name: /outline button/i })
      expect(button).toBeInTheDocument()
    })
  })
})
