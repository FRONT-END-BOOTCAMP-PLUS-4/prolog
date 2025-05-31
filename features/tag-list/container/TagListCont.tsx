'use client';

// package
import { useRef, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

// slice
import TagListPres from '../presentational/TagListPres';
import { TagListContProps } from '../types';

// layer
import { useSearch } from '@/shared/contexts/SearchContext';

export default function TagListCont({ tags }: TagListContProps) {
  const tagSlideRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const [shouldRoll, setShouldRoll] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(15);
  const { searchParams, setSearchParams } = useSearch();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (tagSlideRef.current && tagsRef.current) {
      const containerWidth = tagSlideRef.current.offsetWidth;
      const tagsWidth = tagsRef.current.scrollWidth;
      setShouldRoll(tagsWidth > containerWidth);
      if (tagsWidth > containerWidth) setDuration(tagsWidth / 50);
    }
  }, [tags]);

  // 태그 클릭 시 context와 URL 모두 업데이트
  const handleTagClick = (tag: string) => {
    const nextTags = Array.from(new Set([...(searchParams.tags || []), tag]));
    setSearchParams({ ...searchParams, tags: nextTags });

    const params = new URLSearchParams();
    if (searchParams.name) params.append('name', searchParams.name);
    nextTags.forEach(t => params.append('tag', t));
    if (searchParams.title) params.append('title', searchParams.title);
    if (searchParams.content) params.append('content', searchParams.content);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div ref={tagSlideRef} style={{ width: '100%' }}>
      <TagListPres
        tags={tags}
        shouldRoll={shouldRoll}
        tagsRef={tagsRef}
        duration={duration}
        onTagClick={handleTagClick}
      />
    </div>
  );
}
