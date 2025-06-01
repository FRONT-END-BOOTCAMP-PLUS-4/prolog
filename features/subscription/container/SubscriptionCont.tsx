'use client';
//package
import { useState } from 'react';
//slice
import SubscriptionPres from '../presentational/SubscriptionPres';

export default function SubscriptionCont() {
  const [isFollowing, setIsFollowing] = useState(false);
  const followerHandler = () => {
    setIsFollowing((prev) => !prev);
  };

  return (
    <SubscriptionPres
      isFollowing={isFollowing}
      followerHandler={followerHandler}
    />
  );
}
