### 6. COMPONENT_ARCHITECTURE.md

# Component Architecture

## Design Principles

1. **Atomic Design**: Components built from small, reusable pieces
2. **Single Responsibility**: Each component handles one concern
3. **Unidirectional Data Flow**: Parent to child via props
4. **Container/Presentational Pattern**:
   - Containers manage state and logic
   - Presentational components handle UI rendering

## Component Hierarchy

### 1. Auth Components

- `CountrySelect`: Fetches and displays country codes
- `PhoneForm`: Phone input with validation
- `OtpForm`: OTP verification form

### 2. Dashboard Components

- `Sidebar`: Navigation with search and chat list
- `ChatroomList`: Renders filtered chatrooms
- `ChatroomItem`: Individual chatroom with actions
- `CreateChatModal`: Form for new chat creation

### 3. Chat Components

- `ChatHeader`: Displays current chat info
- `MessageList`: Container for messages with infinite scroll
- `MessageItem`: Renders individual message with timestamp
- `InputArea`: Message input with image upload
- `TypingIndicator`: Shows when AI is "typing"

### 4. UI Components

- `CopyButton`: Copies text to clipboard
- `ThemeToggle`: Dark/light mode switcher
- `Skeleton`: Loading placeholder

## Props Design

- **Minimal Props**: Pass only necessary data
- **Type Safety**: Strict TypeScript interfaces
- **Default Props**: Sensible defaults where applicable
- **Render Optimization**: React.memo for expensive components

## Composition Patterns

- **Compound Components**: Related components work together
- **Render Props**: Flexible component rendering
- **Custom Hooks**: Reusable logic (useDebounce, useLocalStorage)
