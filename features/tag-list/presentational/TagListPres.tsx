// slice
import styles from '../styles/TagList.module.scss';
import { TagListPresProps } from '../types';

// layout
import Tag from '@/shared/ui/tag';

export default function TagListPres({
  tags,
  shouldRoll,
  tagsRef,
  duration = 15,
}: TagListPresProps & { duration?: number }) {
  return (
    <div className={styles.tagListContainer}>
      <div
        className={`${styles.tagList} tagList ${shouldRoll ? `${styles.rolling} rolling` : ''}`}
        ref={tagsRef}
        style={shouldRoll ? { animationDuration: `${duration}s` } : undefined}
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
