import { useEffect, useState } from 'react';
import { NotificationListCont } from '@/features/notification-list';
import NotificationModalPres from '../presentational/NotificationModalPres';
import { NotificationReadCont } from '@/features/notification-read';
import { NotificationDeleteCont } from '@/features/notification-delete'

export default function NotificationModalCont() {

  const { submitRead, isSuccess } = NotificationReadCont();
  const { submitDelete, deleteStatus } = NotificationDeleteCont();
  const { notificationList } = NotificationListCont(deleteStatus);

  console.log("notificationList:",notificationList);
  
  const [selectList, setSelectList] = useState<number[]>([]);
  const clickSelecterId = (idx: number) => {
    setSelectList((prev) =>
      prev.includes(idx) ? prev.filter((id) => id !== idx) : [...prev, idx],
    );
  };

  const allCheck = () => {
    const allIds = notificationList.map(item => item.id);
    setSelectList(allIds);
  };

  const allCancel = () => setSelectList([]);

  return (
    <NotificationModalPres
      allCheck={allCheck}
      allCancel={allCancel}
      notificationList={notificationList}
      selectList={selectList}
      clickSelecterId={clickSelecterId}
      submitRead={submitRead}
      isSuccess={isSuccess}
      submitDelete={submitDelete}
    />
  );
}
