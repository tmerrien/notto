# Usage Guidelines

Best practices and patterns for using Notto components effectively.

## Component Hierarchy

Notto follows a strict **layered architecture** for maximum reusability and maintainability.

### Layer Rules

```
shadcn/ui → Notto Brand Layer → Page Components
```

1. **Never use shadcn/ui directly** - Always wrap in Notto brand components
2. **Page components use brand components** - Never skip the brand layer  
3. **Brand components wrap primitives** - One layer of abstraction

### ✅ Correct Usage

```tsx
// ✅ Good: Using brand component
import { Button } from '@/app/components/ui/button'

<Button size="lg" style="dark">Submit</Button>
```

### ❌ Incorrect Usage

```tsx
// ❌ Bad: Using shadcn directly
import { Button } from '@/components/ui/button'

<Button>Submit</Button>
```

---

## Import Conventions

Always use **absolute imports** with the `@/app/components/` prefix.

### Import Pattern

```tsx
// Core components
import { Section } from '@/app/components/core/section'
import { Link } from '@/app/components/core/link'
import { Logo } from '@/app/components/core/logo'

// Layout components  
import { Header } from '@/app/components/layout/header'
import { Nav, NavLink } from '@/app/components/layout/nav'

// UI components
import { Button } from '@/app/components/ui/button'
import { Heading } from '@/app/components/ui/heading'
import { Card } from '@/app/components/ui/card'
```

### File Organization

```
/app/components/
├── core/           # Building blocks (Section, Link, Logo)
├── layout/         # Page structure (Header, Footer, Nav)
└── ui/            # Interface elements (Button, Card, Input)
```

---

## Layout Patterns

Use **Section** for all layout needs instead of raw divs with CSS.

### Basic Layout Pattern

```tsx
import { Section } from '@/app/components/core/section'

// ✅ Good: Using Section component
<Section container spacing="xl">
  <Section spacing="lg">
    <Heading level={1}>Title</Heading>
    <Heading level={2}>Subtitle</Heading>
  </Section>
  
  <Section direction="horizontal" spacing="sm">
    <Button>Primary</Button>
    <Button variant="outline">Secondary</Button>  
  </Section>
</Section>
```

### ❌ Avoid Raw HTML

```tsx
// ❌ Bad: Using raw HTML with CSS
<div className="max-w-4xl mx-auto px-6 py-12">
  <div className="space-y-8">
    <div>
      <h1>Title</h1>
      <h2>Subtitle</h2>
    </div>
    <div className="flex gap-4">
      <button>Primary</button>
      <button>Secondary</button>
    </div>
  </div>
</div>
```

---

## Spacing System

Use the **Section spacing scale** instead of custom margins.

### Spacing Scale

| Size | Value | Use Case |
|------|-------|----------|
| `xs` | 0.5rem (8px) | Tight spacing |
| `sm` | 1rem (16px) | Close elements |
| `md` | 1.5rem (24px) | Default spacing |
| `lg` | 2rem (32px) | Section separation |
| `xl` | 3rem (48px) | Page-level spacing |

### ✅ Correct Spacing

```tsx
// ✅ Good: Using Section spacing
<Section spacing="lg">
  <Heading level={1}>Title</Heading>
  <Section spacing="md">
    <Text>Content block 1</Text>
    <Text>Content block 2</Text>
  </Section>
</Section>
```

### ❌ Avoid Custom Margins

```tsx
// ❌ Bad: Custom margin classes
<div className="mb-8">
  <h1 className="mb-6">Title</h1>
  <div className="space-y-6">
    <p>Content</p>
  </div>
</div>
```

---

## Typography Guidelines

Use semantic **Heading levels** with proper hierarchy.

### Heading Hierarchy

```tsx
import { Heading } from '@/app/components/ui/heading'

// ✅ Good: Proper heading hierarchy
<Section>
  <Heading level={1}>Main Title</Heading>        {/* 7xl-9xl */}
  <Heading level={2}>Section Title</Heading>     {/* lg-xl */}
  <Heading level={3}>Subsection</Heading>        {/* sm */}
  <Heading level={4}>Content Title</Heading>     {/* 3xl-5xl */}
</Section>
```

### Typography Rules

1. **One H1 per page** - Use level={1} only once
2. **Sequential hierarchy** - Don't skip levels (H1 → H3)
3. **Semantic meaning** - Use levels for structure, not styling
4. **Accent sparingly** - Use `variant="accent"` for emphasis

---

## Color and Styling

Follow the **design system** color palette and avoid custom colors.

### Color Palette

- **Base**: Stone grays (50, 100, 200, ... 900, 950)
- **Accent**: Amber (600) to Red (500) gradients
- **States**: Hover and focus variations

### ✅ Using System Colors

```tsx
// ✅ Good: Using component style variants
<Button style="dark">Primary Action</Button>
<Button style="light">Secondary Action</Button>
<Alert style="system">System Message</Alert>
<Badge style="system">Status</Badge>
```

### ❌ Custom Color Classes

```tsx
// ❌ Bad: Custom color classes
<button className="bg-blue-500 text-white">Custom</button>
<div className="text-green-600">Success</div>
```

---

## Accessibility Best Practices

Ensure components are **accessible by default**.

### Form Accessibility

```tsx
import { Label } from '@/app/components/ui/label'
import { Input } from '@/app/components/ui/input'

// ✅ Good: Proper labeling
<Section spacing="md">
  <Label htmlFor="username">USERNAME</Label>
  <Input 
    id="username"
    type="text"
    placeholder="ENTER_USERNAME"
    aria-describedby="username-help"
  />
</Section>
```

### Interactive Elements

```tsx
import { Tooltip } from '@/app/components/ui/tooltip'

// ✅ Good: Contextual help
<Tooltip content="Initialize the system" side="bottom">
  <Button aria-label="Initialize system">
    INIT
  </Button>
</Tooltip>
```

### Accessibility Checklist

- [ ] **Labels**: All inputs have associated labels
- [ ] **ARIA**: Proper ARIA attributes where needed  
- [ ] **Keyboard**: Full keyboard navigation support
- [ ] **Focus**: Visible focus indicators
- [ ] **Contrast**: WCAG AA color contrast
- [ ] **Screen Readers**: Semantic HTML structure

---

## Component Composition

Build **reusable patterns** through composition.

### Card Pattern

```tsx
import { Card } from '@/app/components/ui/card'
import { Section } from '@/app/components/core/section'
import { Heading } from '@/app/components/ui/heading'
import { Metric } from '@/app/components/ui/metric'

// ✅ Good: Composable card
function StatsCard({ title, metrics }) {
  return (
    <Card>
      <Section spacing="lg">
        <Heading level={3}>{title}</Heading>
        
        <Section direction="horizontal" spacing="md">
          {metrics.map(metric => (
            <Metric 
              key={metric.label}
              value={metric.value}
              label={metric.label}
              color={metric.color}
            />
          ))}
        </Section>
      </Section>
    </Card>
  )
}
```

### Form Pattern

```tsx
import { Section } from '@/app/components/core/section'
import { Heading } from '@/app/components/ui/heading'
import { Label } from '@/app/components/ui/label'
import { Input } from '@/app/components/ui/input'
import { Button } from '@/app/components/ui/button'

// ✅ Good: Reusable form structure
function ContactForm() {
  return (
    <Section container spacing="xl">
      <Heading level={2}>CONTACT_FORM</Heading>
      
      <Section spacing="lg">
        <Section spacing="md">
          <Label htmlFor="name">FULL_NAME</Label>
          <Input id="name" placeholder="ENTER_NAME" />
        </Section>
        
        <Section spacing="md">
          <Label htmlFor="email">EMAIL_ADDRESS</Label>
          <Input id="email" type="email" placeholder="ENTER_EMAIL" />
        </Section>
        
        <Button size="lg" style="dark">
          SUBMIT_FORM
        </Button>
      </Section>
    </Section>
  )
}
```

---

## Performance Guidelines

Optimize component usage for **better performance**.

### Import Optimization

```tsx
// ✅ Good: Named imports
import { Button } from '@/app/components/ui/button'
import { Section } from '@/app/components/core/section'

// ❌ Bad: Barrel imports (if they existed)
import { Button, Section, Heading } from '@/app/components'
```

### Component Memoization

```tsx
import { memo } from 'react'
import { Metric } from '@/app/components/ui/metric'

// ✅ Good: Memoize expensive components
const MetricList = memo(({ metrics }) => (
  <Section direction="horizontal" spacing="md">
    {metrics.map(metric => (
      <Metric key={metric.id} {...metric} />
    ))}
  </Section>
))
```

---

## File Naming Conventions

Follow **kebab-case** for all files and components.

### File Naming

```
✅ Good:
- user-profile.tsx
- settings-page.tsx  
- navigation-menu.tsx

❌ Bad:
- UserProfile.tsx
- settingsPage.tsx
- Navigation_Menu.tsx
```

### Component Naming

```tsx
// ✅ Good: PascalCase for components
export function UserProfile() { }
export function SettingsPage() { }

// ✅ Good: kebab-case for files
// user-profile.tsx
// settings-page.tsx
```

---

## Error Handling

Handle component errors **gracefully**.

### Error Boundaries

```tsx
import { ErrorBoundary } from 'react-error-boundary'
import { Alert } from '@/app/components/ui/alert'

function ErrorFallback({ error }) {
  return (
    <Alert style="warning">
      <AlertTitle>COMPONENT_ERROR</AlertTitle>
      <AlertDescription>
        Something went wrong: {error.message}
      </AlertDescription>
    </Alert>
  )
}

// ✅ Good: Wrap components in error boundaries
<ErrorBoundary FallbackComponent={ErrorFallback}>
  <YourComponent />
</ErrorBoundary>
```

---

## Development Workflow

Follow these steps when **creating new components**.

### 1. Plan the Component

- [ ] Determine component category (core/layout/ui)
- [ ] Identify required props and variants
- [ ] Check if shadcn primitive exists
- [ ] Plan accessibility requirements

### 2. Create the Component

```tsx
// 1. Import shadcn primitive (if applicable)
import * as ShadCN from '@/components/ui/button'

// 2. Define TypeScript interface
interface MyComponentProps {
  children: React.ReactNode
  variant?: 'default' | 'accent'
  className?: string
}

// 3. Create component with brand styling
export function MyComponent({ children, variant = 'default', className = '' }: MyComponentProps) {
  const baseClasses = "font-mono uppercase tracking-widest"
  const variantClasses = variant === 'accent' ? 'text-amber-600' : 'text-stone-900'
  
  return (
    <ShadCN.Button className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </ShadCN.Button>
  )
}
```

### 3. Document the Component

- [ ] Add to appropriate docs/components/*.md file
- [ ] Include usage examples
- [ ] Document all props and variants
- [ ] Add accessibility notes

### 4. Update CLAUDE.md

- [ ] Document new patterns
- [ ] Update component counts
- [ ] Note any architectural changes

---

## Common Mistakes

Avoid these **common pitfalls**.

### ❌ Breaking Component Hierarchy

```tsx
// ❌ Bad: Using shadcn directly
import { Button } from '@/components/ui/button'
<Button>Click me</Button>
```

### ❌ Inconsistent Spacing

```tsx
// ❌ Bad: Custom margins
<div className="mb-4 mt-8">
  <h1 className="mb-2">Title</h1>
</div>
```

### ❌ Non-Semantic HTML

```tsx
// ❌ Bad: Divs everywhere
<div className="text-3xl font-bold">Title</div>
<div onClick={handleClick}>Button</div>
```

### ❌ Hardcoded Colors

```tsx
// ❌ Bad: Custom colors
<div className="bg-blue-500 text-yellow-300">
  Custom styling
</div>
```

### ✅ Correct Alternatives

```tsx
// ✅ Good: Following guidelines
import { Button } from '@/app/components/ui/button'
import { Heading } from '@/app/components/ui/heading'
import { Section } from '@/app/components/core/section'

<Section spacing="lg">
  <Heading level={1}>Title</Heading>
  <Button style="dark" onClick={handleClick}>
    Click me
  </Button>
</Section>
```

---

## Summary Checklist

When using Notto components:

- [ ] **Hierarchy**: Use brand components, not shadcn directly
- [ ] **Imports**: Use absolute imports (`@/app/components/...`)
- [ ] **Layout**: Use Section for all spacing and layout
- [ ] **Semantics**: Proper heading hierarchy and HTML structure  
- [ ] **Colors**: Use component variants, not custom colors
- [ ] **Accessibility**: Include labels, ARIA, and keyboard support
- [ ] **Performance**: Optimize imports and memoize when needed
- [ ] **Naming**: kebab-case files, PascalCase components
- [ ] **Documentation**: Update docs for new patterns

Following these guidelines ensures **consistent**, **accessible**, and **maintainable** component usage across your application.