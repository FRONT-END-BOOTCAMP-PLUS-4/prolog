'use client';

// package
import { useState } from 'react';

// slice
import CardListPres from '../presentational/CardListPres';

type Item = {
  id: number;
  title?: string;
  description?: string;
};

export default function CardListCont() {
  const [viewType, setViewType] = useState<'card' | 'list'>('card');
  const items: Item[] = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    title: `제목 ${i + 1}`,
    description: `설명 ${i + 1}`,
  }));

  return (
    <CardListPres viewType={viewType} setViewType={setViewType} items={items} />
  );
}
