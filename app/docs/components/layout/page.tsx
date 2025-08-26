import { Section } from '@/app/components/core/section'
import { Heading } from '@/app/components/ui/heading'
import { Card } from '@/app/components/ui/card'
import { Badge } from '@/app/components/ui/badge'
import { Link } from '@/app/components/core/link'
import { Button } from '@/app/components/ui/button'
import { Separator } from '@/app/components/ui/separator'
import { Background } from '@/app/components/layout/background'
import { CodeBlock } from '@/app/components/ui/code-block'
import { Table, TableHeader, TableBody, TableRow, TableHeaderCell, TableCell } from '@/app/components/core/table'

export default function LayoutDocsPage() {
  return (
    <Section container spacing="xl">
      <Background />
      
      {/* Header */}
      <Section spacing="lg">
        <Badge variant="outline" style="system">
          LAYOUT_COMPONENTS
        </Badge>
        
        <Section spacing="md">
          <Heading level={1}>PAGE</Heading>
          <Heading level={1} variant="accent">STRUCTURE</Heading>
        </Section>
        
        <Separator variant="accent" size="lg" />
        
        <Section spacing="sm" className="max-w-3xl">
          <Heading level={2}>STRUCTURAL_COMPONENTS</Heading>
          <Heading level={3}>HEADER_FOOTER_CONTENT.EXE</Heading>
        </Section>
      </Section>

      {/* Layout Component */}
      <Section spacing="lg">
        <Card>
          <Section spacing="lg">
            <Heading level={3}>LAYOUT</Heading>
            <Heading level={4}>Root Application Wrapper</Heading>
            
            <Section spacing="md" className="font-mono text-sm text-stone-700 dark:text-stone-300">
              <p>
                The <strong>Layout</strong> component provides the fundamental HTML structure 
                and theme management for the entire application.
              </p>
            </Section>

            <Section spacing="md">
              <Heading level={5}>USAGE_EXAMPLE</Heading>
              <CodeBlock>{`import { Layout } from '@/app/components/layout/layout'
import { Header } from '@/app/components/layout/header'
import { Content } from '@/app/components/layout/content'
import { Footer } from '@/app/components/layout/footer'

export default function RootLayout({ children }) {
  return (
    <Layout>
      <Header>
        <Logo>YOUR_BRAND</Logo>
        <Nav>...</Nav>
        <Actions>...</Actions>
      </Header>
      
      <Content>
        {children}
      </Content>
      
      <Footer>...</Footer>
    </Layout>
  )
}`}</CodeBlock>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Header Component */}
      <Section spacing="lg">
        <Card>
          <Section spacing="lg">
            <Heading level={3}>HEADER</Heading>
            <Heading level={4}>Top Navigation Container</Heading>
            
            <Section spacing="md" className="font-mono text-sm text-stone-700 dark:text-stone-300">
              <p>
                The <strong>Header</strong> component provides a consistent top navigation 
                area with logo, navigation links, and action buttons.
              </p>
            </Section>

            <Section spacing="md">
              <Heading level={5}>USAGE_EXAMPLE</Heading>
              <CodeBlock>{`import { Header } from '@/app/components/layout/header'
import { Logo } from '@/app/components/core/logo'
import { Nav } from '@/app/components/layout/nav'
import { NavLink } from '@/app/components/layout/nav-link'
import { Actions } from '@/app/components/layout/actions'

<Header>
  <Logo href="/">NOTTO</Logo>
  
  <Nav>
    <NavLink href="/docs">OVERVIEW</NavLink>
    <NavLink href="/components">MODULES</NavLink>
  </Nav>
  
  <Actions>
    <Button variant="ghost">GITHUB</Button>
    <Button>GET_STARTED</Button>
  </Actions>
</Header>`}</CodeBlock>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Navigation Components */}
      <Section spacing="lg">
        <Card>
          <Section spacing="lg">
            <Heading level={3}>NAV & NAVLINK</Heading>
            <Heading level={4}>Navigation Menu System</Heading>
            
            <Section spacing="md" className="font-mono text-sm text-stone-700 dark:text-stone-300">
              <p>
                The <strong>Nav</strong> and <strong>NavLink</strong> components work together 
                to provide accessible, keyboard-navigable menu systems.
              </p>
            </Section>

            <Section spacing="md">
              <Heading level={5}>USAGE_EXAMPLE</Heading>
              <CodeBlock>{`import { Nav } from '@/app/components/layout/nav'
import { NavLink } from '@/app/components/layout/nav-link'

<Nav>
  <NavLink href="/docs">DOCUMENTATION</NavLink>
  <NavLink href="/components">COMPONENTS</NavLink>
  <NavLink href="/guides">GUIDES</NavLink>
</Nav>`}</CodeBlock>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Content Component */}
      <Section spacing="lg">
        <Card>
          <Section spacing="lg">
            <Heading level={3}>CONTENT</Heading>
            <Heading level={4}>Main Content Area</Heading>
            
            <Section spacing="md" className="font-mono text-sm text-stone-700 dark:text-stone-300">
              <p>
                The <strong>Content</strong> component provides the main content area 
                with proper semantic HTML and accessibility features.
              </p>
            </Section>

            <Section spacing="md">
              <Heading level={5}>USAGE_EXAMPLE</Heading>
              <CodeBlock>{`import { Content } from '@/app/components/layout/content'

<Content>
  {children}
</Content>`}</CodeBlock>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Footer Components */}
      <Section spacing="lg">
        <Card>
          <Section spacing="lg">
            <Heading level={3}>FOOTER</Heading>
            <Heading level={4}>Site Footer System</Heading>
            
            <Section spacing="md" className="font-mono text-sm text-stone-700 dark:text-stone-300">
              <p>
                The <strong>Footer</strong> system includes multiple components for 
                organizing links, legal information, and site navigation.
              </p>
            </Section>

            <Section spacing="md">
              <Heading level={5}>FOOTER_COMPONENTS</Heading>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell>COMPONENT</TableHeaderCell>
                    <TableHeaderCell>PURPOSE</TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Footer</TableCell>
                    <TableCell>Main footer container</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>FooterNav</TableCell>
                    <TableCell>Navigation columns container</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>FooterColumn</TableCell>
                    <TableCell>Individual link column</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>FooterLink</TableCell>
                    <TableCell>Footer navigation links</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>FooterLegal</TableCell>
                    <TableCell>Legal information section</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Section>

            <Section spacing="md">
              <Heading level={5}>USAGE_EXAMPLE</Heading>
              <CodeBlock>{`import { Footer } from '@/app/components/layout/footer'
import { FooterNav } from '@/app/components/layout/footer-nav'
import { FooterColumn } from '@/app/components/layout/footer-column'
import { FooterLink } from '@/app/components/layout/footer-link'

<Footer>
  <FooterNav>
    <FooterColumn title="PRODUCT">
      <FooterLink href="/docs">DOCUMENTATION</FooterLink>
      <FooterLink href="/components">COMPONENTS</FooterLink>
    </FooterColumn>
    
    <FooterColumn title="RESOURCES">
      <FooterLink href="/guides">GUIDES</FooterLink>
      <FooterLink href="/help">HELP</FooterLink>
    </FooterColumn>
  </FooterNav>
  
  <FooterLegal>
    <FooterInfo>
      <FooterText>© 2024 YOUR_COMPANY</FooterText>
    </FooterInfo>
  </FooterLegal>
</Footer>`}</CodeBlock>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Background Component */}
      <Section spacing="lg">
        <Card>
          <Section spacing="lg">
            <Heading level={3}>BACKGROUND</Heading>
            <Heading level={4}>Decorative Page Background</Heading>
            
            <Section spacing="md" className="font-mono text-sm text-stone-700 dark:text-stone-300">
              <p>
                The <strong>Background</strong> component adds subtle visual texture 
                and branding to page layouts.
              </p>
            </Section>

            <Section spacing="md">
              <Heading level={5}>USAGE_EXAMPLE</Heading>
              <CodeBlock>{`import { Background } from '@/app/components/layout/background'

<Section container spacing="xl">
  <Background />
  
  {/* Your page content */}
  <Heading level={1}>Page Title</Heading>
</Section>`}</CodeBlock>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Complete Layout Example */}
      <Section spacing="lg">
        <Card>
          <Section spacing="lg">
            <Heading level={3}>COMPLETE_LAYOUT_EXAMPLE</Heading>
            <Heading level={4}>Full Application Structure</Heading>
            
            <Section spacing="md">
              <CodeBlock>{`import { Layout } from '@/app/components/layout/layout'
import { Header } from '@/app/components/layout/header'
import { Logo } from '@/app/components/core/logo'
import { Nav } from '@/app/components/layout/nav'
import { NavLink } from '@/app/components/layout/nav-link'
import { Actions } from '@/app/components/layout/actions'
import { Content } from '@/app/components/layout/content'
import { Footer } from '@/app/components/layout/footer'
import { FooterNav } from '@/app/components/layout/footer-nav'
import { FooterColumn } from '@/app/components/layout/footer-column'
import { FooterLink } from '@/app/components/layout/footer-link'
import { Button } from '@/app/components/ui/button'

export default function RootLayout({ children }) {
  return (
    <Layout>
      <Header>
        <Logo href="/">NOTTO</Logo>

        <Nav>
          <NavLink href="/docs">OVERVIEW</NavLink>
          <NavLink href="/docs/components/ui">MODULES</NavLink>
          <NavLink href="/docs/components/core">CORE</NavLink>
          <NavLink href="/docs/components/layout">LAYOUT</NavLink>
        </Nav>

        <Actions>
          <Button variant="ghost" size="sm">GITHUB</Button>
          <Button size="sm">GET_STARTED</Button>
        </Actions>
      </Header>

      <Content>
        {children}
      </Content>

      <Footer>
        <FooterNav>
          <FooterColumn title="SYSTEM">
            <FooterLink href="#about">ABOUT_PROJECT</FooterLink>
            <FooterLink href="#blog">RELEASE_NOTES</FooterLink>
          </FooterColumn>

          <FooterColumn title="MODULES">
            <FooterLink href="/docs/components/ui">UI_COMPONENTS</FooterLink>
            <FooterLink href="/docs/components/core">CORE_COMPONENTS</FooterLink>
            <FooterLink href="/docs/components/layout">LAYOUT_COMPONENTS</FooterLink>
          </FooterColumn>
        </FooterNav>
      </Footer>
    </Layout>
  )
}`}</CodeBlock>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Navigation */}
      <Section spacing="lg">
        <Section direction="horizontal" spacing="sm">
          <Link href="/docs/components/ui">
            <Button size="lg" style="dark">
              UI_COMPONENTS
            </Button>
          </Link>
          <Link href="/docs">
            <Button size="lg" variant="outline" style="light">
              BACK_TO_DOCS
            </Button>
          </Link>
        </Section>
      </Section>
    </Section>
  )
}