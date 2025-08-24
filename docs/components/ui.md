# UI Components

Interface elements and interactive components built on shadcn/ui primitives with Notto branding.

## Button

**Interactive button component** with multiple styles and sizes.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Button content |
| `variant` | `'default' \| 'ghost' \| 'outline'` | `'default'` | shadcn variant |
| `size` | `'sm' \| 'lg' \| 'default' \| 'icon'` | `'default'` | Button size |
| `style` | `'light' \| 'colored' \| 'dark'` | `'colored'` | Notto style variant |
| `className` | `string` | `''` | Additional CSS classes |
| `onClick` | `() => void` | - | Click handler |

### Usage

```tsx
import { Button } from '@/app/components/ui/button'

// Primary button
<Button size="lg" style="dark">
  INIT_SYSTEM
</Button>

// Secondary button
<Button size="lg" variant="outline" style="light">
  VIEW_MODULES
</Button>

// Small button
<Button size="sm" style="colored">
  SUBMIT
</Button>
```

### Style Variants

- **light**: Transparent with hover effects
- **colored**: Amber to red gradient (default)
- **dark**: Solid dark background

### Size Variants

- **sm**: Small size (h-9, px-4, text-xs)
- **default**: Standard size (h-9, px-4, text-xs) 
- **lg**: Large size (h-12, px-8, text-base)
- **icon**: Square icon button

---

## Heading

**Semantic heading component** with 6 levels and accent variant.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Heading content |
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `1` | Heading level |
| `variant` | `'default' \| 'accent'` | `'default'` | Style variant |
| `className` | `string` | `''` | Additional CSS classes |

### Usage

```tsx
import { Heading } from '@/app/components/ui/heading'

// Main title
<Heading level={1}>NOTTO</Heading>

// Accent title  
<Heading level={1} variant="accent">COMPONENTS</Heading>

// Subtitle
<Heading level={2}>FUNCTIONAL_COMPONENTS</Heading>

// Caption
<Heading level={3}>BUILD_WITH_INTENTION.EXE</Heading>
```

### Level Styling

- **Level 1**: 7xl-9xl, main titles
- **Level 2**: lg-xl, subtitles  
- **Level 3**: sm, captions
- **Level 4**: 3xl-5xl, section titles
- **Level 5**: base, small headings
- **Level 6**: xs, micro headings

### Variant Styling

- **default**: Stone colors
- **accent**: Amber-600 color

---

## Badge

**Status and category indicator** with system styling.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Badge content |
| `variant` | `'default' \| 'secondary' \| 'destructive' \| 'outline'` | `'default'` | shadcn variant |
| `style` | `'default' \| 'system'` | `'default'` | Notto style |
| `className` | `string` | `''` | Additional CSS classes |

### Usage

```tsx
import { Badge } from '@/app/components/ui/badge'

// System badge
<Badge variant="outline" style="system">
  UI_SYSTEM
</Badge>

// Default badge
<Badge>NEW</Badge>
```

### Style Variants

- **default**: Standard badge styling
- **system**: Amber border and background with system colors

---

## Card

**Content container** with branded styling.

### Props

| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Card content |
| `className` | `string` | Additional CSS classes |

### Usage

```tsx
import { Card } from '@/app/components/ui/card'

<Card>
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</Card>
```

### Styling

- **Background**: Stone-100/900 with dark mode
- **Border**: Stone-200/800 borders
- **Radius**: Large rounded corners (3xl)
- **Shadow**: Elevated shadow effect
- **Padding**: Consistent internal spacing

---

## Alert

**Status messages and notifications** with branded styling.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Alert content |
| `variant` | `'default' \| 'destructive'` | `'default'` | shadcn variant |
| `style` | `'system' \| 'warning' \| 'success'` | `'system'` | Notto style |
| `className` | `string` | `''` | Additional CSS classes |

### Usage

```tsx
import { Alert, AlertTitle, AlertDescription } from '@/app/components/ui/alert'

<Alert style="system">
  <AlertTitle>SYSTEM_NOTIFICATION</AlertTitle>
  <AlertDescription>
    Component library initialized successfully.
  </AlertDescription>
</Alert>

<Alert style="warning">
  <AlertTitle>WARNING</AlertTitle>
  <AlertDescription>
    Please review your configuration.
  </AlertDescription>
</Alert>
```

### Style Variants

- **system**: Amber theme for system messages
- **warning**: Red theme for warnings  
- **success**: Green theme for success messages

---

## Input

**Text input field** with branded styling.

### Props

Extends all standard HTML input props plus:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'system'` | `'default'` | Style variant |

### Usage

```tsx
import { Input } from '@/app/components/ui/input'
import { Label } from '@/app/components/ui/label'

<Label htmlFor="username">USERNAME</Label>
<Input 
  id="username"
  type="text" 
  placeholder="ENTER_USERNAME"
  variant="system"
/>
```

### Variants

- **default**: Standard input styling
- **system**: Amber-themed system styling

---

## Label

**Form labels** with consistent branding.

### Props

Extends all standard HTML label props plus:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'system'` | `'default'` | Style variant |

### Usage

```tsx
import { Label } from '@/app/components/ui/label'

<Label htmlFor="email" variant="system">
  EMAIL_ADDRESS
</Label>
```

---

## Separator

**Visual dividers** with customizable styling.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'accent' \| 'custom'` | `'default'` | Style variant |
| `size` | `'sm' \| 'md' \| 'lg' \| 'full'` | `'full'` | Separator size |
| `className` | `string` | `''` | Additional CSS classes |

### Usage

```tsx
import { Separator } from '@/app/components/ui/separator'

// Full width separator
<Separator />

// Accent separator with custom size
<Separator variant="accent" size="lg" />
```

### Variants

- **default**: Subtle stone colors
- **accent**: Amber to red gradient
- **custom**: No default styling

### Sizes

- **sm**: 8px wide
- **md**: 12px wide  
- **lg**: 16px wide
- **full**: Full width (1px height)

---

## Dialog

**Modal dialogs** with branded styling.

### Components

- `Dialog` - Root dialog component
- `DialogTrigger` - Trigger button
- `DialogContent` - Modal content container
- `DialogHeader` - Header section
- `DialogTitle` - Dialog title
- `DialogDescription` - Dialog description
- `DialogFooter` - Footer section
- `DialogClose` - Close button

### Usage

```tsx
import { 
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from '@/app/components/ui/dialog'

<Dialog>
  <DialogTrigger asChild>
    <Button>OPEN_DIALOG</Button>
  </DialogTrigger>
  
  <DialogContent>
    <DialogHeader>
      <DialogTitle>CONFIRMATION</DialogTitle>
      <DialogDescription>
        Are you sure you want to proceed?
      </DialogDescription>
    </DialogHeader>
    
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">CANCEL</Button>
      </DialogClose>
      <Button style="dark">CONFIRM</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

---

## Tooltip

**Contextual help** with monospace styling.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Trigger element |
| `content` | `ReactNode` | - | Tooltip content |
| `side` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'top'` | Tooltip position |
| `className` | `string` | `''` | Additional CSS classes |

### Usage

```tsx
import { Tooltip } from '@/app/components/ui/tooltip'

<Tooltip content="SYSTEM_INITIALIZE" side="bottom">
  <Button>INIT</Button>
</Tooltip>
```

---

## Metric

**Statistics display** with branded typography.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string \| number` | - | Metric value |
| `label` | `string` | - | Metric label |
| `color` | `'amber' \| 'red' \| 'stone'` | `'stone'` | Value color |
| `className` | `string` | `''` | Additional CSS classes |

### Usage

```tsx
import { Metric } from '@/app/components/ui/metric'

<Metric 
  value="47" 
  label="MODULES_LOADED" 
  color="amber" 
/>

<Metric 
  value="100%" 
  label="ACCESSIBILITY" 
  color="red" 
/>
```

### Features

- **Fixed Width**: 48 (12rem) for consistent alignment
- **Large Values**: 5xl font size for emphasis
- **Small Labels**: Uppercase, tracked labels
- **Color Variants**: Amber, red, or stone themes

---

## Text

**Branded text component** with consistent typography and variant support.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Text content |
| `variant` | `'small' \| 'body'` | `'small'` | Text variant |
| `className` | `string` | `''` | Additional CSS classes |

### Usage

```tsx
import { Text } from '@/app/components/ui/text'

// Small text (labels, captions)
<Text>SYSTEM_STATUS_ACTIVE</Text>

// Body text (paragraphs, descriptions)
<Text variant="body">
  This is regular body text for descriptions and content.
</Text>
```

### Variants

- **small**: Extra small (xs), uppercase, wide tracking, muted colors
- **body**: Small (sm), monospace, regular case for readable content

### Styling

- **Font**: Monospace (Geist Mono)
- **small**: xs, uppercase, tracked, stone-500/400
- **body**: sm, regular case, monospace

---

## List

**Semantic list component** with consistent styling and spacing.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | List items |
| `variant` | `'bullet' \| 'numbered'` | `'bullet'` | List type |
| `spacing` | `'sm' \| 'md' \| 'lg'` | `'md'` | Spacing between items |
| `className` | `string` | `''` | Additional CSS classes |

### Usage

```tsx
import { List, ListItem } from '@/app/components/ui/list'

// Bullet list
<List spacing="md">
  <ListItem>First item</ListItem>
  <ListItem>Second item</ListItem>
  <ListItem>Third item</ListItem>
</List>

// Numbered list
<List variant="numbered" spacing="lg">
  <ListItem>Step one</ListItem>
  <ListItem>Step two</ListItem>
  <ListItem>Step three</ListItem>
</List>
```

### Features

- **Semantic HTML**: Uses native `<ul>` and `<ol>` elements
- **Native Styling**: Uses `list-disc` and `list-decimal`
- **Accessible**: Screen reader friendly
- **Consistent**: Monospace font with proper spacing

---

## ListItem

**Individual list item** component for use within List.

### Props

| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Item content |
| `className` | `string` | Additional CSS classes |

### Usage

```tsx
import { ListItem } from '@/app/components/ui/list'

<ListItem>
  <strong>Universal Design:</strong> Components that work for any application domain
</ListItem>
```

---

## CodeBlock

**Code display component** with consistent dark theme styling.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `string` | - | Code content |
| `className` | `string` | `''` | Additional CSS classes |

### Usage

```tsx
import { CodeBlock } from '@/app/components/ui/code-block'

<CodeBlock>{`import { Button } from '@/app/components/ui/button'

function MyComponent() {
  return (
    <Button size="lg" style="dark">
      CLICK_ME
    </Button>
  )
}`}</CodeBlock>
```

### Features

- **Dark Theme**: Stone-900/950 background with light text
- **Monospace**: Uses Geist Mono font
- **Scrollable**: Horizontal scroll for long lines
- **Rounded**: Consistent border radius (xl)
- **Pre-formatted**: Preserves whitespace and formatting

---

## Import Paths

All UI components use absolute imports:

```tsx
import { Button } from '@/app/components/ui/button'
import { Heading } from '@/app/components/ui/heading'
import { Card } from '@/app/components/ui/card'
import { Text } from '@/app/components/ui/text'
import { List, ListItem } from '@/app/components/ui/list'
import { CodeBlock } from '@/app/components/ui/code-block'
// ... etc
```

## Design System

UI components follow these design principles:

### Typography
- **Font Family**: Geist Mono (monospace)
- **Text Transform**: Uppercase
- **Letter Spacing**: Wide tracking
- **Font Weight**: Light to medium

### Colors
- **Base**: Stone grays (50-950)
- **Accent**: Amber (600) to Red (500)
- **States**: Hover and focus states
- **Dark Mode**: Automatic color inversion

### Spacing
- **Internal**: Consistent padding scales
- **External**: Use Section component spacing
- **Alignment**: Center-aligned by default

### Interaction
- **Hover**: Smooth color transitions
- **Focus**: Visible focus indicators
- **Active**: Pressed states
- **Disabled**: Reduced opacity

### Accessibility
- **ARIA Labels**: Proper labeling
- **Keyboard**: Full keyboard navigation
- **Screen Readers**: Semantic structure
- **Contrast**: WCAG AA compliance

## Component Combinations

### Form Example

```tsx
import { Section } from '@/app/components/core/section'
import { Heading } from '@/app/components/ui/heading'
import { Label } from '@/app/components/ui/label'
import { Input } from '@/app/components/ui/input'
import { Button } from '@/app/components/ui/button'

<Section spacing="lg">
  <Heading level={2}>CONTACT_FORM</Heading>
  
  <Section spacing="md">
    <Label htmlFor="name">NAME</Label>
    <Input id="name" placeholder="ENTER_NAME" />
  </Section>
  
  <Section spacing="md">
    <Label htmlFor="email">EMAIL</Label>
    <Input id="email" type="email" placeholder="ENTER_EMAIL" />
  </Section>
  
  <Button size="lg" style="dark">
    SUBMIT_FORM
  </Button>
</Section>
```

### Stats Dashboard Example

```tsx
import { Section } from '@/app/components/core/section'
import { Heading } from '@/app/components/ui/heading'
import { Metric } from '@/app/components/ui/metric'
import { Card } from '@/app/components/ui/card'

<Card>
  <Section spacing="lg">
    <Heading level={3}>SYSTEM_METRICS</Heading>
    
    <Section direction="horizontal" spacing="lg">
      <Metric value="47" label="COMPONENTS" color="amber" />
      <Metric value="100%" label="UPTIME" color="red" />
      <Metric value="2.1s" label="LOAD_TIME" color="stone" />
    </Section>
  </Section>
</Card>
```