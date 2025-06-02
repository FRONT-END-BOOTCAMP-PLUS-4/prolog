'use client';

import { useState } from "react";

export default function NotificationReadCont() {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const submitRead = (idx?: number) => {
    fetch('/api/member/notifications', {
      method: 'PUT',
      body: JSON.stringify(idx ?? "")
    }).then( res =>  res.json())
    .then( data => setIsSuccess(data.data))
  };

  return { submitRead, isSuccess };
}
