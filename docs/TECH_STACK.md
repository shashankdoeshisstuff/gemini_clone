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
