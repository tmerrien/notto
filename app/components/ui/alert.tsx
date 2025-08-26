import React from 'react'
import * as ShadCN from '@/components/ui/alert'

interface AlertProps {
  children: React.ReactNode
  variant?: 'default' | 'destructive'
  style?: 'system' | 'warning' | 'success'
  className?: string
}

export function Alert({ children, variant = 'default', style = 'system', className = '' }: AlertProps) {
  const baseClasses = "font-mono uppercase tracking-widest text-xs border-2"
  
  const styleClasses = {
    system: 'border-amber-600/30 bg-amber-50/50 dark:bg-amber-950/20 text-amber-800 dark:text-amber-300',
    warning: 'border-red-500/30 bg-red-50/50 dark:bg-red-950/20 text-red-800 dark:text-red-300',
    success: 'border-green-600/30 bg-green-50/50 dark:bg-green-950/20 text-green-800 dark:text-green-300'
  }
  
  return (
    <ShadCN.Alert 
      variant={variant}
      className={`${baseClasses} ${styleClasses[style]} ${className}`}
    >
      {children}
    </ShadCN.Alert>
  )
}

export { AlertDescription, AlertTitle } from '@/components/ui/alert'