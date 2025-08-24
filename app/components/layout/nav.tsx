import { ReactNode } from 'react'

interface NavProps {
  children: ReactNode
}

export function Nav({ children }: NavProps) {
  return (
    <nav className="flex items-center gap-8 text-xs">
      {children}
    </nav>
  )
}