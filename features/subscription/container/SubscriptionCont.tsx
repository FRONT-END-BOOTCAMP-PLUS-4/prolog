'use client';
//package
import { useState } from 'react';
//layer
import SubscriptionPres from '../presentational/SubscriptionPres';

export default function SubscriptionCont() {
  const [isFollowing, setIsFollowing] = useState(false);
  console.log(isFollowing);
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
