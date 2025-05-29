'use client';
//package
import { useEffect, useState } from 'react';
//slice
import SubscriptionPres from '../presentational/SubscriptionPres';
import { useSession } from 'next-auth/react';

export default function SubscriptionCont() {
  const { data: session, status } = useSession();
  console.log(session);
  const [isFollowing, setIsFollowing] = useState(false);
  const followerHandler = () => {
    setIsFollowing((prev) => !prev);
  };
  useEffect(() => {
    const subscribeHandler = async () => {
      if (status === 'authenticated') {
        const { id } = session.user;
        const response = await fetch(`/api/subscription?user=${id}`);
      }
      subscribeHandler();
    };
  }, []);
  return (
    <SubscriptionPres
      isFollowing={isFollowing}
      followerHandler={followerHandler}
    />
  );
}
