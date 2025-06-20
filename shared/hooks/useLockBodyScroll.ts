import { useLayoutEffect } from 'react';

export function useLockBodyScroll(lock: boolean) {
  useLayoutEffect(() => {
    if (!lock) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [lock]);
}
