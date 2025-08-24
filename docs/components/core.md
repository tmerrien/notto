# Core Components

Core building blocks that provide the foundation for all other components in the Notto system.

## Section

**The universal layout component** - handles spacing, direction, alignment, and container logic.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Content to render |
| `direction` | `'vertical' \| 'horizontal'` | `'vertical'` | Layout direction |
| `spacing` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Gap between children |
| `alignment` | `'start' \| 'center' \| 'end' \| 'stretch'` | `'start'` | Cross-axis alignment |
| `container` | `boolean` | `false` | Apply container max-width and padding |
| `className` | `string` | `''` | Additional CSS classes |

### Usage

```tsx
import { Section } from '@/app/components/core/section'

// Basic vertical layout
<Section spacing="lg">
  <h1>Title</h1>
  <p>Content</p>
</Section>

// Horizontal layout with centering
<Section direction="horizontal" alignment="center" spacing="sm">
  <Button>Primary</Button>
  <Button variant="outline">Secondary</Button>
</Section>

// Container with max-width
<Section container spacing="xl">
  <YourPageContent />
</Section>
```

### Spacing Scale

- `none` - No gap
- `xs` - 0.5rem (8px)
- `sm` - 1rem (16px)  
- `md` - 1.5rem (24px)
- `lg` - 2rem (32px)
- `xl` - 3rem (48px)

### Best Practices

- **Use Section for all layouts** - Don't use raw divs with flexbox
- **Container at page level** - Only use `container` prop on the outermost Section
- **Semantic nesting** - Section → Section → Components
- **Consistent spacing** - Use the spacing scale instead of custom margins

---

## Link

**Branded link component** with consistent styling and behavior.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | - | Link destination |
| `children` | `ReactNode` | - | Link content |
| `className` | `string` | `''` | Additional CSS classes |

### Usage

```tsx
import { Link } from '@/app/components/core/link'

// Basic link
<Link href="/about">About Us</Link>

// With custom styling
<Link href="/docs" className="text-amber-600">
  Documentation
</Link>

// External link
<Link href="https://github.com/your-repo">
  GitHub
</Link>
```

### Styling

- **Font**: Monospace (Geist Mono)
- **Transform**: Uppercase
- **Tracking**: Wide letter spacing
- **Hover**: Smooth color transitions
- **Focus**: Accessible focus states

---

## Logo

**Branded logo component** with consistent typography and optional linking.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Logo text content |
| `href` | `string` | - | Optional link destination |
| `className` | `string` | `''` | Additional CSS classes |

### Usage

```tsx
import { Logo } from '@/app/components/core/logo'

// Text logo
<Logo>NOTTO</Logo>

// Linked logo (typically in header)
<Logo href="/">NOTTO</Logo>

// With custom styling
<Logo className="text-2xl">
  YOUR_BRAND
</Logo>
```

### Design Guidelines

- **Typography**: Bold, monospace, uppercase
- **Tracking**: Extra wide letter spacing
- **Usage**: Consistent across all layouts
- **Linking**: Include href for navigation logos

---

## Import Paths

All core components use absolute imports:

```tsx
import { Section } from '@/app/components/core/section'
import { Link } from '@/app/components/core/link'  
import { Logo } from '@/app/components/core/logo'
```

## Design Philosophy

Core components follow these principles:

1. **Composition over Configuration** - Flexible building blocks
2. **Semantic HTML** - Proper accessibility and structure
3. **Consistent API** - Similar prop patterns across components
4. **Minimal but Powerful** - Essential features without bloat
5. **SwiftUI-inspired** - Declarative layout patterns

## Examples

### Page Layout Pattern

```tsx
import { Section } from '@/app/components/core/section'
import { Heading } from '@/app/components/ui/heading'
import { Button } from '@/app/components/ui/button'

export default function MyPage() {
  return (
    <Section container spacing="xl">
      {/* Content Section */}
      <Section spacing="lg">
        <Heading level={1}>Page Title</Heading>
        <Heading level={2}>Subtitle goes here</Heading>
      </Section>

      {/* Actions Section */}
      <Section direction="horizontal" spacing="sm">
        <Button size="lg" style="dark">Primary Action</Button>
        <Button size="lg" variant="outline">Secondary</Button>
      </Section>
    </Section>
  )
}
```

### Navigation Pattern

```tsx
import { Section } from '@/app/components/core/section'
import { Logo } from '@/app/components/core/logo'
import { Link } from '@/app/components/core/link'

function Navigation() {
  return (
    <Section direction="horizontal" alignment="center" spacing="lg">
      <Logo href="/">NOTTO</Logo>
      
      <Section direction="horizontal" spacing="md">
        <Link href="/components">Components</Link>
        <Link href="/examples">Examples</Link>
        <Link href="/docs">Docs</Link>
      </Section>
    </Section>
  )
}