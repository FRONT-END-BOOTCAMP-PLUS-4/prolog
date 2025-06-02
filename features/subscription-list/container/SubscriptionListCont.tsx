'use client';
import { useState } from 'react';
//slice
import SubscriptionListPres from '../presentational/SubscriptionListPres';
import { SubscribeUser } from '@/views/story/profile-card/types';

type SubscribeProps = {
  followList: SubscribeUser;
  followerList: SubscribeUser;
};
export default function SubscriptionListCont({
  followList,
  followerList,
}: SubscribeProps) {
  const [isFollow, setIsFollow] = useState<boolean>(true);

  const handleFollowListDisplay = () => {
    setIsFollow((prev) => !prev);
  };
  return (
    <>
      <SubscriptionListPres
        followList={followList}
        followerList={followerList}
        handleFollowListDisplay={handleFollowListDisplay}
        isFollow={isFollow}
      />
    </>
  );
}
