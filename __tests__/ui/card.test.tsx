import React from 'react'
import { render, screen } from '@testing-library/react'
import { Card } from '../../../app/components/ui/card'

// Mock the shadcn/ui card component
jest.mock('../../../components/ui/card', () => ({
  Card: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div role="article" className={className}>
      {children}
    </div>
  )
}))

// Mock the branding module
jest.mock('../../../app/components/branding', () => ({
  brandConfig: {
    components: {
      card: {
        base: 'card-base-class'
      }
    }
  }
}))

describe('Card Component', () => {
  it('should render children', () => {
    render(<Card>Test Card Content</Card>)
    
    expect(screen.getByRole('article')).toBeInTheDocument()
    expect(screen.getByRole('article')).toHaveTextContent('Test Card Content')
  })

  it('should apply base card classes', () => {
    render(<Card>Base Card</Card>)
    
    const card = screen.getByRole('article')
    expect(card).toHaveClass('card-base-class')
  })

  it('should apply custom className', () => {
    render(<Card className="custom-card">Custom Card</Card>)
    
    const card = screen.getByRole('article')
    expect(card).toHaveClass('custom-card')
  })

  it('should combine base and custom classes', () => {
    render(<Card className="custom-class">Combined Card</Card>)
    
    const card = screen.getByRole('article')
    expect(card).toHaveClass('card-base-class', 'custom-class')
  })

  it('should handle empty className', () => {
    render(<Card className="">Empty Class Card</Card>)
    
    const card = screen.getByRole('article')
    expect(card).toHaveClass('card-base-class')
  })

  it('should handle complex children', () => {
    render(
      <Card>
        <div>Header</div>
        <span>Content</span>
        <footer>Footer</footer>
      </Card>
    )
    
    const card = screen.getByRole('article')
    expect(card).toContainHTML('<div>Header</div>')
    expect(card).toContainHTML('<span>Content</span>')
    expect(card).toContainHTML('<footer>Footer</footer>')
  })

  it('should handle nested components', () => {
    render(
      <Card>
        <Card>
          <div>Nested Card</div>
        </Card>
      </Card>
    )
    
    const outerCard = screen.getByRole('article')
    expect(outerCard).toContainHTML('<div>Nested Card</div>')
  })

  it('should handle empty children', () => {
    render(<Card></Card>)
    
    const card = screen.getByRole('article')
    expect(card).toBeInTheDocument()
    expect(card).toHaveTextContent('')
  })

  it('should handle text content', () => {
    render(<Card>Simple text content</Card>)
    
    const card = screen.getByRole('article')
    expect(card).toHaveTextContent('Simple text content')
  })

  it('should handle numbers as children', () => {
    render(<Card>{42}</Card>)
    
    const card = screen.getByRole('article')
    expect(card).toHaveTextContent('42')
  })

  it('should handle boolean children', () => {
    render(<Card>{true}</Card>)
    
    const card = screen.getByRole('article')
    expect(card).toHaveTextContent('true')
  })

  it('should handle null children', () => {
    render(<Card>{null}</Card>)
    
    const card = screen.getByRole('article')
    expect(card).toBeInTheDocument()
    expect(card).toHaveTextContent('')
  })

  it('should handle undefined children', () => {
    render(<Card>{undefined}</Card>)
    
    const card = screen.getByRole('article')
    expect(card).toBeInTheDocument()
    expect(card).toHaveTextContent('')
  })

  it('should handle multiple custom classes', () => {
    render(<Card className="class1 class2 class3">Multiple Classes</Card>)
    
    const card = screen.getByRole('article')
    expect(card).toHaveClass('class1', 'class2', 'class3')
  })

  it('should handle special characters in className', () => {
    render(<Card className="special-class_123">Special Class</Card>)
    
    const card = screen.getByRole('article')
    expect(card).toHaveClass('special-class_123')
  })
})
