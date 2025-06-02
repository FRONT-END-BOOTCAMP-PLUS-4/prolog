import styles from '../styles/DeleteButtonPres.module.scss';

export default function DeletePres({ onDelete }: { onDelete: () => void }) {
  return (
    <button className={styles.actionButton} onClick={onDelete}>
      삭제
    </button>
  );
}