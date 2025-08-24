import { ReactNode } from 'react'

interface FooterLegalProps {
  children: ReactNode
}

export function FooterLegal({ children }: FooterLegalProps) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      {children}
    </div>
  )
}