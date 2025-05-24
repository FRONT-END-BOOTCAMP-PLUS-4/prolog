'use client';

// package
import { useState } from 'react';

// slice
import CardListPres from '../presentational/CardListPres';
import { CardData, ViewType } from '../types';

export default function CardListCont() {
  const [viewType, setViewType] = useState<ViewType>('card');

  const items: CardData[] = Array.from({ length: 30 }, (_, i) => ({
    id: String(i + 1),
    title: `CSR이란 ${i + 1}`,
    desc: `CSR은 클라이언트 사이드 렌더링이라고 합니다. 이는 SEO에 좋지 못하지만, 좀더 인터렉티브한 디자인에는 좋은경험을 ... ${i + 1}`,
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
    loveCount: Math.floor(Math.random() * 100),
    imageUrl: '/svgs/image.svg',
  }));

  return (
    <CardListPres viewType={viewType} setViewType={setViewType} items={items} />
  );
}
