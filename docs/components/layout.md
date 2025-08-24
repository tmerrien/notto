# Layout Components

Layout components handle page structure, navigation, and content organization.

## Layout

**Root HTML structure component** with fonts, metadata, and base styling.

### Props

| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Page content |

### Usage

```tsx
import { Layout } from '@/app/components/layout/layout'

// Used in root layout.tsx
export default function RootLayout({ children }) {
  return (
    <Layout>
      {children}
    </Layout>
  )
}
```

### Features

- **Fonts**: Geist Sans and Geist Mono with CSS variables
- **Metadata**: SEO-optimized title and description
- **Structure**: Semantic HTML with flex column layout
- **Background**: Stone-50 background color

---

## Header

**Page header container** with responsive layout.

### Props

| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Header content (Logo, Nav, Actions) |

### Usage

```tsx
import { Header } from '@/app/components/layout/header'
import { Logo } from '@/app/components/core/logo'
import { Nav } from '@/app/components/layout/nav'

<Header>
  <Logo href="/">NOTTO</Logo>
  <Nav>
    <NavLink href="/components">Components</NavLink>
    <NavLink href="/docs">Docs</NavLink>
  </Nav>
  <Actions>
    <Button size="sm" style="dark">Get Started</Button>
  </Actions>
</Header>
```

---

## Nav & NavLink

**Navigation menu** with branded link styling.

### Nav Props

| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Navigation links |

### NavLink Props

| Prop | Type | Description |
|------|------|-------------|
| `href` | `string` | Link destination |
| `children` | `ReactNode` | Link content |
| `className` | `string` | Additional CSS classes |

### Usage

```tsx
import { Nav, NavLink } from '@/app/components/layout/nav'

<Nav>
  <NavLink href="/components">MODULES</NavLink>
  <NavLink href="/examples">DEMOS</NavLink>  
  <NavLink href="/docs">DOCS</NavLink>
  <NavLink href="/templates">TEMPLATES</NavLink>
</Nav>
```

### Styling

- **Font**: Monospace, uppercase, wide tracking
- **Colors**: Stone-600 default, hover to stone-900
- **Responsive**: Automatically handles mobile layout

---

## Actions

**Header action container** for buttons and CTAs.

### Props

| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Action buttons |

### Usage

```tsx
import { Actions } from '@/app/components/layout/actions'
import { Button } from '@/app/components/ui/button'

<Actions>
  <Button variant="ghost" size="sm" style="light">
    GITHUB
  </Button>
  <Button size="sm" style="dark">
    INIT
  </Button>
</Actions>
```

---

## Content

**Main content wrapper** with padding and structure.

### Props

| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Page content |

### Usage

```tsx
import { Content } from '@/app/components/layout/content'

// Used in root layout.tsx
<Content>
  {children}
</Content>
```

### Features

- **Structure**: Semantic `<main>` element
- **Spacing**: Consistent padding and flex-grow
- **Responsive**: Adapts to different screen sizes

---

## Footer System

**Comprehensive footer** with navigation, legal, and branding sections.

### Footer

Main footer container.

```tsx
import { Footer } from '@/app/components/layout/footer'

<Footer>
  <FooterNav>
    {/* Navigation columns */}
  </FooterNav>
  <Separator />
  <FooterLegal>
    {/* Legal and copyright */}
  </FooterLegal>
</Footer>
```

### FooterNav

Navigation section with columns.

```tsx
import { FooterNav, FooterColumn } from '@/app/components/layout/footer'

<FooterNav>
  <FooterColumn title="SYSTEM">
    <FooterLink href="/about">ABOUT_PROJECT</FooterLink>
    <FooterLink href="/blog">RELEASE_NOTES</FooterLink>
  </FooterColumn>
  
  <FooterColumn title="RESOURCES">
    <FooterLink href="/docs">DOCUMENTATION</FooterLink>
    <FooterLink href="/guides">SETUP_GUIDES</FooterLink>
  </FooterColumn>
</FooterNav>
```

### FooterColumn

Column container with optional title.

| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Footer links |
| `title` | `string` | Optional column title |

### FooterLink

Branded footer link.

| Prop | Type | Description |
|------|------|-------------|
| `href` | `string` | Link destination |
| `children` | `ReactNode` | Link content |

### FooterLegal

Legal information section.

```tsx
import { 
  FooterLegal, 
  FooterInfo, 
  FooterLegalLinks 
} from '@/app/components/layout/footer'

<FooterLegal>
  <FooterInfo>
    <FooterText>VERSION_2024.1 / BUILD_STABLE</FooterText>
    <FooterText>© 2024 NOTTO_SYSTEMS</FooterText>
  </FooterInfo>
  
  <FooterLegalLinks>
    <FooterLink href="/privacy">PRIVACY_TERMS</FooterLink>
    <FooterLink href="/terms">USE_CONDITIONS</FooterLink>
  </FooterLegalLinks>
</FooterLegal>
```

### FooterText

Branded footer text component.

| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Text content |

---

## Background

**Decorative background elements** for visual interest.

### Usage

```tsx
import { Background } from '@/app/components/layout/background'

// Usually placed in page layout
<Section container>
  <Background />
  <YourPageContent />
</Section>
```

### Features

- **Positioning**: Absolute positioning with z-index
- **Elements**: Geometric circles and lines
- **Opacity**: Subtle, non-intrusive visual elements
- **Colors**: Amber/red gradient accents

---

## Complete Layout Example

```tsx
import { Layout } from '@/app/components/layout/layout'
import { Header } from '@/app/components/layout/header'
import { Content } from '@/app/components/layout/content'
import { Footer } from '@/app/components/layout/footer'
import { Logo } from '@/app/components/core/logo'
import { Nav, NavLink } from '@/app/components/layout/nav'
import { Actions } from '@/app/components/layout/actions'
import { Button } from '@/app/components/ui/button'

export default function RootLayout({ children }) {
  return (
    <Layout>
      <Header>
        <Logo href="/">NOTTO</Logo>
        
        <Nav>
          <NavLink href="/components">MODULES</NavLink>
          <NavLink href="/docs">DOCS</NavLink>
        </Nav>
        
        <Actions>
          <Button size="sm" style="dark">INIT</Button>
        </Actions>
      </Header>

      <Content>
        {children}
      </Content>

      <Footer>
        {/* Footer content */}
      </Footer>
    </Layout>
  )
}
```

## Import Paths

All layout components use absolute imports:

```tsx
import { Header } from '@/app/components/layout/header'
import { Nav, NavLink } from '@/app/components/layout/nav'
import { Footer, FooterColumn } from '@/app/components/layout/footer'
// ... etc
```

## Design Principles

1. **Semantic Structure** - Proper HTML5 semantic elements
2. **Responsive Design** - Mobile-first responsive behavior  
3. **Consistent Branding** - Unified typography and spacing
4. **Accessible Navigation** - ARIA labels and keyboard support
5. **Modular Composition** - Mix and match layout components