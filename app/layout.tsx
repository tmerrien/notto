import { Header } from '@/app/components/layout/header'
import { Logo } from '@/app/components/core/logo'
import { Nav } from '@/app/components/layout/nav'
import { NavLink } from '@/app/components/layout/nav-link'
import { Actions } from '@/app/components/layout/actions'
import { Button } from '@/app/components/ui/button'
import { Footer } from '@/app/components/layout/footer'
import { FooterNav } from '@/app/components/layout/footer-nav'
import { FooterColumn } from '@/app/components/layout/footer-column'
import { FooterLink } from '@/app/components/layout/footer-link'
import { FooterLegal } from '@/app/components/layout/footer-legal'
import { FooterInfo } from '@/app/components/layout/footer-info'
import { FooterText } from '@/app/components/layout/footer-text'
import { FooterLegalLinks } from '@/app/components/layout/footer-legal-links'
import { Content } from '@/app/components/layout/content'
import Layout from '@/app/components/layout/layout'
import { Separator } from '@/app/components/ui/separator'

export { metadata } from '@/app/components/layout/layout'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <Header>
        <Logo href="/" className="mr-8">NOTTO</Logo>

        <Nav>
          <NavLink href="/docs">OVERVIEW</NavLink>
          <NavLink href="/docs/components/ui">MODULES</NavLink>
          <NavLink href="/docs/components/core">CORE</NavLink>
          <NavLink href="/docs/components/layout">LAYOUT</NavLink>
        </Nav>

        <Actions>
          <Button 
            variant="ghost" 
            size="sm" 
            style="light"
            className="hidden sm:inline-flex"
          >
            GITHUB
          </Button>

          <Button 
            size="sm" 
            style="dark"
            className="hidden sm:inline-flex"
          >
            INIT
          </Button>
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
            <FooterLink href="#careers">CONTRIBUTORS</FooterLink>
          </FooterColumn>

          <FooterColumn title="MODULES">
            <FooterLink href="/docs/components/ui">UI_COMPONENTS</FooterLink>
            <FooterLink href="/docs/components/core">CORE_COMPONENTS</FooterLink>
            <FooterLink href="/docs/components/layout">LAYOUT_COMPONENTS</FooterLink>
          </FooterColumn>

          <FooterColumn title="RESOURCES">
            <FooterLink href="/docs">DOCUMENTATION</FooterLink>
            <FooterLink href="/docs/guides/usage">SETUP_GUIDES</FooterLink>
            <FooterLink href="/docs">HELP_CENTER</FooterLink>
          </FooterColumn>

          <FooterColumn title="NETWORK">
            <FooterLink href="#github">GITHUB_REPO</FooterLink>
            <FooterLink href="#discord">DISCORD_HUB</FooterLink>
            <FooterLink href="#twitter">SOCIAL_FEED</FooterLink>
          </FooterColumn>
        </FooterNav>

        <Separator />
        
        <FooterLegal>
          <FooterInfo>
            <FooterText>VERSION_2024.1 / BUILD_STABLE</FooterText>
            <FooterText>© 2024 NOTTO_SYSTEMS / OPEN_SOURCE_LICENSE</FooterText>
          </FooterInfo>

          <FooterLegalLinks>
            <FooterLink href="#privacy">PRIVACY_TERMS</FooterLink>
            <FooterLink href="#terms">USE_CONDITIONS</FooterLink>
            <FooterLink href="#cookies">DATA_POLICY</FooterLink>
          </FooterLegalLinks>
        </FooterLegal>
      </Footer>
    </Layout>
  )
}
