'use client';
import Button from '@/shared/ui/button';

export default function MarkAllReadCont() {
  const handleClick = () => {
    console.log('전체 읽음 처리');
  };

  return (
    <Button size="small" onClick={handleClick}>
      전체읽음
    </Button>
  );
}
