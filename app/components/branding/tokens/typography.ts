// Typography tokens - fonts, sizes, transforms, spacing
export const typographyTokens = {
  fontFamily: {
    primary: 'var(--font-geist-mono)', // Monospace font
    secondary: 'var(--font-geist-sans)' // Sans serif fallback
  },
  textTransform: {
    primary: 'uppercase' as const,
    secondary: 'none' as const
  },
  letterSpacing: {
    tight: 'tracking-tight',
    normal: 'tracking-normal', 
    wide: 'tracking-wide',
    wider: 'tracking-wider',
    widest: 'tracking-widest'
  },
  fontWeight: {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    bold: 'font-bold'
  }
}

export type TypographyTokens = typeof typographyTokens