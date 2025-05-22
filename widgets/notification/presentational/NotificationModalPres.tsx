// package
import { Cross1Icon } from '@radix-ui/react-icons';
// slice
import styles from '../styles/NotificationModalPres.module.scss';
import Button from '@/shared/ui/button';
import { NotificationItemType } from '@/features/notification-item/types';
import { NotificationItemCont } from '@/features/notification-item';

type Props = {
  notifications: NotificationItemType[];
  deleteMode: boolean;
  selectedIds: string[];
  onToggleSelect: (id: string) => void;
  onDelete: () => void;
  onCancel: () => void;
  onToggleDeleteMode: () => void;
  onSelectAll: () => void;
  onMarkAllAsRead: () => void;
  onClose: () => void;
};

export default function NotificationModalPres({
  notifications,
  deleteMode,

  selectedIds,
  onToggleSelect,
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

      {notifications.length === 0 ? (
        <p className={styles.empty}>알람 내역이 없어요</p>
      ) : (
        <>
          <div className={styles.list}>
            {notifications.map((n) => (
              <NotificationItemCont
                key={n.id}
                item={n}
                deleteMode={deleteMode}
                selected={selectedIds.includes(n.id)}
                onToggleSelect={onToggleSelect}
              />
            ))}
          </div>{' '}
          <div className={styles.footer}>
            {deleteMode ? (
              <div className={styles.deleteMode}>
                <div className={styles.deleteModeInner}>
                  <Button size="small" onClick={onDelete}>
                    삭제하기 {selectedIds.length}
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
