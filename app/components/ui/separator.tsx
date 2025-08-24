import * as ShadCN from '@/components/ui/separator'

interface SeparatorProps {
  variant?: 'default' | 'accent' | 'custom'
  size?: 'sm' | 'md' | 'lg' | 'full'
  className?: string
}

export function Separator({ variant = 'default', size = 'full', className = '' }: SeparatorProps) {
  const variantClasses = {
    default: 'bg-stone-300/50 dark:bg-stone-700/50',
    accent: 'bg-gradient-to-r from-amber-600 to-red-500',
    custom: ''
  }

  const sizeClasses = {
    sm: 'w-8 h-0.5',
    md: 'w-12 h-0.5', 
    lg: 'w-16 h-0.5',
    full: 'w-full h-px'
  }

  const baseClasses = variant === 'custom' ? '' : 'my-12'

  if (size !== 'full') {
    return (
      <div className={`${sizeClasses[size]} ${variantClasses[variant]} ${className}`}></div>
    )
  }

  return (
    <ShadCN.Separator className={`${baseClasses} ${variantClasses[variant]} ${className}`} />
  )
}