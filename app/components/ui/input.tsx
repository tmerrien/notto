import * as ShadCN from '@/components/ui/input'
import { forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'system'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant = 'default', className = '', ...props }, ref) => {
    const baseClasses = "font-mono uppercase tracking-widest text-xs placeholder:text-stone-400 dark:placeholder:text-stone-600"
    
    const variantClasses = {
      default: 'bg-stone-50 dark:bg-stone-900 border-2 border-stone-200 dark:border-stone-800 focus:border-amber-600 dark:focus:border-amber-400 text-stone-900 dark:text-stone-100',
      system: 'bg-amber-50/50 dark:bg-amber-950/20 border-2 border-amber-600/30 focus:border-amber-600 dark:focus:border-amber-400 text-amber-800 dark:text-amber-300'
    }
    
    return (
      <ShadCN.Input
        ref={ref}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"