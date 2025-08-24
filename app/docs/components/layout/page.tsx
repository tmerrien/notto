import { Section } from '@/app/components/core/section'
import { Heading } from '@/app/components/ui/heading'
import { Card } from '@/app/components/ui/card'
import { Badge } from '@/app/components/ui/badge'
import { Link } from '@/app/components/core/link'
import { Button } from '@/app/components/ui/button'
import { Separator } from '@/app/components/ui/separator'
import { Background } from '@/app/components/layout/background'

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
              <div className="bg-stone-900 dark:bg-stone-950 text-stone-100 p-6 rounded-xl font-mono text-sm overflow-x-auto">
                <pre>{`import { Layout } from '@/app/components/layout/layout'
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
}`}</pre>
              </div>
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
              <div className="bg-stone-900 dark:bg-stone-950 text-stone-100 p-6 rounded-xl font-mono text-sm overflow-x-auto">
                <pre>{`import { Header } from '@/app/components/layout/header'
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
</Header>`}</pre>
              </div>
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
              <div className="bg-stone-900 dark:bg-stone-950 text-stone-100 p-6 rounded-xl font-mono text-sm overflow-x-auto">
                <pre>{`import { Nav } from '@/app/components/layout/nav'
import { NavLink } from '@/app/components/layout/nav-link'

<Nav>
  <NavLink href="/docs">DOCUMENTATION</NavLink>
  <NavLink href="/components">COMPONENTS</NavLink>
  <NavLink href="/guides">GUIDES</NavLink>
</Nav>`}</pre>
              </div>
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
              <div className="bg-stone-900 dark:bg-stone-950 text-stone-100 p-6 rounded-xl font-mono text-sm overflow-x-auto">
                <pre>{`import { Content } from '@/app/components/layout/content'

<Content>
  {children}
</Content>`}</pre>
              </div>
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
              <div className="overflow-x-auto">
                <table className="w-full font-mono text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-stone-200 dark:border-stone-800">
                      <th className="text-left p-3 text-stone-900 dark:text-stone-100">COMPONENT</th>
                      <th className="text-left p-3 text-stone-900 dark:text-stone-100">PURPOSE</th>
                    </tr>
                  </thead>
                  <tbody className="text-stone-600 dark:text-stone-400">
                    <tr className="border-b border-stone-100 dark:border-stone-900">
                      <td className="p-3">Footer</td>
                      <td className="p-3">Main footer container</td>
                    </tr>
                    <tr className="border-b border-stone-100 dark:border-stone-900">
                      <td className="p-3">FooterNav</td>
                      <td className="p-3">Navigation columns container</td>
                    </tr>
                    <tr className="border-b border-stone-100 dark:border-stone-900">
                      <td className="p-3">FooterColumn</td>
                      <td className="p-3">Individual link column</td>
                    </tr>
                    <tr className="border-b border-stone-100 dark:border-stone-900">
                      <td className="p-3">FooterLink</td>
                      <td className="p-3">Footer navigation links</td>
                    </tr>
                    <tr className="border-b border-stone-100 dark:border-stone-900">
                      <td className="p-3">FooterLegal</td>
                      <td className="p-3">Legal information section</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Section>

            <Section spacing="md">
              <Heading level={5}>USAGE_EXAMPLE</Heading>
              <div className="bg-stone-900 dark:bg-stone-950 text-stone-100 p-6 rounded-xl font-mono text-sm overflow-x-auto">
                <pre>{`import { Footer } from '@/app/components/layout/footer'
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
</Footer>`}</pre>
              </div>
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
              <div className="bg-stone-900 dark:bg-stone-950 text-stone-100 p-6 rounded-xl font-mono text-sm overflow-x-auto">
                <pre>{`import { Background } from '@/app/components/layout/background'

<Section container spacing="xl">
  <Background />
  
  {/* Your page content */}
  <Heading level={1}>Page Title</Heading>
</Section>`}</pre>
              </div>
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
              <div className="bg-stone-900 dark:bg-stone-950 text-stone-100 p-6 rounded-xl font-mono text-sm overflow-x-auto">
                <pre>{`import { Layout } from '@/app/components/layout/layout'
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
}`}</pre>
              </div>
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