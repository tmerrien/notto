import React from 'react'
import { brandConfig } from '@/app/components/branding'

interface SectionProps {
  children: React.ReactNode
  direction?: 'horizontal' | 'vertical'
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  alignment?: 'start' | 'center' | 'end' | 'stretch'
  container?: boolean
  className?: string
}

export function Section({ 
  children, 
  direction = 'vertical', 
  spacing = 'md', 
  alignment = 'center',
  container = false,
  className = '' 
}: SectionProps) {
  const sectionConfig = brandConfig.components.section
  
  const spacingClasses = direction === 'horizontal' 
    ? sectionConfig.spacing[spacing].horizontal
    : sectionConfig.spacing[spacing].vertical

  const alignmentClasses = sectionConfig.alignment[alignment]

  const directionClasses = direction === 'horizontal' 
    ? `flex flex-row ${alignmentClasses}` 
    : 'flex flex-col'

  const content = (
    <div className={`${directionClasses} ${spacingClasses}`}>
      {children}
    </div>
  )

  if (container) {
    const containerConfig = sectionConfig.container
    return (
      <section className={`${containerConfig.layout} ${containerConfig.background} ${className}`}>
        <div className={`container ${containerConfig.padding}`}>
          {content}
        </div>
      </section>
    )
  }

  return (
    <div className={className}>
      {content}
    </div>
  )
}