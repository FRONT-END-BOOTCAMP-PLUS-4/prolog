'use client';
import { useRef, useState } from 'react';
import MyBlogCardListPres from '../presentational/MyBlogCardListPres';
import { MyBlogCardData } from '../types';
import { PostListFilter } from '@/views/home/card-list/types';
import { useSearch } from '@/shared/contexts/SearchContext';
import { useInfiniteScrollTrigger } from '@/views/home/card-list/hooks/useInfiniteScrollTrigger';
import { useMyStoryInfiniteScroll } from '../hooks/useMyStoryInfiniteScroll';
const SORT_OPTIONS = [
  { label: '최신순', value: 'latest' },
  { label: '인기순', value: 'popular' },
  { label: '북마크', value: 'bookMark' },
];

export default function MyBlogCardListCont({
  userId,
}: { userId: string; id: string }) {
  const [sort, setSort] = useState<'latest' | 'popular'>('latest');
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
    useMyStoryInfiniteScroll(filter, userId);
  const loaderRef = useRef<HTMLDivElement>(null);
  useInfiniteScrollTrigger(loaderRef, fetchNext, hasMore, loading);
  const mappedItems: MyBlogCardData[] = posts.map((post) => ({
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
    isLiked: post.isLiked ?? false,
  }));
  const uniqueItems: MyBlogCardData[] = mappedItems.filter(
    (item, idx, arr) => arr.findIndex((i) => i.id === item.id) === idx,
  );
  return (
    <MyBlogCardListPres
      sort={sort}
      setSort={setSort}
      items={uniqueItems}
      sortOptions={SORT_OPTIONS}
      data={mappedItems}
      userId={userId}
    />
  );
}
