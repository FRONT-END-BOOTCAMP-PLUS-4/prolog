'use client';

// package
import { useEffect, useRef, useState } from 'react';

// slice
import TagListPres from '../presentational/TagListPres';
import { TagListContProps } from '../types';

export default function TagListCont({ tags }: TagListContProps) {
  const tagSlideRef = useRef<HTMLDivElement | null>(null);
  const tagsRef = useRef<HTMLDivElement | null>(null);
  const [shouldRoll, setShouldRoll] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(15);

  useEffect(() => {
    if (tagSlideRef.current && tagsRef.current) {
      const containerWidth = tagSlideRef.current.offsetWidth;
      const tagsWidth = tagsRef.current.scrollWidth;
      setShouldRoll(tagsWidth > containerWidth);

      if (tagsWidth > containerWidth) {
        const pxPerSec = 50;
        setDuration(tagsWidth / pxPerSec);
      }
    }
  }, [tags]);

  return (
    <div ref={tagSlideRef} style={{ width: '100%' }}>
      <TagListPres
        tags={tags}
        shouldRoll={shouldRoll}
        tagsRef={tagsRef}
        duration={duration}
      />
    </div>
  );
}
