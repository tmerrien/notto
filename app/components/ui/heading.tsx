import React from 'react'
import { brandConfig } from '@/app/components/branding'

interface HeadingProps {
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  variant?: 'default' | 'accent' | 'subtitle' | 'caption'
  className?: string
}

export function Heading({ children, level = 1, variant = 'default', className = '' }: HeadingProps) {
  const baseClasses = brandConfig.components.heading.base
  const sizeClasses = brandConfig.components.heading.sizes[level as keyof typeof brandConfig.components.heading.sizes]
  const colorClasses = variant === 'accent' 
    ? brandConfig.components.heading.colors.accent
    : brandConfig.components.heading.colors.default

  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  return React.createElement(
    Tag,
    { className: `${baseClasses} ${sizeClasses} ${colorClasses} ${className}` },
    children
  )
}