// slice
import styles from '../styles/TagList.module.scss';
import { TagListPresProps } from '../types';

// layer
import Tag from '@/shared/ui/tag';

type Props = TagListPresProps & {
  duration?: number;
  onTagClick?: (tag: string) => void;
};

export default function TagListPres({
  tags,
  shouldRoll,
  tagsRef,
  duration = 15,
  onTagClick,
}: Props) {
  return (
    <div className={styles.tagListContainer}>
      <div
        className={`${styles.tagList} tagList ${shouldRoll ? `${styles.rolling} rolling` : ''}`}
        ref={tagsRef}
        style={shouldRoll ? { animationDuration: `${duration}s` } : undefined}
      >
        {tags.map((tag, idx) => (
          <Tag
            key={`${tag}-${idx}`}
            onClick={onTagClick ? () => onTagClick(tag) : undefined}
            style={{ cursor: onTagClick ? 'pointer' : undefined }}
          >
            {tag}
          </Tag>
        ))}
        {shouldRoll &&
          tags.map((tag, idx) => (
            <Tag
              key={`clone-${tag}-${idx}`}
              onClick={onTagClick ? () => onTagClick(tag) : undefined}
              style={{ cursor: onTagClick ? 'pointer' : undefined }}
            >
              {tag}
            </Tag>
          ))}
      </div>
    </div>
  );
}
