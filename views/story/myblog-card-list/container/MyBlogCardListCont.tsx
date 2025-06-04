'use client';
import { useRef, useState } from 'react';
import MyBlogCardListPres from '../presentational/MyBlogCardListPres';
import { MyBlogCardData } from '../types';
import { PostListFilter } from '@/views/home/card-list/types';
import { useSearch } from '@/shared/contexts/SearchContext';
import { useInfiniteScrollTrigger } from '@/views/home/card-list/hooks/useInfiniteScrollTrigger';
import { useMyStoryInfiniteScroll } from '../hook/useMyStoryInfiniteScroll';
import { useResetOnFilterChange } from '@/views/home/card-list/hooks/useResetOnFilterChange';
import { useMinSkeleton } from '@/views/home/card-list/hooks/useMinSkeleton';
import Link from 'next/link';
import Button from '@/shared/ui/button';
import styles from '../styles/myBlogCardList.module.scss';
const SORT_OPTIONS = [
  { label: '최신순', value: 'latest' },
  { label: '인기순', value: 'popular' },
  { label: '북마크', value: 'bookMark' },
];
const MIN_SKELETON_TIME = 1000;
export default function MyBlogCardListCont({
  userId,
}: { userId: string; id: string }) {
  const [sort, setSort] = useState<'latest' | 'popular' | 'bookMark'>('latest');
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
  useResetOnFilterChange([sort, searchParams], () => reset({ ...filter }));
  const isMinSkeleton = useMinSkeleton(loading, MIN_SKELETON_TIME);
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
  const isFilterEmpty = () => {
    return (
      !searchParams.name &&
      (!searchParams.tags || searchParams.tags.length === 0) &&
      !searchParams.title &&
      !searchParams.content
    );
  };
  if (!loading && uniqueItems.length === 0) {
    if (isFilterEmpty()) {
      return (
        <div className={styles.notFound}>
          <p>첫 글을 남겨서 당신의 이야기를 시작해보세요 😀</p>
          <Link href="/member/story">
            <Button variants="active">글 등록하러 가기</Button>
          </Link>
        </div>
      );
    }
  }
  return (
    <>
      <MyBlogCardListPres
        sort={sort}
        setSort={setSort}
        items={uniqueItems}
        sortOptions={SORT_OPTIONS}
        data={mappedItems}
        userId={userId}
      />
    </>
  );
}
