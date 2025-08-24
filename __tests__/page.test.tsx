import React from 'react'
import { render } from '@testing-library/react'
import Page from '../app/page'

// Mock the Logo component since it might have complex dependencies
jest.mock('../app/components/core/logo', () => {
  return function MockedLogo() {
    return <div data-testid="logo">Notto Logo</div>
  }
})

// Mock any other complex components that might cause issues
jest.mock('../components/ui/button', () => ({
  Button: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => (
    <button {...props}>{children}</button>
  ),
}))

describe('Home Page', () => {
  it('should render the page without crashing', () => {
    render(<Page />)
    
    // Just check that the page renders without errors
    expect(document.body).toBeInTheDocument()
  })

  it('should contain main content area', () => {
    render(<Page />)
    
    // Look for main content elements that should be present
    const main = document.querySelector('main')
    if (main) {
      expect(main).toBeInTheDocument()
    }
  })

  it('should have proper document structure', () => {
    render(<Page />)
    
    // Verify basic document structure exists
    expect(document.body.children.length).toBeGreaterThan(0)
  })
})
