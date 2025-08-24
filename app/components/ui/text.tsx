import { ReactNode } from 'react'
import { brandConfig } from '@/app/components/branding'

interface TextProps {
  children: ReactNode
  variant?: 'small' | 'body'
  className?: string
}

export function Text({ children, variant = 'small' as const, className = "" }: TextProps) {
  const variantClasses = brandConfig.components.text.variants[variant]

  return (
    <p className={`${variantClasses} ${className}`}>
      {children}
    </p>
  )
}