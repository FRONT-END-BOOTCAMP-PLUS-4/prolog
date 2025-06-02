import Button from '@/shared/ui/button';
import { useEffect, useState } from 'react';

type FollowingProps = {
  isFollowing: boolean | null;
  followerHandler: () => void;
};

export default function SubscriptionPres({
  isFollowing,
  followerHandler,
}: FollowingProps) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 1300);

    return () => clearTimeout(timer); // cleanup
  }, []);

  if (!showButton) {
    return (
      <div className="w-[80px] h-[32px] rounded bg-gray-200 animate-pulse" />
    );
  }
  return (
    <>
      <div onClick={followerHandler}>
        <Button variants={isFollowing ? 'secondary' : 'active'} size="small">
          {isFollowing ? '팔로잉' : '팔로우'}
        </Button>
      </div>
    </>
  );
}
