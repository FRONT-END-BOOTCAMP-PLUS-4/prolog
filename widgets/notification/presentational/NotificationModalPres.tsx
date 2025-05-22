// package
import { Cross1Icon } from '@radix-ui/react-icons';
// slice
import styles from '../styles/NotificationModalPres.module.scss';
import Button from '@/shared/ui/button';

type Props = {
  items: React.ReactElement[];
  deleteMode: boolean;
  selectedCount: number;
  onDelete: () => void;
  onCancel: () => void;
  onToggleDeleteMode: () => void;
  onSelectAll: () => void;
  onMarkAllAsRead: () => void;
  onClose: () => void;
};

export default function NotificationModalPres({
  items,
  deleteMode,
  selectedCount,
  onDelete,
  onCancel,
  onToggleDeleteMode,
  onSelectAll,
  onMarkAllAsRead,
  onClose,
}: Props) {
  return (
    <div className={styles.modal}>
      <button className={styles.close} onClick={onClose}>
        <Cross1Icon />
      </button>

      {items.length === 0 ? (
        <p className={styles.empty}>알람 내역이 없어요</p>
      ) : (
        <>
          <div className={styles.list}>{items}</div>
          <div className={styles.footer}>
            {deleteMode ? (
              <div className={styles.deleteMode}>
                <div className={styles.deleteModeInner}>
                  <Button size="small" onClick={onDelete}>
                    삭제하기 {selectedCount}
                  </Button>
                  <Button size="small" onClick={onSelectAll}>
                    전체선택
                  </Button>
                </div>
                <div className={styles.deleteModeInner}>
                  <Button size="small" onClick={onCancel}>
                    취소
                  </Button>
                  <Button size="small" onClick={onCancel}>
                    완료
                  </Button>
                </div>
              </div>
            ) : (
              <div className={styles.normalMode}>
                <Button size="small" onClick={onMarkAllAsRead}>
                  전체읽음
                </Button>
                <Button size="small" onClick={onToggleDeleteMode}>
                  삭제하기
                </Button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
