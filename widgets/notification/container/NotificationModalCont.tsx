import { useState, useEffect } from 'react';
import NotificationModalPres from '../presentational/NotificationModalPres';

export default function NotificationModalCont() {
  const [deleteMode, setDeleteMode] = useState<boolean>(false);
  const [allNotificationIds, setAllNotificationIds] = useState<number[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(()=>{
    fetch('/api/member/notifications')
  },[])

  const toggleSelect = (notificationItemId: number) => {
    setSelectedIds((prev) =>
      prev.includes(notificationItemId)
        ? prev.filter((i) => i !== notificationItemId)
        : [...prev, notificationItemId],
    );
  };

  const onSelectAll = () => {
    if (selectedIds.length === allNotificationIds.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(allNotificationIds);
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

  if (!isOpen) return null;

  return (
    <NotificationModalPres
      deleteMode={deleteMode}
      selectedIds={selectedIds}
      onToggleSelect={toggleSelect}
      onCancel={cancelDeleteMode}
      onToggleDeleteMode={startDeleteMode}
      setAllNotificationIds={setAllNotificationIds}
      onSelectAll={onSelectAll}
      onClose={() => setIsOpen(false)}
    />
  );
}
