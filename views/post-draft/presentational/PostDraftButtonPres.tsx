import PostDraftCont from '../container/PostDraftListCont';

import styles from '../styles/PostDraftButtonPres.module.scss';
import { useModalStore } from '@/shared/stores/useModalStore';

export default function PostDraftButtonPres() {
  const { action } = useModalStore();

  return (
    <div className={styles.toggleButtonWrapper}>
      <button className={styles.toggleButton}>임시저장</button>
      <button
        className={styles.toggleButton}
        onClick={() => action.open(<PostDraftCont />)}
      >
        10
      </button>
    </div>
  );
}
