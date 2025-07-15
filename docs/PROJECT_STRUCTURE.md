```
src/
├── app/
│ ├── (auth)/ # Authentication routes
│ │ └── login/ # Login flow
│ │ ├── page.tsx # Main login page
│ │ └── components/ # Login components
│ ├── dashboard/ # Protected dashboard
│ │ └── page.tsx # Dashboard entry
│ ├── layout.tsx # Root layout
│ └── page.tsx # Home/redirect page
│
├── components/
│ ├── auth/ # Auth components
│ │ ├── CountrySelect.tsx # Country selector
│ │ ├── PhoneForm.tsx # Phone input form
│ │ └── OtpForm.tsx # OTP verification form
│ │
│ ├── chat/ # Chat components
│ │ ├── ChatHeader.tsx # Chat header
│ │ ├── MessageList.tsx # Message container
│ │ ├── MessageItem.tsx # Individual message
│ │ ├── InputArea.tsx # Message input
│ │ └── TypingIndicator.tsx
│ │
│ ├── dashboard/ # Dashboard components
│ │ ├── Sidebar.tsx # Navigation sidebar
│ │ ├── ChatroomList.tsx # Chatroom list
│ │ ├── ChatroomItem.tsx # Individual chatroom
│ │ └── CreateChatModal.tsx
│ │
│ └── ui/ # UI components
│ ├── CopyButton.tsx # Copy to clipboard
│ ├── ThemeToggle.tsx # Dark mode toggle
│ └── Skeleton.tsx # Loading skeleton
│
├── hooks/ # Custom hooks
│ ├── useDebounce.ts # Debounce hook
│ └── useLocalStorage.ts # LocalStorage hook
│
├── lib/ # Libraries and utilities
│ ├── stores/ # Zustand stores
│ │ ├── authStore.ts # Auth state
│ │ ├── chatStore.ts # Chat state
│ │ └── uiStore.ts # UI state
│ │
│ ├── validators/ # Validation schemas
│ │ └── authSchema.ts # Auth validations
│ │
│ └── constants.ts # App constants
│
├── types/ # Type definitions
│ └── index.ts # Shared types
│
├── styles/ # Global styles
│ └── globals.css # Main CSS file
│
└── public/ # Static assets
└── ... # Images, icons, etc.
```

## Key Files

- `src/app/layout.tsx`: Root layout with Toaster provider
- `src/app/page.tsx`: Entry point with auth-based redirection
- `src/lib/stores/`: Zustand state management stores
- `src/hooks/useDebounce.ts`: Debounce implementation for search
- `src/components/chat/InputArea.tsx`: Message input with image upload
- `src/lib/stores/chatStore.ts`: Core chat logic with AI simulation
