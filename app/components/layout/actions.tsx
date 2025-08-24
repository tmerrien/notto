import { ReactNode } from 'react'

interface ActionsProps {
  children: ReactNode
  className?: string
}

export function Actions({ children, className = '' }: ActionsProps) {
  return (
    <div className={`flex flex-1 items-center justify-end space-x-3 ${className}`}>
      {children}
    </div>
  )
}