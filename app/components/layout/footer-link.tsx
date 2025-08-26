import React from 'react'
import { Link } from '@/app/components/core/link'

interface FooterLinkProps {
  href: string
  children: React.ReactNode
}

export function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link 
      href={href}
      className="text-stone-600 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 font-mono uppercase tracking-widest transition-colors duration-200 text-xs"
    >
      {children}
    </Link>
  )
}