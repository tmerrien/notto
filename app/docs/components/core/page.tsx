import { Section } from '@/app/components/core/section'
import { Heading } from '@/app/components/ui/heading'
import { Card } from '@/app/components/ui/card'
import { Badge } from '@/app/components/ui/badge'
import { Link } from '@/app/components/core/link'
import { Button } from '@/app/components/ui/button'
import { Separator } from '@/app/components/ui/separator'
import { Background } from '@/app/components/layout/background'
import { Logo } from '@/app/components/core/logo'

export default function CoreDocsPage() {
  return (
    <Section container spacing="xl">
      <Background />
      
      {/* Header */}
      <Section spacing="lg">
        <Badge variant="outline" style="system">
          CORE_COMPONENTS
        </Badge>
        
        <Section spacing="md">
          <Heading level={1}>BUILDING</Heading>
          <Heading level={1} variant="accent">BLOCKS</Heading>
        </Section>
        
        <Separator variant="accent" size="lg" />
        
        <Section spacing="sm" className="max-w-3xl">
          <Heading level={2}>FOUNDATIONAL_COMPONENTS</Heading>
          <Heading level={3}>SECTION_LINK_LOGO.EXE</Heading>
        </Section>
      </Section>

      {/* Section Component */}
      <Section spacing="lg">
        <Card>
          <Section spacing="lg">
            <Heading level={3}>SECTION</Heading>
            <Heading level={4}>Universal Layout Component</Heading>
            
            <Section spacing="md" className="font-mono text-sm text-stone-700 dark:text-stone-300">
              <p>
                The <strong>Section</strong> component is the foundation of all layouts in Notto. 
                It handles spacing, direction, alignment, and container logic.
              </p>
            </Section>

            <Section spacing="md">
              <Heading level={5}>PROPS</Heading>
              <div className="overflow-x-auto">
                <table className="w-full font-mono text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-stone-200 dark:border-stone-800">
                      <th className="text-left p-3 text-stone-900 dark:text-stone-100">PROP</th>
                      <th className="text-left p-3 text-stone-900 dark:text-stone-100">TYPE</th>
                      <th className="text-left p-3 text-stone-900 dark:text-stone-100">DEFAULT</th>
                      <th className="text-left p-3 text-stone-900 dark:text-stone-100">DESCRIPTION</th>
                    </tr>
                  </thead>
                  <tbody className="text-stone-600 dark:text-stone-400">
                    <tr className="border-b border-stone-100 dark:border-stone-900">
                      <td className="p-3">direction</td>
                      <td className="p-3">'vertical' | 'horizontal'</td>
                      <td className="p-3">'vertical'</td>
                      <td className="p-3">Layout direction</td>
                    </tr>
                    <tr className="border-b border-stone-100 dark:border-stone-900">
                      <td className="p-3">spacing</td>
                      <td className="p-3">'xs' | 'sm' | 'md' | 'lg' | 'xl'</td>
                      <td className="p-3">'md'</td>
                      <td className="p-3">Gap between children</td>
                    </tr>
                    <tr className="border-b border-stone-100 dark:border-stone-900">
                      <td className="p-3">alignment</td>
                      <td className="p-3">'start' | 'center' | 'end'</td>
                      <td className="p-3">'start'</td>
                      <td className="p-3">Cross-axis alignment</td>
                    </tr>
                    <tr className="border-b border-stone-100 dark:border-stone-900">
                      <td className="p-3">container</td>
                      <td className="p-3">boolean</td>
                      <td className="p-3">false</td>
                      <td className="p-3">Apply container max-width</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Section>

            <Section spacing="md">
              <Heading level={5}>USAGE_EXAMPLE</Heading>
              <div className="bg-stone-900 dark:bg-stone-950 text-stone-100 p-6 rounded-xl font-mono text-sm overflow-x-auto">
                <pre>{`import { Section } from '@/app/components/core/section'

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
</Section>`}</pre>
              </div>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Link Component */}
      <Section spacing="lg">
        <Card>
          <Section spacing="lg">
            <Heading level={3}>LINK</Heading>
            <Heading level={4}>Branded Navigation Component</Heading>
            
            <Section spacing="md" className="font-mono text-sm text-stone-700 dark:text-stone-300">
              <p>
                The <strong>Link</strong> component provides consistent branded styling 
                for all navigation elements.
              </p>
            </Section>

            <Section spacing="md">
              <Heading level={5}>USAGE_EXAMPLE</Heading>
              <div className="bg-stone-900 dark:bg-stone-950 text-stone-100 p-6 rounded-xl font-mono text-sm overflow-x-auto">
                <pre>{`import { Link } from '@/app/components/core/link'

// Basic link
<Link href="/about">ABOUT_US</Link>

// External link
<Link href="https://github.com/your-repo">
  GITHUB_REPO
</Link>`}</pre>
              </div>
            </Section>

            <Section spacing="md">
              <Heading level={5}>LIVE_EXAMPLE</Heading>
              <Section direction="horizontal" spacing="sm">
                <Link href="/docs">DOCUMENTATION</Link>
                <Link href="/">BACK_TO_HOME</Link>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Logo Component */}
      <Section spacing="lg">
        <Card>
          <Section spacing="lg">
            <Heading level={3}>LOGO</Heading>
            <Heading level={4}>Branded Logo Component</Heading>
            
            <Section spacing="md" className="font-mono text-sm text-stone-700 dark:text-stone-300">
              <p>
                The <strong>Logo</strong> component provides consistent typography 
                and optional linking for brand identity.
              </p>
            </Section>

            <Section spacing="md">
              <Heading level={5}>USAGE_EXAMPLE</Heading>
              <div className="bg-stone-900 dark:bg-stone-950 text-stone-100 p-6 rounded-xl font-mono text-sm overflow-x-auto">
                <pre>{`import { Logo } from '@/app/components/core/logo'

// Text logo
<Logo>NOTTO</Logo>

// Linked logo (typically in header)
<Logo href="/">NOTTO</Logo>`}</pre>
              </div>
            </Section>

            <Section spacing="md">
              <Heading level={5}>LIVE_EXAMPLE</Heading>
              <Section direction="horizontal" spacing="lg">
                <Logo>NOTTO</Logo>
                <Logo href="/">YOUR_BRAND</Logo>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Complete Example */}
      <Section spacing="lg">
        <Card>
          <Section spacing="lg">
            <Heading level={3}>COMPLETE_EXAMPLE</Heading>
            <Heading level={4}>Page Layout Pattern</Heading>
            
            <Section spacing="md">
              <div className="bg-stone-900 dark:bg-stone-950 text-stone-100 p-6 rounded-xl font-mono text-sm overflow-x-auto">
                <pre>{`import { Section } from '@/app/components/core/section'
import { Logo } from '@/app/components/core/logo'
import { Link } from '@/app/components/core/link'
import { Heading } from '@/app/components/ui/heading'
import { Button } from '@/app/components/ui/button'

export default function MyPage() {
  return (
    <Section container spacing="xl">
      {/* Header */}
      <Section direction="horizontal" alignment="center" spacing="lg">
        <Logo href="/">NOTTO</Logo>
        
        <Section direction="horizontal" spacing="md">
          <Link href="/components">COMPONENTS</Link>
          <Link href="/docs">DOCS</Link>
        </Section>
      </Section>

      {/* Content */}
      <Section spacing="lg">
        <Heading level={1}>Page Title</Heading>
        <Heading level={2}>Subtitle goes here</Heading>
      </Section>

      {/* Actions */}
      <Section direction="horizontal" spacing="sm">
        <Button size="lg" style="dark">Primary Action</Button>
        <Button size="lg" variant="outline">Secondary</Button>
      </Section>
    </Section>
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
          <Link href="/docs/components/layout">
            <Button size="lg" style="dark">
              LAYOUT_COMPONENTS
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