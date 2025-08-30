import React from 'react'
import { render, screen } from '@testing-library/react'
import { Section } from '../../../app/components/core/section'

// Mock the branding module
jest.mock('../../../app/components/branding', () => ({
  brandConfig: {
    components: {
      section: {
        spacing: {
          xs: { horizontal: 'gap-xs-h', vertical: 'gap-xs-v' },
          sm: { horizontal: 'gap-sm-h', vertical: 'gap-sm-v' },
          md: { horizontal: 'gap-md-h', vertical: 'gap-md-v' },
          lg: { horizontal: 'gap-lg-h', vertical: 'gap-lg-v' },
          xl: { horizontal: 'gap-xl-h', vertical: 'gap-xl-v' }
        },
        alignment: {
          start: 'justify-start',
          center: 'justify-center',
          end: 'justify-end',
          stretch: 'justify-stretch'
        },
        container: {
          layout: 'section-layout',
          background: 'section-bg',
          padding: 'section-padding'
        }
      }
    }
  }
}))

describe('Section Component', () => {
  it('should render children', () => {
    render(
      <Section>
        <div>Test Content</div>
      </Section>
    )
    
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('should render with default props', () => {
    render(
      <Section>
        <div>Default Section</div>
      </Section>
    )
    
    const section = screen.getByText('Default Section').closest('div')
    expect(section).toHaveClass('flex', 'flex-col')
  })

  it('should render with horizontal direction', () => {
    render(
      <Section direction="horizontal">
        <div>Horizontal Section</div>
      </Section>
    )
    
    const section = screen.getByText('Horizontal Section').closest('div')
    expect(section).toHaveClass('flex', 'flex-row', 'justify-center')
  })

  it('should render with vertical direction', () => {
    render(
      <Section direction="vertical">
        <div>Vertical Section</div>
      </Section>
    )
    
    const section = screen.getByText('Vertical Section').closest('div')
    expect(section).toHaveClass('flex', 'flex-col')
  })

  it('should apply correct spacing classes for xs', () => {
    render(
      <Section spacing="xs">
        <div>XS Spacing</div>
      </Section>
    )
    
    const section = screen.getByText('XS Spacing').closest('div')
    expect(section).toHaveClass('gap-xs-v')
  })

  it('should apply correct spacing classes for sm', () => {
    render(
      <Section spacing="sm">
        <div>SM Spacing</div>
      </Section>
    )
    
    const section = screen.getByText('SM Spacing').closest('div')
    expect(section).toHaveClass('gap-sm-v')
  })

  it('should apply correct spacing classes for md', () => {
    render(
      <Section spacing="md">
        <div>MD Spacing</div>
      </Section>
    )
    
    const section = screen.getByText('MD Spacing').closest('div')
    expect(section).toHaveClass('gap-md-v')
  })

  it('should apply correct spacing classes for lg', () => {
    render(
      <Section spacing="lg">
        <div>LG Spacing</div>
      </Section>
    )
    
    const section = screen.getByText('LG Spacing').closest('div')
    expect(section).toHaveClass('gap-lg-v')
  })

  it('should apply correct spacing classes for xl', () => {
    render(
      <Section spacing="xl">
        <div>XL Spacing</div>
      </Section>
    )
    
    const section = screen.getByText('XL Spacing').closest('div')
    expect(section).toHaveClass('gap-xl-v')
  })

  it('should apply horizontal spacing when direction is horizontal', () => {
    render(
      <Section direction="horizontal" spacing="md">
        <div>Horizontal MD Spacing</div>
      </Section>
    )
    
    const section = screen.getByText('Horizontal MD Spacing').closest('div')
    expect(section).toHaveClass('gap-md-h')
  })

  it('should apply start alignment', () => {
    render(
      <Section direction="horizontal" alignment="start">
        <div>Start Aligned</div>
      </Section>
    )
    
    const section = screen.getByText('Start Aligned').closest('div')
    expect(section).toHaveClass('justify-start')
  })

  it('should apply center alignment', () => {
    render(
      <Section direction="horizontal" alignment="center">
        <div>Center Aligned</div>
      </Section>
    )
    
    const section = screen.getByText('Center Aligned').closest('div')
    expect(section).toHaveClass('justify-center')
  })

  it('should apply end alignment', () => {
    render(
      <Section direction="horizontal" alignment="end">
        <div>End Aligned</div>
      </Section>
    )
    
    const section = screen.getByText('End Aligned').closest('div')
    expect(section).toHaveClass('justify-end')
  })

  it('should apply stretch alignment', () => {
    render(
      <Section direction="horizontal" alignment="stretch">
        <div>Stretch Aligned</div>
      </Section>
    )
    
    const section = screen.getByText('Stretch Aligned').closest('div')
    expect(section).toHaveClass('justify-stretch')
  })

  it('should render as container when container prop is true', () => {
    render(
      <Section container>
        <div>Container Section</div>
      </Section>
    )
    
    const section = screen.getByText('Container Section').closest('section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveClass('section-layout', 'section-bg')
  })

  it('should apply container classes correctly', () => {
    render(
      <Section container>
        <div>Container Content</div>
      </Section>
    )
    
    const section = screen.getByText('Container Content').closest('section')
    const container = section?.querySelector('.container')
    
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass('section-padding')
  })

  it('should render as div when container prop is false', () => {
    render(
      <Section container={false}>
        <div>Div Section</div>
      </Section>
    )
    
    const section = screen.getByText('Div Section').closest('div')
    expect(section).toBeInTheDocument()
    expect(screen.queryByRole('region')).not.toBeInTheDocument()
  })

  it('should apply custom className', () => {
    render(
      <Section className="custom-section">
        <div>Custom Section</div>
      </Section>
    )
    
    const section = screen.getByText('Custom Section').closest('div')
    expect(section).toHaveClass('custom-section')
  })

  it('should combine all props correctly', () => {
    render(
      <Section 
        direction="horizontal" 
        spacing="lg" 
        alignment="end" 
        container 
        className="custom-class"
      >
        <div>Complex Section</div>
      </Section>
    )
    
    const section = screen.getByText('Complex Section').closest('section')
    expect(section).toHaveClass('section-layout', 'section-bg', 'custom-class')
    
    const content = section?.querySelector('.flex')
    expect(content).toHaveClass('flex', 'flex-row', 'justify-end', 'gap-lg-h')
  })

  it('should handle complex children', () => {
    render(
      <Section>
        <div>Child 1</div>
        <span>Child 2</span>
        <strong>Child 3</strong>
      </Section>
    )
    
    expect(screen.getByText('Child 1')).toBeInTheDocument()
    expect(screen.getByText('Child 2')).toBeInTheDocument()
    expect(screen.getByText('Child 3')).toBeInTheDocument()
  })
})
