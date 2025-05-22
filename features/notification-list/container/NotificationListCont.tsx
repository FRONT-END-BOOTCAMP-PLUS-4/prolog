'use client';

import { useEffect, useState } from 'react';
import { NotificationItemType } from '../types';
import NotificationListPres from '../presentational/NotificationListPres';

type Props = {
  deleteMode: boolean;
  selectedIds: number[];
  onToggleSelect: (id: number) => void;
};

const dummyNotifications: NotificationItemType[] = [
  {
    id: 1,
    userNickname: 'UserNickName1',
    type: 'comment',
    content: '댓글 내용',
    postTitle: '게시글 제목',
    postId: '1',
    date: '2025-01-01',
    isRead: false,
  },
  {
    id: 2,
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
    id: 3,
    userNickname: 'UserNickName3',
    type: 'comment',
    content: '댓글 내용',
    postTitle: '게시글 제목',
    postId: '2',
    date: '2025-01-03',
    isRead: true,
  },
  {
    id: 4,
    userNickname: 'UserNickName4',
    type: 'post',
    content: '게시글 내용',
    postTitle: '게시글 제목',
    postId: '1',
    date: '2025-01-04',
    isRead: true,
  },
  {
    id: 5,
    userNickname: 'UserNickName5',
    type: 'comment',
    content: '댓글 내용',
    postTitle: '게시글 제목',
    postId: '1',
    date: '2025-01-05',
    isRead: false,
  },
  {
    id: 6,
    userNickname: 'UserNickName6',
    type: 'post',
    content: '게시글 내용',
    postTitle: '게시글 제목',
    postId: '2',
    date: '2025-01-06',
    isRead: false,
  },
];

export default function NotificationListCont({
  deleteMode,
  selectedIds,
  onToggleSelect,
}: Props) {
  const [list, setList] = useState<NotificationItemType[]>([]);

  useEffect(() => {
    console.log('GET 알림 리스트');
    setList(dummyNotifications);
  }, []);

  return (
    <NotificationListPres
      list={list}
      deleteMode={deleteMode}
      selectedIds={selectedIds}
      onToggleSelect={onToggleSelect}
    />
  );
}
