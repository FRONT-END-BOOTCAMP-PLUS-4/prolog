import styles from '../styles/EditButtonPres.module.scss';

export default function EditPres({ onEdit }: { onEdit: () => void }) {
  return (
    <button className={styles.actionButton} onClick={onEdit}>
      수정
    </button>
  );
}
