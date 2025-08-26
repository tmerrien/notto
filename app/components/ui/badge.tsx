import React from 'react'
import * as ShadCN from '@/components/ui/badge'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
  style?: 'default' | 'system'
  className?: string
}

export function Badge({ children, variant = 'default', style = 'default', className = '' }: BadgeProps) {
  const baseClasses = "w-fit uppercase tracking-widest font-mono text-xs"
  
  const styleClasses = {
    default: '',
    system: 'border-amber-600/30 text-amber-800 dark:text-amber-300 bg-transparent'
  }
  
  return (
    <ShadCN.Badge 
      variant={variant} 
      className={`${baseClasses} ${styleClasses[style]} ${className}`}
    >
      {children}
    </ShadCN.Badge>
  )
}