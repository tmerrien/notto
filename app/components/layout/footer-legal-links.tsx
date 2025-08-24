import { ReactNode } from 'react'

interface FooterLegalLinksProps {
  children: ReactNode
}

export function FooterLegalLinks({ children }: FooterLegalLinksProps) {
  return (
    <div className="flex gap-8">
      {children}
    </div>
  )
}