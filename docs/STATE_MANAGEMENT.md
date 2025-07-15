### STATE_MANAGEMENT.md

````markdown
# State Management with Zustand

## Store Architecture

### 1. Auth Store (`lib/stores/authStore.ts`)

```ts
interface AuthState {
  phone: string;
  countryCode: string;
  isAuthenticated: boolean;
  setPhone: (phone: string) => void;
  setCountryCode: (code: string) => void;
  verifyOtp: (otp: string) => Promise<boolean>;
  logout: () => void;
}
```
````
