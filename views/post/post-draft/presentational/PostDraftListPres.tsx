import { TrashIcon, InfoCircledIcon } from '@radix-ui/react-icons';

import styles from '../styles/PostDraftListPres.module.scss';

import { BlogPostDraftType } from '../types';
import { usePostEditorStore } from '../../stores/usePostEditorStore';

type Props = {
  onDelete: (id: number) => void;
  closeModal: () => void;
};

export default function PostDraftListPres({ onDelete, closeModal }: Props) {
  const { drafts, setSelectedPost } = usePostEditorStore();

  const handleSelectDraft = (data: BlogPostDraftType) => {
    setSelectedPost(data);
    closeModal();
  };

  return (
    <div className={styles.bottomSheet} onClick={(e) => e.stopPropagation()}>
      <div className={styles.layout}>
        <header className={styles.header}>
          <div className={styles.headerTitle}>
            <span>임시저장</span>
            <div className={styles.tooltipWrapper}>
              <InfoCircledIcon className={styles.headerIcon} />
              <span className={styles.tooltip}>최대 10개까지 저장가능해요</span>
            </div>
          </div>
        </header>
        <div className={styles.list}>
          {drafts.map((data) => (
            <div className={styles.item} key={data.id}>
              <span className={styles.date}>{data.createdAt}</span>
              <div className={styles.titleWrapper}>
                <span
                  className={styles.title}
                  onClick={() => handleSelectDraft(data)}
                >
                  {data.title}
                </span>
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
