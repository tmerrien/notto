// Core component styling configuration
export const coreComponentStyles = {
  logo: {
    base: 'flex items-center',
    sizes: {
      sm: {
        container: 'space-x-2',
        icon: 'w-6 h-6',
        iconInner: 'w-2 h-2',
        text: 'text-lg'
      },
      md: {
        container: 'space-x-3',
        icon: 'w-8 h-8',
        iconInner: 'w-3 h-3',
        text: 'text-xl'
      },
      lg: {
        container: 'space-x-4',
        icon: 'w-12 h-12',
        iconInner: 'w-4 h-4',
        text: 'text-3xl'
      }
    },
    icon: {
      background: 'bg-gradient-to-br from-amber-600 to-red-500',
      shape: 'rounded-lg',
      inner: 'bg-stone-50 dark:bg-stone-950 rounded-sm'
    },
    text: {
      base: 'font-mono font-normal tracking-widest text-stone-900 dark:text-stone-100 uppercase'
    }
  },

  link: {
    base: 'text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 transition-colors',
    variants: {
      default: '',
      accent: 'text-amber-600 hover:text-amber-700',
      muted: 'text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200'
    }
  },

  section: {
    spacing: {
      xs: {
        horizontal: 'gap-2',
        vertical: 'space-y-2'
      },
      sm: {
        horizontal: 'gap-4',
        vertical: 'space-y-4'
      },
      md: {
        horizontal: 'gap-6',
        vertical: 'space-y-8'
      },
      lg: {
        horizontal: 'gap-8',
        vertical: 'space-y-12'
      },
      xl: {
        horizontal: 'gap-12',
        vertical: 'space-y-16'
      }
    },
    alignment: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch'
    },
    container: {
      background: 'bg-stone-50 dark:bg-stone-950',
      padding: 'py-20 md:py-28 lg:py-36',
      layout: 'relative overflow-hidden'
    }
  }
}

export type CoreComponentStyles = typeof coreComponentStyles