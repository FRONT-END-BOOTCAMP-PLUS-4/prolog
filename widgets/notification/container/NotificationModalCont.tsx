import { useState } from 'react';
import NotificationModalPres from '../presentational/NotificationModalPres';

export default function NotificationModalCont() {
  const [deleteMode, setDeleteMode] = useState<boolean>(false);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const toggleSelect = (notificationItemId: number) => {
    setSelectedIds((prev) =>
      prev.includes(notificationItemId)
        ? prev.filter((i) => i !== notificationItemId)
        : [...prev, notificationItemId],
    );
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === notifications.length) {
      setSelectedIds([]); // 전체 해제
    } else {
      setSelectedIds(notifications.map((n) => n.id)); // 전체 선택
    }
  };

  const cancelDeleteMode = () => {
    setDeleteMode(false);
    setSelectedIds([]);
  };

  const startDeleteMode = () => {
    setDeleteMode(true);
    setSelectedIds([]);
  };

  return (
    <NotificationModalPres
      deleteMode={deleteMode}
      selectedIds={selectedIds}
      onToggleSelect={toggleSelect}
      onCancel={cancelDeleteMode}
      onToggleDeleteMode={startDeleteMode}
      onSelectAll={toggleSelectAll}
      onClose={() => console.log('닫기')}
    />
  );
}
