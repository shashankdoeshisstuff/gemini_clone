# Gemini Clone - Frontend Assignment

![Gemini Clone Screenshot](./docs/screenshots/dashboard.png)

A fully functional, responsive frontend clone of a Gemini-style conversational AI chat application built for Kuvaka Tech's frontend developer assignment.

## Features

- ✅ OTP-based authentication with country code selection
- ✅ Chatroom management (create, delete, search)
- ✅ Real-time chat interface with typing indicators
- ✅ AI response simulation with throttling
- ✅ Image upload and preview
- ✅ Infinite scroll message loading
- ✅ Copy-to-clipboard functionality
- ✅ Dark/light mode toggle
- ✅ Responsive design for all devices
- ✅ Toast notifications for user actions

## Live Demo

[View Live Demo on Vercel](https://gemini-clone-kuvaka.vercel.app)

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **State Management**: Zustand
- **Form Handling**: React Hook Form + Zod
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI + Lucide Icons
- **Notifications**: react-hot-toast
- **Date Formatting**: date-fns
- **Deployment**: Vercel

## Project Structure

```bash
src/
├── app/                   # Application routes
├── components/            # Reusable components
├── hooks/                 # Custom React hooks
├── lib/                   # Libraries and utilities
├── types/                 # TypeScript type definitions
├── styles/                # Global styles
└── public/                # Static assets

# Technology Stack

## Core Framework

- **Next.js 15 (App Router)**:
  - Enables server-side rendering, static site generation, and API routes
  - App Router for file-based routing with enhanced performance
  - Built-in optimizations for fast page loads

## State Management

- **Zustand**:
  - Lightweight state management solution
  - Simple API with minimal boilerplate
  - Persists state to localStorage automatically
  - Used for:
    - Authentication state
    - Chatroom and message management
    - UI preferences (dark mode)

## Form Handling

- **React Hook Form**:
  - Performant form management with minimal re-renders
  - Uncontrolled components for better performance
  - Flexible validation integration
- **Zod**:
  - TypeScript-first schema validation
  - Seamless integration with React Hook Form
  - Used for:
    - Phone number validation
    - OTP validation
    - Chatroom creation forms

## Styling

- **Tailwind CSS**:
  - Utility-first CSS framework
  - Responsive design out-of-the-box
  - Dark mode support with `dark:` prefix
  - JIT compiler for optimized builds
- **Shadcn UI**:
  - Collection of accessible, customizable components
  - Built on top of Radix UI primitives
  - Themeable with CSS variables

## Additional Libraries

- **Lucide Icons**: Beautiful, consistent SVG icons
- **react-hot-toast**: Lightweight toast notifications
- **date-fns**: Modern date utility library
- **uuid**: Unique ID generation
- **react-intersection-observer**: For infinite scroll implementation

## Performance Optimizations

- Code splitting with Next.js dynamic imports
- Zustand's selective state subscriptions
- React.memo for component memoization
- Debounced search inputs
- Throttled AI responses
- Loading skeletons for better perceived performance


# For More Detailed Documemtation Look into 'docs' folder

[For More Detailed Documentation Look into 'docs' folder](./docs/)
```
