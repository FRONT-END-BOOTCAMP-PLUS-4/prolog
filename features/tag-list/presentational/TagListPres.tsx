// slice
import styles from '../styles/TagList.module.scss';
import { TagListPresProps } from '../types';

// layer
import Tag from '@/shared/ui/tag';

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
          <Tag key={`${tag}-${idx}`}>{tag}</Tag>
        ))}
        {shouldRoll &&
          tags.map((tag, idx) => <Tag key={`clone-${tag}-${idx}`}>{tag}</Tag>)}
      </div>
    </div>
  );
}
