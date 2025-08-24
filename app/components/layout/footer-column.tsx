import { ReactNode } from 'react'

interface FooterColumnProps {
  title: string
  children: ReactNode
}

export function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div className="space-y-6">
      <h4 className="text-xs font-mono uppercase tracking-widest text-stone-900 dark:text-stone-100 pb-2 border-b border-stone-300/50 dark:border-stone-700/50">
        {title}
      </h4>
      <div className="space-y-4 flex flex-col">
        {children}
      </div>
    </div>
  )
}