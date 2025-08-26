import { Section } from '@/app/components/core/section'
import { Heading } from '@/app/components/ui/heading'
import { Card } from '@/app/components/ui/card'
import { Badge } from '@/app/components/ui/badge'
import { Link } from '@/app/components/core/link'
import { Button } from '@/app/components/ui/button'
import { Separator } from '@/app/components/ui/separator'
import { Background } from '@/app/components/layout/background'
import { Alert, AlertDescription, AlertTitle } from '@/app/components/ui/alert'
import { Input } from '@/app/components/ui/input'
import { Label } from '@/app/components/ui/label'
import { Metric } from '@/app/components/ui/metric'
import { Tooltip } from '@/app/components/ui/tooltip'
import { Text } from '@/app/components/ui/text'
import { List, ListItem } from '@/app/components/ui/list'
import { CodeBlock } from '@/app/components/ui/code-block'

export default function UIDocsPage() {
  return (
    <Section container spacing="xl">
      <Background />
      
      {/* Header */}
      <Section spacing="lg">
        <Badge variant="outline" style="system">
          UI_COMPONENTS
        </Badge>
        
        <Section spacing="md">
          <Heading level={1}>INTERFACE</Heading>
          <Heading level={1} variant="accent">ELEMENTS</Heading>
        </Section>
        
        <Separator variant="accent" size="lg" />
        
        <Section spacing="sm" className="max-w-3xl">
          <Heading level={2}>INTERACTIVE_COMPONENTS</Heading>
          <Heading level={3}>BUILT_ON_SHADCN_PRIMITIVES.EXE</Heading>
        </Section>
      </Section>

      {/* Button Component */}
      <Section spacing="lg">
        <Card>
          <Section spacing="lg">
            <Heading level={3}>BUTTON</Heading>
            <Heading level={4}>Interactive Button Component</Heading>
            
            <Section spacing="md">
              <Heading level={5}>STYLE_VARIANTS</Heading>
              <Section direction="horizontal" spacing="sm">
                <Button style="light">LIGHT_STYLE</Button>
                <Button style="colored">COLORED_STYLE</Button>
                <Button style="dark">DARK_STYLE</Button>
              </Section>
            </Section>

            <Section spacing="md">
              <Heading level={5}>SIZE_VARIANTS</Heading>
              <Section direction="horizontal" spacing="sm">
                <Button size="sm">SMALL</Button>
                <Button size="default">DEFAULT</Button>
                <Button size="lg">LARGE</Button>
              </Section>
            </Section>

            <Section spacing="md">
              <Heading level={5}>VARIANT_COMBINATIONS</Heading>
              <Section direction="horizontal" spacing="sm">
                <Button variant="outline" style="light">OUTLINE</Button>
                <Button variant="ghost" style="dark">GHOST</Button>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Heading Component */}
      <Section spacing="lg">
        <Card>
          <Section spacing="lg">
            <Heading level={3}>HEADING</Heading>
            <Heading level={4}>Semantic Heading System</Heading>
            
            <Section spacing="md">
              <Heading level={5}>HEADING_HIERARCHY</Heading>
              <Card>
                <Section spacing="sm">
                  <Heading level={1}>LEVEL_1_MAIN_TITLE</Heading>
                  <Heading level={2}>Level 2 Subtitle</Heading>
                  <Heading level={3}>Level 3 Caption</Heading>
                  <Heading level={4}>Level 4 Section</Heading>
                  <Heading level={5}>Level 5 Small</Heading>
                  <Heading level={6}>Level 6 Micro</Heading>
                </Section>
              </Card>
            </Section>

            <Section spacing="md">
              <Heading level={5}>ACCENT_VARIANT</Heading>
              <Card>
                <Section direction="horizontal" spacing="lg" alignment="center">
                  <Section spacing="xs">
                    <Text className="text-sm font-mono text-stone-500">DEFAULT</Text>
                    <Heading level={3}>SAMPLE_HEADING</Heading>
                  </Section>
                  <Section spacing="xs">
                    <Text className="text-sm font-mono text-stone-500">ACCENT</Text>
                    <Heading level={3} variant="accent">SAMPLE_HEADING</Heading>
                  </Section>
                </Section>
              </Card>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Form Components */}
      <Section spacing="lg">
        <Card>
          <Section spacing="lg">
            <Heading level={3}>FORM_COMPONENTS</Heading>
            <Heading level={4}>Input, Label & Validation</Heading>
            
            <Section spacing="md">
              <Heading level={5}>BASIC_FORM</Heading>
              <Section spacing="md" className="max-w-md">
                <Section spacing="sm">
                  <Label htmlFor="username">USERNAME</Label>
                  <Input id="username" placeholder="ENTER_USERNAME" />
                </Section>
                
                <Section spacing="sm">
                  <Label htmlFor="email" variant="system">EMAIL_ADDRESS</Label>
                  <Input id="email" type="email" variant="system" placeholder="ENTER_EMAIL" />
                </Section>
                
                <Button style="dark" className="w-full">
                  SUBMIT_FORM
                </Button>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Alert Component */}
      <Section spacing="lg">
        <Card>
          <Section spacing="lg">
            <Heading level={3}>ALERT</Heading>
            <Heading level={4}>Status Messages & Notifications</Heading>
            
            <Section spacing="md">
              <Alert style="system">
                <AlertTitle>SYSTEM_NOTIFICATION</AlertTitle>
                <AlertDescription>
                  Component library initialized successfully.
                </AlertDescription>
              </Alert>
            </Section>

            <Section spacing="md">
              <Alert style="warning">
                <AlertTitle>WARNING_MESSAGE</AlertTitle>
                <AlertDescription>
                  Please review your configuration settings.
                </AlertDescription>
              </Alert>
            </Section>

            <Section spacing="md">
              <Alert style="success">
                <AlertTitle>SUCCESS_CONFIRMATION</AlertTitle>
                <AlertDescription>
                  All components have been loaded correctly.
                </AlertDescription>
              </Alert>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Metric Component */}
      <Section spacing="lg">
        <Card>
          <Section spacing="lg">
            <Heading level={3}>METRIC</Heading>
            <Heading level={4}>Statistics Display</Heading>
            
            <Section spacing="md">
              <Heading level={5}>LIVE_METRICS</Heading>
              <Section direction="horizontal" spacing="md">
                <Metric value="47" label="COMPONENTS" color="amber" />
                <Metric value="100%" label="ACCESSIBILITY" color="red" />
                <Metric value="2.1s" label="LOAD_TIME" color="stone" />
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Badge & Separators */}
      <Section spacing="lg">
        <Card>
          <Section spacing="lg">
            <Heading level={3}>VISUAL_ELEMENTS</Heading>
            <Heading level={4}>Badges & Separators</Heading>
            
            <Section spacing="md">
              <Heading level={5}>BADGES</Heading>
              <Section direction="horizontal" spacing="sm">
                <Badge>DEFAULT</Badge>
                <Badge variant="outline">OUTLINE</Badge>
                <Badge style="system" variant="outline">SYSTEM</Badge>
                <Badge variant="secondary">SECONDARY</Badge>
              </Section>
            </Section>

            <Section spacing="md">
              <Heading level={5}>SEPARATORS</Heading>
              <Section spacing="md">
                <Separator />
                <Separator variant="accent" />
                <Section direction="horizontal" spacing="md" alignment="center">
                  <Separator variant="accent" size="sm" />
                  <Separator variant="accent" size="md" />
                  <Separator variant="accent" size="lg" />
                </Section>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Tooltip Component */}
      <Section spacing="lg">
        <Card>
          <Section spacing="lg">
            <Heading level={3}>TOOLTIP</Heading>
            <Heading level={4}>Contextual Help</Heading>
            
            <Section spacing="md">
              <Section direction="horizontal" spacing="md">
                <Tooltip content="INITIALIZE_SYSTEM" side="top">
                  <Button>HOVER_ME</Button>
                </Tooltip>
                
                <Tooltip content="SYSTEM_CONFIGURATION" side="bottom">
                  <Button variant="outline">CONFIG</Button>
                </Tooltip>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Text & List Components */}
      <Section spacing="lg">
        <Card>
          <Section spacing="lg">
            <Heading level={3}>TEXT_&_LISTS</Heading>
            <Heading level={4}>Typography & Content Components</Heading>
            
            <Section spacing="md">
              <Heading level={5}>TEXT_VARIANTS</Heading>
              <Section spacing="sm">
                <Text>SMALL_TEXT_FOR_LABELS</Text>
                <Text variant="body">
                  Body text variant for readable content and descriptions.
                </Text>
              </Section>
            </Section>

            <Section spacing="md">
              <Heading level={5}>SEMANTIC_LISTS</Heading>
              <Section direction="horizontal" spacing="lg" alignment="start">
                <Section spacing="xs">
                  <Text>BULLET_LIST</Text>
                  <List spacing="sm">
                    <ListItem>Universal Design</ListItem>
                    <ListItem>Component Library</ListItem>
                    <ListItem>Technical Stack</ListItem>
                  </List>
                </Section>
                
                <Section spacing="xs">
                  <Text>NUMBERED_LIST</Text>
                  <List variant="numbered" spacing="sm">
                    <ListItem>Initialize System</ListItem>
                    <ListItem>Load Components</ListItem>
                    <ListItem>Deploy Application</ListItem>
                  </List>
                </Section>
              </Section>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Code Block Component */}
      <Section spacing="lg">
        <Card>
          <Section spacing="lg">
            <Heading level={3}>CODE_DISPLAY</Heading>
            <Heading level={4}>Formatted Code Examples</Heading>
            
            <Section spacing="md">
              <Heading level={5}>LIVE_EXAMPLE</Heading>
              <CodeBlock>{`import { List, ListItem } from '@/app/components/ui/list'
import { Text } from '@/app/components/ui/text'
import { CodeBlock } from '@/app/components/ui/code-block'

function DocumentationExample() {
  return (
    <div>
      <Text variant="body">Component showcase:</Text>
      
      <List spacing="md">
        <ListItem>Semantic HTML structure</ListItem>
        <ListItem>Consistent typography</ListItem>
        <ListItem>Dark theme code blocks</ListItem>
      </List>
    </div>
  )
}`}</CodeBlock>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Usage Example */}
      <Section spacing="lg">
        <Card>
          <Section spacing="lg">
            <Heading level={3}>COMPONENT_COMPOSITION</Heading>
            <Heading level={4}>Building Complex Interfaces</Heading>
            
            <Section spacing="md">
              <CodeBlock>{`import { Section } from '@/app/components/core/section'
import { Card } from '@/app/components/ui/card'
import { Heading } from '@/app/components/ui/heading'
import { Button } from '@/app/components/ui/button'
import { Metric } from '@/app/components/ui/metric'

function Dashboard() {
  return (
    <Section container spacing="xl">
      <Heading level={1}>SYSTEM_DASHBOARD</Heading>
      
      <Section direction="horizontal" spacing="lg">
        <Card>
          <Section spacing="lg">
            <Heading level={3}>STATISTICS</Heading>
            
            <Section direction="horizontal" spacing="md">
              <Metric value="47" label="COMPONENTS" color="amber" />
              <Metric value="100%" label="UPTIME" color="red" />
            </Section>
            
            <Button style="dark">VIEW_DETAILS</Button>
          </Section>
        </Card>
      </Section>
    </Section>
  )
}`}</CodeBlock>
            </Section>
          </Section>
        </Card>
      </Section>

      {/* Navigation */}
      <Section spacing="lg">
        <Section direction="horizontal" spacing="sm">
          <Link href="/docs/components/core">
            <Button size="lg" style="dark">
              CORE_COMPONENTS
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