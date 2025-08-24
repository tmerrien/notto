// UI component styling configuration
export const uiComponentStyles = {
  button: {
    base: 'inline-flex items-center justify-center font-mono uppercase tracking-widest transition-colors',
    sizes: {
      sm: 'text-xs h-9 px-4',
      default: 'text-xs h-9 px-4',
      lg: 'text-base h-12 px-8'
    },
    variants: {
      light: {
        base: 'bg-stone-100 hover:bg-stone-200 text-stone-900',
        dark: 'dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700'
      },
      colored: {
        base: 'bg-gradient-to-br from-amber-600 to-red-500 hover:from-amber-700 hover:to-red-600 text-white',
        dark: ''
      },
      dark: {
        base: 'bg-stone-900 hover:bg-stone-800 text-stone-100',
        dark: 'dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200'
      }
    }
  },

  heading: {
    base: 'font-mono font-normal uppercase block',
    sizes: {
      1: 'tracking-wider leading-[0.8] text-7xl md:text-8xl lg:text-9xl',
      2: 'text-lg md:text-xl leading-relaxed tracking-wide',
      3: 'text-sm leading-relaxed tracking-wide',
      4: 'tracking-wider leading-[0.8] text-3xl md:text-4xl lg:text-5xl',
      5: 'tracking-wider leading-[0.8] text-2xl md:text-3xl lg:text-4xl',
      6: 'tracking-wider leading-[0.8] text-xl md:text-2xl lg:text-3xl'
    },
    colors: {
      default: 'text-stone-900 dark:text-stone-100',
      accent: 'text-amber-600'
    }
  },

  card: {
    base: 'bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-8 shadow-lg'
  },

  badge: {
    base: 'font-mono uppercase tracking-widest text-xs inline-flex items-center rounded-full px-3 py-1',
    variants: {
      default: 'bg-stone-200 text-stone-900 dark:bg-stone-800 dark:text-stone-100',
      system: 'border-2 border-amber-600/30 bg-amber-50/50 dark:bg-amber-950/20 text-amber-800 dark:text-amber-300'
    }
  },

  text: {
    variants: {
      small: 'text-xs text-stone-500 dark:text-stone-400 font-mono uppercase tracking-widest',
      body: 'text-sm font-mono'
    }
  },

  list: {
    base: 'font-mono text-sm list-disc list-inside',
    spacing: {
      sm: 'space-y-1',
      md: 'space-y-2',
      lg: 'space-y-3'
    },
    variants: {
      bullet: 'list-disc',
      numbered: 'list-decimal'
    }
  },

  codeBlock: {
    base: 'bg-stone-900 dark:bg-stone-950 text-stone-100 p-6 rounded-xl font-mono text-sm overflow-x-auto'
  },

  alert: {
    base: 'font-mono uppercase tracking-widest text-xs border-2',
    variants: {
      system: 'border-amber-600/30 bg-amber-50/50 dark:bg-amber-950/20 text-amber-800 dark:text-amber-300',
      warning: 'border-red-500/30 bg-red-50/50 dark:bg-red-950/20 text-red-800 dark:text-red-300',
      success: 'border-green-600/30 bg-green-50/50 dark:bg-green-950/20 text-green-800 dark:text-green-300'
    }
  }
}

export type UIComponentStyles = typeof uiComponentStyles