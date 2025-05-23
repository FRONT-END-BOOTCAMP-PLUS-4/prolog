// package
import { Cross1Icon } from '@radix-ui/react-icons';
// slice
import styles from '../styles/NotificationModalPres.module.scss';
import Button from '@/shared/ui/button';
import { NotificationListCont } from '@/features/notification-list';
import { MarkAllReadCont } from '@/features/notification-mark-all-read';
import { DeleteNotificationCont } from '@/features/notification-delete';

type Props = {
  deleteMode: boolean;
  selectedIds: number[];
  onToggleSelect: (id: number) => void;
  setAllNotificationIds: (ids: number[]) => void;
  onSelectAll: () => void;
  onCancel: () => void;
  onToggleDeleteMode: () => void;
  onClose: () => void;
};

export default function NotificationModalPres({
  deleteMode,
  selectedIds,
  onToggleSelect,
  setAllNotificationIds,
  onSelectAll,
  onCancel,
  onToggleDeleteMode,
  onClose,
}: Props) {
  return (
    <div className={styles.modal}>
      <button className={styles.close} onClick={onClose}>
        <Cross1Icon />
      </button>

      <>
        <div className={styles.list}>
          <NotificationListCont
            deleteMode={deleteMode}
            selectedIds={selectedIds}
            setAllNotificationIds={setAllNotificationIds}
            onToggleSelect={onToggleSelect}
          />
        </div>
        <div className={styles.footer}>
          {deleteMode ? (
            <div className={styles.deleteMode}>
              <div className={styles.deleteModeInner}>
                <DeleteNotificationCont selectedIds={selectedIds} />
                <Button size="small" onClick={onSelectAll}>
                  전체선택
                </Button>
              </div>
              <div className={styles.deleteModeInner}>
                <Button size="small" onClick={onCancel}>
                  완료
                </Button>
              </div>
            </div>
          ) : (
            <div className={styles.normalMode}>
              <MarkAllReadCont />
              <Button size="small" onClick={onToggleDeleteMode}>
                삭제하기
              </Button>
            </div>
          )}
        </div>
      </>
    </div>
  );
}
