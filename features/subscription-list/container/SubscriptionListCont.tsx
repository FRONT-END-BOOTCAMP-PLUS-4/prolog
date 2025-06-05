'use client';
import { useState } from 'react';
//slice
import SubscriptionListPres from '../presentational/SubscriptionListPres';
import { SubscribeUser } from '@/views/story/profile-card/types';

type SubscribeProps = {
  followList: SubscribeUser;
  followerList: SubscribeUser;
  isFollow: boolean;
};
export default function SubscriptionListCont({
  followList,
  followerList,
  isFollow,
}: SubscribeProps) {
  const [followState, setFollowState] = useState(isFollow);

  const handleFollowListDisplay = (value: boolean) => {
    setFollowState(value);
  };
  return (
    <>
      <SubscriptionListPres
        followList={followList}
        followerList={followerList}
        handleFollowListDisplay={handleFollowListDisplay}
        isFollow={followState}
      />
    </>
  );
}
