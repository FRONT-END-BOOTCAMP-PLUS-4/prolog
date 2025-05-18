// package
import React, { useEffect, useRef, useState } from 'react';

// slice
import TagListPres from '../presentational/TagListPres';

type TagListContProps = {
  tags: string[];
};

export default function TagListCont({ tags }: TagListContProps) {
  const tagSlideRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const [shouldRoll, setShouldRoll] = useState(false);

  // 태그 전체 너비가 보이는 영역보다 크면 롤링 활성화
  useEffect(() => {
    if (tagSlideRef.current && tagsRef.current) {
      const containerWidth = tagSlideRef.current.offsetWidth;
      const tagsWidth = tagsRef.current.scrollWidth;
      setShouldRoll(tagsWidth > containerWidth);
    }
  }, []);

  return (
    <div ref={tagSlideRef} style={{ width: '100%' }}>
      <TagListPres tags={tags} shouldRoll={shouldRoll} tagsRef={tagsRef} />
    </div>
  );
}
