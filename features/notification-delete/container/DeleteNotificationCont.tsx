'use client';
import Button from '@/shared/ui/button';

interface Props {
  onConfirm: () => void;
}

export default function DeleteNotificationCont({ onConfirm }: Props) {
  return (
    <Button size="small" onClick={onConfirm}>
      삭제하기
    </Button>
  );
}
