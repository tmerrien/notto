# Notto Components

**Universal UI Component Library**

A comprehensive Next.js component library built on shadcn/ui and designed for building any type of application interface with Japanese minimalism and technical brutalism aesthetics.

## 🎯 Project Goals

**Notto** aims to be the universal building blocks for modern web applications, providing:

- **Universal Design**: Components that work for any application domain
- **Highly Composable**: Building blocks that combine for complex interfaces  
- **Customizable Theming**: Easy to adapt to different brand requirements
- **Maximum Reusability**: Layered architecture for optimal component reuse

## 🏗️ Architecture

Notto follows a strict **layered component architecture** for maximum reusability:

### Component Hierarchy

```
shadcn/ui (primitives) → Notto Brand Layer → Page-Specific Components
```

1. **Primitive Layer** (`/components/ui/`): Original shadcn/ui components - **never modify directly**
2. **Brand Layer** (`/app/components/`): Our custom Notto components that wrap primitives
3. **Page Layer** (`/app/[route]/components/`): Page-specific components built from brand components

### Directory Structure

```
/app/components/
├── core/           # Core building blocks (Section, Link, Logo)
├── layout/         # Layout components (Header, Footer, Nav, etc.)  
└── ui/            # UI primitives (Button, Badge, Card, etc.)
```

## 🎨 Design System

**Aesthetic**: Japanese minimalism meets technical brutalism

### Typography
- **Font**: Geist Mono (monospace)
- **Style**: Uppercase, wide tracking
- **Inspiration**: Mutek festival, Teenage Engineering

### Colors
- **Base**: Stone grays (50-950)
- **Accents**: Amber (600) to Red (500) gradients
- **Usage**: Subtle backgrounds, bold accent elements

### Component Patterns
- **Semantic HTML**: Proper accessibility and structure
- **SwiftUI-inspired**: Compositional layout patterns
- **Consistent Spacing**: Standardized gap and padding system

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd notto

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Basic Usage

```tsx
import { Section } from '@/app/components/core/section'
import { Button } from '@/app/components/ui/button'
import { Heading } from '@/app/components/ui/heading'

function MyPage() {
  return (
    <Section container spacing="lg">
      <Heading level={1}>Welcome</Heading>
      <Button size="lg" style="dark">
        Get Started
      </Button>
    </Section>
  )
}
```

## 📚 Documentation

- **[Core Components](./components/core.md)** - Building blocks (Section, Link, Logo)
- **[Layout Components](./components/layout.md)** - Page structure (Header, Footer, Nav)
- **[UI Components](./components/ui.md)** - Interface elements (Button, Card, Alert)
- **[Usage Guidelines](./guides/usage.md)** - Best practices and patterns

## 🛠️ Technology Stack

- **Next.js 15** with App Router and Turbopack
- **React 19** with TypeScript for type safety
- **Tailwind CSS v4** with PostCSS for styling
- **shadcn/ui** - 47+ accessible component primitives
- **Radix UI** - Underlying primitive components
- **Geist fonts** - Monospace typography system

## 🎯 Component Categories

### Data Display Components
- Advanced table components
- List and grid layouts  
- Card containers and layouts
- Metric and statistics display

### Form & Input Components
- Complex form builders
- Multi-step wizards
- File upload interfaces
- Input validation systems

### Navigation Components
- Sidebar navigation
- Breadcrumb systems
- Tab and accordion layouts
- Menu and dropdown systems

### Feedback Components
- Toast notification systems
- Loading and progress states
- Alert and confirmation dialogs
- Status indicators

### Advanced Components
- Real-time collaboration UI
- Data visualization widgets
- Search and filter interfaces
- Content management interfaces

## 📖 Examples

The entire site showcases components in action - every page uses the Notto component system with real-world examples and usage patterns.

## 🤝 Contributing

1. Follow the **kebab-case** naming convention for all files
2. Use **absolute imports** with `@/app/components/[category]/[component]`
3. Always wrap shadcn/ui primitives - never use them directly
4. Document new patterns in `CLAUDE.md`
5. Maintain the layered architecture

## 📄 License

Open source under MIT license.

---

**Built with [Next.js](https://nextjs.org/) and [shadcn/ui](https://ui.shadcn.com/)**