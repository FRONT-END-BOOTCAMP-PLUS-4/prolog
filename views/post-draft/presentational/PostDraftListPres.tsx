import { TrashIcon, InfoCircledIcon } from '@radix-ui/react-icons';

import styles from '../styles/PostDraftListPres.module.scss';
import { PostDraftType } from '../types';

type Props = {
  drafts: PostDraftType[];
  onDelete: (id: number) => void;
};

export default function PostDraftPres({ drafts, onDelete }: Props) {
  return (
    <div className={styles.bottomSheet} onClick={(e) => e.stopPropagation()}>
      <div className={styles.layout}>
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <span>임시저장</span>
            <div className={styles.tooltipWrapper}>
              <InfoCircledIcon className={styles.headerIcon} />
              <span className={styles.tooltip}>최대 10개까지 저장가능해요</span>
            </div>
          </div>
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
