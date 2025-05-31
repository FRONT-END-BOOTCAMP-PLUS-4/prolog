// package
import { useEffect, useRef, useState } from 'react';

export function useMinSkeleton(loading: boolean, minTime: number) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const loadingStartRef = useRef<number>(Date.now());

  useEffect(() => {
    if (!loading) {
      const elapsed = Date.now() - loadingStartRef.current;
      const remain = Math.max(minTime - elapsed, 0);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, remain);
      return () => clearTimeout(timer);
    }

    setIsLoading(true);
    loadingStartRef.current = Date.now();
  }, [loading, minTime]);

  return isLoading;
}
