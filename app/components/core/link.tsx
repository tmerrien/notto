import React from 'react'
import { brandConfig } from '@/app/components/branding'

interface LinkProps {
  href: string
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'muted'
  className?: string
  target?: string
  rel?: string
}

export function Link({ href, children, variant = 'default', className = '', target, rel }: LinkProps) {
  const linkConfig = brandConfig.components.link
  const baseClasses = linkConfig.base
  const variantClasses = linkConfig.variants[variant]

  return (
    <a
      href={href}
      className={`${baseClasses} ${variantClasses} ${className}`}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  )
}