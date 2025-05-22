import { useState } from 'react';
import NotificationModalPres from '../presentational/NotificationModalPres';

import type { NotificationItemType } from '@/features/notification-item/types';

const dummyNotifications: NotificationItemType[] = [
  {
    id: '1',
    userNickname: 'UserNickName1',
    type: 'comment',
    content: '댓글 내용',
    postTitle: '게시글 제목',
    postId: '1',
    date: '2025-01-01',
    isRead: false,
  },
  {
    id: '2',
    userProfileImage: '/svgs/profile.svg',
    userNickname: 'UserNickName2',
    type: 'post',
    content: '게시글 내용',
    postTitle: '게시글 제목',
    postId: '2',
    date: '2025-01-02',
    isRead: false,
  },
  {
    id: '3',
    userNickname: 'UserNickName3',
    type: 'comment',
    content: '댓글 내용',
    postTitle: '게시글 제목',
    postId: '2',
    date: '2025-01-03',
    isRead: true,
  },
  {
    id: '4',
    userNickname: 'UserNickName4',
    type: 'post',
    content: '게시글 내용',
    postTitle: '게시글 제목',
    postId: '1',
    date: '2025-01-04',
    isRead: true,
  },
  {
    id: '5',
    userNickname: 'UserNickName5',
    type: 'comment',
    content: '댓글 내용',
    postTitle: '게시글 제목',
    postId: '1',
    date: '2025-01-05',
    isRead: false,
  },
  {
    id: '6',
    userNickname: 'UserNickName6',
    type: 'post',
    content: '게시글 내용',
    postTitle: '게시글 제목',
    postId: '2',
    date: '2025-01-06',
    isRead: false,
  },
];

export default function NotificationModalCont() {
  const [notifications, setNotifications] = useState(dummyNotifications);
  const [deleteMode, setDeleteMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
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
