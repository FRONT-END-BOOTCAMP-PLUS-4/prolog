'use client';

// package
import { useState } from 'react';

// slice
import CardListPres from '../presentational/CardListPres';
import { CardData, ViewType } from '../types';

const SORT_OPTIONS = [
  { label: '최신순', value: 'latest' },
  { label: '인기순', value: 'popular' },
];

export default function CardListCont() {
  const [viewType, setViewType] = useState<ViewType>('card');
  const [sort, setSort] = useState<'latest' | 'popular'>('latest');

  // 더미 데이터
  const items: CardData[] = Array.from({ length: 20 }, (_, i) => ({
    id: String(i + 1),
    title: `CSR이란 ${i + 1}`,
    desc: `CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은 경험을 ... ${i + 1}`,
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
  }));

  const sortedItems = [...items].sort((a, b) => {
    if (sort === 'popular') {
      return Number(b.loveCount) - Number(a.loveCount);
    }
    return Number(b.id) - Number(a.id);
  });

  return (
    <CardListPres
      viewType={viewType}
      setViewType={setViewType}
      sort={sort}
      setSort={setSort}
      items={sortedItems}
      sortOptions={SORT_OPTIONS}
    />
  );
}
