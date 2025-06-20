'use client';

import { useEffect, useState } from 'react';
import { type Notification} from '../types'

export default function NotificationListCont(again: number | null) {
  const [notificationList, setNotificationList] = useState<Notification[]>([]);
  
  useEffect(() => {
    fetch('/api/member/notifications')
      .then((res) => res.json())
      .then((data) => setNotificationList(data.data));
  }, [again]);

  return { notificationList };
}
