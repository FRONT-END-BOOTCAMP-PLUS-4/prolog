'use client';
import { useState } from 'react';
import MyBlogCardListPres from '../presentational/MyBlogCardListPres';
import { MyBlogCardData } from '../types';

const SORT_OPTIONS = [
  { label: '최신순', value: 'latest' },
  { label: '인기순', value: 'popular' },
  { label: '북마크', value: 'bookMark' },
];

export default function MyBlogCardListCont() {
  const data: MyBlogCardData[] = Array.from({ length: 20 }, (_, i) => ({
    id: String(i + 1),
    title: `CSR이란 ${i + 1}`,
    desc: `CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 ........CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 ........CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 ........CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 ........CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 ........ ${i + 1}`,
    tags: [
      'Start',
      'React',
      'TypeScript',
      'Next',
      'HTML',
      'CSS',
      'Java',
      'MySql',
      'End',
    ],
    userNickName: `user ${i + 1}`,
    date: '2025-01-01',
    commentCount: i,
    loveCount: 50 + i,
    imageUrl: '/svgs/image.svg',
    isBookMarked: i % 2 === 0,
  }));
  const [sort, setSort] = useState<'latest' | 'popular' | 'bookMark'>('latest');
  const [items, setItems] = useState<MyBlogCardData[]>([]);
  const sortedItems = [...items].sort((a, b) => {
    if (sort === 'popular') {
      return Number(b.loveCount) - Number(a.loveCount);
    }
    return Number(b.id) - Number(a.id);
  });
  return (
    <MyBlogCardListPres
      sort={sort}
      setSort={setSort}
      items={sortedItems}
      sortOptions={SORT_OPTIONS}
      data={data}
    />
  );
}
