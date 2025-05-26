import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = '' | 'dark';

type ThemeState = {
  theme: Theme;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: '',
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === '' ? 'dark' : '' })),
    }),
    {
      name: 'theme-storage', // localStorage 키
    },
  ),
);
