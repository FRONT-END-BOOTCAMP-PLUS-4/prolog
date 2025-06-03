'use client';
import { useRef, useState } from 'react';
import MyBlogCardListPres from '../presentational/MyBlogCardListPres';
import { MyBlogCardData } from '../types';
import { PostListFilter } from '@/views/home/card-list/types';
import { useSearch } from '@/shared/contexts/SearchContext';
import { myBlogInfiniteScroll } from '../hooks/myBlogInfiniteScroll';
import { myBlogInfiniteScrollTrigger } from '../hooks/myBlogInfibiteScrollTrigger';

const SORT_OPTIONS = [
  { label: '최신순', value: 'latest' },
  { label: '인기순', value: 'popular' },
  { label: '북마크', value: 'bookMark' },
];

export default function MyBlogCardListCont({
  userId,
  id,
}: { userId: string; id: string }) {
  // const data: MyBlogCardData[] = Array.from({ length: 20 }, (_, i) => ({
  //   id: String(i + 1),
  //   title: `CSR이란 ${i + 1}`,
  //   desc: `CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 ........CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 ........CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 ........CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 ........CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 ........ ${i + 1}`,
  //   tags: [
  //     'Start',
  //     'React',
  //     'TypeScript',
  //     'Next',
  //     'HTML',
  //     'CSS',
  //     'Java',
  //     'MySql',
  //     'End',
  //   ],
  //   userNickName: `user ${i + 1}`,
  //   userName: `username${i + 1}`,
  //   userProfileImage: '/svgs/profile.svg',
  //   date: '2025-01-01',
  //   commentCount: i,
  //   loveCount: 50 + i,
  //   imageUrl: '/svgs/image.svg',
  //   isBookMarked: i % 2 === 0,
  //   isLiked: false,
  // }));
  // | 'bookMark'
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
    myBlogInfiniteScroll(userId, id, filter);
  const loaderRef = useRef<HTMLDivElement>(null);
  myBlogInfiniteScrollTrigger(loaderRef, fetchNext, hasMore, loading);
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
