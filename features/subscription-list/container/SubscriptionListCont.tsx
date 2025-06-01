'use client';
import { useState } from 'react';
//slice
import SubscriptionListPres from '../presentational/SubscriptionListPres';
import { SubscribeUser } from '@/views/story/profile-card/types';

type SubscribeProps = {
  followers: SubscribeUser;
  following: SubscribeUser;
};
export default function SubscriptionListCont({
  followers,
  following,
}: SubscribeProps) {
  const [isFollow, setIsFollow] = useState<boolean>(true);

  const handleFollowListDisplay = () => {
    setIsFollow((prev) => !prev);
  };
  return (
    <SubscriptionListPres
      followers={followers}
      following={following}
      handleFollowListDisplay={handleFollowListDisplay}
      isFollow={isFollow}
    />
  );
}
