# voluwork

A modern web application built with Next.js, React, and TypeScript.

## Project Overview

Voluwork is a Next.js application leveraging the latest web technologies including:
- **Next.js 16** - React framework for production
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code quality and style enforcement

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd voluwork
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

Build the application:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

### Linting

Check code quality:
```bash
npm run lint
```

## Project Structure

```
voluwork/
├── app/              # Next.js app directory
│   ├── layout.tsx    # Root layout component
│   ├── page.tsx      # Home page
│   └── globals.css   # Global styles
├── public/           # Static assets
├── package.json      # Dependencies and scripts
├── next.config.ts    # Next.js configuration
├── tsconfig.json     # TypeScript configuration
└── eslint.config.mjs # ESLint configuration
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build application for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint to check code quality |

## Technologies Used

- **Frontend Framework:** Next.js 16
- **UI Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Linting:** ESLint
- **Module Bundler:** Webpack (built-in with Next.js)

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is private.