'use client';

// package
import { useEffect, useState } from 'react';

export default function NotificationDeleteCont() {
  const [deleteStatus, setDeleteStatus] = useState<number | null>(null);

  const submitDelete = (idx: number[]) => {
    if (!idx.length) return;
    fetch('/api/member/notifications', {
      method: 'DELETE',
      body: JSON.stringify(idx),
    })
      .then((res) => res.json())
      .then((data) => setDeleteStatus(data.status));
  };

  useEffect(()=>{
    if(!deleteStatus) return;

    switch(deleteStatus){
      case 200: 
        setDeleteStatus(null);
        break;
      default:
        confirm("삭제실패");
        break;
      
    }

  },[deleteStatus])

  return { submitDelete, deleteStatus };
}
