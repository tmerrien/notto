import { Section } from '@/app/components/core/section'
import { Background } from '@/app/components/layout/background'
import { Heading } from '@/app/components/ui/heading'
import { Button } from '@/app/components/ui/button'
import { Metric } from '@/app/components/ui/metric'
import { Badge } from '@/app/components/ui/badge'
import { Separator } from '@/app/components/ui/separator'

export default function Home() {
  return (
    <Section container spacing="xl">
      <Background />
      
        {/* Content */}
        <Section direction="vertical" spacing="lg">
          <Badge variant="outline" style="system">
            UI_SYSTEM
          </Badge>

          <Section direction="vertical" spacing="md">
            <Section direction="vertical" spacing="sm">
              <Heading level={1}>NOTTO</Heading>
              <Heading level={1} variant="accent">COMPONENTS</Heading>
            </Section>
            
            <Separator variant="accent" size="lg" />
          </Section>
          
          <Section direction="vertical" spacing="sm" className="max-w-xl">
            <Heading level={2}>FUNCTIONAL_COMPONENTS / ROOTED_IN_SIMPLICITY</Heading>
            <Heading level={3}>BUILD_WITH_INTENTION.EXE</Heading>
          </Section>
        </Section>

        {/* Actions */}
        <Section direction="horizontal" className="flex gap-2">
          <Button size="lg" style="dark" className="w-48">
            INIT_SYSTEM
          </Button>

          <Button size="lg" variant="outline" style="light" className="w-48">
            VIEW_MODULES
          </Button>
        </Section>

        {/* Stats */}
        <Section direction="horizontal" className="flex gap-2">
          <Metric value="47" label="MODULES_LOADED" color="amber" />
          <Metric value="100%" label="ACCESSIBILITY" color="red" />
        </Section>
    </Section>
  )
}
