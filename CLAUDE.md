# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## PROJECT RULESET - CRITICAL

**THESE RULES ARE SACRED. FOLLOW THEM OR SUFFER THE WRATH.**

1. **NO REPETITION** - Document everything you do. When you add a tool, change a pattern, or solve a problem, document it here. Check this file before doing anything to see if there's already a pattern.

2. **CONSISTENCY** - Look for existing patterns before implementing. Keep the codebase standardized and organized. Always check how things were done before.

3. **FOLLOW FRAMEWORK GUIDELINES** - Stick to Next.js, React, TypeScript, and Tailwind best practices religiously.

4. **FIX BUGS, DON'T BYPASS** - Never work around a bug. Always fix the root cause.

5. **kebab-case ONLY** - All file names, component names, directories. No exceptions.

## Project Overview

**Notto** - Universal UI Component Library

This is a Next.js 15 application using the App Router, TypeScript, and Tailwind CSS v4. The project was bootstrapped with `create-next-app` and uses React 19.

**Project Vision:** Notto is a comprehensive UI component library built on top of shadcn/ui and Supabase components, designed for building any type of application interface.

## Component Library Objectives

### Universal UI Components
- **Flexible Design**: Components that work for any application domain
- **Highly Composable**: Building blocks that combine for complex interfaces
- **Customizable Theming**: Easy to adapt to different brand requirements

### Data Display Components
- **Tables & Lists**: Advanced data presentation with sorting, filtering
- **Cards & Layouts**: Flexible content organization components
- **Forms & Inputs**: Comprehensive form building components

### Interactive Components
- **Navigation**: Menus, breadcrumbs, sidebars, tabs
- **Overlays**: Modals, drawers, tooltips, popovers  
- **Feedback**: Notifications, alerts, loading states, progress indicators

### Advanced Components
- **Real-time Features**: Live updates, presence indicators, collaborative UI
- **Data Visualization**: Charts, graphs, analytics displays
- **Content Management**: Rich text, file uploads, media handling

**Current State:** Project rolled back to focus on universal UI component development. Basic structure ready for building comprehensive Notto component library.

## Database Schema (Available)

### Example Tables (Demonstrative)
- **email_accounts** - Multi-account management example
- **emails** - Content management example
- **tasks** - Task/item management example  
- **notifications** - Real-time notification example

### Key Features (Ready for Any Use Case)
- **Multi-Account Patterns** - Adaptable to any multi-tenant scenario
- **Authentication Integration** - Secure access patterns
- **Content Management** - Flexible data structures
- **Real-time Capabilities** - Live update infrastructure
- **Search Integration** - Full-text search patterns
- **Row Level Security** - Data isolation patterns

## Development Commands

- `npm run dev` - Start development server with Turbopack (opens at http://localhost:3000)
- `npm run build` - Build production application
- `npm start` - Start production server
- `npm run lint` - Run ESLint checks

## Architecture

### Directory Structure
- `app/` - Next.js App Router directory
  - `components/` - **NOTTO CUSTOM UI COMPONENTS** (Brand Layer)
  - `auth/login/` - Basic login route (placeholder)
  - `layout.tsx` - Root layout with Geist font configuration
  - `page.tsx` - Simple homepage ("Notto - Personal Productivity Assistant")
  - `globals.css` - Global Tailwind CSS styles with shadcn/ui theme variables
- `components/` - Supabase integration components (Business Layer)
- `components/ui/` - All shadcn/ui components (47 components installed) (Primitive Layer)
- `hooks/` - Custom React hooks
- `lib/` - Utility functions and Supabase clients
- `supabase/migrations/` - Complete database schema
- `public/` - Static assets

### Key Technologies
- **Next.js 15** with App Router and Turbopack for development
- **React 19** with TypeScript for type safety
- **Tailwind CSS v4** with PostCSS for styling
- **shadcn/ui** - Complete component library installed with all 47 components
- **Radix UI** - Underlying primitive components for shadcn/ui
- **Geist fonts** (Sans and Mono) loaded via next/font/google
- **ESLint** with Next.js configuration for code quality

### TypeScript Configuration
- Uses `@/*` path mapping for absolute imports from project root
- Configured with Next.js plugin for optimal IDE support
- Strict mode enabled

### Styling Approach
- Tailwind CSS utility classes throughout components
- shadcn/ui theme system with CSS variables for light/dark modes
- Dark mode support via `dark:` variants and next-themes
- Responsive design with `sm:` breakpoints
- CSS custom properties for colors, radius, spacing

### Component Patterns
- Server Components by default (App Router)
- shadcn/ui components for all UI elements
- Use `cn()` utility from `lib/utils.ts` for conditional classes
- kebab-case file naming convention

### Component Organization Strategy
**CRITICAL RULE: Maximum reusability through layered architecture**

1. **Primitive Layer** (`/components/ui/`): 
   - Original shadcn/ui components
   - **NEVER modify these directly**
   - Pure, unstyled primitives

2. **Business Layer** (`/components/`):
   - Supabase-provided components
   - **NEVER modify these directly**
   - We don't control shadcn/supabase contracts

3. **Brand Layer** (`/app/components/`):
   - **OUR reusable custom components**
   - Import and compose from lower layers
   - Apply our styling and brand
   - Shared across multiple pages

4. **Page Layer** (`/app/[route]/components/`):
   - **Page-specific components**
   - Built from app/components
   - Maximum componentization per page
   - Each UI element should be a component

### Complete Component Flow Pattern
```
/app/auth/login/page.tsx → /app/auth/login/components/ → /app/components/ → /components/ → /components/ui/
```

### Example Structure
```
/app/auth/login/
├── page.tsx                    # Main login page
├── components/
│   ├── login-header.tsx        # Page-specific header
│   ├── login-form-section.tsx  # Page-specific form layout
│   └── login-footer.tsx        # Page-specific footer
/app/components/
├── branded-button.tsx          # Our custom button (reusable)
├── branded-card.tsx           # Our custom card (reusable)
└── form-field.tsx             # Our custom form field (reusable)
```

### Usage Example
```typescript
// app/auth/login/components/login-form-section.tsx
import { BrandedCard } from '@/app/components/branded-card'
import { BrandedButton } from '@/app/components/branded-button'

// app/components/branded-button.tsx  
import { Button } from '@/components/ui/button'

// app/components/branded-card.tsx
import { Card } from '@/components/ui/card'
import { LoginForm } from '@/components/login-form'
```

## DOCUMENTED PATTERNS

### Adding shadcn/ui Components
```bash
# Install all components at once
npx shadcn@latest add --all

# Install specific components
npx shadcn@latest add button card input
```

### Project Cleanup (Done)
- Removed all Next.js boilerplate (SVGs, complex homepage, extra CSS)
- Updated metadata in layout.tsx
- Simplified globals.css to just Tailwind import (before shadcn install)

### File Naming Convention
- **ALWAYS kebab-case** for all files and directories
- Examples: `user-profile.tsx`, `api-client.ts`, `settings-page.tsx`

## SUPABASE INTEGRATION - ADDED

### New Dependencies Added
- `@supabase/ssr` - Supabase SSR utilities for Next.js
- `@supabase/supabase-js` - Main Supabase client
- `@supabase/postgrest-js` - PostgREST client for database operations
- `@tanstack/react-query` - Data fetching and caching
- `@tanstack/react-table` - Table component with sorting/filtering
- `@monaco-editor/react` - Code editor for SQL
- `axios` - HTTP client
- `openai` - OpenAI API client for AI features
- `openapi-fetch` - OpenAPI client
- `react-markdown` - Markdown rendering
- `react-dropzone` - File upload component
- `common-tags` - Template literal utilities

### Authentication System (Foundation Ready)
- **Client Setup**: `lib/client.ts` - Browser Supabase client
- **Server Setup**: `lib/server.ts` - Server-side Supabase client with cookie handling
- **Middleware**: `middleware.ts` + `lib/middleware.ts` - Session management
- **Auth Routes**: Simplified to basic structure
  - `/auth/login` - Basic login placeholder (to be implemented)
- **Status**: Foundation ready for UI component development

### Database Schema (Complete)
- **Tables**: email_accounts, emails, tasks, notifications
- **Features**: Multi-account support, LLM integration, full-text search
- **Security**: Row Level Security enabled
- **Status**: Schema complete, ready for UI components

## CURRENT FOCUS: UI COMPONENT DEVELOPMENT

### Project Status: ROLLBACK COMPLETE
- **Phase**: UI Component Development
- **Focus**: Building Notto components in `/app/components/`
- **Foundation**: shadcn/ui + Supabase components available
- **Database**: Complete schema ready for integration

### Removed for Focus
- Complex authentication flows (keeping basic structure)
- API integrations (will be added later)
- Protected dashboard routes (will be rebuilt with new components)
- Complex routing (simplified to basics)

### Next Steps: Build Universal Notto Components
1. **Data Display Components**
   - Advanced table components
   - List and grid layouts
   - Card containers and layouts

2. **Form & Input Components**
   - Complex form builders
   - Multi-step wizards
   - File upload interfaces

3. **Navigation Components**
   - Sidebar navigation
   - Breadcrumb systems
   - Tab and accordion layouts

4. **Feedback Components**
   - Toast notification systems
   - Loading and progress states
   - Alert and confirmation dialogs

5. **Advanced Components**
   - Real-time collaboration UI
   - Data visualization widgets
   - Search and filter interfaces

### Available Hooks
Custom hooks available in `hooks/` directory for future component integration:
- `use-auth.ts` - Authentication state
- `use-supabase-upload.ts` - File upload handling  
- `use-realtime-*.ts` - Realtime features
- `use-run-query.ts` - SQL query execution
- `use-tables.ts` - Database table operations

### Environment Variables Required
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY=
```

### Available Supabase Components
Ready for integration in `/components/` directory:
- **Auth Components**: `login-form.tsx`, `logout-button.tsx`, etc.
- **Database Components**: `database.tsx`, `sql-editor.tsx`, `results-table.tsx`
- **Realtime Components**: `realtime-*.tsx` components
- **Utility Components**: `dropzone.tsx`, `dynamic-form.tsx`

### Notto Component Development Strategy
**Build in `/app/components/` following the layered architecture:**
1. Import from `/components/ui/` (shadcn/ui primitives)
2. Import from `/components/` (Supabase integrations)
3. Create branded Notto versions
4. Export for use in page-specific components

### Pattern: Supabase Client Usage
```typescript
// Client-side
import { createClient } from '@/lib/client'
const supabase = createClient()

// Server-side
import { createClient } from '@/lib/server'
const supabase = await createClient()
```

## LOCAL DEVELOPMENT - SUPABASE

### Setup Local Instance
```bash
# Initialize (already done)
pnpm dlx supabase init

# Start local Supabase (named "notto")
pnpm dlx supabase start

# Stop local instance
pnpm dlx supabase stop

# Reset database
pnpm dlx supabase db reset
```

### Local URLs and Credentials
- **Project Name**: `notto` (Docker container prefix)
- **API URL**: http://127.0.0.1:54321
- **Studio URL**: http://127.0.0.1:54323
- **Database URL**: postgresql://postgres:postgres@127.0.0.1:54322/postgres
- **Inbucket (Email)**: http://127.0.0.1:54324

### Environment Variables
- Local development keys are stored in `.env.local`
- Run `pnpm dlx supabase start` to get fresh keys if needed
- **NEVER commit .env.local to git**

### Docker Containers Created
- `supabase_db_notto` - PostgreSQL database
- `supabase_auth_notto` - GoTrue auth server
- `supabase_rest_notto` - PostgREST API
- `supabase_realtime_notto` - Realtime server
- `supabase_storage_notto` - Storage API
- `supabase_studio_notto` - Supabase Studio
- `supabase_inbucket_notto` - Email testing

### Development Workflow
1. Start local Supabase: `pnpm dlx supabase start`
2. Start Next.js: `pnpm dev`
3. Access Studio: http://127.0.0.1:54323
4. Access App: http://localhost:3000

### Container Management - IMPORTANT
- **NEVER delete containers aggressively** - data is stored there
- **ALWAYS wait 10-15 seconds** after stopping containers before restarting
- **Be patient** with container operations to avoid conflicts
- Use `pnpm dlx supabase stop` and wait before `pnpm dlx supabase start`

## UI COMPONENT DEVELOPMENT - NEW FOCUS

### Package Manager: pnpm
**ALWAYS use pnpm for this project:**
```bash
pnpm install          # Install dependencies
pnpm dev             # Development server
pnpm build           # Build production
pnpm lint            # Run linting
```

### Component Development Workflow
1. **Create in `/app/components/`** following kebab-case naming
2. **Build on existing layers** (shadcn/ui → Supabase → Notto)
3. **Focus on reusability** across productivity features
4. **Document patterns** in this file as you create them

### Current UI Foundation
- **47 shadcn/ui components** installed and ready
- **Tailwind CSS v4** with custom theme variables
- **Dark mode support** via CSS variables
- **Responsive design** utilities
- **TypeScript** with strict mode
- **Component architecture** defined and documented

### Objectives
- Build universal, reusable UI components
- Create flexible, composable interfaces
- Develop advanced interaction patterns
- Design beautiful, accessible components
- Build comprehensive component library for any application domain

### Success Criteria
- Components follow established patterns
- Reusable across different productivity features
- Properly typed with TypeScript
- Accessible and responsive
- Well documented in this file