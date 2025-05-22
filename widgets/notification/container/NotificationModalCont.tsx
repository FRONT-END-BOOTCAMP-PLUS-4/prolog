import { useState } from 'react';
import NotificationModalPres from '../presentational/NotificationModalPres';

import type { NotificationItemType } from '@/features/notification-list/types';

export default function NotificationModalCont() {
  const [notifications, setNotifications] = useState();
  const [deleteMode, setDeleteMode] = useState<boolean>(false);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const toggleSelect = (notificationItemId: number) => {
    setSelectedIds((prev) =>
      prev.includes(notificationItemId)
        ? prev.filter((i) => i !== notificationItemId)
        : [...prev, notificationItemId],
    );
  };

  const deleteSelected = () => {
    setNotifications((prev) => prev.filter((n) => !selectedIds.includes(n.id)));
    setDeleteMode(false);
    setSelectedIds([]);
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
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
      notifications={notifications}
      deleteMode={deleteMode}
      selectedIds={selectedIds}
      onToggleSelect={toggleSelect}
      onDelete={deleteSelected}
      onCancel={cancelDeleteMode}
      onToggleDeleteMode={startDeleteMode}
      onSelectAll={toggleSelectAll}
      onMarkAllAsRead={markAllAsRead}
      onClose={() => console.log('닫기')}
    />
  );
}
