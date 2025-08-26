import React from 'react'
import { Link } from '@/app/components/core/link'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function NavLink({ href, children, className = '' }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`transition-colors hover:text-stone-900 dark:hover:text-stone-100 text-stone-600 dark:text-stone-400 font-mono uppercase tracking-widest ${className}`}
    >
      {children}
    </Link>
  )
}