'use client';

// layer
import Button from '@/shared/ui/button';

type Props = {
  selectedIds: number[];
};

export default function DeleteNotificationCont({ selectedIds }: Props) {
  const handleDelete = () => {
    console.log('삭제하기', selectedIds);
  };

  return (
    <Button style={{ border: 'none' }} size="small" onClick={handleDelete}>
      삭제
    </Button>
  );
}
