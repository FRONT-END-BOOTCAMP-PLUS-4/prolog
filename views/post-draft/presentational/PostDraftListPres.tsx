import { DraftType } from '../container/PostDraftListCont';
import styles from '../styles/PostDraftListPres.module.scss';

export default function PostDraftPres({ drafts }: { drafts: DraftType[] }) {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <span>임시저장</span>
      </div>
      <div className={styles.list}>
        {drafts.map((data) => (
          <div className={styles.item} key={data.id}>
            <span className={styles.date}>{data.createdAt}</span>
            <div className={styles.titleWrapper}>
              <span className={styles.title}>{data.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
