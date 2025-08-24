// Color palette tokens
export const colorTokens = {
  // Primary brand colors
  primary: {
    50: 'stone-50',
    100: 'stone-100',
    200: 'stone-200',
    300: 'stone-300',
    400: 'stone-400',
    500: 'stone-500',
    600: 'stone-600',
    700: 'stone-700',
    800: 'stone-800',
    900: 'stone-900',
    950: 'stone-950'
  },
  
  // Accent colors
  accent: {
    primary: 'amber-600',
    secondary: 'red-500',
    gradient: 'from-amber-600 to-red-500'
  },

  // System colors
  system: {
    success: 'green-600',
    warning: 'red-500',
    info: 'amber-600'
  },

  // Text colors
  text: {
    primary: 'stone-900 dark:stone-100',
    secondary: 'stone-700 dark:stone-300',
    muted: 'stone-500 dark:stone-400',
    accent: 'amber-600'
  }
}

export type ColorTokens = typeof colorTokens