import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  phone: string;
  countryCode: string;
  isAuthenticated: boolean;
  otp: string; // Add otp to the state
  setPhone: (phone: string) => void;
  setCountryCode: (code: string) => void;
  setOtp: (otp: string) => void; // Add setter for otp
  verifyOtp: (otp: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      phone: '',
      countryCode: '+1',
      isAuthenticated: false,
      otp: '', // Initialize otp
      setPhone: (phone) => set({ phone }),
      setCountryCode: (countryCode) => set({ countryCode }),
      setOtp: (otp) => set({ otp }), // Implement setter for otp
      verifyOtp: async (otp) => {
        // Use otp to validate
        if (otp === '123456') {
          set({ isAuthenticated: true });
          return true;
        }
        return false;
      },
      logout: () => {
        set({ isAuthenticated: false, phone: '', countryCode: '+1', otp: '' });
      }
    }),
    {
      name: 'auth-storage',
    }
  )
);
