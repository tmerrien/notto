import { ReactNode } from 'react'

interface FooterProps {
  children: ReactNode
}

export function Footer({ children }: FooterProps) {
  return (
    <footer className="border-t border-stone-200/40 dark:border-stone-800/40 bg-stone-100/50 dark:bg-stone-900/50">
      <div className="container py-20 max-w-screen-2xl">
        {children}
      </div>
    </footer>
  )
}