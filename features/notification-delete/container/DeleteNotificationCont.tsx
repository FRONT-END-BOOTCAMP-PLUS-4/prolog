'use client';
import Button from '@/shared/ui/button';
import { useEffect } from 'react';

type Props = {
  selectedIds: number[];
};

export default function DeleteNotificationCont({ selectedIds }: Props) {
  const handleDelete = () => {
    console.log('삭제하기', selectedIds);
  };

  return (
    <Button size="small" onClick={handleDelete}>
      삭제하기
    </Button>
  );
}
