'use client';

// package
import { useRef } from 'react';

// slice
import CardListPres from '../presentational/CardListPres';
import { ViewType } from '../types';

import { useMinSkeleton } from '../hooks/useMinSkeleton';
import { useResetOnFilterChange } from '../hooks/useResetOnFilterChange';
import { useInfiniteScrollTrigger } from '../hooks/useInfiniteScrollTrigger';

// layer
import { CardData } from '@/widgets/card/types';
import { useSearch } from '@/shared/contexts/SearchContext';
import { useInfiniteScroll } from '@/shared/hooks/useInfiniteScroll';
import { useLocalStorage } from '@/shared/hooks/useLocalStorage';
import { PostListFilter } from '@/shared/types';

const MIN_SKELETON_TIME = 1000;

const SORT_OPTIONS = [
  { label: '최신순', value: 'latest' },
  { label: '인기순', value: 'popular' },
];

export default function CardListCont() {
  const [viewType, setViewType] = useLocalStorage<ViewType>(
    'cardlist-viewtype',
    'card',
  );
  const [sort, setSort] = useLocalStorage<'latest' | 'popular'>(
    'cardlist-sort',
    'latest',
  );

  const { searchParams } = useSearch();

  const filter: PostListFilter = {
    name: searchParams.name,
    tags: searchParams.tags,
    title: searchParams.title,
    content: searchParams.content,
    sort,
    pageSize: 20,
  };

  const { posts, loading, error, hasMore, fetchNext, reset } =
    useInfiniteScroll(filter);

  useResetOnFilterChange([sort, searchParams], () => reset({ ...filter }));
  const isMinSkeleton = useMinSkeleton(loading, MIN_SKELETON_TIME);

  const loaderRef = useRef<HTMLDivElement>(null);
  useInfiniteScrollTrigger(loaderRef, fetchNext, hasMore, loading);

  const mappedItems: CardData[] = posts.map((post) => ({
    id: String(post.id),
    title: post.title,
    desc: post.content,
    tags: post.tags,
    userProfileImage: post.userProfileImage ?? '/svgs/profile.svg',
    userName: post.name ?? '',
    date: post.createdAt,
    commentCount: post.commentCount ?? 0,
    loveCount: post.loveCount ?? 0,
    imageUrl: post.thumbnailUrl ?? null,
  }));

  const uniqueItems: CardData[] = mappedItems.filter(
    (item, idx, arr) => arr.findIndex((i) => i.id === item.id) === idx,
  );

  return (
    <>
      <CardListPres
        viewType={viewType}
        setViewType={setViewType}
        sort={sort}
        setSort={setSort}
        items={uniqueItems}
        sortOptions={SORT_OPTIONS}
        isLoading={isMinSkeleton}
      />
      <div ref={loaderRef} style={{ height: 40 }} />
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </>
  );
}
