// package
import { useEffect } from 'react';

export function useResetOnFilterChange(
  filterDeps: readonly unknown[],
  reset: () => void,
) {
  useEffect(() => {
    reset();
  }, filterDeps);
}
