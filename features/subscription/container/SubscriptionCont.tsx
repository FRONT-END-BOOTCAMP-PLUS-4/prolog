'use client';
//package
import { useEffect, useState, useRef } from 'react';
//slice
import SubscriptionPres from '../presentational/SubscriptionPres';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
export default function SubscriptionCont({ userId }: { userId: string }) {
  const { data: session, status } = useSession();
  const [isFollowing, setIsFollowing] = useState<boolean | null>(null);
  const isFirstRender = useRef(true);

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
    setIsFollowing((prev) => !prev);
  };
  useEffect(() => {
    const checkFollowStatus = async () => {
      if (status === 'authenticated' && session?.user?.id) {
        try {
          const response = await fetch(
            `/api/member/subscription?id=${userId}&currentUserId=${session.user.id}`,
          );
          const data = await response.json();
          if (data === true) {
            setIsFollowing(true);
          } else {
            setIsFollowing(false);
          }
        } catch (error) {
          console.error('팔로우 상태 확인 실패:', error);
        }
      }
    };

    checkFollowStatus();
  }, [userId]);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const toggleSubscribeHandler = async () => {
      if (status === 'unauthenticated') {
        throw new Error('로그인이 필요합니다');
      }
      if (status === 'authenticated') {
        if (!session.user) {
          throw new Error('User information is missing from session');
        }
        const { email, id } = session.user;
        try {
          const response = await fetch('/api/member/subscription', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({ isFollowing, userId, id }),
          });
          const data = await response.json();
        } catch (error) {}
      }
    };
    toggleSubscribeHandler();
  }, [isFollowing]);
  return (
    <SubscriptionPres
      isFollowing={isFollowing}
      followerHandler={followerHandler}
    />
  );
}
