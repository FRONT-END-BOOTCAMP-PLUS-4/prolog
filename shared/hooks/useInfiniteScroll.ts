/**

무한 스크롤 게시글 리스트 패칭 커스텀 훅

@param initialFilter - (선택) 초기 게시글 필터

@returns {

posts: 게시글 배열,

loading: 로딩 여부,

error: 에러 메시지,

hasMore: 추가 데이터 여부,

fetchNext: 다음 페이지 패칭 함수,

reset: 리스트/필터 초기화 함수

}

@example

const { posts, loading, hasMore, fetchNext, reset } = useInfiniteScroll();
*/

// package
import { useCallback, useEffect, useRef, useState } from 'react';

// slice
import {
  PostListFilter,
  PostListItem,
  UseInfiniteScrollPostsResult,
} from '@/shared/types';

export function useInfiniteScroll(
  initialFilter: PostListFilter = {},
): UseInfiniteScrollPostsResult {
  const [posts, setPosts] = useState<PostListItem[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<PostListFilter>(initialFilter);

  // 중복 요청 방지
  const loadingRef = useRef(false);

  // 게시글 API 호출
  const fetchPosts = useCallback(
    async (pageToFetch: number, filterToUse: PostListFilter) => {
      if (loadingRef.current || !hasMore) return;

      loadingRef.current = true;
      setLoading(true);
      setError(null);

      try {
        const params = new URLSearchParams();

        if (filterToUse.name) params.append('name', filterToUse.name);
        if (filterToUse.title) params.append('title', filterToUse.title);
        if (filterToUse.content) params.append('content', filterToUse.content);
        if (filterToUse.tags && filterToUse.tags.length > 0) {
          filterToUse.tags.forEach((tag) => params.append('tag', tag));
        }
        if (filterToUse.sort) params.append('sort', filterToUse.sort);
        params.append('page', String(pageToFetch));
        params.append('pageSize', String(filterToUse.pageSize ?? 20));

        const res = await fetch(`/api/posts?${params.toString()}`);
        if (!res.ok) throw new Error('데이터를 불러오지 못했습니다.');

        const data: { data: PostListItem[]; hasMore: boolean } =
          await res.json();

        setPosts((prev) => {
          const newPosts =
            pageToFetch === 1 ? data.data : [...prev, ...data.data];
          // id 기준 중복 제거
          const uniquePosts = newPosts.filter(
            (post, index, self) =>
              index === self.findIndex((p) => p.id === post.id),
          );
          // **정렬하지 않고, 백엔드에서 온 순서대로 반환**
          return uniquePosts;
        });
        setHasMore(data.hasMore);
      } catch (err) {
        const message = err instanceof Error ? err.message : '알 수 없는 오류';
        setError(message);
      } finally {
        setLoading(false);
        loadingRef.current = false;
      }
    },
    [hasMore],
  );

  // 리스트 및 필터 초기화 및 첫 페이지 호출
  const reset = useCallback(
    (newFilter?: PostListFilter) => {
      const appliedFilter = newFilter ?? initialFilter;
      setPosts([]);
      setPage(1);
      setHasMore(true);
      setError(null);
      setFilter(appliedFilter);
    },
    [initialFilter],
  );

  // 페이지나 filter가 바뀔 때 fetch
  useEffect(() => {
    if (page === 1 && posts.length === 0) {
      fetchPosts(1, filter);
    } else if (page > 1) {
      fetchPosts(page, filter);
    }
  }, [page, filter]);

  // 최초 마운트 시 첫 페이지 호출
  useEffect(() => {
    fetchPosts(1, filter);
  }, []);

  // 다음 페이지 패칭
  const fetchNext = useCallback(() => {
    if (!loading && hasMore) {
      setPage((prev) => prev + 1);
    }
  }, [loading, hasMore]);

  return {
    posts,
    loading,
    error,
    hasMore,
    fetchNext,
    reset,
  };
}
