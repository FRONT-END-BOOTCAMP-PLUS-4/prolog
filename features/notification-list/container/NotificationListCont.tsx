'use client';

import { useEffect, useState } from 'react';
import NotificationListPres from '../presentational/NotificationListPres';
import { stripMarkdown } from '@/shared/utils/stripmarkdown';

export type Notification = {
  id: number;
  type: number;
  postsId: number;
  senderId: string;
  checkStatus: number;
  createAt: string;
  title: string;
  content: string;
  senderName: string;
  senderProfileImg: string | null;
  comment_content: string | null;
};

export default function NotificationListCont() {
  // 상위 props 대기
  const [isSelect, setIsSelect] = useState<boolean>(false);
  // 상위 props 대기
  const [selectList, setSelectList] = useState<number[]>([]);
  const clickSelecterId = (idx: number) => {
    setSelectList([...selectList, idx]);
  };

  const [notificationList, setNotificationList] = useState<Notification[]>([]);
  useEffect(() => {
    fetch('/api/member/notifications')
      .then((res) => res.json())
      .then((data) => setNotificationList(data.data));
  }, []);

  return (
    <NotificationListPres
      notificationList={notificationList}
      isSelect={isSelect}
      selecterId={clickSelecterId}
    />
  );
}
