# Notto

**Universal UI Component Library**

Notto is a Next.js application focused on building a comprehensive, universal UI component library for any application domain, built on top of shadcn/ui and Supabase components.

## 📋 Project Overview

This project is in **UI Development Phase** - building universal, reusable components for:
- Data display and management interfaces
- Advanced form and input systems
- Navigation and layout components
- Real-time and interactive features
- Beautiful, accessible UI patterns

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (47 components installed)
- **Database**: Supabase with complete schema
- **Package Manager**: pnpm (preferred)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended package manager)
- Docker (for local Supabase)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd notto

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Optional: Local Database

```bash
# Start local Supabase instance
pnpm dlx supabase start

# Access Supabase Studio
http://127.0.0.1:54323
```

## 📁 Project Structure

```
notto/
├── app/
│   ├── components/          # Custom Notto UI components
│   ├── auth/login/         # Basic login route
│   ├── globals.css         # Tailwind + theme configuration
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── ui/                 # shadcn/ui components (47 installed)
│   └── [supabase-components] # Database and auth components
├── lib/
│   ├── client.ts          # Supabase browser client
│   ├── server.ts          # Supabase server client
│   └── utils.ts           # Utility functions
└── supabase/
    └── migrations/        # Database schema
```

## 🎯 Current Objectives

### Phase 1: Universal UI Component Development
- [ ] Advanced data table components
- [ ] Complex form and wizard components
- [ ] Navigation and layout systems
- [ ] Notification and feedback components
- [ ] Real-time collaboration components

### Component Architecture
- **Base Layer**: shadcn/ui primitives
- **Integration Layer**: Supabase components  
- **Brand Layer**: Custom Notto components in `/app/components/`
- **Page Layer**: Page-specific component compositions

## 🧩 Available Components

### shadcn/ui Components (Installed)
All 47 components available including: Button, Card, Input, Dialog, Sheet, Table, Form, Avatar, Badge, Calendar, and more.

### Database Schema
Example schema demonstrating:
- Multi-account management patterns
- Content and data management
- Real-time notification systems
- User authentication and authorization

## 📜 Development Commands

```bash
# Development
pnpm dev              # Start dev server with Turbopack
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint

# Database (Optional)
pnpm dlx supabase start    # Start local Supabase
pnpm dlx supabase stop     # Stop local Supabase
pnpm dlx supabase status   # Check status
```

## 🎨 Styling Guidelines

- **Design System**: Tailwind CSS v4 with custom theme
- **Dark Mode**: Supported via CSS variables
- **Components**: Built with shadcn/ui patterns
- **File Naming**: kebab-case for all files and directories
- **Responsive**: Mobile-first design approach

## 📚 Documentation

- Component patterns documented in `CLAUDE.md`
- Follow established naming conventions  
- Build reusable, composable components
- Prioritize accessibility and responsive design

## 🤝 Contributing

This is a development project focused on building UI components. Follow the patterns established in `CLAUDE.md` for consistency.

---

**Status**: Active UI Development  
**Focus**: Universal Component Library Creation  
**Next**: Build comprehensive, reusable UI components for any application