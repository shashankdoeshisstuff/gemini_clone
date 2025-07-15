# Application Workflow

## 1. Authentication Flow

```mermaid
sequenceDiagram
    User->>Login Page: Enters phone number
    Login Page->>API: Fetches country codes
    Login Page->>User: Shows country selector
    User->>Login Page: Submits phone number
    Login Page->>Backend: Simulates OTP send
    Backend->>User: Shows OTP input form
    User->>OTP Form: Enters OTP code
    OTP Form->>Auth Store: Validates OTP
    Auth Store->>Dashboard: Redirects on success
```

## 2. Dashboard Interaction

![Dashboard Interaction](./assets/Dashboard_Interaction.svg)

## 3. Chat System

![Chat System](./assets/Chat_System.svg)

## 4. State Management Flow

![State Management Flow](./assets/State_Management_Flow.svg)

Key Features Implementation

    Infinite Scroll: Uses react-intersection-observer to detect when user scrolls to top

    AI Simulation: setTimeout with throttling to simulate "thinking" time

    Image Upload: FileReader API to convert images to base64 for preview

    Dark Mode: CSS variables + localStorage persistence

    Form Validation: React Hook Form + Zod schema validation

    Responsive Design: Tailwind's responsive utility classes
