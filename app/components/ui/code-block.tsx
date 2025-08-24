import React from 'react'

interface CodeBlockProps {
  children: string
  className?: string
}

export function CodeBlock({ children, className = '' }: CodeBlockProps) {
  return (
    <div className={`bg-stone-900 dark:bg-stone-950 text-stone-100 p-6 rounded-xl font-mono text-sm overflow-x-auto ${className}`}>
      <pre>{children}</pre>
    </div>
  )
}