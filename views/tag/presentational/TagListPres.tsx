// package
import React from 'react';

// slice
import styles from '../styles/TagList.module.scss';

type TagListPresProps = {
  tags: string[];
  shouldRoll: boolean;
  tagsRef: React.RefObject<HTMLDivElement | null>;
};
export default function TagListPres({
  tags,
  shouldRoll,
  tagsRef,
}: TagListPresProps) {
  return (
    <div className={styles.tagListContainer}>
      {/* 롤링이 필요할 경우 태그 리스트를 두 번 렌더링해 무한 롤링 효과 구현 */}
      <div
        className={`${styles.tagList} ${shouldRoll ? styles.rolling : ''}`}
        ref={tagsRef}
      >
        {tags.map((tag, idx) => (
          <span className={styles.tagItem} key={`${tag}-${idx}`}>
            {tag}
          </span>
        ))}
        {shouldRoll &&
          tags.map((tag, idx) => (
            <span className={styles.tagItem} key={`clone-${tag}-${idx}`}>
              {tag}
            </span>
          ))}
      </div>
    </div>
  );
}
