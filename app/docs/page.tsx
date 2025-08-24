import { Section } from '@/app/components/core/section'
import { Heading } from '@/app/components/ui/heading'
import { Card } from '@/app/components/ui/card'
import { Badge } from '@/app/components/ui/badge'
import { Link } from '@/app/components/core/link'
import { Button } from '@/app/components/ui/button'
import { Separator } from '@/app/components/ui/separator'
import { Background } from '@/app/components/layout/background'
import { List, ListItem } from '@/app/components/ui/list'
import { Text } from '@/app/components/ui/text'
import { CodeBlock } from '@/app/components/ui/code-block'

export default function DocsPage() {
  return (
    <Section container spacing="xl">
      <Background />
      
      {/* Header */}
      <Section spacing="lg">
        <Badge variant="outline" style="system">
          DOCUMENTATION
        </Badge>
        
        <Section spacing="md">
          <Heading level={1}>NOTTO</Heading>
          <Heading level={1} variant="accent">COMPONENTS</Heading>
        </Section>
        
        <Separator variant="accent" size="lg" />
        
        <Section spacing="sm" className="max-w-3xl">
          <Heading level={2}>UNIVERSAL UI COMPONENT LIBRARY</Heading>
          <Heading level={3}>BUILT_ON_SHADCN_PRIMITIVES.EXE</Heading>
        </Section>
      </Section>

      {/* Overview */}
      <Section spacing="lg">
        <Card>
          <Section spacing="lg">
            <Heading level={3}>PROJECT_OVERVIEW</Heading>
            
            <Section spacing="md" className="text-stone-700 dark:text-stone-300 leading-relaxed">
              <Text variant="body">
                <strong>Notto</strong> is a comprehensive Next.js component library built on shadcn/ui, 
                designed for building any type of application interface with clean, 
                technical aesthetics.
              </Text>
              
              <Section spacing="sm">
                <Heading level={4}>GOALS</Heading>
                <List spacing="md">
                  <ListItem><strong>Universal Design:</strong> Components that work for any application domain</ListItem>
                  <ListItem><strong>Highly Composable:</strong> Building blocks that combine for complex interfaces</ListItem>
                  <ListItem><strong>Customizable Theming:</strong> Easy to adapt to different brand requirements</ListItem>
                  <ListItem><strong>Maximum Reusability:</strong> Layered architecture for optimal component reuse</ListItem>
                </List>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Architecture */}
      <Section spacing="lg">
        <Heading level={3}>COMPONENT_ARCHITECTURE</Heading>
        
        <Section direction="horizontal" spacing="lg">
          <Card>
            <Section spacing="md">
              <Badge style="system">CORE</Badge>
              <Heading level={4}>Building Blocks</Heading>
              <List spacing="sm" className="text-stone-600 dark:text-stone-400">
                <ListItem>Section (Layout)</ListItem>
                <ListItem>Link (Navigation)</ListItem>
                <ListItem>Logo (Branding)</ListItem>
              </List>
              <Link href="/docs/components/core">
                <Button size="sm" style="light">VIEW_CORE_DOCS</Button>
              </Link>
            </Section>
          </Card>

          <Card>
            <Section spacing="md">
              <Badge style="system">LAYOUT</Badge>
              <Heading level={4}>Page Structure</Heading>
              <List spacing="sm" className="text-stone-600 dark:text-stone-400">
                <ListItem>Header & Footer</ListItem>
                <ListItem>Navigation</ListItem>
                <ListItem>Content Areas</ListItem>
              </List>
              <Link href="/docs/components/layout">
                <Button size="sm" style="light">VIEW_LAYOUT_DOCS</Button>
              </Link>
            </Section>
          </Card>

          <Card>
            <Section spacing="md">
              <Badge style="system">UI</Badge>
              <Heading level={4}>Interface Elements</Heading>
              <List spacing="sm" className="text-stone-600 dark:text-stone-400">
                <ListItem>Buttons & Forms</ListItem>
                <ListItem>Cards & Modals</ListItem>
                <ListItem>Typography</ListItem>
              </List>
              <Link href="/docs/components/ui">
                <Button size="sm" style="light">VIEW_UI_DOCS</Button>
              </Link>
            </Section>
          </Card>
        </Section>
      </Section>

      {/* Component Routing Architecture */}
      <Section spacing="lg">
        <Card>
          <Section spacing="lg">
            <Heading level={3}>ROUTING_ARCHITECTURE</Heading>
            <Heading level={4}>Multi-Layer Component System</Heading>
            
            <Section spacing="md" className="text-stone-700 dark:text-stone-300 leading-relaxed">
              <Text variant="body">
                Notto implements a sophisticated <strong>4-layer architecture</strong> that maximizes reusability 
                while maintaining clean separation of concerns. Each layer builds upon the previous, 
                creating a flexible system that scales from simple elements to complex applications.
              </Text>
            </Section>

            <Section spacing="md">
              <Heading level={5}>ARCHITECTURAL_LAYERS</Heading>
              
              {/* Visual Diagram */}
              <div className="bg-stone-50 dark:bg-stone-900 p-8 rounded-xl border">
                <Section spacing="lg">
                  {/* Layer 4 - Page Layer */}
                  <div className="border-2 border-red-400 bg-red-50 dark:bg-red-950/20 p-4 rounded-lg">
                    <Section spacing="sm">
                      <Badge variant="outline" style="system">LAYER_4</Badge>
                      <Heading level={6} className="text-red-700 dark:text-red-400">PAGE_COMPONENTS</Heading>
                      <Text className="text-red-600 dark:text-red-400">
                        /app/[route]/components/ → Page-specific UI elements
                      </Text>
                    </Section>
                  </div>

                  {/* Layer 3 - Brand Layer */}
                  <div className="border-2 border-amber-400 bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg">
                    <Section spacing="sm">
                      <Badge variant="outline" style="system">LAYER_3</Badge>
                      <Heading level={6} className="text-amber-700 dark:text-amber-400">BRAND_COMPONENTS</Heading>
                      <Text className="text-amber-600 dark:text-amber-400">
                        /app/components/ → Notto-branded, reusable components
                      </Text>
                    </Section>
                  </div>

                  {/* Layer 2 - Business Layer */}
                  <div className="border-2 border-blue-400 bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                    <Section spacing="sm">
                      <Badge variant="outline" style="system">LAYER_2</Badge>
                      <Heading level={6} className="text-blue-700 dark:text-blue-400">BUSINESS_COMPONENTS</Heading>
                      <Text className="text-blue-600 dark:text-blue-400">
                        /components/ → Supabase & business logic integrations
                      </Text>
                    </Section>
                  </div>

                  {/* Layer 1 - Primitive Layer */}
                  <div className="border-2 border-stone-400 bg-stone-100 dark:bg-stone-800/50 p-4 rounded-lg">
                    <Section spacing="sm">
                      <Badge variant="outline" style="system">LAYER_1</Badge>
                      <Heading level={6} className="text-stone-700 dark:text-stone-300">PRIMITIVE_COMPONENTS</Heading>
                      <Text className="text-stone-600 dark:text-stone-400">
                        /components/ui/ → shadcn/ui unstyled primitives
                      </Text>
                    </Section>
                  </div>
                </Section>
              </div>
            </Section>

            <Section spacing="md">
              <Heading level={5}>LAYER_PURPOSES</Heading>
              
              <List spacing="md">
                <ListItem>
                  <strong>Layer 1 (Primitives):</strong> Raw shadcn/ui components with no styling - 
                  provides accessibility, behavior, and structure foundation
                </ListItem>
                <ListItem>
                  <strong>Layer 2 (Business):</strong> Supabase integrations and business logic - 
                  handles data fetching, authentication, and external service connections
                </ListItem>
                <ListItem>
                  <strong>Layer 3 (Brand):</strong> Notto-styled components for maximum reusability - 
                  applies consistent branding, typography, and visual design system
                </ListItem>
                <ListItem>
                  <strong>Layer 4 (Page):</strong> Page-specific compositions - 
                  combines lower layers into unique page-level functionality
                </ListItem>
              </List>
            </Section>

            <Section spacing="md">
              <Heading level={5}>HIDDEN_COMPLEXITY</Heading>
              
              <Text variant="body">
                The genius of this architecture is that <strong>complexity is progressively hidden</strong> 
                as you move up layers. Each layer abstracts away implementation details:
              </Text>
              
              <List spacing="md" className="mt-4">
                <ListItem>
                  <strong>Users see:</strong> Simple, branded components (Button, Heading, Card)
                </ListItem>
                <ListItem>
                  <strong>Hidden:</strong> Radix UI accessibility implementation, CSS-in-JS styling, 
                  complex state management, responsive breakpoints
                </ListItem>
                <ListItem>
                  <strong>Benefit:</strong> Developer writes `&lt;Button style="dark"&gt;CLICK&lt;/Button&gt;` 
                  and gets full accessibility, dark mode, hover states, and consistent branding
                </ListItem>
              </List>
            </Section>

            <Section spacing="md">
              <Heading level={5}>COMPONENT_FLOW_EXAMPLE</Heading>
              
              <CodeBlock>{`// Layer 4: Page Component
import { LoginFormSection } from '@/app/auth/login/components/login-form-section'

// Layer 3: Brand Component  
import { BrandedButton } from '@/app/components/ui/button'

// Layer 2: Business Component
import { LoginForm } from '@/components/auth/login-form'

// Layer 1: Primitive Component
import { Button } from '@/components/ui/button'

// Flow: Page → Brand → Business → Primitive
// Each layer adds value without exposing lower-layer complexity`}</CodeBlock>
            </Section>

            <Section spacing="md">
              <Heading level={5}>ROUTING_BENEFITS</Heading>
              
              <List spacing="md">
                <ListItem>
                  <strong>Separation of Concerns:</strong> Each layer has a single, clear responsibility
                </ListItem>
                <ListItem>
                  <strong>Maximum Reusability:</strong> Brand components work across any page or feature
                </ListItem>
                <ListItem>
                  <strong>Easy Maintenance:</strong> Changes propagate automatically through the hierarchy
                </ListItem>
                <ListItem>
                  <strong>Clean Abstractions:</strong> Developers work at the appropriate level of detail
                </ListItem>
                <ListItem>
                  <strong>Scalable Growth:</strong> New features compose existing components rather than rebuilding
                </ListItem>
              </List>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Quick Start */}
      <Section spacing="lg">
        <Card>
          <Section spacing="lg">
            <Heading level={3}>QUICK_START</Heading>
            
            <Section spacing="md">
              <Heading level={4}>INSTALLATION</Heading>
              <CodeBlock>{`# Clone the repository
git clone <your-repo-url>
cd notto

# Install dependencies
pnpm install

# Start development server
pnpm dev`}</CodeBlock>
            </Section>

            <Section spacing="md">
              <Heading level={4}>BASIC_USAGE</Heading>
              <CodeBlock>{`import { Section } from '@/app/components/core/section'
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
}`}</CodeBlock>
            </Section>
          </Section>
        </Card>
      </Section>


    </Section>
  )
}