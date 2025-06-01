'use client';
//package
import { useEffect, useState, useRef } from 'react';
//slice
import SubscriptionPres from '../presentational/SubscriptionPres';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';

export default function SubscriptionCont() {
  const { data: session, status } = useSession();
  const [isFollowing, setIsFollowing] = useState(false);
  const isFirstRender = useRef(true);
  const pathname = usePathname();
  const segments = pathname.split('/');
  const email = segments[1]; // "mjhn010@naver.com"
  const prefix = email?.split('@')[0]; // "mjhn010"

  const followerHandler = () => {
    setIsFollowing((prev) => !prev);
  };
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
        console.log(session.user);
        const { email, id } = session.user;
        try {
          const response = await fetch('/api/member/subscription', {
            method: 'POST',
            body: JSON.stringify({ isFollowing, prefix, id }),
          });
          const data = await response.json();
          console.log(data);
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
