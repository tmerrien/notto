import { ReactNode } from 'react'

interface FooterNavProps {
  children: ReactNode
}

export function FooterNav({ children }: FooterNavProps) {
  return (
    <nav className="grid gap-8 sm:gap-12 mb-16 grid-cols-2 md:grid-cols-4">
      {children}
    </nav>
  )
}