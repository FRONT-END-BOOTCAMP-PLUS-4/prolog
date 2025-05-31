// package
import { useEffect } from 'react';

export function useInfiniteScrollTrigger(
  loaderRef: React.RefObject<HTMLDivElement | null>,
  fetchNext: () => void,
  hasMore: boolean,
  loading: boolean,
) {
  useEffect(() => {
    if (!hasMore || loading) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) fetchNext();
      },
      { threshold: 1 },
    );
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [fetchNext, hasMore, loading, loaderRef]);
}
