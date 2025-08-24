import React from 'react'

interface ListProps {
  children: React.ReactNode
  variant?: 'bullet' | 'numbered'
  spacing?: 'sm' | 'md' | 'lg'
  className?: string
}

interface ListItemProps {
  children: React.ReactNode
  className?: string
}

export function List({ children, variant = 'bullet', spacing = 'md', className = '' }: ListProps) {
  const baseClasses = "font-mono text-sm list-disc list-inside"
  
  const spacingClasses = {
    sm: 'space-y-1',
    md: 'space-y-2', 
    lg: 'space-y-3'
  }

  const variantClasses = {
    bullet: 'list-disc',
    numbered: 'list-decimal'
  }

  const Tag = variant === 'numbered' ? 'ol' : 'ul'
  
  return (
    <Tag className={`${baseClasses} ${variantClasses[variant]} ${spacingClasses[spacing]} ${className}`}>
      {children}
    </Tag>
  )
}

export function ListItem({ children, className = '' }: ListItemProps) {
  return (
    <li className={className}>
      {children}
    </li>
  )
}