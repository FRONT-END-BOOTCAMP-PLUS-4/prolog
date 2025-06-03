'use client';
import { useEffect, useState, useRef } from 'react';
import SubscriptionPres from '../presentational/SubscriptionPres';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';

interface SubscriptionContProps {
  userId: string;
  onFollowStatusChange?: (isFollowing: boolean) => void;
}

export default function SubscriptionCont({
  userId,
  onFollowStatusChange,
}: SubscriptionContProps) {
  const { data: session, status } = useSession();
  const [isFollowing, setIsFollowing] = useState<boolean | null>(null);
  const [isReady, setIsReady] = useState(false);
  const hasInitialized = useRef(false);

  const followerHandler = () => {
    if (!isReady) return; // 준비되지 않으면 클릭 무시

    if (session?.user.id === userId) {
      return toast.error('자기자신을 팔로워 할 수 없습니다.');
    }

    setIsFollowing((prev) => !prev);
  };

  // 세션 상태 확인 및 팔로우 상태 초기화
  useEffect(() => {
    const initializeFollowStatus = async () => {
      if (status === 'loading') return;

      if (status === 'authenticated' && session?.user?.id) {
        try {
          const response = await fetch(
            `/api/member/subscription?id=${userId}&currentUserId=${session.user.id}`,
          );
          const data = await response.json();
          setIsFollowing(data === true);
        } catch (error) {
          console.error('팔로우 상태 확인 실패:', error);
          setIsFollowing(false);
        }
      } else {
        setIsFollowing(false);
      }

      setIsReady(true);
      hasInitialized.current = true;
    };

    initializeFollowStatus();
  }, [userId, status, session?.user?.id]);

  // 팔로우 상태 변경 처리
  useEffect(() => {
    if (!hasInitialized.current || !isReady || isFollowing === null) return;

    const updateFollowStatus = async () => {
      if (status !== 'authenticated' || !session?.user) return;

      try {
        const response = await fetch('/api/member/subscription', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            isFollowing,
            userId,
            id: session.user.id,
          }),
        });

        if (response.ok) {
          onFollowStatusChange?.(isFollowing);
        }
      } catch (error) {
        console.error('팔로우 상태 변경 실패:', error);
        setIsFollowing((prev) => !prev); // 롤백
        toast.error('팔로우 상태 변경에 실패했습니다.');
      }
    };

    updateFollowStatus();
  }, [isFollowing, status, session, userId, onFollowStatusChange, isReady]);

  if (!isReady) {
    return <div className="h-8 bg-gray-200 rounded animate-pulse w-20"></div>;
  }

  return (
    <SubscriptionPres
      isFollowing={isFollowing}
      followerHandler={followerHandler}
    />
  );
}
