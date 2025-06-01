'use client';

import { useEffect, useState } from 'react';
import { NotificationItemType } from '../types';
import NotificationListPres from '../presentational/NotificationListPres';

export type Notification = {
  idx: number,
  userImage: string | null,
  userName: string,
  notificationType: number,
  content: string,
  title: string,
  date: string,
  postsId: number,
  isRead: boolean,
}

export default function NotificationListCont(props) {
  const [isSelect, setIsSelect] = useState<boolean>(false);
  const [selectList, setSelectList] = useState<number[]>([]);
  const clickSelecterId = ( idx: number) => {
    setSelectList([...selectList, idx])
  }
  const [notificationList, setNotificationList] = useState<Notification[]>([{
    idx: 1,
    userImage: null,
    userName: 'test1',
    notificationType: 1,
    content: "게시글 내용입니다.",
    title: "게시글 제목",
    date: '2025-05-01',
    postsId: 1,
    isRead: true,
  },
  {
    idx: 2,
    userImage: null,
    userName: 'test2',
    notificationType: 0,
    content: "댓글 내용입니다.",
    title: "게시글 제목",
    date: '2025-05-01',
    postsId: 2,
    isRead: false,
  }
]);

  return <NotificationListPres notificationList={notificationList} isSelect={isSelect} selecterId={clickSelecterId}/>;
}
