# spice Delight - Project Overview

## Core Technologies
- **React**: A JavaScript library for building user interfaces. It forms the foundation of the application, allowing for component-based architecture and efficient DOM manipulation.
- **TypeScript**: A strongly typed programming language that builds on JavaScript, providing better tooling, error-catching, and developer experience.
- **Vite**: A modern frontend build tool that provides extremely fast development server startup and hot module replacement (HMR).

## Styling and UI Components
- **Tailwind CSS**: A utility-first CSS framework used throughout the project for styling. The project includes custom configurations for colors, animations, and theme options in `tailwind.config.ts`.
- **shadcn/ui**: A collection of reusable UI components built with Radix UI and styled with Tailwind CSS. Components like Button, Card, Checkbox, and more are used from this library.
- **Radix UI**: Provides headless UI components used by shadcn/ui. Various Radix packages are installed for components like accordion, dialog, checkbox, etc.

## Routing & State Management
- **React Router**: Used for client-side routing in the application, allowing for navigation between different pages.
- **Tanstack React Query**: Used for data fetching, caching, synchronization, and server state management.

## Additional Libraries
- **Lucide React**: Provides a collection of SVG icons used throughout the application's UI.
- **Recharts**: A charting library built on React components for data visualization.
- **Clsx & Tailwind Merge**: Utility libraries for conditionally constructing className strings and merging Tailwind classes efficiently.
- **React Hook Form**: A form management library with validation capabilities.
- **Zod**: A TypeScript-first schema validation library, often used with React Hook Form.
- **Sonner**: A toast notification library for displaying non-intrusive messages.

## Project Structure Highlights
- **Component-based architecture**: The application uses a modular approach with reusable components.
- **Custom themes**: The project implements a custom color scheme around spice themes (spice, curry, leaf) in the Tailwind configuration.
- **Responsive design**: The UI is designed to work well on both mobile and desktop devices.
- **Custom animations**: The project defines several custom animations in the Tailwind config for fade, scale, and slide effects.

The application is a restaurant website for "Akshaya Delight" that showcases various cuisines and menu items, with a colorful, visually appealing interface designed to highlight culinary offerings. 
