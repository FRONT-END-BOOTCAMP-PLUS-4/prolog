import { TrashIcon } from '@radix-ui/react-icons';

import styles from '../styles/PostDraftListPres.module.scss';
import { DraftType } from '../container/PostDraftListCont';

type Props = {
  drafts: DraftType[];
  onDelete: (id: number) => void;
};

export default function PostDraftPres({ drafts, onDelete }: Props) {
  return (
    <div className={styles.bottomSheet}>
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
                <TrashIcon
                  className={styles.icon}
                  onClick={() => onDelete(data.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
