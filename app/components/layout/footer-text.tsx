import { Text } from '@/app/components/ui/text'
import { ReactNode } from 'react'

interface FooterTextProps {
  children: ReactNode
}

export function FooterText({ children }: FooterTextProps) {
  return (
    <Text>
      {children}
    </Text>
  )
}