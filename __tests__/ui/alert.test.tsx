import React from 'react'
import { render, screen } from '@testing-library/react'
import { Alert, AlertDescription, AlertTitle } from '../../components/ui/alert'

// Mock the cva function for testing
jest.mock('class-variance-authority', () => ({
  cva: jest.fn(() => jest.fn(() => 'mocked-class'))
}))

describe('Alert Component', () => {
  it('should render children', () => {
    render(<Alert>Test Alert</Alert>)
    
    const alert = screen.getByRole('alert')
    expect(alert).toBeInTheDocument()
    expect(alert).toHaveTextContent('Test Alert')
  })

  it('should render with default variant', () => {
    render(<Alert>Default Alert</Alert>)
    
    const alert = screen.getByRole('alert')
    expect(alert).toBeInTheDocument()
  })

  it('should render with destructive variant', () => {
    render(<Alert variant="destructive">Destructive Alert</Alert>)
    
    const alert = screen.getByRole('alert')
    expect(alert).toBeInTheDocument()
    expect(alert).toHaveTextContent('Destructive Alert')
  })

  it('should apply custom className', () => {
    render(<Alert className="custom-alert">Custom Alert</Alert>)
    
    const alert = screen.getByRole('alert')
    expect(alert).toHaveClass('custom-alert')
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
})

describe('AlertDescription Component', () => {
  it('should render children', () => {
    render(<AlertDescription>Test Description</AlertDescription>)
    
    const description = screen.getByText('Test Description')
    expect(description).toBeInTheDocument()
  })

  it('should handle complex children', () => {
    render(
      <AlertDescription>
        <span>Complex</span> <strong>Description</strong>
      </AlertDescription>
    )
    
    const description = screen.getByText('Complex')
    expect(description.closest('div')).toContainHTML('<span>Complex</span> <strong>Description</strong>')
  })
})

describe('AlertTitle Component', () => {
  it('should render children', () => {
    render(<AlertTitle>Test Title</AlertTitle>)
    
    const title = screen.getByText('Test Title')
    expect(title).toBeInTheDocument()
  })

  it('should handle complex children', () => {
    render(
      <AlertTitle>
        <span>Complex</span> <strong>Title</strong>
      </AlertTitle>
    )
    
    const title = screen.getByText('Complex')
    expect(title.closest('div')).toContainHTML('<span>Complex</span> <strong>Title</strong>')
  })
})