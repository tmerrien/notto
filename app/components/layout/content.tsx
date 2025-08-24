import { ReactNode } from 'react'

interface ContentProps {
  children: ReactNode
}

export function Content({ children }: ContentProps) {
  return (
    <main className="flex-1 px-6 py-8">
      {children}
    </main>
  )
}