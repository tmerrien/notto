import React from 'react'
import * as ShadCN from '@/components/ui/button'
import { buildComponentClasses } from '@/app/components/branding'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'default' | 'ghost' | 'outline'
  size?: 'sm' | 'lg' | 'default' | 'icon'
  style?: 'light' | 'colored' | 'dark'
  className?: string
  onClick?: () => void
}

export function Button({ children, variant = 'default', size = 'default', style = 'colored', className = '', onClick }: ButtonProps) {
  const buttonClasses = buildComponentClasses('button', {
    variant: style,
    size: size,
    additional: className
  })

  return (
    <ShadCN.Button
      variant={variant}
      size={size}
      className={buttonClasses}
      onClick={onClick}
    >
      {children}
    </ShadCN.Button>
  )
}