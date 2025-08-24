import * as ShadCN from '@/components/ui/tooltip'

interface TooltipProps {
  children: React.ReactNode
  content: React.ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
  className?: string
}

export function Tooltip({ children, content, side = 'top', className = '' }: TooltipProps) {
  const baseClasses = "bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 font-mono text-xs uppercase tracking-widest px-3 py-2 border-0"
  
  return (
    <ShadCN.TooltipProvider>
      <ShadCN.Tooltip>
        <ShadCN.TooltipTrigger asChild>
          {children}
        </ShadCN.TooltipTrigger>
        <ShadCN.TooltipContent 
          side={side}
          className={`${baseClasses} ${className}`}
        >
          {content}
        </ShadCN.TooltipContent>
      </ShadCN.Tooltip>
    </ShadCN.TooltipProvider>
  )
}

export { 
  TooltipProvider,
  TooltipTrigger,
  TooltipContent 
} from '@/components/ui/tooltip'