# Authentication Flow

## Sequence Diagram

```mermaid
sequenceDiagram
    participant U as User
    participant C as Client
    participant S as Store
    participant A as Auth API

    U->>C: Accesses application
    C->>S: Checks auth state
    alt Authenticated
        S-->>C: Redirect to dashboard
    else Not Authenticated
        C-->>U: Show login page
    end

    U->>C: Enters phone number
    C->>A: Fetches country codes
    A-->>C: Returns country data
    C-->>U: Shows country selector

    U->>C: Submits phone form
    C->>S: setPhone(phone)
    C->>S: setCountryCode(code)
    C->>A: Simulate OTP send
    A-->>C: Success response
    C-->>U: Shows OTP form

    U->>C: Enters OTP
    C->>S: verifyOtp(otp)
    S->>S: Validate OTP (simulated)
    alt Valid OTP
        S-->>C: Set isAuthenticated=true
        C-->>U: Redirect to dashboard
    else Invalid OTP
        S-->>C: Return error
        C-->>U: Show error message
    end
```

```
Key Features

    Country Code Selection:

        Fetches from REST Countries API

        Dynamic dropdown with search

        Local caching of country data

    Form Validation:

        Phone number: 10-15 digits

        OTP: Exactly 6 digits

        Real-time validation feedback

        Schema validation with Zod

    OTP Simulation:

        setTimeout-based simulation

        No backend required

        Success/failure cases handled

    Security Considerations:

        No real SMS sent

        Client-side validation only (for demo)

        Production would require backend integration

Error Handling

    Invalid phone number format

    Invalid OTP format

    OTP verification failure

    Network errors (country fetch)
```
