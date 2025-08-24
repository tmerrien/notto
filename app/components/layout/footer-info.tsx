import { ReactNode } from 'react'

interface FooterInfoProps {
  children: ReactNode
}

export function FooterInfo({ children }: FooterInfoProps) {
  return (
    <div className="space-y-2">
      {children}
    </div>
  )
}