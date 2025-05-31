'use client';

// package
import React, { useState, useEffect } from 'react';

// slice
import CardListPres from '../presentational/CardListPres';
import { ViewType, ApiPost } from '../types';

// layer
import { CardData } from '@/widgets/card/types';
import { useSearch } from '@/shared/contexts/SearchContext';

const SORT_OPTIONS = [
  { label: '최신순', value: 'latest' },
  { label: '인기순', value: 'popular' },
];

export default function CardListCont() {
  const [viewType, setViewType] = useState<ViewType>('card');
  const [sort, setSort] = useState<'latest' | 'popular'>('latest');
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<CardData[]>([]);
  const { searchParams } = useSearch();

  useEffect(() => {
    setIsLoading(true);

    const params = new URLSearchParams();
    if (searchParams.name) params.append('name', searchParams.name);
    if (searchParams.tags)
      searchParams.tags.forEach((tag) => params.append('tag', tag));
    if (searchParams.title) params.append('title', searchParams.title);
    if (searchParams.content) params.append('content', searchParams.content);
    params.append('sort', sort);

    fetch('/api/posts?' + params.toString())
      .then((res) => res.json())
      .then((data) => {
        const mapped = (data.data as ApiPost[]).map((post) => ({
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
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
        setItems(mapped);
      })
      .catch(() => {
        setItems([]);
        setIsLoading(false);
      });
  }, [sort, searchParams]);

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
      isLoading={isLoading}
    />
  );
}
