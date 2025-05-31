// slice
import Tag from '@/shared/ui/tag';
import styles from '../styles/BodyTextPres.module.scss';

type Props = {
  content: string;
  tags: string[];
};

export default function BodyTextPres({ content, tags }: Props) {
  return (
    <>
      <div className={styles.bodyText}>{content}</div>
      <div className={styles.tagList}>
        {tags.map((tag, idx) => (
          <Tag key={`${tag}-${idx}`}>{tag}</Tag>
        ))}
      </div>
    </>
  );
}
