import * as ShadCN from '@/components/ui/dialog'

interface DialogProps {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function Dialog({ children, open, onOpenChange }: DialogProps) {
  return (
    <ShadCN.Dialog open={open} onOpenChange={onOpenChange}>
      {children}
    </ShadCN.Dialog>
  )
}

interface DialogContentProps {
  children: React.ReactNode
  className?: string
}

export function DialogContent({ children, className = '' }: DialogContentProps) {
  const baseClasses = "bg-stone-50 dark:bg-stone-900 border-2 border-stone-200 dark:border-stone-800 shadow-2xl font-mono"
  
  return (
    <ShadCN.DialogContent className={`${baseClasses} ${className}`}>
      {children}
    </ShadCN.DialogContent>
  )
}

interface DialogHeaderProps {
  children: React.ReactNode
  className?: string
}

export function DialogHeader({ children, className = '' }: DialogHeaderProps) {
  return (
    <ShadCN.DialogHeader className={`space-y-4 ${className}`}>
      {children}
    </ShadCN.DialogHeader>
  )
}

interface DialogTitleProps {
  children: React.ReactNode
  className?: string
}

export function DialogTitle({ children, className = '' }: DialogTitleProps) {
  const baseClasses = "font-mono uppercase tracking-widest text-stone-900 dark:text-stone-100"
  
  return (
    <ShadCN.DialogTitle className={`${baseClasses} ${className}`}>
      {children}
    </ShadCN.DialogTitle>
  )
}

export { 
  DialogTrigger, 
  DialogDescription, 
  DialogFooter,
  DialogClose 
} from '@/components/ui/dialog'