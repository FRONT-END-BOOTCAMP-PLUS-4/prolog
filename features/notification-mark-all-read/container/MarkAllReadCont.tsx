'use client';

// layer
import Button from '@/shared/ui/button';

export default function MarkAllReadCont() {
  const userId = 1;
  const handleClick = () => {
    console.log(`${userId}전체 읽음 처리`);
  };

  return (
    <Button style={{ border: 'none' }} size="small" onClick={handleClick}>
      전체읽음
    </Button>
  );
}
