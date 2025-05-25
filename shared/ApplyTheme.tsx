'use client';

import { useLayoutEffect } from 'react';

import { useThemeStore } from '@/shared/stores/useThemeStore';

export default function ApplyTheme() {
  const theme = useThemeStore((state) => state.theme);

  useLayoutEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [theme]);

  return null;
}
