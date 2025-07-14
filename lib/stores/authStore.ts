import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  phone: string;
  countryCode: string;
  isAuthenticated: boolean;
  setPhone: (phone: string) => void;
  setCountryCode: (code: string) => void;
  verifyOtp: (otp: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      phone: '',
      countryCode: '+1',
      isAuthenticated: false,
      setPhone: (phone) => set({ phone }),
      setCountryCode: (countryCode) => set({ countryCode }),
      verifyOtp: async (otp) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            set({ isAuthenticated: true });
            resolve(true);
          }, 1000);
        });
      },
      logout: () => {
        set({ isAuthenticated: false, phone: '', countryCode: '+1' });
      }
    }),
    {
      name: 'auth-storage',
    }
  )
);