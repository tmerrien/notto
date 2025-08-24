import React from 'react'
import Link from 'next/link'
import { brandConfig } from '@/app/components/branding'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  href?: string
}

export function Logo({ size = 'md', className = '', href, children }: React.PropsWithChildren<LogoProps>) {
  const logoConfig = brandConfig.components.logo
  const sizeConfig = logoConfig.sizes[size]

  const logoContent = (
    <>
      {/* Geometric logo mark */}
      <div className={`${sizeConfig.icon} ${logoConfig.icon.background} ${logoConfig.icon.shape} flex items-center justify-center`}>
        <div className={`${sizeConfig.iconInner} ${logoConfig.icon.inner}`}></div>
      </div>
      <div className={`${logoConfig.text.base} ${sizeConfig.text}`}>
        {children || 'NOTTO'}
      </div>
    </>
  )

  if (href) {
    return (
      <Link href={href} className={`${logoConfig.base} ${sizeConfig.container} ${className}`}>
        {logoContent}
      </Link>
    )
  }

  return (
    <div className={`${logoConfig.base} ${sizeConfig.container} ${className}`}>
      {logoContent}
    </div>
  )
}