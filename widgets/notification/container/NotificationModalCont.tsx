import { useState, useEffect } from 'react';
import NotificationModalPres from '../presentational/NotificationModalPres';

/*
  notification-list: GET요청 
  notification-delete: DELETE 요청
  nofification-check: PUT 요청


  [widgets]
  1. 체크된 알람을 알기위한 useState 필요
  2. 체크 상태로 전환하기위한 useState 필요
  3. 삭제 클릭시 DELETE 버튼 출력
  4. 전체선택시,


  [GET]
  1. 자체적으로 GET요청을 하여 알람리스트를 그려야 한다.
  2. 상위에서 체크전환, 체크알람리스트 useState를 props로 받아야함
  
  [DELETE]
  1. widgets에서 체크된 알람리스트를 받아야함

  [PUT]
  1. 전체읽음은 상위에서 전달받을 Props는 존재하지않음
  2. 개별적인 PUT은 알람ID를 Props로 받아야함

*/

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
