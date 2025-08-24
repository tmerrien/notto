import * as ShadCN from '@/components/ui/label'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  variant?: 'default' | 'system'
}

export function Label({ variant = 'default', className = '', children, ...props }: LabelProps) {
  const baseClasses = "font-mono uppercase tracking-widest text-xs font-medium"
  
  const variantClasses = {
    default: 'text-stone-900 dark:text-stone-100',
    system: 'text-amber-800 dark:text-amber-300'
  }
  
  return (
    <ShadCN.Label 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`} 
      {...props}
    >
      {children}
    </ShadCN.Label>
  )
}