# React Enterprise Application Documentation

> A modern, feature-based React application built with TypeScript and Vite

## 📋 Table of Contents
- [Overview](#overview)
- [Core Concepts](#core-concepts)
- [Project Structure](#project-structure)
- [Routing and Layout](#routing-and-layout)
- [Component Organization](#component-organization)
- [Development Guidelines](#development-guidelines)

## 🚀 Overview

This project implements a robust, feature-based architecture, where each feature is independent and self-contained, similar to Django applications. The architecture is designed to:

- ✨ Maximize code reusability
- 🔒 Maintain clear separation of concerns
- 📦 Support independent feature development
- 🔄 Enable efficient code sharing through common modules

## 🎯 Core Concepts

### Features

> Features are the building blocks of our application

Features are independent modules of the application, each representing a specific business domain. They are located in the `src/features` directory and designed to be self-contained and independent of other features.

### Common Module

> The common module is our shared toolkit

The `common` directory contains shared functionality, components, and utilities used across multiple features. This helps:

- 🔄 Maintain DRY (Don't Repeat Yourself) principles
- 🎨 Ensure UI/UX consistency
- 🛠 Share common utilities and hooks

## 📁 Project Structure

```
src/
├── features/
│   ├── common/           # 🔄 Shared functionality
│   ├── customers/        # 👥 Customer management
│   ├── documents/        # 📄 Document management
│   ├── payments/         # 💰 Payment processing
│   ├── main/            # 🏠 Main application
│   └── start/           # 🔑 Authentication
└── assets/              # 🖼 Static assets
```

### Feature Structure

Each feature follows a consistent internal structure:

```
feature/
├── pages/               # 📄 User-visible pages
│   └── SomePage/
│       ├── components/ # 🧩 Page-specific components
│       ├── hooks/      # 🎣 Page-specific hooks
│       └── types.ts    # 📝 Type definitions
├── components/         # 🧩 Shared feature components
├── hooks/             # 🎣 Shared feature hooks
├── api/               # 🌐 API integration
└── routes.tsx         # 🛣 Route definitions
```

## 🛣 Routing and Layout

### Core Navigation

The application uses React Router with a nested routing structure implementing layout composition through `Outlet`. The main layout (`CoreNavigationPage`) provides:

- 📊 Sidebar navigation
- 🎨 Common layout elements
- 📍 Content rendering via Outlet

### Feature-level Navigation

#### 📄 Documents Feature
```
/documents/
├── agreements/           # 📜 Agreement section
│   ├── create/          # ✨ Create new
│   ├── act/             # 📋 Act management
│   ├── invoice/         # 💼 Invoice management
│   └── check/           # ✓ Check management
├── templates/           # 📑 Templates
└── history/            # 📅 History
```

#### 👥 Customers Feature
```
/customers/
├── /                   # 📋 Customer list
├── create/             # ✨ Create customer
└── :id/                # 👤 Customer details
```

#### 💰 Payments Feature
```
/payments/
├── /                   # 📋 Payment list
├── create/             # ✨ Create payment
├── :id/                # 💳 Payment details
└── statistic/          # 📊 Statistics
```

### Page Composition

Pages are composed using a nested structure:

1. **Base Layout** (`CoreNavigationPage`)
   - 🏗 Application shell
   - 📊 Sidebar navigation
   - 📄 Main content area

2. **Feature Layout** (e.g., `DocumentNavPage`)
   - 🧭 Feature navigation
   - 🎨 Feature-specific elements
   - 📄 Child routes via Outlet

3. **Section Layout** (e.g., `AgreementSectionPage`)
   - 🧭 Section navigation
   - 🧩 Section components
   - 📄 Page content

## 🧩 Component Organization

### Component Hierarchy

1. **🔄 Common Components**
   - Location: `features/common/components`
   - Purpose: Reusable across all features
   - Examples: `ButtonCluster`, `ContentBox`

2. **📦 Feature Components**
   - Location: `features/{feature}/components`
   - Purpose: Shared within a feature
   - Scope: Multiple pages within feature

3. **📄 Page Components**
   - Location: `features/{feature}/pages/{page}/components`
   - Purpose: Page-specific functionality
   - Scope: Single page only

### Component Guidelines

> Follow these guidelines for component placement:

- ♻️ Move components used across features to `common/components`
- 📦 Place feature-shared components in feature's `components` directory
- 📄 Keep page-specific components in page's `components` directory

## 🛠 Development Guidelines

### Form Handling

The application provides two main form handling hooks:

#### `useFormHandler`
> For complex forms with routing integration

Features:
- 🔄 Data initialization
- 📝 Form state management
- 💾 Save operations
- 🧭 Navigation handling

#### `useFormSmallHandler`
> For simpler forms without routing requirements

Features:
- 📝 Basic form state management
- 💾 Simple save operations

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Tools

- 🔧 Vite for fast development
- 📝 TypeScript for type safety
- 🎨 Material-UI for components
- 🛣 React Router for routing

## 📚 Additional Resources

For more information about the tools used in this project:

- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Material-UI Documentation](https://mui.com/)
