import React from 'react'
import * as ShadCN from '@/components/ui/card'
import { brandConfig } from '@/app/components/branding'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  const cardClasses = brandConfig.components.card.base
  
  return (
    <ShadCN.Card className={`${cardClasses} ${className}`}>
      {children}
    </ShadCN.Card>
  )
}