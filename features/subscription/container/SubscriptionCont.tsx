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
  const [isInitialized, setIsInitialized] = useState(false);
  const isFirstRender = useRef(true);
  const isUpdating = useRef(false);

  const followerHandler = () => {
    if (session?.user.id === userId) {
      return toast.error('자기자신을 팔로워 할 수 없습니다.', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
      });
    }

    if (isUpdating.current) return; // 업데이트 중이면 중복 클릭 방지
    setIsFollowing((prev) => !prev);
  };

  // 초기 팔로우 상태 확인
  useEffect(() => {
    const checkFollowStatus = async () => {
      if (status === 'authenticated' && session?.user?.id) {
        try {
          const response = await fetch(
            `/api/member/subscription?id=${userId}&currentUserId=${session.user.id}`,
          );
          const data = await response.json();
          setIsFollowing(data === true);
          setIsInitialized(true);
        } catch (error) {
          console.error('팔로우 상태 확인 실패:', error);
          setIsInitialized(true);
        }
      } else if (status === 'unauthenticated') {
        setIsInitialized(true);
      }
    };

    checkFollowStatus();
  }, [userId, status, session?.user?.id]);

  // 팔로우 상태 변경 처리
  useEffect(() => {
    if (isFirstRender.current || !isInitialized) {
      isFirstRender.current = false;
      return;
    }

    const toggleSubscribeHandler = async () => {
      if (isUpdating.current) return;
      isUpdating.current = true;

      try {
        if (status === 'unauthenticated') {
          throw new Error('로그인이 필요합니다');
        }

        if (status === 'authenticated') {
          if (!session.user) {
            throw new Error('User information is missing from session');
          }

          const { id } = session.user;
          const response = await fetch('/api/member/subscription', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({ isFollowing, userId, id }),
          });

          const data = await response.json();

          if (onFollowStatusChange && isFollowing !== null) {
            onFollowStatusChange(isFollowing);
          }
        }
      } catch (error) {
        console.error('구독 상태 변경 실패:', error);
        setIsFollowing((prev) => !prev);
        toast.error('팔로우 상태 변경에 실패했습니다.');
      } finally {
        isUpdating.current = false;
      }
    };

    toggleSubscribeHandler();
  }, [
    isFollowing,
    status,
    session,
    userId,
    onFollowStatusChange,
    isInitialized,
  ]);

  return (
    <SubscriptionPres
      isFollowing={isFollowing}
      followerHandler={followerHandler}
    />
  );
}
