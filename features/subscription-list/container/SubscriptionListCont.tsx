'use client';
import { useState } from 'react';
//slice
import SubscriptionListPres from '../presentational/SubscriptionListPres';

export default function SubscriptionListCont() {
  const followerList = Array(8).fill({
    nickName: 'userNickName',
    profileImg: '/svgs/profile.svg',
  });
  const [isFollow, setIsFollow] = useState<boolean>(true);

  const handleFollowListDisplay = () => {
    setIsFollow((prev) => !prev);
  };
  return (
    <SubscriptionListPres
      followerList={followerList}
      handleFollowListDisplay={handleFollowListDisplay}
      isFollow={isFollow}
    />
  );
}
