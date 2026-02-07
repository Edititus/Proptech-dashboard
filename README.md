# Proptech Dashboard

## Stack

- React 19 + TypeScript 5.9
- Vite 7.3
- Tailwind CSS v4
- React Router 7

## Quick Start

```bash
npm install
npm run dev
npm run build
```

## Features

- Dashboard with sales overview & analytics
- Featured properties grid
- Calendar drawer (slides right)
- Budgeting modal
- Mobile responsive
- Custom animations

## Structure

```
src/
├── components/
│   ├── atoms/          # Buttons, icons
│   ├── molecules/      # Modal, Drawer, Calendar
│   ├── organisms/      # TopHeader, Sidebar
│   └── templates/      # Layouts
├── pages/              # Dashboard
└── App.tsx
```

## Key Components

- **TopHeader** - Nav with calendar/budget icons
- **Calendar** - Full month view
- **Drawer** - Right-slide panel
- **Modal** - Center popup
- **BudgetingModal** - Budget interface
