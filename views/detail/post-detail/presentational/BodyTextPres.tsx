// slice
import Tag from '@/shared/ui/tag';
import styles from '../styles/BodyTextPres.module.scss';

type Props = {
  body: string;
  tags: string[];
};

export default function BodyTextPres({ body, tags }: Props) {
  return (
    <>
      <div className={styles.bodyText}>{body}</div>
      <div className={styles.tagList}>
        {tags.map((tag, idx) => (
          <Tag key={`${tag}-${idx}`}>{tag}</Tag>
        ))}
      </div>
    </>
  );
}
