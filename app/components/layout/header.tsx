import { ReactNode } from 'react'

interface HeaderProps {
  children: ReactNode
}

export function Header({ children }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/60 dark:border-stone-800/60 bg-stone-50/95 dark:bg-stone-950/95 backdrop-blur supports-[backdrop-filter]:bg-stone-50/80 dark:supports-[backdrop-filter]:bg-stone-950/80">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        {children}
      </div>
    </header>
  )
}