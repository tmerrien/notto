import React from 'react'

interface MetricProps {
  value: string | number
  label: string
  color?: 'amber' | 'red' | 'stone'
  className?: string
}

export function Metric({ value, label, color = 'stone', className = '' }: MetricProps) {
  const colorClasses = {
    amber: 'text-amber-600',
    red: 'text-red-500', 
    stone: 'text-stone-900 dark:text-stone-100'
  }

  return (
    <div className={`w-48 ${className}`}>
      <div className={`text-5xl font-mono font-light ${colorClasses[color]}`}>{value}</div>
      <div className="text-xs text-stone-500 dark:text-stone-400 font-mono uppercase tracking-widest">{label}</div>
    </div>
  )
}